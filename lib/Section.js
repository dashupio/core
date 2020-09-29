
// Base
const Base = require('../util/Base');

/**
 * create Dashup
 */
class DashupSection extends Base {
  /**
   * construct dashup section
   *
   * @param  {...any} args
   */
  constructor(...args) {
    // run super
    super(...args);
  }


  // //////////////////////////////////////////////////////////////////////
  //
  // SUB METHODS
  //
  // //////////////////////////////////////////////////////////////////////


  /**
   * get opts
   */
  page(id, value) {
    // set value
    if (id && value) {
      // set
      this.dashup.pages.set(id, new Page(value, this));
      
      // emit pages
      this.emit('pages', this.dashup.pages);
    }

    // return opts
    const page = Array.from(this.dashup.pages.values()).filter((s) => s && s.get('section') === this.get('_id')).find((s) => {
      // return find
      return s.get('_id') === id || `${(s.get('name') || '')}`.toLowerCase() === id.toLowerCase();
    });

    // return page
    return page;
  }

}

// export dashup section
module.exports = DashupSection;