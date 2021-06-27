'use strict';

require('@babel/polyfill');
var React = require('react');
var events = require('events');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

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

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit$1(arr, i) {
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

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
var re$1 = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts$1 = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];

var parseuri$1 = function parseuri(str) {
  var src = str,
      b = str.indexOf('['),
      e = str.indexOf(']');

  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
  }

  var m = re$1.exec(str || ''),
      uri = {},
      i = 14;

  while (i--) {
    uri[parts$1[i]] = m[i] || '';
  }

  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
    uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
    uri.ipv6uri = true;
  }

  return uri;
};

/**
 * Helpers.
 */
var s$2 = 1000;
var m$2 = s$2 * 60;
var h$2 = m$2 * 60;
var d$2 = h$2 * 24;
var w = d$2 * 7;
var y$2 = d$2 * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms$2 = function (val, options) {
  options = options || {};
  var type = typeof val;

  if (type === 'string' && val.length > 0) {
    return parse$2(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong$2(val) : fmtShort$2(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse$2(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y$2;

    case 'weeks':
    case 'week':
    case 'w':
      return n * w;

    case 'days':
    case 'day':
    case 'd':
      return n * d$2;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h$2;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m$2;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s$2;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort$2(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d$2) {
    return Math.round(ms / d$2) + 'd';
  }

  if (msAbs >= h$2) {
    return Math.round(ms / h$2) + 'h';
  }

  if (msAbs >= m$2) {
    return Math.round(ms / m$2) + 'm';
  }

  if (msAbs >= s$2) {
    return Math.round(ms / s$2) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong$2(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d$2) {
    return plural$2(ms, msAbs, d$2, 'day');
  }

  if (msAbs >= h$2) {
    return plural$2(ms, msAbs, h$2, 'hour');
  }

  if (msAbs >= m$2) {
    return plural$2(ms, msAbs, m$2, 'minute');
  }

  if (msAbs >= s$2) {
    return plural$2(ms, msAbs, s$2, 'second');
  }

  return ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural$2(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = ms$2;
  Object.keys(env).forEach(key => {
    createDebug[key] = env[key];
  });
  /**
  * Active `debug` instances.
  */

  createDebug.instances = [];
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    let hash = 0;

    for (let i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    let prevTime;

    function debug(...args) {
      // Disabled?
      if (!debug.enabled) {
        return;
      }

      const self = debug; // Set `diff` timestamp

      const curr = Number(new Date());
      const ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      let index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return match;
        }

        index++;
        const formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          const val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      const logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = createDebug.enabled(namespace);
    debug.useColors = createDebug.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;
    debug.extend = extend; // Debug.formatArgs = formatArgs;
    // debug.rawLog = rawLog;
    // env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    createDebug.instances.push(debug);
    return debug;
  }

  function destroy() {
    const index = createDebug.instances.indexOf(this);

    if (index !== -1) {
      createDebug.instances.splice(index, 1);
      return true;
    }

    return false;
  }

  function extend(namespace, delimiter) {
    const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    newDebug.log = this.log;
    return newDebug;
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    let i;
    const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    const len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < createDebug.instances.length; i++) {
      const instance = createDebug.instances[i];
      instance.enabled = createDebug.enabled(instance.namespace);
    }
  }
  /**
  * Disable debug output.
  *
  * @return {String} namespaces
  * @api public
  */


  function disable() {
    const namespaces = [...createDebug.names.map(toNamespace), ...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)].join(',');
    createDebug.enable('');
    return namespaces;
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    let i;
    let len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Convert regexp to namespace
  *
  * @param {RegExp} regxep
  * @return {String} namespace
  * @api private
  */


  function toNamespace(regexp) {
    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

var common = setup;

var browser$3 = createCommonjsModule(function (module, exports) {
  /* eslint-env browser */

  /**
   * This is the web browser implementation of `debug()`.
   */
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = localstorage();
  /**
   * Colors.
   */

  exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
  /**
   * Currently only WebKit-based Web Inspectors, Firefox >= v31,
   * and the Firebug extension (any Firefox version) are known
   * to support "%c" CSS customizations.
   *
   * TODO: add a `localStorage` variable to explicitly enable/disable colors
   */
  // eslint-disable-next-line complexity

  function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
      return true;
    } // Internet Explorer and Edge do not support colors.


    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
      return false;
    } // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  /**
   * Colorize log arguments if enabled.
   *
   * @api public
   */


  function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

    if (!this.useColors) {
      return;
    }

    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into

    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, match => {
      if (match === '%%') {
        return;
      }

      index++;

      if (match === '%c') {
        // We only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
      }
    });
    args.splice(lastC, 0, c);
  }
  /**
   * Invokes `console.log()` when available.
   * No-op when `console.log` is not a "function".
   *
   * @api public
   */


  function log(...args) {
    // This hackery is required for IE8/9, where
    // the `console.log` function doesn't have 'apply'
    return typeof console === 'object' && console.log && console.log(...args);
  }
  /**
   * Save `namespaces`.
   *
   * @param {String} namespaces
   * @api private
   */


  function save(namespaces) {
    try {
      if (namespaces) {
        exports.storage.setItem('debug', namespaces);
      } else {
        exports.storage.removeItem('debug');
      }
    } catch (error) {// Swallow
      // XXX (@Qix-) should we be logging these?
    }
  }
  /**
   * Load `namespaces`.
   *
   * @return {String} returns the previously persisted debug modes
   * @api private
   */


  function load() {
    let r;

    try {
      r = exports.storage.getItem('debug');
    } catch (error) {// Swallow
      // XXX (@Qix-) should we be logging these?
    } // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


    if (!r && typeof process !== 'undefined' && 'env' in process) {
      r = process.env.DEBUG;
    }

    return r;
  }
  /**
   * Localstorage attempts to return the localstorage.
   *
   * This is necessary because safari throws
   * when a user disables cookies/localstorage
   * and you attempt to access it.
   *
   * @return {LocalStorage}
   * @api private
   */


  function localstorage() {
    try {
      // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
      // The Browser also has localStorage in the global context.
      return localStorage;
    } catch (error) {// Swallow
      // XXX (@Qix-) should we be logging these?
    }
  }

  module.exports = common(exports);
  const {
    formatters
  } = module.exports;
  /**
   * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
   */

  formatters.j = function (v) {
    try {
      return JSON.stringify(v);
    } catch (error) {
      return '[UnexpectedJSONParseError]: ' + error.message;
    }
  };
});
browser$3.log;
browser$3.formatArgs;
browser$3.save;
browser$3.load;
browser$3.useColors;
browser$3.storage;
browser$3.colors;

/**
 * Module dependencies.
 */

var debug$7 = browser$3('socket.io-client:url');
/**
 * Module exports.
 */

var url_1 = url;
/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url(uri, loc) {
  var obj = uri; // default to window.location

  loc = loc || typeof location !== 'undefined' && location;
  if (null == uri) uri = loc.protocol + '//' + loc.host; // relative path support

  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug$7('protocol-less url %s', uri);

      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    } // parse


    debug$7('parse %s', uri);
    obj = parseuri$1(uri);
  } // make sure we treat `localhost:80` and `localhost` equally


  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';
  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host; // define unique id

  obj.id = obj.protocol + '://' + host + ':' + obj.port; // define href

  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : ':' + obj.port);
  return obj;
}

/**
 * Helpers.
 */
var s$1 = 1000;
var m$1 = s$1 * 60;
var h$1 = m$1 * 60;
var d$1 = h$1 * 24;
var y$1 = d$1 * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms$1 = function (val, options) {
  options = options || {};
  var type = typeof val;

  if (type === 'string' && val.length > 0) {
    return parse$1(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong$1(val) : fmtShort$1(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse$1(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y$1;

    case 'days':
    case 'day':
    case 'd':
      return n * d$1;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h$1;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m$1;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s$1;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort$1(ms) {
  if (ms >= d$1) {
    return Math.round(ms / d$1) + 'd';
  }

  if (ms >= h$1) {
    return Math.round(ms / h$1) + 'h';
  }

  if (ms >= m$1) {
    return Math.round(ms / m$1) + 'm';
  }

  if (ms >= s$1) {
    return Math.round(ms / s$1) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong$1(ms) {
  return plural$1(ms, d$1, 'day') || plural$1(ms, h$1, 'hour') || plural$1(ms, m$1, 'minute') || plural$1(ms, s$1, 'second') || ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural$1(ms, n, name) {
  if (ms < n) {
    return;
  }

  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }

  return Math.ceil(ms / n) + ' ' + name + 's';
}

var debug$6 = createCommonjsModule(function (module, exports) {
  /**
   * This is the common logic for both the Node.js and web browser
   * implementations of `debug()`.
   *
   * Expose `debug()` as the module.
   */
  exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = ms$1;
  /**
   * Active `debug` instances.
   */

  exports.instances = [];
  /**
   * The currently active debug mode names, and names to skip.
   */

  exports.names = [];
  exports.skips = [];
  /**
   * Map of special "%n" handling functions, for the debug "format" argument.
   *
   * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
   */

  exports.formatters = {};
  /**
   * Select a color.
   * @param {String} namespace
   * @return {Number}
   * @api private
   */

  function selectColor(namespace) {
    var hash = 0,
        i;

    for (i in namespace) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return exports.colors[Math.abs(hash) % exports.colors.length];
  }
  /**
   * Create a debugger with the given `namespace`.
   *
   * @param {String} namespace
   * @return {Function}
   * @api public
   */


  function createDebug(namespace) {
    var prevTime;

    function debug() {
      // disabled?
      if (!debug.enabled) return;
      var self = debug; // set `diff` timestamp

      var curr = +new Date();
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr; // turn the `arguments` into a proper Array

      var args = new Array(arguments.length);

      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }

      args[0] = exports.coerce(args[0]);

      if ('string' !== typeof args[0]) {
        // anything else let's inspect with %O
        args.unshift('%O');
      } // apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // if we encounter an escaped % then don't increase the array index
        if (match === '%%') return match;
        index++;
        var formatter = exports.formatters[format];

        if ('function' === typeof formatter) {
          var val = args[index];
          match = formatter.call(self, val); // now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // apply env-specific formatting (colors, etc.)

      exports.formatArgs.call(self, args);
      var logFn = debug.log || exports.log || console.log.bind(console);
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = exports.enabled(namespace);
    debug.useColors = exports.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy; // env-specific initialization logic for debug instances

    if ('function' === typeof exports.init) {
      exports.init(debug);
    }

    exports.instances.push(debug);
    return debug;
  }

  function destroy() {
    var index = exports.instances.indexOf(this);

    if (index !== -1) {
      exports.instances.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
  /**
   * Enables a debug mode by namespaces. This can include modes
   * separated by a colon and wildcards.
   *
   * @param {String} namespaces
   * @api public
   */


  function enable(namespaces) {
    exports.save(namespaces);
    exports.names = [];
    exports.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) continue; // ignore empty strings

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        exports.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < exports.instances.length; i++) {
      var instance = exports.instances[i];
      instance.enabled = exports.enabled(instance.namespace);
    }
  }
  /**
   * Disable debug output.
   *
   * @api public
   */


  function disable() {
    exports.enable('');
  }
  /**
   * Returns true if the given mode name is enabled, false otherwise.
   *
   * @param {String} name
   * @return {Boolean}
   * @api public
   */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i, len;

    for (i = 0, len = exports.skips.length; i < len; i++) {
      if (exports.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = exports.names.length; i < len; i++) {
      if (exports.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
   * Coerce `val`.
   *
   * @param {Mixed} val
   * @return {Mixed}
   * @api private
   */


  function coerce(val) {
    if (val instanceof Error) return val.stack || val.message;
    return val;
  }
});
debug$6.coerce;
debug$6.disable;
debug$6.enable;
debug$6.enabled;
debug$6.humanize;
debug$6.instances;
debug$6.names;
debug$6.skips;
debug$6.formatters;

var browser$2 = createCommonjsModule(function (module, exports) {
  /**
   * This is the web browser implementation of `debug()`.
   *
   * Expose `debug()` as the module.
   */
  exports = module.exports = debug$6;
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
  /**
   * Colors.
   */

  exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
  /**
   * Currently only WebKit-based Web Inspectors, Firefox >= v31,
   * and the Firebug extension (any Firefox version) are known
   * to support "%c" CSS customizations.
   *
   * TODO: add a `localStorage` variable to explicitly enable/disable colors
   */

  function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
      return true;
    } // Internet Explorer and Edge do not support colors.


    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
      return false;
    } // is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  /**
   * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
   */


  exports.formatters.j = function (v) {
    try {
      return JSON.stringify(v);
    } catch (err) {
      return '[UnexpectedJSONParseError]: ' + err.message;
    }
  };
  /**
   * Colorize log arguments if enabled.
   *
   * @api public
   */


  function formatArgs(args) {
    var useColors = this.useColors;
    args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
    if (!useColors) return;
    var c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into

    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function (match) {
      if ('%%' === match) return;
      index++;

      if ('%c' === match) {
        // we only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
      }
    });
    args.splice(lastC, 0, c);
  }
  /**
   * Invokes `console.log()` when available.
   * No-op when `console.log` is not a "function".
   *
   * @api public
   */


  function log() {
    // this hackery is required for IE8/9, where
    // the `console.log` function doesn't have 'apply'
    return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
  }
  /**
   * Save `namespaces`.
   *
   * @param {String} namespaces
   * @api private
   */


  function save(namespaces) {
    try {
      if (null == namespaces) {
        exports.storage.removeItem('debug');
      } else {
        exports.storage.debug = namespaces;
      }
    } catch (e) {}
  }
  /**
   * Load `namespaces`.
   *
   * @return {String} returns the previously persisted debug modes
   * @api private
   */


  function load() {
    var r;

    try {
      r = exports.storage.debug;
    } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


    if (!r && typeof process !== 'undefined' && 'env' in process) {
      r = process.env.DEBUG;
    }

    return r;
  }
  /**
   * Enable namespaces listed in `localStorage.debug` initially.
   */


  exports.enable(load());
  /**
   * Localstorage attempts to return the localstorage.
   *
   * This is necessary because safari throws
   * when a user disables cookies/localstorage
   * and you attempt to access it.
   *
   * @return {LocalStorage}
   * @api private
   */

  function localstorage() {
    try {
      return window.localStorage;
    } catch (e) {}
  }
});
browser$2.log;
browser$2.formatArgs;
browser$2.save;
browser$2.load;
browser$2.useColors;
browser$2.storage;
browser$2.colors;

var componentEmitter$2 = createCommonjsModule(function (module) {
  /**
   * Expose `Emitter`.
   */
  {
    module.exports = Emitter;
  }
  /**
   * Initialize a new `Emitter`.
   *
   * @api public
   */


  function Emitter(obj) {
    if (obj) return mixin(obj);
  }
  /**
   * Mixin the emitter properties.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */

  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }

    return obj;
  }
  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */


  Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
    return this;
  };
  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */


  Emitter.prototype.once = function (event, fn) {
    function on() {
      this.off(event, on);
      fn.apply(this, arguments);
    }

    on.fn = fn;
    this.on(event, on);
    return this;
  };
  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */


  Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {}; // all

    if (0 == arguments.length) {
      this._callbacks = {};
      return this;
    } // specific event


    var callbacks = this._callbacks['$' + event];
    if (!callbacks) return this; // remove all handlers

    if (1 == arguments.length) {
      delete this._callbacks['$' + event];
      return this;
    } // remove specific handler


    var cb;

    for (var i = 0; i < callbacks.length; i++) {
      cb = callbacks[i];

      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    } // Remove event specific arrays for event types that no
    // one is subscribed for to avoid memory leak.


    if (callbacks.length === 0) {
      delete this._callbacks['$' + event];
    }

    return this;
  };
  /**
   * Emit `event` with the given args.
   *
   * @param {String} event
   * @param {Mixed} ...
   * @return {Emitter}
   */


  Emitter.prototype.emit = function (event) {
    this._callbacks = this._callbacks || {};
    var args = new Array(arguments.length - 1),
        callbacks = this._callbacks['$' + event];

    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }

    if (callbacks) {
      callbacks = callbacks.slice(0);

      for (var i = 0, len = callbacks.length; i < len; ++i) {
        callbacks[i].apply(this, args);
      }
    }

    return this;
  };
  /**
   * Return array of callbacks for `event`.
   *
   * @param {String} event
   * @return {Array}
   * @api public
   */


  Emitter.prototype.listeners = function (event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks['$' + event] || [];
  };
  /**
   * Check if this emitter has `event` handlers.
   *
   * @param {String} event
   * @return {Boolean}
   * @api public
   */


  Emitter.prototype.hasListeners = function (event) {
    return !!this.listeners(event).length;
  };
});

var toString$2 = {}.toString;

var isarray = Array.isArray || function (arr) {
  return toString$2.call(arr) == '[object Array]';
};

var isBuffer = isBuf;
var withNativeBuffer = typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function';
var withNativeArrayBuffer = typeof ArrayBuffer === 'function';

var isView = function (obj) {
  return typeof ArrayBuffer.isView === 'function' ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */


function isBuf(obj) {
  return withNativeBuffer && Buffer.isBuffer(obj) || withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj));
}

/*global Blob,File*/

/**
 * Module requirements
 */

var toString$1 = Object.prototype.toString;
var withNativeBlob$1 = typeof Blob === 'function' || typeof Blob !== 'undefined' && toString$1.call(Blob) === '[object BlobConstructor]';
var withNativeFile$1 = typeof File === 'function' || typeof File !== 'undefined' && toString$1.call(File) === '[object FileConstructor]';
/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

var deconstructPacket = function (packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'

  return {
    packet: pack,
    buffers: buffers
  };
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuffer(data)) {
    var placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (isarray(data)) {
    var newData = new Array(data.length);

    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }

    return newData;
  } else if (typeof data === 'object' && !(data instanceof Date)) {
    var newData = {};

    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }

    return newData;
  }

  return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */


var reconstructPacket = function (packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful

  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isarray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}
/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */


var removeBlobs = function (data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj; // convert any blob

    if (withNativeBlob$1 && obj instanceof Blob || withNativeFile$1 && obj instanceof File) {
      pendingBlobs++; // async filereader

      var fileReader = new FileReader();

      fileReader.onload = function () {
        // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        } else {
          bloblessData = this.result;
        } // if nothing pending its callback time


        if (! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isarray(obj)) {
      // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (typeof obj === 'object' && !isBuffer(obj)) {
      // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;

  _removeBlobs(bloblessData);

  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

var binary = {
  deconstructPacket: deconstructPacket,
  reconstructPacket: reconstructPacket,
  removeBlobs: removeBlobs
};

var socket_ioParser = createCommonjsModule(function (module, exports) {
  /**
   * Module dependencies.
   */
  var debug = browser$2('socket.io-parser');
  /**
   * Protocol version.
   *
   * @api public
   */

  exports.protocol = 4;
  /**
   * Packet types.
   *
   * @api public
   */

  exports.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'ACK', 'ERROR', 'BINARY_EVENT', 'BINARY_ACK'];
  /**
   * Packet type `connect`.
   *
   * @api public
   */

  exports.CONNECT = 0;
  /**
   * Packet type `disconnect`.
   *
   * @api public
   */

  exports.DISCONNECT = 1;
  /**
   * Packet type `event`.
   *
   * @api public
   */

  exports.EVENT = 2;
  /**
   * Packet type `ack`.
   *
   * @api public
   */

  exports.ACK = 3;
  /**
   * Packet type `error`.
   *
   * @api public
   */

  exports.ERROR = 4;
  /**
   * Packet type 'binary event'
   *
   * @api public
   */

  exports.BINARY_EVENT = 5;
  /**
   * Packet type `binary ack`. For acks with binary arguments.
   *
   * @api public
   */

  exports.BINARY_ACK = 6;
  /**
   * Encoder constructor.
   *
   * @api public
   */

  exports.Encoder = Encoder;
  /**
   * Decoder constructor.
   *
   * @api public
   */

  exports.Decoder = Decoder;
  /**
   * A socket.io Encoder instance
   *
   * @api public
   */

  function Encoder() {}

  var ERROR_PACKET = exports.ERROR + '"encode error"';
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   * @param {Function} callback - function to handle encodings (likely engine.write)
   * @return Calls callback with Array of encodings
   * @api public
   */

  Encoder.prototype.encode = function (obj, callback) {
    debug('encoding packet %j', obj);

    if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
      encodeAsBinary(obj, callback);
    } else {
      var encoding = encodeAsString(obj);
      callback([encoding]);
    }
  };
  /**
   * Encode packet as string.
   *
   * @param {Object} packet
   * @return {String} encoded
   * @api private
   */


  function encodeAsString(obj) {
    // first is type
    var str = '' + obj.type; // attachments if we have them

    if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
      str += obj.attachments + '-';
    } // if we have a namespace other than `/`
    // we append it followed by a comma `,`


    if (obj.nsp && '/' !== obj.nsp) {
      str += obj.nsp + ',';
    } // immediately followed by the id


    if (null != obj.id) {
      str += obj.id;
    } // json data


    if (null != obj.data) {
      var payload = tryStringify(obj.data);

      if (payload !== false) {
        str += payload;
      } else {
        return ERROR_PACKET;
      }
    }

    debug('encoded %j as %s', obj, str);
    return str;
  }

  function tryStringify(str) {
    try {
      return JSON.stringify(str);
    } catch (e) {
      return false;
    }
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   *
   * @param {Object} packet
   * @return {Buffer} encoded
   * @api private
   */


  function encodeAsBinary(obj, callback) {
    function writeEncoding(bloblessData) {
      var deconstruction = binary.deconstructPacket(bloblessData);
      var pack = encodeAsString(deconstruction.packet);
      var buffers = deconstruction.buffers;
      buffers.unshift(pack); // add packet info to beginning of data list

      callback(buffers); // write all the buffers
    }

    binary.removeBlobs(obj, writeEncoding);
  }
  /**
   * A socket.io Decoder instance
   *
   * @return {Object} decoder
   * @api public
   */


  function Decoder() {
    this.reconstructor = null;
  }
  /**
   * Mix in `Emitter` with Decoder.
   */


  componentEmitter$2(Decoder.prototype);
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   * @return {Object} packet
   * @api public
   */

  Decoder.prototype.add = function (obj) {
    var packet;

    if (typeof obj === 'string') {
      packet = decodeString(obj);

      if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) {
        // binary packet's json
        this.reconstructor = new BinaryReconstructor(packet); // no attachments, labeled binary but no binary data to follow

        if (this.reconstructor.reconPack.attachments === 0) {
          this.emit('decoded', packet);
        }
      } else {
        // non-binary full packet
        this.emit('decoded', packet);
      }
    } else if (isBuffer(obj) || obj.base64) {
      // raw binary data
      if (!this.reconstructor) {
        throw new Error('got binary data when not reconstructing a packet');
      } else {
        packet = this.reconstructor.takeBinaryData(obj);

        if (packet) {
          // received final buffer
          this.reconstructor = null;
          this.emit('decoded', packet);
        }
      }
    } else {
      throw new Error('Unknown type: ' + obj);
    }
  };
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   * @api private
   */


  function decodeString(str) {
    var i = 0; // look up type

    var p = {
      type: Number(str.charAt(0))
    };

    if (null == exports.types[p.type]) {
      return error('unknown packet type ' + p.type);
    } // look up attachments if type binary


    if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
      var buf = '';

      while (str.charAt(++i) !== '-') {
        buf += str.charAt(i);
        if (i == str.length) break;
      }

      if (buf != Number(buf) || str.charAt(i) !== '-') {
        throw new Error('Illegal attachments');
      }

      p.attachments = Number(buf);
    } // look up namespace (if any)


    if ('/' === str.charAt(i + 1)) {
      p.nsp = '';

      while (++i) {
        var c = str.charAt(i);
        if (',' === c) break;
        p.nsp += c;
        if (i === str.length) break;
      }
    } else {
      p.nsp = '/';
    } // look up id


    var next = str.charAt(i + 1);

    if ('' !== next && Number(next) == next) {
      p.id = '';

      while (++i) {
        var c = str.charAt(i);

        if (null == c || Number(c) != c) {
          --i;
          break;
        }

        p.id += str.charAt(i);
        if (i === str.length) break;
      }

      p.id = Number(p.id);
    } // look up json data


    if (str.charAt(++i)) {
      var payload = tryParse(str.substr(i));
      var isPayloadValid = payload !== false && (p.type === exports.ERROR || isarray(payload));

      if (isPayloadValid) {
        p.data = payload;
      } else {
        return error('invalid payload');
      }
    }

    debug('decoded %s as %j', str, p);
    return p;
  }

  function tryParse(str) {
    try {
      return JSON.parse(str);
    } catch (e) {
      return false;
    }
  }
  /**
   * Deallocates a parser's resources
   *
   * @api public
   */


  Decoder.prototype.destroy = function () {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
    }
  };
  /**
   * A manager of a binary event's 'buffer sequence'. Should
   * be constructed whenever a packet of type BINARY_EVENT is
   * decoded.
   *
   * @param {Object} packet
   * @return {BinaryReconstructor} initialized reconstructor
   * @api private
   */


  function BinaryReconstructor(packet) {
    this.reconPack = packet;
    this.buffers = [];
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   * @api private
   */


  BinaryReconstructor.prototype.takeBinaryData = function (binData) {
    this.buffers.push(binData);

    if (this.buffers.length === this.reconPack.attachments) {
      // done with buffer list
      var packet = binary.reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }

    return null;
  };
  /**
   * Cleans up binary packet reconstruction variables.
   *
   * @api private
   */


  BinaryReconstructor.prototype.finishedReconstruction = function () {
    this.reconPack = null;
    this.buffers = [];
  };

  function error(msg) {
    return {
      type: exports.ERROR,
      data: 'parser error: ' + msg
    };
  }
});
socket_ioParser.protocol;
socket_ioParser.types;
socket_ioParser.CONNECT;
socket_ioParser.DISCONNECT;
socket_ioParser.EVENT;
socket_ioParser.ACK;
socket_ioParser.ERROR;
socket_ioParser.BINARY_EVENT;
socket_ioParser.BINARY_ACK;
socket_ioParser.Encoder;
socket_ioParser.Decoder;

var hasCors = createCommonjsModule(function (module) {
  /**
   * Module exports.
   *
   * Logic borrowed from Modernizr:
   *
   *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
   */
  try {
    module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
  } catch (err) {
    // if XMLHttp support is disabled in IE then it will throw
    // when trying to create
    module.exports = false;
  }
});

var globalThis_browser = function () {
  if (typeof self !== 'undefined') {
    return self;
  } else if (typeof window !== 'undefined') {
    return window;
  } else {
    return Function('return this')(); // eslint-disable-line no-new-func
  }
}();

var xmlhttprequest = function (opts) {
  var xdomain = opts.xdomain; // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx

  var xscheme = opts.xscheme; // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217

  var enablesXDR = opts.enablesXDR; // XMLHttpRequest can be disabled on IE

  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCors)) {
      return new XMLHttpRequest();
    }
  } catch (e) {} // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example


  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) {}

  if (!xdomain) {
    try {
      return new globalThis_browser[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) {}
  }
};

/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */
var keys = Object.keys || function keys(obj) {
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }

  return arr;
};

/* global Blob File */

/*
 * Module requirements.
 */

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' || typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' || typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';
/**
 * Module exports.
 */

var hasBinary2 = hasBinary;
/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary(obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (isarray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }

    return false;
  }

  if (typeof Buffer === 'function' && Buffer.isBuffer && Buffer.isBuffer(obj) || typeof ArrayBuffer === 'function' && obj instanceof ArrayBuffer || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) {
    return true;
  } // see: https://github.com/Automattic/has-binary/pull/4


  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}

/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */
var arraybuffer_slice = function (arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) {
    return arraybuffer.slice(start, end);
  }

  if (start < 0) {
    start += bytes;
  }

  if (end < 0) {
    end += bytes;
  }

  if (end > bytes) {
    end = bytes;
  }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);

  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }

  return result.buffer;
};

var after_1 = after;

function after(count, callback, err_cb) {
  var bail = false;
  err_cb = err_cb || noop;
  proxy.count = count;
  return count === 0 ? callback() : proxy;

  function proxy(err, result) {
    if (proxy.count <= 0) {
      throw new Error('after called too many times');
    }

    --proxy.count; // after first error, rest are passed to err_cb

    if (err) {
      bail = true;
      callback(err); // future error callbacks will go to error handler

      callback = err_cb;
    } else if (proxy.count === 0 && !bail) {
      callback(null, result);
    }
  }
}

function noop() {}

/*! https://mths.be/utf8js v2.1.2 by @mathias */
var stringFromCharCode = String.fromCharCode; // Taken from https://mths.be/punycode

function ucs2decode(string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  var value;
  var extra;

  while (counter < length) {
    value = string.charCodeAt(counter++);

    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // high surrogate, and there is a next character
      extra = string.charCodeAt(counter++);

      if ((extra & 0xFC00) == 0xDC00) {
        // low surrogate
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // unmatched surrogate; only append this code unit, in case the next
        // code unit is the high surrogate of a surrogate pair
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }

  return output;
} // Taken from https://mths.be/punycode


function ucs2encode(array) {
  var length = array.length;
  var index = -1;
  var value;
  var output = '';

  while (++index < length) {
    value = array[index];

    if (value > 0xFFFF) {
      value -= 0x10000;
      output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
      value = 0xDC00 | value & 0x3FF;
    }

    output += stringFromCharCode(value);
  }

  return output;
}

function checkScalarValue(codePoint, strict) {
  if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
    if (strict) {
      throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() + ' is not a scalar value');
    }

    return false;
  }

  return true;
}
/*--------------------------------------------------------------------------*/


function createByte(codePoint, shift) {
  return stringFromCharCode(codePoint >> shift & 0x3F | 0x80);
}

function encodeCodePoint(codePoint, strict) {
  if ((codePoint & 0xFFFFFF80) == 0) {
    // 1-byte sequence
    return stringFromCharCode(codePoint);
  }

  var symbol = '';

  if ((codePoint & 0xFFFFF800) == 0) {
    // 2-byte sequence
    symbol = stringFromCharCode(codePoint >> 6 & 0x1F | 0xC0);
  } else if ((codePoint & 0xFFFF0000) == 0) {
    // 3-byte sequence
    if (!checkScalarValue(codePoint, strict)) {
      codePoint = 0xFFFD;
    }

    symbol = stringFromCharCode(codePoint >> 12 & 0x0F | 0xE0);
    symbol += createByte(codePoint, 6);
  } else if ((codePoint & 0xFFE00000) == 0) {
    // 4-byte sequence
    symbol = stringFromCharCode(codePoint >> 18 & 0x07 | 0xF0);
    symbol += createByte(codePoint, 12);
    symbol += createByte(codePoint, 6);
  }

  symbol += stringFromCharCode(codePoint & 0x3F | 0x80);
  return symbol;
}

function utf8encode(string, opts) {
  opts = opts || {};
  var strict = false !== opts.strict;
  var codePoints = ucs2decode(string);
  var length = codePoints.length;
  var index = -1;
  var codePoint;
  var byteString = '';

  while (++index < length) {
    codePoint = codePoints[index];
    byteString += encodeCodePoint(codePoint, strict);
  }

  return byteString;
}
/*--------------------------------------------------------------------------*/


function readContinuationByte() {
  if (byteIndex >= byteCount) {
    throw Error('Invalid byte index');
  }

  var continuationByte = byteArray[byteIndex] & 0xFF;
  byteIndex++;

  if ((continuationByte & 0xC0) == 0x80) {
    return continuationByte & 0x3F;
  } // If we end up here, it’s not a continuation byte


  throw Error('Invalid continuation byte');
}

function decodeSymbol(strict) {
  var byte1;
  var byte2;
  var byte3;
  var byte4;
  var codePoint;

  if (byteIndex > byteCount) {
    throw Error('Invalid byte index');
  }

  if (byteIndex == byteCount) {
    return false;
  } // Read first byte


  byte1 = byteArray[byteIndex] & 0xFF;
  byteIndex++; // 1-byte sequence (no continuation bytes)

  if ((byte1 & 0x80) == 0) {
    return byte1;
  } // 2-byte sequence


  if ((byte1 & 0xE0) == 0xC0) {
    byte2 = readContinuationByte();
    codePoint = (byte1 & 0x1F) << 6 | byte2;

    if (codePoint >= 0x80) {
      return codePoint;
    } else {
      throw Error('Invalid continuation byte');
    }
  } // 3-byte sequence (may include unpaired surrogates)


  if ((byte1 & 0xF0) == 0xE0) {
    byte2 = readContinuationByte();
    byte3 = readContinuationByte();
    codePoint = (byte1 & 0x0F) << 12 | byte2 << 6 | byte3;

    if (codePoint >= 0x0800) {
      return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
    } else {
      throw Error('Invalid continuation byte');
    }
  } // 4-byte sequence


  if ((byte1 & 0xF8) == 0xF0) {
    byte2 = readContinuationByte();
    byte3 = readContinuationByte();
    byte4 = readContinuationByte();
    codePoint = (byte1 & 0x07) << 0x12 | byte2 << 0x0C | byte3 << 0x06 | byte4;

    if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
      return codePoint;
    }
  }

  throw Error('Invalid UTF-8 detected');
}

var byteArray;
var byteCount;
var byteIndex;

function utf8decode(byteString, opts) {
  opts = opts || {};
  var strict = false !== opts.strict;
  byteArray = ucs2decode(byteString);
  byteCount = byteArray.length;
  byteIndex = 0;
  var codePoints = [];
  var tmp;

  while ((tmp = decodeSymbol(strict)) !== false) {
    codePoints.push(tmp);
  }

  return ucs2encode(codePoints);
}

var utf8 = {
  version: '2.1.2',
  encode: utf8encode,
  decode: utf8decode
};

var base64Arraybuffer = createCommonjsModule(function (module, exports) {
  /*
   * base64-arraybuffer
   * https://github.com/niklasvh/base64-arraybuffer
   *
   * Copyright (c) 2012 Niklas von Hertzen
   * Licensed under the MIT license.
   */
  (function (chars) {

    exports.encode = function (arraybuffer) {
      var bytes = new Uint8Array(arraybuffer),
          i,
          len = bytes.length,
          base64 = "";

      for (i = 0; i < len; i += 3) {
        base64 += chars[bytes[i] >> 2];
        base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64 += chars[bytes[i + 2] & 63];
      }

      if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + "=";
      } else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + "==";
      }

      return base64;
    };

    exports.decode = function (base64) {
      var bufferLength = base64.length * 0.75,
          len = base64.length,
          i,
          p = 0,
          encoded1,
          encoded2,
          encoded3,
          encoded4;

      if (base64[base64.length - 1] === "=") {
        bufferLength--;

        if (base64[base64.length - 2] === "=") {
          bufferLength--;
        }
      }

      var arraybuffer = new ArrayBuffer(bufferLength),
          bytes = new Uint8Array(arraybuffer);

      for (i = 0; i < len; i += 4) {
        encoded1 = chars.indexOf(base64[i]);
        encoded2 = chars.indexOf(base64[i + 1]);
        encoded3 = chars.indexOf(base64[i + 2]);
        encoded4 = chars.indexOf(base64[i + 3]);
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
      }

      return arraybuffer;
    };
  })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
});
base64Arraybuffer.encode;
base64Arraybuffer.decode;

/**
 * Create a blob builder even when vendor prefixes exist
 */
var BlobBuilder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof WebKitBlobBuilder !== 'undefined' ? WebKitBlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : false;
/**
 * Check if Blob constructor is supported
 */

var blobSupported = function () {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch (e) {
    return false;
  }
}();
/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */


var blobSupportsArrayBufferView = blobSupported && function () {
  try {
    var b = new Blob([new Uint8Array([1, 2])]);
    return b.size === 2;
  } catch (e) {
    return false;
  }
}();
/**
 * Check if BlobBuilder is supported
 */


var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;
/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  return ary.map(function (chunk) {
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer; // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer

      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      return buf;
    }

    return chunk;
  });
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};
  var bb = new BlobBuilder();
  mapArrayBufferViews(ary).forEach(function (part) {
    bb.append(part);
  });
  return options.type ? bb.getBlob(options.type) : bb.getBlob();
}

function BlobConstructor(ary, options) {
  return new Blob(mapArrayBufferViews(ary), options || {});
}

if (typeof Blob !== 'undefined') {
  BlobBuilderConstructor.prototype = Blob.prototype;
  BlobConstructor.prototype = Blob.prototype;
}

var blob = function () {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
}();

var browser$1 = createCommonjsModule(function (module, exports) {
  /**
   * Module dependencies.
   */
  var base64encoder;

  if (typeof ArrayBuffer !== 'undefined') {
    base64encoder = base64Arraybuffer;
  }
  /**
   * Check if we are running an android browser. That requires us to use
   * ArrayBuffer with polling transports...
   *
   * http://ghinda.net/jpeg-blob-ajax-android/
   */


  var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
  /**
   * Check if we are running in PhantomJS.
   * Uploading a Blob with PhantomJS does not work correctly, as reported here:
   * https://github.com/ariya/phantomjs/issues/11395
   * @type boolean
   */

  var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);
  /**
   * When true, avoids using Blobs to encode payloads.
   * @type boolean
   */

  var dontSendBlobs = isAndroid || isPhantomJS;
  /**
   * Current protocol version.
   */

  exports.protocol = 3;
  /**
   * Packet types.
   */

  var packets = exports.packets = {
    open: 0 // non-ws
    ,
    close: 1 // non-ws
    ,
    ping: 2,
    pong: 3,
    message: 4,
    upgrade: 5,
    noop: 6
  };
  var packetslist = keys(packets);
  /**
   * Premade error packet.
   */

  var err = {
    type: 'error',
    data: 'parser error'
  };
  /**
   * Create a blob api even for blob builder when vendor prefixes exist
   */

  /**
   * Encodes a packet.
   *
   *     <packet type id> [ <data> ]
   *
   * Example:
   *
   *     5hello world
   *     3
   *     4
   *
   * Binary is encoded in an identical principle
   *
   * @api private
   */

  exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
    if (typeof supportsBinary === 'function') {
      callback = supportsBinary;
      supportsBinary = false;
    }

    if (typeof utf8encode === 'function') {
      callback = utf8encode;
      utf8encode = null;
    }

    var data = packet.data === undefined ? undefined : packet.data.buffer || packet.data;

    if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
      return encodeArrayBuffer(packet, supportsBinary, callback);
    } else if (typeof blob !== 'undefined' && data instanceof blob) {
      return encodeBlob(packet, supportsBinary, callback);
    } // might be an object with { base64: true, data: dataAsBase64String }


    if (data && data.base64) {
      return encodeBase64Object(packet, callback);
    } // Sending data as a utf-8 string


    var encoded = packets[packet.type]; // data fragment is optional

    if (undefined !== packet.data) {
      encoded += utf8encode ? utf8.encode(String(packet.data), {
        strict: false
      }) : String(packet.data);
    }

    return callback('' + encoded);
  };

  function encodeBase64Object(packet, callback) {
    // packet data is an object { base64: true, data: dataAsBase64String }
    var message = 'b' + exports.packets[packet.type] + packet.data.data;
    return callback(message);
  }
  /**
   * Encode packet helpers for binary types
   */


  function encodeArrayBuffer(packet, supportsBinary, callback) {
    if (!supportsBinary) {
      return exports.encodeBase64Packet(packet, callback);
    }

    var data = packet.data;
    var contentArray = new Uint8Array(data);
    var resultBuffer = new Uint8Array(1 + data.byteLength);
    resultBuffer[0] = packets[packet.type];

    for (var i = 0; i < contentArray.length; i++) {
      resultBuffer[i + 1] = contentArray[i];
    }

    return callback(resultBuffer.buffer);
  }

  function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
    if (!supportsBinary) {
      return exports.encodeBase64Packet(packet, callback);
    }

    var fr = new FileReader();

    fr.onload = function () {
      exports.encodePacket({
        type: packet.type,
        data: fr.result
      }, supportsBinary, true, callback);
    };

    return fr.readAsArrayBuffer(packet.data);
  }

  function encodeBlob(packet, supportsBinary, callback) {
    if (!supportsBinary) {
      return exports.encodeBase64Packet(packet, callback);
    }

    if (dontSendBlobs) {
      return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
    }

    var length = new Uint8Array(1);
    length[0] = packets[packet.type];
    var blob$1 = new blob([length.buffer, packet.data]);
    return callback(blob$1);
  }
  /**
   * Encodes a packet with binary data in a base64 string
   *
   * @param {Object} packet, has `type` and `data`
   * @return {String} base64 encoded message
   */


  exports.encodeBase64Packet = function (packet, callback) {
    var message = 'b' + exports.packets[packet.type];

    if (typeof blob !== 'undefined' && packet.data instanceof blob) {
      var fr = new FileReader();

      fr.onload = function () {
        var b64 = fr.result.split(',')[1];
        callback(message + b64);
      };

      return fr.readAsDataURL(packet.data);
    }

    var b64data;

    try {
      b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
    } catch (e) {
      // iPhone Safari doesn't let you apply with typed arrays
      var typed = new Uint8Array(packet.data);
      var basic = new Array(typed.length);

      for (var i = 0; i < typed.length; i++) {
        basic[i] = typed[i];
      }

      b64data = String.fromCharCode.apply(null, basic);
    }

    message += btoa(b64data);
    return callback(message);
  };
  /**
   * Decodes a packet. Changes format to Blob if requested.
   *
   * @return {Object} with `type` and `data` (if any)
   * @api private
   */


  exports.decodePacket = function (data, binaryType, utf8decode) {
    if (data === undefined) {
      return err;
    } // String data


    if (typeof data === 'string') {
      if (data.charAt(0) === 'b') {
        return exports.decodeBase64Packet(data.substr(1), binaryType);
      }

      if (utf8decode) {
        data = tryDecode(data);

        if (data === false) {
          return err;
        }
      }

      var type = data.charAt(0);

      if (Number(type) != type || !packetslist[type]) {
        return err;
      }

      if (data.length > 1) {
        return {
          type: packetslist[type],
          data: data.substring(1)
        };
      } else {
        return {
          type: packetslist[type]
        };
      }
    }

    var asArray = new Uint8Array(data);
    var type = asArray[0];
    var rest = arraybuffer_slice(data, 1);

    if (blob && binaryType === 'blob') {
      rest = new blob([rest]);
    }

    return {
      type: packetslist[type],
      data: rest
    };
  };

  function tryDecode(data) {
    try {
      data = utf8.decode(data, {
        strict: false
      });
    } catch (e) {
      return false;
    }

    return data;
  }
  /**
   * Decodes a packet encoded in a base64 string
   *
   * @param {String} base64 encoded message
   * @return {Object} with `type` and `data` (if any)
   */


  exports.decodeBase64Packet = function (msg, binaryType) {
    var type = packetslist[msg.charAt(0)];

    if (!base64encoder) {
      return {
        type: type,
        data: {
          base64: true,
          data: msg.substr(1)
        }
      };
    }

    var data = base64encoder.decode(msg.substr(1));

    if (binaryType === 'blob' && blob) {
      data = new blob([data]);
    }

    return {
      type: type,
      data: data
    };
  };
  /**
   * Encodes multiple messages (payload).
   *
   *     <length>:data
   *
   * Example:
   *
   *     11:hello world2:hi
   *
   * If any contents are binary, they will be encoded as base64 strings. Base64
   * encoded strings are marked with a b before the length specifier
   *
   * @param {Array} packets
   * @api private
   */


  exports.encodePayload = function (packets, supportsBinary, callback) {
    if (typeof supportsBinary === 'function') {
      callback = supportsBinary;
      supportsBinary = null;
    }

    var isBinary = hasBinary2(packets);

    if (supportsBinary && isBinary) {
      if (blob && !dontSendBlobs) {
        return exports.encodePayloadAsBlob(packets, callback);
      }

      return exports.encodePayloadAsArrayBuffer(packets, callback);
    }

    if (!packets.length) {
      return callback('0:');
    }

    function setLengthHeader(message) {
      return message.length + ':' + message;
    }

    function encodeOne(packet, doneCallback) {
      exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function (message) {
        doneCallback(null, setLengthHeader(message));
      });
    }

    map(packets, encodeOne, function (err, results) {
      return callback(results.join(''));
    });
  };
  /**
   * Async array map using after
   */


  function map(ary, each, done) {
    var result = new Array(ary.length);
    var next = after_1(ary.length, done);

    var eachWithIndex = function (i, el, cb) {
      each(el, function (error, msg) {
        result[i] = msg;
        cb(error, result);
      });
    };

    for (var i = 0; i < ary.length; i++) {
      eachWithIndex(i, ary[i], next);
    }
  }
  /*
   * Decodes data when a payload is maybe expected. Possible binary contents are
   * decoded from their base64 representation
   *
   * @param {String} data, callback method
   * @api public
   */


  exports.decodePayload = function (data, binaryType, callback) {
    if (typeof data !== 'string') {
      return exports.decodePayloadAsBinary(data, binaryType, callback);
    }

    if (typeof binaryType === 'function') {
      callback = binaryType;
      binaryType = null;
    }

    var packet;

    if (data === '') {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    var length = '',
        n,
        msg;

    for (var i = 0, l = data.length; i < l; i++) {
      var chr = data.charAt(i);

      if (chr !== ':') {
        length += chr;
        continue;
      }

      if (length === '' || length != (n = Number(length))) {
        // parser error - ignoring payload
        return callback(err, 0, 1);
      }

      msg = data.substr(i + 1, n);

      if (length != msg.length) {
        // parser error - ignoring payload
        return callback(err, 0, 1);
      }

      if (msg.length) {
        packet = exports.decodePacket(msg, binaryType, false);

        if (err.type === packet.type && err.data === packet.data) {
          // parser error in individual packet - ignoring payload
          return callback(err, 0, 1);
        }

        var ret = callback(packet, i + n, l);
        if (false === ret) return;
      } // advance cursor


      i += n;
      length = '';
    }

    if (length !== '') {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }
  };
  /**
   * Encodes multiple messages (payload) as binary.
   *
   * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
   * 255><data>
   *
   * Example:
   * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
   *
   * @param {Array} packets
   * @return {ArrayBuffer} encoded payload
   * @api private
   */


  exports.encodePayloadAsArrayBuffer = function (packets, callback) {
    if (!packets.length) {
      return callback(new ArrayBuffer(0));
    }

    function encodeOne(packet, doneCallback) {
      exports.encodePacket(packet, true, true, function (data) {
        return doneCallback(null, data);
      });
    }

    map(packets, encodeOne, function (err, encodedPackets) {
      var totalLength = encodedPackets.reduce(function (acc, p) {
        var len;

        if (typeof p === 'string') {
          len = p.length;
        } else {
          len = p.byteLength;
        }

        return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
      }, 0);
      var resultArray = new Uint8Array(totalLength);
      var bufferIndex = 0;
      encodedPackets.forEach(function (p) {
        var isString = typeof p === 'string';
        var ab = p;

        if (isString) {
          var view = new Uint8Array(p.length);

          for (var i = 0; i < p.length; i++) {
            view[i] = p.charCodeAt(i);
          }

          ab = view.buffer;
        }

        if (isString) {
          // not true binary
          resultArray[bufferIndex++] = 0;
        } else {
          // true binary
          resultArray[bufferIndex++] = 1;
        }

        var lenStr = ab.byteLength.toString();

        for (var i = 0; i < lenStr.length; i++) {
          resultArray[bufferIndex++] = parseInt(lenStr[i]);
        }

        resultArray[bufferIndex++] = 255;
        var view = new Uint8Array(ab);

        for (var i = 0; i < view.length; i++) {
          resultArray[bufferIndex++] = view[i];
        }
      });
      return callback(resultArray.buffer);
    });
  };
  /**
   * Encode as Blob
   */


  exports.encodePayloadAsBlob = function (packets, callback) {
    function encodeOne(packet, doneCallback) {
      exports.encodePacket(packet, true, true, function (encoded) {
        var binaryIdentifier = new Uint8Array(1);
        binaryIdentifier[0] = 1;

        if (typeof encoded === 'string') {
          var view = new Uint8Array(encoded.length);

          for (var i = 0; i < encoded.length; i++) {
            view[i] = encoded.charCodeAt(i);
          }

          encoded = view.buffer;
          binaryIdentifier[0] = 0;
        }

        var len = encoded instanceof ArrayBuffer ? encoded.byteLength : encoded.size;
        var lenStr = len.toString();
        var lengthAry = new Uint8Array(lenStr.length + 1);

        for (var i = 0; i < lenStr.length; i++) {
          lengthAry[i] = parseInt(lenStr[i]);
        }

        lengthAry[lenStr.length] = 255;

        if (blob) {
          var blob$1 = new blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
          doneCallback(null, blob$1);
        }
      });
    }

    map(packets, encodeOne, function (err, results) {
      return callback(new blob(results));
    });
  };
  /*
   * Decodes data when a payload is maybe expected. Strings are decoded by
   * interpreting each byte as a key code for entries marked to start with 0. See
   * description of encodePayloadAsBinary
   *
   * @param {ArrayBuffer} data, callback method
   * @api public
   */


  exports.decodePayloadAsBinary = function (data, binaryType, callback) {
    if (typeof binaryType === 'function') {
      callback = binaryType;
      binaryType = null;
    }

    var bufferTail = data;
    var buffers = [];

    while (bufferTail.byteLength > 0) {
      var tailArray = new Uint8Array(bufferTail);
      var isString = tailArray[0] === 0;
      var msgLength = '';

      for (var i = 1;; i++) {
        if (tailArray[i] === 255) break; // 310 = char length of Number.MAX_VALUE

        if (msgLength.length > 310) {
          return callback(err, 0, 1);
        }

        msgLength += tailArray[i];
      }

      bufferTail = arraybuffer_slice(bufferTail, 2 + msgLength.length);
      msgLength = parseInt(msgLength);
      var msg = arraybuffer_slice(bufferTail, 0, msgLength);

      if (isString) {
        try {
          msg = String.fromCharCode.apply(null, new Uint8Array(msg));
        } catch (e) {
          // iPhone Safari doesn't let you apply to typed arrays
          var typed = new Uint8Array(msg);
          msg = '';

          for (var i = 0; i < typed.length; i++) {
            msg += String.fromCharCode(typed[i]);
          }
        }
      }

      buffers.push(msg);
      bufferTail = arraybuffer_slice(bufferTail, msgLength);
    }

    var total = buffers.length;
    buffers.forEach(function (buffer, i) {
      callback(exports.decodePacket(buffer, binaryType, true), i, total);
    });
  };
});
browser$1.protocol;
browser$1.packets;
browser$1.encodePacket;
browser$1.encodeBase64Packet;
browser$1.decodePacket;
browser$1.decodeBase64Packet;
browser$1.encodePayload;
browser$1.decodePayload;
browser$1.encodePayloadAsArrayBuffer;
browser$1.encodePayloadAsBlob;
browser$1.decodePayloadAsBinary;

var componentEmitter$1 = createCommonjsModule(function (module) {
  /**
   * Expose `Emitter`.
   */
  {
    module.exports = Emitter;
  }
  /**
   * Initialize a new `Emitter`.
   *
   * @api public
   */


  function Emitter(obj) {
    if (obj) return mixin(obj);
  }
  /**
   * Mixin the emitter properties.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */

  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }

    return obj;
  }
  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */


  Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
    return this;
  };
  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */


  Emitter.prototype.once = function (event, fn) {
    function on() {
      this.off(event, on);
      fn.apply(this, arguments);
    }

    on.fn = fn;
    this.on(event, on);
    return this;
  };
  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */


  Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {}; // all

    if (0 == arguments.length) {
      this._callbacks = {};
      return this;
    } // specific event


    var callbacks = this._callbacks['$' + event];
    if (!callbacks) return this; // remove all handlers

    if (1 == arguments.length) {
      delete this._callbacks['$' + event];
      return this;
    } // remove specific handler


    var cb;

    for (var i = 0; i < callbacks.length; i++) {
      cb = callbacks[i];

      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    } // Remove event specific arrays for event types that no
    // one is subscribed for to avoid memory leak.


    if (callbacks.length === 0) {
      delete this._callbacks['$' + event];
    }

    return this;
  };
  /**
   * Emit `event` with the given args.
   *
   * @param {String} event
   * @param {Mixed} ...
   * @return {Emitter}
   */


  Emitter.prototype.emit = function (event) {
    this._callbacks = this._callbacks || {};
    var args = new Array(arguments.length - 1),
        callbacks = this._callbacks['$' + event];

    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }

    if (callbacks) {
      callbacks = callbacks.slice(0);

      for (var i = 0, len = callbacks.length; i < len; ++i) {
        callbacks[i].apply(this, args);
      }
    }

    return this;
  };
  /**
   * Return array of callbacks for `event`.
   *
   * @param {String} event
   * @return {Array}
   * @api public
   */


  Emitter.prototype.listeners = function (event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks['$' + event] || [];
  };
  /**
   * Check if this emitter has `event` handlers.
   *
   * @param {String} event
   * @return {Boolean}
   * @api public
   */


  Emitter.prototype.hasListeners = function (event) {
    return !!this.listeners(event).length;
  };
});

/**
 * Module dependencies.
 */

/**
 * Module exports.
 */

var transport = Transport;
/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport(opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;
  this.withCredentials = opts.withCredentials; // SSL options for Node.js client

  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode; // results of ReactNative environment detection

  this.isReactNative = opts.isReactNative; // other options for Node.js client

  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}
/**
 * Mix in `Emitter`.
 */


componentEmitter$1(Transport.prototype);
/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};
/**
 * Opens the transport.
 *
 * @api public
 */


Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};
/**
 * Closes the transport.
 *
 * @api private
 */


Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};
/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */


Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};
/**
 * Called upon open
 *
 * @api private
 */


Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};
/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */


Transport.prototype.onData = function (data) {
  var packet = browser$1.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};
/**
 * Called with a decoded packet.
 */


Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};
/**
 * Called upon close.
 *
 * @api private
 */


Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
var encode$2 = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */


var decode$2 = function (qs) {
  var qry = {};
  var pairs = qs.split('&');

  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return qry;
};

var parseqs$1 = {
  encode: encode$2,
  decode: decode$2
};

var componentInherit = function (a, b) {
  var fn = function () {};

  fn.prototype = b.prototype;
  a.prototype = new fn();
  a.prototype.constructor = a;
};

var alphabet$1 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
    length = 64,
    map = {},
    seed$1 = 0,
    i = 0,
    prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */

function encode$1(num) {
  var encoded = '';

  do {
    encoded = alphabet$1[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */


function decode$1(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */


function yeast() {
  var now = encode$1(+new Date());
  if (now !== prev) return seed$1 = 0, prev = now;
  return now + '.' + encode$1(seed$1++);
} //
// Map each character to its index.
//


for (; i < length; i++) map[alphabet$1[i]] = i; //
// Expose the `yeast`, `encode` and `decode` functions.
//


yeast.encode = encode$1;
yeast.decode = decode$1;
var yeast_1 = yeast;

/**
 * Helpers.
 */
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms = function (val, options) {
  options = options || {};
  var type = typeof val;

  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;

    case 'days':
    case 'day':
    case 'd':
      return n * d;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }

  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }

  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }

  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong(ms) {
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural(ms, n, name) {
  if (ms < n) {
    return;
  }

  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }

  return Math.ceil(ms / n) + ' ' + name + 's';
}

var debug$5 = createCommonjsModule(function (module, exports) {
  /**
   * This is the common logic for both the Node.js and web browser
   * implementations of `debug()`.
   *
   * Expose `debug()` as the module.
   */
  exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = ms;
  /**
   * Active `debug` instances.
   */

  exports.instances = [];
  /**
   * The currently active debug mode names, and names to skip.
   */

  exports.names = [];
  exports.skips = [];
  /**
   * Map of special "%n" handling functions, for the debug "format" argument.
   *
   * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
   */

  exports.formatters = {};
  /**
   * Select a color.
   * @param {String} namespace
   * @return {Number}
   * @api private
   */

  function selectColor(namespace) {
    var hash = 0,
        i;

    for (i in namespace) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return exports.colors[Math.abs(hash) % exports.colors.length];
  }
  /**
   * Create a debugger with the given `namespace`.
   *
   * @param {String} namespace
   * @return {Function}
   * @api public
   */


  function createDebug(namespace) {
    var prevTime;

    function debug() {
      // disabled?
      if (!debug.enabled) return;
      var self = debug; // set `diff` timestamp

      var curr = +new Date();
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr; // turn the `arguments` into a proper Array

      var args = new Array(arguments.length);

      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }

      args[0] = exports.coerce(args[0]);

      if ('string' !== typeof args[0]) {
        // anything else let's inspect with %O
        args.unshift('%O');
      } // apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // if we encounter an escaped % then don't increase the array index
        if (match === '%%') return match;
        index++;
        var formatter = exports.formatters[format];

        if ('function' === typeof formatter) {
          var val = args[index];
          match = formatter.call(self, val); // now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // apply env-specific formatting (colors, etc.)

      exports.formatArgs.call(self, args);
      var logFn = debug.log || exports.log || console.log.bind(console);
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = exports.enabled(namespace);
    debug.useColors = exports.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy; // env-specific initialization logic for debug instances

    if ('function' === typeof exports.init) {
      exports.init(debug);
    }

    exports.instances.push(debug);
    return debug;
  }

  function destroy() {
    var index = exports.instances.indexOf(this);

    if (index !== -1) {
      exports.instances.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
  /**
   * Enables a debug mode by namespaces. This can include modes
   * separated by a colon and wildcards.
   *
   * @param {String} namespaces
   * @api public
   */


  function enable(namespaces) {
    exports.save(namespaces);
    exports.names = [];
    exports.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) continue; // ignore empty strings

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        exports.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < exports.instances.length; i++) {
      var instance = exports.instances[i];
      instance.enabled = exports.enabled(instance.namespace);
    }
  }
  /**
   * Disable debug output.
   *
   * @api public
   */


  function disable() {
    exports.enable('');
  }
  /**
   * Returns true if the given mode name is enabled, false otherwise.
   *
   * @param {String} name
   * @return {Boolean}
   * @api public
   */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i, len;

    for (i = 0, len = exports.skips.length; i < len; i++) {
      if (exports.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = exports.names.length; i < len; i++) {
      if (exports.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
   * Coerce `val`.
   *
   * @param {Mixed} val
   * @return {Mixed}
   * @api private
   */


  function coerce(val) {
    if (val instanceof Error) return val.stack || val.message;
    return val;
  }
});
debug$5.coerce;
debug$5.disable;
debug$5.enable;
debug$5.enabled;
debug$5.humanize;
debug$5.instances;
debug$5.names;
debug$5.skips;
debug$5.formatters;

var browser = createCommonjsModule(function (module, exports) {
  /**
   * This is the web browser implementation of `debug()`.
   *
   * Expose `debug()` as the module.
   */
  exports = module.exports = debug$5;
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
  /**
   * Colors.
   */

  exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
  /**
   * Currently only WebKit-based Web Inspectors, Firefox >= v31,
   * and the Firebug extension (any Firefox version) are known
   * to support "%c" CSS customizations.
   *
   * TODO: add a `localStorage` variable to explicitly enable/disable colors
   */

  function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
      return true;
    } // Internet Explorer and Edge do not support colors.


    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
      return false;
    } // is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  /**
   * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
   */


  exports.formatters.j = function (v) {
    try {
      return JSON.stringify(v);
    } catch (err) {
      return '[UnexpectedJSONParseError]: ' + err.message;
    }
  };
  /**
   * Colorize log arguments if enabled.
   *
   * @api public
   */


  function formatArgs(args) {
    var useColors = this.useColors;
    args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
    if (!useColors) return;
    var c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into

    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function (match) {
      if ('%%' === match) return;
      index++;

      if ('%c' === match) {
        // we only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
      }
    });
    args.splice(lastC, 0, c);
  }
  /**
   * Invokes `console.log()` when available.
   * No-op when `console.log` is not a "function".
   *
   * @api public
   */


  function log() {
    // this hackery is required for IE8/9, where
    // the `console.log` function doesn't have 'apply'
    return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
  }
  /**
   * Save `namespaces`.
   *
   * @param {String} namespaces
   * @api private
   */


  function save(namespaces) {
    try {
      if (null == namespaces) {
        exports.storage.removeItem('debug');
      } else {
        exports.storage.debug = namespaces;
      }
    } catch (e) {}
  }
  /**
   * Load `namespaces`.
   *
   * @return {String} returns the previously persisted debug modes
   * @api private
   */


  function load() {
    var r;

    try {
      r = exports.storage.debug;
    } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


    if (!r && typeof process !== 'undefined' && 'env' in process) {
      r = process.env.DEBUG;
    }

    return r;
  }
  /**
   * Enable namespaces listed in `localStorage.debug` initially.
   */


  exports.enable(load());
  /**
   * Localstorage attempts to return the localstorage.
   *
   * This is necessary because safari throws
   * when a user disables cookies/localstorage
   * and you attempt to access it.
   *
   * @return {LocalStorage}
   * @api private
   */

  function localstorage() {
    try {
      return window.localStorage;
    } catch (e) {}
  }
});
browser.log;
browser.formatArgs;
browser.save;
browser.load;
browser.useColors;
browser.storage;
browser.colors;

/**
 * Module dependencies.
 */

var debug$4 = browser('engine.io-client:polling');
/**
 * Module exports.
 */

var polling$1 = Polling;
/**
 * Is XHR2 supported?
 */

var hasXHR2 = function () {
  var XMLHttpRequest = xmlhttprequest;
  var xhr = new XMLHttpRequest({
    xdomain: false
  });
  return null != xhr.responseType;
}();
/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */


function Polling(opts) {
  var forceBase64 = opts && opts.forceBase64;

  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }

  transport.call(this, opts);
}
/**
 * Inherits from Transport.
 */


componentInherit(Polling, transport);
/**
 * Transport name.
 */

Polling.prototype.name = 'polling';
/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};
/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */


Polling.prototype.pause = function (onPause) {
  var self = this;
  this.readyState = 'pausing';

  function pause() {
    debug$4('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug$4('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function () {
        debug$4('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug$4('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function () {
        debug$4('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};
/**
 * Starts polling cycle.
 *
 * @api public
 */


Polling.prototype.poll = function () {
  debug$4('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};
/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */


Polling.prototype.onData = function (data) {
  var self = this;
  debug$4('polling got data %s', data);

  var callback = function (packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState) {
      self.onOpen();
    } // if its a close packet, we close the ongoing requests


    if ('close' === packet.type) {
      self.onClose();
      return false;
    } // otherwise bypass onData and handle the message


    self.onPacket(packet);
  }; // decode payload


  browser$1.decodePayload(data, this.socket.binaryType, callback); // if an event did not trigger closing

  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug$4('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};
/**
 * For polling, send a close packet.
 *
 * @api private
 */


Polling.prototype.doClose = function () {
  var self = this;

  function close() {
    debug$4('writing close packet');
    self.write([{
      type: 'close'
    }]);
  }

  if ('open' === this.readyState) {
    debug$4('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug$4('transport not open - deferring close');
    this.once('open', close);
  }
};
/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */


Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  var callbackfn = function () {
    self.writable = true;
    self.emit('drain');
  };

  browser$1.encodePayload(packets, this.supportsBinary, function (data) {
    self.doWrite(data, callbackfn);
  });
};
/**
 * Generates uri for connection.
 *
 * @api private
 */


Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = ''; // cache busting is forced

  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast_1();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs$1.encode(query); // avoid port if default for schema

  if (this.port && ('https' === schema && Number(this.port) !== 443 || 'http' === schema && Number(this.port) !== 80)) {
    port = ':' + this.port;
  } // prepend ? to query


  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/* global attachEvent */

/**
 * Module requirements.
 */

var debug$3 = browser('engine.io-client:polling-xhr');
/**
 * Module exports.
 */

var pollingXhr = XHR;
var Request_1 = Request;
/**
 * Empty function
 */

function empty$1() {}
/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */


function XHR(opts) {
  polling$1.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port; // some user agents have empty `location.port`

    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = typeof location !== 'undefined' && opts.hostname !== location.hostname || port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}
/**
 * Inherits from Polling.
 */


componentInherit(XHR, polling$1);
/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;
/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;
  opts.withCredentials = this.withCredentials; // SSL options for Node.js client

  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout; // other options for Node.js client

  opts.extraHeaders = this.extraHeaders;
  return new Request(opts);
};
/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */


XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({
    method: 'POST',
    data: data,
    isBinary: isBinary
  });
  var self = this;
  req.on('success', fn);
  req.on('error', function (err) {
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};
/**
 * Starts a poll cycle.
 *
 * @api private
 */


XHR.prototype.doPoll = function () {
  debug$3('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function (data) {
    self.onData(data);
  });
  req.on('error', function (err) {
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};
/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */


function Request(opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.withCredentials = opts.withCredentials;
  this.requestTimeout = opts.requestTimeout; // SSL options for Node.js client

  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized; // other options for Node.js client

  this.extraHeaders = opts.extraHeaders;
  this.create();
}
/**
 * Mix in `Emitter`.
 */


componentEmitter$1(Request.prototype);
/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = {
    agent: this.agent,
    xdomain: this.xd,
    xscheme: this.xs,
    enablesXDR: this.enablesXDR
  }; // SSL options for Node.js client

  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  var xhr = this.xhr = new xmlhttprequest(opts);
  var self = this;

  try {
    debug$3('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);

    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);

        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {} // ie6 check


    if ('withCredentials' in xhr) {
      xhr.withCredentials = this.withCredentials;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };

      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          try {
            var contentType = xhr.getResponseHeader('Content-Type');

            if (self.supportsBinary && contentType === 'application/octet-stream' || contentType === 'application/octet-stream; charset=UTF-8') {
              xhr.responseType = 'arraybuffer';
            }
          } catch (e) {}
        }

        if (4 !== xhr.readyState) return;

        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function () {
            self.onError(typeof xhr.status === 'number' ? xhr.status : 0);
          }, 0);
        }
      };
    }

    debug$3('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function () {
      self.onError(e);
    }, 0);
    return;
  }

  if (typeof document !== 'undefined') {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};
/**
 * Called upon successful response.
 *
 * @api private
 */


Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};
/**
 * Called if we have data.
 *
 * @api private
 */


Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};
/**
 * Called upon error.
 *
 * @api private
 */


Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};
/**
 * Cleans up house.
 *
 * @api private
 */


Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  } // xmlhttprequest


  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty$1;
  } else {
    this.xhr.onreadystatechange = empty$1;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (typeof document !== 'undefined') {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};
/**
 * Called upon load.
 *
 * @api private
 */


Request.prototype.onLoad = function () {
  var data;

  try {
    var contentType;

    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}

    if (contentType === 'application/octet-stream' || contentType === 'application/octet-stream; charset=UTF-8') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }

  if (null != data) {
    this.onData(data);
  }
};
/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */


Request.prototype.hasXDR = function () {
  return typeof XDomainRequest !== 'undefined' && !this.xs && this.enablesXDR;
};
/**
 * Aborts the request.
 *
 * @api public
 */


Request.prototype.abort = function () {
  this.cleanup();
};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */


Request.requestsCount = 0;
Request.requests = {};

if (typeof document !== 'undefined') {
  if (typeof attachEvent === 'function') {
    attachEvent('onunload', unloadHandler);
  } else if (typeof addEventListener === 'function') {
    var terminationEvent = 'onpagehide' in globalThis_browser ? 'pagehide' : 'unload';
    addEventListener(terminationEvent, unloadHandler, false);
  }
}

function unloadHandler() {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}
pollingXhr.Request = Request_1;

/**
 * Module requirements.
 */

/**
 * Module exports.
 */

var pollingJsonp = JSONPPolling;
/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;
/**
 * Global JSONP callbacks.
 */

var callbacks;
/**
 * Noop.
 */

function empty() {}
/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */


function JSONPPolling(opts) {
  polling$1.call(this, opts);
  this.query = this.query || {}; // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution

  if (!callbacks) {
    // we need to consider multiple engines in the same page
    callbacks = globalThis_browser.___eio = globalThis_browser.___eio || [];
  } // callback identifier


  this.index = callbacks.length; // add callback to jsonp global

  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  }); // append to query string

  this.query.j = this.index; // prevent spurious errors from being emitted when the window is unloaded

  if (typeof addEventListener === 'function') {
    addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}
/**
 * Inherits from Polling.
 */


componentInherit(JSONPPolling, polling$1);
/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;
/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  polling$1.prototype.doClose.call(this);
};
/**
 * Starts a poll cycle.
 *
 * @api private
 */


JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();

  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];

  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }

  this.script = script;
  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};
/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */


JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;
    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);
    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete() {
    initIframe();
    fn();
  }

  function initIframe() {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;
    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe(); // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side

  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

var _nodeResolve_empty = {};

var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': _nodeResolve_empty
});

var require$$1 = getCjsExportFromNamespace(_nodeResolve_empty$1);

/**
 * Module dependencies.
 */

var debug$2 = browser('engine.io-client:websocket');
var BrowserWebSocket, NodeWebSocket;

if (typeof WebSocket !== 'undefined') {
  BrowserWebSocket = WebSocket;
} else if (typeof self !== 'undefined') {
  BrowserWebSocket = self.WebSocket || self.MozWebSocket;
}

if (typeof window === 'undefined') {
  try {
    NodeWebSocket = require$$1;
  } catch (e) {}
}
/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */


var WebSocketImpl = BrowserWebSocket || NodeWebSocket;
/**
 * Module exports.
 */

var websocket = WS;
/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS(opts) {
  var forceBase64 = opts && opts.forceBase64;

  if (forceBase64) {
    this.supportsBinary = false;
  }

  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;

  if (!this.usingBrowserWebSocket) {
    WebSocketImpl = NodeWebSocket;
  }

  transport.call(this, opts);
}
/**
 * Inherits from Transport.
 */


componentInherit(WS, transport);
/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';
/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;
/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;
  var opts = {};

  if (!this.isReactNative) {
    opts.agent = this.agent;
    opts.perMessageDeflate = this.perMessageDeflate; // SSL options for Node.js client

    opts.pfx = this.pfx;
    opts.key = this.key;
    opts.passphrase = this.passphrase;
    opts.cert = this.cert;
    opts.ca = this.ca;
    opts.ciphers = this.ciphers;
    opts.rejectUnauthorized = this.rejectUnauthorized;
  }

  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }

  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws = this.usingBrowserWebSocket && !this.isReactNative ? protocols ? new WebSocketImpl(uri, protocols) : new WebSocketImpl(uri) : new WebSocketImpl(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};
/**
 * Adds event listeners to the socket
 *
 * @api private
 */


WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };

  this.ws.onclose = function () {
    self.onClose();
  };

  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };

  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};
/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */


WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false; // encodePacket efficient as it uses WS framing
  // no need for encodePayload

  var total = packets.length;

  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      browser$1.encodePacket(packet, self.supportsBinary, function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};

          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? Buffer.byteLength(data) : data.length;

            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        } // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error


        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug$2('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done() {
    self.emit('flush'); // fake drain
    // defer to next tick to allow Socket to clear writeBuffer

    setTimeout(function () {
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};
/**
 * Called upon close
 *
 * @api private
 */


WS.prototype.onClose = function () {
  transport.prototype.onClose.call(this);
};
/**
 * Closes socket.
 *
 * @api private
 */


WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};
/**
 * Generates uri for connection.
 *
 * @api private
 */


WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = ''; // avoid port if default for schema

  if (this.port && ('wss' === schema && Number(this.port) !== 443 || 'ws' === schema && Number(this.port) !== 80)) {
    port = ':' + this.port;
  } // append timestamp to URI


  if (this.timestampRequests) {
    query[this.timestampParam] = yeast_1();
  } // communicate binary support capabilities


  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs$1.encode(query); // prepend ? to query

  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};
/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */


WS.prototype.check = function () {
  return !!WebSocketImpl && !('__initialize' in WebSocketImpl && this.name === WS.prototype.name);
};

/**
 * Module dependencies
 */

/**
 * Export transports.
 */

var polling_1 = polling;
var websocket_1 = websocket;
/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling(opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port; // some user agents have empty `location.port`

    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new xmlhttprequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new pollingXhr(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new pollingJsonp(opts);
  }
}

var transports = {
  polling: polling_1,
  websocket: websocket_1
};

var indexOf = [].indexOf;

var indexof = function (arr, obj) {
  if (indexOf) return arr.indexOf(obj);

  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }

  return -1;
};

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];

var parseuri = function parseuri(str) {
  var src = str,
      b = str.indexOf('['),
      e = str.indexOf(']');

  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
  }

  var m = re.exec(str || ''),
      uri = {},
      i = 14;

  while (i--) {
    uri[parts[i]] = m[i] || '';
  }

  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
    uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
    uri.ipv6uri = true;
  }

  uri.pathNames = pathNames(uri, uri['path']);
  uri.queryKey = queryKey(uri, uri['query']);
  return uri;
};

function pathNames(obj, path) {
  var regx = /\/{2,9}/g,
      names = path.replace(regx, "/").split("/");

  if (path.substr(0, 1) == '/' || path.length === 0) {
    names.splice(0, 1);
  }

  if (path.substr(path.length - 1, 1) == '/') {
    names.splice(names.length - 1, 1);
  }

  return names;
}

function queryKey(uri, query) {
  var data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

/**
 * Module dependencies.
 */

var debug$1 = browser('engine.io-client:socket');
/**
 * Module exports.
 */

var socket$1 = Socket;
/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket(uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);
  opts = opts || {};

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure : typeof location !== 'undefined' && 'https:' === location.protocol;

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname || (typeof location !== 'undefined' ? location.hostname : 'localhost');
  this.port = opts.port || (typeof location !== 'undefined' && location.port ? location.port : this.secure ? 443 : 80);
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs$1.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.withCredentials = false !== opts.withCredentials;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? opts.perMessageDeflate || {} : false;
  if (true === this.perMessageDeflate) this.perMessageDeflate = {};

  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  } // SSL options for Node.js client


  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode; // detect ReactNative environment

  this.isReactNative = typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative'; // other options for Node.js or ReactNative client

  if (typeof self === 'undefined' || this.isReactNative) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  } // set on handshake


  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null; // set on heartbeat

  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;
  this.open();
}

Socket.priorWebsocketSuccess = false;
/**
 * Mix in `Emitter`.
 */

componentEmitter$1(Socket.prototype);
/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = browser$1.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = transport;
Socket.transports = transports;
Socket.parser = browser$1;
/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug$1('creating transport "%s"', name);
  var query = clone(this.query); // append engine.io protocol identifier

  query.EIO = browser$1.protocol; // transport name

  query.transport = name; // per-transport options

  var options = this.transportOptions[name] || {}; // session id if we already have one

  if (this.id) query.sid = this.id;
  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    withCredentials: options.withCredentials || this.withCredentials,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void 0,
    isReactNative: this.isReactNative
  });
  return transport;
};

function clone(obj) {
  var o = {};

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }

  return o;
}
/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */


Socket.prototype.open = function () {
  var transport;

  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function () {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }

  this.readyState = 'opening'; // Retry with the next transport if the transport is disabled (jsonp: false)

  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};
/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */


Socket.prototype.setTransport = function (transport) {
  debug$1('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug$1('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  } // set up transport


  this.transport = transport; // set up transport listeners

  transport.on('drain', function () {
    self.onDrain();
  }).on('packet', function (packet) {
    self.onPacket(packet);
  }).on('error', function (e) {
    self.onError(e);
  }).on('close', function () {
    self.onClose('transport close');
  });
};
/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */


Socket.prototype.probe = function (name) {
  debug$1('probing transport "%s"', name);
  var transport = this.createTransport(name, {
    probe: 1
  });
  var failed = false;
  var self = this;
  Socket.priorWebsocketSuccess = false;

  function onTransportOpen() {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }

    if (failed) return;
    debug$1('probe transport "%s" opened', name);
    transport.send([{
      type: 'ping',
      data: 'probe'
    }]);
    transport.once('packet', function (msg) {
      if (failed) return;

      if ('pong' === msg.type && 'probe' === msg.data) {
        debug$1('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;
        debug$1('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug$1('changing transport and sending upgrade packet');
          cleanup();
          self.setTransport(transport);
          transport.send([{
            type: 'upgrade'
          }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug$1('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport() {
    if (failed) return; // Any callback called by transport should be ignored since now

    failed = true;
    cleanup();
    transport.close();
    transport = null;
  } // Handle any error that happens while probing


  function onerror(err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;
    freezeTransport();
    debug$1('probe transport "%s" failed because of error: %s', name, err);
    self.emit('upgradeError', error);
  }

  function onTransportClose() {
    onerror('transport closed');
  } // When the socket is closed while we're probing


  function onclose() {
    onerror('socket closed');
  } // When the socket is upgraded while we're probing


  function onupgrade(to) {
    if (transport && to.name !== transport.name) {
      debug$1('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  } // Remove all listeners on the transport and on self


  function cleanup() {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);
  this.once('close', onclose);
  this.once('upgrading', onupgrade);
  transport.open();
};
/**
 * Called when connection is deemed open.
 *
 * @api public
 */


Socket.prototype.onOpen = function () {
  debug$1('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush(); // we check for `readyState` in case an `open`
  // listener already closed the socket

  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug$1('starting upgrade probes');

    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};
/**
 * Handles a packet.
 *
 * @api private
 */


Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug$1('socket receive: type "%s", data "%s"', packet.type, packet.data);
    this.emit('packet', packet); // Socket is live - any packet counts

    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(JSON.parse(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug$1('packet received with socket readyState "%s"', this.readyState);
  }
};
/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */


Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen(); // In case open handler closes socket

  if ('closed' === this.readyState) return;
  this.setPing(); // Prolong liveness of socket on heartbeat

  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};
/**
 * Resets ping timeout.
 *
 * @api private
 */


Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || self.pingInterval + self.pingTimeout);
};
/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */


Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug$1('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};
/**
* Sends a ping packet.
*
* @api private
*/


Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function () {
    self.emit('ping');
  });
};
/**
 * Called on `drain` event
 *
 * @api private
 */


Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen); // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`

  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};
/**
 * Flush write buffers.
 *
 * @api private
 */


Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
    debug$1('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer); // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`

    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};
/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */


Socket.prototype.write = Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};
/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */


Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;
  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};
/**
 * Closes the connection.
 *
 * @api private
 */


Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';
    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close() {
    self.onClose('forced close');
    debug$1('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose() {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade() {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};
/**
 * Called upon transport error
 *
 * @api private
 */


Socket.prototype.onError = function (err) {
  debug$1('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};
/**
 * Called upon transport close.
 *
 * @api private
 */


Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug$1('socket close with reason: "%s"', reason);
    var self = this; // clear timers

    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer); // stop event from firing again for transport

    this.transport.removeAllListeners('close'); // ensure transport won't stay open

    this.transport.close(); // ignore further transport communication

    this.transport.removeAllListeners(); // set ready state

    this.readyState = 'closed'; // clear session id

    this.id = null; // emit close event

    this.emit('close', reason, desc); // clean buffers after, so users can still
    // grab the buffers on `close` event

    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};
/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */


Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];

  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~indexof(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }

  return filteredUpgrades;
};

var lib$2 = socket$1;
/**
 * Exports parser
 *
 * @api public
 *
 */

var parser = browser$1;
lib$2.parser = parser;

var componentEmitter = createCommonjsModule(function (module) {
  /**
   * Expose `Emitter`.
   */
  {
    module.exports = Emitter;
  }
  /**
   * Initialize a new `Emitter`.
   *
   * @api public
   */


  function Emitter(obj) {
    if (obj) return mixin(obj);
  }
  /**
   * Mixin the emitter properties.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */

  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }

    return obj;
  }
  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */


  Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
    return this;
  };
  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */


  Emitter.prototype.once = function (event, fn) {
    function on() {
      this.off(event, on);
      fn.apply(this, arguments);
    }

    on.fn = fn;
    this.on(event, on);
    return this;
  };
  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */


  Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {}; // all

    if (0 == arguments.length) {
      this._callbacks = {};
      return this;
    } // specific event


    var callbacks = this._callbacks['$' + event];
    if (!callbacks) return this; // remove all handlers

    if (1 == arguments.length) {
      delete this._callbacks['$' + event];
      return this;
    } // remove specific handler


    var cb;

    for (var i = 0; i < callbacks.length; i++) {
      cb = callbacks[i];

      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    }

    return this;
  };
  /**
   * Emit `event` with the given args.
   *
   * @param {String} event
   * @param {Mixed} ...
   * @return {Emitter}
   */


  Emitter.prototype.emit = function (event) {
    this._callbacks = this._callbacks || {};
    var args = [].slice.call(arguments, 1),
        callbacks = this._callbacks['$' + event];

    if (callbacks) {
      callbacks = callbacks.slice(0);

      for (var i = 0, len = callbacks.length; i < len; ++i) {
        callbacks[i].apply(this, args);
      }
    }

    return this;
  };
  /**
   * Return array of callbacks for `event`.
   *
   * @param {String} event
   * @return {Array}
   * @api public
   */


  Emitter.prototype.listeners = function (event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks['$' + event] || [];
  };
  /**
   * Check if this emitter has `event` handlers.
   *
   * @param {String} event
   * @return {Boolean}
   * @api public
   */


  Emitter.prototype.hasListeners = function (event) {
    return !!this.listeners(event).length;
  };
});

var toArray_1 = toArray;

function toArray(list, index) {
  var array = [];
  index = index || 0;

  for (var i = index || 0; i < list.length; i++) {
    array[i - index] = list[i];
  }

  return array;
}

/**
 * Module exports.
 */
var on_1 = on;
/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on(obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function () {
      obj.removeListener(ev, fn);
    }
  };
}

/**
 * Slice reference.
 */
var slice = [].slice;
/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

var componentBind = function (obj, fn) {
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function () {
    return fn.apply(obj, args.concat(slice.call(arguments)));
  };
};

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
var encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */


var decode = function (qs) {
  var qry = {};
  var pairs = qs.split('&');

  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return qry;
};

var parseqs = {
  encode: encode,
  decode: decode
};

var socket = createCommonjsModule(function (module, exports) {
  /**
   * Module dependencies.
   */
  var debug = browser$3('socket.io-client:socket');
  /**
   * Module exports.
   */

  module.exports = Socket;
  /**
   * Internal events (blacklisted).
   * These events can't be emitted by the user.
   *
   * @api private
   */

  var events = {
    connect: 1,
    connect_error: 1,
    connect_timeout: 1,
    connecting: 1,
    disconnect: 1,
    error: 1,
    reconnect: 1,
    reconnect_attempt: 1,
    reconnect_failed: 1,
    reconnect_error: 1,
    reconnecting: 1,
    ping: 1,
    pong: 1
  };
  /**
   * Shortcut to `Emitter#emit`.
   */

  var emit = componentEmitter.prototype.emit;
  /**
   * `Socket` constructor.
   *
   * @api public
   */

  function Socket(io, nsp, opts) {
    this.io = io;
    this.nsp = nsp;
    this.json = this; // compat

    this.ids = 0;
    this.acks = {};
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this.connected = false;
    this.disconnected = true;
    this.flags = {};

    if (opts && opts.query) {
      this.query = opts.query;
    }

    if (this.io.autoConnect) this.open();
  }
  /**
   * Mix in `Emitter`.
   */


  componentEmitter(Socket.prototype);
  /**
   * Subscribe to open, close and packet events
   *
   * @api private
   */

  Socket.prototype.subEvents = function () {
    if (this.subs) return;
    var io = this.io;
    this.subs = [on_1(io, 'open', componentBind(this, 'onopen')), on_1(io, 'packet', componentBind(this, 'onpacket')), on_1(io, 'close', componentBind(this, 'onclose'))];
  };
  /**
   * "Opens" the socket.
   *
   * @api public
   */


  Socket.prototype.open = Socket.prototype.connect = function () {
    if (this.connected) return this;
    this.subEvents();
    this.io.open(); // ensure open

    if ('open' === this.io.readyState) this.onopen();
    this.emit('connecting');
    return this;
  };
  /**
   * Sends a `message` event.
   *
   * @return {Socket} self
   * @api public
   */


  Socket.prototype.send = function () {
    var args = toArray_1(arguments);
    args.unshift('message');
    this.emit.apply(this, args);
    return this;
  };
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @param {String} event name
   * @return {Socket} self
   * @api public
   */


  Socket.prototype.emit = function (ev) {
    if (events.hasOwnProperty(ev)) {
      emit.apply(this, arguments);
      return this;
    }

    var args = toArray_1(arguments);
    var packet = {
      type: (this.flags.binary !== undefined ? this.flags.binary : hasBinary2(args)) ? socket_ioParser.BINARY_EVENT : socket_ioParser.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = !this.flags || false !== this.flags.compress; // event ack callback

    if ('function' === typeof args[args.length - 1]) {
      debug('emitting packet with ack id %d', this.ids);
      this.acks[this.ids] = args.pop();
      packet.id = this.ids++;
    }

    if (this.connected) {
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }

    this.flags = {};
    return this;
  };
  /**
   * Sends a packet.
   *
   * @param {Object} packet
   * @api private
   */


  Socket.prototype.packet = function (packet) {
    packet.nsp = this.nsp;
    this.io.packet(packet);
  };
  /**
   * Called upon engine `open`.
   *
   * @api private
   */


  Socket.prototype.onopen = function () {
    debug('transport is open - connecting'); // write connect packet if necessary

    if ('/' !== this.nsp) {
      if (this.query) {
        var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
        debug('sending connect packet with query %s', query);
        this.packet({
          type: socket_ioParser.CONNECT,
          query: query
        });
      } else {
        this.packet({
          type: socket_ioParser.CONNECT
        });
      }
    }
  };
  /**
   * Called upon engine `close`.
   *
   * @param {String} reason
   * @api private
   */


  Socket.prototype.onclose = function (reason) {
    debug('close (%s)', reason);
    this.connected = false;
    this.disconnected = true;
    delete this.id;
    this.emit('disconnect', reason);
  };
  /**
   * Called with socket packet.
   *
   * @param {Object} packet
   * @api private
   */


  Socket.prototype.onpacket = function (packet) {
    var sameNamespace = packet.nsp === this.nsp;
    var rootNamespaceError = packet.type === socket_ioParser.ERROR && packet.nsp === '/';
    if (!sameNamespace && !rootNamespaceError) return;

    switch (packet.type) {
      case socket_ioParser.CONNECT:
        this.onconnect();
        break;

      case socket_ioParser.EVENT:
        this.onevent(packet);
        break;

      case socket_ioParser.BINARY_EVENT:
        this.onevent(packet);
        break;

      case socket_ioParser.ACK:
        this.onack(packet);
        break;

      case socket_ioParser.BINARY_ACK:
        this.onack(packet);
        break;

      case socket_ioParser.DISCONNECT:
        this.ondisconnect();
        break;

      case socket_ioParser.ERROR:
        this.emit('error', packet.data);
        break;
    }
  };
  /**
   * Called upon a server event.
   *
   * @param {Object} packet
   * @api private
   */


  Socket.prototype.onevent = function (packet) {
    var args = packet.data || [];
    debug('emitting event %j', args);

    if (null != packet.id) {
      debug('attaching ack callback to event');
      args.push(this.ack(packet.id));
    }

    if (this.connected) {
      emit.apply(this, args);
    } else {
      this.receiveBuffer.push(args);
    }
  };
  /**
   * Produces an ack callback to emit with an event.
   *
   * @api private
   */


  Socket.prototype.ack = function (id) {
    var self = this;
    var sent = false;
    return function () {
      // prevent double callbacks
      if (sent) return;
      sent = true;
      var args = toArray_1(arguments);
      debug('sending ack %j', args);
      self.packet({
        type: hasBinary2(args) ? socket_ioParser.BINARY_ACK : socket_ioParser.ACK,
        id: id,
        data: args
      });
    };
  };
  /**
   * Called upon a server acknowlegement.
   *
   * @param {Object} packet
   * @api private
   */


  Socket.prototype.onack = function (packet) {
    var ack = this.acks[packet.id];

    if ('function' === typeof ack) {
      debug('calling ack %s with %j', packet.id, packet.data);
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    } else {
      debug('bad ack %s', packet.id);
    }
  };
  /**
   * Called upon server connect.
   *
   * @api private
   */


  Socket.prototype.onconnect = function () {
    this.connected = true;
    this.disconnected = false;
    this.emit('connect');
    this.emitBuffered();
  };
  /**
   * Emit buffered events (received and emitted).
   *
   * @api private
   */


  Socket.prototype.emitBuffered = function () {
    var i;

    for (i = 0; i < this.receiveBuffer.length; i++) {
      emit.apply(this, this.receiveBuffer[i]);
    }

    this.receiveBuffer = [];

    for (i = 0; i < this.sendBuffer.length; i++) {
      this.packet(this.sendBuffer[i]);
    }

    this.sendBuffer = [];
  };
  /**
   * Called upon server disconnect.
   *
   * @api private
   */


  Socket.prototype.ondisconnect = function () {
    debug('server disconnect (%s)', this.nsp);
    this.destroy();
    this.onclose('io server disconnect');
  };
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @api private.
   */


  Socket.prototype.destroy = function () {
    if (this.subs) {
      // clean subscriptions to avoid reconnections
      for (var i = 0; i < this.subs.length; i++) {
        this.subs[i].destroy();
      }

      this.subs = null;
    }

    this.io.destroy(this);
  };
  /**
   * Disconnects the socket manually.
   *
   * @return {Socket} self
   * @api public
   */


  Socket.prototype.close = Socket.prototype.disconnect = function () {
    if (this.connected) {
      debug('performing disconnect (%s)', this.nsp);
      this.packet({
        type: socket_ioParser.DISCONNECT
      });
    } // remove socket from pool


    this.destroy();

    if (this.connected) {
      // fire events
      this.onclose('io client disconnect');
    }

    return this;
  };
  /**
   * Sets the compress flag.
   *
   * @param {Boolean} if `true`, compresses the sending data
   * @return {Socket} self
   * @api public
   */


  Socket.prototype.compress = function (compress) {
    this.flags.compress = compress;
    return this;
  };
  /**
   * Sets the binary flag
   *
   * @param {Boolean} whether the emitted data contains binary
   * @return {Socket} self
   * @api public
   */


  Socket.prototype.binary = function (binary) {
    this.flags.binary = binary;
    return this;
  };
});

/**
 * Expose `Backoff`.
 */
var backo2 = Backoff;
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */


Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);

  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }

  return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */


Backoff.prototype.reset = function () {
  this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */


Backoff.prototype.setMin = function (min) {
  this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */


Backoff.prototype.setMax = function (max) {
  this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */


Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

/**
 * Module dependencies.
 */

var debug = browser$3('socket.io-client:manager');
/**
 * IE6+ hasOwnProperty
 */

var has = Object.prototype.hasOwnProperty;
/**
 * Module exports
 */

var manager = Manager;
/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager(uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};
  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new backo2({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];

  var _parser = opts.parser || socket_ioParser;

  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}
/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */


Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);

  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};
/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */


Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};
/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */


Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : nsp + '#') + this.engine.id;
};
/**
 * Mix in `Emitter`.
 */


componentEmitter(Manager.prototype);
/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};
/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};
/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};
/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};
/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};
/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */


Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};
/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */


Manager.prototype.open = Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;
  debug('opening %s', this.uri);
  this.engine = lib$2(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false; // emit `open`

  var openSub = on_1(socket, 'open', function () {
    self.onopen();
    fn && fn();
  }); // emit `connect_error`

  var errorSub = on_1(socket, 'error', function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);

    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  }); // emit `connect_timeout`

  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout); // set timer

    var timer = setTimeout(function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);
    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);
  return this;
};
/**
 * Called upon transport open.
 *
 * @api private
 */


Manager.prototype.onopen = function () {
  debug('open'); // clear old subs

  this.cleanup(); // mark as open

  this.readyState = 'open';
  this.emit('open'); // add new subs

  var socket = this.engine;
  this.subs.push(on_1(socket, 'data', componentBind(this, 'ondata')));
  this.subs.push(on_1(socket, 'ping', componentBind(this, 'onping')));
  this.subs.push(on_1(socket, 'pong', componentBind(this, 'onpong')));
  this.subs.push(on_1(socket, 'error', componentBind(this, 'onerror')));
  this.subs.push(on_1(socket, 'close', componentBind(this, 'onclose')));
  this.subs.push(on_1(this.decoder, 'decoded', componentBind(this, 'ondecoded')));
};
/**
 * Called upon a ping.
 *
 * @api private
 */


Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};
/**
 * Called upon a packet.
 *
 * @api private
 */


Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};
/**
 * Called with data.
 *
 * @api private
 */


Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};
/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */


Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};
/**
 * Called upon socket error.
 *
 * @api private
 */


Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};
/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */


Manager.prototype.socket = function (nsp, opts) {
  var socket$1 = this.nsps[nsp];

  if (!socket$1) {
    socket$1 = new socket(this, nsp, opts);
    this.nsps[nsp] = socket$1;
    var self = this;
    socket$1.on('connecting', onConnecting);
    socket$1.on('connect', function () {
      socket$1.id = self.generateId(nsp);
    });

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting() {
    if (!~indexof(self.connecting, socket$1)) {
      self.connecting.push(socket$1);
    }
  }

  return socket$1;
};
/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */


Manager.prototype.destroy = function (socket) {
  var index = indexof(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;
  this.close();
};
/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */


Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }

      self.encoding = false;
      self.processPacketQueue();
    });
  } else {
    // add packet to the queue
    self.packetBuffer.push(packet);
  }
};
/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */


Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};
/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */


Manager.prototype.cleanup = function () {
  debug('cleanup');
  var subsLength = this.subs.length;

  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;
  this.decoder.destroy();
};
/**
 * Close the current socket.
 *
 * @api private
 */


Manager.prototype.close = Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;

  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }

  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};
/**
 * Called upon engine close.
 *
 * @api private
 */


Manager.prototype.onclose = function (reason) {
  debug('onclose');
  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};
/**
 * Attempt a reconnection.
 *
 * @api private
 */


Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;
  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);
    this.reconnecting = true;
    var timer = setTimeout(function () {
      if (self.skipReconnect) return;
      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts); // check again for the case socket closed in above events

      if (self.skipReconnect) return;
      self.open(function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);
    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }
};
/**
 * Called upon successful reconnect.
 *
 * @api private
 */


Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};

var lib$1 = createCommonjsModule(function (module, exports) {
  /**
   * Module dependencies.
   */
  var debug = browser$3('socket.io-client');
  /**
   * Module exports.
   */

  module.exports = exports = lookup;
  /**
   * Managers cache.
   */

  var cache = exports.managers = {};
  /**
   * Looks up an existing `Manager` for multiplexing.
   * If the user summons:
   *
   *   `io('http://localhost/a');`
   *   `io('http://localhost/b');`
   *
   * We reuse the existing instance based on same scheme/port/host,
   * and we initialize sockets for each namespace.
   *
   * @api public
   */

  function lookup(uri, opts) {
    if (typeof uri === 'object') {
      opts = uri;
      uri = undefined;
    }

    opts = opts || {};
    var parsed = url_1(uri);
    var source = parsed.source;
    var id = parsed.id;
    var path = parsed.path;
    var sameNamespace = cache[id] && path in cache[id].nsps;
    var newConnection = opts.forceNew || opts['force new connection'] || false === opts.multiplex || sameNamespace;
    var io;

    if (newConnection) {
      debug('ignoring socket cache for %s', source);
      io = manager(source, opts);
    } else {
      if (!cache[id]) {
        debug('new io instance for %s', source);
        cache[id] = manager(source, opts);
      }

      io = cache[id];
    }

    if (parsed.query && !opts.query) {
      opts.query = parsed.query;
    }

    return io.socket(parsed.path, opts);
  }
  /**
   * Protocol version.
   *
   * @api public
   */


  exports.protocol = socket_ioParser.protocol;
  /**
   * `connect`.
   *
   * @param {String} uri
   * @api public
   */

  exports.connect = lookup;
  /**
   * Expose constructors for standalone build.
   *
   * @api public
   */

  exports.Manager = manager;
  exports.Socket = socket;
});
lib$1.managers;
lib$1.protocol;
lib$1.connect;
lib$1.Manager;
lib$1.Socket;

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var isObj$1 = value => {
  const type = typeof value;
  return value !== null && (type === 'object' || type === 'function');
};

const disallowedKeys$1 = new Set(['__proto__', 'prototype', 'constructor']);

const isValidPath$1 = pathSegments => !pathSegments.some(segment => disallowedKeys$1.has(segment));

function getPathSegments$1(path) {
  const pathArray = path.split('.');
  const parts = [];

  for (let i = 0; i < pathArray.length; i++) {
    let p = pathArray[i];

    while (p[p.length - 1] === '\\' && pathArray[i + 1] !== undefined) {
      p = p.slice(0, -1) + '.';
      p += pathArray[++i];
    }

    parts.push(p);
  }

  if (!isValidPath$1(parts)) {
    return [];
  }

  return parts;
}

var dotProp$1 = {
  get(object, path, value) {
    if (!isObj$1(object) || typeof path !== 'string') {
      return value === undefined ? object : value;
    }

    const pathArray = getPathSegments$1(path);

    if (pathArray.length === 0) {
      return;
    }

    for (let i = 0; i < pathArray.length; i++) {
      object = object[pathArray[i]];

      if (object === undefined || object === null) {
        // `object` is either `undefined` or `null` so we want to stop the loop, and
        // if this is not the last bit of the path, and
        // if it did't return `undefined`
        // it would return `null` if `object` is `null`
        // but we want `get({foo: null}, 'foo.bar')` to equal `undefined`, or the supplied value, not `null`
        if (i !== pathArray.length - 1) {
          return value;
        }

        break;
      }
    }

    return object === undefined ? value : object;
  },

  set(object, path, value) {
    if (!isObj$1(object) || typeof path !== 'string') {
      return object;
    }

    const root = object;
    const pathArray = getPathSegments$1(path);

    for (let i = 0; i < pathArray.length; i++) {
      const p = pathArray[i];

      if (!isObj$1(object[p])) {
        object[p] = {};
      }

      if (i === pathArray.length - 1) {
        object[p] = value;
      }

      object = object[p];
    }

    return root;
  },

  delete(object, path) {
    if (!isObj$1(object) || typeof path !== 'string') {
      return false;
    }

    const pathArray = getPathSegments$1(path);

    for (let i = 0; i < pathArray.length; i++) {
      const p = pathArray[i];

      if (i === pathArray.length - 1) {
        delete object[p];
        return true;
      }

      object = object[p];

      if (!isObj$1(object)) {
        return false;
      }
    }
  },

  has(object, path) {
    if (!isObj$1(object) || typeof path !== 'string') {
      return false;
    }

    const pathArray = getPathSegments$1(path);

    if (pathArray.length === 0) {
      return false;
    } // eslint-disable-next-line unicorn/no-for-loop


    for (let i = 0; i < pathArray.length; i++) {
      if (isObj$1(object)) {
        if (!(pathArray[i] in object)) {
          return false;
        }

        object = object[pathArray[i]];
      } else {
        return false;
      }
    }

    return true;
  }

};
var viewCache = {};
var loadCache = {};
var requCache = {
  react: React__default['default']
}; // create menu component

var DashupUIView = function DashupUIView() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}; // get type/view/struct

  var type = props.type,
      view = props.view,
      struct = props.struct,
      dashup = props.dashup; // set loading

  var _useState = React.useState(!(!view || !type || !struct || !dashup)),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1]; // tld


  var item = "".concat(type, ".").concat(struct, ".").concat(view).split('/').join('-'); // check has view

  React.useEffect(function () {
    // use effect
    if (!dotProp$1.get(viewCache, item)) {
      // set loading
      setLoading(true); // try loading

      if (dotProp$1.get(loadCache, item)) {
        // await loaded from another module
        dotProp$1.get(loadCache, item).then(function () {
          return setLoading(false);
        });
      } else {
        // create load cache item
        dotProp$1.set(loadCache, item, new Promise(function (resolve) {
          // load
          props.dashup.rpc({
            type: type,
            struct: struct
          }, 'views', [view]).then(function (data) {
            // check not found
            if (!data || !data[0]) {
              resolve(null);
              setLoading(false);
              return console.log("[dashup] view ".concat(type, ":").concat(struct, " ").concat(view, " not found"));
            } // try/catch


            try {
              var _shimGlobal$uuid; // expand data


              var _data = _slicedToArray(data, 1),
                  _data$ = _data[0],
                  code = _data$.code,
                  uuid = _data$.uuid; // create global


              var shimGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : null; // check window

              if (!shimGlobal.shimRequire) {
                // create shim require function
                shimGlobal.shimRequire = function (name) {
                  // names
                  if (requCache[name]) return requCache[name];
                };
              } // create new function


              try {
                // try/catch
                new Function("const require = ".concat(typeof window === 'undefined' ? 'global' : 'window', ".shimRequire; ").concat(code))();
              } catch (e) {
                console.error("[dashup] view ".concat(type, ":").concat(struct, " ").concat(view), e);
              } // set code


              var actualView = ((_shimGlobal$uuid = shimGlobal[uuid]) === null || _shimGlobal$uuid === void 0 ? void 0 : _shimGlobal$uuid["default"]) || shimGlobal[uuid]; // set to cache

              dotProp$1.set(viewCache, item, actualView); // finish loading

              resolve(actualView);
              setLoading(false);
            } catch (e) {
              // error
              console.error("[dashup] view ".concat(type, ":").concat(struct, " ").concat(view), e);
            }
          });
        }));
      }
    }
  }, [struct, type, view]); // get component

  var Component = dotProp$1.get(viewCache, item); // on load

  if (Component && !loading && props.onLoad) setTimeout(props.onLoad, 100); // create new function

  try {
    // return JSX
    return Component ? /*#__PURE__*/React__default['default'].createElement(Component, props) : props.children || /*#__PURE__*/React__default['default'].createElement("div", null);
  } catch (e) {
    // error
    console.error("[dashup] view ".concat(type, ":").concat(struct, " ").concat(view), e);
  }
}; // set defaults


DashupUIView.setDefaults = function (def) {
  // loop
  Object.keys(def).map(function (key) {
    requCache[key] = def[key];
  });
}; // export default

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

var isObj = value => {
  const type = typeof value;
  return value !== null && (type === 'object' || type === 'function');
};

const disallowedKeys = new Set(['__proto__', 'prototype', 'constructor']);

const isValidPath = pathSegments => !pathSegments.some(segment => disallowedKeys.has(segment));

function getPathSegments(path) {
  const pathArray = path.split('.');
  const parts = [];

  for (let i = 0; i < pathArray.length; i++) {
    let p = pathArray[i];

    while (p[p.length - 1] === '\\' && pathArray[i + 1] !== undefined) {
      p = p.slice(0, -1) + '.';
      p += pathArray[++i];
    }

    parts.push(p);
  }

  if (!isValidPath(parts)) {
    return [];
  }

  return parts;
}

var dotProp = {
  get(object, path, value) {
    if (!isObj(object) || typeof path !== 'string') {
      return value === undefined ? object : value;
    }

    const pathArray = getPathSegments(path);

    if (pathArray.length === 0) {
      return;
    }

    for (let i = 0; i < pathArray.length; i++) {
      object = object[pathArray[i]];

      if (object === undefined || object === null) {
        // `object` is either `undefined` or `null` so we want to stop the loop, and
        // if this is not the last bit of the path, and
        // if it did't return `undefined`
        // it would return `null` if `object` is `null`
        // but we want `get({foo: null}, 'foo.bar')` to equal `undefined`, or the supplied value, not `null`
        if (i !== pathArray.length - 1) {
          return value;
        }

        break;
      }
    }

    return object === undefined ? value : object;
  },

  set(object, path, value) {
    if (!isObj(object) || typeof path !== 'string') {
      return object;
    }

    const root = object;
    const pathArray = getPathSegments(path);

    for (let i = 0; i < pathArray.length; i++) {
      const p = pathArray[i];

      if (!isObj(object[p])) {
        object[p] = {};
      }

      if (i === pathArray.length - 1) {
        object[p] = value;
      }

      object = object[p];
    }

    return root;
  },

  delete(object, path) {
    if (!isObj(object) || typeof path !== 'string') {
      return false;
    }

    const pathArray = getPathSegments(path);

    for (let i = 0; i < pathArray.length; i++) {
      const p = pathArray[i];

      if (i === pathArray.length - 1) {
        delete object[p];
        return true;
      }

      object = object[p];

      if (!isObj(object)) {
        return false;
      }
    }
  },

  has(object, path) {
    if (!isObj(object) || typeof path !== 'string') {
      return false;
    }

    const pathArray = getPathSegments(path);

    if (pathArray.length === 0) {
      return false;
    } // eslint-disable-next-line unicorn/no-for-loop


    for (let i = 0; i < pathArray.length; i++) {
      if (isObj(object)) {
        if (!(pathArray[i] in object)) {
          return false;
        }

        object = object[pathArray[i]];
      } else {
        return false;
      }
    }

    return true;
  }

};

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

      var done = dotProp.set(this.__data, key, value); // emit

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
      return dotProp.get(this.__data, key);
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
      return dotProp["delete"](this.__data, key);
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

    _classCallCheck(this, DashupModel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // run super
    _this = _super.call.apply(_super, [this].concat(args)); // bind methods

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
                return this.dashup.rpc(this.get('_meta'), 'model.update', this.get('_id'), sanitisedData);

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
                return this.dashup.rpc(this.get('_meta'), 'model.remove', this.get('_id'));

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

      var done = dotProp.set(this.__data, key, value); // emit

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
      return dotProp.get(this.__data, key);
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

var DashupQuery =
/**
 * construct dashup query
 */
function DashupQuery(page, dashup) {
  var _this = this;

  _classCallCheck(this, DashupQuery);

  // set module
  this.page = page;
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
              return _this.dashup.rpc({
                type: 'page',
                page: _this.page,
                struct: _this.page
              }, 'model.query', _this.query);

            case 4:
              data = _context.sent;

              if (!Array.isArray(data)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", data.map(function (item) {
                return item && item._id ? new DashupModel(item, _this.dashup) : item;
              }));

            case 7:
              if (!(data && _typeof(data) === 'object')) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", data._id ? new DashupModel(data, _this.dashup) : data);

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
        arr.push(new DashupModel(item, _this.dashup));
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
              return _this.dashup.rpc({
                type: 'page',
                page: _this.page,
                struct: _this.page
              }, 'model.query', _this.query, listenID);

            case 4:
              data = _context2.sent;

              if (!Array.isArray(data)) {
                _context2.next = 11;
                break;
              }

              // create listenable array
              arr = _construct(DashupArray, _toConsumableArray(data.map(function (item) {
                return new DashupModel(item, _this.dashup);
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
              model = new DashupModel(data, _this.dashup); // set listen

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
    } // //////////////////////////////////////////////////////////////////////
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
      var _view2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(selector, _view, opts) {
        var type,
            struct,
            el,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                type = _args.length > 3 && _args[3] !== undefined ? _args[3] : 'page';
                struct = _args.length > 4 && _args[4] !== undefined ? _args[4] : null;
                // create element
                el = /*#__PURE__*/React__default['default'].createElement(this.dashup.View, _objectSpread2(_objectSpread2({}, opts), {
                  page: this,
                  dashup: this.dashup,
                  view: _view,
                  type: type,
                  struct: struct || this.get('type')
                })); // mount app

                ReactDOM__default['default'].render(el, document.querySelector(selector)); // return el

                return _context.abrupt("return", el);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
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
      var _this3 = this;

      // set user
      this.dashup.socket.on("page.".concat(this.get('_id'), ".auth"), function (result) {
        // set data
        _this3.user = new DashupModel(result, _this3.dashup);

        _this3.emit('user', _this3.user);
      }); // check login

      this.login = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(email, password) {
          var result;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _this3.rpc('login', {
                    email: email,
                    password: password
                  });

                case 2:
                  result = _context2.sent;

                  if (result.success) {
                    _context2.next = 5;
                    break;
                  }

                  throw new Error(result.message);

                case 5:
                  // set data
                  _this3.user = new DashupModel(result.data, _this3.dashup);

                  _this3.emit('user', _this3.user); // return user


                  return _context2.abrupt("return", _this3.user);

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      this.register = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
          var result;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _this3.rpc('register', data);

                case 2:
                  result = _context3.sent;

                  if (result.success) {
                    _context3.next = 5;
                    break;
                  }

                  throw new Error(result.message);

                case 5:
                  // set data
                  _this3.user = new DashupModel(result.data, _this3.dashup);

                  _this3.emit('user', _this3.user); // return user


                  return _context3.abrupt("return", _this3.user);

                case 8:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x6) {
          return _ref2.apply(this, arguments);
        };
      }();

      this.logout = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this3.rpc('logout', {});

              case 2:
                // set data
                _this3.user = null;

                _this3.emit('user', null); // return user


                return _context4.abrupt("return", _this3.user);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      })); // log

      this.exists = function () {
        return !!(_this3.user && _this3.user.get('_id'));
      };
    }
    /**
     * creates auth module
     */

  }, {
    key: "chatInit",
    value: function chatInit() {
      var _this4 = this;

      // on message
      var onMessage = function onMessage(message) {
        // set data
        var messages = _this4.chat.get('messages') || []; // replace

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

          _this4.emit('message', message);
        } // set messages


        _this4.chat.set('messages', messages);

        _this4.chat.emit('messages', messages);
      }; // set user


      this.dashup.socket.on("page.".concat(this.get('_id'), ".chat"), function (result) {
        // set data
        _this4.chat = new DashupModel(result, _this4.dashup);

        _this4.emit('chat', _this4.chat); // check exists


        if (_this4.chat.get('subject')) {
          // listen
          _this4.dashup.socket.on("chat.".concat(_this4.chat.get('subject')), function (_ref4) {
            var type = _ref4.type,
                data = _ref4.data;
            // type/data
            if (type === 'messages') data.forEach(onMessage);
          });
        }
      }); // check login

      this.send = /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref5) {
          var message, result;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  message = _ref5.message;
                  _context5.next = 3;
                  return _this4.rpc('chat.send', {
                    id: _this4.get('_id'),
                    message: message
                  });

                case 3:
                  result = _context5.sent;
                  // on message
                  onMessage(result); // return user

                  return _context5.abrupt("return", _this4.chat);

                case 6:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x7) {
          return _ref6.apply(this, arguments);
        };
      }();

      this.create = /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data) {
          var result;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return _this4.rpc('chat.create', {
                    id: _this4.get('_id'),
                    data: data
                  });

                case 2:
                  result = _context6.sent;
                  // set data
                  _this4.chat = new DashupModel(result, _this4.dashup);

                  _this4.emit('chat', _this4.chat); // check exists


                  if (_this4.chat.get('subject')) {
                    // listen
                    _this4.dashup.socket.on("chat.".concat(_this4.chat.get('subject')), function (_ref8) {
                      var type = _ref8.type,
                          data = _ref8.data;
                      // type/data
                      if (type === 'messages') data.forEach(onMessage);
                    });
                  } // return user


                  return _context6.abrupt("return", _this4.chat);

                case 7:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x8) {
          return _ref7.apply(this, arguments);
        };
      }(); // log


      this.exists = function () {
        return !!(_this4.chat && _this4.chat.get('subject'));
      };
    }
    /**
     * creates checkout methods
     */

  }, {
    key: "checkoutInit",
    value: function checkoutInit() {
      var _this5 = this;

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
            return _this5.cart.set('products', result.products.map(function (product) {
              // return product
              return _objectSpread2(_objectSpread2({}, product), {}, {
                product: new DashupModel(product.product, _this5.dashup)
              });
            }));
          } // set discount


          if (key === 'discount') {
            // set discount
            return _this5.cart.set('discount', result.discount ? new DashupModel(result.discount, _this5.dashup) : null);
          } // set normal value


          _this5.cart.set(key, result[key]);
        });
      }; // set user


      this.dashup.socket.on("page.".concat(this.get('_id'), ".cart"), function (result) {
        // set data
        setCart(result);

        _this5.emit('cart', _this5.cart);
      }); // cart

      this.add = /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(product) {
          var count,
              opts,
              result,
              _args7 = arguments;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  count = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : 1;
                  opts = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : {};

                  if (!(count <= 0)) {
                    _context7.next = 4;
                    break;
                  }

                  return _context7.abrupt("return", _this5.remove(product));

                case 4:
                  _context7.next = 6;
                  return _this5.rpc('cart.add', {
                    opts: opts,
                    count: count,
                    product: product._id || product.get('_id')
                  });

                case 6:
                  result = _context7.sent;
                  // set cart
                  setCart(result);

                  _this5.emit('cart', _this5.cart); // return user


                  return _context7.abrupt("return", _this5.cart);

                case 10:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x9) {
          return _ref9.apply(this, arguments);
        };
      }();

      this.has = function (product) {
        // return
        return _this5.cart.get('products').find(function (p) {
          return p.product.get('_id') === product._id || product.get('_id');
        });
      };

      this.code = /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(discount) {
          var result;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return _this5.rpc('cart.code', {
                    discount: discount ? discount._id || discount.get('_id') : null
                  });

                case 2:
                  result = _context8.sent;
                  // set cart
                  setCart(result);

                  _this5.emit('cart', _this5.cart); // return user


                  return _context8.abrupt("return", _this5.cart);

                case 6:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function (_x10) {
          return _ref10.apply(this, arguments);
        };
      }();

      this.count = function () {
        return Object.keys(_this5.cart.get('products')).reduce(function (accum, key) {
          // return value
          return accum + _this5.cart.get("products.".concat(key, ".count"));
        }, 0);
      };

      this.remove = /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(product) {
          var opts,
              result,
              _args9 = arguments;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  opts = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {};
                  _context9.next = 3;
                  return _this5.rpc('cart.remove', {
                    opts: opts,
                    product: product._id || product.get('_id')
                  });

                case 3:
                  result = _context9.sent;
                  // set cart
                  setCart(result);

                  _this5.emit('cart', _this5.cart); // return user


                  return _context9.abrupt("return", _this5.cart);

                case 7:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x11) {
          return _ref11.apply(this, arguments);
        };
      }(); // totals


      this.field = function (type, field) {
        // get fields
        var form;
        var page = _this5; // auth

        if (type === 'auth') {
          page = _this5.dashup.page(_this5.get('data.auth'));
          form = _this5.dashup.page(page.get('data.form'));
        } else {
          form = _this5.dashup.page(_this5.get("data.".concat(type, ".form")));
        } // get fields


        return (form && form.get('data.fields') ? form.get('data.fields') : []).find(function (f) {
          return f.uuid === page.get("data".concat(type !== 'auth' ? ".".concat(type) : '.field', ".").concat(field));
        });
      };

      this.total = function (products) {
        // get total
        var total = (products || _this5.cart.get('products') || []).reduce(function (accum, _ref12) {
          var product = _ref12.product,
              count = _ref12.count;
          // get field
          var productField = _this5.field('product', 'field') || {}; // return value

          return accum + (dotProp.get(product.get ? product.get() : product, "".concat(productField.name || productField.uuid, ".price")) || 0) * (count || 0);
        }, 0); // return total

        return total;
      };

      this.totals = function (products) {
        // get field
        var productField = _this5.field('product', 'field') || {}; // return

        return Array.from((products || _this5.cart.get('products') || []).reduce(function (accum, _ref13) {
          var product = _ref13.product;
          // type
          var type = dotProp.get(product.get ? product.get() : product, "".concat(productField.name || productField.uuid, ".type")); // type

          if (type === 'subscription') {
            // type
            accum.add(dotProp.get(product.get ? product.get() : product, "".concat(productField.name || productField.uuid, ".period")) || 'monthly');
          } else {
            // add product
            accum.add(type);
          } // set


          return accum;
        }, new Set())).reduce(function (accum, type) {
          // add total
          accum[type] = _this5.total(_toConsumableArray((products || _this5.cart.get('products') || []).filter(function (_ref14) {
            var product = _ref14.product;
            // type
            var t = dotProp.get(product.get ? product.get() : product, "".concat(productField.name || productField.uuid, ".type")); // type

            if (t === 'subscription') {
              // type
              return (dotProp.get(product.get ? product.get() : product, "".concat(productField.name || productField.uuid, ".period")) || 'monthly') === type;
            } // add product


            return t === type;
          }))); // return accum

          return accum;
        }, {});
      };

      this.discount = function (total) {
        // total
        if (!total) total = _this5.total(); // parse

        total = parseFloat(total); // check discount

        if (!_this5.cart.get('discount')) return 0; // check discount

        var discountField = _this5.field('discount', 'discount'); // check field


        if (!discountField) return 0; // discount

        var actualDiscount = _this5.cart.get('discount').get(discountField.name || discountField.uuid); // chekc actual discount


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
      var _this6 = this;

      // init model also for forms
      this.modelInit(); // check login

      this.submit = /*#__PURE__*/function () {
        var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(data) {
          var result;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return _this6.dashup.action({
                    type: 'page',
                    page: _this6.get('data.model'),
                    form: _this6.get('_id'),
                    model: _this6.get('data.model'),
                    struct: 'form'
                  }, 'form.submit', data);

                case 2:
                  result = _context10.sent;
                  return _context10.abrupt("return", new DashupModel(result, _this6.dashup));

                case 4:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function (_x12) {
          return _ref15.apply(this, arguments);
        };
      }();
    }
    /**
     * creates model methods
     */

  }, {
    key: "modelInit",
    value: function modelInit() {
      var _this7 = this;

      // create
      this.create = /*#__PURE__*/function () {
        var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(data) {
          var result;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return _this7.dashup.action({
                    type: 'page',
                    page: _this7.get('_id'),
                    form: _this7.get('data.forms.0'),
                    model: _this7.get('_id'),
                    struct: 'form'
                  }, 'form.submit', data);

                case 2:
                  result = _context11.sent;
                  return _context11.abrupt("return", new DashupModel(result, _this7.dashup));

                case 4:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));

        return function (_x13) {
          return _ref16.apply(this, arguments);
        };
      }(); // query and dones


      var queryBys = ['where', 'eq', 'gt', 'or', 'lt', 'gte', 'lte', 'skip', 'sort', 'limit', 'match', 'inc', 'ne', 'nin', 'in', 'or', 'and', 'sum', 'search', 'avg', 'find', 'count', 'findOne', 'findById', 'findByIds', 'listen', 'listenOne', 'listenById']; // create calls

      queryBys.forEach(function (method) {
        // create function
        _this7[method] = function () {
          // create query
          var query = new DashupQuery(_this7.get('_id'), _this7.dashup); // return query

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
  }]);

  return DashupSection;
}(DashupBase);

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

                this.socket = this.__opts.connection || lib$1.connect("".concat(this.__opts.url || 'https://dashup.io', "?api=v1").concat(this.__opts.key ? "&key=".concat(this.__opts.key) : '', "&session=").concat(this.sessionID), this.__opts.socket || {}); // await connected

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
                  var _ref2 = _slicedToArray$1(_ref, 2),
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

                res = new Promise(function (resolve) {
                  // socket
                  _this3.socket.once(id, function (result) {
                    // resolve
                    resolve(result);
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

                res = new Promise(function (resolve) {
                  // socket
                  _this5.socket.once(id, function (result) {
                    // resolve
                    resolve(result);
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
    value: function page(id, value) {
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
    value: function section(id, value) {
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
      return DashupUIView;
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
