'use strict';

require('@babel/polyfill');
var io = require('socket.io-client');
var View = require('@dashup/view');
var dotProp = require('dot-prop');
var events = require('events');
var React = require('react');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var io__default = /*#__PURE__*/_interopDefaultLegacy(io);
var View__default = /*#__PURE__*/_interopDefaultLegacy(View);
var dotProp__default = /*#__PURE__*/_interopDefaultLegacy(dotProp);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;
/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */

function getNextValue() {
  seed = (seed * 9301 + 49297) % 233280;
  return seed / 233280.0;
}

function setSeed$1(_seed_) {
  seed = _seed_;
}

var randomFromSeed = {
  nextValue: getNextValue,
  seed: setSeed$1
};

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;
var shuffled;

function reset() {
  shuffled = false;
}

function setCharacters(_alphabet_) {
  if (!_alphabet_) {
    if (alphabet !== ORIGINAL) {
      alphabet = ORIGINAL;
      reset();
    }

    return;
  }

  if (_alphabet_ === alphabet) {
    return;
  }

  if (_alphabet_.length !== ORIGINAL.length) {
    throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
  }

  var unique = _alphabet_.split('').filter(function (item, ind, arr) {
    return ind !== arr.lastIndexOf(item);
  });

  if (unique.length) {
    throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
  }

  alphabet = _alphabet_;
  reset();
}

function characters(_alphabet_) {
  setCharacters(_alphabet_);
  return alphabet;
}

function setSeed(seed) {
  randomFromSeed.seed(seed);

  if (previousSeed !== seed) {
    reset();
    previousSeed = seed;
  }
}

function shuffle() {
  if (!alphabet) {
    setCharacters(ORIGINAL);
  }

  var sourceArray = alphabet.split('');
  var targetArray = [];
  var r = randomFromSeed.nextValue();
  var characterIndex;

  while (sourceArray.length > 0) {
    r = randomFromSeed.nextValue();
    characterIndex = Math.floor(r * sourceArray.length);
    targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
  }

  return targetArray.join('');
}

function getShuffled() {
  if (shuffled) {
    return shuffled;
  }

  shuffled = shuffle();
  return shuffled;
}
/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */


function lookup(index) {
  var alphabetShuffled = getShuffled();
  return alphabetShuffled[index];
}

function get() {
  return alphabet || ORIGINAL;
}

var alphabet_1 = {
  get: get,
  characters: characters,
  seed: setSeed,
  lookup: lookup,
  shuffled: getShuffled
};

var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto || !crypto.getRandomValues) {
  randomByte = function (size) {
    var bytes = [];

    for (var i = 0; i < size; i++) {
      bytes.push(Math.floor(Math.random() * 256));
    }

    return bytes;
  };
} else {
  randomByte = function (size) {
    return crypto.getRandomValues(new Uint8Array(size));
  };
}

var randomByteBrowser = randomByte;

// This file replaces `format.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.
var format_browser = function (random, alphabet, size) {
  // We can’t use bytes bigger than the alphabet. To make bytes values closer
  // to the alphabet, we apply bitmask on them. We look for the closest
  // `2 ** x - 1` number, which will be bigger than alphabet size. If we have
  // 30 symbols in the alphabet, we will take 31 (00011111).
  // We do not use faster Math.clz32, because it is not available in browsers.
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1; // Bitmask is not a perfect solution (in our example it will pass 31 bytes,
  // which is bigger than the alphabet). As a result, we will need more bytes,
  // than ID size, because we will refuse bytes bigger than the alphabet.
  // Every hardware random generator call is costly,
  // because we need to wait for entropy collection. This is why often it will
  // be faster to ask for few extra bytes in advance, to avoid additional calls.
  // Here we calculate how many random bytes should we call in advance.
  // It depends on ID length, mask / alphabet size and magic number 1.6
  // (which was selected according benchmarks).
  // -~f => Math.ceil(f) if n is float number
  // -~i => i + 1 if n is integer number

  var step = -~(1.6 * mask * size / alphabet.length);
  var id = '';

  while (true) {
    var bytes = random(step); // Compact alternative for `for (var i = 0; i < step; i++)`

    var i = step;

    while (i--) {
      // If random byte is bigger than alphabet even after bitmask,
      // we refuse it by `|| ''`.
      id += alphabet[bytes[i] & mask] || ''; // More compact than `id.length + 1 === size`

      if (id.length === +size) return id;
    }
  }
};

function generate(number) {
  var loopCounter = 0;
  var done;
  var str = '';

  while (!done) {
    str = str + format_browser(randomByteBrowser, alphabet_1.get(), 1);
    done = number < Math.pow(16, loopCounter + 1);
    loopCounter++;
  }

  return str;
}

var generate_1 = generate;

// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!


var REDUCE_TIME = 1567752802062; // don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16

var version = 7; // Counter is used when shortid is called multiple times in one second.

var counter; // Remember the last time shortid was called in case counter is needed.

var previousSeconds;
/**
 * Generate unique id
 * Returns string id
 */

function build(clusterWorkerId) {
  var str = '';
  var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

  if (seconds === previousSeconds) {
    counter++;
  } else {
    counter = 0;
    previousSeconds = seconds;
  }

  str = str + generate_1(version);
  str = str + generate_1(clusterWorkerId);

  if (counter > 0) {
    str = str + generate_1(counter);
  }

  str = str + generate_1(seconds);
  return str;
}

var build_1 = build;

function isShortId(id) {
  if (!id || typeof id !== 'string' || id.length < 6) {
    return false;
  }

  var nonAlphabetic = new RegExp('[^' + alphabet_1.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') + ']');
  return !nonAlphabetic.test(id);
}

var isValid = isShortId;

var lib = createCommonjsModule(function (module) {
  // has a unique value for worker
  // Note: I don't know if this is automatically set when using third
  // party cluster solutions such as pm2.

  var clusterWorkerId = 0;
  /**
   * Set the seed.
   * Highly recommended if you don't want people to try to figure out your id schema.
   * exposed as shortid.seed(int)
   * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
   */

  function seed(seedValue) {
    alphabet_1.seed(seedValue);
    return module.exports;
  }
  /**
   * Set the cluster worker or machine id
   * exposed as shortid.worker(int)
   * @param workerId worker must be positive integer.  Number less than 16 is recommended.
   * returns shortid module so it can be chained.
   */


  function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
  }
  /**
   *
   * sets new characters to use in the alphabet
   * returns the shuffled alphabet
   */


  function characters(newCharacters) {
    if (newCharacters !== undefined) {
      alphabet_1.characters(newCharacters);
    }

    return alphabet_1.shuffled();
  }
  /**
   * Generate unique id
   * Returns string id
   */


  function generate() {
    return build_1(clusterWorkerId);
  } // Export all other functions as properties of the generate function


  module.exports = generate;
  module.exports.generate = generate;
  module.exports.seed = seed;
  module.exports.worker = worker;
  module.exports.characters = characters;
  module.exports.isValid = isValid;
});
lib.generate;
lib.seed;
lib.worker;
lib.characters;
lib.isValid;

var shortid = lib;

var js_cookie = createCommonjsModule(function (module, exports) {

  (function (factory) {
    var registeredInModuleLoader;

    {
      module.exports = factory();
      registeredInModuleLoader = true;
    }

    if (!registeredInModuleLoader) {
      var OldCookies = window.Cookies;
      var api = window.Cookies = factory();

      api.noConflict = function () {
        window.Cookies = OldCookies;
        return api;
      };
    }
  })(function () {
    function extend() {
      var i = 0;
      var result = {};

      for (; i < arguments.length; i++) {
        var attributes = arguments[i];

        for (var key in attributes) {
          result[key] = attributes[key];
        }
      }

      return result;
    }

    function decode(s) {
      return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }

    function init(converter) {
      function api() {}

      function set(key, value, attributes) {
        if (typeof document === 'undefined') {
          return;
        }

        attributes = extend({
          path: '/'
        }, api.defaults, attributes);

        if (typeof attributes.expires === 'number') {
          attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
        } // We're using "expires" because "max-age" is not supported by IE


        attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

        try {
          var result = JSON.stringify(value);

          if (/^[\{\[]/.test(result)) {
            value = result;
          }
        } catch (e) {}

        value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
        var stringifiedAttributes = '';

        for (var attributeName in attributes) {
          if (!attributes[attributeName]) {
            continue;
          }

          stringifiedAttributes += '; ' + attributeName;

          if (attributes[attributeName] === true) {
            continue;
          } // Considers RFC 6265 section 5.2:
          // ...
          // 3.  If the remaining unparsed-attributes contains a %x3B (";")
          //     character:
          // Consume the characters of the unparsed-attributes up to,
          // not including, the first %x3B (";") character.
          // ...


          stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
        }

        return document.cookie = key + '=' + value + stringifiedAttributes;
      }

      function get(key, json) {
        if (typeof document === 'undefined') {
          return;
        }

        var jar = {}; // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all.

        var cookies = document.cookie ? document.cookie.split('; ') : [];
        var i = 0;

        for (; i < cookies.length; i++) {
          var parts = cookies[i].split('=');
          var cookie = parts.slice(1).join('=');

          if (!json && cookie.charAt(0) === '"') {
            cookie = cookie.slice(1, -1);
          }

          try {
            var name = decode(parts[0]);
            cookie = (converter.read || converter)(cookie, name) || decode(cookie);

            if (json) {
              try {
                cookie = JSON.parse(cookie);
              } catch (e) {}
            }

            jar[name] = cookie;

            if (key === name) {
              break;
            }
          } catch (e) {}
        }

        return key ? jar[key] : jar;
      }

      api.set = set;

      api.get = function (key) {
        return get(key, false
        /* read as raw */
        );
      };

      api.getJSON = function (key) {
        return get(key, true
        /* read as json */
        );
      };

      api.remove = function (key, attributes) {
        set(key, '', extend(attributes, {
          expires: -1
        }));
      };

      api.defaults = {};
      api.withConverter = init;
      return api;
    }

    return init(function () {});
  });
});

var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;

    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;

      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  } // true if both NaN, false otherwise


  return a !== a && b !== b;
};

var DashupBase = /*#__PURE__*/function (_EventEmitter) {
  _inherits(DashupBase, _EventEmitter);

  var _super = _createSuper(DashupBase);

  /**
   * construct dashup base
   *
   * @param {Object} data 
   */
  function DashupBase() {
    var _this;

    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var dashup = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, DashupBase);

    // run super
    _this = _super.call(this); // create data object

    _this.__data = {};
    _this.dashup = dashup; // set

    Object.keys(data).forEach(function (key) {
      return _this.set(key, data[key]);
    });
    return _this;
  } // //////////////////////////////////////////////////////////////////////
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


  _createClass(DashupBase, [{
    key: "set",
    value: function set(key, value) {
      var _this2 = this;

      // check emission
      if (fastDeepEqual(this.get(key), value)) return this.__data; // set to value

      var done = dotProp__default['default'].set(this.__data, key, value); // emit

      var emission = []; // emit all

      key.split('.').forEach(function (section) {
        // push section
        emission.push(section); // emit

        _this2.emit(emission.join('.'), _this2.get(emission.join('.')));
      }); // return done

      return done;
    }
    /**
     * dotprop get
     *
     * @param {*} key 
     */

  }, {
    key: "get",
    value: function get(key) {
      // set to value
      return dotProp__default['default'].get(this.__data, key);
    }
    /**
     * dotprop delete
     *
     * @param {*} key 
     */

  }, {
    key: "delete",
    value: function _delete(key) {
      // set to value
      return dotProp__default['default']["delete"](this.__data, key);
    } // //////////////////////////////////////////////////////////////////////
    //
    // STATIC METHODS
    //
    // //////////////////////////////////////////////////////////////////////

    /**
     * init module
     *
     * @param {*} social 
     */

  }], [{
    key: "init",
    value: function init() {}
  }]);

  return DashupBase;
}(events.EventEmitter);

/**
 * create Dashup
 */

var DashupModel = /*#__PURE__*/function (_Base) {
  _inherits(DashupModel, _Base);

  var _super = _createSuper(DashupModel);

  /**
   * construct module
   */
  function DashupModel() {
    var _this;

    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var dashup = arguments.length > 1 ? arguments[1] : undefined;
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'model';

    _classCallCheck(this, DashupModel);

    // run super
    _this = _super.call(this, data, dashup); // set type

    _this.type = type; // bind methods

    _this.save = _this.save.bind(_assertThisInitialized(_this));
    _this.remove = _this.remove.bind(_assertThisInitialized(_this));
    _this.sanitise = _this.sanitise.bind(_assertThisInitialized(_this));
    return _this;
  } // //////////////////////////////////////////////////////////////////////
  //
  // STATIC METHODS
  //
  // //////////////////////////////////////////////////////////////////////

  /**
   * get opts
   */


  _createClass(DashupModel, [{
    key: "set",
    value: function set(key, value) {
      var _this2 = this;

      // check value
      if (Array.isArray(value)) {
        // loop value
        value = value.map(function (item) {
          //  return model or item
          return item && item._meta ? new DashupModel(item, _this2.dashup) : item;
        });
      } // return parent set


      return _get(_getPrototypeOf(DashupModel.prototype), "set", this).call(this, key, value);
    }
    /**
     * get opts
     */

  }, {
    key: "save",
    value: function () {
      var _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this3 = this;

        var sanitisedData, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // sanitise
                sanitisedData = this.sanitise(); // save model

                _context.next = 3;
                return this.dashup.rpc(this.get('_meta'), "".concat(this.type, ".update"), this.get('_id'), sanitisedData);

              case 3:
                result = _context.sent;
                // loop
                Object.keys(result).forEach(function (key) {
                  // set
                  _this3.set(key, result[key]);
                }); // set data

                return _context.abrupt("return", this);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function save() {
        return _save.apply(this, arguments);
      }

      return save;
    }()
    /**
     * get opts
     */

  }, {
    key: "remove",
    value: function () {
      var _remove = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.dashup.rpc(this.get('_meta'), "".concat(this.type, ".remove"), this.get('_id'));

              case 2:
                return _context2.abrupt("return", this);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function remove() {
        return _remove.apply(this, arguments);
      }

      return remove;
    }()
    /**
     * deafen
     */

  }, {
    key: "deafen",
    value: function deafen() {
      // call
      return this.get('_meta.listen') ? this.dashup.rpc({
        type: 'page',
        page: this.get('_meta.page'),
        struct: this.get('_meta.page')
      }, 'deafen', this.get('_meta.listen')) : null;
    }
    /**
     * sanitise item
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var _this4 = this;

      // sanitised data
      var sanitisedData = {}; // loop

      Object.keys(this.__data).forEach(function (key) {
        // check array
        if (Array.isArray(_this4.__data[key]) && _this4.__data[key][0] instanceof DashupModel) {
          // array of models
          sanitisedData[key] = _toConsumableArray(_this4.__data[key]).map(function (mod) {
            return mod.toJSON();
          });
        } else if (_this4.__data[key] instanceof DashupModel) {
          // return id
          sanitisedData[key] = _this4.__data[key].toJSON();
        } else {
          // set
          sanitisedData[key] = _this4.__data[key];
        }
      }); // return data

      return sanitisedData;
    }
    /**
     * sanitise item
     */

  }, {
    key: "sanitise",
    value: function sanitise() {
      var _this5 = this;

      // sanitised data
      var sanitisedData = {}; // loop

      Object.keys(this.__data).forEach(function (key) {
        // check array
        if (Array.isArray(_this5.__data[key]) && _this5.__data[key][0] instanceof DashupModel) {
          // array of models
          sanitisedData[key] = _toConsumableArray(_this5.__data[key]).map(function (mod) {
            return mod.get('_id') || mod.get('id');
          });
        } else if (_this5.__data[key] instanceof DashupModel) {
          // return id
          sanitisedData[key] = _this5.__data[key].get('_id') || _this5.__data[key].get('id');
        } else {
          // set
          sanitisedData[key] = _this5.__data[key];
        }
      }); // return data

      return sanitisedData;
    }
  }]);

  return DashupModel;
}(DashupBase);

/**
 * create Dashup
 */

var DashupPage = /*#__PURE__*/function (_Base) {
  _inherits(DashupPage, _Base);

  var _super = _createSuper(DashupPage);

  /**
   * construct dashup section
   *
   * @param  {...any} args
   */
  function DashupPage() {
    var _this;

    _classCallCheck(this, DashupPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // run super
    _this = _super.call.apply(_super, [this].concat(args)); // bind functions

    _this.hook = _this.hook.bind(_assertThisInitialized(_this));
    _this.view = _this.view.bind(_assertThisInitialized(_this));
    _this.event = _this.event.bind(_assertThisInitialized(_this));
    _this.action = _this.action.bind(_assertThisInitialized(_this)); // render

    if (_this["".concat(_this.get('type'), "Init")]) _this["".concat(_this.get('type'), "Init")]();
    return _this;
  } // //////////////////////////////////////////////////////////////////////
  //
  // SUB METHODS
  //
  // //////////////////////////////////////////////////////////////////////

  /**
   * get opts
   */


  _createClass(DashupPage, [{
    key: "set",
    value: function set(key, value) {
      // check type
      if (key === 'type') {
        if (this["".concat(value, "Init")]) this["".concat(value, "Init")]();
      } // return parent set


      return _get(_getPrototypeOf(DashupPage.prototype), "set", this).call(this, key, value);
    }
    /**
     * get opts
     */

  }, {
    key: "page",
    value: function page(id, value) {
      var _this2 = this;

      // set value
      if (id && value) {
        // set
        this.dashup.pages.set(id, new DashupPage(value, this)); // emit pages

        this.emit('pages', this.dashup.pages);
      } // return opts


      var page = Array.from(this.dashup.pages.values()).filter(function (s) {
        return s && s.get('parent') === _this2.get('_id');
      }).find(function (s) {
        // return find
        return s.get('_id') === id || "".concat(s.get('name') || '').toLowerCase() === id.toLowerCase();
      }); // return page

      return page;
    }
    /**
     * get opts
     */

  }, {
    key: "save",
    value: function () {
      var _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this3 = this;

        var sanitisedData, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // sanitise
                sanitisedData = {
                  type: this.get('type'),
                  data: this.get('data'),
                  user: this.get('user'),
                  color: this.get('color'),
                  title: this.get('title'),
                  order: this.get('order'),
                  parent: this.get('parent')
                }; // save model

                _context.next = 3;
                return this.dashup.rpc({}, 'page.update', this.get('_id'), sanitisedData);

              case 3:
                result = _context.sent;
                // loop
                Object.keys(result).forEach(function (key) {
                  // set
                  _this3.set(key, result[key]);
                }); // set data

                return _context.abrupt("return", this);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function save() {
        return _save.apply(this, arguments);
      }

      return save;
    }() // //////////////////////////////////////////////////////////////////////
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

  }, {
    key: "rpc",
    value: function rpc(name) {
      var _this$dashup;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      // load component
      return (_this$dashup = this.dashup).rpc.apply(_this$dashup, [{
        type: 'page',
        page: this.get('_id'),
        struct: this.get('type')
      }, name].concat(args));
    }
    /**
     * hook
     *
     * @param {*} name
     * @param {*} data
     */

  }, {
    key: "hook",
    value: function hook(name) {
      var _this$dashup2;

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      // call hook
      return (_this$dashup2 = this.dashup).hook.apply(_this$dashup2, [{
        type: 'page',
        page: this.get('_id'),
        struct: this.get('type')
      }, name].concat(args));
    }
    /**
     * hook
     *
     * @param {*} name
     * @param {*} data
     */

  }, {
    key: "event",
    value: function event(name) {
      var _this$dashup3;

      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      // call hook
      return (_this$dashup3 = this.dashup).event.apply(_this$dashup3, [{
        type: 'page',
        page: this.get('_id'),
        struct: this.get('type')
      }, name].concat(args));
    }
    /**
     * hook
     *
     * @param {*} name
     * @param {*} data
     */

  }, {
    key: "action",
    value: function action(name) {
      var _this$dashup4;

      for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }

      // call hook
      return (_this$dashup4 = this.dashup).action.apply(_this$dashup4, [{
        type: 'page',
        page: this.get('_id'),
        struct: this.get('type')
      }, name].concat(args));
    }
    /**
     * create component
     *
     * @param {*} selector
     * @param {*} view
     * @param {*} opts
     */

  }, {
    key: "view",
    value: function () {
      var _view2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(selector, _view, opts) {
        var type,
            struct,
            el,
            _args2 = arguments;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                type = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : 'page';
                struct = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : null;
                // create element
                el = /*#__PURE__*/React__default['default'].createElement(this.dashup.View, _objectSpread2(_objectSpread2({}, opts), {
                  page: this,
                  dashup: this.dashup,
                  view: _view,
                  type: type,
                  struct: struct || this.get('type')
                })); // mount app

                ReactDOM__default['default'].render(el, document.querySelector(selector)); // return el

                return _context2.abrupt("return", el);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function view(_x, _x2, _x3) {
        return _view2.apply(this, arguments);
      }

      return view;
    }() // //////////////////////////////////////////////////////////////////////
    //
    // BUILD METHODS
    //
    // //////////////////////////////////////////////////////////////////////

    /**
     * creates auth module
     */

  }, {
    key: "authInit",
    value: function authInit() {
      var _this4 = this;

      // set user
      this.dashup.socket.on("page.".concat(this.get('_id'), ".auth"), function (result) {
        // set data
        _this4.user = new DashupModel(result, _this4.dashup);

        _this4.emit('user', _this4.user);
      }); // check login

      this.login = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(email, password) {
          var result;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _this4.rpc('login', {
                    email: email,
                    password: password
                  });

                case 2:
                  result = _context3.sent;

                  if (result.success) {
                    _context3.next = 5;
                    break;
                  }

                  throw new Error(result.message);

                case 5:
                  // set data
                  _this4.user = new DashupModel(result.data, _this4.dashup);

                  _this4.emit('user', _this4.user); // return user


                  return _context3.abrupt("return", _this4.user);

                case 8:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      this.register = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
          var result;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return _this4.rpc('register', data);

                case 2:
                  result = _context4.sent;

                  if (result.success) {
                    _context4.next = 5;
                    break;
                  }

                  throw new Error(result.message);

                case 5:
                  // set data
                  _this4.user = new DashupModel(result.data, _this4.dashup);

                  _this4.emit('user', _this4.user); // return user


                  return _context4.abrupt("return", _this4.user);

                case 8:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x6) {
          return _ref2.apply(this, arguments);
        };
      }();

      this.logout = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this4.rpc('logout', {});

              case 2:
                // set data
                _this4.user = null;

                _this4.emit('user', null); // return user


                return _context5.abrupt("return", _this4.user);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      })); // log

      this.exists = function () {
        return !!(_this4.user && _this4.user.get('_id'));
      };
    }
    /**
     * creates auth module
     */

  }, {
    key: "chatInit",
    value: function chatInit() {
      var _this5 = this;

      // on message
      var onMessage = function onMessage(message) {
        // set data
        var messages = _this5.chat.get('messages') || []; // replace

        var found = messages.find(function (m) {
          return m.get('id') === message.id;
        }); // found

        if (found) {
          // get messages
          Object.keys(message).forEach(function (key) {
            return found.set(key, message[key]);
          });
        } else {
          // push message
          message = new DashupModel(message); // push

          messages.push(message); // emit

          _this5.emit('message', message);
        } // set messages


        _this5.chat.set('messages', messages);

        _this5.chat.emit('messages', messages);
      }; // set user


      this.dashup.socket.on("page.".concat(this.get('_id'), ".chat"), function (result) {
        // set data
        _this5.chat = new DashupModel(result, _this5.dashup);

        _this5.emit('chat', _this5.chat); // check exists


        if (_this5.chat.get('subject')) {
          // listen
          _this5.dashup.socket.on("chat.".concat(_this5.chat.get('subject')), function (_ref4) {
            var type = _ref4.type,
                data = _ref4.data;
            // type/data
            if (type === 'messages') data.forEach(onMessage);
          });
        }
      }); // check login

      this.send = /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref5) {
          var message, result;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  message = _ref5.message;
                  _context6.next = 3;
                  return _this5.rpc('chat.send', {
                    id: _this5.get('_id'),
                    message: message
                  });

                case 3:
                  result = _context6.sent;
                  // on message
                  onMessage(result); // return user

                  return _context6.abrupt("return", _this5.chat);

                case 6:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x7) {
          return _ref6.apply(this, arguments);
        };
      }();

      this.create = /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(data) {
          var result;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return _this5.rpc('chat.create', {
                    id: _this5.get('_id'),
                    data: data
                  });

                case 2:
                  result = _context7.sent;
                  // set data
                  _this5.chat = new DashupModel(result, _this5.dashup);

                  _this5.emit('chat', _this5.chat); // check exists


                  if (_this5.chat.get('subject')) {
                    // listen
                    _this5.dashup.socket.on("chat.".concat(_this5.chat.get('subject')), function (_ref8) {
                      var type = _ref8.type,
                          data = _ref8.data;
                      // type/data
                      if (type === 'messages') data.forEach(onMessage);
                    });
                  } // return user


                  return _context7.abrupt("return", _this5.chat);

                case 7:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x8) {
          return _ref7.apply(this, arguments);
        };
      }(); // log


      this.exists = function () {
        return !!(_this5.chat && _this5.chat.get('subject'));
      };
    }
    /**
     * creates checkout methods
     */

  }, {
    key: "checkoutInit",
    value: function checkoutInit() {
      var _this6 = this;

      // set cart
      this.cart = new DashupModel({
        page: this.get('_id'),
        products: []
      }, this.dashup); // set cart

      var setCart = function setCart(result) {
        // set data
        Object.keys(result).forEach(function (key) {
          // products
          if (key === 'products') {
            // products
            return _this6.cart.set('products', result.products.map(function (product) {
              // return product
              return _objectSpread2(_objectSpread2({}, product), {}, {
                product: new DashupModel(product.product, _this6.dashup)
              });
            }));
          } // set discount


          if (key === 'discount') {
            // set discount
            return _this6.cart.set('discount', result.discount ? new DashupModel(result.discount, _this6.dashup) : null);
          } // set normal value


          _this6.cart.set(key, result[key]);
        });
      }; // set user


      this.dashup.socket.on("page.".concat(this.get('_id'), ".cart"), function (result) {
        // set data
        setCart(result);

        _this6.emit('cart', _this6.cart);
      }); // cart

      this.add = /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(product) {
          var count,
              opts,
              result,
              _args8 = arguments;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  count = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : 1;
                  opts = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : {};

                  if (!(count <= 0)) {
                    _context8.next = 4;
                    break;
                  }

                  return _context8.abrupt("return", _this6.remove(product));

                case 4:
                  _context8.next = 6;
                  return _this6.rpc('cart.add', {
                    opts: opts,
                    count: count,
                    product: product._id || product.get('_id')
                  });

                case 6:
                  result = _context8.sent;
                  // set cart
                  setCart(result);

                  _this6.emit('cart', _this6.cart); // return user


                  return _context8.abrupt("return", _this6.cart);

                case 10:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function (_x9) {
          return _ref9.apply(this, arguments);
        };
      }();

      this.has = function (product) {
        // return
        return _this6.cart.get('products').find(function (p) {
          return p.product.get('_id') === product._id || product.get('_id');
        });
      };

      this.code = /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(discount) {
          var result;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return _this6.rpc('cart.code', {
                    discount: discount ? discount._id || discount.get('_id') : null
                  });

                case 2:
                  result = _context9.sent;
                  // set cart
                  setCart(result);

                  _this6.emit('cart', _this6.cart); // return user


                  return _context9.abrupt("return", _this6.cart);

                case 6:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x10) {
          return _ref10.apply(this, arguments);
        };
      }();

      this.count = function () {
        return Object.keys(_this6.cart.get('products')).reduce(function (accum, key) {
          // return value
          return accum + _this6.cart.get("products.".concat(key, ".count"));
        }, 0);
      };

      this.clear = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        var result;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _this6.rpc('cart.clear');

              case 2:
                result = _context10.sent;
                // set cart
                setCart(result);

                _this6.emit('cart', _this6.cart); // return user


                return _context10.abrupt("return", _this6.cart);

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      this.remove = /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(product) {
          var opts,
              result,
              _args11 = arguments;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  opts = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : {};
                  _context11.next = 3;
                  return _this6.rpc('cart.remove', {
                    opts: opts,
                    product: product._id || product.get('_id')
                  });

                case 3:
                  result = _context11.sent;
                  // set cart
                  setCart(result);

                  _this6.emit('cart', _this6.cart); // return user


                  return _context11.abrupt("return", _this6.cart);

                case 7:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));

        return function (_x11) {
          return _ref12.apply(this, arguments);
        };
      }(); // totals


      this.field = function (type, field) {
        // get fields
        var form;
        var page = _this6; // auth

        if (type === 'auth') {
          page = _this6.dashup.page(_this6.get('data.auth'));
          form = _this6.dashup.page(page.get('data.form'));
        } else {
          form = _this6.dashup.page(_this6.get("data.".concat(type, ".form")));
        } // get fields


        return (form && form.get('data.fields') ? form.get('data.fields') : []).find(function (f) {
          return f.uuid === page.get("data".concat(type !== 'auth' ? ".".concat(type) : '.field', ".").concat(field));
        });
      };

      this.total = function (products) {
        // get total
        var total = (products || _this6.cart.get('products') || []).reduce(function (accum, _ref13) {
          var product = _ref13.product,
              count = _ref13.count;
          // get field
          var productField = _this6.field('product', 'field') || {}; // return value

          return accum + (dotProp__default['default'].get(product.get ? product.get() : product, "".concat(productField.name || productField.uuid, ".price")) || 0) * (count || 0);
        }, 0); // return total

        return total;
      };

      this.totals = function (products) {
        // get field
        var productField = _this6.field('product', 'field') || {}; // return

        return Array.from((products || _this6.cart.get('products') || []).reduce(function (accum, _ref14) {
          var product = _ref14.product;
          // type
          var type = dotProp__default['default'].get(product.get ? product.get() : product, "".concat(productField.name || productField.uuid, ".type")); // type

          if (type === 'subscription') {
            // type
            accum.add(dotProp__default['default'].get(product.get ? product.get() : product, "".concat(productField.name || productField.uuid, ".period")) || 'monthly');
          } else {
            // add product
            accum.add(type);
          } // set


          return accum;
        }, new Set())).reduce(function (accum, type) {
          // add total
          accum[type] = _this6.total(_toConsumableArray((products || _this6.cart.get('products') || []).filter(function (_ref15) {
            var product = _ref15.product;
            // type
            var t = dotProp__default['default'].get(product.get ? product.get() : product, "".concat(productField.name || productField.uuid, ".type")); // type

            if (t === 'subscription') {
              // type
              return (dotProp__default['default'].get(product.get ? product.get() : product, "".concat(productField.name || productField.uuid, ".period")) || 'monthly') === type;
            } // add product


            return t === type;
          }))); // return accum

          return accum;
        }, {});
      };

      this.discount = function (total) {
        // total
        if (!total) total = _this6.total(); // parse

        total = parseFloat(total); // check discount

        if (!_this6.cart.get('discount')) return 0; // check discount

        var discountField = _this6.field('discount', 'discount'); // check field


        if (!discountField) return 0; // discount

        var actualDiscount = _this6.cart.get('discount').get(discountField.name || discountField.uuid); // chekc actual discount


        if (!actualDiscount) return 0; // check value

        if (!actualDiscount.type || actualDiscount.type === 'amount') {
          // return discount
          return parseFloat(actualDiscount.value || '0');
        }

        if (actualDiscount.type === 'percent') {
          // return discount
          return parseFloat(actualDiscount.value || '0') / 100 * total;
        } // get discount


        return 0;
      };

      this.shipping = function () {
        return 0;
      };
    }
    /**
     * creates auth module
     */

  }, {
    key: "formInit",
    value: function formInit() {
      var _this7 = this;

      // init model also for forms
      this.modelInit(); // check login

      this.submit = /*#__PURE__*/function () {
        var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(data) {
          var result;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.next = 2;
                  return _this7.dashup.action({
                    type: 'page',
                    page: _this7.get('data.model'),
                    form: _this7.get('_id'),
                    model: _this7.get('data.model'),
                    struct: 'form'
                  }, 'form.submit', data);

                case 2:
                  result = _context12.sent;
                  return _context12.abrupt("return", new DashupModel(result, _this7.dashup));

                case 4:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12);
        }));

        return function (_x12) {
          return _ref16.apply(this, arguments);
        };
      }();
    }
    /**
     * creates model methods
     */

  }, {
    key: "modelInit",
    value: function modelInit() {
      var _this8 = this;

      // create
      this.create = /*#__PURE__*/function () {
        var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(data) {
          var result;
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.next = 2;
                  return _this8.dashup.action({
                    type: 'page',
                    page: _this8.get('_id'),
                    form: _this8.get('data.forms.0'),
                    model: _this8.get('_id'),
                    struct: 'form'
                  }, 'form.submit', data);

                case 2:
                  result = _context13.sent;
                  return _context13.abrupt("return", new DashupModel(result, _this8.dashup));

                case 4:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13);
        }));

        return function (_x13) {
          return _ref17.apply(this, arguments);
        };
      }(); // query and dones


      var queryBys = ['where', 'eq', 'gt', 'or', 'lt', 'gte', 'lte', 'skip', 'sort', 'limit', 'match', 'inc', 'ne', 'nin', 'in', 'or', 'and', 'sum', 'search', 'avg', 'find', 'count', 'findOne', 'findById', 'findByIds', 'listen', 'listenOne', 'listenById']; // create calls

      queryBys.forEach(function (method) {
        // create function
        _this8[method] = function () {
          // create query
          var query = new DashupQuery(_this8.get('_id'), _this8.dashup); // return query

          return query[method].apply(query, arguments);
        };
      });
    }
  }]);

  return DashupPage;
}(DashupBase);

/**
 * create Dashup
 */

var DashupSection = /*#__PURE__*/function (_Base) {
  _inherits(DashupSection, _Base);

  var _super = _createSuper(DashupSection);

  /**
   * construct dashup section
   *
   * @param  {...any} args
   */
  function DashupSection() {
    _classCallCheck(this, DashupSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // run super
    return _super.call.apply(_super, [this].concat(args));
  } // //////////////////////////////////////////////////////////////////////
  //
  // SUB METHODS
  //
  // //////////////////////////////////////////////////////////////////////

  /**
   * get opts
   */


  _createClass(DashupSection, [{
    key: "page",
    value: function page(id, value) {
      var _this = this;

      // set value
      if (id && value) {
        // set
        this.dashup.pages.set(id, new Page(value, this)); // emit pages

        this.emit('pages', this.dashup.pages);
      } // return opts


      var page = Array.from(this.dashup.pages.values()).filter(function (s) {
        return s && s.get('section') === _this.get('_id');
      }).find(function (s) {
        // return find
        return s.get('_id') === id || "".concat(s.get('name') || '').toLowerCase() === id.toLowerCase();
      }); // return page

      return page;
    }
    /**
     * get opts
     */

  }, {
    key: "save",
    value: function () {
      var _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var sanitisedData, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // sanitise
                sanitisedData = {
                  type: this.get('type'),
                  data: this.get('data'),
                  user: this.get('user'),
                  color: this.get('color'),
                  title: this.get('title'),
                  order: this.get('order'),
                  parent: this.get('parent')
                }; // save model

                _context.next = 3;
                return this.dashup.rpc({}, 'section.update', this.get('_id'), sanitisedData);

              case 3:
                result = _context.sent;
                // loop
                Object.keys(result).forEach(function (key) {
                  // set
                  _this2.set(key, result[key]);
                }); // set data

                return _context.abrupt("return", this);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function save() {
        return _save.apply(this, arguments);
      }

      return save;
    }()
  }]);

  return DashupSection;
}(DashupBase);

/**
 * dashup array
 */

var DashupArray = /*#__PURE__*/function (_Array) {
  _inherits(DashupArray, _Array);

  var _super = _createSuper(DashupArray);

  /**
   * create array
   *
   * @param  {...any} args
   */
  function DashupArray() {
    var _this;

    _classCallCheck(this, DashupArray);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // super args
    _this = _super.call.apply(_super, [this].concat(args)); // create events

    _this.__data = {};
    _this.events = new events.EventEmitter(); // bind

    _this.get = _this.get.bind(_assertThisInitialized(_this));
    _this.set = _this.set.bind(_assertThisInitialized(_this));
    _this.deafen = _this.deafen.bind(_assertThisInitialized(_this)); // events methods

    ['on', 'emit', 'once', 'removeListener'].forEach(function (method) {
      // bind
      _this[method] = function () {
        var _this$events;

        // proxy in this context
        (_this$events = _this.events)[method].apply(_this$events, arguments);
      };
    });
    return _this;
  } // //////////////////////////////////////////////////////////////////////
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


  _createClass(DashupArray, [{
    key: "set",
    value: function set(key, value) {
      var _this2 = this;

      // check emission
      if (fastDeepEqual(this.get(key), value)) return this.__data; // set to value

      var done = dotProp__default['default'].set(this.__data, key, value); // emit

      var emission = []; // emit all

      key.split('.').forEach(function (section) {
        // push section
        emission.push(section); // emit

        _this2.emit(emission.join('.'), _this2.get(emission.join('.')));
      }); // return done

      return done;
    }
    /**
     * dotprop get
     *
     * @param {*} key 
     */

  }, {
    key: "get",
    value: function get(key) {
      // set to value
      return dotProp__default['default'].get(this.__data, key);
    }
    /**
     * deafen
     */

  }, {
    key: "deafen",
    value: function deafen() {
      // call
      return this.get('listen') ? this.get('dashup').rpc({
        type: 'page',
        page: this.get('page'),
        struct: this.get('page')
      }, 'deafen', this.get('listen')) : null;
    }
  }]);

  return DashupArray;
}( /*#__PURE__*/_wrapNativeSuper(Array));

var models = {
  page: DashupPage,
  model: DashupModel,
  friend: DashupModel,
  section: DashupSection
}; // create dashup base class

var DashupQuery =
/**
 * construct dashup query
 */
function DashupQuery(page, dashup) {
  var _this = this;

  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'model';

  _classCallCheck(this, DashupQuery);

  // set module
  this.page = page;
  this.type = type;
  this.query = [];
  this.dashup = dashup; // loop query methods

  ['where', 'eq', 'inc', 'gt', 'or', 'lt', 'gte', 'lte', 'skip', 'sort', 'limit', 'exists', 'search', 'match', 'ne', 'nin', 'in', 'or', 'and'].forEach(function (method) {
    // set method
    _this[method] = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // push to query
      _this.query.push([method, args]); // return this


      return _this;
    };
  }); // complete

  ['sum', 'avg', 'count', 'find', 'findOne', 'findById', 'findByIds'].forEach(function (method) {
    // push to query
    _this[method] = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _len2,
          args,
          _key2,
          data,
          _args = arguments;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              for (_len2 = _args.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = _args[_key2];
              }

              // push to query
              _this.query.push([method, args]); // call


              _context.next = 4;
              return _this.dashup.rpc(_this.page ? {
                type: 'page',
                page: _this.page,
                struct: _this.page
              } : null, "".concat(type, ".query"), _this.query);

            case 4:
              data = _context.sent;

              if (!Array.isArray(data)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", data.map(function (item) {
                return item && item._id ? new models[_this.type || 'model'](item, _this.dashup, _this.type) : item;
              }));

            case 7:
              if (!(data && _typeof(data) === 'object')) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", data._id ? new models[_this.type || 'model'](data, _this.dashup, _this.type) : data);

            case 9:
              return _context.abrupt("return", data);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  }); // listen queries

  var listens = ['listen', 'listenById', 'listenOne'];
  listens.forEach(function (method) {
    // proxy methods
    var arr = null;
    var model = null;
    var proxies = ['find', 'findById', 'findOne']; // create listen id

    var listenID = shortid(); // create listener

    _this.dashup.socket.on(listenID, function (_ref2) {
      var type = _ref2.type,
          item = _ref2.item,
          hash = _ref2.hash;

      // if single model
      if (model) {
        // set to found
        Object.keys(item).forEach(function (key) {
          model.set(key, item[key]);
        }); // emit

        model.emit('update');
        model.emit(type, hash); // return

        return;
      } // change array


      var found = arr.find(function (i) {
        return i.get('_id') === item._id;
      }); // check includes

      if (found) {
        // set to found
        Object.keys(item).forEach(function (key) {
          found.set(key, item[key]);
        });
      } else {
        // push
        arr.push(new models[_this.type || 'model'](item, _this.dashup, _this.type));
      } // remove unwanted


      arr.forEach(function (i, index) {
        // check includes
        if (!hash.includes(i.get('_id'))) {
          // remove
          arr.splice(index, 1);
        }
      }); // order

      arr.sort(function (a, b) {
        // get indexes
        var aI = hash.indexOf(a.get('_id'));
        var bI = hash.indexOf(b.get('_id')); // sort it

        if (bI > aI) return -1;
        if (aI > bI) return 1;
        return 0;
      }); // check if find

      arr.emit('update');
      arr.emit(type, item, hash);
    }); // push to query


    _this[method] = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _len3,
          args,
          _key3,
          data,
          _args2 = arguments;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              for (_len3 = _args2.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = _args2[_key3];
              }

              // push to query
              _this.query.push([proxies[listens.indexOf(method)], args]); // call


              _context2.next = 4;
              return _this.dashup.rpc(_this.page ? {
                type: 'page',
                page: _this.page,
                struct: _this.page
              } : null, "".concat(_this.type, ".query"), _this.query, listenID);

            case 4:
              data = _context2.sent;

              if (!Array.isArray(data)) {
                _context2.next = 11;
                break;
              }

              // create listenable array
              arr = _construct(DashupArray, _toConsumableArray(data.map(function (item) {
                return new models[_this.type || 'model'](item, _this.dashup, _this.type);
              }))); // set opts

              arr.set('page', _this.page);
              arr.set('listen', listenID);
              arr.set('dashup', _this.dashup); // return array

              return _context2.abrupt("return", arr);

            case 11:
              if (!(data && _typeof(data) === 'object')) {
                _context2.next = 15;
                break;
              }

              // set model
              model = new models[_this.type || 'model'](data, _this.dashup, _this.type); // set listen

              model.set('_meta.listen', listenID); // return model

              return _context2.abrupt("return", model);

            case 15:
              return _context2.abrupt("return", data);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
  });
};

/**
 * create Dashup
 */

var Dashup = /*#__PURE__*/function (_Base) {
  _inherits(Dashup, _Base);

  var _super = _createSuper(Dashup);

  /**
   * construct Dashup
   *
   * @param {*} opts
   */
  function Dashup(opts) {
    var _this;

    _classCallCheck(this, Dashup);

    // run super
    _this = _super.call(this); // set opts

    _this.__opts = opts || {};
    _this.__version = '0.0.2'; // bind methods

    _this.rpc = _this.rpc.bind(_assertThisInitialized(_this));
    _this.hook = _this.hook.bind(_assertThisInitialized(_this));
    _this.event = _this.event.bind(_assertThisInitialized(_this));
    _this.build = _this.build.bind(_assertThisInitialized(_this));
    _this.action = _this.action.bind(_assertThisInitialized(_this)); // build

    _this.building = _this.build();
    return _this;
  } // //////////////////////////////////////////////////////////////////////
  //
  // BUILD METHODS
  //
  // //////////////////////////////////////////////////////////////////////

  /**
   * builds Dashup
   */


  _createClass(Dashup, [{
    key: "build",
    value: function () {
      var _build = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var done, classTypes;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // set session
                this.sessionID = this.__opts.sessionID || this.__opts.session; // Check cookie

                if (!this.sessionID && typeof window !== 'undefined') {
                  // in frontend
                  this.sessionID = js_cookie.get('dashup-session') || shortid(); // set cookie

                  js_cookie.set('dashup-session', this.sessionID, {
                    expires: 7
                  });
                } // set session


                if (!this.sessionID) this.sessionID = shortid(); // Run socket

                this.socket = this.__opts.connection || (this.__opts.io || io__default['default']).connect("".concat(this.__opts.url || 'https://dashup.io', "?api=v1").concat(this.__opts.key ? "&key=".concat(this.__opts.key) : '', "&session=").concat(this.sessionID), this.__opts.socket || {}); // await connected

                done = new Promise(function (resolve) {
                  return _this2.once('_id', resolve);
                }); // create call

                this.socket.on('dashup', function (result) {
                  // set data
                  Object.keys(result).forEach(function (key) {
                    return _this2.set(key, result[key]);
                  });
                }); // types

                classTypes = {
                  page: DashupPage,
                  section: DashupSection
                }; // loop values

                [['page', 'pages'], ['section', 'sections']].forEach(function (_ref) {
                  var _ref2 = _slicedToArray(_ref, 2),
                      type = _ref2[0],
                      plural = _ref2[1];

                  // check module
                  _this2.socket.on("dashup.".concat(type), function (data) {
                    // set items map
                    if (!_this2.__data[plural]) _this2.__data[plural] = new Map(); // item/action

                    var item = data[type];
                    var action = data.action; // if change

                    if (action === 'change') {
                      // update
                      var got = _this2.__data[plural].get(item._id) || new classTypes[type](item, _this2); // set values

                      Object.keys(item).forEach(function (key) {
                        // set
                        got.set(key, item[key]);
                      }); // set

                      _this2.__data[plural].set(item._id, got);
                    } else if (action === 'create') {
                      // delete item
                      _this2.__data[plural].set(item._id, new classTypes[type](item, _this2));
                    } else if (action === 'remove') {
                      // delete item
                      _this2.__data[plural]["delete"](item._id);
                    } // emit


                    _this2.emit(plural, _this2.__data[plural]);
                  });
                }); // actives

                this.socket.on('dashup.active', function (active) {
                  // current
                  var newActives = _this2.__data.active || []; // remove old

                  newActives = newActives.filter(function (a) {
                    return a.id !== active.id;
                  }); // check page

                  if (active.page) {
                    newActives.push(active);
                  } // set and emit


                  _this2.__data.active = newActives;

                  _this2.emit('active', _this2.__data.active);
                }); // await done

                _context.next = 11;
                return done;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function build() {
        return _build.apply(this, arguments);
      }

      return build;
    }()
    /**
     * creates call to namespaced methods
     *
     * @param {*} route
     * @param {*} body
     */

  }, {
    key: "rpc",
    value: function () {
      var _rpc = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(opts, name) {
        var _this3 = this;

        var id,
            res,
            _len,
            args,
            _key,
            _args2 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // create id
                id = shortid(); // create promise

                res = new Promise(function (resolve, reject) {
                  // socket
                  _this3.socket.once(id, function (result) {
                    // check result
                    if (!(result || {}).success) return reject((result || {}).message || 'null'); // resolve

                    resolve(result.data);
                  });
                }); // call join

                for (_len = _args2.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                  args[_key - 2] = _args2[_key];
                }

                this.socket.emit('dashup.rpc', _objectSpread2(_objectSpread2({}, opts), {}, {
                  id: id
                }), name, args); // return result

                return _context2.abrupt("return", res);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function rpc(_x, _x2) {
        return _rpc.apply(this, arguments);
      }

      return rpc;
    }()
    /**
     * creates call to namespaced methods
     *
     * @param {*} route
     * @param {*} body
     */

  }, {
    key: "hook",
    value: function () {
      var _hook = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(opts, name) {
        var _this4 = this;

        var id,
            res,
            _len2,
            args,
            _key2,
            _args3 = arguments;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // create id
                id = shortid(); // create promise

                res = new Promise(function (resolve) {
                  // socket
                  _this4.socket.once(id, function (result) {
                    // resolve
                    resolve(result);
                  });
                }); // call join

                for (_len2 = _args3.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                  args[_key2 - 2] = _args3[_key2];
                }

                this.socket.emit('dashup.hook', _objectSpread2(_objectSpread2({}, opts), {}, {
                  id: id
                }), name, args); // return result

                return _context3.abrupt("return", res);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function hook(_x3, _x4) {
        return _hook.apply(this, arguments);
      }

      return hook;
    }()
    /**
     * creates call to namespaced methods
     *
     * @param {*} route
     * @param {*} body
     */

  }, {
    key: "event",
    value: function () {
      var _event = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(opts, name) {
        var id,
            _len3,
            args,
            _key3,
            _args4 = arguments;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // create id
                id = shortid(); // call join

                for (_len3 = _args4.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                  args[_key3 - 2] = _args4[_key3];
                }

                this.socket.emit('dashup.event', _objectSpread2(_objectSpread2({}, opts), {}, {
                  id: id
                }), name, args);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function event(_x5, _x6) {
        return _event.apply(this, arguments);
      }

      return event;
    }()
    /**
     * creates call to namespaced methods
     *
     * @param {*} route
     * @param {*} body
     */

  }, {
    key: "action",
    value: function () {
      var _action = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(opts, name) {
        var _this5 = this;

        var id,
            res,
            _len4,
            args,
            _key4,
            _args5 = arguments;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                // create id
                id = shortid(); // create promise

                res = new Promise(function (resolve, reject) {
                  // socket
                  _this5.socket.once(id, function (result) {
                    // check result
                    if (!(result || {}).success) return reject((result || {}).message || 'null'); // resolve

                    resolve(result.data);
                  });
                }); // call join

                for (_len4 = _args5.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
                  args[_key4 - 2] = _args5[_key4];
                }

                this.socket.emit('dashup.action', _objectSpread2(_objectSpread2({}, opts), {}, {
                  id: id
                }), name, args); // return result

                return _context5.abrupt("return", res);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function action(_x7, _x8) {
        return _action.apply(this, arguments);
      }

      return action;
    }() // //////////////////////////////////////////////////////////////////////
    //
    // SUB METHODS
    //
    // //////////////////////////////////////////////////////////////////////

    /**
     * get opts
     */

  }, {
    key: "page",
    value: function page() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var value = arguments.length > 1 ? arguments[1] : undefined;

      // set value
      if (id && value) {
        // set
        this.__data.pages.set(id, new DashupPage(value, this)); // emit pages


        this.emit('pages', this.__data.pages); // get

        return this.__data.pages.get(id);
      } // return opts


      var page = Array.from(this.__data.pages.values()).filter(function (s) {
        return s;
      }).find(function (s) {
        // return find
        return s.get('_id') === id || "".concat(s.get('name') || '').toLowerCase() === id.toLowerCase();
      }); // return page

      return page;
    }
    /**
     * get opts
     */

  }, {
    key: "section",
    value: function section() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var value = arguments.length > 1 ? arguments[1] : undefined;

      // set value
      if (id && value) {
        // set
        this.__data.sections.set(id, new DashupPage(value, this)); // emit pages


        this.emit('sections', this.__data.sections); // get

        return this.__data.sections.get(id);
      } // return opts


      var section = Array.from(this.__data.sections.values()).filter(function (s) {
        return s;
      }).find(function (s) {
        // return find
        return s.get('_id') === id || "".concat(s.get('name') || '').toLowerCase() === id.toLowerCase();
      }); // return page

      return section;
    }
    /**
     * get opts
     */

  }, {
    key: "set",
    value: function set(key, value) {
      var _this6 = this;

      // types
      var classTypes = {
        pages: DashupPage,
        sections: DashupSection
      }; // check items

      var _loop = function _loop() {
        var type = _arr[_i];

        // check type
        if (key === type) {
          // set items map
          if (!_this6.__data[type]) _this6.__data[type] = new Map(); // loop items

          value.forEach(function (item) {
            // check item
            if (_this6.__data[type].has(item._id)) {
              // current
              var current = _this6.__data[type].get(item._id); // set value


              Object.keys(item).forEach(function (key) {
                return current.set(key, item[key]);
              });
            } else {
              _this6.__data[type].set(item._id, new classTypes[type](item, _this6));
            }
          });
          Array.from(_this6.__data[type].keys()).forEach(function (id) {
            // delete item
            if (!value.find(function (item) {
              return item._id === id;
            })) _this6.__data[type]["delete"](id);
          }); // emit

          _this6.emit(type, _this6.__data[type]);

          _this6.emit('update'); // return items


          return {
            v: _this6.__data[type]
          };
        }
      };

      for (var _i = 0, _arr = ['sections', 'pages']; _i < _arr.length; _i++) {
        var _ret = _loop();

        if (_typeof(_ret) === "object") return _ret.v;
      } // return parent set


      return _get(_getPrototypeOf(Dashup.prototype), "set", this).call(this, key, value);
    }
    /**
     * check can
     *
     * @param param0
     * @param type
     */

  }, {
    key: "can",
    value: function can(page, type) {
      // check if owner
      if ((this.get('acls') || []).find(function (a) {
        return a === true;
      })) return true; // check find

      if (!type) {
        // return includes
        return (this.get('acls') || []).includes(page);
      } // return found


      return (this.get('acls') || []).includes("".concat(typeof page === 'string' ? page : page.get('_id'), ".").concat(type));
    } // //////////////////////////////////////////////////////////////////////
    //
    // STATIC METHODS
    //
    // //////////////////////////////////////////////////////////////////////

    /**
     * get opts
     */

  }, {
    key: "opts",
    get: function get() {
      // return opts
      return this.__opts;
    }
    /**
     * get view
     */

  }, {
    key: "View",
    get: function get() {
      // return opts
      return View__default['default'];
    }
    /**
     * get opts
     */

  }, {
    key: "Page",
    get: function get() {
      // return opts
      return DashupPage;
    }
    /**
     * get opts
     */

  }, {
    key: "Model",
    get: function get() {
      // return opts
      return DashupModel;
    }
    /**
     * get opts
     */

  }, {
    key: "Query",
    get: function get() {
      // return opts
      return DashupQuery;
    }
    /**
     * get opts
     */

  }, {
    key: "Section",
    get: function get() {
      // return opts
      return DashupSection;
    }
  }]);

  return Dashup;
}(DashupBase);

// regenerator

module.exports = Dashup;
