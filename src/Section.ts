// Base
import Base from './util/Base';

/**
 * create Dashup
 */
export default class DashupSection extends Base {
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
    const result = await this.dashup.rpc({}, 'section.update', this.get('_id'), sanitisedData);

    // loop
    Object.keys(result).forEach((key) => {
      // set
      this.set(key, result[key]);
    });

    // set data
    return this;
  }
}
