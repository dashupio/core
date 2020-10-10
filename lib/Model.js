
// Base
const Base = require('../util/Base');

/**
 * create Dashup
 */
class DashupModel extends Base {
  /**
   * construct module
   */
  constructor(...args) {
    // run super
    super(...args);

    // bind methods
    this.save = this.save.bind(this);
    this.remove = this.remove.bind(this);
    this.sanitise = this.sanitise.bind(this);
  }


  // //////////////////////////////////////////////////////////////////////
  //
  // STATIC METHODS
  //
  // //////////////////////////////////////////////////////////////////////

  /**
   * get opts
   */
  set(key, value) {
    // check value
    if (Array.isArray(value)) {
      // loop value
      value = value.map((item) => {
        //  return model or item
        return item && item._meta ? new DashupModel(item) : item;
      });
    }

    // return parent set
    return super.set(key, value);
  }

  /**
   * get opts
   */
  async save() {
    // sanitise
    const sanitisedData = this.sanitise();

    // save model
    const result = await this.dashup.rpc({
      page : this.get('_meta.page'),
      form : this.get('_meta.form'),
    }, 'model.update', this.get('_id'), {
      page : this.get('_meta.page'),
      form : this.get('_meta.form'),
    }, sanitisedData);

    // loop
    Object.keys(result).forEach((key) => {
      // set
      this.set(key, result[key]);
    });

    // set data
    return this;
  }

  /**
   * get opts
   */
  async remove() {
    // save model
    const result = await this.dashup.call('model.remove', {
      id : this.get('_id'),
    }, {
      id : this.get('_meta.form'),
    });

    // set data
    return this;
  }

  /**
   * sanitise item
   */
  sanitise() {
    // sanitised data
    const sanitisedData = {};

    // loop
    Object.keys(this.__data).forEach((key) => {
      // check array
      if (Array.isArray(this.__data[key]) && this.__data[key][0] instanceof DashupModel) {
        // array of models
        sanitisedData[key] = this.__data[key].map(mod => mod.get('_id') || mod.get('id'));
      } else if (this.__data[key] instanceof DashupModel) {
        // return id
        sanitisedData[key] = this.__data[key].get('_id') || this.__data[key].get('id');
      } else {
        // set
        sanitisedData[key] = this.__data[key];
      }
    });

    // return data
    return sanitisedData;
  }
}

/**
 * export dashup module
 */
module.exports = DashupModel;
