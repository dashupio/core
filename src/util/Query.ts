// import model
import uuid from 'shortid';
import Model from '../Model';
import DashupArray from './Array';

// create dashup base class
export default class DashupQuery {
  /**
   * construct dashup query
   */
  constructor(page, dashup) {
    // set module
    this.page = page;
    this.query = [];
    this.dashup = dashup;

    // loop query methods
    ['where', 'eq', 'inc', 'gt', 'or', 'lt', 'gte', 'lte', 'skip', 'sort', 'limit', 'exists', 'search', 'match', 'ne', 'nin', 'in', 'or', 'and'].forEach((method) => {
      // set method
      this[method] = (...args) => {
        // push to query
        this.query.push([method, args]);

        // return this
        return this;
      };
    });

    // complete
    ['sum', 'avg', 'count', 'find', 'findOne', 'findById', 'findByIds'].forEach((method) => {
      // push to query
      this[method] = async (...args) => {
        // push to query
        this.query.push([method, args]);

        // call
        const data = await this.dashup.rpc({
          type   : 'page',
          page   : this.page,
          struct : this.page,
        }, 'model.query', this.query);

        // return types
        if (Array.isArray(data)) {
          return data.map((item) => (item && item._id ? new Model(item, this.dashup) : item));
        }
        if (data && typeof data === 'object') {
          return data._id ? new Model(data, this.dashup) : data;
        }

        // return data
        return data;
      };
    });

    // listen queries
    const listens = ['listen', 'listenById', 'listenOne'];
    listens.forEach((method) => {
      // proxy methods
      let arr = null;
      let model = null;
      const proxies = ['find', 'findById', 'findOne'];

      // create listen id
      const listenID = uuid();

      // create listener
      this.dashup.socket.on(listenID, ({ type, item, hash }) => {
        // if single model
        if (model) {
          // set to found
          Object.keys(item).forEach((key) => {
            model.set(key, item[key]);
          });

          // emit
          model.emit('update');
          model.emit(type, hash);

          // return
          return;
        }

        // change array
        const found = arr.find((i) => i.get('_id') === item._id);

        // check includes
        if (found) {
          // set to found
          Object.keys(item).forEach((key) => {
            found.set(key, item[key]);
          });
        } else {
          // push
          arr.push(new Model(item, this.dashup));
        }

        // remove unwanted
        arr.forEach((i, index) => {
          // check includes
          if (!hash.includes(i.get('_id'))) {
            // remove
            arr.splice(index, 1);
          }
        });

        // order
        arr.sort((a, b) => {
          // get indexes
          const aI = hash.indexOf(a.get('_id'));
          const bI = hash.indexOf(b.get('_id'));

          // sort it
          if (bI > aI) return -1;
          if (aI > bI) return 1;
          return 0;
        });

        // check if find
        arr.emit('update');
        arr.emit(type, item, hash);
      });

      // push to query
      this[method] = async (...args) => {
        // push to query
        this.query.push([proxies[listens.indexOf(method)], args]);

        // call
        const data = await this.dashup.rpc({
          type   : 'page',
          page   : this.page,
          struct : this.page,
        }, 'model.query', this.query, listenID);

        // return types
        if (Array.isArray(data)) {
          // create listenable array
          arr = new DashupArray(...(data.map((item) => new Model(item, this.dashup))));

          // set opts
          arr.set('page', this.page);
          arr.set('listen', listenID);
          arr.set('dashup', this.dashup);

          // return array
          return arr;
        }
        if (data && typeof data === 'object') {
          // set model
          model = new Model(data, this.dashup);

          // set listen
          model.set('_meta.listen', listenID);

          // return model
          return model;
        }

        // return data
        return data;
      };
    });
  }
}