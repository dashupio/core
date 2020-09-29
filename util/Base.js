
// require dependencies
const Events = require('events');
const dotProp = require('dot-prop');
const deepEqual = require('fast-deep-equal');

// create dashup base class
class DashupBase extends Events {

  /**
   * construct dashup base
   *
   * @param {Object} data 
   */
  constructor(data = {}, dashup) {
    // run super
    super(...arguments);

    // create data object
    this.__data = {};
    this.dashup = dashup;

    // set
    Object.keys(data).forEach(key => this.set(key, data[key]));
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
   * dotprop delete
   *
   * @param {*} key 
   */
  delete(key) {
    // set to value
    return dotProp.delete(this.__data, key);
  }


  // //////////////////////////////////////////////////////////////////////
  //
  // STATIC METHODS
  //
  // //////////////////////////////////////////////////////////////////////

  /**
   * init module
   *
   * @param {*} social 
   */
  static init() {}
}

/**
 * export dashup base
 */
module.exports = DashupBase;