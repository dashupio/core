
// require local dependencies
import io from 'socket.io-client';
import uuid from 'shortid';
import View from '@dashup/view';
import cookie from 'js-cookie';
import DashupRPC from '@dashup/rpc';

// require page
import Base from './util/Base';
import Query from './util/Query';

// require sections
import Page from './Page';
import Model from './Model';
import Section from './Section';

/**
 * create Dashup
 */
export default class Dashup extends Base {
  /**
   * construct Dashup
   *
   * @param {*} opts
   */
  constructor(opts) {
    // run super
    super();

    // set opts
    this.__opts = opts || {};
    this.__version = '0.0.2';

    // bind methods
    this.rpc = this.rpc.bind(this);
    this.hook = this.hook.bind(this);
    this.event = this.event.bind(this);
    this.build = this.build.bind(this);
    this.action = this.action.bind(this);

    // build
    this.building = this.build();
  }


  // //////////////////////////////////////////////////////////////////////
  //
  // BUILD METHODS
  //
  // //////////////////////////////////////////////////////////////////////

  /**
   * builds Dashup
   */
  async build() {
    // set session
    this.sessionID = this.__opts.sessionID || this.__opts.session;

    // Check cookie
    if (!this.sessionID && typeof window !== 'undefined') {
      // in frontend
      this.sessionID = cookie.get('dashup-session') || uuid();

      // set cookie
      cookie.set('dashup-session', this.sessionID, {
        expires : 7,
      });
    }

    // set session
    if (!this.sessionID) this.sessionID = uuid();

    // Run socket
    this.socket = this.__opts.connection || (this.__opts.io || io).connect(`${this.__opts.url || 'wss://dashup.com'}?api=v1${this.__opts.key ? `&key=${this.__opts.key}` : ''}&session=${this.sessionID}`, this.__opts.socket || {});
    this.duRPC = new DashupRPC(this.socket);

    // await connected
    const done = new Promise(resolve => this.once('_id', resolve));

    // create call
    this.socket.on('dashup', (result) => {
      // set data
      Object.keys(result).forEach(key => this.set(key, result[key]));
    });

    // types
    const classTypes = {
      page    : Page,
      section : Section,
    };

    // loop values
    [['page', 'pages'], ['section', 'sections']].forEach(([type, plural]) => {
      // check module
      this.socket.on(`dashup.${type}`, (data) => {
        // set items map
        if (!this.__data[plural]) this.__data[plural] = new Map();

        // item/action
        const item   = data[type];
        const { action } = data;

        // if change
        if (action === 'change') {
          // update
          const got = this.__data[plural].get(item._id) || new classTypes[type](item, this);

          // set values
          Object.keys(item).forEach((key) => {
            // set
            got.set(key, item[key]);
          });

          // set
          this.__data[plural].set(item._id, got);
        } else if (action === 'create') {
          // delete item
          this.__data[plural].set(item._id, new classTypes[type](item, this));
        } else if (action === 'remove') {
          // delete item
          this.__data[plural].delete(item._id);
        }

        // emit
        this.emit(plural, this.__data[plural]);
      });
    });

    // actives
    this.socket.on('dashup.active', (active) => {
      // current
      let newActives = this.__data.active || [];

      // remove old
      newActives = newActives.filter((a) => a.id !== active.id);

      // check page
      if (active.page) {
        newActives.push(active);
      }

      // set and emit
      this.__data.active = newActives;
      this.emit('active', this.__data.active);
    });

    // await done
    await done;
  }

  /**
   * creates call to namespaced methods
   *
   * @param {*} route
   * @param {*} body
   */
  rpc(opts, name, ...args) {
    // await rpc
    return this.duRPC.call({}, 'rpc', opts, name, args);
  }

  /**
   * creates call to namespaced methods
   *
   * @param {*} route
   * @param {*} body
   */
  hook(opts, name, ...args) {
    // await rpc
    return this.duRPC.call({}, 'hook', opts, name, args);
  }

  /**
   * creates call to namespaced methods
   *
   * @param {*} route
   * @param {*} body
   */
  event(opts, name, ...args) {
    // await rpc
    return this.duRPC.call({}, 'event', opts, name, args);
  }

  /**
   * creates call to namespaced methods
   *
   * @param {*} route
   * @param {*} body
   */
  action(opts, name, ...args) {
    // await rpc
    return this.duRPC.call({}, 'action', opts, name, args);
  }


  // //////////////////////////////////////////////////////////////////////
  //
  // SUB METHODS
  //
  // //////////////////////////////////////////////////////////////////////

  /**
   * get opts
   */
  page(id = '', value) {
    // set value
    if (id && value) {
      // set
      this.__data.pages.set(id, new Page(value, this));

      // emit pages
      this.emit('pages', this.__data.pages);

      // get
      return this.__data.pages.get(id);
    }

    // return opts
    const page = Array.from(this.__data.pages.values()).filter(s => s).find((s) => {
      // return find
      return s.get('_id') === id || `${(s.get('name') || '')}`.toLowerCase() === id.toLowerCase();
    });

    // return page
    return page;
  }

  /**
   * get opts
   */
  section(id = '', value) {
    // set value
    if (id && value) {
      // set
      this.__data.sections.set(id, new Page(value, this));

      // emit pages
      this.emit('sections', this.__data.sections);

      // get
      return this.__data.sections.get(id);
    }

    // return opts
    const section = Array.from(this.__data.sections.values()).filter(s => s).find((s) => {
      // return find
      return s.get('_id') === id || `${(s.get('name') || '')}`.toLowerCase() === id.toLowerCase();
    });

    // return page
    return section;
  }

  /**
   * get opts
   */
  set(key, value) {
    // types
    const classTypes = {
      pages    : Page,
      sections : Section,
    };

    // check items
    for (const type of ['sections', 'pages']) {
      // check type
      if (key === type) {
        // set items map
        if (!this.__data[type]) this.__data[type] = new Map();

        // loop items
        value.forEach((item) => {
          // check item
          if (this.__data[type].has(item._id)) {
            // current
            const current = this.__data[type].get(item._id);

            // set value
            Object.keys(item).forEach(key => current.set(key, item[key]));
          } else {
            this.__data[type].set(item._id, new classTypes[type](item, this));
          }
        });
        Array.from(this.__data[type].keys()).forEach((id) => {
          // delete item
          if (!value.find(item => item._id === id)) this.__data[type].delete(id);
        });

        // emit
        this.emit(type, this.__data[type]);
        this.emit('update');

        // return items
        return this.__data[type];
      }
    }

    // return parent set
    return super.set(key, value);
  }

  /**
   * check can
   *
   * @param param0
   * @param type
   */
  can(page, type) {
    // check if owner
    if ((this.get('acls') || []).find(a => a === true)) return true;

    // check find
    if (!type) {
      // return includes
      return (this.get('acls') || []).includes(page);
    }

    // return found
    return (this.get('acls') || []).includes(`${typeof page === 'string' ? page : page.get('_id')}.${type}`);
  }


  // //////////////////////////////////////////////////////////////////////
  //
  // STATIC METHODS
  //
  // //////////////////////////////////////////////////////////////////////

  /**
   * get opts
   */
  get opts() {
    // return opts
    return this.__opts;
  }

  /**
   * get view
   */
  get View() {
    // return opts
    return View;
  }

  /**
   * get opts
   */
  get Page() {
    // return opts
    return Page;
  }

  /**
   * get opts
   */
  get Model() {
    // return opts
    return Model;
  }

  /**
   * get opts
   */
  get Query() {
    // return opts
    return Query;
  }

  /**
   * get opts
   */
  get Section() {
    // return opts
    return Section;
  }
}
