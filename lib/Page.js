
// Base
const riot = require('riot');
const Base = require('../util/Base');
const Query = require('../util/Query');
const Model = require('./Model');
const shortid = require('shortid');

// cammel
const toCammel = (str) => {
  return str.split('-').join(' ').split('_').join(' ')
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
};

// set to window
if (typeof window !== 'undefined') window.dashupRiot = riot;

/**
 * create Dashup
 */
class DashupPage extends Base {
  /**
   * construct dashup section
   *
   * @param  {...any} args
   */
  constructor(...args) {
    // run super
    super(...args);

    // bind functions
    this.hook = this.hook.bind(this);
    this.view = this.view.bind(this);
    this.event = this.event.bind(this);
    this.action = this.action.bind(this);

    // render
    if (this[`${this.get('type')}Init`]) this[`${this.get('type')}Init`]();
  }

  // //////////////////////////////////////////////////////////////////////
  //
  // SUB METHODS
  //
  // //////////////////////////////////////////////////////////////////////

  /**
   * get opts
   */
  set(key, value) {
    // check type
    if (key === 'type') {
      if (this[`${value}Init`]) this[`${value}Init`]();
    }

    // return parent set
    return super.set(key, value);
  }

  /**
   * get opts
   */
  page(id, value) {
    // set value
    if (id && value) {
      // set
      this.dashup.pages.set(id, new DashupPage(value, this));

      // emit pages
      this.emit('pages', this.dashup.pages);
    }

    // return opts
    const page = Array.from(this.dashup.pages.values()).filter(s => s && s.get('parent') === this.get('_id')).find((s) => {
      // return find
      return s.get('_id') === id || `${(s.get('name') || '')}`.toLowerCase() === id.toLowerCase();
    });

    // return page
    return page;
  }


  // //////////////////////////////////////////////////////////////////////
  //
  // STANDARD METHODS
  //
  // //////////////////////////////////////////////////////////////////////

  /**
   * dashup rpc
   *
   * @param {*} name
   * @param  {...any} args
   */
  rpc(name, ...args) {
    // load component
    return this.dashup.rpc({
      type   : 'page',
      struct : this.get('type'),
    }, name, ...args);
  }

  /**
   * hook
   *
   * @param {*} name
   * @param {*} data
   */
  hook(name, ...args) {
    // call hook
    return this.dashup.hook({
      type   : 'page',
      struct : this.get('type'),
    }, name, ...args);
  }

  /**
   * hook
   *
   * @param {*} name
   * @param {*} data
   */
  event(name, ...args) {
    // call hook
    return this.dashup.event({
      type   : 'page',
      struct : this.get('type'),
    }, name, ...args);
  }

  /**
   * hook
   *
   * @param {*} name
   * @param {*} data
   */
  action(name, ...args) {
    // call hook
    return this.dashup.action({
      type   : 'page',
      struct : this.get('type'),
    }, name, ...args);
  }

  /**
   * create component
   *
   * @param {*} selector
   * @param {*} view
   * @param {*} opts
   */
  async view(selector, view, opts) {
    // tld
    const tld = `page.${this.get('type')}.${view}`.split('/').join('');

    // check if components has
    if (!this.dashup.get(`views.${tld}`)) {
      // loading
      if (!this.dashup.get(`views.loading.${tld}`)) {
        // rpc
        this.dashup.set(`views.loading.${tld}`, this.rpc('views', [view]));
      }

      // get view
      const [actualView] = await this.dashup.get(`views.loading.${tld}`);

      // create new function
      // eslint-disable-next-line no-new-func
      new Function(`return ${actualView.code}`)();

      // built view
      const builtView = window[actualView.uuid].default || window[actualView.uuid];

      // reset name
      builtView.name = toCammel(`v${shortid()}`);

      // register
      riot.register(builtView.name, builtView);

      // set to eden
      this.dashup.set(`views.${tld}`, builtView);
    }

    // create component
    const createComponent = riot.component(this.dashup.get(`views.${tld}`));

    // create component
    return createComponent(document.querySelector(selector), Object.assign({}, opts, {
      page   : this,
      dashup : this.dashup,
    }));
  }


  // //////////////////////////////////////////////////////////////////////
  //
  // BUILD METHODS
  //
  // //////////////////////////////////////////////////////////////////////

  /**
   * creates auth module
   */
  authInit() {
    // set user
    this.dashup.socket.on(`page.${this.get('_id')}.auth`, (result) => {
      // set data
      this.user = new Model(result, this.dashup);
      this.emit('user', this.user);
    });

    // check login
    this.login = async (email, password) => {
      // call on dashup
      const result = await this.rpc('login', {
        id : this.get('_id'),
        email,
        password,
      });

      // set data
      this.user = new Model(result, this.dashup);
      this.emit('user', this.user);

      // return user
      return this.user;
    };
    this.register = async (email, password, passworda) => {
      // call on dashup
      const result = await this.rpc('register', {
        id : this.get('_id'),
        email,
        password,
        passworda,
      });

      // set data
      this.user = new Model(result, this.dashup);
      this.emit('user', this.user);

      // return user
      return this.user;
    };
    this.logout = async () => {
      // call on dashup
      await this.rpc('logout', {
        id : this.get('_id'),
      });

      // set data
      this.user = null;
      this.emit('user', null);

      // return user
      return this.user;
    };

    // log
    this.exists = () => !!(this.user && this.user.get('_id'));
  }

  /**
   * creates auth module
   */
  chatInit() {
    // on message
    const onMessage = (message) => {
      // set data
      const messages = this.chat.get('messages') || [];

      // replace
      const found = messages.find(m => m.get('id') === message.id);

      // found
      if (found) {
        // get messages
        Object.keys(message).forEach(key => found.set(key, message[key]));
      } else {
        // push message
        message = new Model(message);

        // push
        messages.push(message);

        // emit
        this.emit('message', message);
      }

      // set messages
      this.chat.set('messages', messages);
      this.chat.emit('messages', messages);
    };

    // set user
    this.dashup.socket.on(`page.${this.get('_id')}.chat`, (result) => {
      // set data
      this.chat = new Model(result, this.dashup);
      this.emit('chat', this.chat);

      // check exists
      if (this.chat.get('subject')) {
        // listen
        this.dashup.socket.on(`chat.${this.chat.get('subject')}`, ({ type, data }) => {
          // type/data
          if (type === 'messages') data.forEach(onMessage);
        });
      }
    });

    // check login
    this.send = async ({ message }) => {
      // call on dashup
      const result = await this.rpc('chat.send', {
        id : this.get('_id'),
        message,
      });

      // on message
      onMessage(result);

      // return user
      return this.chat;
    };
    this.create = async (data) => {
      // call on dashup
      const result = await this.rpc('chat.create', {
        id : this.get('_id'),
        data,
      });

      // set data
      this.chat = new Model(result, this.dashup);
      this.emit('chat', this.chat);

      // check exists
      if (this.chat.get('subject')) {
        // listen
        this.dashup.socket.on(`chat.${this.chat.get('subject')}`, ({ type, data }) => {
          // type/data
          if (type === 'messages') data.forEach(onMessage);
        });
      }

      // return user
      return this.chat;
    };

    // log
    this.exists = () => !!(this.chat && this.chat.get('subject'));
  }

  /**
   * creates checkout methods
   */
  checkoutInit() {
    // CART

    // set cart
    this.cart = new Model({
      module   : this.get('_id'),
      products : {},
    }, this.dashup);

    // set user
    this.dashup.socket.on(`module.${this.get('_id')}.cart`, (result) => {
      // set data
      Object.keys(result).forEach(key => this.cart.set(key, result[key]));
      this.emit('cart', this.cart);
    });

    // cart
    this.add = async (product, count = 1, opts = {}) => {
      // check count
      if (count <= 0) {
        // remove
        return this.remove(product);
      }

      // call on dashup
      const result = await this.rpc('cart.add', {
        opts,
        count,
        id      : this.get('_id'),
        product : product._id || product.get('_id'),
      });

      // set value
      Object.keys(result).forEach(key => this.cart.set(key, result[key]));
      this.emit('cart', this.cart);

      // return user
      return this.cart;
    };
    this.has = (product) => {
      // return
      return this.cart.get(`products.${product._id || product.get('_id')}`);
    };
    this.count = () => {
      return Object.keys(this.cart.get('products')).reduce((accum, key) => {
        // return value
        return accum + this.cart.get(`products.${key}.count`);
      }, 0);
    };
    this.total = (withAll) => {
      // get total
      const total = Object.keys(this.cart.get('products')).reduce((accum, key) => {
        // return value
        return accum + (this.cart.get(`products.${key}.product.${this.get('data.product.field.name') || this.get('data.product.field.uuid')}`).price * this.cart.get(`products.${key}.count`));
      }, 0);

      // return calculated
      if (withAll) return total - this.discount() + this.shipping();

      // return total
      return total;
    };
    this.discount = () => {
      return 0;
    };
    this.shipping = () => {
      return 0;
    };
    this.remove = async (product) => {
      // call on dashup
      await this.rpc('cart.remove', {
        id      : this.get('_id'),
        product : product._id || product.get('_id'),
      });

      // set value
      this.cart.delete(`products.${product._id || product.get('_id')}`);
      this.emit('cart', this.cart);

      // return user
      return this.cart;
    };
  }

  /**
   * creates auth module
   */
  formInit() {
    // init model also for forms
    this.modelInit();

    // check login
    this.submit = async ({ id, user }, data) => {
      // await call
      const item = await this.rpc('form.submit', {
        id,
        user,

        ...data,
      }, {
        id : this.get('_id'),
      });

      // set data
      return new Model(item, this.dashup);
    };
  }

  /**
   * creates model methods
   */
  modelInit() {
    // create
    this.create = async (data) => {
      // save model
      const result = await this.rpc('model.create', data, {
        id : this.get('data.forms.0.id'),
      });

      // set data
      return new Model(result, this.dashup);
    };

    // query and dones
    const queryBys = ['where', 'eq', 'gt', 'or', 'lt', 'gte', 'lte', 'skip', 'sort', 'limit', 'match', 'inc', 'ne', 'nin', 'in', 'or', 'and', 'sum', 'find', 'findOne', 'findById', 'listen', 'listenOne', 'listenById'];

    // create calls
    queryBys.forEach((method) => {
      // create function
      this[method] = (...args) => {
        // create query
        const query = new Query(this.get('_id'), this.dashup);

        // return query
        return query[method](...args);
      };
    });
  }
}

// export dashup section
module.exports = DashupPage;
