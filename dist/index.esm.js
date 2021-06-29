import '@babel/polyfill';
import React, { useState, useEffect } from 'react';
import { EventEmitter } from 'events';
import ReactDOM from 'react-dom';

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

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

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
 * Helpers.
 */
var s$2 = 1000;
var m$2 = s$2 * 60;
var h$2 = m$2 * 60;
var d$2 = h$2 * 24;
var w$2 = d$2 * 7;
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
      return n * w$2;

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

function setup$2(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = ms$2;
  createDebug.destroy = destroy;
  Object.keys(env).forEach(key => {
    createDebug[key] = env[key];
  });
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
    let enableOverride = null;

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
          return '%';
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
    debug.useColors = createDebug.useColors();
    debug.color = createDebug.selectColor(namespace);
    debug.extend = extend;
    debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

    Object.defineProperty(debug, 'enabled', {
      enumerable: true,
      configurable: false,
      get: () => enableOverride === null ? createDebug.enabled(namespace) : enableOverride,
      set: v => {
        enableOverride = v;
      }
    }); // Env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    return debug;
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
  /**
  * XXX DO NOT USE. This is a temporary stub function.
  * XXX It WILL be removed in the next major release.
  */


  function destroy() {
    console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

var common$2 = setup$2;

var browser$2 = createCommonjsModule(function (module, exports) {
  /* eslint-env browser */

  /**
   * This is the web browser implementation of `debug()`.
   */
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = localstorage();

  exports.destroy = (() => {
    let warned = false;
    return () => {
      if (!warned) {
        warned = true;
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
      }
    };
  })();
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
   * Invokes `console.debug()` when available.
   * No-op when `console.debug` is not a "function".
   * If `console.debug` is not available, falls back
   * to `console.log`.
   *
   * @api public
   */


  exports.log = console.debug || console.log || (() => {});
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

  module.exports = common$2(exports);
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
browser$2.formatArgs;
browser$2.save;
browser$2.load;
browser$2.useColors;
browser$2.storage;
browser$2.destroy;
browser$2.colors;
browser$2.log;

var url_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.url = void 0;
  const debug = browser$2("socket.io-client:url");
  /**
   * URL parser.
   *
   * @param uri - url
   * @param path - the request path of the connection
   * @param loc - An object meant to mimic window.location.
   *        Defaults to window.location.
   * @public
   */

  function url(uri, path = "", loc) {
    let obj = uri; // default to window.location

    loc = loc || typeof location !== "undefined" && location;
    if (null == uri) uri = loc.protocol + "//" + loc.host; // relative path support

    if (typeof uri === "string") {
      if ("/" === uri.charAt(0)) {
        if ("/" === uri.charAt(1)) {
          uri = loc.protocol + uri;
        } else {
          uri = loc.host + uri;
        }
      }

      if (!/^(https?|wss?):\/\//.test(uri)) {
        debug("protocol-less url %s", uri);

        if ("undefined" !== typeof loc) {
          uri = loc.protocol + "//" + uri;
        } else {
          uri = "https://" + uri;
        }
      } // parse


      debug("parse %s", uri);
      obj = parseuri(uri);
    } // make sure we treat `localhost:80` and `localhost` equally


    if (!obj.port) {
      if (/^(http|ws)$/.test(obj.protocol)) {
        obj.port = "80";
      } else if (/^(http|ws)s$/.test(obj.protocol)) {
        obj.port = "443";
      }
    }

    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host; // define unique id

    obj.id = obj.protocol + "://" + host + ":" + obj.port + path; // define href

    obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
  }

  exports.url = url;
});
unwrapExports(url_1);
url_1.url;

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

var globalThis_browser = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();

var xmlhttprequest = function (opts) {
  const xdomain = opts.xdomain; // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx

  const xscheme = opts.xscheme; // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217

  const enablesXDR = opts.enablesXDR; // XMLHttpRequest can be disabled on IE

  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCors)) {
      return new XMLHttpRequest();
    }
  } catch (e) {} // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example


  try {
    if ("undefined" !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) {}

  if (!xdomain) {
    try {
      return new globalThis_browser[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {}
  }
};

const PACKET_TYPES$1 = Object.create(null); // no Map = no polyfill

PACKET_TYPES$1["open"] = "0";
PACKET_TYPES$1["close"] = "1";
PACKET_TYPES$1["ping"] = "2";
PACKET_TYPES$1["pong"] = "3";
PACKET_TYPES$1["message"] = "4";
PACKET_TYPES$1["upgrade"] = "5";
PACKET_TYPES$1["noop"] = "6";
const PACKET_TYPES_REVERSE$1 = Object.create(null);
Object.keys(PACKET_TYPES$1).forEach(key => {
  PACKET_TYPES_REVERSE$1[PACKET_TYPES$1[key]] = key;
});
const ERROR_PACKET$1 = {
  type: "error",
  data: "parser error"
};
var commons = {
  PACKET_TYPES: PACKET_TYPES$1,
  PACKET_TYPES_REVERSE: PACKET_TYPES_REVERSE$1,
  ERROR_PACKET: ERROR_PACKET$1
};

const {
  PACKET_TYPES
} = commons;
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
const withNativeArrayBuffer$1 = typeof ArrayBuffer === "function"; // ArrayBuffer.isView method is not defined in IE10

const isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};

const encodePacket = ({
  type,
  data
}, supportsBinary, callback) => {
  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer$1 && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data instanceof ArrayBuffer ? data : data.buffer);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  } // plain string


  return callback(PACKET_TYPES[type] + (data || ""));
};

const encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();

  fileReader.onload = function () {
    const content = fileReader.result.split(",")[1];
    callback("b" + content);
  };

  return fileReader.readAsDataURL(data);
};

var encodePacket_browser = encodePacket;

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

const {
  PACKET_TYPES_REVERSE,
  ERROR_PACKET
} = commons;
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
let base64decoder;

if (withNativeArrayBuffer) {
  base64decoder = base64Arraybuffer;
}

const decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }

  const type = encodedPacket.charAt(0);

  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }

  const packetType = PACKET_TYPES_REVERSE[type];

  if (!packetType) {
    return ERROR_PACKET;
  }

  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};

const decodeBase64Packet = (data, binaryType) => {
  if (base64decoder) {
    const decoded = base64decoder.decode(data);
    return mapBinary(decoded, binaryType);
  } else {
    return {
      base64: true,
      data
    }; // fallback for old browsers
  }
};

const mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      return data instanceof ArrayBuffer ? new Blob([data]) : data;

    case "arraybuffer":
    default:
      return data;
    // assuming the data is already an ArrayBuffer
  }
};

var decodePacket_browser = decodePacket;

const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text

const encodePayload = (packets, callback) => {
  // some packets may be added to the array while encoding, so the initial length must be saved
  const length = packets.length;
  const encodedPackets = new Array(length);
  let count = 0;
  packets.forEach((packet, i) => {
    // force base64 encoding for binary packets
    encodePacket_browser(packet, false, encodedPacket => {
      encodedPackets[i] = encodedPacket;

      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};

const decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];

  for (let i = 0; i < encodedPackets.length; i++) {
    const decodedPacket = decodePacket_browser(encodedPackets[i], binaryType);
    packets.push(decodedPacket);

    if (decodedPacket.type === "error") {
      break;
    }
  }

  return packets;
};

var lib$2 = {
  protocol: 4,
  encodePacket: encodePacket_browser,
  encodePayload,
  decodePacket: decodePacket_browser,
  decodePayload
};
lib$2.protocol;
lib$2.encodePacket;
lib$2.encodePayload;
lib$2.decodePacket;
lib$2.decodePayload;

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

/**
 * Helpers.
 */
var s$1 = 1000;
var m$1 = s$1 * 60;
var h$1 = m$1 * 60;
var d$1 = h$1 * 24;
var w$1 = d$1 * 7;
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
  } else if (type === 'number' && isFinite(val)) {
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
      return n * y$1;

    case 'weeks':
    case 'week':
    case 'w':
      return n * w$1;

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
  var msAbs = Math.abs(ms);

  if (msAbs >= d$1) {
    return Math.round(ms / d$1) + 'd';
  }

  if (msAbs >= h$1) {
    return Math.round(ms / h$1) + 'h';
  }

  if (msAbs >= m$1) {
    return Math.round(ms / m$1) + 'm';
  }

  if (msAbs >= s$1) {
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
  var msAbs = Math.abs(ms);

  if (msAbs >= d$1) {
    return plural$1(ms, msAbs, d$1, 'day');
  }

  if (msAbs >= h$1) {
    return plural$1(ms, msAbs, h$1, 'hour');
  }

  if (msAbs >= m$1) {
    return plural$1(ms, msAbs, m$1, 'minute');
  }

  if (msAbs >= s$1) {
    return plural$1(ms, msAbs, s$1, 'second');
  }

  return ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural$1(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup$1(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = ms$1;
  createDebug.destroy = destroy;
  Object.keys(env).forEach(key => {
    createDebug[key] = env[key];
  });
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
    let enableOverride = null;

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
          return '%';
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
    debug.useColors = createDebug.useColors();
    debug.color = createDebug.selectColor(namespace);
    debug.extend = extend;
    debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

    Object.defineProperty(debug, 'enabled', {
      enumerable: true,
      configurable: false,
      get: () => enableOverride === null ? createDebug.enabled(namespace) : enableOverride,
      set: v => {
        enableOverride = v;
      }
    }); // Env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    return debug;
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
  /**
  * XXX DO NOT USE. This is a temporary stub function.
  * XXX It WILL be removed in the next major release.
  */


  function destroy() {
    console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

var common$1 = setup$1;

var browser$1 = createCommonjsModule(function (module, exports) {
  /* eslint-env browser */

  /**
   * This is the web browser implementation of `debug()`.
   */
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = localstorage();

  exports.destroy = (() => {
    let warned = false;
    return () => {
      if (!warned) {
        warned = true;
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
      }
    };
  })();
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
   * Invokes `console.debug()` when available.
   * No-op when `console.debug` is not a "function".
   * If `console.debug` is not available, falls back
   * to `console.log`.
   *
   * @api public
   */


  exports.log = console.debug || console.log || (() => {});
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

  module.exports = common$1(exports);
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
browser$1.formatArgs;
browser$1.save;
browser$1.load;
browser$1.useColors;
browser$1.storage;
browser$1.destroy;
browser$1.colors;
browser$1.log;

const debug$4 = browser$1("engine.io-client:transport");

class Transport$1 extends componentEmitter$2 {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} options.
   * @api private
   */
  constructor(opts) {
    super();
    this.opts = opts;
    this.query = opts.query;
    this.readyState = "";
    this.socket = opts.socket;
  }
  /**
   * Emits an error.
   *
   * @param {String} str
   * @return {Transport} for chaining
   * @api public
   */


  onError(msg, desc) {
    const err = new Error(msg);
    err.type = "TransportError";
    err.description = desc;
    this.emit("error", err);
    return this;
  }
  /**
   * Opens the transport.
   *
   * @api public
   */


  open() {
    if ("closed" === this.readyState || "" === this.readyState) {
      this.readyState = "opening";
      this.doOpen();
    }

    return this;
  }
  /**
   * Closes the transport.
   *
   * @api private
   */


  close() {
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.doClose();
      this.onClose();
    }

    return this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   * @api private
   */


  send(packets) {
    if ("open" === this.readyState) {
      this.write(packets);
    } else {
      // this might happen if the transport was silently closed in the beforeunload event handler
      debug$4("transport is not open, discarding packets");
    }
  }
  /**
   * Called upon open
   *
   * @api private
   */


  onOpen() {
    this.readyState = "open";
    this.writable = true;
    this.emit("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @api private
   */


  onData(data) {
    const packet = lib$2.decodePacket(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  /**
   * Called with a decoded packet.
   */


  onPacket(packet) {
    this.emit("packet", packet);
  }
  /**
   * Called upon close.
   *
   * @api private
   */


  onClose() {
    this.readyState = "closed";
    this.emit("close");
  }

}

var transport = Transport$1;

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
var encode$1 = function (obj) {
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


var decode$1 = function (qs) {
  var qry = {};
  var pairs = qs.split('&');

  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return qry;
};

var parseqs = {
  encode: encode$1,
  decode: decode$1
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

function encode(num) {
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


function decode(str) {
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
  var now = encode(+new Date());
  if (now !== prev) return seed$1 = 0, prev = now;
  return now + '.' + encode(seed$1++);
} //
// Map each character to its index.
//


for (; i < length; i++) map[alphabet$1[i]] = i; //
// Expose the `yeast`, `encode` and `decode` functions.
//


yeast.encode = encode;
yeast.decode = decode;
var yeast_1 = yeast;

const debug$3 = browser$1("engine.io-client:polling");

class Polling extends transport {
  /**
   * Transport name.
   */
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @api private
   */


  doOpen() {
    this.poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} callback upon buffers are flushed and transport is paused
   * @api private
   */


  pause(onPause) {
    this.readyState = "pausing";

    const pause = () => {
      debug$3("paused");
      this.readyState = "paused";
      onPause();
    };

    if (this.polling || !this.writable) {
      let total = 0;

      if (this.polling) {
        debug$3("we are currently polling - waiting to pause");
        total++;
        this.once("pollComplete", function () {
          debug$3("pre-pause polling complete");
          --total || pause();
        });
      }

      if (!this.writable) {
        debug$3("we are currently writing - waiting to pause");
        total++;
        this.once("drain", function () {
          debug$3("pre-pause writing complete");
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  /**
   * Starts polling cycle.
   *
   * @api public
   */


  poll() {
    debug$3("polling");
    this.polling = true;
    this.doPoll();
    this.emit("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @api private
   */


  onData(data) {
    debug$3("polling got data %s", data);

    const callback = packet => {
      // if its the first message we consider the transport open
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      } // if its a close packet, we close the ongoing requests


      if ("close" === packet.type) {
        this.onClose();
        return false;
      } // otherwise bypass onData and handle the message


      this.onPacket(packet);
    }; // decode payload


    lib$2.decodePayload(data, this.socket.binaryType).forEach(callback); // if an event did not trigger closing

    if ("closed" !== this.readyState) {
      // if we got data we're not polling
      this.polling = false;
      this.emit("pollComplete");

      if ("open" === this.readyState) {
        this.poll();
      } else {
        debug$3('ignoring poll - transport state "%s"', this.readyState);
      }
    }
  }
  /**
   * For polling, send a close packet.
   *
   * @api private
   */


  doClose() {
    const close = () => {
      debug$3("writing close packet");
      this.write([{
        type: "close"
      }]);
    };

    if ("open" === this.readyState) {
      debug$3("transport open - closing");
      close();
    } else {
      // in case we're trying to close while
      // handshaking is in progress (GH-164)
      debug$3("transport not open - deferring close");
      this.once("open", close);
    }
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} data packets
   * @param {Function} drain callback
   * @api private
   */


  write(packets) {
    this.writable = false;
    lib$2.encodePayload(packets, data => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emit("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @api private
   */


  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "https" : "http";
    let port = ""; // cache busting is forced

    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast_1();
    }

    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }

    query = parseqs.encode(query); // avoid port if default for schema

    if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    } // prepend ? to query


    if (query.length) {
      query = "?" + query;
    }

    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + query;
  }

}

var polling$1 = Polling;

var pick$2 = (obj, ...attr) => {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }

    return acc;
  }, {});
};

var util = {
  pick: pick$2
};

/* global attachEvent */

const {
  pick: pick$1
} = util;
const debug$2 = browser$1("engine.io-client:polling-xhr");
/**
 * Empty function
 */

function empty() {}

const hasXHR2 = function () {
  const xhr = new xmlhttprequest({
    xdomain: false
  });
  return null != xhr.responseType;
}();

class XHR extends polling$1 {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @api public
   */
  constructor(opts) {
    super(opts);

    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port; // some user agents have empty `location.port`

      if (!port) {
        port = isSSL ? 443 : 80;
      }

      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      this.xs = opts.secure !== isSSL;
    }
    /**
     * XHR supports binary
     */


    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @api private
   */


  request(opts = {}) {
    Object.assign(opts, {
      xd: this.xd,
      xs: this.xs
    }, this.opts);
    return new Request(this.uri(), opts);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @api private
   */


  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data: data
    });
    req.on("success", fn);
    req.on("error", err => {
      this.onError("xhr post error", err);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @api private
   */


  doPoll() {
    debug$2("xhr poll");
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", err => {
      this.onError("xhr poll error", err);
    });
    this.pollXhr = req;
  }

}

class Request extends componentEmitter$2 {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @api public
   */
  constructor(uri, opts) {
    super();
    this.opts = opts;
    this.method = opts.method || "GET";
    this.uri = uri;
    this.async = false !== opts.async;
    this.data = undefined !== opts.data ? opts.data : null;
    this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @api private
   */


  create() {
    const opts = pick$1(this.opts, "agent", "enablesXDR", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this.opts.xd;
    opts.xscheme = !!this.opts.xs;
    const xhr = this.xhr = new xmlhttprequest(opts);

    try {
      debug$2("xhr open %s: %s", this.method, this.uri);
      xhr.open(this.method, this.uri, this.async);

      try {
        if (this.opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);

          for (let i in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i)) {
              xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
            }
          }
        }
      } catch (e) {}

      if ("POST" === this.method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {}
      }

      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {} // ie6 check


      if ("withCredentials" in xhr) {
        xhr.withCredentials = this.opts.withCredentials;
      }

      if (this.opts.requestTimeout) {
        xhr.timeout = this.opts.requestTimeout;
      }

      if (this.hasXDR()) {
        xhr.onload = () => {
          this.onLoad();
        };

        xhr.onerror = () => {
          this.onError(xhr.responseText);
        };
      } else {
        xhr.onreadystatechange = () => {
          if (4 !== xhr.readyState) return;

          if (200 === xhr.status || 1223 === xhr.status) {
            this.onLoad();
          } else {
            // make sure the `error` event handler that's user-set
            // does not throw in the same tick and gets caught here
            setTimeout(() => {
              this.onError(typeof xhr.status === "number" ? xhr.status : 0);
            }, 0);
          }
        };
      }

      debug$2("xhr data %s", this.data);
      xhr.send(this.data);
    } catch (e) {
      // Need to defer since .create() is called directly from the constructor
      // and thus the 'error' event can only be only bound *after* this exception
      // occurs.  Therefore, also, we cannot throw here at all.
      setTimeout(() => {
        this.onError(e);
      }, 0);
      return;
    }

    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }
  /**
   * Called upon successful response.
   *
   * @api private
   */


  onSuccess() {
    this.emit("success");
    this.cleanup();
  }
  /**
   * Called if we have data.
   *
   * @api private
   */


  onData(data) {
    this.emit("data", data);
    this.onSuccess();
  }
  /**
   * Called upon error.
   *
   * @api private
   */


  onError(err) {
    this.emit("error", err);
    this.cleanup(true);
  }
  /**
   * Cleans up house.
   *
   * @api private
   */


  cleanup(fromError) {
    if ("undefined" === typeof this.xhr || null === this.xhr) {
      return;
    } // xmlhttprequest


    if (this.hasXDR()) {
      this.xhr.onload = this.xhr.onerror = empty;
    } else {
      this.xhr.onreadystatechange = empty;
    }

    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {}
    }

    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }

    this.xhr = null;
  }
  /**
   * Called upon load.
   *
   * @api private
   */


  onLoad() {
    const data = this.xhr.responseText;

    if (data !== null) {
      this.onData(data);
    }
  }
  /**
   * Check if it has XDomainRequest.
   *
   * @api private
   */


  hasXDR() {
    return typeof XDomainRequest !== "undefined" && !this.xs && this.enablesXDR;
  }
  /**
   * Aborts the request.
   *
   * @api public
   */


  abort() {
    this.cleanup();
  }

}
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */


Request.requestsCount = 0;
Request.requests = {};

if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThis_browser ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}

function unloadHandler() {
  for (let i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

var pollingXhr = XHR;
var Request_1 = Request;
pollingXhr.Request = Request_1;

const rNewline = /\n/g;
const rEscapedNewline = /\\n/g;
/**
 * Global JSONP callbacks.
 */

let callbacks;

class JSONPPolling extends polling$1 {
  /**
   * JSONP Polling constructor.
   *
   * @param {Object} opts.
   * @api public
   */
  constructor(opts) {
    super(opts);
    this.query = this.query || {}; // define global callbacks array if not present
    // we do this here (lazily) to avoid unneeded global pollution

    if (!callbacks) {
      // we need to consider multiple engines in the same page
      callbacks = globalThis_browser.___eio = globalThis_browser.___eio || [];
    } // callback identifier


    this.index = callbacks.length; // add callback to jsonp global

    callbacks.push(this.onData.bind(this)); // append to query string

    this.query.j = this.index;
  }
  /**
   * JSONP only supports binary as base64 encoded strings
   */


  get supportsBinary() {
    return false;
  }
  /**
   * Closes the socket.
   *
   * @api private
   */


  doClose() {
    if (this.script) {
      // prevent spurious errors from being emitted when the window is unloaded
      this.script.onerror = () => {};

      this.script.parentNode.removeChild(this.script);
      this.script = null;
    }

    if (this.form) {
      this.form.parentNode.removeChild(this.form);
      this.form = null;
      this.iframe = null;
    }

    super.doClose();
  }
  /**
   * Starts a poll cycle.
   *
   * @api private
   */


  doPoll() {
    const script = document.createElement("script");

    if (this.script) {
      this.script.parentNode.removeChild(this.script);
      this.script = null;
    }

    script.async = true;
    script.src = this.uri();

    script.onerror = e => {
      this.onError("jsonp poll error", e);
    };

    const insertAt = document.getElementsByTagName("script")[0];

    if (insertAt) {
      insertAt.parentNode.insertBefore(script, insertAt);
    } else {
      (document.head || document.body).appendChild(script);
    }

    this.script = script;
    const isUAgecko = "undefined" !== typeof navigator && /gecko/i.test(navigator.userAgent);

    if (isUAgecko) {
      setTimeout(function () {
        const iframe = document.createElement("iframe");
        document.body.appendChild(iframe);
        document.body.removeChild(iframe);
      }, 100);
    }
  }
  /**
   * Writes with a hidden iframe.
   *
   * @param {String} data to send
   * @param {Function} called upon flush.
   * @api private
   */


  doWrite(data, fn) {
    let iframe;

    if (!this.form) {
      const form = document.createElement("form");
      const area = document.createElement("textarea");
      const id = this.iframeId = "eio_iframe_" + this.index;
      form.className = "socketio";
      form.style.position = "absolute";
      form.style.top = "-1000px";
      form.style.left = "-1000px";
      form.target = id;
      form.method = "POST";
      form.setAttribute("accept-charset", "utf-8");
      area.name = "d";
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

    const initIframe = () => {
      if (this.iframe) {
        try {
          this.form.removeChild(this.iframe);
        } catch (e) {
          this.onError("jsonp polling iframe removal error", e);
        }
      }

      try {
        // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
        const html = '<iframe src="javascript:0" name="' + this.iframeId + '">';
        iframe = document.createElement(html);
      } catch (e) {
        iframe = document.createElement("iframe");
        iframe.name = this.iframeId;
        iframe.src = "javascript:0";
      }

      iframe.id = this.iframeId;
      this.form.appendChild(iframe);
      this.iframe = iframe;
    };

    initIframe(); // escape \n to prevent it from being converted into \r\n by some UAs
    // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side

    data = data.replace(rEscapedNewline, "\\\n");
    this.area.value = data.replace(rNewline, "\\n");

    try {
      this.form.submit();
    } catch (e) {}

    if (this.iframe.attachEvent) {
      this.iframe.onreadystatechange = () => {
        if (this.iframe.readyState === "complete") {
          complete();
        }
      };
    } else {
      this.iframe.onload = complete;
    }
  }

}

var pollingJsonp = JSONPPolling;

const nextTick$1 = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";

  if (isPromiseAvailable) {
    return cb => Promise.resolve().then(cb);
  } else {
    return cb => setTimeout(cb, 0);
  }
})();

var websocketConstructor_browser = {
  WebSocket: globalThis_browser.WebSocket || globalThis_browser.MozWebSocket,
  usingBrowserWebSocket: true,
  defaultBinaryType: "arraybuffer",
  nextTick: nextTick$1
};

const {
  pick
} = util;
const {
  WebSocket,
  usingBrowserWebSocket,
  defaultBinaryType,
  nextTick
} = websocketConstructor_browser;
const debug$1 = browser$1("engine.io-client:websocket"); // detect ReactNative environment

const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";

class WS extends transport {
  /**
   * WebSocket transport constructor.
   *
   * @api {Object} connection options
   * @api public
   */
  constructor(opts) {
    super(opts);
    this.supportsBinary = !opts.forceBase64;
  }
  /**
   * Transport name.
   *
   * @api public
   */


  get name() {
    return "websocket";
  }
  /**
   * Opens socket.
   *
   * @api private
   */


  doOpen() {
    if (!this.check()) {
      // let probe timeout
      return;
    }

    const uri = this.uri();
    const protocols = this.opts.protocols; // React Native only supports the 'headers' option, and will print a warning if anything else is passed

    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");

    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }

    try {
      this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emit("error", err);
    }

    this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
    this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @api private
   */


  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }

      this.onOpen();
    };

    this.ws.onclose = this.onClose.bind(this);

    this.ws.onmessage = ev => this.onData(ev.data);

    this.ws.onerror = e => this.onError("websocket error", e);
  }
  /**
   * Writes data to socket.
   *
   * @param {Array} array of packets.
   * @api private
   */


  write(packets) {
    this.writable = false; // encodePacket efficient as it uses WS framing
    // no need for encodePayload

    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      lib$2.encodePacket(packet, this.supportsBinary, data => {
        // always create a new object (GH-437)
        const opts = {};

        if (!usingBrowserWebSocket) {
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (this.opts.perMessageDeflate) {
            const len = "string" === typeof data ? Buffer.byteLength(data) : data.length;

            if (len < this.opts.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        } // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error


        try {
          if (usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            this.ws.send(data);
          } else {
            this.ws.send(data, opts);
          }
        } catch (e) {
          debug$1("websocket closed before onclose event");
        }

        if (lastPacket) {
          // fake drain
          // defer to next tick to allow Socket to clear writeBuffer
          nextTick(() => {
            this.writable = true;
            this.emit("drain");
          });
        }
      });
    }
  }
  /**
   * Called upon close
   *
   * @api private
   */


  onClose() {
    transport.prototype.onClose.call(this);
  }
  /**
   * Closes socket.
   *
   * @api private
   */


  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }
  /**
   * Generates uri for connection.
   *
   * @api private
   */


  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "wss" : "ws";
    let port = ""; // avoid port if default for schema

    if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    } // append timestamp to URI


    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast_1();
    } // communicate binary support capabilities


    if (!this.supportsBinary) {
      query.b64 = 1;
    }

    query = parseqs.encode(query); // prepend ? to query

    if (query.length) {
      query = "?" + query;
    }

    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + query;
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @api public
   */


  check() {
    return !!WebSocket && !("__initialize" in WebSocket && this.name === WS.prototype.name);
  }

}

var websocket = WS;

var polling_1 = polling;
var websocket_1 = websocket;
/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling(opts) {
  let xhr;
  let xd = false;
  let xs = false;
  const jsonp = false !== opts.jsonp;

  if (typeof location !== "undefined") {
    const isSSL = "https:" === location.protocol;
    let port = location.port; // some user agents have empty `location.port`

    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new xmlhttprequest(opts);

  if ("open" in xhr && !opts.forceJSONP) {
    return new pollingXhr(opts);
  } else {
    if (!jsonp) throw new Error("JSONP disabled");
    return new pollingJsonp(opts);
  }
}

var transports$1 = {
  polling: polling_1,
  websocket: websocket_1
};

const debug = browser$1("engine.io-client:socket");

class Socket extends componentEmitter$2 {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri or options
   * @param {Object} options
   * @api public
   */
  constructor(uri, opts = {}) {
    super();

    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }

    if (uri) {
      uri = parseuri(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query) opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parseuri(opts.host).host;
    }

    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;

    if (opts.hostname && !opts.port) {
      // if no port is specified manually, use the protocol default
      opts.port = this.secure ? "443" : "80";
    }

    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? 443 : 80);
    this.transports = opts.transports || ["polling", "websocket"];
    this.readyState = "";
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      jsonp: true,
      timestampParam: "t",
      rememberUpgrade: false,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: true
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + "/";

    if (typeof this.opts.query === "string") {
      this.opts.query = parseqs.decode(this.opts.query);
    } // set on handshake


    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null; // set on heartbeat

    this.pingTimeoutTimer = null;

    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
        // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
        // closed/reloaded)
        addEventListener("beforeunload", () => {
          if (this.transport) {
            // silently close the transport
            this.transport.removeAllListeners();
            this.transport.close();
          }
        }, false);
      }

      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close");
        };

        addEventListener("offline", this.offlineEventListener, false);
      }
    }

    this.open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} transport name
   * @return {Transport}
   * @api private
   */


  createTransport(name) {
    debug('creating transport "%s"', name);
    const query = clone(this.opts.query); // append engine.io protocol identifier

    query.EIO = lib$2.protocol; // transport name

    query.transport = name; // session id if we already have one

    if (this.id) query.sid = this.id;
    const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    debug("options: %j", opts);
    return new transports$1[name](opts);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @api private
   */


  open() {
    let transport;

    if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
      transport = "websocket";
    } else if (0 === this.transports.length) {
      // Emit error on next tick so it can be listened to
      setTimeout(() => {
        this.emit("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }

    this.readyState = "opening"; // Retry with the next transport if the transport is disabled (jsonp: false)

    try {
      transport = this.createTransport(transport);
    } catch (e) {
      debug("error while creating transport: %s", e);
      this.transports.shift();
      this.open();
      return;
    }

    transport.open();
    this.setTransport(transport);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @api private
   */


  setTransport(transport) {
    debug("setting transport %s", transport.name);

    if (this.transport) {
      debug("clearing existing transport %s", this.transport.name);
      this.transport.removeAllListeners();
    } // set up transport


    this.transport = transport; // set up transport listeners

    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", () => {
      this.onClose("transport close");
    });
  }
  /**
   * Probes a transport.
   *
   * @param {String} transport name
   * @api private
   */


  probe(name) {
    debug('probing transport "%s"', name);
    let transport = this.createTransport(name, {
      probe: 1
    });
    let failed = false;
    Socket.priorWebsocketSuccess = false;

    const onTransportOpen = () => {
      if (failed) return;
      debug('probe transport "%s" opened', name);
      transport.send([{
        type: "ping",
        data: "probe"
      }]);
      transport.once("packet", msg => {
        if (failed) return;

        if ("pong" === msg.type && "probe" === msg.data) {
          debug('probe transport "%s" pong', name);
          this.upgrading = true;
          this.emit("upgrading", transport);
          if (!transport) return;
          Socket.priorWebsocketSuccess = "websocket" === transport.name;
          debug('pausing current transport "%s"', this.transport.name);
          this.transport.pause(() => {
            if (failed) return;
            if ("closed" === this.readyState) return;
            debug("changing transport and sending upgrade packet");
            cleanup();
            this.setTransport(transport);
            transport.send([{
              type: "upgrade"
            }]);
            this.emit("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          debug('probe transport "%s" failed', name);
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emit("upgradeError", err);
        }
      });
    };

    function freezeTransport() {
      if (failed) return; // Any callback called by transport should be ignored since now

      failed = true;
      cleanup();
      transport.close();
      transport = null;
    } // Handle any error that happens while probing


    const onerror = err => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      debug('probe transport "%s" failed because of error: %s', name, err);
      this.emit("upgradeError", error);
    };

    function onTransportClose() {
      onerror("transport closed");
    } // When the socket is closed while we're probing


    function onclose() {
      onerror("socket closed");
    } // When the socket is upgraded while we're probing


    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        debug('"%s" works - aborting "%s"', to.name, transport.name);
        freezeTransport();
      }
    } // Remove all listeners on the transport and on self


    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.removeListener("close", onclose);
      this.removeListener("upgrading", onupgrade);
    };

    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    transport.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @api public
   */


  onOpen() {
    debug("socket open");
    this.readyState = "open";
    Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emit("open");
    this.flush(); // we check for `readyState` in case an `open`
    // listener already closed the socket

    if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
      debug("starting upgrade probes");
      let i = 0;
      const l = this.upgrades.length;

      for (; i < l; i++) {
        this.probe(this.upgrades[i]);
      }
    }
  }
  /**
   * Handles a packet.
   *
   * @api private
   */


  onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
      this.emit("packet", packet); // Socket is live - any packet counts

      this.emit("heartbeat");

      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;

        case "ping":
          this.resetPingTimeout();
          this.sendPacket("pong");
          this.emit("ping");
          this.emit("pong");
          break;

        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this.onError(err);
          break;

        case "message":
          this.emit("data", packet.data);
          this.emit("message", packet.data);
          break;
      }
    } else {
      debug('packet received with socket readyState "%s"', this.readyState);
    }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} handshake obj
   * @api private
   */


  onHandshake(data) {
    this.emit("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.onOpen(); // In case open handler closes socket

    if ("closed" === this.readyState) return;
    this.resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @api private
   */


  resetPingTimeout() {
    clearTimeout(this.pingTimeoutTimer);
    this.pingTimeoutTimer = setTimeout(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);

    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }
  /**
   * Called on `drain` event
   *
   * @api private
   */


  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen); // setting prevBufferLen = 0 is very important
    // for example, when upgrading, upgrade packet is sent over,
    // and a nonzero prevBufferLen could cause problems on `drain`

    this.prevBufferLen = 0;

    if (0 === this.writeBuffer.length) {
      this.emit("drain");
    } else {
      this.flush();
    }
  }
  /**
   * Flush write buffers.
   *
   * @api private
   */


  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      debug("flushing %d packets in socket", this.writeBuffer.length);
      this.transport.send(this.writeBuffer); // keep track of current length of writeBuffer
      // splice writeBuffer and callbackBuffer on `drain`

      this.prevBufferLen = this.writeBuffer.length;
      this.emit("flush");
    }
  }
  /**
   * Sends a message.
   *
   * @param {String} message.
   * @param {Function} callback function.
   * @param {Object} options.
   * @return {Socket} for chaining.
   * @api public
   */


  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }

  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} callback function.
   * @api private
   */


  sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = undefined;
    }

    if ("function" === typeof options) {
      fn = options;
      options = null;
    }

    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }

    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type: type,
      data: data,
      options: options
    };
    this.emit("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn) this.once("flush", fn);
    this.flush();
  }
  /**
   * Closes the connection.
   *
   * @api private
   */


  close() {
    const close = () => {
      this.onClose("forced close");
      debug("socket closing - telling transport to close");
      this.transport.close();
    };

    const cleanupAndClose = () => {
      this.removeListener("upgrade", cleanupAndClose);
      this.removeListener("upgradeError", cleanupAndClose);
      close();
    };

    const waitForUpgrade = () => {
      // wait for upgrade to finish since we can't send packets while pausing a transport
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };

    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";

      if (this.writeBuffer.length) {
        this.once("drain", () => {
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

    return this;
  }
  /**
   * Called upon transport error
   *
   * @api private
   */


  onError(err) {
    debug("socket error %j", err);
    Socket.priorWebsocketSuccess = false;
    this.emit("error", err);
    this.onClose("transport error", err);
  }
  /**
   * Called upon transport close.
   *
   * @api private
   */


  onClose(reason, desc) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      debug('socket close with reason: "%s"', reason); // clear timers

      clearTimeout(this.pingIntervalTimer);
      clearTimeout(this.pingTimeoutTimer); // stop event from firing again for transport

      this.transport.removeAllListeners("close"); // ensure transport won't stay open

      this.transport.close(); // ignore further transport communication

      this.transport.removeAllListeners();

      if (typeof removeEventListener === "function") {
        removeEventListener("offline", this.offlineEventListener, false);
      } // set ready state


      this.readyState = "closed"; // clear session id

      this.id = null; // emit close event

      this.emit("close", reason, desc); // clean buffers after, so users can still
      // grab the buffers on `close` event

      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} server upgrades
   * @api private
   *
   */


  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i = 0;
    const j = upgrades.length;

    for (; i < j; i++) {
      if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
    }

    return filteredUpgrades;
  }

}

Socket.priorWebsocketSuccess = false;
/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = lib$2.protocol; // this is an int

function clone(obj) {
  const o = {};

  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }

  return o;
}

var socket$1 = Socket;

var lib$1 = (uri, opts) => new socket$1(uri, opts);
/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */


var Socket_1 = socket$1;
var protocol = socket$1.protocol; // this is an int

var Transport = transport;
var transports = transports$1;
var parser = lib$2;
lib$1.Socket = Socket_1;
lib$1.protocol = protocol;
lib$1.Transport = Transport;
lib$1.transports = transports;
lib$1.parser = parser;

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

var isBinary_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.hasBinary = exports.isBinary = void 0;
  const withNativeArrayBuffer = typeof ArrayBuffer === "function";

  const isView = obj => {
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
  };

  const toString = Object.prototype.toString;
  const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
  const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
  /**
   * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
   *
   * @private
   */

  function isBinary(obj) {
    return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
  }

  exports.isBinary = isBinary;

  function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
      return false;
    }

    if (Array.isArray(obj)) {
      for (let i = 0, l = obj.length; i < l; i++) {
        if (hasBinary(obj[i])) {
          return true;
        }
      }

      return false;
    }

    if (isBinary(obj)) {
      return true;
    }

    if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
      return hasBinary(obj.toJSON(), true);
    }

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
        return true;
      }
    }

    return false;
  }

  exports.hasBinary = hasBinary;
});
unwrapExports(isBinary_1);
isBinary_1.hasBinary;
isBinary_1.isBinary;

var binary = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.reconstructPacket = exports.deconstructPacket = void 0;
  /**
   * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
   *
   * @param {Object} packet - socket.io event packet
   * @return {Object} with deconstructed packet and list of buffers
   * @public
   */

  function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'

    return {
      packet: pack,
      buffers: buffers
    };
  }

  exports.deconstructPacket = deconstructPacket;

  function _deconstructPacket(data, buffers) {
    if (!data) return data;

    if (isBinary_1.isBinary(data)) {
      const placeholder = {
        _placeholder: true,
        num: buffers.length
      };
      buffers.push(data);
      return placeholder;
    } else if (Array.isArray(data)) {
      const newData = new Array(data.length);

      for (let i = 0; i < data.length; i++) {
        newData[i] = _deconstructPacket(data[i], buffers);
      }

      return newData;
    } else if (typeof data === "object" && !(data instanceof Date)) {
      const newData = {};

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          newData[key] = _deconstructPacket(data[key], buffers);
        }
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
   * @public
   */


  function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    packet.attachments = undefined; // no longer useful

    return packet;
  }

  exports.reconstructPacket = reconstructPacket;

  function _reconstructPacket(data, buffers) {
    if (!data) return data;

    if (data && data._placeholder) {
      return buffers[data.num]; // appropriate buffer (should be natural order anyway)
    } else if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        data[i] = _reconstructPacket(data[i], buffers);
      }
    } else if (typeof data === "object") {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          data[key] = _reconstructPacket(data[key], buffers);
        }
      }
    }

    return data;
  }
});
unwrapExports(binary);
binary.reconstructPacket;
binary.deconstructPacket;

/**
 * Helpers.
 */
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
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
  } else if (type === 'number' && isFinite(val)) {
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
      return n * y;

    case 'weeks':
    case 'week':
    case 'w':
      return n * w;

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
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }

  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }

  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }

  if (msAbs >= s) {
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
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }

  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }

  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }

  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }

  return ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural(ms, msAbs, n, name) {
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
  createDebug.humanize = ms;
  createDebug.destroy = destroy;
  Object.keys(env).forEach(key => {
    createDebug[key] = env[key];
  });
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
    let enableOverride = null;

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
          return '%';
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
    debug.useColors = createDebug.useColors();
    debug.color = createDebug.selectColor(namespace);
    debug.extend = extend;
    debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

    Object.defineProperty(debug, 'enabled', {
      enumerable: true,
      configurable: false,
      get: () => enableOverride === null ? createDebug.enabled(namespace) : enableOverride,
      set: v => {
        enableOverride = v;
      }
    }); // Env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    return debug;
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
  /**
  * XXX DO NOT USE. This is a temporary stub function.
  * XXX It WILL be removed in the next major release.
  */


  function destroy() {
    console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

var common = setup;

var browser = createCommonjsModule(function (module, exports) {
  /* eslint-env browser */

  /**
   * This is the web browser implementation of `debug()`.
   */
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = localstorage();

  exports.destroy = (() => {
    let warned = false;
    return () => {
      if (!warned) {
        warned = true;
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
      }
    };
  })();
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
   * Invokes `console.debug()` when available.
   * No-op when `console.debug` is not a "function".
   * If `console.debug` is not available, falls back
   * to `console.log`.
   *
   * @api public
   */


  exports.log = console.debug || console.log || (() => {});
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
browser.formatArgs;
browser.save;
browser.load;
browser.useColors;
browser.storage;
browser.destroy;
browser.colors;
browser.log;

var dist = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Decoder = exports.Encoder = exports.PacketType = exports.protocol = void 0;
  const debug = browser("socket.io-parser");
  /**
   * Protocol version.
   *
   * @public
   */

  exports.protocol = 5;
  var PacketType;

  (function (PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
  })(PacketType = exports.PacketType || (exports.PacketType = {}));
  /**
   * A socket.io Encoder instance
   */


  class Encoder {
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    encode(obj) {
      debug("encoding packet %j", obj);

      if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
        if (isBinary_1.hasBinary(obj)) {
          obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
          return this.encodeAsBinary(obj);
        }
      }

      return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */


    encodeAsString(obj) {
      // first is type
      let str = "" + obj.type; // attachments if we have them

      if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
        str += obj.attachments + "-";
      } // if we have a namespace other than `/`
      // we append it followed by a comma `,`


      if (obj.nsp && "/" !== obj.nsp) {
        str += obj.nsp + ",";
      } // immediately followed by the id


      if (null != obj.id) {
        str += obj.id;
      } // json data


      if (null != obj.data) {
        str += JSON.stringify(obj.data);
      }

      debug("encoded %j as %s", obj, str);
      return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */


    encodeAsBinary(obj) {
      const deconstruction = binary.deconstructPacket(obj);
      const pack = this.encodeAsString(deconstruction.packet);
      const buffers = deconstruction.buffers;
      buffers.unshift(pack); // add packet info to beginning of data list

      return buffers; // write all the buffers
    }

  }

  exports.Encoder = Encoder;
  /**
   * A socket.io Decoder instance
   *
   * @return {Object} decoder
   */

  class Decoder extends componentEmitter$1 {
    constructor() {
      super();
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */


    add(obj) {
      let packet;

      if (typeof obj === "string") {
        packet = this.decodeString(obj);

        if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
          // binary packet's json
          this.reconstructor = new BinaryReconstructor(packet); // no attachments, labeled binary but no binary data to follow

          if (packet.attachments === 0) {
            super.emit("decoded", packet);
          }
        } else {
          // non-binary full packet
          super.emit("decoded", packet);
        }
      } else if (isBinary_1.isBinary(obj) || obj.base64) {
        // raw binary data
        if (!this.reconstructor) {
          throw new Error("got binary data when not reconstructing a packet");
        } else {
          packet = this.reconstructor.takeBinaryData(obj);

          if (packet) {
            // received final buffer
            this.reconstructor = null;
            super.emit("decoded", packet);
          }
        }
      } else {
        throw new Error("Unknown type: " + obj);
      }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */


    decodeString(str) {
      let i = 0; // look up type

      const p = {
        type: Number(str.charAt(0))
      };

      if (PacketType[p.type] === undefined) {
        throw new Error("unknown packet type " + p.type);
      } // look up attachments if type binary


      if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
        const start = i + 1;

        while (str.charAt(++i) !== "-" && i != str.length) {}

        const buf = str.substring(start, i);

        if (buf != Number(buf) || str.charAt(i) !== "-") {
          throw new Error("Illegal attachments");
        }

        p.attachments = Number(buf);
      } // look up namespace (if any)


      if ("/" === str.charAt(i + 1)) {
        const start = i + 1;

        while (++i) {
          const c = str.charAt(i);
          if ("," === c) break;
          if (i === str.length) break;
        }

        p.nsp = str.substring(start, i);
      } else {
        p.nsp = "/";
      } // look up id


      const next = str.charAt(i + 1);

      if ("" !== next && Number(next) == next) {
        const start = i + 1;

        while (++i) {
          const c = str.charAt(i);

          if (null == c || Number(c) != c) {
            --i;
            break;
          }

          if (i === str.length) break;
        }

        p.id = Number(str.substring(start, i + 1));
      } // look up json data


      if (str.charAt(++i)) {
        const payload = tryParse(str.substr(i));

        if (Decoder.isPayloadValid(p.type, payload)) {
          p.data = payload;
        } else {
          throw new Error("invalid payload");
        }
      }

      debug("decoded %s as %j", str, p);
      return p;
    }

    static isPayloadValid(type, payload) {
      switch (type) {
        case PacketType.CONNECT:
          return typeof payload === "object";

        case PacketType.DISCONNECT:
          return payload === undefined;

        case PacketType.CONNECT_ERROR:
          return typeof payload === "string" || typeof payload === "object";

        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          return Array.isArray(payload) && payload.length > 0;

        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          return Array.isArray(payload);
      }
    }
    /**
     * Deallocates a parser's resources
     */


    destroy() {
      if (this.reconstructor) {
        this.reconstructor.finishedReconstruction();
      }
    }

  }

  exports.Decoder = Decoder;

  function tryParse(str) {
    try {
      return JSON.parse(str);
    } catch (e) {
      return false;
    }
  }
  /**
   * A manager of a binary event's 'buffer sequence'. Should
   * be constructed whenever a packet of type BINARY_EVENT is
   * decoded.
   *
   * @param {Object} packet
   * @return {BinaryReconstructor} initialized reconstructor
   */


  class BinaryReconstructor {
    constructor(packet) {
      this.packet = packet;
      this.buffers = [];
      this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */


    takeBinaryData(binData) {
      this.buffers.push(binData);

      if (this.buffers.length === this.reconPack.attachments) {
        // done with buffer list
        const packet = binary.reconstructPacket(this.reconPack, this.buffers);
        this.finishedReconstruction();
        return packet;
      }

      return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */


    finishedReconstruction() {
      this.reconPack = null;
      this.buffers = [];
    }

  }
});
unwrapExports(dist);
dist.Decoder;
dist.Encoder;
dist.PacketType;
dist.protocol;

var on_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.on = void 0;

  function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
      obj.off(ev, fn);
    };
  }

  exports.on = on;
});
unwrapExports(on_1);
on_1.on;

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

var typedEvents = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.StrictEventEmitter = void 0;
  /**
   * Strictly typed version of an `EventEmitter`. A `TypedEventEmitter` takes type
   * parameters for mappings of event names to event data types, and strictly
   * types method calls to the `EventEmitter` according to these event maps.
   *
   * @typeParam ListenEvents - `EventsMap` of user-defined events that can be
   * listened to with `on` or `once`
   * @typeParam EmitEvents - `EventsMap` of user-defined events that can be
   * emitted with `emit`
   * @typeParam ReservedEvents - `EventsMap` of reserved events, that can be
   * emitted by socket.io with `emitReserved`, and can be listened to with
   * `listen`.
   */

  class StrictEventEmitter extends componentEmitter {
    /**
     * Adds the `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */
    on(ev, listener) {
      super.on(ev, listener);
      return this;
    }
    /**
     * Adds a one-time `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */


    once(ev, listener) {
      super.once(ev, listener);
      return this;
    }
    /**
     * Emits an event.
     *
     * @param ev Name of the event
     * @param args Values to send to listeners of this event
     */


    emit(ev, ...args) {
      super.emit(ev, ...args);
      return this;
    }
    /**
     * Emits a reserved event.
     *
     * This method is `protected`, so that only a class extending
     * `StrictEventEmitter` can emit its own reserved events.
     *
     * @param ev Reserved event name
     * @param args Arguments to emit along with the event
     */


    emitReserved(ev, ...args) {
      super.emit(ev, ...args);
      return this;
    }
    /**
     * Returns the listeners listening to an event.
     *
     * @param event Event name
     * @returns Array of listeners subscribed to `event`
     */


    listeners(event) {
      return super.listeners(event);
    }

  }

  exports.StrictEventEmitter = StrictEventEmitter;
});
unwrapExports(typedEvents);
typedEvents.StrictEventEmitter;

var socket = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Socket = void 0;
  const debug = browser$2("socket.io-client:socket");
  /**
   * Internal events.
   * These events can't be emitted by the user.
   */

  const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1
  });

  class Socket extends typedEvents.StrictEventEmitter {
    /**
     * `Socket` constructor.
     *
     * @public
     */
    constructor(io, nsp, opts) {
      super();
      this.receiveBuffer = [];
      this.sendBuffer = [];
      this.ids = 0;
      this.acks = {};
      this.flags = {};
      this.io = io;
      this.nsp = nsp;
      this.ids = 0;
      this.acks = {};
      this.receiveBuffer = [];
      this.sendBuffer = [];
      this.connected = false;
      this.disconnected = true;
      this.flags = {};

      if (opts && opts.auth) {
        this.auth = opts.auth;
      }

      if (this.io._autoConnect) this.open();
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */


    subEvents() {
      if (this.subs) return;
      const io = this.io;
      this.subs = [on_1.on(io, "open", this.onopen.bind(this)), on_1.on(io, "packet", this.onpacket.bind(this)), on_1.on(io, "error", this.onerror.bind(this)), on_1.on(io, "close", this.onclose.bind(this))];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects
     */


    get active() {
      return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @public
     */


    connect() {
      if (this.connected) return this;
      this.subEvents();
      if (!this.io["_reconnecting"]) this.io.open(); // ensure open

      if ("open" === this.io._readyState) this.onopen();
      return this;
    }
    /**
     * Alias for connect()
     */


    open() {
      return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * @return self
     * @public
     */


    send(...args) {
      args.unshift("message");
      this.emit.apply(this, args);
      return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @return self
     * @public
     */


    emit(ev, ...args) {
      if (RESERVED_EVENTS.hasOwnProperty(ev)) {
        throw new Error('"' + ev + '" is a reserved event name');
      }

      args.unshift(ev);
      const packet = {
        type: dist.PacketType.EVENT,
        data: args
      };
      packet.options = {};
      packet.options.compress = this.flags.compress !== false; // event ack callback

      if ("function" === typeof args[args.length - 1]) {
        debug("emitting packet with ack id %d", this.ids);
        this.acks[this.ids] = args.pop();
        packet.id = this.ids++;
      }

      const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
      const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);

      if (discardPacket) {
        debug("discard packet as the transport is not currently writable");
      } else if (this.connected) {
        this.packet(packet);
      } else {
        this.sendBuffer.push(packet);
      }

      this.flags = {};
      return this;
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */


    packet(packet) {
      packet.nsp = this.nsp;

      this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */


    onopen() {
      debug("transport is open - connecting");

      if (typeof this.auth == "function") {
        this.auth(data => {
          this.packet({
            type: dist.PacketType.CONNECT,
            data
          });
        });
      } else {
        this.packet({
          type: dist.PacketType.CONNECT,
          data: this.auth
        });
      }
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */


    onerror(err) {
      if (!this.connected) {
        this.emitReserved("connect_error", err);
      }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @private
     */


    onclose(reason) {
      debug("close (%s)", reason);
      this.connected = false;
      this.disconnected = true;
      delete this.id;
      this.emitReserved("disconnect", reason);
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */


    onpacket(packet) {
      const sameNamespace = packet.nsp === this.nsp;
      if (!sameNamespace) return;

      switch (packet.type) {
        case dist.PacketType.CONNECT:
          if (packet.data && packet.data.sid) {
            const id = packet.data.sid;
            this.onconnect(id);
          } else {
            this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          }

          break;

        case dist.PacketType.EVENT:
          this.onevent(packet);
          break;

        case dist.PacketType.BINARY_EVENT:
          this.onevent(packet);
          break;

        case dist.PacketType.ACK:
          this.onack(packet);
          break;

        case dist.PacketType.BINARY_ACK:
          this.onack(packet);
          break;

        case dist.PacketType.DISCONNECT:
          this.ondisconnect();
          break;

        case dist.PacketType.CONNECT_ERROR:
          const err = new Error(packet.data.message); // @ts-ignore

          err.data = packet.data.data;
          this.emitReserved("connect_error", err);
          break;
      }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */


    onevent(packet) {
      const args = packet.data || [];
      debug("emitting event %j", args);

      if (null != packet.id) {
        debug("attaching ack callback to event");
        args.push(this.ack(packet.id));
      }

      if (this.connected) {
        this.emitEvent(args);
      } else {
        this.receiveBuffer.push(Object.freeze(args));
      }
    }

    emitEvent(args) {
      if (this._anyListeners && this._anyListeners.length) {
        const listeners = this._anyListeners.slice();

        for (const listener of listeners) {
          listener.apply(this, args);
        }
      }

      super.emit.apply(this, args);
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */


    ack(id) {
      const self = this;
      let sent = false;
      return function (...args) {
        // prevent double callbacks
        if (sent) return;
        sent = true;
        debug("sending ack %j", args);
        self.packet({
          type: dist.PacketType.ACK,
          id: id,
          data: args
        });
      };
    }
    /**
     * Called upon a server acknowlegement.
     *
     * @param packet
     * @private
     */


    onack(packet) {
      const ack = this.acks[packet.id];

      if ("function" === typeof ack) {
        debug("calling ack %s with %j", packet.id, packet.data);
        ack.apply(this, packet.data);
        delete this.acks[packet.id];
      } else {
        debug("bad ack %s", packet.id);
      }
    }
    /**
     * Called upon server connect.
     *
     * @private
     */


    onconnect(id) {
      debug("socket connected with id %s", id);
      this.id = id;
      this.connected = true;
      this.disconnected = false;
      this.emitBuffered();
      this.emitReserved("connect");
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */


    emitBuffered() {
      this.receiveBuffer.forEach(args => this.emitEvent(args));
      this.receiveBuffer = [];
      this.sendBuffer.forEach(packet => this.packet(packet));
      this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */


    ondisconnect() {
      debug("server disconnect (%s)", this.nsp);
      this.destroy();
      this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */


    destroy() {
      if (this.subs) {
        // clean subscriptions to avoid reconnections
        this.subs.forEach(subDestroy => subDestroy());
        this.subs = undefined;
      }

      this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually.
     *
     * @return self
     * @public
     */


    disconnect() {
      if (this.connected) {
        debug("performing disconnect (%s)", this.nsp);
        this.packet({
          type: dist.PacketType.DISCONNECT
        });
      } // remove socket from pool


      this.destroy();

      if (this.connected) {
        // fire events
        this.onclose("io client disconnect");
      }

      return this;
    }
    /**
     * Alias for disconnect()
     *
     * @return self
     * @public
     */


    close() {
      return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     * @public
     */


    compress(compress) {
      this.flags.compress = compress;
      return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @returns self
     * @public
     */


    get volatile() {
      this.flags.volatile = true;
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @param listener
     * @public
     */


    onAny(listener) {
      this._anyListeners = this._anyListeners || [];

      this._anyListeners.push(listener);

      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     * @public
     */


    prependAny(listener) {
      this._anyListeners = this._anyListeners || [];

      this._anyListeners.unshift(listener);

      return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @param listener
     * @public
     */


    offAny(listener) {
      if (!this._anyListeners) {
        return this;
      }

      if (listener) {
        const listeners = this._anyListeners;

        for (let i = 0; i < listeners.length; i++) {
          if (listener === listeners[i]) {
            listeners.splice(i, 1);
            return this;
          }
        }
      } else {
        this._anyListeners = [];
      }

      return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     *
     * @public
     */


    listenersAny() {
      return this._anyListeners || [];
    }

  }

  exports.Socket = Socket;
});
unwrapExports(socket);
socket.Socket;

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

var manager = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Manager = void 0;
  const debug = browser$2("socket.io-client:manager");

  class Manager extends typedEvents.StrictEventEmitter {
    constructor(uri, opts) {
      super();
      this.nsps = {};
      this.subs = [];

      if (uri && "object" === typeof uri) {
        opts = uri;
        uri = undefined;
      }

      opts = opts || {};
      opts.path = opts.path || "/socket.io";
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
      this._readyState = "closed";
      this.uri = uri;

      const _parser = opts.parser || dist;

      this.encoder = new _parser.Encoder();
      this.decoder = new _parser.Decoder();
      this._autoConnect = opts.autoConnect !== false;
      if (this._autoConnect) this.open();
    }

    reconnection(v) {
      if (!arguments.length) return this._reconnection;
      this._reconnection = !!v;
      return this;
    }

    reconnectionAttempts(v) {
      if (v === undefined) return this._reconnectionAttempts;
      this._reconnectionAttempts = v;
      return this;
    }

    reconnectionDelay(v) {
      var _a;

      if (v === undefined) return this._reconnectionDelay;
      this._reconnectionDelay = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
      return this;
    }

    randomizationFactor(v) {
      var _a;

      if (v === undefined) return this._randomizationFactor;
      this._randomizationFactor = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
      return this;
    }

    reconnectionDelayMax(v) {
      var _a;

      if (v === undefined) return this._reconnectionDelayMax;
      this._reconnectionDelayMax = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
      return this;
    }

    timeout(v) {
      if (!arguments.length) return this._timeout;
      this._timeout = v;
      return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */


    maybeReconnectOnOpen() {
      // Only try to reconnect if it's the first time we're connecting
      if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
        // keeps reconnection from firing twice for the same reconnection loop
        this.reconnect();
      }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */


    open(fn) {
      debug("readyState %s", this._readyState);
      if (~this._readyState.indexOf("open")) return this;
      debug("opening %s", this.uri);
      this.engine = lib$1(this.uri, this.opts);
      const socket = this.engine;
      const self = this;
      this._readyState = "opening";
      this.skipReconnect = false; // emit `open`

      const openSubDestroy = on_1.on(socket, "open", function () {
        self.onopen();
        fn && fn();
      }); // emit `error`

      const errorSub = on_1.on(socket, "error", err => {
        debug("error");
        self.cleanup();
        self._readyState = "closed";
        this.emitReserved("error", err);

        if (fn) {
          fn(err);
        } else {
          // Only do this if there is no fn to handle the error
          self.maybeReconnectOnOpen();
        }
      });

      if (false !== this._timeout) {
        const timeout = this._timeout;
        debug("connect attempt will timeout after %d", timeout);

        if (timeout === 0) {
          openSubDestroy(); // prevents a race condition with the 'open' event
        } // set timer


        const timer = setTimeout(() => {
          debug("connect attempt timed out after %d", timeout);
          openSubDestroy();
          socket.close();
          socket.emit("error", new Error("timeout"));
        }, timeout);

        if (this.opts.autoUnref) {
          timer.unref();
        }

        this.subs.push(function subDestroy() {
          clearTimeout(timer);
        });
      }

      this.subs.push(openSubDestroy);
      this.subs.push(errorSub);
      return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */


    connect(fn) {
      return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */


    onopen() {
      debug("open"); // clear old subs

      this.cleanup(); // mark as open

      this._readyState = "open";
      this.emitReserved("open"); // add new subs

      const socket = this.engine;
      this.subs.push(on_1.on(socket, "ping", this.onping.bind(this)), on_1.on(socket, "data", this.ondata.bind(this)), on_1.on(socket, "error", this.onerror.bind(this)), on_1.on(socket, "close", this.onclose.bind(this)), on_1.on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */


    onping() {
      this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */


    ondata(data) {
      this.decoder.add(data);
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */


    ondecoded(packet) {
      this.emitReserved("packet", packet);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */


    onerror(err) {
      debug("error", err);
      this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */


    socket(nsp, opts) {
      let socket$1 = this.nsps[nsp];

      if (!socket$1) {
        socket$1 = new socket.Socket(this, nsp, opts);
        this.nsps[nsp] = socket$1;
      }

      return socket$1;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */


    _destroy(socket) {
      const nsps = Object.keys(this.nsps);

      for (const nsp of nsps) {
        const socket = this.nsps[nsp];

        if (socket.active) {
          debug("socket %s is still active, skipping close", nsp);
          return;
        }
      }

      this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */


    _packet(packet) {
      debug("writing packet %j", packet);
      const encodedPackets = this.encoder.encode(packet);

      for (let i = 0; i < encodedPackets.length; i++) {
        this.engine.write(encodedPackets[i], packet.options);
      }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */


    cleanup() {
      debug("cleanup");
      this.subs.forEach(subDestroy => subDestroy());
      this.subs.length = 0;
      this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */


    _close() {
      debug("disconnect");
      this.skipReconnect = true;
      this._reconnecting = false;

      if ("opening" === this._readyState) {
        // `onclose` will not fire because
        // an open event never happened
        this.cleanup();
      }

      this.backoff.reset();
      this._readyState = "closed";
      if (this.engine) this.engine.close();
    }
    /**
     * Alias for close()
     *
     * @private
     */


    disconnect() {
      return this._close();
    }
    /**
     * Called upon engine close.
     *
     * @private
     */


    onclose(reason) {
      debug("onclose");
      this.cleanup();
      this.backoff.reset();
      this._readyState = "closed";
      this.emitReserved("close", reason);

      if (this._reconnection && !this.skipReconnect) {
        this.reconnect();
      }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */


    reconnect() {
      if (this._reconnecting || this.skipReconnect) return this;
      const self = this;

      if (this.backoff.attempts >= this._reconnectionAttempts) {
        debug("reconnect failed");
        this.backoff.reset();
        this.emitReserved("reconnect_failed");
        this._reconnecting = false;
      } else {
        const delay = this.backoff.duration();
        debug("will wait %dms before reconnect attempt", delay);
        this._reconnecting = true;
        const timer = setTimeout(() => {
          if (self.skipReconnect) return;
          debug("attempting reconnect");
          this.emitReserved("reconnect_attempt", self.backoff.attempts); // check again for the case socket closed in above events

          if (self.skipReconnect) return;
          self.open(err => {
            if (err) {
              debug("reconnect attempt error");
              self._reconnecting = false;
              self.reconnect();
              this.emitReserved("reconnect_error", err);
            } else {
              debug("reconnect success");
              self.onreconnect();
            }
          });
        }, delay);

        if (this.opts.autoUnref) {
          timer.unref();
        }

        this.subs.push(function subDestroy() {
          clearTimeout(timer);
        });
      }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */


    onreconnect() {
      const attempt = this.backoff.attempts;
      this._reconnecting = false;
      this.backoff.reset();
      this.emitReserved("reconnect", attempt);
    }

  }

  exports.Manager = Manager;
});
unwrapExports(manager);
manager.Manager;

var build$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.io = exports.Socket = exports.Manager = exports.protocol = void 0;
  const debug = browser$2("socket.io-client");
  /**
   * Module exports.
   */

  module.exports = exports = lookup;
  /**
   * Managers cache.
   */

  const cache = exports.managers = {};

  function lookup(uri, opts) {
    if (typeof uri === "object") {
      opts = uri;
      uri = undefined;
    }

    opts = opts || {};
    const parsed = url_1.url(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
    let io;

    if (newConnection) {
      debug("ignoring socket cache for %s", source);
      io = new manager.Manager(source, opts);
    } else {
      if (!cache[id]) {
        debug("new io instance for %s", source);
        cache[id] = new manager.Manager(source, opts);
      }

      io = cache[id];
    }

    if (parsed.query && !opts.query) {
      opts.query = parsed.queryKey;
    }

    return io.socket(parsed.path, opts);
  }

  exports.io = lookup;
  /**
   * Protocol version.
   *
   * @public
   */

  Object.defineProperty(exports, "protocol", {
    enumerable: true,
    get: function () {
      return dist.protocol;
    }
  });
  /**
   * `connect`.
   *
   * @param {String} uri
   * @public
   */

  exports.connect = lookup;
  /**
   * Expose constructors for standalone build.
   *
   * @public
   */

  var manager_2 = manager;
  Object.defineProperty(exports, "Manager", {
    enumerable: true,
    get: function () {
      return manager_2.Manager;
    }
  });
  Object.defineProperty(exports, "Socket", {
    enumerable: true,
    get: function () {
      return socket.Socket;
    }
  });
  exports.default = lookup;
});
var io = unwrapExports(build$1);
build$1.io;
build$1.Socket;
build$1.Manager;
build$1.protocol;
build$1.managers;
build$1.connect;

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
  react: React
}; // create menu component

var DashupUIView = function DashupUIView() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}; // get type/view/struct

  var type = props.type,
      view = props.view,
      struct = props.struct,
      dashup = props.dashup; // set loading

  var _useState = useState(!(!view || !type || !struct || !dashup)),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1]; // tld


  var item = "".concat(type, ".").concat(struct, ".").concat(view).split('/').join('-'); // check has view

  useEffect(function () {
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
              // expand data
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


              var actualView = shimGlobal[uuid]; // set to cache

              dotProp$1.set(viewCache, item, (actualView === null || actualView === void 0 ? void 0 : actualView["default"]) || actualView); // finish loading

              resolve((actualView === null || actualView === void 0 ? void 0 : actualView["default"]) || actualView);
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
    return Component ? /*#__PURE__*/React.createElement(Component, props) : props.children || /*#__PURE__*/React.createElement("div", null);
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
}(EventEmitter);

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
    _this.events = new EventEmitter(); // bind

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
                el = /*#__PURE__*/React.createElement(this.dashup.View, _objectSpread2(_objectSpread2({}, opts), {
                  page: this,
                  dashup: this.dashup,
                  view: _view,
                  type: type,
                  struct: struct || this.get('type')
                })); // mount app

                ReactDOM.render(el, document.querySelector(selector)); // return el

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

      this.clear = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var result;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _this5.rpc('cart.clear');

              case 2:
                result = _context9.sent;
                // set cart
                setCart(result);

                _this5.emit('cart', _this5.cart); // return user


                return _context9.abrupt("return", _this5.cart);

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      this.remove = /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(product) {
          var opts,
              result,
              _args10 = arguments;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  opts = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : {};
                  _context10.next = 3;
                  return _this5.rpc('cart.remove', {
                    opts: opts,
                    product: product._id || product.get('_id')
                  });

                case 3:
                  result = _context10.sent;
                  // set cart
                  setCart(result);

                  _this5.emit('cart', _this5.cart); // return user


                  return _context10.abrupt("return", _this5.cart);

                case 7:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function (_x11) {
          return _ref12.apply(this, arguments);
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
        var total = (products || _this5.cart.get('products') || []).reduce(function (accum, _ref13) {
          var product = _ref13.product,
              count = _ref13.count;
          // get field
          var productField = _this5.field('product', 'field') || {}; // return value

          return accum + (dotProp.get(product.get ? product.get() : product, "".concat(productField.name || productField.uuid, ".price")) || 0) * (count || 0);
        }, 0); // return total

        return total;
      };

      this.totals = function (products) {
        // get field
        var productField = _this5.field('product', 'field') || {}; // return

        return Array.from((products || _this5.cart.get('products') || []).reduce(function (accum, _ref14) {
          var product = _ref14.product;
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
          accum[type] = _this5.total(_toConsumableArray((products || _this5.cart.get('products') || []).filter(function (_ref15) {
            var product = _ref15.product;
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
        var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(data) {
          var result;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return _this6.dashup.action({
                    type: 'page',
                    page: _this6.get('data.model'),
                    form: _this6.get('_id'),
                    model: _this6.get('data.model'),
                    struct: 'form'
                  }, 'form.submit', data);

                case 2:
                  result = _context11.sent;
                  return _context11.abrupt("return", new DashupModel(result, _this6.dashup));

                case 4:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
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
      var _this7 = this;

      // create
      this.create = /*#__PURE__*/function () {
        var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(data) {
          var result;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.next = 2;
                  return _this7.dashup.action({
                    type: 'page',
                    page: _this7.get('_id'),
                    form: _this7.get('data.forms.0'),
                    model: _this7.get('_id'),
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

        return function (_x13) {
          return _ref17.apply(this, arguments);
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

                this.socket = this.__opts.connection || (this.__opts.io || io).connect("".concat(this.__opts.url || 'https://dashup.io', "?api=v1").concat(this.__opts.key ? "&key=".concat(this.__opts.key) : '', "&session=").concat(this.sessionID), this.__opts.socket || {}); // await connected

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

export default Dashup;
