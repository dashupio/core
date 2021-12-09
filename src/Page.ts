
// import dependencies
import React from 'react';
import dotProp from 'dot-prop';
import ReactDOM from 'react-dom';

// Base
import Base from './util/Base';
import Query from './util/Query';
import Model from './Model';

/**
 * create Dashup
 */
export default class DashupPage extends Base {
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

  /**
   * get opts
   */
  async save() {
    // sanitise
    const sanitisedData = {
      type   : this.get('type'),
      data   : this.get('data'),
      user   : this.get('user'),
      color  : this.get('color'),
      title  : this.get('title'),
      order  : this.get('order'),
      parent : this.get('parent'),
    };

    // save model
    const result = await this.dashup.rpc({}, 'page.update', this.get('_id'), sanitisedData);

    // loop
    Object.keys(result).forEach((key) => {
      // set
      this.set(key, result[key]);
    });

    // set data
    return this;
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
      page   : this.get('_id'),
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
      page   : this.get('_id'),
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
      page   : this.get('_id'),
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
      page   : this.get('_id'),
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
  async view(selector, view, opts, type = 'page', struct = null) {
    // create element
    const el = React.createElement(this.dashup.View, { ...opts, ...{
      page   : this,
      dashup : this.dashup,

      view,
      type,
      struct : struct || this.get('type'),
    } });

    // mount app
    ReactDOM.render(el, document.querySelector(selector));

    // return el
    return el;
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
        email,
        password,
      });

      // throw error
      if (!result.success) throw new Error(result.message);

      // set data
      this.user = new Model(result.data, this.dashup);
      this.emit('user', this.user);

      // return user
      return this.user;
    };
    this.register = async (data) => {
      // call on dashup
      const result = await this.rpc('register', data);

      // throw error
      if (!result.success) throw new Error(result.message);

      // set data
      this.user = new Model(result.data, this.dashup);
      this.emit('user', this.user);

      // return user
      return this.user;
    };
    this.logout = async () => {
      // call on dashup
      await this.rpc('logout', {});

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
    // set cart
    this.cart = new Model({
      page     : this.get('_id'),
      products : [],
    }, this.dashup);

    // set cart
    const setCart = (result) => {
      // set data
      Object.keys(result).forEach((key) => {
        // products
        if (key === 'products') {
          // products
          return this.cart.set('products', result.products.map((product) => {
            // return product
            return {
              ...product,

              product : new Model(product.product, this.dashup),
            };
          }));
        }

        // set discount
        if (key === 'discount') {
          // set discount
          return this.cart.set('discount', result.discount ? new Model(result.discount, this.dashup) : null);
        }

        // set normal value
        this.cart.set(key, result[key]);
      });
    };

    // set user
    this.dashup.socket.on(`page.${this.get('_id')}.cart`, (result) => {
      // set data
      setCart(result);
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
        product : product._id || product.get('_id'),
      });

      // set cart
      setCart(result);
      this.emit('cart', this.cart);

      // return user
      return this.cart;
    };
    this.has = (product) => {
      // return
      return this.cart.get('products').find((p) => p.product.get('_id') === product._id || product.get('_id'));
    };
    this.code = async (discount) => {
      // call on dashup
      const result = await this.rpc('cart.code', {
        discount : discount ? discount._id || discount.get('_id') : null,
      });

      // set cart
      setCart(result);
      this.emit('cart', this.cart);

      // return user
      return this.cart;
    };
    this.count = () => {
      return Object.keys(this.cart.get('products')).reduce((accum, key) => {
        // return value
        return accum + this.cart.get(`products.${key}.count`);
      }, 0);
    };
    this.clear = async () => {
      // call on dashup
      const result = await this.rpc('cart.clear');

      // set cart
      setCart(result);
      this.emit('cart', this.cart);

      // return user
      return this.cart;
    };
    this.remove = async (product, opts = {}) => {
      // call on dashup
      const result = await this.rpc('cart.remove', {
        opts,
        product : product._id || product.get('_id'),
      });

      // set cart
      setCart(result);
      this.emit('cart', this.cart);

      // return user
      return this.cart;
    };

    // totals
    this.field = (type, field) => {
      // get fields
      let form;
      let page = this;

      // auth
      if (type === 'auth') {
        page = this.dashup.page(this.get('data.auth'));
        form = this.dashup.page(page.get('data.form'));
      } else {
        form = this.dashup.page(this.get(`data.${type}.form`));
      }

      // get fields
      return (form && form.get('data.fields') ? form.get('data.fields') : []).find(f => f.uuid === page.get(`data${type !== 'auth' ? `.${type}` : '.field'}.${field}`));
    };
    this.total = (products) => {
      // get total
      const total = (products || this.cart.get('products') || []).reduce((accum, { product, count }) => {
        // get field
        const productField = this.field('product', 'field') || {};

        // return value
        return accum + ((dotProp.get(product.get ? product.get() : product, `${productField.name || productField.uuid}.price`) || 0) * (count || 0));
      }, 0);

      // return total
      return total;
    };
    this.totals = (products) => {
      // get field
      const productField = this.field('product', 'field') || {};

      // return
      return Array.from((products || this.cart.get('products') || []).reduce((accum, { product }) => {
        // type
        const type = dotProp.get(product.get ? product.get() : product, `${productField.name || productField.uuid}.type`);

        // type
        if (type === 'subscription') {
          // type
          accum.add(dotProp.get(product.get ? product.get() : product, `${productField.name || productField.uuid}.period`) || 'monthly');
        } else {
          // add product
          accum.add(type);
        }

        // set
        return accum;
      }, new Set())).reduce((accum, type) => {
        // add total
        accum[type] = this.total([...((products || this.cart.get('products') || []).filter(({ product }) => {
          // type
          const t = dotProp.get(product.get ? product.get() : product, `${productField.name || productField.uuid}.type`);

          // type
          if (t === 'subscription') {
            // type
            return (dotProp.get(product.get ? product.get() : product, `${productField.name || productField.uuid}.period`) || 'monthly') === type;
          }

          // add product
          return t === type;
        }))]);

        // return accum
        return accum;
      }, {});
    };
    this.discount = (total) => {
      // total
      if (!total) total = this.total();

      // parse
      total = parseFloat(total);

      // check discount
      if (!this.cart.get('discount')) return 0;

      // check discount
      const discountField = this.field('discount', 'discount');

      // check field
      if (!discountField) return 0;

      // discount
      const actualDiscount = this.cart.get('discount').get(discountField.name || discountField.uuid);

      // chekc actual discount
      if (!actualDiscount) return 0;

      // check value
      if (!actualDiscount.type || actualDiscount.type === 'amount') {
        // return discount
        return parseFloat(actualDiscount.value || '0');
      }
      if (actualDiscount.type === 'percent') {
        // return discount
        return (parseFloat(actualDiscount.value || '0') / 100) * total;
      }

      // get discount
      return 0;
    };
    this.shipping = () => {
      return 0;
    };
  }

  /**
   * creates auth module
   */
  formInit() {
    // init model also for forms
    this.modelInit();

    // check login
    this.submit = async (data) => {
      // submit form
      const result = await this.dashup.action({
        type   : 'page',
        page   : this.get('data.model'),
        form   : this.get('_id'),
        model  : this.get('data.model'),
        struct : 'form',
      }, 'form.submit', data);

      // set data
      return new Model(result, this.dashup);
    };
  }

  /**
   * creates model methods
   */
  modelInit() {
    // create
    this.create = async (data) => {
      // submit form
      const result = await this.dashup.action({
        type   : 'page',
        page   : this.get('_id'),
        form   : this.get('data.forms.0'),
        model  : this.get('_id'),
        struct : 'form',
      }, 'form.submit', data);

      // set data
      return new Model(result, this.dashup);
    };

    // query and dones
    const queryBys = ['where', 'eq', 'gt', 'or', 'lt', 'gte', 'lte', 'skip', 'sort', 'limit', 'match', 'inc', 'ne', 'nin', 'in', 'or', 'and', 'sum', 'search', 'avg', 'find', 'count', 'findOne', 'findById', 'findByIds', 'listen', 'listenOne', 'listenById'];

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

    // enable batch
    this.batch = (queries) => {
      // return queries
      return this.dashup.rpc({
        type   : 'page',
        page   : this.get('_id'),
        struct : this.get('_id'),
      }, `model.query.batch`, queries);
    };
  }
}