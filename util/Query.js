// import model
const uuid = require('uuid').v4;
const Model = require('../lib/Model');
const EdenArray = require('./Array');

// create dashup base class
class DashupQuery {

  /**
   * construct dashup query
   */
  constructor(mod, dashup) {
    // set module
    this.query = [];
    this.module = mod;
    this.dashup = dashup;

    // loop query methods
    ['where', 'eq', 'inc', 'gt', 'or', 'lt', 'gte', 'lte', 'skip', 'sort', 'limit', 'match', 'ne', 'nin', 'in', 'or', 'and'].forEach((method) => {
      // set method
      this[method] = (...args) => {
        // push to query
        this.query.push([method, args]);

        // return this
        return this;
      };
    });

    // complete
    ['sum', 'count', 'find', 'findOne', 'findById'].forEach((method) => {
      // push to query
      this[method] = async (...args) => {
        // push to query
        this.query.push([method, args]);

        // call
        const data = await this.dashup.call('query', {
          id    : this.module,
          query : this.query,
        });

        // return types
        if (Array.isArray(data)) {
          return data.map(item => new Model(item, this.dashup));
        }
        if (data && typeof data === 'object') {
          return new Model(data, this.dashup);
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
        const data = await this.dashup.call('query', {
          id     : this.module,
          query  : this.query,
          listen : listenID,
        });

        // return types
        if (Array.isArray(data)) {
          // create listenable array
          arr = new EdenArray(...(data.map(item => new Model(item, this.dashup))));

          // return array
          return arr;
        }
        if (data && typeof data === 'object') {
          // set model
          model = new Model(data, this.dashup);

          // return model
          return model;
        }

        // return data
        return data;
      };
    });
  }
}

// export query
module.exports = DashupQuery;