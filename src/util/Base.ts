
// require dependencies
import dotProp from 'dot-prop';
import deepEqual from 'fast-deep-equal';
import { EventEmitter } from 'events';

// create dashup base class
export default class DashupBase extends EventEmitter {

  /**
   * construct dashup base
   *
   * @param {Object} data 
   */
  constructor(data = {}, dashup) {
    // run super
    super();

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