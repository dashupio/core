// events
const dotProp = require('dot-prop');
const deepEqual = require('fast-deep-equal');
const { EventEmitter } = require('events');

/**
 * eden array
 */
class EdenArray extends Array {
  /**
   * create array
   *
   * @param  {...any} args
   */
  constructor(...args) {
    // super args
    super(...args);

    // create events
    this.__data = {};
    this.events = new EventEmitter();

    // bind
    this.get = this.get.bind(this);
    this.set = this.set.bind(this);
    this.deafen = this.deafen.bind(this);

    // events methods
    ['on', 'emit', 'once', 'removeListener'].forEach((method) => {
      // bind
      this[method] = (...ags) => {
        // proxy in this context
        this.events[method](...ags);
      };
    });
  }


  // //////////////////////////////////////////////////////////////////////
  //
  // GET/SET METHODS
  //
  // //////////////////////////////////////////////////////////////////////

  /**
   * dotprop set
   *
   * @param {*} key 
   * @param {*} value 
   */
  set(key, value) {
    // check emission
    if (deepEqual(this.get(key), value)) return this.__data;

    // set to value
    const done = dotProp.set(this.__data, key, value);

    // emit
    const emission = [];

    // emit all
    key.split('.').forEach((section) => {
      // push section
      emission.push(section);

      // emit
      this.emit(emission.join('.'), this.get(emission.join('.')));
    });

    // return done
    return done;
  }

  /**
   * dotprop get
   *
   * @param {*} key 
   */
  get(key) {
    // set to value
    return dotProp.get(this.__data, key);
  }

  /**
   * deafen
   */
  deafen() {
    // call
    return this.get('listen') ? this.get('dashup').rpc({
      type   : 'page',
      page   : this.get('page'),
      struct : this.get('page'),
    }, 'deafen', this.get('listen')) : null;
  }
}

/**
 * eden array
 */
module.exports = EdenArray;