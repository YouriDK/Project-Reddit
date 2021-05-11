(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@urql/core/dist/5adc38f0.mjs":
/*!***************************************************!*\
  !*** ./node_modules/@urql/core/dist/5adc38f0.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ i; },
/* harmony export */   "_": function() { return /* binding */ _extends; },
/* harmony export */   "a": function() { return /* binding */ makeErrorResult; },
/* harmony export */   "b": function() { return /* binding */ makeFetchBody; },
/* harmony export */   "c": function() { return /* binding */ makeFetchURL; },
/* harmony export */   "d": function() { return /* binding */ makeFetchOptions; },
/* harmony export */   "e": function() { return /* binding */ makeFetchSource; },
/* harmony export */   "f": function() { return /* binding */ createRequest; },
/* harmony export */   "g": function() { return /* binding */ stringifyVariables; },
/* harmony export */   "h": function() { return /* binding */ getOperationName; },
/* harmony export */   "k": function() { return /* binding */ keyDocument; },
/* harmony export */   "m": function() { return /* binding */ makeResult; },
/* harmony export */   "s": function() { return /* binding */ stringifyDocument; }
/* harmony export */ });
/* harmony import */ var graphql_error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql/error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql/language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var graphql_language_parser_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql/language/parser.mjs */ "./node_modules/graphql/language/parser.mjs");
/* harmony import */ var graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql/language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wonka */ "./node_modules/wonka/dist/wonka.mjs");










function rehydrateGraphQlError(r) {
  if ("string" == typeof r) {
    return new graphql_error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError(r);
  } else if ("object" == typeof r && r.message) {
    return new graphql_error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError(r.message, r.nodes, r.source, r.positions, r.path, r, r.extensions || {});
  } else {
    return r;
  }
}

var i = function(e) {
  function CombinedError(r) {
    var t = r.networkError;
    var n = r.response;
    var o = (r.graphQLErrors || []).map(rehydrateGraphQlError);
    var i = function generateErrorMessage(e, r) {
      var t = "";
      if (void 0 !== e) {
        return t = "[Network] " + e.message;
      }
      if (void 0 !== r) {
        r.forEach((function(e) {
          t += "[GraphQL] " + e.message + "\n";
        }));
      }
      return t.trim();
    }(t, o);
    e.call(this, i);
    this.name = "CombinedError";
    this.message = i;
    this.graphQLErrors = o;
    this.networkError = t;
    this.response = n;
  }
  if (e) {
    CombinedError.__proto__ = e;
  }
  (CombinedError.prototype = Object.create(e && e.prototype)).constructor = CombinedError;
  CombinedError.prototype.toString = function toString() {
    return this.message;
  };
  return CombinedError;
}(Error);

function phash(e, r) {
  e |= 0;
  for (var t = 0, n = 0 | r.length; t < n; t++) {
    e = (e << 5) + e + r.charCodeAt(t);
  }
  return e;
}

function hash(e) {
  return phash(5381, e) >>> 0;
}

var a = new Set;

var s = new WeakMap;

function stringify(e) {
  if (null === e || a.has(e)) {
    return "null";
  } else if ("object" != typeof e) {
    return JSON.stringify(e) || "";
  } else if (e.toJSON) {
    return stringify(e.toJSON());
  } else if (Array.isArray(e)) {
    var r = "[";
    for (var t = 0, n = e.length; t < n; t++) {
      if (t > 0) {
        r += ",";
      }
      var o = stringify(e[t]);
      r += o.length > 0 ? o : "null";
    }
    return r += "]";
  }
  var i = Object.keys(e).sort();
  if (!i.length && e.constructor && e.constructor !== Object) {
    var u = s.get(e) || Math.random().toString(36).slice(2);
    s.set(e, u);
    return '{"__key":"' + u + '"}';
  }
  a.add(e);
  var f = "{";
  for (var c = 0, l = i.length; c < l; c++) {
    var p = i[c];
    var h = stringify(e[p]);
    if (h) {
      if (f.length > 1) {
        f += ",";
      }
      f += stringify(p) + ":" + h;
    }
  }
  a.delete(e);
  return f += "}";
}

function stringifyVariables(e) {
  a.clear();
  return stringify(e);
}

function stringifyDocument(e) {
  var r = ("string" != typeof e ? e.loc && e.loc.source.body || (0,graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_1__.print)(e) : e).replace(/([\s,]|#[^\n\r]+)+/g, " ").trim();
  if ("string" != typeof e) {
    var t = "definitions" in e && getOperationName(e);
    if (t) {
      r = "# " + t + "\n" + r;
    }
    if (!e.loc) {
      e.loc = {
        start: 0,
        end: r.length,
        source: {
          body: r,
          name: "gql",
          locationOffset: {
            line: 1,
            column: 1
          }
        }
      };
    }
  }
  return r;
}

var u = new Map;

function keyDocument(e) {
  var r;
  var n;
  if ("string" == typeof e) {
    r = hash(stringifyDocument(e));
    n = u.get(r) || (0,graphql_language_parser_mjs__WEBPACK_IMPORTED_MODULE_2__.parse)(e, {
      noLocation: !0
    });
  } else {
    r = e.__key || hash(stringifyDocument(e));
    n = u.get(r) || e;
  }
  if (!n.loc) {
    stringifyDocument(n);
  }
  n.__key = r;
  u.set(r, n);
  return n;
}

function createRequest(e, r) {
  var t = keyDocument(e);
  return {
    key: r ? phash(t.__key, stringifyVariables(r)) >>> 0 : t.__key,
    query: t,
    variables: r || {}
  };
}

function getOperationName(e) {
  for (var t = 0, n = e.definitions.length; t < n; t++) {
    var o = e.definitions[t];
    if (o.kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OPERATION_DEFINITION && o.name) {
      return o.name.value;
    }
  }
}

function makeResult(e, r, t) {
  return {
    operation: e,
    data: r.data,
    error: Array.isArray(r.errors) ? new i({
      graphQLErrors: r.errors,
      response: t
    }) : void 0,
    extensions: "object" == typeof r.extensions && r.extensions || void 0
  };
}

function makeErrorResult(e, r, t) {
  return {
    operation: e,
    data: void 0,
    error: new i({
      networkError: r,
      response: t
    }),
    extensions: void 0
  };
}

function _extends() {
  return (_extends = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) {
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          e[n] = t[n];
        }
      }
    }
    return e;
  }).apply(this, arguments);
}

function shouldUseGet(e) {
  return "query" === e.kind && !!e.context.preferGetMethod;
}

function makeFetchBody(e) {
  return {
    query: (0,graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_1__.print)(e.query),
    operationName: getOperationName(e.query),
    variables: e.variables || void 0,
    extensions: void 0
  };
}

function makeFetchURL(e, r) {
  var t = shouldUseGet(e);
  var n = e.context.url;
  if (!t || !r) {
    return n;
  }
  var o = [];
  if (r.operationName) {
    o.push("operationName=" + encodeURIComponent(r.operationName));
  }
  if (r.query) {
    o.push("query=" + encodeURIComponent(r.query.replace(/([\s,]|#[^\n\r]+)+/g, " ").trim()));
  }
  if (r.variables) {
    o.push("variables=" + encodeURIComponent(stringifyVariables(r.variables)));
  }
  if (r.extensions) {
    o.push("extensions=" + encodeURIComponent(stringifyVariables(r.extensions)));
  }
  return n + "?" + o.join("&");
}

function makeFetchOptions(e, r) {
  var t = shouldUseGet(e);
  var n = "function" == typeof e.context.fetchOptions ? e.context.fetchOptions() : e.context.fetchOptions || {};
  return _extends({}, n, {
    body: !t && r ? JSON.stringify(r) : void 0,
    method: t ? "GET" : "POST",
    headers: t ? n.headers : _extends({}, {
      "content-type": "application/json"
    }, n.headers)
  });
}

function makeFetchSource(e, r, t) {
  return (0,wonka__WEBPACK_IMPORTED_MODULE_4__.make)((function(n) {
    var o = n.next;
    var i = n.complete;
    var a = "undefined" != typeof AbortController ? new AbortController : null;
    var s = !1;
    Promise.resolve().then((function() {
      if (s) {
        return;
      } else if (a) {
        t.signal = a.signal;
      }
      return function executeFetch(e, r, t) {
        var n = !1;
        var o;
        return (e.context.fetch || fetch)(r, t).then((function(e) {
          o = e;
          n = e.status < 200 || e.status >= ("manual" === t.redirect ? 400 : 300);
          return e.json();
        })).then((function(r) {
          if (!("data" in r) && !("errors" in r)) {
            throw new Error("No Content");
          }
          return makeResult(e, r, o);
        })).catch((function(r) {
          if ("AbortError" !== r.name) {
            return makeErrorResult(e, n ? new Error(o.statusText) : r, o);
          }
        }));
      }(e, r, t);
    })).then((function(e) {
      if (!s) {
        s = !0;
        if (e) {
          o(e);
        }
        i();
      }
    }));
    return function() {
      s = !0;
      if (a) {
        a.abort();
      }
    };
  }));
}


//# sourceMappingURL=5adc38f0.mjs.map


/***/ }),

/***/ "./node_modules/@urql/core/dist/urql-core.mjs":
/*!****************************************************!*\
  !*** ./node_modules/@urql/core/dist/urql-core.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CombinedError": function() { return /* reexport safe */ _5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__.C; },
/* harmony export */   "createRequest": function() { return /* reexport safe */ _5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__.f; },
/* harmony export */   "getOperationName": function() { return /* reexport safe */ _5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__.h; },
/* harmony export */   "makeErrorResult": function() { return /* reexport safe */ _5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__.a; },
/* harmony export */   "makeResult": function() { return /* reexport safe */ _5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__.m; },
/* harmony export */   "stringifyVariables": function() { return /* reexport safe */ _5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__.g; },
/* harmony export */   "Client": function() { return /* binding */ Client; },
/* harmony export */   "cacheExchange": function() { return /* binding */ cacheExchange; },
/* harmony export */   "composeExchanges": function() { return /* binding */ composeExchanges; },
/* harmony export */   "createClient": function() { return /* binding */ createClient; },
/* harmony export */   "debugExchange": function() { return /* binding */ debugExchange; },
/* harmony export */   "dedupExchange": function() { return /* binding */ dedupExchange; },
/* harmony export */   "defaultExchanges": function() { return /* binding */ Q; },
/* harmony export */   "errorExchange": function() { return /* binding */ errorExchange; },
/* harmony export */   "fallbackExchangeIO": function() { return /* binding */ $; },
/* harmony export */   "fetchExchange": function() { return /* binding */ fetchExchange; },
/* harmony export */   "formatDocument": function() { return /* binding */ formatDocument; },
/* harmony export */   "gql": function() { return /* binding */ gql; },
/* harmony export */   "makeOperation": function() { return /* binding */ makeOperation; },
/* harmony export */   "maskTypename": function() { return /* binding */ maskTypename; },
/* harmony export */   "ssrExchange": function() { return /* binding */ ssrExchange; },
/* harmony export */   "subscriptionExchange": function() { return /* binding */ subscriptionExchange; }
/* harmony export */ });
/* harmony import */ var graphql_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql/language/visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql/language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql/language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./5adc38f0.mjs */ "./node_modules/@urql/core/dist/5adc38f0.mjs");
/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wonka */ "./node_modules/wonka/dist/wonka.mjs");












function collectTypes(e, t) {
  if (Array.isArray(e)) {
    for (var r = 0; r < e.length; r++) {
      collectTypes(e[r], t);
    }
  } else if ("object" == typeof e && null !== e) {
    for (var n in e) {
      if ("__typename" === n && "string" == typeof e[n]) {
        t[e[n]] = 0;
      } else {
        collectTypes(e[n], t);
      }
    }
  }
  return t;
}

function collectTypesFromResponse(e) {
  return Object.keys(collectTypes(e, {}));
}

var formatNode = function(e) {
  if (e.selectionSet && !e.selectionSet.selections.some((function(e) {
    return e.kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.FIELD && "__typename" === e.name.value && !e.alias;
  }))) {
    return (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, e, {
      selectionSet: (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, e.selectionSet, {
        selections: e.selectionSet.selections.concat([ {
          kind: graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.FIELD,
          name: {
            kind: graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.NAME,
            value: "__typename"
          }
        } ])
      })
    });
  }
};

var I = new Map;

function formatDocument(t) {
  var r = (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(t);
  var i = I.get(r.__key);
  if (!i) {
    (i = (0,graphql_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_2__.visit)(r, {
      Field: formatNode,
      InlineFragment: formatNode
    })).__key = r.__key;
    I.set(r.__key, i);
  }
  return i;
}

function maskTypename(e) {
  if (!e || "object" != typeof e) {
    return e;
  }
  return Object.keys(e).reduce((function(t, r) {
    var n = e[r];
    if ("__typename" === r) {
      Object.defineProperty(t, "__typename", {
        enumerable: !1,
        value: n
      });
    } else if (Array.isArray(n)) {
      t[r] = n.map(maskTypename);
    } else if (n && "object" == typeof n && "__typename" in n) {
      t[r] = maskTypename(n);
    } else {
      t[r] = n;
    }
    return t;
  }), {});
}

function withPromise(e) {
  e.toPromise = function() {
    return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.toPromise)((0,wonka__WEBPACK_IMPORTED_MODULE_3__.take)(1)(e));
  };
  return e;
}

function makeOperation(e, t, r) {
  if (!r) {
    r = t.context;
  }
  return {
    key: t.key,
    query: t.query,
    variables: t.variables,
    kind: e,
    context: r
  };
}

function addMetadata(e, t) {
  return makeOperation(e.kind, e, (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, e.context, {
    meta: (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, e.context.meta, t)
  }));
}

function noop() {}

function applyDefinitions(e, r, n) {
  for (var i = 0; i < n.length; i++) {
    if (n[i].kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.FRAGMENT_DEFINITION) {
      var a = n[i].name.value;
      var u = (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(n[i]);
      if (!e.has(a)) {
        e.set(a, u);
        r.push(n[i]);
      } else if ( true && e.get(a) !== u) {
        console.warn("[WARNING: Duplicate Fragment] A fragment with name `" + a + "` already exists in this document.\nWhile fragment names may not be unique across your source, each name must be unique per document.");
      }
    } else {
      r.push(n[i]);
    }
  }
}

function gql() {
  var e = arguments;
  var r = new Map;
  var i = [];
  var a = [];
  var o = Array.isArray(arguments[0]) ? arguments[0][0] : arguments[0] || "";
  for (var u = 1; u < arguments.length; u++) {
    var s = e[u];
    if (s && s.definitions) {
      a.push.apply(a, s.definitions);
    } else {
      o += s;
    }
    o += e[0][u];
  }
  applyDefinitions(r, i, (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(o).definitions);
  applyDefinitions(r, i, a);
  return (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__.k)({
    kind: graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.DOCUMENT,
    definitions: i
  });
}

function shouldSkip$1(e) {
  var t = e.kind;
  return "subscription" !== t && "query" !== t;
}

function ssrExchange(e) {
  var t = {};
  var r = [];
  function invalidate(e) {
    r.push(e.operation.key);
    if (1 === r.length) {
      Promise.resolve().then((function() {
        var e;
        while (e = r.shift()) {
          delete t[e];
        }
      }));
    }
  }
  function isCached(e) {
    return !shouldSkip$1(e) && void 0 !== t[e.key];
  }
  var ssr = function(r) {
    var n = r.client;
    var i = r.forward;
    return function(r) {
      var a = e && "boolean" == typeof e.isClient ? !!e.isClient : !n.suspense;
      var o = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.share)(r);
      var s = i((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
        return !isCached(e);
      }))(o));
      var c = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.map)((function(e) {
        return function deserializeResult(e, t) {
          var r = t.error;
          var n = t.data;
          return {
            operation: e,
            data: n ? JSON.parse(n) : void 0,
            extensions: void 0,
            error: r ? new _5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__.C({
              networkError: r.networkError ? new Error(r.networkError) : void 0,
              graphQLErrors: r.graphQLErrors && r.graphQLErrors.length ? r.graphQLErrors : void 0
            }) : void 0
          };
        }(e, t[e.key]);
      }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
        return isCached(e);
      }))(o));
      if (!a) {
        s = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.tap)((function(e) {
          var r = e.operation;
          if (!shouldSkip$1(r)) {
            var n = function serializeResult(e) {
              var t = e.data;
              var r = e.error;
              var n = {};
              if (void 0 !== t) {
                n.data = JSON.stringify(t);
              }
              if (r) {
                n.error = {
                  graphQLErrors: r.graphQLErrors.map((function(e) {
                    if (!e.path && !e.extensions) {
                      return e.message;
                    }
                    return {
                      message: e.message,
                      path: e.path,
                      extensions: e.extensions
                    };
                  }))
                };
                if (r.networkError) {
                  n.error.networkError = "" + r.networkError;
                }
              }
              return n;
            }(e);
            t[r.key] = n;
          }
        }))(s);
      } else {
        c = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.tap)(invalidate)(c);
      }
      return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.merge)([ s, c ]);
    };
  };
  ssr.restoreData = function(e) {
    return (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__._)(t, e);
  };
  ssr.extractData = function() {
    return (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, t);
  };
  if (e && e.initialState) {
    ssr.restoreData(e.initialState);
  }
  return ssr;
}

function shouldSkip(e) {
  var t = e.kind;
  return "mutation" !== t && "query" !== t;
}

function cacheExchange(e) {
  var t = e.forward;
  var r = e.client;
  var n = e.dispatchDebug;
  var a = new Map;
  var o = Object.create(null);
  function mapTypeNames(e) {
    var t = makeOperation(e.kind, e);
    t.query = formatDocument(e.query);
    return t;
  }
  function isOperationCached(e) {
    var t = e.context.requestPolicy;
    return "query" === e.kind && "network-only" !== t && ("cache-only" === t || a.has(e.key));
  }
  return function(e) {
    var u = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.share)(e);
    var s = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.map)((function(e) {
      var t = a.get(e.key);
       true && n((0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, {
        operation: e
      }, t ? {
        type: "cacheHit",
        message: "The result was successfully retried from the cache"
      } : {
        type: "cacheMiss",
        message: "The result could not be retrieved from the cache"
      }));
      var o = (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, t, {
        operation: addMetadata(e, {
          cacheOutcome: t ? "hit" : "miss"
        })
      });
      if ("cache-and-network" === e.context.requestPolicy) {
        o.stale = !0;
        reexecuteOperation(r, e);
      }
      return o;
    }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
      return !shouldSkip(e) && isOperationCached(e);
    }))(u));
    var c = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.tap)((function(e) {
      var t = e.operation;
      if (!t) {
        return;
      }
      var i = collectTypesFromResponse(e.data).concat(t.context.additionalTypenames || []);
      if ("mutation" === e.operation.kind) {
        var u = new Set;
         true && n({
          type: "cacheInvalidation",
          message: "The following typenames have been invalidated: " + i,
          operation: t,
          data: {
            typenames: i,
            response: e
          },
          source: "cacheExchange"
        });
        for (var s = 0; s < i.length; s++) {
          var c = i[s];
          var p = o[c] || (o[c] = new Set);
          p.forEach((function(e) {
            u.add(e);
          }));
          p.clear();
        }
        u.forEach((function(e) {
          if (a.has(e)) {
            t = a.get(e).operation;
            a.delete(e);
            reexecuteOperation(r, t);
          }
        }));
      } else if ("query" === t.kind && e.data) {
        a.set(t.key, e);
        for (var f = 0; f < i.length; f++) {
          var h = i[f];
          (o[h] || (o[h] = new Set)).add(t.key);
        }
      }
    }))(t((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
      return "query" !== e.kind || "cache-only" !== e.context.requestPolicy;
    }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.map)((function(e) {
      return addMetadata(e, {
        cacheOutcome: "miss"
      });
    }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.merge)([ (0,wonka__WEBPACK_IMPORTED_MODULE_3__.map)(mapTypeNames)((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
      return !shouldSkip(e) && !isOperationCached(e);
    }))(u)), (0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
      return shouldSkip(e);
    }))(u) ])))));
    return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.merge)([ s, c ]);
  };
}

function reexecuteOperation(e, t) {
  return e.reexecuteOperation(makeOperation(t.kind, t, (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, t.context, {
    requestPolicy: "network-only"
  })));
}

function subscriptionExchange(e) {
  var t = e.forwardSubscription;
  var n = e.enableAllOperations;
  return function(e) {
    var a = e.client;
    var o = e.forward;
    function isSubscriptionOperation(e) {
      var t = e.kind;
      return "subscription" === t || !!n && ("query" === t || "mutation" === t);
    }
    return function(e) {
      var n = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.share)(e);
      var u = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((function(e) {
        var o = e.key;
        var u = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
          return "teardown" === e.kind && e.key === o;
        }))(n);
        return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(u)(function createSubscriptionSource(e) {
          var n = t({
            key: e.key.toString(36),
            query: (0,graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_4__.print)(e.query),
            variables: e.variables,
            context: (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, e.context)
          });
          return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.make)((function(t) {
            var r = t.next;
            var i = t.complete;
            var o = !1;
            var u;
            Promise.resolve().then((function() {
              if (o) {
                return;
              }
              u = n.subscribe({
                next: function(t) {
                  return r((0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__.m)(e, t));
                },
                error: function(t) {
                  return r((0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(e, t));
                },
                complete: function() {
                  if (!o) {
                    o = !0;
                    if ("subscription" === e.kind) {
                      a.reexecuteOperation(makeOperation("teardown", e, e.context));
                    }
                    i();
                  }
                }
              });
            }));
            return function() {
              o = !0;
              if (u) {
                u.unsubscribe();
              }
            };
          }));
        }(e));
      }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)(isSubscriptionOperation)(n));
      var p = o((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
        return !isSubscriptionOperation(e);
      }))(n));
      return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.merge)([ u, p ]);
    };
  };
}

function debugExchange(e) {
  var t = e.forward;
  if (false) {} else {
    return function(e) {
      return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.tap)((function(e) {
        return console.log("[Exchange debug]: Completed operation: ", e);
      }))(t((0,wonka__WEBPACK_IMPORTED_MODULE_3__.tap)((function(e) {
        return console.log("[Exchange debug]: Incoming operation: ", e);
      }))(e)));
    };
  }
}

function dedupExchange(e) {
  var t = e.forward;
  var r = e.dispatchDebug;
  var n = new Set;
  function filterIncomingOperation(e) {
    var t = e.key;
    var i = e.kind;
    if ("teardown" === i) {
      n.delete(t);
      return !0;
    }
    if ("query" !== i && "subscription" !== i) {
      return !0;
    }
    var a = n.has(t);
    n.add(t);
    if (a) {
       true && r({
        type: "dedup",
        message: "An operation has been deduped.",
        operation: e,
        source: "dedupExchange"
      });
    }
    return !a;
  }
  function afterOperationResult(e) {
    n.delete(e.operation.key);
  }
  return function(e) {
    var r = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)(filterIncomingOperation)(e);
    return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.tap)(afterOperationResult)(t(r));
  };
}

function fetchExchange(e) {
  var t = e.forward;
  var r = e.dispatchDebug;
  return function(e) {
    var n = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.share)(e);
    var i = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((function(e) {
      var t = e.key;
      var i = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
        return "teardown" === e.kind && e.key === t;
      }))(n);
      var a = (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(e);
      var o = (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(e, a);
      var u = (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__.d)(e, a);
       true && r({
        type: "fetchRequest",
        message: "A fetch request is being executed.",
        operation: e,
        data: {
          url: o,
          fetchOptions: u
        },
        source: "fetchExchange"
      });
      return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.onPush)((function(t) {
        var n = !t.data ? t.error : void 0;
         true && r({
          type: n ? "fetchError" : "fetchSuccess",
          message: "A " + (n ? "failed" : "successful") + " fetch response has been returned.",
          operation: e,
          data: {
            url: o,
            fetchOptions: u,
            value: n || t
          },
          source: "fetchExchange"
        });
      }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(i)((0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(e, o, u)));
    }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
      return "query" === e.kind || "mutation" === e.kind;
    }))(n));
    var a = t((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(e) {
      return "query" !== e.kind && "mutation" !== e.kind;
    }))(n));
    return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.merge)([ i, a ]);
  };
}

function fallbackExchange(e) {
  var t = e.dispatchDebug;
  return function(e) {
    return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function() {
      return !1;
    }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.tap)((function(e) {
      if ("teardown" !== e.kind && "production" !== "development") {
        var r = 'No exchange has handled operations of kind "' + e.kind + "\". Check whether you've added an exchange responsible for these operations.";
         true && t({
          type: "fallbackCatch",
          message: r,
          operation: e,
          source: "fallbackExchange"
        });
        console.warn(r);
      }
    }))(e));
  };
}

var $ = fallbackExchange({
  dispatchDebug: noop
});

function composeExchanges(e) {
  return function(t) {
    var r = t.client;
    var n = t.dispatchDebug;
    return e.reduceRight((function(e, t) {
      return t({
        client: r,
        forward: e,
        dispatchDebug: function dispatchDebug$1(e) {
           true && n((0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, {
            timestamp: Date.now(),
            source: t.name
          }, e));
        }
      });
    }), t.forward);
  };
}

function errorExchange(e) {
  var t = e.onError;
  return function(e) {
    var r = e.forward;
    return function(e) {
      return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.tap)((function(e) {
        var r = e.error;
        if (r) {
          t(r, e.operation);
        }
      }))(r(e));
    };
  };
}

var Q = [ dedupExchange, cacheExchange, fetchExchange ];

function createClient(e) {
  return new Client(e);
}

function Client(e) {
  var t = this;
  this.activeOperations = new Map;
  this.queue = [];
  this.createOperationContext = function(e) {
    if (!e) {
      e = {};
    }
    return (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, {
      url: t.url,
      fetchOptions: t.fetchOptions,
      fetch: t.fetch,
      preferGetMethod: t.preferGetMethod
    }, e, {
      suspense: e.suspense || !1 !== e.suspense && t.suspense,
      requestPolicy: e.requestPolicy || t.requestPolicy
    });
  };
  this.createRequestOperation = function(e, r, n) {
    return makeOperation(e, r, t.createOperationContext(n));
  };
  this.executeQuery = function(e, r) {
    var n = t.createRequestOperation("query", e, r);
    return t.executeRequestOperation(n);
  };
  this.executeSubscription = function(e, r) {
    var n = t.createRequestOperation("subscription", e, r);
    return t.executeRequestOperation(n);
  };
  this.executeMutation = function(e, r) {
    var n = t.createRequestOperation("mutation", e, r);
    return t.executeRequestOperation(n);
  };
  if ( true && !e.url) {
    throw new Error("You are creating an urql-client without a url.");
  }
  var r = noop;
  if (true) {
    var n = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.makeSubject)();
    var a = n.next;
    var o = n.source;
    this.subscribeToDebugTarget = function(e) {
      return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.subscribe)(e)(o);
    };
    r = a;
  }
  this.url = e.url;
  this.fetchOptions = e.fetchOptions;
  this.fetch = e.fetch;
  this.suspense = !!e.suspense;
  this.requestPolicy = e.requestPolicy || "cache-first";
  this.preferGetMethod = !!e.preferGetMethod;
  this.maskTypename = !!e.maskTypename;
  var u = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.makeSubject)();
  var s = u.next;
  this.operations$ = u.source;
  var c = !1;
  this.dispatchOperation = function(e) {
    c = !0;
    if (e) {
      s(e);
    }
    while (e = t.queue.shift()) {
      s(e);
    }
    c = !1;
  };
  this.reexecuteOperation = function(e) {
    if ("mutation" === e.kind || t.activeOperations.has(e.key)) {
      t.queue.push(e);
      if (!c) {
        Promise.resolve().then(t.dispatchOperation);
      }
    }
  };
  var p = composeExchanges(void 0 !== e.exchanges ? e.exchanges : Q);
  this.results$ = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.share)(p({
    client: this,
    dispatchDebug: r,
    forward: fallbackExchange({
      dispatchDebug: r
    })
  })(this.operations$));
  (0,wonka__WEBPACK_IMPORTED_MODULE_3__.publish)(this.results$);
}

Client.prototype.executeRequestOperation = function executeRequestOperation(e) {
  var t = this;
  var r = this.activeOperations.get(e.key);
  if (r) {
    return r;
  }
  var n = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(t) {
    return t.operation.key === e.key;
  }))(this.results$);
  if (this.maskTypename) {
    n = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.map)((function(e) {
      return (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, e, {
        data: maskTypename(e.data)
      });
    }))(n);
  }
  if ("mutation" === e.kind) {
    return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.take)(1)((0,wonka__WEBPACK_IMPORTED_MODULE_3__.onStart)((function() {
      return t.dispatchOperation(e);
    }))(n));
  }
  var a = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(t) {
    return "teardown" === t.kind && t.key === e.key;
  }))(this.operations$);
  var o = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.take)(1)((0,wonka__WEBPACK_IMPORTED_MODULE_3__.filter)((function(t) {
    return t.kind === e.kind && t.key === e.key && ("network-only" === t.context.requestPolicy || "cache-and-network" === t.context.requestPolicy);
  }))(this.operations$));
  n = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.onEnd)((function() {
    t.activeOperations.delete(e.key);
    for (var r = t.queue.length - 1; r >= 0; r--) {
      if (t.queue[r].key === e.key) {
        t.queue.splice(r, 1);
      }
    }
    t.dispatchOperation(makeOperation("teardown", e, e.context));
  }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.switchMap)((function(e) {
    if (e.stale) {
      return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.fromValue)(e);
    }
    return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.merge)([ (0,wonka__WEBPACK_IMPORTED_MODULE_3__.fromValue)(e), (0,wonka__WEBPACK_IMPORTED_MODULE_3__.map)((function() {
      return (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, e, {
        stale: !0
      });
    }))(o) ]);
  }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(a)(n)));
  if ("subscription" === e.kind) {
    r = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.share)((0,wonka__WEBPACK_IMPORTED_MODULE_3__.onStart)((function() {
      t.activeOperations.set(e.key, r);
      t.dispatchOperation(e);
    }))(n));
  } else {
    r = function replayOnStart(e, t) {
      return function(r) {
        var n;
        var a = (0,wonka__WEBPACK_IMPORTED_MODULE_3__.share)((0,wonka__WEBPACK_IMPORTED_MODULE_3__.onPush)((function(e) {
          n = e;
        }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.onEnd)((function() {
          n = void 0;
        }))(r)));
        return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.make)((function(r) {
          var o = n;
          return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.subscribe)(r.next)((0,wonka__WEBPACK_IMPORTED_MODULE_3__.onStart)((function() {
            if ("pre" === e) {
              t();
            }
            if (void 0 !== o && o === n) {
              r.next("pre" === e ? (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, o, {
                stale: !0
              }) : o);
            } else if ("post" === e) {
              t();
            }
          }))((0,wonka__WEBPACK_IMPORTED_MODULE_3__.onEnd)(r.complete)(a))).unsubscribe;
        }));
      };
    }("cache-and-network" === e.context.requestPolicy || "network-only" === e.context.requestPolicy ? "pre" : "post", (function() {
      t.activeOperations.set(e.key, r);
      t.dispatchOperation(e);
    }))(n);
  }
  return r;
};

Client.prototype.query = function query(e, t, r) {
  if (!r || "boolean" != typeof r.suspense) {
    r = (0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__._)({}, r, {
      suspense: !1
    });
  }
  return withPromise(this.executeQuery((0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__.f)(e, t), r));
};

Client.prototype.readQuery = function readQuery(e, t, r) {
  var n = null;
  (0,wonka__WEBPACK_IMPORTED_MODULE_3__.subscribe)((function(e) {
    n = e;
  }))(this.query(e, t, r)).unsubscribe();
  return n;
};

Client.prototype.subscription = function subscription(e, t, r) {
  return this.executeSubscription((0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__.f)(e, t), r);
};

Client.prototype.mutation = function mutation(e, t, r) {
  return withPromise(this.executeMutation((0,_5adc38f0_mjs__WEBPACK_IMPORTED_MODULE_0__.f)(e, t), r));
};


//# sourceMappingURL=urql-core.mjs.map


/***/ }),

/***/ "./node_modules/@urql/exchange-graphcache/dist/5301ccd2.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@urql/exchange-graphcache/dist/5301ccd2.mjs ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  return (_extends = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) {
        if (Object.prototype.hasOwnProperty.call(n, r)) {
          t[r] = n[r];
        }
      }
    }
    return t;
  }).apply(this, arguments);
}


//# sourceMappingURL=5301ccd2.mjs.map


/***/ }),

/***/ "./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Store": function() { return /* binding */ Store; },
/* harmony export */   "cacheExchange": function() { return /* binding */ cacheExchange; },
/* harmony export */   "offlineExchange": function() { return /* binding */ offlineExchange; },
/* harmony export */   "query": function() { return /* binding */ query; },
/* harmony export */   "write": function() { return /* binding */ write; }
/* harmony export */ });
/* harmony import */ var _urql_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @urql/core */ "./node_modules/@urql/core/dist/urql-core.mjs");
/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wonka */ "./node_modules/wonka/dist/wonka.mjs");
/* harmony import */ var _5301ccd2_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./5301ccd2.mjs */ "./node_modules/@urql/exchange-graphcache/dist/5301ccd2.mjs");
/* harmony import */ var graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql/language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var graphql_utilities_valueFromASTUntyped_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql/utilities/valueFromASTUntyped.mjs */ "./node_modules/graphql/utilities/valueFromASTUntyped.mjs");
/* harmony import */ var graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql/language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");












function getName(e) {
  return e.name.value;
}

function getFragmentTypeName(e) {
  return e.typeCondition.name.value;
}

function getFieldAlias(e) {
  return e.alias ? e.alias.value : getName(e);
}

function getSelectionSet(e) {
  return e.selectionSet ? e.selectionSet.selections : [];
}

function getTypeCondition(e) {
  return e.typeCondition ? getName(e.typeCondition) : null;
}

function isFieldNode(e) {
  return e.kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.FIELD;
}

function isInlineFragment(e) {
  return e.kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.INLINE_FRAGMENT;
}

function getFieldArguments(e, t) {
  var r = {};
  var i = 0;
  if (e.arguments && e.arguments.length) {
    for (var n = 0, a = e.arguments.length; n < a; n++) {
      var o = e.arguments[n];
      var s = (0,graphql_utilities_valueFromASTUntyped_mjs__WEBPACK_IMPORTED_MODULE_1__.valueFromASTUntyped)(o.value, t);
      if (null != s) {
        r[getName(o)] = s;
        i++;
      }
    }
  }
  return i > 0 ? r : null;
}

function filterVariables(e, t) {
  if (!t || !e.variableDefinitions) {
    return;
  }
  var r = {};
  for (var i = 0, n = e.variableDefinitions.length; i < n; i++) {
    var a = getName(e.variableDefinitions[i].variable);
    r[a] = t[a];
  }
  return r;
}

function normalizeVariables(e, t) {
  var r = {};
  if (!t) {
    return r;
  }
  if (e.variableDefinitions) {
    for (var i = 0, n = e.variableDefinitions.length; i < n; i++) {
      var a = e.variableDefinitions[i];
      var o = getName(a.variable);
      r[o] = void 0 === t[o] && a.defaultValue ? (0,graphql_utilities_valueFromASTUntyped_mjs__WEBPACK_IMPORTED_MODULE_1__.valueFromASTUntyped)(a.defaultValue, t) : t[o];
    }
  }
  for (var s in t) {
    if (!(s in r)) {
      r[s] = t[s];
    }
  }
  return r;
}

var O = "\nhttps://bit.ly/2XbVrpR#";

var _ = new Set;

var E = [];

function popDebugNode() {
  return E.pop();
}

function pushDebugNode(e, t) {
  var r = "";
  if (t.kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.INLINE_FRAGMENT) {
    r = e ? 'Inline Fragment on "' + e + '"' : "Inline Fragment";
  } else if (t.kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.OPERATION_DEFINITION) {
    r = (t.name ? '"' + t.name.value + '"' : "Unnamed") + " " + t.operation;
  } else if (t.kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.FRAGMENT_DEFINITION) {
    r = '"' + t.name.value + '" Fragment';
  }
  if (r) {
    E.push(r);
  }
}

function getDebugOutput() {
  return E.length ? "\n(Caused At: " + E.join(", ") + ")" : "";
}

function invariant(e, t, r) {
  if (!e) {
    var i = t || "Minfied Error #" + r + "\n";
    if (true) {
      i += getDebugOutput();
    }
    var n = new Error(i + O + r);
    n.name = "Graphcache Error";
    throw n;
  }
}

function warn(e, t) {
  if (!_.has(e)) {
    console.warn(e + getDebugOutput() + O + t);
    _.add(e);
  }
}

function getMainOperation(e) {
  for (var t = 0; t < e.definitions.length; t++) {
    if (e.definitions[t].kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.OPERATION_DEFINITION) {
      return e.definitions[t];
    }
  }
  invariant(!1,  true ? "Invalid GraphQL document: All GraphQL documents must contain an OperationDefinitionnode for a query, subscription, or mutation." : 0, 1);
}

function getFragments(e) {
  var t = {};
  for (var r = 0; r < e.definitions.length; r++) {
    var i = e.definitions[r];
    if (i.kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.FRAGMENT_DEFINITION) {
      t[getName(i)] = i;
    }
  }
  return t;
}

function shouldInclude(e, t) {
  var r = e.directives;
  if (!r) {
    return !0;
  }
  for (var i = 0, n = r.length; i < n; i++) {
    var a = r[i];
    var o = getName(a);
    if (("include" === o || "skip" === o) && a.arguments && a.arguments[0] && "if" === getName(a.arguments[0])) {
      var s = (0,graphql_utilities_valueFromASTUntyped_mjs__WEBPACK_IMPORTED_MODULE_1__.valueFromASTUntyped)(a.arguments[0].value, t);
      return "include" === o ? !!s : !s;
    }
  }
  return !0;
}

var b = /^__/;

function isFieldNullable(e, t, r) {
  if (b.test(r)) {
    return !0;
  }
  var i = getField(e, t, r);
  return !!i && "NON_NULL" !== i.type.kind;
}

function isListNullable(e, t, r) {
  var i = getField(e, t, r);
  if (!i) {
    return !1;
  }
  var n = "NON_NULL" === i.type.kind ? i.type.ofType : i.type;
  return "LIST" === n.kind && "NON_NULL" !== n.ofType.kind;
}

function isFieldAvailableOnType(e, t, r) {
  if (b.test(r)) {
    return !0;
  }
  return !!getField(e, t, r);
}

function isInterfaceOfType(e, t, r) {
  if (!r) {
    return !1;
  }
  var i = getTypeCondition(t);
  if (!i || r === i) {
    return !0;
  }
  if (e.types[i] && "OBJECT" === e.types[i].kind) {
    return i === r;
  }
  !function expectAbstractType(e, t) {
    invariant(e.types[t] && ("INTERFACE" === e.types[t].kind || "UNION" === e.types[t].kind),  true ? "Invalid Abstract type: The type `" + t + "` is not an Interface or Union type in the defined schema, but a fragment in the GraphQL document is using it as a type condition." : 0, 5);
  }(e, i);
  expectObjectType(e, r);
  return e.isSubType(i, r);
}

function getField(e, t, r) {
  expectObjectType(e, t);
  var i = e.types[t].fields[r];
  if (true) {
    if (!i) {
      warn("Invalid field: The field `" + r + "` does not exist on `" + t + "`, but the GraphQL document expects it to exist.\nTraversal will continue, however this may lead to undefined behavior!", 4);
    }
  }
  return i;
}

function expectObjectType(e, t) {
  invariant(e.types[t] && "OBJECT" === e.types[t].kind,  true ? "Invalid Object type: The type `" + t + "` is not an object in the defined schema, but the GraphQL document is traversing it." : 0, 3);
}

function warnAboutResolver(e) {
   true && warn("Invalid resolver: `" + e + "` is not in the defined schema, but the `resolvers` option is referencing it.", 23);
}

function keyOfField(t, r) {
  return r ? t + "(" + (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.stringifyVariables)(r) + ")" : t;
}

function joinKeys(e, t) {
  return e + "." + t;
}

function fieldInfoOfKey(e) {
  var t = e.indexOf("(");
  if (t > -1) {
    return {
      fieldKey: e,
      fieldName: e.slice(0, t),
      arguments: JSON.parse(e.slice(t + 1, -1))
    };
  } else {
    return {
      fieldKey: e,
      fieldName: e,
      arguments: null
    };
  }
}

function deserializeKeyInfo(e) {
  var t = e.indexOf(".");
  return {
    entityKey: e.slice(0, t).replace(/%2e/g, "."),
    fieldKey: e.slice(t + 1)
  };
}

function makeDict() {
  return Object.create(null);
}

var w = null;

var D = null;

var F = null;

var S = null;

var L = !1;

function makeNodeMap() {
  return {
    optimistic: makeDict(),
    base: new Map
  };
}

function initDataState(e, t, r, i) {
  w = e;
  D = t;
  F = makeDict();
  L = !!i;
  if (true) {
    E.length = 0;
  }
  if (!r) {
    S = null;
  } else if (i || t.optimisticOrder.length > 0) {
    if (!i && !t.commutativeKeys.has(r)) {
      reserveLayer(t, r);
    } else if (i) {
      t.commutativeKeys.delete(r);
    }
    S = r;
    !function createLayer(e, t) {
      if (-1 === e.optimisticOrder.indexOf(t)) {
        e.optimisticOrder.unshift(t);
      }
      if (!e.refLock[t]) {
        e.refLock[t] = makeDict();
        e.links.optimistic[t] = new Map;
        e.records.optimistic[t] = new Map;
      }
    }(t, r);
  } else {
    S = null;
    deleteLayer(t, r);
  }
}

function clearDataState() {
  if (true) {
    getCurrentDependencies();
  }
  var t = D;
  var r = S;
  L = !1;
  S = null;
  if (r && t.optimisticOrder.indexOf(r) > -1) {
    var i = t.optimisticOrder.length;
    while (--i >= 0 && t.refLock[t.optimisticOrder[i]] && t.commutativeKeys.has(t.optimisticOrder[i])) {
      squashLayer(t.optimisticOrder[i]);
    }
  }
  w = null;
  D = null;
  F = null;
  if (true) {
    E.length = 0;
  }
  if ( true && !t.defer) {
    t.defer = !0;
    Promise.resolve().then((function() {
      initDataState("read", t, null);
      !function gc() {
        D.gc.forEach((function(e, t, r) {
          if ((D.refCount[e] || 0) > 0) {
            r.delete(e);
            return;
          }
          for (var i in D.refLock) {
            var n = D.refLock[i];
            if ((n[e] || 0) > 0) {
              return;
            }
            delete n[e];
          }
          delete D.refCount[e];
          r.delete(e);
          D.records.base.delete(e);
          var a = D.links.base.get(e);
          if (a) {
            D.links.base.delete(e);
            for (var o in a) {
              updateRCForLink(r, D.refCount, a[o], -1);
            }
          }
        }));
      }();
      !function persistData() {
        if (D.storage) {
          L = !0;
          w = "read";
          var t = makeDict();
          D.persist.forEach((function(r) {
            var i = deserializeKeyInfo(r);
            var n = i.entityKey;
            var a = i.fieldKey;
            var o;
            if (void 0 !== (o = readLink(n, a))) {
              t[r] = ":" + (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.stringifyVariables)(o);
            } else if (void 0 !== (o = readRecord(n, a))) {
              t[r] = (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.stringifyVariables)(o);
            } else {
              t[r] = void 0;
            }
          }));
          L = !1;
          D.storage.writeData(t);
          D.persist.clear();
        }
      }();
      clearDataState();
      t.defer = !1;
    }));
  }
}

function noopDataState(e, t, r) {
  initDataState("read", e, t, r);
  clearDataState();
}

function getCurrentOperation() {
  invariant(null !== w,  true ? "Invalid Cache call: The cache may only be accessed or mutated duringoperations like write or query, or as part of its resolvers, updaters, or optimistic configs." : 0, 2);
  return w;
}

function getCurrentDependencies() {
  invariant(null !== F,  true ? "Invalid Cache call: The cache may only be accessed or mutated duringoperations like write or query, or as part of its resolvers, updaters, or optimistic configs." : 0, 2);
  return F;
}

function setNode(e, t, r, i) {
  var n = S ? e.optimistic[S] : e.base;
  var a = n.get(t);
  if (void 0 === a) {
    n.set(t, a = makeDict());
  }
  if (void 0 === i && !S) {
    delete a[r];
  } else {
    a[r] = i;
  }
}

function getNode(e, t, r) {
  var i;
  var n = !L && "read" === w && S && D.commutativeKeys.has(S);
  for (var a = 0, o = D.optimisticOrder.length; a < o; a++) {
    var s = D.optimisticOrder[a];
    var u = e.optimistic[s];
    n = n && s !== S;
    if (u && (!n || !D.commutativeKeys.has(s)) && (!L || "write" === w || D.commutativeKeys.has(s)) && void 0 !== (i = u.get(t)) && r in i) {
      return i[r];
    }
  }
  return void 0 !== (i = e.base.get(t)) ? i[r] : void 0;
}

function updateRCForEntity(e, t, r, i) {
  var n = void 0 !== t[r] ? t[r] : 0;
  var a = t[r] = n + i | 0;
  if (void 0 !== e) {
    if (a <= 0) {
      e.add(r);
    } else if (n <= 0 && a > 0) {
      e.delete(r);
    }
  }
}

function updateRCForLink(e, t, r, i) {
  if ("string" == typeof r) {
    updateRCForEntity(e, t, r, i);
  } else if (Array.isArray(r)) {
    for (var n = 0, a = r.length; n < a; n++) {
      if (Array.isArray(r[n])) {
        updateRCForLink(e, t, r[n], i);
      } else if (r[n]) {
        updateRCForEntity(e, t, r[n], i);
      }
    }
  }
}

function extractNodeFields(e, t, r) {
  if (void 0 !== r) {
    for (var i in r) {
      if (!t.has(i)) {
        e.push(fieldInfoOfKey(i));
        t.add(i);
      }
    }
  }
}

function extractNodeMapFields(e, t, r, i) {
  extractNodeFields(e, t, i.base.get(r));
  for (var n = 0, a = D.optimisticOrder.length; n < a; n++) {
    var o = i.optimistic[D.optimisticOrder[n]];
    if (void 0 !== o) {
      extractNodeFields(e, t, o.get(r));
    }
  }
}

function updateDependencies(e, t) {
  if ("__typename" !== t) {
    if (e !== D.queryRootKey) {
      F[e] = !0;
    } else if (void 0 !== t) {
      F[joinKeys(e, t)] = !0;
    }
  }
}

function updatePersist(e, t) {
  if (!L && D.storage) {
    D.persist.add(function serializeKeys(e, t) {
      return e.replace(/\./g, "%2e") + "." + t;
    }(e, t));
  }
}

function readRecord(e, t) {
  updateDependencies(e, t);
  return getNode(D.records, e, t);
}

function readLink(e, t) {
  updateDependencies(e, t);
  return getNode(D.links, e, t);
}

function writeRecord(e, t, r) {
  updateDependencies(e, t);
  updatePersist(e, t);
  setNode(D.records, e, t, r);
}

function writeLink(e, t, r) {
  var i = D;
  var n;
  var a;
  var o;
  if (S) {
    n = i.refLock[S] || (i.refLock[S] = makeDict());
    a = i.links.optimistic[S];
  } else {
    n = i.refCount;
    a = i.links.base;
    o = i.gc;
  }
  var s = a && a.get(e);
  var u = s && s[t];
  updateDependencies(e, t);
  updatePersist(e, t);
  setNode(i.links, e, t, r);
  updateRCForLink(o, n, u, -1);
  updateRCForLink(o, n, r, 1);
}

function reserveLayer(e, t) {
  var r = e.optimisticOrder.indexOf(t);
  if (-1 === r) {
    e.optimisticOrder.unshift(t);
  } else if (!e.commutativeKeys.has(t)) {
    clearLayer(e, t);
    e.optimisticOrder.splice(r, 1);
    e.optimisticOrder.unshift(t);
  }
  e.commutativeKeys.add(t);
}

function clearLayer(e, t) {
  if (e.refLock[t]) {
    delete e.refLock[t];
    delete e.records.optimistic[t];
    delete e.links.optimistic[t];
  }
}

function deleteLayer(e, t) {
  var r = e.optimisticOrder.indexOf(t);
  if (r > -1) {
    e.optimisticOrder.splice(r, 1);
    e.commutativeKeys.delete(t);
  }
  clearLayer(e, t);
}

function squashLayer(e) {
  var t = F;
  F = makeDict();
  var r = D.links.optimistic[e];
  if (r) {
    r.forEach((function(e, t) {
      for (var r in e) {
        writeLink(t, r, e[r]);
      }
    }));
  }
  var i = D.records.optimistic[e];
  if (i) {
    i.forEach((function(e, t) {
      for (var r in e) {
        writeRecord(t, r, e[r]);
      }
    }));
  }
  F = t;
  deleteLayer(D, e);
}

function inspectFields(e) {
  var t = D.links;
  var r = D.records;
  var i = [];
  var n = new Set;
  updateDependencies(e);
  extractNodeMapFields(i, n, e, t);
  extractNodeMapFields(i, n, e, r);
  return i;
}

var q = {
  current: null
};

function getFieldError(e) {
  return e.__internal.path.length > 0 && e.__internal.errorMap ? e.__internal.errorMap[e.__internal.path.join(".")] : void 0;
}

function makeContext(e, t, r, i, n, a, o) {
  var s = {
    store: e,
    variables: t,
    fragments: r,
    parent: {
      __typename: i
    },
    parentTypeName: i,
    parentKey: n,
    parentFieldKey: "",
    fieldName: "",
    error: void 0,
    partial: !1,
    optimistic: !!a,
    __internal: {
      path: [],
      errorMap: void 0
    }
  };
  if (o && o.graphQLErrors) {
    for (var u = 0; u < o.graphQLErrors.length; u++) {
      var c = o.graphQLErrors[u];
      if (c.path && c.path.length) {
        if (!s.__internal.errorMap) {
          s.__internal.errorMap = Object.create(null);
        }
        s.__internal.errorMap[c.path.join(".")] = c;
      }
    }
  }
  return s;
}

function updateContext(e, t, r, i, n, a) {
  q.current = e;
  e.parent = t;
  e.parentTypeName = r;
  e.parentKey = i;
  e.parentFieldKey = n;
  e.fieldName = a;
  e.error = getFieldError(e);
}

function isFragmentHeuristicallyMatching(e, t, r, i) {
  if (!t) {
    return !1;
  }
  var n = getTypeCondition(e);
  if (!n || t === n) {
    return !0;
  }
   true && warn("Heuristic Fragment Matching: A fragment is trying to match against the `" + t + "` type, but the type condition is `" + n + "`. Since GraphQL allows for interfaces `" + n + "` may be aninterface.\nA schema needs to be defined for this match to be deterministic, otherwise the fragment will be matched heuristically!", 16);
  return !getSelectionSet(e).some((function(e) {
    if (!isFieldNode(e)) {
      return !1;
    }
    var t = keyOfField(getName(e), getFieldArguments(e, i));
    return !function hasField(e, t) {
      return void 0 !== readRecord(e, t) || void 0 !== readLink(e, t);
    }(r, t);
  }));
}

function makeSelectionIterator(e, t, r, i) {
  var n;
  var a = 0;
  return function next() {
    if (void 0 !== n) {
      var o = n();
      if (void 0 !== o) {
        return o;
      }
      n = void 0;
      if (true) {
        popDebugNode();
      }
    }
    while (a < r.length) {
      var s = r[a++];
      if (!shouldInclude(s, i.variables)) {
        continue;
      } else if (!isFieldNode(s)) {
        var u = !isInlineFragment(s) ? i.fragments[getName(s)] : s;
        if (void 0 !== u) {
          if (i.store.schema ? isInterfaceOfType(i.store.schema, u, e) : isFragmentHeuristicallyMatching(u, e, t, i.variables)) {
            if (true) {
              pushDebugNode(e, u);
            }
            return (n = makeSelectionIterator(e, t, getSelectionSet(u), i))();
          }
        }
      } else {
        return s;
      }
    }
  };
}

function ensureData(e) {
  return void 0 === e ? null : e;
}

function ensureLink(e, t) {
  if (null == t) {
    return t;
  } else if (Array.isArray(t)) {
    var r = new Array(t.length);
    for (var i = 0, n = r.length; i < n; i++) {
      r[i] = ensureLink(e, t[i]);
    }
    return r;
  }
  var a = e.keyOfEntity(t);
  if (true) {
    if (!a && t && "object" == typeof t) {
      warn("Can't generate a key for link(...) item.\nYou have to pass an `id` or `_id` field or create a custom `keys` config for `" + t.__typename + "`.", 12);
    }
  }
  return a;
}

function write(e, t, r, i, n) {
  initDataState("write", e.data, n || null);
  var a = startWrite(e, t, r, i);
  clearDataState();
  return a;
}

function startWrite(e, t, r, i, n) {
  var a = getMainOperation(t.query);
  var o = {
    data: r,
    dependencies: getCurrentDependencies()
  };
  var s = e.rootFields[a.operation];
  var u = makeContext(e, normalizeVariables(a, t.variables), getFragments(t.query), s, s, !!n, i);
  if (true) {
    pushDebugNode(s, a);
  }
  writeSelection(u, s, getSelectionSet(a), r);
  if (true) {
    popDebugNode();
  }
  return o;
}

function writeSelection(e, t, r, i) {
  var n = t === e.store.rootFields.query;
  var a = !n && !!e.store.rootNames[t];
  var o = a || n ? t : i.__typename;
  if (!o) {
     true && warn("Couldn't find __typename when writing.\nIf you're writing to the cache manually have to pass a `__typename` property on each entity in your data.", 14);
    return;
  } else if (!a && !n && t) {
    writeRecord(t, "__typename", o);
  }
  var s = makeSelectionIterator(o, t || o, r, e);
  var u;
  while (u = s()) {
    var c = getName(u);
    var l = getFieldArguments(u, e.variables);
    var d = keyOfField(c, l);
    var f = getFieldAlias(u);
    var p = i[f];
    if (true) {
      if (!a && void 0 === p) {
         true && warn("Invalid undefined: The field at `" + d + "` is `undefined`, but the GraphQL query expects a " + (void 0 === u.selectionSet ? "scalar (number, boolean, etc)" : "selection set") + " for this field." + (e.optimistic ? "\nYour optimistic result may be missing a field!" : ""), 13);
        continue;
      } else if (e.store.schema && o && "__typename" !== c) {
        isFieldAvailableOnType(e.store.schema, o, c);
      }
    }
    if ("__typename" === c) {
      continue;
    }
    e.__internal.path.push(f);
    if (e.optimistic && a) {
      var v = e.store.optimisticMutations[c];
      if (!v) {
        continue;
      }
      updateContext(e, i, o, o, d, c);
      p = i[f] = ensureData(v(l || {}, e.store, e));
    }
    if (u.selectionSet) {
      if (t && !a) {
        var y = joinKeys(t, d);
        writeLink(t || o, d, writeField(e, getSelectionSet(u), ensureData(p), y));
      } else {
        writeField(e, getSelectionSet(u), ensureData(p));
      }
    } else if (t && !a) {
      writeRecord(t || o, d, null !== p || !getFieldError(e) ? p : void 0);
    }
    if (a) {
      var m = e.store.updates[o][c];
      if (m) {
        updateContext(e, i, o, o, joinKeys(o, d), c);
        i[c] = p;
        m(i, l || {}, e.store, e);
      }
    }
    e.__internal.path.pop();
  }
}

var I = /^__|PageInfo|(Connection|Edge)$/;

function writeField(e, t, r, i) {
  if (Array.isArray(r)) {
    var n = new Array(r.length);
    for (var a = 0, o = r.length; a < o; a++) {
      e.__internal.path.push(a);
      var s = i ? joinKeys(i, "" + a) : void 0;
      var u = writeField(e, t, r[a], s);
      n[a] = u;
      e.__internal.path.pop();
    }
    return n;
  } else if (null === r) {
    return getFieldError(e) ? void 0 : null;
  }
  var c = e.store.keyOfEntity(r);
  var l = r.__typename;
  if (true) {
    if (i && !e.store.keys[r.__typename] && null === c && "string" == typeof l && !I.test(l)) {
      warn("Invalid key: The GraphQL query at the field at `" + i + "` has a selection set, but no key could be generated for the data at this field.\nYou have to request `id` or `_id` fields for all selection sets or create a custom `keys` config for `" + l + "`.\nEntities without keys will be embedded directly on the parent entity. If this is intentional, create a `keys` config for `" + l + "` that always returns null.", 15);
    }
  }
  var d = c || i;
  writeSelection(e, d, t, r);
  return d || null;
}

function Store(e) {
  var t, r;
  this.keyOfField = keyOfField;
  this.resolveFieldByKey = this.resolve;
  if (!e) {
    e = {};
  }
  this.resolvers = e.resolvers || {};
  this.optimisticMutations = e.optimistic || {};
  this.keys = e.keys || {};
  var i = "Query";
  var n = "Mutation";
  var a = "Subscription";
  if (e.schema) {
    var o = function buildClientSchema(e) {
      var t = e.__schema;
      var r = {};
      function buildNameMap(e) {
        var t = {};
        for (var r = 0; r < e.length; r++) {
          t[e[r].name] = e[r];
        }
        return t;
      }
      function buildType(e) {
        switch (e.kind) {
         case "OBJECT":
         case "INTERFACE":
          return {
            name: e.name,
            kind: e.kind,
            interfaces: buildNameMap(e.interfaces || []),
            fields: buildNameMap(e.fields.map((function(e) {
              return {
                name: e.name,
                type: e.type,
                args: buildNameMap(e.args)
              };
            })))
          };

         case "UNION":
          return {
            name: e.name,
            kind: e.kind,
            types: buildNameMap(e.possibleTypes || [])
          };
        }
      }
      var i = {
        query: t.queryType ? t.queryType.name : null,
        mutation: t.mutationType ? t.mutationType.name : null,
        subscription: t.subscriptionType ? t.subscriptionType.name : null,
        types: void 0,
        isSubType: function isSubType(e, t) {
          var i = r[e];
          var n = r[t];
          if (!i || !n) {
            return !1;
          } else if ("UNION" === i.kind) {
            return !!i.types[t];
          } else if ("OBJECT" !== i.kind && "OBJECT" === n.kind) {
            return !!n.interfaces[e];
          } else {
            return e === t;
          }
        }
      };
      if (t.types) {
        i.types = r;
        for (var n = 0; n < t.types.length; n++) {
          var a = t.types[n];
          if (a && a.name) {
            var o = buildType(a);
            if (o) {
              r[a.name] = o;
            }
          }
        }
      }
      return i;
    }(e.schema);
    i = o.query || i;
    n = o.mutation || n;
    a = o.subscription || a;
    if (o.types) {
      this.schema = o;
    }
  }
  this.updates = ((t = {})[n] = e.updates && e.updates.Mutation || {}, t[a] = e.updates && e.updates.Subscription || {}, 
  t);
  this.rootFields = {
    query: i,
    mutation: n,
    subscription: a
  };
  this.rootNames = ((r = {})[i] = "query", r[n] = "mutation", r[a] = "subscription", 
  r);
  this.data = function make(e) {
    return {
      defer: !1,
      gc: new Set,
      persist: new Set,
      queryRootKey: e,
      refCount: makeDict(),
      refLock: makeDict(),
      links: makeNodeMap(),
      records: makeNodeMap(),
      commutativeKeys: new Set,
      optimisticOrder: [],
      storage: null
    };
  }(i);
  if (this.schema && "production" !== "development") {
    !function expectValidKeyingConfig(e, t) {
      if (true) {
        for (var r in t) {
          if (true) {
            if (!e.types[r]) {
              warn("Invalid Object type: The type `" + r + "` is not an object in the defined schema, but the `keys` option is referencing it.", 20);
            }
          }
        }
      }
    }(this.schema, this.keys);
    !function expectValidUpdatesConfig(e, t) {
      if (false) {}
      if (e.mutation) {
        var r = e.types[e.mutation].fields;
        var i = t[e.mutation] || {};
        for (var n in i) {
          if (true) {
            if (void 0 === r[n]) {
              warn("Invalid mutation field: `" + n + "` is not in the defined schema, but the `updates.Mutation` option is referencing it.", 21);
            }
          }
        }
      }
      if (e.subscription) {
        var a = e.types[e.subscription].fields;
        var o = t[e.subscription] || {};
        for (var s in o) {
          if (true) {
            if (void 0 === a[s]) {
              warn("Invalid subscription field: `" + s + "` is not in the defined schema, but the `updates.Subscription` option is referencing it.", 22);
            }
          }
        }
      }
    }(this.schema, this.updates);
    !function expectValidResolversConfig(e, t) {
      if (false) {}
      for (var r in t) {
        if ("Query" === r) {
          if (e.query) {
            var i = e.types[e.query].fields;
            for (var n in t.Query) {
              if (!i[n]) {
                warnAboutResolver("Query." + n);
              }
            }
          } else {
            warnAboutResolver("Query");
          }
        } else if (!e.types[r]) {
          warnAboutResolver(r);
        } else if ("INTERFACE" === e.types[r].kind || "UNION" === e.types[r].kind) {
          s = r, u = e.types[r].kind,  true && warn("Invalid resolver: `" + s + "` does not match to a concrete type in the schema, but the `resolvers` option is referencing it. Implement the resolver for the types that " + ("UNION" === u ? "make up the union" : "implement the interface") + " instead.", 26);
        } else {
          var a = e.types[r].fields;
          for (var o in t[r]) {
            if (!a[o]) {
              warnAboutResolver(r + "." + o);
            }
          }
        }
      }
      var s, u;
    }(this.schema, this.resolvers);
    !function expectValidOptimisticMutationsConfig(e, t) {
      if (false) {}
      if (e.mutation) {
        var r = e.types[e.mutation].fields;
        for (var i in t) {
          if (true) {
            if (!r[i]) {
              warn("Invalid optimistic mutation field: `" + i + "` is not a mutation field in the defined schema, but the `optimistic` option is referencing it.", 24);
            }
          }
        }
      }
    }(this.schema, this.optimisticMutations);
  }
}

Store.prototype.keyOfEntity = function keyOfEntity(e) {
  if (q.current && e === q.current.parent) {
    return q.current.parentKey;
  }
  if (null == e || "string" == typeof e) {
    return e || null;
  }
  if (!e.__typename) {
    return null;
  }
  if (this.rootNames[e.__typename]) {
    return e.__typename;
  }
  var t;
  if (this.keys[e.__typename]) {
    t = this.keys[e.__typename](e);
  } else if (null != e.id) {
    t = "" + e.id;
  } else if (null != e._id) {
    t = "" + e._id;
  }
  return t ? e.__typename + ":" + t : null;
};

Store.prototype.resolve = function resolve(e, t, r) {
  var i = keyOfField(t, r);
  var n = this.keyOfEntity(e);
  if (!n) {
    return null;
  }
  var a = readRecord(n, i);
  if (void 0 !== a) {
    return a;
  }
  return readLink(n, i) || null;
};

Store.prototype.invalidate = function invalidate(e, t, r) {
  var i = this.keyOfEntity(e);
  invariant(i,  true ? "Can't generate a key for invalidate(...).\nYou have to pass an id or _id field or create a custom `keys` field for `" + typeof e == "object" ? e.__typename : e + "`." : 0, 19);
  !function invalidateEntity(e, t, r) {
    var i = t ? [ {
      fieldKey: keyOfField(t, r)
    } ] : inspectFields(e);
    for (var n = 0, a = i.length; n < a; n++) {
      var o = i[n].fieldKey;
      if (void 0 !== readLink(e, o)) {
        writeLink(e, o, void 0);
      } else {
        writeRecord(e, o, void 0);
      }
    }
  }(i, t, r);
};

Store.prototype.inspectFields = function inspectFields$1(e) {
  var t = this.keyOfEntity(e);
  return t ? inspectFields(t) : [];
};

Store.prototype.updateQuery = function updateQuery(e, i) {
  var n = (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.createRequest)(e.query, e.variables);
  n.query = (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.formatDocument)(n.query);
  var a = i(this.readQuery(n));
  if (null !== a) {
    startWrite(this, n, a);
  }
};

Store.prototype.readQuery = function readQuery(e) {
  var i = (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.createRequest)(e.query, e.variables);
  i.query = (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.formatDocument)(i.query);
  return read(this, i).data;
};

Store.prototype.readFragment = function readFragment$1(e, t, i) {
  return function readFragment(e, t, r, i) {
    var n = getFragments(t);
    var a = Object.keys(n);
    var o = n[a[0]];
    if (!o) {
       true && warn("readFragment(...) was called with an empty fragment.\nYou have to call it with at least one fragment in your GraphQL document.", 6);
      return null;
    }
    var s = getFragmentTypeName(o);
    if ("string" != typeof r && !r.__typename) {
      r.__typename = s;
    }
    var u = e.keyOfEntity(r);
    if (!u) {
       true && warn("Can't generate a key for readFragment(...).\nYou have to pass an `id` or `_id` field or create a custom `keys` config for `" + s + "`.", 7);
      return null;
    }
    if (true) {
      pushDebugNode(s, o);
    }
    var c = readSelection(makeContext(e, i || {}, n, s, u), u, getSelectionSet(o), {}) || null;
    if (true) {
      popDebugNode();
    }
    return c;
  }(this, (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.formatDocument)(e), t, i);
};

Store.prototype.writeFragment = function writeFragment$1(e, t, i) {
  !function writeFragment(e, t, r, i) {
    var n = getFragments(t);
    var a = n[Object.keys(n)[0]];
    if (!a) {
      return  true ? warn("writeFragment(...) was called with an empty fragment.\nYou have to call it with at least one fragment in your GraphQL document.", 11) : 0;
    }
    var o = getFragmentTypeName(a);
    var s = (0,_5301ccd2_mjs__WEBPACK_IMPORTED_MODULE_3__._)({}, {
      __typename: o
    }, r);
    var u = e.keyOfEntity(s);
    if (!u) {
      return  true ? warn("Can't generate a key for writeFragment(...) data.\nYou have to pass an `id` or `_id` field or create a custom `keys` config for `" + o + "`.", 12) : 0;
    }
    if (true) {
      pushDebugNode(o, a);
    }
    writeSelection(makeContext(e, i || {}, n, o, u, void 0), u, getSelectionSet(a), s);
    if (true) {
      popDebugNode();
    }
  }(this, (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.formatDocument)(e), t, i);
};

Store.prototype.link = function link(e, t, r, i) {
  var n = void 0 !== i ? r : null;
  var link = void 0 !== i ? i : r;
  var a = ensureLink(this, e);
  if ("string" == typeof a) {
    writeLink(a, keyOfField(t, n), ensureLink(this, link));
  }
};

function query(e, t, r, i, n) {
  initDataState("read", e.data, r && n || null);
  var a = read(e, t, r, i);
  clearDataState();
  return a;
}

function read(e, t, r, i) {
  var n = getMainOperation(t.query);
  var a = e.rootFields[n.operation];
  var o = getSelectionSet(n);
  var s = makeContext(e, normalizeVariables(n, t.variables), getFragments(t.query), a, a, !1, i);
  if (true) {
    pushDebugNode(a, n);
  }
  var u = a !== s.store.rootFields.query ? readRoot(s, a, o, r || {}) : readSelection(s, a, o, {});
  if (true) {
    popDebugNode();
  }
  return {
    dependencies: getCurrentDependencies(),
    partial: s.partial || !u,
    data: u || null
  };
}

function readRoot(e, t, r, i) {
  var n = e.store.rootNames[t] ? t : i.__typename;
  if ("string" != typeof n) {
    return i;
  }
  var a = makeSelectionIterator(t, t, r, e);
  var o = {
    __typename: n
  };
  var s;
  while (s = a()) {
    var u = getFieldAlias(s);
    var c = i[u];
    e.__internal.path.push(u);
    if (s.selectionSet && null !== c) {
      var l = ensureData(c);
      o[u] = readRootField(e, getSelectionSet(s), l);
    } else {
      o[u] = c;
    }
    e.__internal.path.pop();
  }
  return o;
}

function readRootField(e, t, r) {
  if (Array.isArray(r)) {
    var i = new Array(r.length);
    for (var n = 0, a = r.length; n < a; n++) {
      e.__internal.path.push(n);
      i[n] = readRootField(e, t, r[n]);
      e.__internal.path.pop();
    }
    return i;
  } else if (null === r) {
    return null;
  }
  var o = e.store.keyOfEntity(r);
  if (null !== o) {
    var s = readSelection(e, o, t, {});
    return void 0 === s ? null : s;
  } else {
    return readRoot(e, r.__typename, t, r);
  }
}

function readSelection(e, t, r, i, n) {
  var a = e.store;
  var o = t === a.rootFields.query;
  var s = n && a.keyOfEntity(n) || t;
  if (true) {
    if (!o && e.store.rootNames[s]) {
      warn("Invalid root traversal: A selection was being read on `" + s + "` which is an uncached root type.\nThe `" + e.store.rootFields.mutation + "` and `" + e.store.rootFields.subscription + "` types are special Operation Root Types and cannot be read back from the cache.", 25);
    }
  }
  var u = !o ? readRecord(s, "__typename") || n && n.__typename : t;
  if ("string" != typeof u) {
    return;
  } else if (n && u !== n.__typename) {
     true && warn("Invalid resolver data: The resolver at `" + s + "` returned an invalid typename that could not be reconciled with the cache.", 8);
    return;
  }
  var c = makeSelectionIterator(u, s, r, e);
  var l;
  var d = !1;
  var f = !1;
  while (void 0 !== (l = c())) {
    var p = getName(l);
    var v = getFieldArguments(l, e.variables);
    var y = getFieldAlias(l);
    var m = keyOfField(p, v);
    var h = joinKeys(s, m);
    var g = readRecord(s, m);
    var N = n ? n[p] : void 0;
    var k = a.resolvers[u];
    if ( true && a.schema && u) {
      isFieldAvailableOnType(a.schema, u, p);
    }
    if ("__typename" === p) {
      i[y] = u;
      continue;
    }
    var O = void 0;
    e.__internal.path.push(y);
    if (void 0 !== N && void 0 === l.selectionSet) {
      O = N;
    } else if ("read" === getCurrentOperation() && k && "function" == typeof k[p]) {
      updateContext(e, i, u, s, h, p);
      if (void 0 !== g) {
        i[y] = g;
      }
      O = k[p](i, v || {}, a, e);
      if (l.selectionSet) {
        O = resolveResolverResult(e, u, p, h, getSelectionSet(l), i[y], O);
      }
      if (a.schema && null === O && !isFieldNullable(a.schema, u, p)) {
        return;
      }
    } else if (!l.selectionSet) {
      O = g;
    } else if (void 0 !== N) {
      O = resolveResolverResult(e, u, p, h, getSelectionSet(l), i[y], N);
    } else {
      var _ = readLink(s, m);
      if (void 0 !== _) {
        O = resolveLink(e, _, u, p, getSelectionSet(l), i[y]);
      } else if ("object" == typeof g && null !== g) {
        O = g;
      }
    }
    if (void 0 === O && getFieldError(e)) {
      f = !0;
      O = null;
    }
    e.__internal.path.pop();
    if (void 0 === O && a.schema && isFieldNullable(a.schema, u, p)) {
      f = !0;
      i[y] = null;
    } else if (void 0 === O) {
      return;
    } else {
      d = !0;
      i[y] = O;
    }
  }
  if (f) {
    e.partial = !0;
  }
  return o && f && !d ? void 0 : i;
}

function resolveResolverResult(e, t, r, i, n, a, o) {
  if (Array.isArray(o)) {
    var s = e.store;
    var u = s.schema ? isListNullable(s.schema, t, r) : !1;
    var c = new Array(o.length);
    for (var l = 0, d = o.length; l < d; l++) {
      e.__internal.path.push(l);
      var f = resolveResolverResult(e, t, r, joinKeys(i, "" + l), n, null != a ? a[l] : void 0, o[l]);
      e.__internal.path.pop();
      if (void 0 === f && !u) {
        return;
      } else {
        c[l] = void 0 !== f ? f : null;
      }
    }
    return c;
  } else if (null == o) {
    return o;
  } else if (null === a) {
    return null;
  } else if (function isDataOrKey(e) {
    return "string" == typeof e || "object" == typeof e && "string" == typeof e.__typename;
  }(o)) {
    var p = a || {};
    return "string" == typeof o ? readSelection(e, o, n, p) : readSelection(e, i, n, p, o);
  } else {
     true && warn("Invalid resolver value: The field at `" + i + "` is a scalar (number, boolean, etc), but the GraphQL query expects a selection set for this field.", 9);
    return;
  }
}

function resolveLink(e, t, r, i, n, a) {
  if (Array.isArray(t)) {
    var o = e.store;
    var s = o.schema ? isListNullable(o.schema, r, i) : !1;
    var u = new Array(t.length);
    for (var c = 0, l = t.length; c < l; c++) {
      e.__internal.path.push(c);
      var d = resolveLink(e, t[c], r, i, n, null != a ? a[c] : void 0);
      e.__internal.path.pop();
      if (void 0 === d && !s) {
        return;
      } else {
        u[c] = void 0 !== d ? d : null;
      }
    }
    return u;
  } else if (null === t || null === a) {
    return null;
  } else {
    return readSelection(e, t, n, a || {});
  }
}

function addCacheOutcome(e, t) {
  return (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.makeOperation)(e.kind, e, (0,_5301ccd2_mjs__WEBPACK_IMPORTED_MODULE_3__._)({}, e.context, {
    meta: (0,_5301ccd2_mjs__WEBPACK_IMPORTED_MODULE_3__._)({}, e.context.meta, {
      cacheOutcome: t
    })
  }));
}

function toRequestPolicy(e, t) {
  return (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.makeOperation)(e.kind, e, (0,_5301ccd2_mjs__WEBPACK_IMPORTED_MODULE_3__._)({}, e.context, {
    requestPolicy: t
  }));
}

function cacheExchange(e) {
  return function(t) {
    var m = t.forward;
    var h = t.client;
    var g = t.dispatchDebug;
    var N = new Store(e);
    var k;
    if (e && e.storage) {
      k = e.storage.readData().then((function(t) {
        !function hydrateData(e, t, r) {
          initDataState("write", e, null);
          for (var i in r) {
            var n = r[i];
            if (void 0 !== n) {
              var a = deserializeKeyInfo(i);
              var o = a.entityKey;
              var s = a.fieldKey;
              if (":" === n[0]) {
                writeLink(o, s, JSON.parse(n.slice(1)));
              } else {
                writeRecord(o, s, JSON.parse(n));
              }
            }
          }
          clearDataState();
          e.storage = t;
        }(N.data, e.storage, t);
      }));
    }
    var O = new Map;
    var _ = [];
    var E = new Map;
    var b = makeDict();
    var w = new Set;
    var D = makeDict();
    function isBlockedByOptimisticUpdate(e) {
      for (var t in e) {
        if (b[t]) {
          return !0;
        }
      }
      return !1;
    }
    function collectPendingOperations(e, t) {
      if (t) {
        for (var r in t) {
          var i = D[r];
          if (i) {
            D[r] = [];
            for (var n = 0, a = i.length; n < a; n++) {
              e.add(i[n]);
            }
          }
        }
      }
    }
    function executePendingOperations(e, t) {
      t.forEach((function(t) {
        if (t !== e.key) {
          var r = E.get(t);
          if (r) {
            E.delete(t);
            var i = "cache-first";
            if (w.has(t)) {
              w.delete(t);
              i = "cache-and-network";
            }
            h.reexecuteOperation(toRequestPolicy(r, i));
          }
        }
      }));
    }
    function prepareForwardedOperation(e) {
      if ("query" === e.kind) {
        reserveLayer(N.data, e.key);
      } else if ("teardown" === e.kind) {
        E.delete(e.key);
        noopDataState(N.data, e.key);
      } else if ("mutation" === e.kind && "network-only" !== e.context.requestPolicy) {
        var t = function writeOptimistic(e, t, r) {
          if (true) {
            invariant("mutation" === getMainOperation(t.query).operation,  true ? "writeOptimistic(...) was called with an operation that is not a mutation.\nThis case is unsupported and should never occur." : 0, 10);
          }
          initDataState("write", e.data, r, !0);
          var i = startWrite(e, t, {}, void 0, !0);
          clearDataState();
          return i;
        }(N, e, e.key).dependencies;
        if (!function isDictEmpty(e) {
          for (var t in e) {
            return !1;
          }
          return !0;
        }(t)) {
          for (var n in t) {
            b[n] = !0;
          }
          O.set(e.key, t);
          var a = new Set;
          collectPendingOperations(a, t);
          executePendingOperations(e, a);
        }
      }
      return (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.makeOperation)(e.kind, {
        key: e.key,
        query: (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.formatDocument)(e.query),
        variables: e.variables ? filterVariables(getMainOperation(e.query), e.variables) : e.variables
      }, e.context);
    }
    function updateDependencies(e, t) {
      for (var r in t) {
        (D[r] || (D[r] = [])).push(e.key);
        E.set(e.key, e);
      }
    }
    function operationResultFromCache(e) {
      var t = query(N, e);
      var r = t.data ? !t.partial ? "hit" : "partial" : "miss";
      updateDependencies(e, t.dependencies);
      return {
        outcome: r,
        operation: e,
        data: t.data,
        dependencies: t.dependencies
      };
    }
    function updateCacheWithResult(e, t) {
      var r = e.operation;
      var i = e.error;
      var n = e.extensions;
      var a = r.key;
      if ("mutation" === r.kind) {
        collectPendingOperations(t, O.get(a));
        O.delete(a);
      } else {
        reserveLayer(N.data, r.key);
      }
      var o;
      if (e.data) {
        collectPendingOperations(t, write(N, r, e.data, e.error, a).dependencies);
        var s = query(N, r, e.data, e.error, a);
        e.data = s.data;
        if ("query" === r.kind) {
          collectPendingOperations(t, o = s.dependencies);
        }
      } else {
        noopDataState(N.data, r.key);
      }
      if (o) {
        updateDependencies(e.operation, o);
      }
      return {
        data: e.data,
        error: i,
        extensions: n,
        operation: r
      };
    }
    return function(e) {
      var t = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.share)(e);
      var r = k ? (0,wonka__WEBPACK_IMPORTED_MODULE_4__.mergeMap)((function(e) {
        return (0,wonka__WEBPACK_IMPORTED_MODULE_4__.fromArray)(e[0]);
      }))((0,wonka__WEBPACK_IMPORTED_MODULE_4__.take)(1)((0,wonka__WEBPACK_IMPORTED_MODULE_4__.combine)((0,wonka__WEBPACK_IMPORTED_MODULE_4__.scan)((function(e, t) {
        return e.push(t), e;
      }), [])(t), (0,wonka__WEBPACK_IMPORTED_MODULE_4__.fromPromise)(k)))) : wonka__WEBPACK_IMPORTED_MODULE_4__.empty;
      var i = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.share)((0,wonka__WEBPACK_IMPORTED_MODULE_4__.concat)([ r, t ]));
      var E = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.share)((0,wonka__WEBPACK_IMPORTED_MODULE_4__.map)(operationResultFromCache)((0,wonka__WEBPACK_IMPORTED_MODULE_4__.filter)((function(e) {
        return "query" === e.kind && "network-only" !== e.context.requestPolicy;
      }))(i)));
      var D = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.filter)((function(e) {
        return "query" !== e.kind || "network-only" === e.context.requestPolicy;
      }))(i);
      var F = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.map)((function(e) {
         true && g({
          type: "cacheMiss",
          message: "The result could not be retrieved from the cache",
          operation: e.operation,
          source: "cacheExchange"
        });
        return addCacheOutcome(e.operation, "miss");
      }))((0,wonka__WEBPACK_IMPORTED_MODULE_4__.filter)((function(e) {
        return "miss" === e.outcome && "cache-only" !== e.operation.context.requestPolicy && !isBlockedByOptimisticUpdate(e.dependencies);
      }))(E));
      var S = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.map)((function(e) {
        var t = e.operation;
        var r = e.outcome;
        var i = e.dependencies;
        var n = {
          operation: addCacheOutcome(t, r),
          data: e.data,
          error: e.error,
          extensions: e.extensions
        };
        if ("cache-and-network" === t.context.requestPolicy || "cache-first" === t.context.requestPolicy && "partial" === r) {
          n.stale = !0;
          if (!isBlockedByOptimisticUpdate(i)) {
            h.reexecuteOperation(toRequestPolicy(t, "network-only"));
          } else if ("cache-and-network" === t.context.requestPolicy) {
            w.add(t.key);
          }
        }
         true && g({
          type: "cacheHit",
          message: "A requested operation was found and returned from the cache.",
          operation: e.operation,
          data: {
            value: n
          },
          source: "cacheExchange"
        });
        return n;
      }))((0,wonka__WEBPACK_IMPORTED_MODULE_4__.filter)((function(e) {
        return "miss" !== e.outcome || "cache-only" === e.operation.context.requestPolicy;
      }))(E));
      var L = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.share)(m((0,wonka__WEBPACK_IMPORTED_MODULE_4__.map)(prepareForwardedOperation)((0,wonka__WEBPACK_IMPORTED_MODULE_4__.merge)([ D, F ]))));
      var q = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.map)((function(e) {
        var t = new Set;
        var r = updateCacheWithResult(e, t);
        executePendingOperations(e.operation, t);
        return r;
      }))((0,wonka__WEBPACK_IMPORTED_MODULE_4__.filter)((function(e) {
        return !O.has(e.operation.key);
      }))(L));
      var I = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.mergeMap)((function(e) {
        if (_.push(e) < O.size) {
          return wonka__WEBPACK_IMPORTED_MODULE_4__.empty;
        }
        for (var t = 0; t < _.length; t++) {
          reserveLayer(N.data, _[t].operation.key);
        }
        for (var r in b) {
          delete b[r];
        }
        var i = [];
        var n = new Set;
        var a;
        while (a = _.shift()) {
          i.push(updateCacheWithResult(a, n));
        }
        executePendingOperations(e.operation, n);
        return (0,wonka__WEBPACK_IMPORTED_MODULE_4__.fromArray)(i);
      }))((0,wonka__WEBPACK_IMPORTED_MODULE_4__.filter)((function(e) {
        return O.has(e.operation.key);
      }))(L));
      return (0,wonka__WEBPACK_IMPORTED_MODULE_4__.merge)([ q, I, S ]);
    };
  };
}

function isOfflineError(e) {
  return e && e.networkError && !e.response && ("undefined" != typeof navigator && !1 === navigator.onLine || /request failed|failed to fetch|network\s?error/i.test(e.networkError.message));
}

function offlineExchange(e) {
  return function(r) {
    var a = e.storage;
    if (a && a.onOnline && a.readMetadata && a.writeMetadata) {
      var o = r.forward;
      var s = r.client;
      var u = r.dispatchDebug;
      var c = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.makeSubject)();
      var l = c.source;
      var d = c.next;
      var f = e.optimistic || {};
      var p = [];
      var updateMetadata = function() {
        var e = [];
        for (var t = 0; t < p.length; t++) {
          var r = p[t];
          if ("mutation" === r.kind) {
            e.push({
              query: (0,graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__.print)(r.query),
              variables: r.variables
            });
          }
        }
        a.writeMetadata(e);
      };
      var h = !1;
      var flushQueue = function() {
        if (!h) {
          h = !0;
          for (var e = 0; e < p.length; e++) {
            var t = p[e];
            if ("mutation" === t.kind) {
              d((0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.makeOperation)("teardown", t));
            }
          }
          for (var r = 0; r < p.length; r++) {
            s.reexecuteOperation(p[r]);
          }
          p.length = 0;
          h = !1;
          updateMetadata();
        }
      };
      a.onOnline(flushQueue);
      a.readMetadata().then((function(e) {
        if (e) {
          for (var r = 0; r < e.length; r++) {
            p.push(s.createRequestOperation("mutation", (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.createRequest)(e[r].query, e[r].variables)));
          }
          flushQueue();
        }
      }));
      var g = cacheExchange(e)({
        client: s,
        dispatchDebug: u,
        forward: function(e) {
          return (0,wonka__WEBPACK_IMPORTED_MODULE_4__.filter)((function(e) {
            if ("mutation" === e.operation.kind && isOfflineError(e.error) && function isOptimisticMutation(e, t) {
              var r = t.variables || makeDict();
              var i = getFragments(t.query);
              var n = [].concat(getSelectionSet(getMainOperation(t.query)));
              var a;
              while (a = n.pop()) {
                if (!shouldInclude(a, r)) {
                  continue;
                } else if (!isFieldNode(a)) {
                  var o = !isInlineFragment(a) ? i[getName(a)] : a;
                  if (o) {
                    n.push.apply(n, getSelectionSet(o));
                  }
                } else if (e[getName(a)]) {
                  return !0;
                }
              }
              return !1;
            }(f, e.operation)) {
              p.push(e.operation);
              updateMetadata();
              return !1;
            }
            return !0;
          }))(o(e));
        }
      });
      return function(e) {
        var t = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.share)(e);
        var r = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.merge)([ l, t ]);
        return (0,wonka__WEBPACK_IMPORTED_MODULE_4__.filter)((function(e) {
          if ("query" === e.operation.kind && isOfflineError(e.error)) {
            d(toRequestPolicy(e.operation, "cache-only"));
            p.push(e.operation);
            return !1;
          }
          return !0;
        }))(g(r));
      };
    }
    return cacheExchange(e)(r);
  };
}


//# sourceMappingURL=urql-exchange-graphcache.mjs.map


/***/ }),

/***/ "./node_modules/graphql/error/GraphQLError.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/error/GraphQLError.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphQLError": function() { return /* binding */ GraphQLError; },
/* harmony export */   "printError": function() { return /* binding */ printError; }
/* harmony export */ });
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
/* harmony import */ var _language_location_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/location.mjs */ "./node_modules/graphql/language/location.mjs");
/* harmony import */ var _language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/printLocation.mjs */ "./node_modules/graphql/language/printLocation.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// FIXME:
// flowlint uninitialized-instance-property:off




/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

var GraphQLError = /*#__PURE__*/function (_Error) {
  _inherits(GraphQLError, _Error);

  var _super = _createSuper(GraphQLError);

  /**
   * A message describing the Error for debugging purposes.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   *
   * Note: should be treated as readonly, despite invariant usage.
   */

  /**
   * An array of { line, column } locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */

  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */

  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */

  /**
   * The original error thrown from a field resolver during execution.
   */

  /**
   * Extension fields to add to the formatted error.
   */
  function GraphQLError(message, nodes, source, positions, path, originalError, extensions) {
    var _locations2, _source2, _positions2, _extensions2;

    var _this;

    _classCallCheck(this, GraphQLError);

    _this = _super.call(this, message); // Compute list of blame nodes.

    var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


    var _source = source;

    if (!_source && _nodes) {
      var _nodes$0$loc;

      _source = (_nodes$0$loc = _nodes[0].loc) === null || _nodes$0$loc === void 0 ? void 0 : _nodes$0$loc.source;
    }

    var _positions = positions;

    if (!_positions && _nodes) {
      _positions = _nodes.reduce(function (list, node) {
        if (node.loc) {
          list.push(node.loc.start);
        }

        return list;
      }, []);
    }

    if (_positions && _positions.length === 0) {
      _positions = undefined;
    }

    var _locations;

    if (positions && source) {
      _locations = positions.map(function (pos) {
        return (0,_language_location_mjs__WEBPACK_IMPORTED_MODULE_0__.getLocation)(source, pos);
      });
    } else if (_nodes) {
      _locations = _nodes.reduce(function (list, node) {
        if (node.loc) {
          list.push((0,_language_location_mjs__WEBPACK_IMPORTED_MODULE_0__.getLocation)(node.loc.source, node.loc.start));
        }

        return list;
      }, []);
    }

    var _extensions = extensions;

    if (_extensions == null && originalError != null) {
      var originalExtensions = originalError.extensions;

      if ((0,_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(originalExtensions)) {
        _extensions = originalExtensions;
      }
    }

    Object.defineProperties(_assertThisInitialized(_this), {
      name: {
        value: 'GraphQLError'
      },
      message: {
        value: message,
        // By being enumerable, JSON.stringify will include `message` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: true,
        writable: true
      },
      locations: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: (_locations2 = _locations) !== null && _locations2 !== void 0 ? _locations2 : undefined,
        // By being enumerable, JSON.stringify will include `locations` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: _locations != null
      },
      path: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: path !== null && path !== void 0 ? path : undefined,
        // By being enumerable, JSON.stringify will include `path` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: path != null
      },
      nodes: {
        value: _nodes !== null && _nodes !== void 0 ? _nodes : undefined
      },
      source: {
        value: (_source2 = _source) !== null && _source2 !== void 0 ? _source2 : undefined
      },
      positions: {
        value: (_positions2 = _positions) !== null && _positions2 !== void 0 ? _positions2 : undefined
      },
      originalError: {
        value: originalError
      },
      extensions: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: (_extensions2 = _extensions) !== null && _extensions2 !== void 0 ? _extensions2 : undefined,
        // By being enumerable, JSON.stringify will include `path` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: _extensions != null
      }
    }); // Include (non-enumerable) stack trace.

    if (originalError !== null && originalError !== void 0 && originalError.stack) {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
      return _possibleConstructorReturn(_this);
    } // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')


    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), GraphQLError);
    } else {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }

    return _this;
  }

  _createClass(GraphQLError, [{
    key: "toString",
    value: function toString() {
      return printError(this);
    } // FIXME: workaround to not break chai comparisons, should be remove in v16
    // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet

  }, {
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__.SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'Object';
    }
  }]);

  return GraphQLError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */

function printError(error) {
  var output = error.message;

  if (error.nodes) {
    for (var _i2 = 0, _error$nodes2 = error.nodes; _i2 < _error$nodes2.length; _i2++) {
      var node = _error$nodes2[_i2];

      if (node.loc) {
        output += '\n\n' + (0,_language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.printLocation)(node.loc);
      }
    }
  } else if (error.source && error.locations) {
    for (var _i4 = 0, _error$locations2 = error.locations; _i4 < _error$locations2.length; _i4++) {
      var location = _error$locations2[_i4];
      output += '\n\n' + (0,_language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.printSourceLocation)(error.source, location);
    }
  }

  return output;
}


/***/ }),

/***/ "./node_modules/graphql/error/syntaxError.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/error/syntaxError.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "syntaxError": function() { return /* binding */ syntaxError; }
/* harmony export */ });
/* harmony import */ var _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("Syntax Error: ".concat(description), undefined, source, [position]);
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/defineInspect.mjs":
/*!********************************************************!*\
  !*** ./node_modules/graphql/jsutils/defineInspect.mjs ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ defineInspect; }
/* harmony export */ });
/* harmony import */ var _invariant_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol.mjs */ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");


/**
 * The `defineInspect()` function defines `inspect()` prototype method as alias of `toJSON`
 */

function defineInspect(classObject) {
  var fn = classObject.prototype.toJSON;
  typeof fn === 'function' || (0,_invariant_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0);
  classObject.prototype.inspect = fn; // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2317')

  if (_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__.default) {
    classObject.prototype[_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__.default] = fn;
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/devAssert.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/devAssert.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ devAssert; }
/* harmony export */ });
function devAssert(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message);
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/inspect.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/jsutils/inspect.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ inspect; }
/* harmony export */ });
/* harmony import */ var _nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol.mjs */ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable flowtype/no-weak-types */

var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (_typeof(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return '[Circular]';
  }

  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);

  if (customInspectFn !== undefined) {
    var customValue = customInspectFn.call(value); // check for infinite recursion

    if (customValue !== value) {
      return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function formatObject(object, seenValues) {
  var keys = Object.keys(object);

  if (keys.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  var properties = keys.map(function (key) {
    var value = formatValue(object[key], seenValues);
    return key + ': ' + value;
  });
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];

  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }

  return '[' + items.join(', ') + ']';
}

function getCustomFn(object) {
  var customInspectFn = object[String(_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_0__.default)];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/instanceOf.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/jsutils/instanceOf.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */
// See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
// See: https://webpack.js.org/guides/production/
/* harmony default export */ __webpack_exports__["default"] = ( false ? // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
// eslint-disable-next-line no-shadow
0 : // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  if (value instanceof constructor) {
    return true;
  }

  if (value) {
    var valueClass = value.constructor;
    var className = constructor.name;

    if (className && valueClass && valueClass.name === className) {
      throw new Error("Cannot use ".concat(className, " \"").concat(value, "\" from another module or realm.\n\nEnsure that there is only one instance of \"graphql\" in the node_modules\ndirectory. If different versions of \"graphql\" are the dependencies of other\nrelied on modules, use \"resolutions\" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate \"graphql\" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results."));
    }
  }

  return false;
});


/***/ }),

/***/ "./node_modules/graphql/jsutils/invariant.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/invariant.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ invariant; }
/* harmony export */ });
function invariant(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message != null ? message : 'Unexpected invariant triggered.');
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/isObjectLike.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/jsutils/isObjectLike.mjs ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isObjectLike; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return _typeof(value) == 'object' && value !== null;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/keyValMap.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/keyValMap.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ keyValMap; }
/* harmony export */ });
/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * and a function to produce the values from each item in the array.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: '555-1234', Jenny: '867-5309' }
 *     const phonesByName = keyValMap(
 *       phoneBook,
 *       entry => entry.name,
 *       entry => entry.num
 *     )
 *
 */
function keyValMap(list, keyFn, valFn) {
  return list.reduce(function (map, item) {
    map[keyFn(item)] = valFn(item);
    return map;
  }, Object.create(null));
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;
/* harmony default export */ __webpack_exports__["default"] = (nodejsCustomInspectSymbol);


/***/ }),

/***/ "./node_modules/graphql/language/ast.mjs":
/*!***********************************************!*\
  !*** ./node_modules/graphql/language/ast.mjs ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Location": function() { return /* binding */ Location; },
/* harmony export */   "Token": function() { return /* binding */ Token; },
/* harmony export */   "isNode": function() { return /* binding */ isNode; }
/* harmony export */ });
/* harmony import */ var _jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/defineInspect.mjs */ "./node_modules/graphql/jsutils/defineInspect.mjs");


/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
var Location = /*#__PURE__*/function () {
  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The Token at which this Node begins.
   */

  /**
   * The Token at which this Node ends.
   */

  /**
   * The Source document the AST represents.
   */
  function Location(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }

  var _proto = Location.prototype;

  _proto.toJSON = function toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  };

  return Location;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

(0,_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(Location);
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */

var Token = /*#__PURE__*/function () {
  /**
   * The kind of Token.
   */

  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The 1-indexed line number on which this Token appears.
   */

  /**
   * The 1-indexed column number at which this Token begins.
   */

  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   */

  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  function Token(kind, start, end, line, column, prev, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = prev;
    this.next = null;
  }

  var _proto2 = Token.prototype;

  _proto2.toJSON = function toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  };

  return Token;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

(0,_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(Token);
/**
 * @internal
 */

function isNode(maybeNode) {
  return maybeNode != null && typeof maybeNode.kind === 'string';
}
/**
 * The list of all possible AST node types.
 */


/***/ }),

/***/ "./node_modules/graphql/language/blockString.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/language/blockString.mjs ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dedentBlockStringValue": function() { return /* binding */ dedentBlockStringValue; },
/* harmony export */   "getBlockStringIndentation": function() { return /* binding */ getBlockStringIndentation; },
/* harmony export */   "printBlockString": function() { return /* binding */ printBlockString; }
/* harmony export */ });
/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */
function dedentBlockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = getBlockStringIndentation(rawString);

  if (commonIndent !== 0) {
    for (var i = 1; i < lines.length; i++) {
      lines[i] = lines[i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  var startLine = 0;

  while (startLine < lines.length && isBlank(lines[startLine])) {
    ++startLine;
  }

  var endLine = lines.length;

  while (endLine > startLine && isBlank(lines[endLine - 1])) {
    --endLine;
  } // Return a string of the lines joined with U+000A.


  return lines.slice(startLine, endLine).join('\n');
}

function isBlank(str) {
  for (var i = 0; i < str.length; ++i) {
    if (str[i] !== ' ' && str[i] !== '\t') {
      return false;
    }
  }

  return true;
}
/**
 * @internal
 */


function getBlockStringIndentation(value) {
  var _commonIndent;

  var isFirstLine = true;
  var isEmptyLine = true;
  var indent = 0;
  var commonIndent = null;

  for (var i = 0; i < value.length; ++i) {
    switch (value.charCodeAt(i)) {
      case 13:
        //  \r
        if (value.charCodeAt(i + 1) === 10) {
          ++i; // skip \r\n as one symbol
        }

      // falls through

      case 10:
        //  \n
        isFirstLine = false;
        isEmptyLine = true;
        indent = 0;
        break;

      case 9: //   \t

      case 32:
        //  <space>
        ++indent;
        break;

      default:
        if (isEmptyLine && !isFirstLine && (commonIndent === null || indent < commonIndent)) {
          commonIndent = indent;
        }

        isEmptyLine = false;
    }
  }

  return (_commonIndent = commonIndent) !== null && _commonIndent !== void 0 ? _commonIndent : 0;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */

function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSingleLine = value.indexOf('\n') === -1;
  var hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
  var hasTrailingQuote = value[value.length - 1] === '"';
  var hasTrailingSlash = value[value.length - 1] === '\\';
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
  var result = ''; // Format a multi-line block quote to account for leading space.

  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += '\n' + indentation;
  }

  result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;

  if (printAsMultipleLines) {
    result += '\n';
  }

  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}


/***/ }),

/***/ "./node_modules/graphql/language/directiveLocation.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/graphql/language/directiveLocation.mjs ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectiveLocation": function() { return /* binding */ DirectiveLocation; }
/* harmony export */ });
/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
/**
 * The enum type representing the directive location values.
 */


/***/ }),

/***/ "./node_modules/graphql/language/kinds.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/kinds.mjs ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kind": function() { return /* binding */ Kind; }
/* harmony export */ });
/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */


/***/ }),

/***/ "./node_modules/graphql/language/lexer.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/lexer.mjs ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lexer": function() { return /* binding */ Lexer; },
/* harmony export */   "isPunctuatorTokenKind": function() { return /* binding */ isPunctuatorTokenKind; }
/* harmony export */ });
/* harmony import */ var _error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error/syntaxError.mjs */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");
/* harmony import */ var _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");
/* harmony import */ var _blockString_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blockString.mjs */ "./node_modules/graphql/language/blockString.mjs");




/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */

var Lexer = /*#__PURE__*/function () {
  /**
   * The previously focused non-ignored token.
   */

  /**
   * The currently focused non-ignored token.
   */

  /**
   * The (1-indexed) line containing the current token.
   */

  /**
   * The character offset at which the current line begins.
   */
  function Lexer(source) {
    var startOfFileToken = new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.SOF, 0, 0, 0, 0, null);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */


  var _proto = Lexer.prototype;

  _proto.advance = function advance() {
    this.lastToken = this.token;
    var token = this.token = this.lookahead();
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  ;

  _proto.lookahead = function lookahead() {
    var token = this.token;

    if (token.kind !== _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EOF) {
      do {
        var _token$next;

        // Note: next is only mutable during parsing, so we cast to allow this.
        token = (_token$next = token.next) !== null && _token$next !== void 0 ? _token$next : token.next = readToken(this, token);
      } while (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.COMMENT);
    }

    return token;
  };

  return Lexer;
}();
/**
 * @internal
 */

function isPunctuatorTokenKind(kind) {
  return kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BANG || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.DOLLAR || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.AMP || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PAREN_L || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PAREN_R || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.SPREAD || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.COLON || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EQUALS || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.AT || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACKET_L || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACKET_R || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACE_L || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PIPE || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACE_R;
}

function printCharCode(code) {
  return (// NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
  );
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */


function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;
  var pos = prev.end;

  while (pos < bodyLength) {
    var code = body.charCodeAt(pos);
    var _line = lexer.line;

    var _col = 1 + pos - lexer.lineStart; // SourceCharacter


    switch (code) {
      case 0xfeff: // <BOM>

      case 9: //   \t

      case 32: //  <space>

      case 44:
        //  ,
        ++pos;
        continue;

      case 10:
        //  \n
        ++pos;
        ++lexer.line;
        lexer.lineStart = pos;
        continue;

      case 13:
        //  \r
        if (body.charCodeAt(pos + 1) === 10) {
          pos += 2;
        } else {
          ++pos;
        }

        ++lexer.line;
        lexer.lineStart = pos;
        continue;

      case 33:
        //  !
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BANG, pos, pos + 1, _line, _col, prev);

      case 35:
        //  #
        return readComment(source, pos, _line, _col, prev);

      case 36:
        //  $
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.DOLLAR, pos, pos + 1, _line, _col, prev);

      case 38:
        //  &
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.AMP, pos, pos + 1, _line, _col, prev);

      case 40:
        //  (
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PAREN_L, pos, pos + 1, _line, _col, prev);

      case 41:
        //  )
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PAREN_R, pos, pos + 1, _line, _col, prev);

      case 46:
        //  .
        if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
          return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.SPREAD, pos, pos + 3, _line, _col, prev);
        }

        break;

      case 58:
        //  :
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.COLON, pos, pos + 1, _line, _col, prev);

      case 61:
        //  =
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EQUALS, pos, pos + 1, _line, _col, prev);

      case 64:
        //  @
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.AT, pos, pos + 1, _line, _col, prev);

      case 91:
        //  [
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACKET_L, pos, pos + 1, _line, _col, prev);

      case 93:
        //  ]
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACKET_R, pos, pos + 1, _line, _col, prev);

      case 123:
        // {
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACE_L, pos, pos + 1, _line, _col, prev);

      case 124:
        // |
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PIPE, pos, pos + 1, _line, _col, prev);

      case 125:
        // }
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACE_R, pos, pos + 1, _line, _col, prev);

      case 34:
        //  "
        if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
          return readBlockString(source, pos, _line, _col, prev, lexer);
        }

        return readString(source, pos, _line, _col, prev);

      case 45: //  -

      case 48: //  0

      case 49: //  1

      case 50: //  2

      case 51: //  3

      case 52: //  4

      case 53: //  5

      case 54: //  6

      case 55: //  7

      case 56: //  8

      case 57:
        //  9
        return readNumber(source, pos, code, _line, _col, prev);

      case 65: //  A

      case 66: //  B

      case 67: //  C

      case 68: //  D

      case 69: //  E

      case 70: //  F

      case 71: //  G

      case 72: //  H

      case 73: //  I

      case 74: //  J

      case 75: //  K

      case 76: //  L

      case 77: //  M

      case 78: //  N

      case 79: //  O

      case 80: //  P

      case 81: //  Q

      case 82: //  R

      case 83: //  S

      case 84: //  T

      case 85: //  U

      case 86: //  V

      case 87: //  W

      case 88: //  X

      case 89: //  Y

      case 90: //  Z

      case 95: //  _

      case 97: //  a

      case 98: //  b

      case 99: //  c

      case 100: // d

      case 101: // e

      case 102: // f

      case 103: // g

      case 104: // h

      case 105: // i

      case 106: // j

      case 107: // k

      case 108: // l

      case 109: // m

      case 110: // n

      case 111: // o

      case 112: // p

      case 113: // q

      case 114: // r

      case 115: // s

      case 116: // t

      case 117: // u

      case 118: // v

      case 119: // w

      case 120: // x

      case 121: // y

      case 122:
        // z
        return readName(source, pos, _line, _col, prev);
    }

    throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, pos, unexpectedCharacterMessage(code));
  }

  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;
  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
}
/**
 * Report a message that an unexpected character was encountered.
 */


function unexpectedCharacterMessage(code) {
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
  }

  if (code === 39) {
    // '
    return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
  }

  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */


function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code;
  var position = start;

  do {
    code = body.charCodeAt(++position);
  } while (!isNaN(code) && ( // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */


function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = body.charCodeAt(++position);
  }

  if (code === 48) {
    // 0
    code = body.charCodeAt(++position);

    if (code >= 48 && code <= 57) {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    }
  } else {
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 46) {
    // .
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;
    code = body.charCodeAt(++position);

    if (code === 43 || code === 45) {
      // + -
      code = body.charCodeAt(++position);
    }

    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  } // Numbers cannot be followed by . or NameStart


  if (code === 46 || isNameStart(code)) {
    throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
  }

  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(isFloat ? _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.FLOAT : _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading digits.
 */


function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;

  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = body.charCodeAt(++position);
    } while (code >= 48 && code <= 57); // 0 - 9


    return position;
  }

  throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */


function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position)) && // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.STRING, start, position + 1, line, col, prev, value);
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009) {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    ++position;

    if (code === 92) {
      // \
      value += body.slice(chunkStart, position - 1);
      code = body.charCodeAt(position);

      switch (code) {
        case 34:
          value += '"';
          break;

        case 47:
          value += '/';
          break;

        case 92:
          value += '\\';
          break;

        case 98:
          value += '\b';
          break;

        case 102:
          value += '\f';
          break;

        case 110:
          value += '\n';
          break;

        case 114:
          value += '\r';
          break;

        case 116:
          value += '\t';
          break;

        case 117:
          {
            // uXXXX
            var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));

            if (charCode < 0) {
              var invalidSequence = body.slice(position + 1, position + 5);
              throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
            }

            value += String.fromCharCode(charCode);
            position += 4;
            break;
          }

        default:
          throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
      }

      ++position;
      chunkStart = position;
    }
  }

  throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, 'Unterminated string.');
}
/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */


function readBlockString(source, start, line, col, prev, lexer) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
    // Closing Triple-Quote (""")
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      rawValue += body.slice(chunkStart, position);
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, (0,_blockString_mjs__WEBPACK_IMPORTED_MODULE_3__.dedentBlockStringValue)(rawValue));
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else if ( // Escape Triple-Quote (\""")
    code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      rawValue += body.slice(chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_2__.syntaxError)(source, position, 'Unterminated string.');
}
/**
 * Converts four hexadecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */


function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}
/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */


function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */


function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;

  while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }

  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
} // _ A-Z a-z


function isNameStart(code) {
  return code === 95 || code >= 65 && code <= 90 || code >= 97 && code <= 122;
}


/***/ }),

/***/ "./node_modules/graphql/language/location.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/language/location.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocation": function() { return /* binding */ getLocation; }
/* harmony export */ });
/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}


/***/ }),

/***/ "./node_modules/graphql/language/parser.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/parser.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parse": function() { return /* binding */ parse; },
/* harmony export */   "parseValue": function() { return /* binding */ parseValue; },
/* harmony export */   "parseType": function() { return /* binding */ parseType; },
/* harmony export */   "Parser": function() { return /* binding */ Parser; }
/* harmony export */ });
/* harmony import */ var _error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error/syntaxError.mjs */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony import */ var _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");
/* harmony import */ var _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");
/* harmony import */ var _source_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./source.mjs */ "./node_modules/graphql/language/source.mjs");
/* harmony import */ var _directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directiveLocation.mjs */ "./node_modules/graphql/language/directiveLocation.mjs");
/* harmony import */ var _lexer_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lexer.mjs */ "./node_modules/graphql/language/lexer.mjs");







/**
 * Configuration options to control parser behavior
 */

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  var parser = new Parser(source, options);
  return parser.parseDocument();
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */

function parseValue(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SOF);
  var value = parser.parseValueLiteral(false);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */

function parseType(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SOF);
  var type = parser.parseTypeReference();
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EOF);
  return type;
}
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */

var Parser = /*#__PURE__*/function () {
  function Parser(source, options) {
    var sourceObj = (0,_source_mjs__WEBPACK_IMPORTED_MODULE_1__.isSource)(source) ? source : new _source_mjs__WEBPACK_IMPORTED_MODULE_1__.Source(source);
    this._lexer = new _lexer_mjs__WEBPACK_IMPORTED_MODULE_2__.Lexer(sourceObj);
    this._options = options;
  }
  /**
   * Converts a name lex token into a name parse node.
   */


  var _proto = Parser.prototype;

  _proto.parseName = function parseName() {
    var token = this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.NAME,
      value: token.value,
      loc: this.loc(token)
    };
  } // Implements the parsing rules in the Document section.

  /**
   * Document : Definition+
   */
  ;

  _proto.parseDocument = function parseDocument() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.DOCUMENT,
      definitions: this.many(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SOF, this.parseDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EOF),
      loc: this.loc(start)
    };
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   */
  ;

  _proto.parseDefinition = function parseDefinition() {
    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME)) {
      switch (this._lexer.token.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();

        case 'fragment':
          return this.parseFragmentDefinition();

        case 'schema':
        case 'scalar':
        case 'type':
        case 'interface':
        case 'union':
        case 'enum':
        case 'input':
        case 'directive':
          return this.parseTypeSystemDefinition();

        case 'extend':
          return this.parseTypeSystemExtension();
      }
    } else if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    } else if (this.peekDescription()) {
      return this.parseTypeSystemDefinition();
    }

    throw this.unexpected();
  } // Implements the parsing rules in the Operations section.

  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  ;

  _proto.parseOperationDefinition = function parseOperationDefinition() {
    var start = this._lexer.token;

    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L)) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OPERATION_DEFINITION,
        operation: 'query',
        name: undefined,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    var operation = this.parseOperationType();
    var name;

    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME)) {
      name = this.parseName();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OPERATION_DEFINITION,
      operation: operation,
      name: name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * OperationType : one of query mutation subscription
   */
  ;

  _proto.parseOperationType = function parseOperationType() {
    var operationToken = this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME);

    switch (operationToken.value) {
      case 'query':
        return 'query';

      case 'mutation':
        return 'mutation';

      case 'subscription':
        return 'subscription';
    }

    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  ;

  _proto.parseVariableDefinitions = function parseVariableDefinitions() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_L, this.parseVariableDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_R);
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseVariableDefinition = function parseVariableDefinition() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EQUALS) ? this.parseValueLiteral(true) : undefined,
      directives: this.parseDirectives(true),
      loc: this.loc(start)
    };
  }
  /**
   * Variable : $ Name
   */
  ;

  _proto.parseVariable = function parseVariable() {
    var start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.DOLLAR);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.VARIABLE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  }
  /**
   * SelectionSet : { Selection+ }
   */
  ;

  _proto.parseSelectionSet = function parseSelectionSet() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SELECTION_SET,
      selections: this.many(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, this.parseSelection, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  ;

  _proto.parseSelection = function parseSelection() {
    return this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  ;

  _proto.parseField = function parseField() {
    var start = this._lexer.token;
    var nameOrAlias = this.parseName();
    var alias;
    var name;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FIELD,
      alias: alias,
      name: name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined,
      loc: this.loc(start)
    };
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  ;

  _proto.parseArguments = function parseArguments(isConst) {
    var item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseArgument = function parseArgument() {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ARGUMENT,
      name: name,
      value: this.parseValueLiteral(false),
      loc: this.loc(start)
    };
  };

  _proto.parseConstArgument = function parseConstArgument() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ARGUMENT,
      name: this.parseName(),
      value: (this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON), this.parseValueLiteral(true)),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Fragments section.

  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  ;

  _proto.parseFragment = function parseFragment() {
    var start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SPREAD);
    var hasTypeCondition = this.expectOptionalKeyword('on');

    if (!hasTypeCondition && this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME)) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false),
        loc: this.loc(start)
      };
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  ;

  _proto.parseFragmentDefinition = function parseFragmentDefinition() {
    var _this$_options;

    var start = this._lexer.token;
    this.expectKeyword('fragment'); // Experimental support for defining variables within fragments changes
    // the grammar of FragmentDefinition:
    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

    if (((_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.experimentalFragmentVariables) === true) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentName : Name but not `on`
   */
  ;

  _proto.parseFragmentName = function parseFragmentName() {
    if (this._lexer.token.value === 'on') {
      throw this.unexpected();
    }

    return this.parseName();
  } // Implements the parsing rules in the Values section.

  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  ;

  _proto.parseValueLiteral = function parseValueLiteral(isConst) {
    var token = this._lexer.token;

    switch (token.kind) {
      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_L:
        return this.parseList(isConst);

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L:
        return this.parseObject(isConst);

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.INT:
        this._lexer.advance();

        return {
          kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INT,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.FLOAT:
        this._lexer.advance();

        return {
          kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FLOAT,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.STRING:
      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME:
        this._lexer.advance();

        switch (token.value) {
          case 'true':
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.BOOLEAN,
              value: true,
              loc: this.loc(token)
            };

          case 'false':
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.BOOLEAN,
              value: false,
              loc: this.loc(token)
            };

          case 'null':
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.NULL,
              loc: this.loc(token)
            };

          default:
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ENUM,
              value: token.value,
              loc: this.loc(token)
            };
        }

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.DOLLAR:
        if (!isConst) {
          return this.parseVariable();
        }

        break;
    }

    throw this.unexpected();
  };

  _proto.parseStringLiteral = function parseStringLiteral() {
    var token = this._lexer.token;

    this._lexer.advance();

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.STRING,
      value: token.value,
      block: token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BLOCK_STRING,
      loc: this.loc(token)
    };
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  ;

  _proto.parseList = function parseList(isConst) {
    var _this = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this.parseValueLiteral(isConst);
    };

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.LIST,
      values: this.any(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   */
  ;

  _proto.parseObject = function parseObject(isConst) {
    var _this2 = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this2.parseObjectField(isConst);
    };

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OBJECT,
      fields: this.any(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseObjectField = function parseObjectField(isConst) {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OBJECT_FIELD,
      name: name,
      value: this.parseValueLiteral(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Directives section.

  /**
   * Directives[Const] : Directive[?Const]+
   */
  ;

  _proto.parseDirectives = function parseDirectives(isConst) {
    var directives = [];

    while (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }

    return directives;
  }
  /**
   * Directive[Const] : @ Name Arguments[?Const]?
   */
  ;

  _proto.parseDirective = function parseDirective(isConst) {
    var start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AT);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Types section.

  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  ;

  _proto.parseTypeReference = function parseTypeReference() {
    var start = this._lexer.token;
    var type;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_L)) {
      type = this.parseTypeReference();
      this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_R);
      type = {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.LIST_TYPE,
        type: type,
        loc: this.loc(start)
      };
    } else {
      type = this.parseNamedType();
    }

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BANG)) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.NON_NULL_TYPE,
        type: type,
        loc: this.loc(start)
      };
    }

    return type;
  }
  /**
   * NamedType : Name
   */
  ;

  _proto.parseNamedType = function parseNamedType() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.NAMED_TYPE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Type Definition section.

  /**
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
    // Many definitions begin with a description and require a lookahead.
    var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;

    if (keywordToken.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaDefinition();

        case 'scalar':
          return this.parseScalarTypeDefinition();

        case 'type':
          return this.parseObjectTypeDefinition();

        case 'interface':
          return this.parseInterfaceTypeDefinition();

        case 'union':
          return this.parseUnionTypeDefinition();

        case 'enum':
          return this.parseEnumTypeDefinition();

        case 'input':
          return this.parseInputObjectTypeDefinition();

        case 'directive':
          return this.parseDirectiveDefinition();
      }
    }

    throw this.unexpected(keywordToken);
  };

  _proto.peekDescription = function peekDescription() {
    return this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.STRING) || this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  ;

  _proto.parseDescription = function parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   */
  ;

  _proto.parseSchemaDefinition = function parseSchemaDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.many(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SCHEMA_DEFINITION,
      description: description,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  ;

  _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
    var start = this._lexer.token;
    var operation = this.parseOperationType();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    var type = this.parseNamedType();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OPERATION_TYPE_DEFINITION,
      operation: operation,
      type: type,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  ;

  _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SCALAR_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  ;

  _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
    var _this$_options2;

    if (!this.expectOptionalKeyword('implements')) {
      return [];
    }

    if (((_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.allowLegacySDLImplementsInterfaces) === true) {
      var types = []; // Optional leading ampersand

      this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AMP);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AMP) || this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME));

      return types;
    }

    return this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AMP, this.parseNamedType);
  }
  /**
   * FieldsDefinition : { FieldDefinition+ }
   */
  ;

  _proto.parseFieldsDefinition = function parseFieldsDefinition() {
    var _this$_options3;

    // Legacy support for the SDL?
    if (((_this$_options3 = this._options) === null || _this$_options3 === void 0 ? void 0 : _this$_options3.allowLegacySDLEmptyFields) === true && this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L) && this._lexer.lookahead().kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R) {
      this._lexer.advance();

      this._lexer.advance();

      return [];
    }

    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, this.parseFieldDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R);
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  ;

  _proto.parseFieldDefinition = function parseFieldDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    var type = this.parseTypeReference();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FIELD_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      type: type,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  ;

  _proto.parseArgumentDefs = function parseArgumentDefs() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_L, this.parseInputValueDef, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_R);
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseInputValueDef = function parseInputValueDef() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    var type = this.parseTypeReference();
    var defaultValue;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EQUALS)) {
      defaultValue = this.parseValueLiteral(true);
    }

    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INPUT_VALUE_DEFINITION,
      description: description,
      name: name,
      type: type,
      defaultValue: defaultValue,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INTERFACE_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  ;

  _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.UNION_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  ;

  _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
    return this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EQUALS) ? this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  ;

  _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ENUM_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * EnumValuesDefinition : { EnumValueDefinition+ }
   */
  ;

  _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, this.parseEnumValueDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R);
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   *
   * EnumValue : Name
   */
  ;

  _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ENUM_VALUE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  ;

  _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InputFieldsDefinition : { InputValueDefinition+ }
   */
  ;

  _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, this.parseInputValueDef, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R);
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
    var keywordToken = this._lexer.lookahead();

    if (keywordToken.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaExtension();

        case 'scalar':
          return this.parseScalarTypeExtension();

        case 'type':
          return this.parseObjectTypeExtension();

        case 'interface':
          return this.parseInterfaceTypeExtension();

        case 'union':
          return this.parseUnionTypeExtension();

        case 'enum':
          return this.parseEnumTypeExtension();

        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    }

    throw this.unexpected(keywordToken);
  }
  /**
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   */
  ;

  _proto.parseSchemaExtension = function parseSchemaExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R);

    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SCHEMA_EXTENSION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  ;

  _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);

    if (directives.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SCALAR_TYPE_EXTENSION,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  ;

  _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OBJECT_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  ;

  _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INTERFACE_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  ;

  _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();

    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.UNION_TYPE_EXTENSION,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  ;

  _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();

    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ENUM_TYPE_EXTENSION,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  ;

  _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   */
  ;

  _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('directive');
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AT);
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    var repeatable = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    var locations = this.parseDirectiveLocations();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.DIRECTIVE_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      repeatable: repeatable,
      locations: locations,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  ;

  _proto.parseDirectiveLocations = function parseDirectiveLocations() {
    return this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  ;

  _proto.parseDirectiveLocation = function parseDirectiveLocation() {
    var start = this._lexer.token;
    var name = this.parseName();

    if (_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation[name.value] !== undefined) {
      return name;
    }

    throw this.unexpected(start);
  } // Core parsing utility functions

  /**
   * Returns a location object, used to identify the place in the source that created a given parsed object.
   */
  ;

  _proto.loc = function loc(startToken) {
    var _this$_options4;

    if (((_this$_options4 = this._options) === null || _this$_options4 === void 0 ? void 0 : _this$_options4.noLocation) !== true) {
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_5__.Location(startToken, this._lexer.lastToken, this._lexer.source);
    }
  }
  /**
   * Determines if the next token is of a given kind
   */
  ;

  _proto.peek = function peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectToken = function expectToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_6__.syntaxError)(this._lexer.source, token.start, "Expected ".concat(getTokenKindDesc(kind), ", found ").concat(getTokenDesc(token), "."));
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and return undefined.
   */
  ;

  _proto.expectOptionalToken = function expectOptionalToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    return undefined;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectKeyword = function expectKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME && token.value === value) {
      this._lexer.advance();
    } else {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_6__.syntaxError)(this._lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(getTokenDesc(token), "."));
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  ;

  _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME && token.value === value) {
      this._lexer.advance();

      return true;
    }

    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  ;

  _proto.unexpected = function unexpected(atToken) {
    var token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_6__.syntaxError)(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token), "."));
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.any = function any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }

    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      var nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }

    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.many = function many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));

    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  ;

  _proto.delimitedMany = function delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));

    return nodes;
  };

  return Parser;
}();
/**
 * A helper function to describe a token as a string for debugging.
 */

function getTokenDesc(token) {
  var value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? " \"".concat(value, "\"") : '');
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */


function getTokenKindDesc(kind) {
  return (0,_lexer_mjs__WEBPACK_IMPORTED_MODULE_2__.isPunctuatorTokenKind)(kind) ? "\"".concat(kind, "\"") : kind;
}


/***/ }),

/***/ "./node_modules/graphql/language/printLocation.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/language/printLocation.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printLocation": function() { return /* binding */ printLocation; },
/* harmony export */   "printSourceLocation": function() { return /* binding */ printSourceLocation; }
/* harmony export */ });
/* harmony import */ var _location_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.mjs */ "./node_modules/graphql/language/location.mjs");

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printLocation(location) {
  return printSourceLocation(location.source, (0,_location_mjs__WEBPACK_IMPORTED_MODULE_0__.getLocation)(location.source, location.start));
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = sourceLocation.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = sourceLocation.line + lineOffset;
  var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = sourceLocation.column + columnOffset;
  var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
  var lines = body.split(/\r\n|[\n\r]/g);
  var locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    var subLineIndex = Math.floor(columnNum / 80);
    var subLineColumnNum = columnNum % 80;
    var subLines = [];

    for (var i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }

    return locationStr + printPrefixedLines([["".concat(lineNum), subLines[0]]].concat(subLines.slice(1, subLineIndex + 1).map(function (subLine) {
      return ['', subLine];
    }), [[' ', whitespace(subLineColumnNum - 1) + '^'], ['', subLines[subLineIndex + 1]]]));
  }

  return locationStr + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1), lines[lineIndex - 1]], ["".concat(lineNum), locationLine], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ = _ref[0],
        line = _ref[1];
    return line !== undefined;
  });
  var padLen = Math.max.apply(Math, existingLines.map(function (_ref2) {
    var prefix = _ref2[0];
    return prefix.length;
  }));
  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return leftPad(padLen, prefix) + (line ? ' | ' + line : ' |');
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function leftPad(len, str) {
  return whitespace(len - str.length) + str;
}


/***/ }),

/***/ "./node_modules/graphql/language/printer.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/language/printer.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "print": function() { return /* binding */ print; }
/* harmony export */ });
/* harmony import */ var _visitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _blockString_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockString.mjs */ "./node_modules/graphql/language/blockString.mjs");


/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */

function print(ast) {
  return (0,_visitor_mjs__WEBPACK_IMPORTED_MODULE_0__.visit)(ast, {
    leave: printDocASTReducer
  });
}
var MAX_LINE_LENGTH = 80; // TODO: provide better type coverage in future

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },
  // Document
  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },
  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet; // Anonymous queries with no directives or variable definitions can use
    // the query short form.

    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },
  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue,
        directives = _ref.directives;
    return variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '));
  },
  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },
  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    var prefix = wrap('', alias, ': ') + name;
    var argsLine = prefix + wrap('(', join(args, ', '), ')');

    if (argsLine.length > MAX_LINE_LENGTH) {
      argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
    }

    return join([argsLine, join(directives, ' '), selectionSet], ' ');
  },
  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },
  // Fragments
  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },
  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },
  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (// Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      "fragment ".concat(name).concat(wrap('(', join(variableDefinitions, ', '), ')'), " ") + "on ".concat(typeCondition, " ").concat(wrap('', join(directives, ' '), ' ')) + selectionSet
    );
  },
  // Value
  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? (0,_blockString_mjs__WEBPACK_IMPORTED_MODULE_1__.printBlockString)(value, key === 'description' ? '' : '  ') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? 'true' : 'false';
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },
  // Directive
  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },
  // Type
  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },
  // Type System Definitions
  SchemaDefinition: addDescription(function (_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  }),
  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },
  ScalarTypeDefinition: addDescription(function (_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  }),
  ObjectTypeDefinition: addDescription(function (_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  FieldDefinition: addDescription(function (_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '));
  }),
  InputValueDefinition: addDescription(function (_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  }),
  InterfaceTypeDefinition: addDescription(function (_ref26) {
    var name = _ref26.name,
        interfaces = _ref26.interfaces,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  UnionTypeDefinition: addDescription(function (_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  }),
  EnumTypeDefinition: addDescription(function (_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  }),
  EnumValueDefinition: addDescription(function (_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  }),
  InputObjectTypeDefinition: addDescription(function (_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  }),
  DirectiveDefinition: addDescription(function (_ref31) {
    var name = _ref31.name,
        args = _ref31.arguments,
        repeatable = _ref31.repeatable,
        locations = _ref31.locations;
    return 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ');
  }),
  SchemaExtension: function SchemaExtension(_ref32) {
    var directives = _ref32.directives,
        operationTypes = _ref32.operationTypes;
    return join(['extend schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },
  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
    var name = _ref34.name,
        interfaces = _ref34.interfaces,
        directives = _ref34.directives,
        fields = _ref34.fields;
    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
    var name = _ref35.name,
        interfaces = _ref35.interfaces,
        directives = _ref35.directives,
        fields = _ref35.fields;
    return join(['extend interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  UnionTypeExtension: function UnionTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        types = _ref36.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },
  EnumTypeExtension: function EnumTypeExtension(_ref37) {
    var name = _ref37.name,
        directives = _ref37.directives,
        values = _ref37.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },
  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
    var name = _ref38.name,
        directives = _ref38.directives,
        fields = _ref38.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  }
};

function addDescription(cb) {
  return function (node) {
    return join([node.description, cb(node)], '\n');
  };
}
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */


function join(maybeArray) {
  var _maybeArray$filter$jo;

  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter(function (x) {
    return x;
  }).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : '';
}
/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */


function block(array) {
  return wrap('{\n', indent(join(array, '\n')), '\n}');
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */


function wrap(start, maybeString) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return maybeString != null && maybeString !== '' ? start + maybeString + end : '';
}

function indent(str) {
  return wrap('  ', str.replace(/\n/g, '\n  '));
}

function isMultiline(str) {
  return str.indexOf('\n') !== -1;
}

function hasMultilineItems(maybeArray) {
  return maybeArray != null && maybeArray.some(isMultiline);
}


/***/ }),

/***/ "./node_modules/graphql/language/source.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/source.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Source": function() { return /* binding */ Source; },
/* harmony export */   "isSource": function() { return /* binding */ isSource; }
/* harmony export */ });
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/instanceOf.mjs */ "./node_modules/graphql/jsutils/instanceOf.mjs");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */
var Source = /*#__PURE__*/function () {
  function Source(body) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GraphQL request';
    var locationOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      line: 1,
      column: 1
    };
    typeof body === 'string' || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0, "Body must be a string. Received: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(body), "."));
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0, 'line in locationOffset is 1-indexed and must be positive.');
    this.locationOffset.column > 0 || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0, 'column in locationOffset is 1-indexed and must be positive.');
  } // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet


  _createClass(Source, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__.SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'Source';
    }
  }]);

  return Source;
}();
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */

// eslint-disable-next-line no-redeclare
function isSource(source) {
  return (0,_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(source, Source);
}


/***/ }),

/***/ "./node_modules/graphql/language/tokenKind.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/language/tokenKind.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenKind": function() { return /* binding */ TokenKind; }
/* harmony export */ });
/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});
/**
 * The enum type representing the token kinds values.
 */


/***/ }),

/***/ "./node_modules/graphql/language/visitor.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/language/visitor.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryDocumentKeys": function() { return /* binding */ QueryDocumentKeys; },
/* harmony export */   "BREAK": function() { return /* binding */ BREAK; },
/* harmony export */   "visit": function() { return /* binding */ visit; },
/* harmony export */   "visitInParallel": function() { return /* binding */ visitInParallel; },
/* harmony export */   "getVisitFn": function() { return /* binding */ getVisitFn; }
/* harmony export */ });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");


/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */

var QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['description', 'directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields']
};
var BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */

function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

  /* eslint-disable no-undef-init */
  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};

          for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            clone[k] = node[k];
          }

          node = clone;
        }

        var editOffset = 0;

        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];

          if (inArray) {
            editKey -= editOffset;
          }

          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;

      if (node === null || node === undefined) {
        continue;
      }

      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;

    if (!Array.isArray(node)) {
      if (!(0,_ast_mjs__WEBPACK_IMPORTED_MODULE_0__.isNode)(node)) {
        throw new Error("Invalid AST Node: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(node), "."));
      }

      var visitFn = getVisitFn(visitor, node.kind, isLeaving);

      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);

          if (!isLeaving) {
            if ((0,_ast_mjs__WEBPACK_IMPORTED_MODULE_0__.isNode)(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      var _visitorKeys$node$kin;

      stack = {
        inArray: inArray,
        index: index,
        keys: keys,
        edits: edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_visitorKeys$node$kin = visitorKeys[node.kind]) !== null && _visitorKeys$node$kin !== void 0 ? _visitorKeys$node$kin : [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */

function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);
  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (skipping[i] == null) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          false);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (skipping[i] == null) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          true);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */

function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];

  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }

    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;

    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;

    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }

      var specificKindVisitor = specificVisitor[kind];

      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/graphql/polyfills/symbols.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/polyfills/symbols.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SYMBOL_ITERATOR": function() { return /* binding */ SYMBOL_ITERATOR; },
/* harmony export */   "SYMBOL_ASYNC_ITERATOR": function() { return /* binding */ SYMBOL_ASYNC_ITERATOR; },
/* harmony export */   "SYMBOL_TO_STRING_TAG": function() { return /* binding */ SYMBOL_TO_STRING_TAG; }
/* harmony export */ });
// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var SYMBOL_ITERATOR = typeof Symbol === 'function' && Symbol.iterator != null ? Symbol.iterator : '@@iterator'; // In ES2017 (or a polyfilled) environment, this will be Symbol.asyncIterator
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')

var SYMBOL_ASYNC_ITERATOR = typeof Symbol === 'function' && Symbol.asyncIterator != null ? Symbol.asyncIterator : '@@asyncIterator'; // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')

var SYMBOL_TO_STRING_TAG = typeof Symbol === 'function' && Symbol.toStringTag != null ? Symbol.toStringTag : '@@toStringTag';


/***/ }),

/***/ "./node_modules/graphql/utilities/valueFromASTUntyped.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/graphql/utilities/valueFromASTUntyped.mjs ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "valueFromASTUntyped": function() { return /* binding */ valueFromASTUntyped; }
/* harmony export */ });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/keyValMap.mjs */ "./node_modules/graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");





/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * Unlike `valueFromAST()`, no type is provided. The resulting JavaScript value
 * will reflect the provided GraphQL value AST.
 *
 * | GraphQL Value        | JavaScript Value |
 * | -------------------- | ---------------- |
 * | Input Object         | Object           |
 * | List                 | Array            |
 * | Boolean              | Boolean          |
 * | String / Enum        | String           |
 * | Int / Float          | Number           |
 * | Null                 | null             |
 *
 */
function valueFromASTUntyped(valueNode, variables) {
  switch (valueNode.kind) {
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.NULL:
      return null;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.INT:
      return parseInt(valueNode.value, 10);

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.FLOAT:
      return parseFloat(valueNode.value);

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.STRING:
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.ENUM:
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.BOOLEAN:
      return valueNode.value;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.LIST:
      return valueNode.values.map(function (node) {
        return valueFromASTUntyped(node, variables);
      });

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.OBJECT:
      return (0,_jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(valueNode.fields, function (field) {
        return field.name.value;
      }, function (field) {
        return valueFromASTUntyped(field.value, variables);
      });

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.VARIABLE:
      return variables === null || variables === void 0 ? void 0 : variables[valueNode.name.value];
  } // istanbul ignore next (Not reachable. All possible value nodes have been considered)


   false || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(0, 'Unexpected value node: ' + (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(valueNode));
}


/***/ }),

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginDocument": function() { return /* binding */ LoginDocument; },
/* harmony export */   "useLoginMutation": function() { return /* binding */ useLoginMutation; },
/* harmony export */   "RegisterDocument": function() { return /* binding */ RegisterDocument; },
/* harmony export */   "useRegisterMutation": function() { return /* binding */ useRegisterMutation; },
/* harmony export */   "MeDocument": function() { return /* binding */ MeDocument; },
/* harmony export */   "useMeQuery": function() { return /* binding */ useMeQuery; }
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ "urql");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const LoginDocument = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    mutation Login($options: UsernamePasswordInput!) {
  login(options: $options) {
    errors {
      field
      message
    }
    user {
      _id
      username
    }
  }
}
    `;
function useLoginMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__.useMutation(LoginDocument);
}
;
const RegisterDocument = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    mutation Register($username: String!, $password: String!) {
  register(options: {username: $username, password: $password}) {
    errors {
      field
      message
    }
    user {
      _id
      username
    }
  }
}
    `;
function useRegisterMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__.useMutation(RegisterDocument);
}
;
const MeDocument = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query Me {
  me {
    _id
    username
  }
}
    `;
function useMeQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__.useQuery(_objectSpread({
    query: MeDocument
  }, options));
}
;

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! urql */ "urql");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @urql/exchange-graphcache */ "./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ "./src/theme.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");

var _jsxFileName = "C:\\Users\\Youri\\Documents\\Apprendre\\React JS Works\\liReddit\\lireddit-web\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function betterUpdateQuery(cache, qi, result, fn) {
  return cache.updateQuery(qi, data => fn(result, data));
}

const client = (0,urql__WEBPACK_IMPORTED_MODULE_2__.createClient)({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include"
  },
  // * Permet de rajouter le cookie
  exchanges: [urql__WEBPACK_IMPORTED_MODULE_2__.dedupExchange, (0,_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_5__.cacheExchange)({
    updates: {
      Mutation: {
        login: (_result, _args, cache, _info) => {
          betterUpdateQuery(cache, {
            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_4__.MeDocument
          }, _result, (result, query) => {
            if (result.login.errors) {
              return query;
            } else {
              return {
                me: result.login.user
              };
            }
          });
        }
        /* register: (_result, args, cache, info) => {
        
          betterUpdateQuery<RegisterMutation, MeQuery>(
            cache,
            { query: MeDocument },
            _result,
            (result, query) => {
              if (result.register.errors) {
                return query;
              } else {
                return { me: result.register.user };
              }
            }
          );
        },*/

      }
    }
  }), urql__WEBPACK_IMPORTED_MODULE_2__.fetchExchange]
});

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(urql__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    value: client,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
      resetCSS: true,
      theme: _theme__WEBPACK_IMPORTED_MODULE_3__.default,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ColorModeProvider, {
        options: {
          useSystemColorMode: true,
          initialColorMode: "dark"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/theme.tsx":
/*!***********************!*\
  !*** ./src/theme.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "@chakra-ui/theme-tools");
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Youri\\Documents\\Apprendre\\React JS Works\\liReddit\\lireddit-web\\src\\theme.tsx";


const fonts = {
  mono: `'Menlo', monospace`
};
const breakpoints = (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__.createBreakpoints)({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
});
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({
  colors: {
    black: '#16161D'
  },
  fonts,
  breakpoints,
  icons: {
    logo: {
      path: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
        width: "3000",
        height: "3163",
        viewBox: "0 0 3000 3163",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
          width: "3000",
          height: "3162.95",
          fill: "none"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z",
          fill: "currentColor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined),
      viewBox: '0 0 3000 3163'
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./node_modules/wonka/dist/wonka.mjs":
/*!*******************************************!*\
  !*** ./node_modules/wonka/dist/wonka.mjs ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buffer": function() { return /* binding */ buffer$1; },
/* harmony export */   "combine": function() { return /* binding */ combine$1; },
/* harmony export */   "concat": function() { return /* binding */ concat$1; },
/* harmony export */   "concatAll": function() { return /* binding */ concatAll$1; },
/* harmony export */   "concatMap": function() { return /* binding */ z; },
/* harmony export */   "debounce": function() { return /* binding */ debounce$1; },
/* harmony export */   "delay": function() { return /* binding */ delay$1; },
/* harmony export */   "empty": function() { return /* binding */ u; },
/* harmony export */   "filter": function() { return /* binding */ filter$1; },
/* harmony export */   "flatten": function() { return /* binding */ G; },
/* harmony export */   "forEach": function() { return /* binding */ forEach$1; },
/* harmony export */   "fromArray": function() { return /* binding */ p; },
/* harmony export */   "fromCallbag": function() { return /* binding */ fromCallbag$2; },
/* harmony export */   "fromDomEvent": function() { return /* binding */ fromDomEvent$1; },
/* harmony export */   "fromList": function() { return /* binding */ fromList$1; },
/* harmony export */   "fromObservable": function() { return /* binding */ fromObservable$2; },
/* harmony export */   "fromPromise": function() { return /* binding */ fromPromise$1; },
/* harmony export */   "fromValue": function() { return /* binding */ fromValue$1; },
/* harmony export */   "interval": function() { return /* binding */ interval$1; },
/* harmony export */   "make": function() { return /* binding */ make$1; },
/* harmony export */   "makeSubject": function() { return /* binding */ makeSubject$1; },
/* harmony export */   "map": function() { return /* binding */ map$1; },
/* harmony export */   "merge": function() { return /* binding */ merge$1; },
/* harmony export */   "mergeAll": function() { return /* binding */ G; },
/* harmony export */   "mergeMap": function() { return /* binding */ D; },
/* harmony export */   "never": function() { return /* binding */ never$1; },
/* harmony export */   "onEnd": function() { return /* binding */ onEnd$1; },
/* harmony export */   "onPush": function() { return /* binding */ H; },
/* harmony export */   "onStart": function() { return /* binding */ onStart$1; },
/* harmony export */   "pipe": function() { return /* binding */ pipe; },
/* harmony export */   "publish": function() { return /* binding */ publish$1; },
/* harmony export */   "sample": function() { return /* binding */ sample$1; },
/* harmony export */   "scan": function() { return /* binding */ scan$1; },
/* harmony export */   "share": function() { return /* binding */ share$1; },
/* harmony export */   "skip": function() { return /* binding */ skip$1; },
/* harmony export */   "skipUntil": function() { return /* binding */ skipUntil$1; },
/* harmony export */   "skipWhile": function() { return /* binding */ skipWhile$1; },
/* harmony export */   "subscribe": function() { return /* binding */ N; },
/* harmony export */   "switchAll": function() { return /* binding */ switchAll$1; },
/* harmony export */   "switchMap": function() { return /* binding */ K; },
/* harmony export */   "take": function() { return /* binding */ take$1; },
/* harmony export */   "takeLast": function() { return /* binding */ M; },
/* harmony export */   "takeUntil": function() { return /* binding */ takeUntil$1; },
/* harmony export */   "takeWhile": function() { return /* binding */ takeWhile$1; },
/* harmony export */   "tap": function() { return /* binding */ H; },
/* harmony export */   "throttle": function() { return /* binding */ throttle$1; },
/* harmony export */   "toArray": function() { return /* binding */ toArray$1; },
/* harmony export */   "toCallbag": function() { return /* binding */ toCallbag$2; },
/* harmony export */   "toObservable": function() { return /* binding */ toObservable$2; },
/* harmony export */   "toPromise": function() { return /* binding */ toPromise$1; }
/* harmony export */ });
function l(a, b) {
  b.tag = a;
  return b;
}

function m() {}

function p(a) {
  return function (b) {
    var c = a.length;
    let d = !1,
      e = !1,
      f = !1,
      g = 0;
    b(
      l(0, [
        function (h) {
          if (h) {
            d = !0;
          } else if (e) {
            f = !0;
          } else {
            for (e = f = !0; f && !d; ) {
              g < c ? ((h = a[g]), (g = (g + 1) | 0), (f = !1), b(l(1, [h]))) : ((d = !0), b(0));
            }
            e = !1;
          }
        },
      ])
    );
  };
}

function r() {}

function t(a) {
  a(0);
}

function u(a) {
  let b = !1;
  a(
    l(0, [
      function (c) {
        c ? (b = !0) : b || a(0);
      },
    ])
  );
}

function w(a) {
  if (void 0 === a) {
    return ((a = [v, 0]).tag = 256), a;
  }
  if (null === a || a[0] !== v) {
    return a;
  }
  (a = [v, (a[1] + 1) | 0]).tag = 256;
  return a;
}

function x(a) {
  if (null === a || a[0] !== v) {
    return a;
  }
  if (0 !== (a = a[1])) {
    return [v, (a - 1) | 0];
  }
}

function z(a) {
  return function (b) {
    return function (c) {
      function d(b) {
        'number' == typeof b
          ? k &&
            ((k = !1),
            void 0 !== (b = e.shift())
              ? ((b = a(x(b))), (k = !0), b(d))
              : q
              ? c(0)
              : g || ((g = !0), f(0)))
          : b.tag
          ? k && (c(b), n ? (n = !1) : h(0))
          : ((h = b = b[0]), (n = !1), b(0));
      }
      let e = [],
        f = m,
        g = !1,
        h = m,
        k = !1,
        n = !1,
        q = !1;
      b(function (b) {
        'number' == typeof b
          ? q || ((q = !0), k || 0 !== e.length || c(0))
          : b.tag
          ? q || ((b = b[0]), (g = !1), k ? e.push(b) : ((b = a(b)), (k = !0), b(d)))
          : (f = b[0]);
      });
      c(
        l(0, [
          function (c) {
            if (c) {
              if ((q || ((q = !0), f(1)), k)) {
                return (k = !1), h(1);
              }
            } else {
              q || g || ((g = !0), f(0)), k && !n && ((n = !0), h(0));
            }
          },
        ])
      );
    };
  };
}

function A(a) {
  return a;
}

function B(a) {
  return a;
}

function C(a) {
  return a(0);
}

function D(a) {
  return function (b) {
    return function (c) {
      let e = m,
        f = !1,
        g = [],
        h = !1;
      b(function (b) {
        'number' == typeof b
          ? h || ((h = !0), 0 === g.length && c(0))
          : b.tag
          ? h ||
            ((f = !1),
            (function (a) {
              function b(a) {
                'number' == typeof a
                  ? 0 !== g.length &&
                    ((g = g.filter(d)),
                    (a = 0 === g.length),
                    h && a ? c(0) : !f && a && ((f = !0), e(0)))
                  : a.tag
                  ? 0 !== g.length && (c(l(1, [a[0]])), k(0))
                  : ((k = a = a[0]), (g = g.concat(a)), a(0));
              }
              function d(a) {
                return a !== k;
              }
              let k = m;
              1 === a.length ? a(b) : a.bind(null, b);
            })(a(b[0])),
            f || ((f = !0), e(0)))
          : (e = b[0]);
      });
      c(
        l(0, [
          function (a) {
            a
              ? (h || ((h = !0), e(a)),
                g.forEach(function (c) {
                  return c(a);
                }),
                (g = []))
              : (f || h ? (f = !1) : ((f = !0), e(0)), g.forEach(C));
          },
        ])
      );
    };
  };
}

function E(a) {
  return a;
}

function F(a) {
  return a;
}

function G(a) {
  return D(F)(a);
}

function H(a) {
  return function (b) {
    return function (c) {
      let d = !1;
      return b(function (e) {
        if ('number' == typeof e) {
          d || ((d = !0), c(e));
        } else if (e.tag) {
          d || (a(e[0]), c(e));
        } else {
          var g = e[0];
          c(
            l(0, [
              function (a) {
                if (!d) {
                  return a && (d = !0), g(a);
                }
              },
            ])
          );
        }
      });
    };
  };
}

function J(a) {
  a(0);
}

function K(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        h &&
          ('number' == typeof a
            ? ((h = !1), n ? c(a) : f || ((f = !0), e(0)))
            : a.tag
            ? (c(a), k ? (k = !1) : g(0))
            : ((g = a = a[0]), (k = !1), a(0)));
      }
      let e = m,
        f = !1,
        g = m,
        h = !1,
        k = !1,
        n = !1;
      b(function (b) {
        'number' == typeof b
          ? n || ((n = !0), h || c(0))
          : b.tag
          ? n ||
            (h && (g(1), (g = m)), f ? (f = !1) : ((f = !0), e(0)), (b = a(b[0])), (h = !0), b(d))
          : (e = b[0]);
      });
      c(
        l(0, [
          function (a) {
            if (a) {
              if ((n || ((n = !0), e(1)), h)) {
                return (h = !1), g(1);
              }
            } else {
              n || f || ((f = !0), e(0)), h && !k && ((k = !0), g(0));
            }
          },
        ])
      );
    };
  };
}

function L(a) {
  return a;
}

function M(a) {
  return function (b) {
    return function (c) {
      let d = [],
        e = m;
      return b(function (b) {
        'number' == typeof b
          ? p(d)(c)
          : b.tag
          ? (d.length >= a && 0 < a && d.shift(), d.push(b[0]), e(0))
          : ((b = b[0]), 0 >= a ? (b(1), u(c)) : ((e = b), b(0)));
      });
    };
  };
}

function N(a) {
  return function (b) {
    let c = m,
      d = !1;
    b(function (e) {
      'number' == typeof e ? (d = !0) : e.tag ? d || (a(e[0]), c(0)) : ((c = e = e[0]), e(0));
    });
    return {
      unsubscribe: function () {
        if (!d) {
          return (d = !0), c(1);
        }
      },
    };
  };
}

function O() {}

function Q() {}

function R() {}

function S() {}

function buffer$1(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        'number' == typeof a
          ? k || ((k = !0), f(1), 0 < e.length && c(l(1, [e])), c(0))
          : a.tag
          ? !k && 0 < e.length && ((a = e), (e = []), c(l(1, [a])))
          : (g = a[0]);
      }
      let e = [],
        f = m,
        g = m,
        h = !1,
        k = !1;
      b(function (b) {
        'number' == typeof b
          ? k || ((k = !0), g(1), 0 < e.length && c(l(1, [e])), c(0))
          : b.tag
          ? k || (e.push(b[0]), h ? (h = !1) : ((h = !0), f(0), g(0)))
          : ((f = b[0]), a(d));
      });
      c(
        l(0, [
          function (a) {
            if (!k) {
              if (a) {
                return (k = !0), f(1), g(1);
              }
              if (!h) {
                return (h = !0), f(0), g(0);
              }
            }
          },
        ])
      );
    };
  };
}

function combine$1(a, b) {
  return (function (a, b) {
    return function (c) {
      let d = m,
        e = m,
        f = void 0,
        g = void 0,
        h = !1,
        k = 0,
        n = !1;
      a(function (a) {
        var b = g;
        'number' == typeof a
          ? 1 > k
            ? (k = (k + 1) | 0)
            : n || ((n = !0), c(0))
          : a.tag
          ? ((a = a[0]),
            void 0 !== b
              ? n || ((f = w(a)), (h = !1), c(l(1, [[a, x(b)]])))
              : ((f = w(a)), h ? (h = !1) : e(0)))
          : (d = a[0]);
      });
      b(function (a) {
        var b = f;
        'number' == typeof a
          ? 1 > k
            ? (k = (k + 1) | 0)
            : n || ((n = !0), c(0))
          : a.tag
          ? ((a = a[0]),
            void 0 !== b
              ? n || ((g = w(a)), (h = !1), c(l(1, [[x(b), a]])))
              : ((g = w(a)), h ? (h = !1) : d(0)))
          : (e = a[0]);
      });
      c(
        l(0, [
          function (c) {
            if (!n) {
              if (c) {
                return (n = !0), d(1), e(1);
              }
              if (!h) {
                return (h = !0), d(c), e(c);
              }
            }
          },
        ])
      );
    };
  })(a, b);
}

function concat$1(a) {
  return z(B)(p(a));
}

function concatAll$1(a) {
  return z(A)(a);
}

function debounce$1(a) {
  return function (b) {
    return function (c) {
      function d() {
        var a = e;
        void 0 !== a && ((e = void 0), clearTimeout(x(a)));
      }
      let e = void 0,
        f = !1,
        g = !1;
      return b(function (b) {
        if ('number' == typeof b) {
          g || ((g = !0), void 0 !== e ? (f = !0) : c(0));
        } else if (b.tag) {
          g ||
            (d(),
            (e = w(
              setTimeout(function () {
                e = void 0;
                c(b);
                f && c(0);
              }, a(b[0]))
            )));
        } else {
          var n = b[0];
          c(
            l(0, [
              function (a) {
                if (!g) {
                  return a ? ((g = !0), (f = !1), d(), n(1)) : n(0);
                }
              },
            ])
          );
        }
      });
    };
  };
}

function delay$1(a) {
  return function (b) {
    return function (c) {
      let d = 0;
      return b(function (b) {
        'number' == typeof b || b.tag
          ? ((d = (d + 1) | 0),
            setTimeout(function () {
              0 !== d && ((d = (d - 1) | 0), c(b));
            }, a))
          : c(b);
      });
    };
  };
}

function filter$1(a) {
  return function (b) {
    return function (c) {
      let d = m;
      return b(function (b) {
        'number' == typeof b ? c(b) : b.tag ? (a(b[0]) ? c(b) : d(0)) : ((d = b[0]), c(b));
      });
    };
  };
}

function forEach$1(a) {
  return function (b) {
    N(a)(b);
  };
}

function fromCallbag$2(a) {
  return function (b) {
    function c(a, c) {
      switch (a) {
        case 0:
          b(
            l(0, [
              function (a) {
                return a ? c(2) : c(1);
              },
            ])
          );
          break;

        case 1:
          b(l(1, [c]));
          break;

        case 2:
          b(0);
      }
    }
    return 2 === a.length ? a(0, c) : a.bind(null, 0, c);
  };
}

function fromDomEvent$1(a, b) {
  return (function (a, b) {
    return function (c) {
      function d(a) {
        c(l(1, [a]));
      }
      c(
        l(0, [
          function (c) {
            c && a.removeEventListener(b, d);
          },
        ])
      );
      a.addEventListener(b, d);
    };
  })(a, b);
}

function fromList$1(a) {
  return function (b) {
    let c = !1,
      d = !1,
      e = !1,
      f = a;
    b(
      l(0, [
        function (a) {
          if (a) {
            c = !0;
          } else if (d) {
            e = !0;
          } else {
            for (d = e = !0; e && !c; ) {
              (a = f) ? ((f = a[1]), (e = !1), b(l(1, [a[0]]))) : ((c = !0), b(0));
            }
            d = !1;
          }
        },
      ])
    );
  };
}

function fromObservable$2(a) {
  var b = void 0 !== a[P] ? a[P]() : a;
  return function (a) {
    var c = b.subscribe({
      next: function (c) {
        a(l(1, [c]));
      },
      complete: function () {
        a(0);
      },
      error: Q,
    });
    a(
      l(0, [
        function (a) {
          if (a) {
            return c.unsubscribe();
          }
        },
      ])
    );
  };
}

function fromPromise$1(a) {
  return function (b) {
    let c = !1;
    a.then(function (a) {
      c || (b(l(1, [a])), b(0));
      return Promise.resolve(void 0);
    });
    b(
      l(0, [
        function (a) {
          a && (c = !0);
        },
      ])
    );
  };
}

function fromValue$1(a) {
  return function (b) {
    let c = !1;
    b(
      l(0, [
        function (d) {
          d ? (c = !0) : c || ((c = !0), b(l(1, [a])), b(0));
        },
      ])
    );
  };
}

function interval$1(a) {
  return function (b) {
    let c = 0;
    var d = setInterval(function () {
      var a = c;
      c = (c + 1) | 0;
      b(l(1, [a]));
    }, a);
    b(
      l(0, [
        function (a) {
          a && clearInterval(d);
        },
      ])
    );
  };
}

function make$1(a) {
  return function (b) {
    let c = r,
      d = !1;
    c = a({
      next: function (a) {
        d || b(l(1, [a]));
      },
      complete: function () {
        d || ((d = !0), b(0));
      },
    });
    b(
      l(0, [
        function (a) {
          if (a && !d) {
            return (d = !0), c();
          }
        },
      ])
    );
  };
}

function makeSubject$1() {
  let a = [],
    b = !1;
  return {
    source: function (c) {
      function b(a) {
        return a !== c;
      }
      a = a.concat(c);
      c(
        l(0, [
          function (c) {
            c && (a = a.filter(b));
          },
        ])
      );
    },
    next: function (c) {
      b ||
        a.forEach(function (a) {
          a(l(1, [c]));
        });
    },
    complete: function () {
      b || ((b = !0), a.forEach(t));
    },
  };
}

function map$1(a) {
  return function (b) {
    return function (c) {
      return b(function (b) {
        b = 'number' == typeof b ? 0 : b.tag ? l(1, [a(b[0])]) : l(0, [b[0]]);
        c(b);
      });
    };
  };
}

function merge$1(a) {
  return D(E)(p(a));
}

function never$1(a) {
  a(l(0, [m]));
}

function onEnd$1(a) {
  return function (b) {
    return function (c) {
      let d = !1;
      return b(function (b) {
        if ('number' == typeof b) {
          if (d) {
            return;
          }
          d = !0;
          c(b);
          return a();
        }
        if (b.tag) {
          d || c(b);
        } else {
          var e = b[0];
          c(
            l(0, [
              function (c) {
                if (!d) {
                  return c ? ((d = !0), e(c), a()) : e(c);
                }
              },
            ])
          );
        }
      });
    };
  };
}

function onStart$1(a) {
  return function (b) {
    return function (c) {
      return b(function (b) {
        'number' == typeof b ? c(b) : b.tag ? c(b) : (c(b), a());
      });
    };
  };
}

function pipe() {
  for (var a = arguments, b = arguments[0], c = 1, d = arguments.length; c < d; c++) {
    b = a[c](b);
  }
  return b;
}

function publish$1(a) {
  return N(O)(a);
}

function sample$1(a) {
  return function (b) {
    return function (c) {
      let d = m,
        e = m,
        f = void 0,
        g = !1,
        h = !1;
      b(function (a) {
        'number' == typeof a
          ? h || ((h = !0), e(1), c(0))
          : a.tag
          ? ((f = w(a[0])), g ? (g = !1) : ((g = !0), e(0), d(0)))
          : (d = a[0]);
      });
      a(function (a) {
        var b = f;
        'number' == typeof a
          ? h || ((h = !0), d(1), c(0))
          : a.tag
          ? void 0 === b || h || ((f = void 0), c(l(1, [x(b)])))
          : (e = a[0]);
      });
      c(
        l(0, [
          function (a) {
            if (!h) {
              if (a) {
                return (h = !0), d(1), e(1);
              }
              if (!g) {
                return (g = !0), d(0), e(0);
              }
            }
          },
        ])
      );
    };
  };
}

function scan$1(a, b) {
  return (function (a, b) {
    return function (c) {
      return function (d) {
        let e = b;
        return c(function (c) {
          'number' == typeof c
            ? (c = 0)
            : c.tag
            ? ((e = a(e, c[0])), (c = l(1, [e])))
            : (c = l(0, [c[0]]));
          d(c);
        });
      };
    };
  })(a, b);
}

function share$1(a) {
  function b(a) {
    'number' == typeof a
      ? (c.forEach(J), (c = []))
      : a.tag
      ? ((e = !1),
        c.forEach(function (b) {
          b(a);
        }))
      : (d = a[0]);
  }
  let c = [],
    d = m,
    e = !1;
  return function (f) {
    function g(a) {
      return a !== f;
    }
    c = c.concat(f);
    1 === c.length && a(b);
    f(
      l(0, [
        function (a) {
          if (a) {
            if (((c = c.filter(g)), 0 === c.length)) {
              return d(1);
            }
          } else {
            e || ((e = !0), d(a));
          }
        },
      ])
    );
  };
}

function skip$1(a) {
  return function (b) {
    return function (c) {
      let d = m,
        e = a;
      return b(function (a) {
        'number' == typeof a
          ? c(a)
          : a.tag
          ? 0 < e
            ? ((e = (e - 1) | 0), d(0))
            : c(a)
          : ((d = a[0]), c(a));
      });
    };
  };
}

function skipUntil$1(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        'number' == typeof a
          ? g && ((k = !0), e(1))
          : a.tag
          ? ((g = !1), f(1))
          : ((f = a = a[0]), a(0));
      }
      let e = m,
        f = m,
        g = !0,
        h = !1,
        k = !1;
      b(function (b) {
        'number' == typeof b
          ? (g && f(1), (k = !0), c(0))
          : b.tag
          ? g || k
            ? h
              ? (h = !1)
              : ((h = !0), e(0), f(0))
            : ((h = !1), c(b))
          : ((e = b[0]), a(d));
      });
      c(
        l(0, [
          function (a) {
            if (!k) {
              if (a) {
                if (((k = !0), e(1), g)) {
                  return f(1);
                }
              } else {
                h || ((h = !0), g && f(0), e(0));
              }
            }
          },
        ])
      );
    };
  };
}

function skipWhile$1(a) {
  return function (b) {
    return function (c) {
      let d = m,
        e = !0;
      return b(function (b) {
        'number' == typeof b
          ? c(b)
          : b.tag
          ? e
            ? a(b[0])
              ? d(0)
              : ((e = !1), c(b))
            : c(b)
          : ((d = b[0]), c(b));
      });
    };
  };
}

function switchAll$1(a) {
  return K(L)(a);
}

function take$1(a) {
  return function (b) {
    return function (c) {
      let d = !1,
        e = 0,
        f = m;
      b(function (b) {
        'number' == typeof b
          ? d || ((d = !0), c(0))
          : b.tag
          ? e < a && !d && ((e = (e + 1) | 0), c(b), !d && e >= a && ((d = !0), c(0), f(1)))
          : ((b = b[0]), 0 >= a ? ((d = !0), c(0), b(1)) : (f = b));
      });
      c(
        l(0, [
          function (b) {
            if (!d) {
              if (b) {
                return (d = !0), f(1);
              }
              if (e < a) {
                return f(0);
              }
            }
          },
        ])
      );
    };
  };
}

function takeUntil$1(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        'number' != typeof a && (a.tag ? ((e = !0), f(1), c(0)) : ((g = a = a[0]), a(0)));
      }
      let e = !1,
        f = m,
        g = m;
      b(function (b) {
        'number' == typeof b ? e || ((e = !0), g(1), c(0)) : b.tag ? e || c(b) : ((f = b[0]), a(d));
      });
      c(
        l(0, [
          function (a) {
            if (!e) {
              return a ? ((e = !0), f(1), g(1)) : f(0);
            }
          },
        ])
      );
    };
  };
}

function takeWhile$1(a) {
  return function (b) {
    return function (c) {
      let d = m,
        e = !1;
      return b(function (b) {
        'number' == typeof b
          ? e || ((e = !0), c(0))
          : b.tag
          ? e || (a(b[0]) ? c(b) : ((e = !0), c(0), d(1)))
          : ((d = b[0]), c(b));
      });
    };
  };
}

function throttle$1(a) {
  return function (b) {
    return function (c) {
      function d() {
        void 0 !== g && clearTimeout(x(g));
      }
      function e() {
        g = void 0;
        f = !1;
      }
      let f = !1,
        g = void 0;
      return b(function (b) {
        if ('number' == typeof b) {
          d(), c(0);
        } else if (b.tag) {
          f || ((f = !0), d(), (g = w(setTimeout(e, a(b[0])))), c(b));
        } else {
          var h = b[0];
          c(
            l(0, [
              function (a) {
                return a ? (d(), h(1)) : h(a);
              },
            ])
          );
        }
      });
    };
  };
}

function toArray$1(a) {
  let b = [],
    c = m,
    d = !1;
  a(function (a) {
    'number' == typeof a ? (d = !0) : a.tag ? (b.push(a[0]), c(0)) : ((c = a = a[0]), a(0));
  });
  d || c(1);
  return b;
}

function toCallbag$2(a) {
  return function (b, c) {
    if (0 === b) {
      return a(function (a) {
        function b(a) {
          switch (a) {
            case 1:
              d(0);
              break;

            case 2:
              d(1);
          }
        }
        if ('number' == typeof a) {
          return 2 === c.length ? c(2, void 0) : c.bind(null, 2, void 0);
        }
        if (a.tag) {
          return (a = a[0]), 2 === c.length ? c(1, a) : c.bind(null, 1, a);
        }
        var d = a[0];
        return 2 === c.length ? c(0, b) : c.bind(null, 0, b);
      });
    }
  };
}

function toObservable$2(a) {
  var b = {
    subscribe: function (b, d, e) {
      var c = ('object' == typeof b ? b.next.bind(b) : b) || R,
        g = ('object' == typeof b ? b.complete.bind(b) : e) || S;
      let h = m,
        k = !1;
      a(function (a) {
        if ('number' == typeof a) {
          return (k = !0), g();
        }
        if (a.tag) {
          if (k) {
            return;
          }
          c(a[0]);
          return h(0);
        }
        h = a = a[0];
        a(0);
      });
      return {
        unsubscribe: function () {
          if (!k) {
            return (this.closed = !1), (k = !0), h(1);
          }
        },
        closed: !1,
      };
    },
  };
  b[P] = function () {
    return b;
  };
  return b;
}

function toPromise$1(a) {
  return new Promise(function (b) {
    M(1)(a)(function (a) {
      if ('number' != typeof a) {
        if (a.tag) {
          b(a[0]);
        } else {
          a[0](0);
        }
      }
    });
  });
}

var v = [],
  P =
    'function' == typeof Symbol
      ? Symbol.observable || (Symbol.observable = Symbol('observable'))
      : '@@observable';




/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/theme-tools");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "urql":
/*!***********************!*\
  !*** external "urql" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("urql");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS8uL25vZGVfbW9kdWxlcy9AdXJxbC9jb3JlL2Rpc3QvNWFkYzM4ZjAubWpzIiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpLy4vbm9kZV9tb2R1bGVzL0B1cnFsL2NvcmUvZGlzdC91cnFsLWNvcmUubWpzIiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpLy4vbm9kZV9tb2R1bGVzL0B1cnFsL2V4Y2hhbmdlLWdyYXBoY2FjaGUvZGlzdC81MzAxY2NkMi5tanMiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvLi9ub2RlX21vZHVsZXMvQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZS9kaXN0L3VycWwtZXhjaGFuZ2UtZ3JhcGhjYWNoZS5tanMiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9lcnJvci9HcmFwaFFMRXJyb3IubWpzIiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvZXJyb3Ivc3ludGF4RXJyb3IubWpzIiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvanN1dGlscy9kZWZpbmVJbnNwZWN0Lm1qcyIsIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2pzdXRpbHMvZGV2QXNzZXJ0Lm1qcyIsIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2pzdXRpbHMvaW5zcGVjdC5tanMiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9qc3V0aWxzL2luc3RhbmNlT2YubWpzIiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvanN1dGlscy9pbnZhcmlhbnQubWpzIiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvanN1dGlscy9pc09iamVjdExpa2UubWpzIiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvanN1dGlscy9rZXlWYWxNYXAubWpzIiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvanN1dGlscy9ub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sLm1qcyIsIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL2FzdC5tanMiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9ibG9ja1N0cmluZy5tanMiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9kaXJlY3RpdmVMb2NhdGlvbi5tanMiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9raW5kcy5tanMiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9sZXhlci5tanMiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9sb2NhdGlvbi5tanMiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9wYXJzZXIubWpzIiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvcHJpbnRMb2NhdGlvbi5tanMiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9wcmludGVyLm1qcyIsIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL3NvdXJjZS5tanMiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS90b2tlbktpbmQubWpzIiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvdmlzaXRvci5tanMiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9wb2x5ZmlsbHMvc3ltYm9scy5tanMiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC91dGlsaXRpZXMvdmFsdWVGcm9tQVNUVW50eXBlZC5tanMiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvLi9zcmMvZ2VuZXJhdGVkL2dyYXBocWwudHN4Iiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpLy4vc3JjL3RoZW1lLnRzeCIsIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS8uL25vZGVfbW9kdWxlcy93b25rYS9kaXN0L3dvbmthLm1qcyIsIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS9leHRlcm5hbCBcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIiIsIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS9leHRlcm5hbCBcInVycWxcIiJdLCJuYW1lcyI6WyJMb2dpbkRvY3VtZW50IiwiZ3FsIiwidXNlTG9naW5NdXRhdGlvbiIsIlVycWwiLCJSZWdpc3RlckRvY3VtZW50IiwidXNlUmVnaXN0ZXJNdXRhdGlvbiIsIk1lRG9jdW1lbnQiLCJ1c2VNZVF1ZXJ5Iiwib3B0aW9ucyIsInF1ZXJ5IiwiYmV0dGVyVXBkYXRlUXVlcnkiLCJjYWNoZSIsInFpIiwicmVzdWx0IiwiZm4iLCJ1cGRhdGVRdWVyeSIsImRhdGEiLCJjbGllbnQiLCJjcmVhdGVDbGllbnQiLCJ1cmwiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsImV4Y2hhbmdlcyIsImRlZHVwRXhjaGFuZ2UiLCJjYWNoZUV4Y2hhbmdlIiwidXBkYXRlcyIsIk11dGF0aW9uIiwibG9naW4iLCJfcmVzdWx0IiwiX2FyZ3MiLCJfaW5mbyIsImVycm9ycyIsIm1lIiwidXNlciIsImZldGNoRXhjaGFuZ2UiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwiaW5pdGlhbENvbG9yTW9kZSIsImZvbnRzIiwibW9ubyIsImJyZWFrcG9pbnRzIiwiY3JlYXRlQnJlYWtwb2ludHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsImV4dGVuZFRoZW1lIiwiY29sb3JzIiwiYmxhY2siLCJpY29ucyIsImxvZ28iLCJwYXRoIiwidmlld0JveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRTs7QUFFWjs7QUFFRTs7QUFFQzs7QUFFeEI7O0FBRWxDO0FBQ0E7QUFDQSxlQUFlLHdFQUFDO0FBQ2hCLEdBQUc7QUFDSCxlQUFlLHdFQUFDLHlFQUF5RTtBQUN6RixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87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QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSEE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0R1RDtBQUNyQjtBQUNVO0FBQ2U7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDJDQUFLLENBQUMseURBQWE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVCQUF1Qix5REFBYTtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPLHVCQUF1Qiw2REFBaUI7QUFDL0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRU87QUFDUCxrQkFBa0IsMERBQWMsYUFBYSw0REFBZ0IsYUFBYSx5REFBYSxhQUFhLDZEQUFpQixhQUFhLDZEQUFpQixhQUFhLDREQUFnQixhQUFhLDJEQUFlLGFBQWEsNERBQWdCLGFBQWEsd0RBQVksYUFBYSwrREFBbUIsYUFBYSwrREFBbUIsYUFBYSw2REFBaUIsYUFBYSwwREFBYyxhQUFhLDZEQUFpQjtBQUN6Wjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHlEQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlDQUF5Qzs7O0FBR3pDO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsMkNBQUssQ0FBQywwREFBYzs7QUFFdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsMkNBQUssQ0FBQyw0REFBZ0I7O0FBRXpDO0FBQ0E7QUFDQSxtQkFBbUIsMkNBQUssQ0FBQyx5REFBYTs7QUFFdEM7QUFDQTtBQUNBLG1CQUFtQiwyQ0FBSyxDQUFDLDZEQUFpQjs7QUFFMUM7QUFDQTtBQUNBLG1CQUFtQiwyQ0FBSyxDQUFDLDZEQUFpQjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUFLLENBQUMsNERBQWdCO0FBQzNDOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsMkNBQUssQ0FBQywyREFBZTs7QUFFeEM7QUFDQTtBQUNBLG1CQUFtQiwyQ0FBSyxDQUFDLDREQUFnQjs7QUFFekM7QUFDQTtBQUNBLG1CQUFtQiwyQ0FBSyxDQUFDLHdEQUFZOztBQUVyQztBQUNBO0FBQ0EsbUJBQW1CLDJDQUFLLENBQUMsK0RBQW1COztBQUU1QztBQUNBO0FBQ0EsbUJBQW1CLDJDQUFLLENBQUMsK0RBQW1COztBQUU1QztBQUNBO0FBQ0EsbUJBQW1CLDJDQUFLLENBQUMsNkRBQWlCOztBQUUxQztBQUNBO0FBQ0EsbUJBQW1CLDJDQUFLLENBQUMsMERBQWM7O0FBRXZDO0FBQ0E7QUFDQSxtQkFBbUIsMkNBQUssQ0FBQyw2REFBaUI7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVUsbUVBQVc7QUFDckI7O0FBRUE7QUFDQTtBQUNBLGFBQWEsMkNBQUssQ0FBQyx5REFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsYUFBYSwyQ0FBSyxDQUFDLDZEQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksbUVBQVc7QUFDdkI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBLFVBQVUsbUVBQVc7QUFDckI7O0FBRUEsYUFBYSwyQ0FBSyxXQUFXLDJEQUFlLEdBQUcseURBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxrQ0FBa0M7OztBQUd2QztBQUNBOztBQUVBLFFBQVEsbUVBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsRUFBRTtBQUMzQzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMkNBQUssQ0FBQyw0REFBZ0I7QUFDdkMsS0FBSzs7O0FBR0w7QUFDQSxZQUFZLG1FQUFXO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLG1FQUFXO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1FQUFXO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsbUVBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMkNBQUssQ0FBQyxrRUFBc0Isd0NBQXdDLHdFQUFzQjtBQUMzRyxLQUFLOzs7QUFHTDtBQUNBLFlBQVksbUVBQVc7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLG1FQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSwyQ0FBSyxDQUFDLDBEQUFjO0FBQ2pDLENBQUM7OztBQUdEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25xQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCdUQ7QUFDcEI7QUFDRTtBQUNPO0FBQ0k7QUFDWTtBQUNEO0FBQzNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLHFCQUFxQix5REFBYTtBQUNsQztBQUNBLHFCQUFxQix5REFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLHFCQUFxQix5REFBYTtBQUNsQztBQUNBLHFCQUFxQix5REFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0Esb0JBQW9CLHFEQUFRLHdCQUF3QiwrQ0FBTTtBQUMxRCxzQkFBc0IsNkNBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQSxpQ0FBaUMsMERBQWM7QUFDL0M7QUFDQSxZQUFZLGlEQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBYTtBQUN6Qiw2QkFBNkIseURBQWEsd0JBQXdCLHlEQUFhO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMERBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLG9CQUFvQiw2REFBaUI7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLDZEQUFpQjtBQUNuQztBQUNBLGNBQWMsaUVBQXlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsMERBQWM7QUFDaEM7QUFDQTs7QUFFQTtBQUNBLFlBQVksaUVBQXlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQywwREFBYzs7QUFFeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2Qiw2REFBaUIsZ0NBQWdDLDZEQUFpQjtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0VBQXdCO0FBQ3BDO0FBQ0EsOEJBQThCLDJEQUFlO0FBQzdDLDZDQUE2Qyw0REFBZ0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDREQUFnQjtBQUNyQztBQUNBLFlBQVkscURBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQWtCO0FBQzlCLDRCQUE0Qiw2REFBaUIsdUJBQXVCLDZEQUFpQjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiw0REFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsMkRBQWU7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsWUFBWSxrREFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw2REFBaUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2Qiw2REFBaUIsUUFBUSw2REFBaUI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQWU7QUFDcEM7QUFDQSxZQUFZLHFEQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBYTtBQUN6QjtBQUNBLCtCQUErQiwyREFBZTtBQUM5QztBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsNERBQWdCO0FBQ3JDOztBQUVBLHVDQUF1QywwREFBYztBQUNyRDtBQUNBLGNBQWMsNERBQW9CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLDREQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsZ0VBQXdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLGdFQUF3QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVywrREFBbUI7QUFDOUI7O0FBRUEsV0FBVyw2REFBaUI7QUFDNUI7O0FBRUEsV0FBVyx5REFBYTtBQUN4Qjs7QUFFQTtBQUNBLGdCQUFnQixnREFBUTtBQUN4QjtBQUNBO0FBQ0E7O0FBRUEsV0FBVywyREFBZTtBQUMxQjs7QUFFQTtBQUNBLGdCQUFnQixrREFBVTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUEsV0FBVyw0REFBZ0I7QUFDM0IsV0FBVyxrRUFBc0I7QUFDakM7O0FBRUEsV0FBVywwREFBYztBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0RBQVk7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isb0RBQVk7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQVM7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsNERBQWdCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFlBQVksbURBQVc7QUFDdkI7QUFDQSw0QkFBNEIsa0VBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksaURBQVM7QUFDckIsdUJBQXVCLCtEQUFtQixRQUFRLCtEQUFtQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxtREFBVztBQUN2Qix1QkFBdUIsNkRBQWlCLFFBQVEsNkRBQWlCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyREFBZTtBQUNwQztBQUNBLFlBQVkseURBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQix3REFBWTtBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLHdEQUFZO0FBQ2pDO0FBQ0EsWUFBWSxzREFBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlDQUFpQywrREFBbUI7QUFDcEQ7QUFDQSx1QkFBdUIsK0RBQW1CO0FBQzFDO0FBQ0EsY0FBYyxzREFBYztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpQ0FBaUMsMERBQWM7QUFDL0M7QUFDQSxjQUFjLDBEQUFrQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLDBEQUFjO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDREQUFnQixlQUFlLGtFQUFzQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNkRBQWlCLHFDQUFxQyw2REFBaUI7QUFDMUc7QUFDQSxZQUFZLDhEQUFzQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQWU7QUFDcEM7QUFDQTtBQUNBLFlBQVksc0VBQThCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUVBQTJCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1FQUEyQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCOztBQUVyQiwrQkFBK0IseURBQWE7O0FBRTVDO0FBQ0E7QUFDQSxPQUFPLGlDQUFpQyx5REFBYSxlQUFlLDBEQUFjOztBQUVsRjtBQUNBOztBQUVBLDhCQUE4Qix5REFBYTtBQUMzQztBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhKQUE4Siw2REFBaUIsc0NBQXNDLDZEQUFpQjtBQUN0Tzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDZCQUE2Qiw2REFBaUIsNkJBQTZCLDZEQUFpQjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyREFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQSxZQUFZLDZEQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsNkRBQWlCLDJCQUEyQiw2REFBaUI7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJEQUFlO0FBQ3BDO0FBQ0E7O0FBRUEsaUNBQWlDLDREQUFnQjtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLG1FQUEyQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNFQUE4QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrRUFBMEI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsNERBQWdCLHVCQUF1QiwwREFBYztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUVBQXlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBLDZCQUE2Qiw2REFBaUIsaUNBQWlDLDZEQUFpQjtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtFQUEwQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlFQUFpQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsNkRBQWlCLDJCQUEyQiw2REFBaUI7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOEJBQThCLDBEQUFjO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsNkRBQWlCLHFDQUFxQyw2REFBaUI7O0FBRWxIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksNkRBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLGtFQUEwQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLGtFQUEwQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxxRUFBNkI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxpRUFBeUI7QUFDckM7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QTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxhQUFhLDJCQUEyQjtBQUN4QyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsRUFBRTtBQUNoQjs7O0FBR0E7QUFDQSxnQkFBZ0Isb0NBQW9DO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFRBLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJKO0FBQ25CO0FBQ0k7QUFDRTs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsc0JBQXNCO0FBQ3pGO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywrREFBUywrQ0FBK0MsNkRBQU87QUFDL0Y7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLCtEQUFTO0FBQzdDLHNDQUFzQywrREFBUztBQUMvQyxHQUFHOzs7QUFHSDtBQUNBLFNBQVMsd0VBQW9CO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1AsU0FBUyxnRUFBVTtBQUNuQjs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCNkM7QUFDVjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sNEJBQTRCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLDhEQUE4RCw0QkFBNEI7QUFD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QUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1gsNEJBQTRCLFNBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdFQUF3RSxPQUFPO0FBQy9FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBcURFOzs7Ozs7Ozs7Ozs7QUM3cENGLDhDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMRXJyb3IgYXMgZSB9IGZyb20gXCJncmFwaHFsL2Vycm9yL0dyYXBoUUxFcnJvci5tanNcIjtcblxuaW1wb3J0IHsgS2luZCBhcyByIH0gZnJvbSBcImdyYXBocWwvbGFuZ3VhZ2Uva2luZHMubWpzXCI7XG5cbmltcG9ydCB7IHBhcnNlIGFzIHQgfSBmcm9tIFwiZ3JhcGhxbC9sYW5ndWFnZS9wYXJzZXIubWpzXCI7XG5cbmltcG9ydCB7IHByaW50IGFzIG4gfSBmcm9tIFwiZ3JhcGhxbC9sYW5ndWFnZS9wcmludGVyLm1qc1wiO1xuXG5pbXBvcnQgeyBtYWtlIGFzIG8gfSBmcm9tIFwid29ua2FcIjtcblxuZnVuY3Rpb24gcmVoeWRyYXRlR3JhcGhRbEVycm9yKHIpIHtcbiAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHIpIHtcbiAgICByZXR1cm4gbmV3IGUocik7XG4gIH0gZWxzZSBpZiAoXCJvYmplY3RcIiA9PSB0eXBlb2YgciAmJiByLm1lc3NhZ2UpIHtcbiAgICByZXR1cm4gbmV3IGUoci5tZXNzYWdlLCByLm5vZGVzLCByLnNvdXJjZSwgci5wb3NpdGlvbnMsIHIucGF0aCwgciwgci5leHRlbnNpb25zIHx8IHt9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcjtcbiAgfVxufVxuXG52YXIgaSA9IGZ1bmN0aW9uKGUpIHtcbiAgZnVuY3Rpb24gQ29tYmluZWRFcnJvcihyKSB7XG4gICAgdmFyIHQgPSByLm5ldHdvcmtFcnJvcjtcbiAgICB2YXIgbiA9IHIucmVzcG9uc2U7XG4gICAgdmFyIG8gPSAoci5ncmFwaFFMRXJyb3JzIHx8IFtdKS5tYXAocmVoeWRyYXRlR3JhcGhRbEVycm9yKTtcbiAgICB2YXIgaSA9IGZ1bmN0aW9uIGdlbmVyYXRlRXJyb3JNZXNzYWdlKGUsIHIpIHtcbiAgICAgIHZhciB0ID0gXCJcIjtcbiAgICAgIGlmICh2b2lkIDAgIT09IGUpIHtcbiAgICAgICAgcmV0dXJuIHQgPSBcIltOZXR3b3JrXSBcIiArIGUubWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIGlmICh2b2lkIDAgIT09IHIpIHtcbiAgICAgICAgci5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgdCArPSBcIltHcmFwaFFMXSBcIiArIGUubWVzc2FnZSArIFwiXFxuXCI7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0LnRyaW0oKTtcbiAgICB9KHQsIG8pO1xuICAgIGUuY2FsbCh0aGlzLCBpKTtcbiAgICB0aGlzLm5hbWUgPSBcIkNvbWJpbmVkRXJyb3JcIjtcbiAgICB0aGlzLm1lc3NhZ2UgPSBpO1xuICAgIHRoaXMuZ3JhcGhRTEVycm9ycyA9IG87XG4gICAgdGhpcy5uZXR3b3JrRXJyb3IgPSB0O1xuICAgIHRoaXMucmVzcG9uc2UgPSBuO1xuICB9XG4gIGlmIChlKSB7XG4gICAgQ29tYmluZWRFcnJvci5fX3Byb3RvX18gPSBlO1xuICB9XG4gIChDb21iaW5lZEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoZSAmJiBlLnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yID0gQ29tYmluZWRFcnJvcjtcbiAgQ29tYmluZWRFcnJvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICB9O1xuICByZXR1cm4gQ29tYmluZWRFcnJvcjtcbn0oRXJyb3IpO1xuXG5mdW5jdGlvbiBwaGFzaChlLCByKSB7XG4gIGUgfD0gMDtcbiAgZm9yICh2YXIgdCA9IDAsIG4gPSAwIHwgci5sZW5ndGg7IHQgPCBuOyB0KyspIHtcbiAgICBlID0gKGUgPDwgNSkgKyBlICsgci5jaGFyQ29kZUF0KHQpO1xuICB9XG4gIHJldHVybiBlO1xufVxuXG5mdW5jdGlvbiBoYXNoKGUpIHtcbiAgcmV0dXJuIHBoYXNoKDUzODEsIGUpID4+PiAwO1xufVxuXG52YXIgYSA9IG5ldyBTZXQ7XG5cbnZhciBzID0gbmV3IFdlYWtNYXA7XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShlKSB7XG4gIGlmIChudWxsID09PSBlIHx8IGEuaGFzKGUpKSB7XG4gICAgcmV0dXJuIFwibnVsbFwiO1xuICB9IGVsc2UgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIGUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZSkgfHwgXCJcIjtcbiAgfSBlbHNlIGlmIChlLnRvSlNPTikge1xuICAgIHJldHVybiBzdHJpbmdpZnkoZS50b0pTT04oKSk7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShlKSkge1xuICAgIHZhciByID0gXCJbXCI7XG4gICAgZm9yICh2YXIgdCA9IDAsIG4gPSBlLmxlbmd0aDsgdCA8IG47IHQrKykge1xuICAgICAgaWYgKHQgPiAwKSB7XG4gICAgICAgIHIgKz0gXCIsXCI7XG4gICAgICB9XG4gICAgICB2YXIgbyA9IHN0cmluZ2lmeShlW3RdKTtcbiAgICAgIHIgKz0gby5sZW5ndGggPiAwID8gbyA6IFwibnVsbFwiO1xuICAgIH1cbiAgICByZXR1cm4gciArPSBcIl1cIjtcbiAgfVxuICB2YXIgaSA9IE9iamVjdC5rZXlzKGUpLnNvcnQoKTtcbiAgaWYgKCFpLmxlbmd0aCAmJiBlLmNvbnN0cnVjdG9yICYmIGUuY29uc3RydWN0b3IgIT09IE9iamVjdCkge1xuICAgIHZhciB1ID0gcy5nZXQoZSkgfHwgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMik7XG4gICAgcy5zZXQoZSwgdSk7XG4gICAgcmV0dXJuICd7XCJfX2tleVwiOlwiJyArIHUgKyAnXCJ9JztcbiAgfVxuICBhLmFkZChlKTtcbiAgdmFyIGYgPSBcIntcIjtcbiAgZm9yICh2YXIgYyA9IDAsIGwgPSBpLmxlbmd0aDsgYyA8IGw7IGMrKykge1xuICAgIHZhciBwID0gaVtjXTtcbiAgICB2YXIgaCA9IHN0cmluZ2lmeShlW3BdKTtcbiAgICBpZiAoaCkge1xuICAgICAgaWYgKGYubGVuZ3RoID4gMSkge1xuICAgICAgICBmICs9IFwiLFwiO1xuICAgICAgfVxuICAgICAgZiArPSBzdHJpbmdpZnkocCkgKyBcIjpcIiArIGg7XG4gICAgfVxuICB9XG4gIGEuZGVsZXRlKGUpO1xuICByZXR1cm4gZiArPSBcIn1cIjtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VmFyaWFibGVzKGUpIHtcbiAgYS5jbGVhcigpO1xuICByZXR1cm4gc3RyaW5naWZ5KGUpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlEb2N1bWVudChlKSB7XG4gIHZhciByID0gKFwic3RyaW5nXCIgIT0gdHlwZW9mIGUgPyBlLmxvYyAmJiBlLmxvYy5zb3VyY2UuYm9keSB8fCBuKGUpIDogZSkucmVwbGFjZSgvKFtcXHMsXXwjW15cXG5cXHJdKykrL2csIFwiIFwiKS50cmltKCk7XG4gIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiBlKSB7XG4gICAgdmFyIHQgPSBcImRlZmluaXRpb25zXCIgaW4gZSAmJiBnZXRPcGVyYXRpb25OYW1lKGUpO1xuICAgIGlmICh0KSB7XG4gICAgICByID0gXCIjIFwiICsgdCArIFwiXFxuXCIgKyByO1xuICAgIH1cbiAgICBpZiAoIWUubG9jKSB7XG4gICAgICBlLmxvYyA9IHtcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIGVuZDogci5sZW5ndGgsXG4gICAgICAgIHNvdXJjZToge1xuICAgICAgICAgIGJvZHk6IHIsXG4gICAgICAgICAgbmFtZTogXCJncWxcIixcbiAgICAgICAgICBsb2NhdGlvbk9mZnNldDoge1xuICAgICAgICAgICAgbGluZTogMSxcbiAgICAgICAgICAgIGNvbHVtbjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbnZhciB1ID0gbmV3IE1hcDtcblxuZnVuY3Rpb24ga2V5RG9jdW1lbnQoZSkge1xuICB2YXIgcjtcbiAgdmFyIG47XG4gIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBlKSB7XG4gICAgciA9IGhhc2goc3RyaW5naWZ5RG9jdW1lbnQoZSkpO1xuICAgIG4gPSB1LmdldChyKSB8fCB0KGUsIHtcbiAgICAgIG5vTG9jYXRpb246ICEwXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgciA9IGUuX19rZXkgfHwgaGFzaChzdHJpbmdpZnlEb2N1bWVudChlKSk7XG4gICAgbiA9IHUuZ2V0KHIpIHx8IGU7XG4gIH1cbiAgaWYgKCFuLmxvYykge1xuICAgIHN0cmluZ2lmeURvY3VtZW50KG4pO1xuICB9XG4gIG4uX19rZXkgPSByO1xuICB1LnNldChyLCBuKTtcbiAgcmV0dXJuIG47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcXVlc3QoZSwgcikge1xuICB2YXIgdCA9IGtleURvY3VtZW50KGUpO1xuICByZXR1cm4ge1xuICAgIGtleTogciA/IHBoYXNoKHQuX19rZXksIHN0cmluZ2lmeVZhcmlhYmxlcyhyKSkgPj4+IDAgOiB0Ll9fa2V5LFxuICAgIHF1ZXJ5OiB0LFxuICAgIHZhcmlhYmxlczogciB8fCB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRPcGVyYXRpb25OYW1lKGUpIHtcbiAgZm9yICh2YXIgdCA9IDAsIG4gPSBlLmRlZmluaXRpb25zLmxlbmd0aDsgdCA8IG47IHQrKykge1xuICAgIHZhciBvID0gZS5kZWZpbml0aW9uc1t0XTtcbiAgICBpZiAoby5raW5kID09PSByLk9QRVJBVElPTl9ERUZJTklUSU9OICYmIG8ubmFtZSkge1xuICAgICAgcmV0dXJuIG8ubmFtZS52YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZVJlc3VsdChlLCByLCB0KSB7XG4gIHJldHVybiB7XG4gICAgb3BlcmF0aW9uOiBlLFxuICAgIGRhdGE6IHIuZGF0YSxcbiAgICBlcnJvcjogQXJyYXkuaXNBcnJheShyLmVycm9ycykgPyBuZXcgaSh7XG4gICAgICBncmFwaFFMRXJyb3JzOiByLmVycm9ycyxcbiAgICAgIHJlc3BvbnNlOiB0XG4gICAgfSkgOiB2b2lkIDAsXG4gICAgZXh0ZW5zaW9uczogXCJvYmplY3RcIiA9PSB0eXBlb2Ygci5leHRlbnNpb25zICYmIHIuZXh0ZW5zaW9ucyB8fCB2b2lkIDBcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZUVycm9yUmVzdWx0KGUsIHIsIHQpIHtcbiAgcmV0dXJuIHtcbiAgICBvcGVyYXRpb246IGUsXG4gICAgZGF0YTogdm9pZCAwLFxuICAgIGVycm9yOiBuZXcgaSh7XG4gICAgICBuZXR3b3JrRXJyb3I6IHIsXG4gICAgICByZXNwb25zZTogdFxuICAgIH0pLFxuICAgIGV4dGVuc2lvbnM6IHZvaWQgMFxuICB9O1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgcmV0dXJuIChfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24oZSkge1xuICAgIGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7XG4gICAgICB2YXIgdCA9IGFyZ3VtZW50c1tyXTtcbiAgICAgIGZvciAodmFyIG4gaW4gdCkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIG4pKSB7XG4gICAgICAgICAgZVtuXSA9IHRbbl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH0pLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZUdldChlKSB7XG4gIHJldHVybiBcInF1ZXJ5XCIgPT09IGUua2luZCAmJiAhIWUuY29udGV4dC5wcmVmZXJHZXRNZXRob2Q7XG59XG5cbmZ1bmN0aW9uIG1ha2VGZXRjaEJvZHkoZSkge1xuICByZXR1cm4ge1xuICAgIHF1ZXJ5OiBuKGUucXVlcnkpLFxuICAgIG9wZXJhdGlvbk5hbWU6IGdldE9wZXJhdGlvbk5hbWUoZS5xdWVyeSksXG4gICAgdmFyaWFibGVzOiBlLnZhcmlhYmxlcyB8fCB2b2lkIDAsXG4gICAgZXh0ZW5zaW9uczogdm9pZCAwXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VGZXRjaFVSTChlLCByKSB7XG4gIHZhciB0ID0gc2hvdWxkVXNlR2V0KGUpO1xuICB2YXIgbiA9IGUuY29udGV4dC51cmw7XG4gIGlmICghdCB8fCAhcikge1xuICAgIHJldHVybiBuO1xuICB9XG4gIHZhciBvID0gW107XG4gIGlmIChyLm9wZXJhdGlvbk5hbWUpIHtcbiAgICBvLnB1c2goXCJvcGVyYXRpb25OYW1lPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHIub3BlcmF0aW9uTmFtZSkpO1xuICB9XG4gIGlmIChyLnF1ZXJ5KSB7XG4gICAgby5wdXNoKFwicXVlcnk9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoci5xdWVyeS5yZXBsYWNlKC8oW1xccyxdfCNbXlxcblxccl0rKSsvZywgXCIgXCIpLnRyaW0oKSkpO1xuICB9XG4gIGlmIChyLnZhcmlhYmxlcykge1xuICAgIG8ucHVzaChcInZhcmlhYmxlcz1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlWYXJpYWJsZXMoci52YXJpYWJsZXMpKSk7XG4gIH1cbiAgaWYgKHIuZXh0ZW5zaW9ucykge1xuICAgIG8ucHVzaChcImV4dGVuc2lvbnM9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5VmFyaWFibGVzKHIuZXh0ZW5zaW9ucykpKTtcbiAgfVxuICByZXR1cm4gbiArIFwiP1wiICsgby5qb2luKFwiJlwiKTtcbn1cblxuZnVuY3Rpb24gbWFrZUZldGNoT3B0aW9ucyhlLCByKSB7XG4gIHZhciB0ID0gc2hvdWxkVXNlR2V0KGUpO1xuICB2YXIgbiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZS5jb250ZXh0LmZldGNoT3B0aW9ucyA/IGUuY29udGV4dC5mZXRjaE9wdGlvbnMoKSA6IGUuY29udGV4dC5mZXRjaE9wdGlvbnMgfHwge307XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgbiwge1xuICAgIGJvZHk6ICF0ICYmIHIgPyBKU09OLnN0cmluZ2lmeShyKSA6IHZvaWQgMCxcbiAgICBtZXRob2Q6IHQgPyBcIkdFVFwiIDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogdCA/IG4uaGVhZGVycyA6IF9leHRlbmRzKHt9LCB7XG4gICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH0sIG4uaGVhZGVycylcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VGZXRjaFNvdXJjZShlLCByLCB0KSB7XG4gIHJldHVybiBvKChmdW5jdGlvbihuKSB7XG4gICAgdmFyIG8gPSBuLm5leHQ7XG4gICAgdmFyIGkgPSBuLmNvbXBsZXRlO1xuICAgIHZhciBhID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgQWJvcnRDb250cm9sbGVyID8gbmV3IEFib3J0Q29udHJvbGxlciA6IG51bGw7XG4gICAgdmFyIHMgPSAhMTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgIGlmIChzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoYSkge1xuICAgICAgICB0LnNpZ25hbCA9IGEuc2lnbmFsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVGZXRjaChlLCByLCB0KSB7XG4gICAgICAgIHZhciBuID0gITE7XG4gICAgICAgIHZhciBvO1xuICAgICAgICByZXR1cm4gKGUuY29udGV4dC5mZXRjaCB8fCBmZXRjaCkociwgdCkudGhlbigoZnVuY3Rpb24oZSkge1xuICAgICAgICAgIG8gPSBlO1xuICAgICAgICAgIG4gPSBlLnN0YXR1cyA8IDIwMCB8fCBlLnN0YXR1cyA+PSAoXCJtYW51YWxcIiA9PT0gdC5yZWRpcmVjdCA/IDQwMCA6IDMwMCk7XG4gICAgICAgICAgcmV0dXJuIGUuanNvbigpO1xuICAgICAgICB9KSkudGhlbigoZnVuY3Rpb24ocikge1xuICAgICAgICAgIGlmICghKFwiZGF0YVwiIGluIHIpICYmICEoXCJlcnJvcnNcIiBpbiByKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gQ29udGVudFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG1ha2VSZXN1bHQoZSwgciwgbyk7XG4gICAgICAgIH0pKS5jYXRjaCgoZnVuY3Rpb24ocikge1xuICAgICAgICAgIGlmIChcIkFib3J0RXJyb3JcIiAhPT0gci5uYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFrZUVycm9yUmVzdWx0KGUsIG4gPyBuZXcgRXJyb3Ioby5zdGF0dXNUZXh0KSA6IHIsIG8pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgfShlLCByLCB0KTtcbiAgICB9KSkudGhlbigoZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKCFzKSB7XG4gICAgICAgIHMgPSAhMDtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICBvKGUpO1xuICAgICAgICB9XG4gICAgICAgIGkoKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcyA9ICEwO1xuICAgICAgaWYgKGEpIHtcbiAgICAgICAgYS5hYm9ydCgpO1xuICAgICAgfVxuICAgIH07XG4gIH0pKTtcbn1cblxuZXhwb3J0IHsgaSBhcyBDLCBfZXh0ZW5kcyBhcyBfLCBtYWtlRXJyb3JSZXN1bHQgYXMgYSwgbWFrZUZldGNoQm9keSBhcyBiLCBtYWtlRmV0Y2hVUkwgYXMgYywgbWFrZUZldGNoT3B0aW9ucyBhcyBkLCBtYWtlRmV0Y2hTb3VyY2UgYXMgZSwgY3JlYXRlUmVxdWVzdCBhcyBmLCBzdHJpbmdpZnlWYXJpYWJsZXMgYXMgZywgZ2V0T3BlcmF0aW9uTmFtZSBhcyBoLCBrZXlEb2N1bWVudCBhcyBrLCBtYWtlUmVzdWx0IGFzIG0sIHN0cmluZ2lmeURvY3VtZW50IGFzIHMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPTVhZGMzOGYwLm1qcy5tYXBcbiIsImltcG9ydCB7IHZpc2l0IGFzIGUgfSBmcm9tIFwiZ3JhcGhxbC9sYW5ndWFnZS92aXNpdG9yLm1qc1wiO1xuXG5pbXBvcnQgeyBLaW5kIGFzIHQgfSBmcm9tIFwiZ3JhcGhxbC9sYW5ndWFnZS9raW5kcy5tanNcIjtcblxuaW1wb3J0IHsgcHJpbnQgYXMgciB9IGZyb20gXCJncmFwaHFsL2xhbmd1YWdlL3ByaW50ZXIubWpzXCI7XG5cbmltcG9ydCB7IGsgYXMgbiwgXyBhcyBpLCBzIGFzIG8sIEMgYXMgdSwgbSBhcyBzLCBhIGFzIGMsIGIgYXMgcCwgYyBhcyBsLCBkLCBlIGFzIHYsIGYgYXMgeSB9IGZyb20gXCIuLzVhZGMzOGYwLm1qc1wiO1xuXG5leHBvcnQgeyBDIGFzIENvbWJpbmVkRXJyb3IsIGYgYXMgY3JlYXRlUmVxdWVzdCwgaCBhcyBnZXRPcGVyYXRpb25OYW1lLCBhIGFzIG1ha2VFcnJvclJlc3VsdCwgbSBhcyBtYWtlUmVzdWx0LCBnIGFzIHN0cmluZ2lmeVZhcmlhYmxlcyB9IGZyb20gXCIuLzVhZGMzOGYwLm1qc1wiO1xuXG5pbXBvcnQgeyBzaGFyZSBhcyBrLCBvblB1c2ggYXMgeCwgb25FbmQgYXMgRSwgbWFrZSBhcyBPLCBzdWJzY3JpYmUgYXMgYiwgb25TdGFydCBhcyBxLCB0b1Byb21pc2UgYXMgdywgdGFrZSBhcyBELCBmaWx0ZXIgYXMgTiwgbWFwIGFzIF8sIHRhcCBhcyBTLCBtZXJnZSBhcyBULCBtZXJnZU1hcCBhcyBSLCB0YWtlVW50aWwgYXMgUCwgbWFrZVN1YmplY3QgYXMgTSwgcHVibGlzaCBhcyBBLCBzd2l0Y2hNYXAgYXMgViwgZnJvbVZhbHVlIGFzIGogfSBmcm9tIFwid29ua2FcIjtcblxuZnVuY3Rpb24gY29sbGVjdFR5cGVzKGUsIHQpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHtcbiAgICBmb3IgKHZhciByID0gMDsgciA8IGUubGVuZ3RoOyByKyspIHtcbiAgICAgIGNvbGxlY3RUeXBlcyhlW3JdLCB0KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJvYmplY3RcIiA9PSB0eXBlb2YgZSAmJiBudWxsICE9PSBlKSB7XG4gICAgZm9yICh2YXIgbiBpbiBlKSB7XG4gICAgICBpZiAoXCJfX3R5cGVuYW1lXCIgPT09IG4gJiYgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZVtuXSkge1xuICAgICAgICB0W2Vbbl1dID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxlY3RUeXBlcyhlW25dLCB0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3RUeXBlc0Zyb21SZXNwb25zZShlKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhjb2xsZWN0VHlwZXMoZSwge30pKTtcbn1cblxudmFyIGZvcm1hdE5vZGUgPSBmdW5jdGlvbihlKSB7XG4gIGlmIChlLnNlbGVjdGlvblNldCAmJiAhZS5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5zb21lKChmdW5jdGlvbihlKSB7XG4gICAgcmV0dXJuIGUua2luZCA9PT0gdC5GSUVMRCAmJiBcIl9fdHlwZW5hbWVcIiA9PT0gZS5uYW1lLnZhbHVlICYmICFlLmFsaWFzO1xuICB9KSkpIHtcbiAgICByZXR1cm4gaSh7fSwgZSwge1xuICAgICAgc2VsZWN0aW9uU2V0OiBpKHt9LCBlLnNlbGVjdGlvblNldCwge1xuICAgICAgICBzZWxlY3Rpb25zOiBlLnNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmNvbmNhdChbIHtcbiAgICAgICAgICBraW5kOiB0LkZJRUxELFxuICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIGtpbmQ6IHQuTkFNRSxcbiAgICAgICAgICAgIHZhbHVlOiBcIl9fdHlwZW5hbWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSBdKVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxufTtcblxudmFyIEkgPSBuZXcgTWFwO1xuXG5mdW5jdGlvbiBmb3JtYXREb2N1bWVudCh0KSB7XG4gIHZhciByID0gbih0KTtcbiAgdmFyIGkgPSBJLmdldChyLl9fa2V5KTtcbiAgaWYgKCFpKSB7XG4gICAgKGkgPSBlKHIsIHtcbiAgICAgIEZpZWxkOiBmb3JtYXROb2RlLFxuICAgICAgSW5saW5lRnJhZ21lbnQ6IGZvcm1hdE5vZGVcbiAgICB9KSkuX19rZXkgPSByLl9fa2V5O1xuICAgIEkuc2V0KHIuX19rZXksIGkpO1xuICB9XG4gIHJldHVybiBpO1xufVxuXG5mdW5jdGlvbiBtYXNrVHlwZW5hbWUoZSkge1xuICBpZiAoIWUgfHwgXCJvYmplY3RcIiAhPSB0eXBlb2YgZSkge1xuICAgIHJldHVybiBlO1xuICB9XG4gIHJldHVybiBPYmplY3Qua2V5cyhlKS5yZWR1Y2UoKGZ1bmN0aW9uKHQsIHIpIHtcbiAgICB2YXIgbiA9IGVbcl07XG4gICAgaWYgKFwiX190eXBlbmFtZVwiID09PSByKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX3R5cGVuYW1lXCIsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIHZhbHVlOiBuXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobikpIHtcbiAgICAgIHRbcl0gPSBuLm1hcChtYXNrVHlwZW5hbWUpO1xuICAgIH0gZWxzZSBpZiAobiAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBuICYmIFwiX190eXBlbmFtZVwiIGluIG4pIHtcbiAgICAgIHRbcl0gPSBtYXNrVHlwZW5hbWUobik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRbcl0gPSBuO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbiAgfSksIHt9KTtcbn1cblxuZnVuY3Rpb24gd2l0aFByb21pc2UoZSkge1xuICBlLnRvUHJvbWlzZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB3KEQoMSkoZSkpO1xuICB9O1xuICByZXR1cm4gZTtcbn1cblxuZnVuY3Rpb24gbWFrZU9wZXJhdGlvbihlLCB0LCByKSB7XG4gIGlmICghcikge1xuICAgIHIgPSB0LmNvbnRleHQ7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IHQua2V5LFxuICAgIHF1ZXJ5OiB0LnF1ZXJ5LFxuICAgIHZhcmlhYmxlczogdC52YXJpYWJsZXMsXG4gICAga2luZDogZSxcbiAgICBjb250ZXh0OiByXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZE1ldGFkYXRhKGUsIHQpIHtcbiAgcmV0dXJuIG1ha2VPcGVyYXRpb24oZS5raW5kLCBlLCBpKHt9LCBlLmNvbnRleHQsIHtcbiAgICBtZXRhOiBpKHt9LCBlLmNvbnRleHQubWV0YSwgdClcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gYXBwbHlEZWZpbml0aW9ucyhlLCByLCBuKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbi5sZW5ndGg7IGkrKykge1xuICAgIGlmIChuW2ldLmtpbmQgPT09IHQuRlJBR01FTlRfREVGSU5JVElPTikge1xuICAgICAgdmFyIGEgPSBuW2ldLm5hbWUudmFsdWU7XG4gICAgICB2YXIgdSA9IG8obltpXSk7XG4gICAgICBpZiAoIWUuaGFzKGEpKSB7XG4gICAgICAgIGUuc2V0KGEsIHUpO1xuICAgICAgICByLnB1c2gobltpXSk7XG4gICAgICB9IGVsc2UgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiBlLmdldChhKSAhPT0gdSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJbV0FSTklORzogRHVwbGljYXRlIEZyYWdtZW50XSBBIGZyYWdtZW50IHdpdGggbmFtZSBgXCIgKyBhICsgXCJgIGFscmVhZHkgZXhpc3RzIGluIHRoaXMgZG9jdW1lbnQuXFxuV2hpbGUgZnJhZ21lbnQgbmFtZXMgbWF5IG5vdCBiZSB1bmlxdWUgYWNyb3NzIHlvdXIgc291cmNlLCBlYWNoIG5hbWUgbXVzdCBiZSB1bmlxdWUgcGVyIGRvY3VtZW50LlwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgci5wdXNoKG5baV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBncWwoKSB7XG4gIHZhciBlID0gYXJndW1lbnRzO1xuICB2YXIgciA9IG5ldyBNYXA7XG4gIHZhciBpID0gW107XG4gIHZhciBhID0gW107XG4gIHZhciBvID0gQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMF0pID8gYXJndW1lbnRzWzBdWzBdIDogYXJndW1lbnRzWzBdIHx8IFwiXCI7XG4gIGZvciAodmFyIHUgPSAxOyB1IDwgYXJndW1lbnRzLmxlbmd0aDsgdSsrKSB7XG4gICAgdmFyIHMgPSBlW3VdO1xuICAgIGlmIChzICYmIHMuZGVmaW5pdGlvbnMpIHtcbiAgICAgIGEucHVzaC5hcHBseShhLCBzLmRlZmluaXRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbyArPSBzO1xuICAgIH1cbiAgICBvICs9IGVbMF1bdV07XG4gIH1cbiAgYXBwbHlEZWZpbml0aW9ucyhyLCBpLCBuKG8pLmRlZmluaXRpb25zKTtcbiAgYXBwbHlEZWZpbml0aW9ucyhyLCBpLCBhKTtcbiAgcmV0dXJuIG4oe1xuICAgIGtpbmQ6IHQuRE9DVU1FTlQsXG4gICAgZGVmaW5pdGlvbnM6IGlcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFNraXAkMShlKSB7XG4gIHZhciB0ID0gZS5raW5kO1xuICByZXR1cm4gXCJzdWJzY3JpcHRpb25cIiAhPT0gdCAmJiBcInF1ZXJ5XCIgIT09IHQ7XG59XG5cbmZ1bmN0aW9uIHNzckV4Y2hhbmdlKGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgdmFyIHIgPSBbXTtcbiAgZnVuY3Rpb24gaW52YWxpZGF0ZShlKSB7XG4gICAgci5wdXNoKGUub3BlcmF0aW9uLmtleSk7XG4gICAgaWYgKDEgPT09IHIubGVuZ3RoKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIHdoaWxlIChlID0gci5zaGlmdCgpKSB7XG4gICAgICAgICAgZGVsZXRlIHRbZV07XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaXNDYWNoZWQoZSkge1xuICAgIHJldHVybiAhc2hvdWxkU2tpcCQxKGUpICYmIHZvaWQgMCAhPT0gdFtlLmtleV07XG4gIH1cbiAgdmFyIHNzciA9IGZ1bmN0aW9uKHIpIHtcbiAgICB2YXIgbiA9IHIuY2xpZW50O1xuICAgIHZhciBpID0gci5mb3J3YXJkO1xuICAgIHJldHVybiBmdW5jdGlvbihyKSB7XG4gICAgICB2YXIgYSA9IGUgJiYgXCJib29sZWFuXCIgPT0gdHlwZW9mIGUuaXNDbGllbnQgPyAhIWUuaXNDbGllbnQgOiAhbi5zdXNwZW5zZTtcbiAgICAgIHZhciBvID0gayhyKTtcbiAgICAgIHZhciBzID0gaShOKChmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiAhaXNDYWNoZWQoZSk7XG4gICAgICB9KSkobykpO1xuICAgICAgdmFyIGMgPSBfKChmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBkZXNlcmlhbGl6ZVJlc3VsdChlLCB0KSB7XG4gICAgICAgICAgdmFyIHIgPSB0LmVycm9yO1xuICAgICAgICAgIHZhciBuID0gdC5kYXRhO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcGVyYXRpb246IGUsXG4gICAgICAgICAgICBkYXRhOiBuID8gSlNPTi5wYXJzZShuKSA6IHZvaWQgMCxcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IHZvaWQgMCxcbiAgICAgICAgICAgIGVycm9yOiByID8gbmV3IHUoe1xuICAgICAgICAgICAgICBuZXR3b3JrRXJyb3I6IHIubmV0d29ya0Vycm9yID8gbmV3IEVycm9yKHIubmV0d29ya0Vycm9yKSA6IHZvaWQgMCxcbiAgICAgICAgICAgICAgZ3JhcGhRTEVycm9yczogci5ncmFwaFFMRXJyb3JzICYmIHIuZ3JhcGhRTEVycm9ycy5sZW5ndGggPyByLmdyYXBoUUxFcnJvcnMgOiB2b2lkIDBcbiAgICAgICAgICAgIH0pIDogdm9pZCAwXG4gICAgICAgICAgfTtcbiAgICAgICAgfShlLCB0W2Uua2V5XSk7XG4gICAgICB9KSkoTigoZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gaXNDYWNoZWQoZSk7XG4gICAgICB9KSkobykpO1xuICAgICAgaWYgKCFhKSB7XG4gICAgICAgIHMgPSBTKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgdmFyIHIgPSBlLm9wZXJhdGlvbjtcbiAgICAgICAgICBpZiAoIXNob3VsZFNraXAkMShyKSkge1xuICAgICAgICAgICAgdmFyIG4gPSBmdW5jdGlvbiBzZXJpYWxpemVSZXN1bHQoZSkge1xuICAgICAgICAgICAgICB2YXIgdCA9IGUuZGF0YTtcbiAgICAgICAgICAgICAgdmFyIHIgPSBlLmVycm9yO1xuICAgICAgICAgICAgICB2YXIgbiA9IHt9O1xuICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSB0KSB7XG4gICAgICAgICAgICAgICAgbi5kYXRhID0gSlNPTi5zdHJpbmdpZnkodCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICBuLmVycm9yID0ge1xuICAgICAgICAgICAgICAgICAgZ3JhcGhRTEVycm9yczogci5ncmFwaFFMRXJyb3JzLm1hcCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWUucGF0aCAmJiAhZS5leHRlbnNpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBlLnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uczogZS5leHRlbnNpb25zXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChyLm5ldHdvcmtFcnJvcikge1xuICAgICAgICAgICAgICAgICAgbi5lcnJvci5uZXR3b3JrRXJyb3IgPSBcIlwiICsgci5uZXR3b3JrRXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgICAgfShlKTtcbiAgICAgICAgICAgIHRbci5rZXldID0gbjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKShzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGMgPSBTKGludmFsaWRhdGUpKGMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFQoWyBzLCBjIF0pO1xuICAgIH07XG4gIH07XG4gIHNzci5yZXN0b3JlRGF0YSA9IGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4gaSh0LCBlKTtcbiAgfTtcbiAgc3NyLmV4dHJhY3REYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGkoe30sIHQpO1xuICB9O1xuICBpZiAoZSAmJiBlLmluaXRpYWxTdGF0ZSkge1xuICAgIHNzci5yZXN0b3JlRGF0YShlLmluaXRpYWxTdGF0ZSk7XG4gIH1cbiAgcmV0dXJuIHNzcjtcbn1cblxuZnVuY3Rpb24gc2hvdWxkU2tpcChlKSB7XG4gIHZhciB0ID0gZS5raW5kO1xuICByZXR1cm4gXCJtdXRhdGlvblwiICE9PSB0ICYmIFwicXVlcnlcIiAhPT0gdDtcbn1cblxuZnVuY3Rpb24gY2FjaGVFeGNoYW5nZShlKSB7XG4gIHZhciB0ID0gZS5mb3J3YXJkO1xuICB2YXIgciA9IGUuY2xpZW50O1xuICB2YXIgbiA9IGUuZGlzcGF0Y2hEZWJ1ZztcbiAgdmFyIGEgPSBuZXcgTWFwO1xuICB2YXIgbyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGZ1bmN0aW9uIG1hcFR5cGVOYW1lcyhlKSB7XG4gICAgdmFyIHQgPSBtYWtlT3BlcmF0aW9uKGUua2luZCwgZSk7XG4gICAgdC5xdWVyeSA9IGZvcm1hdERvY3VtZW50KGUucXVlcnkpO1xuICAgIHJldHVybiB0O1xuICB9XG4gIGZ1bmN0aW9uIGlzT3BlcmF0aW9uQ2FjaGVkKGUpIHtcbiAgICB2YXIgdCA9IGUuY29udGV4dC5yZXF1ZXN0UG9saWN5O1xuICAgIHJldHVybiBcInF1ZXJ5XCIgPT09IGUua2luZCAmJiBcIm5ldHdvcmstb25seVwiICE9PSB0ICYmIChcImNhY2hlLW9ubHlcIiA9PT0gdCB8fCBhLmhhcyhlLmtleSkpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgdmFyIHUgPSBrKGUpO1xuICAgIHZhciBzID0gXygoZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHQgPSBhLmdldChlLmtleSk7XG4gICAgICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgbihpKHt9LCB7XG4gICAgICAgIG9wZXJhdGlvbjogZVxuICAgICAgfSwgdCA/IHtcbiAgICAgICAgdHlwZTogXCJjYWNoZUhpdFwiLFxuICAgICAgICBtZXNzYWdlOiBcIlRoZSByZXN1bHQgd2FzIHN1Y2Nlc3NmdWxseSByZXRyaWVkIGZyb20gdGhlIGNhY2hlXCJcbiAgICAgIH0gOiB7XG4gICAgICAgIHR5cGU6IFwiY2FjaGVNaXNzXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiVGhlIHJlc3VsdCBjb3VsZCBub3QgYmUgcmV0cmlldmVkIGZyb20gdGhlIGNhY2hlXCJcbiAgICAgIH0pKTtcbiAgICAgIHZhciBvID0gaSh7fSwgdCwge1xuICAgICAgICBvcGVyYXRpb246IGFkZE1ldGFkYXRhKGUsIHtcbiAgICAgICAgICBjYWNoZU91dGNvbWU6IHQgPyBcImhpdFwiIDogXCJtaXNzXCJcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgaWYgKFwiY2FjaGUtYW5kLW5ldHdvcmtcIiA9PT0gZS5jb250ZXh0LnJlcXVlc3RQb2xpY3kpIHtcbiAgICAgICAgby5zdGFsZSA9ICEwO1xuICAgICAgICByZWV4ZWN1dGVPcGVyYXRpb24ociwgZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbztcbiAgICB9KSkoTigoZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuICFzaG91bGRTa2lwKGUpICYmIGlzT3BlcmF0aW9uQ2FjaGVkKGUpO1xuICAgIH0pKSh1KSk7XG4gICAgdmFyIGMgPSBTKChmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgdCA9IGUub3BlcmF0aW9uO1xuICAgICAgaWYgKCF0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBpID0gY29sbGVjdFR5cGVzRnJvbVJlc3BvbnNlKGUuZGF0YSkuY29uY2F0KHQuY29udGV4dC5hZGRpdGlvbmFsVHlwZW5hbWVzIHx8IFtdKTtcbiAgICAgIGlmIChcIm11dGF0aW9uXCIgPT09IGUub3BlcmF0aW9uLmtpbmQpIHtcbiAgICAgICAgdmFyIHUgPSBuZXcgU2V0O1xuICAgICAgICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgbih7XG4gICAgICAgICAgdHlwZTogXCJjYWNoZUludmFsaWRhdGlvblwiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlIGZvbGxvd2luZyB0eXBlbmFtZXMgaGF2ZSBiZWVuIGludmFsaWRhdGVkOiBcIiArIGksXG4gICAgICAgICAgb3BlcmF0aW9uOiB0LFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHR5cGVuYW1lczogaSxcbiAgICAgICAgICAgIHJlc3BvbnNlOiBlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzb3VyY2U6IFwiY2FjaGVFeGNoYW5nZVwiXG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IGkubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICB2YXIgYyA9IGlbc107XG4gICAgICAgICAgdmFyIHAgPSBvW2NdIHx8IChvW2NdID0gbmV3IFNldCk7XG4gICAgICAgICAgcC5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB1LmFkZChlKTtcbiAgICAgICAgICB9KSk7XG4gICAgICAgICAgcC5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIHUuZm9yRWFjaCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGlmIChhLmhhcyhlKSkge1xuICAgICAgICAgICAgdCA9IGEuZ2V0KGUpLm9wZXJhdGlvbjtcbiAgICAgICAgICAgIGEuZGVsZXRlKGUpO1xuICAgICAgICAgICAgcmVleGVjdXRlT3BlcmF0aW9uKHIsIHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIGlmIChcInF1ZXJ5XCIgPT09IHQua2luZCAmJiBlLmRhdGEpIHtcbiAgICAgICAgYS5zZXQodC5rZXksIGUpO1xuICAgICAgICBmb3IgKHZhciBmID0gMDsgZiA8IGkubGVuZ3RoOyBmKyspIHtcbiAgICAgICAgICB2YXIgaCA9IGlbZl07XG4gICAgICAgICAgKG9baF0gfHwgKG9baF0gPSBuZXcgU2V0KSkuYWRkKHQua2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pKSh0KE4oKGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiBcInF1ZXJ5XCIgIT09IGUua2luZCB8fCBcImNhY2hlLW9ubHlcIiAhPT0gZS5jb250ZXh0LnJlcXVlc3RQb2xpY3k7XG4gICAgfSkpKF8oKGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiBhZGRNZXRhZGF0YShlLCB7XG4gICAgICAgIGNhY2hlT3V0Y29tZTogXCJtaXNzXCJcbiAgICAgIH0pO1xuICAgIH0pKShUKFsgXyhtYXBUeXBlTmFtZXMpKE4oKGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiAhc2hvdWxkU2tpcChlKSAmJiAhaXNPcGVyYXRpb25DYWNoZWQoZSk7XG4gICAgfSkpKHUpKSwgTigoZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIHNob3VsZFNraXAoZSk7XG4gICAgfSkpKHUpIF0pKSkpKTtcbiAgICByZXR1cm4gVChbIHMsIGMgXSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZXhlY3V0ZU9wZXJhdGlvbihlLCB0KSB7XG4gIHJldHVybiBlLnJlZXhlY3V0ZU9wZXJhdGlvbihtYWtlT3BlcmF0aW9uKHQua2luZCwgdCwgaSh7fSwgdC5jb250ZXh0LCB7XG4gICAgcmVxdWVzdFBvbGljeTogXCJuZXR3b3JrLW9ubHlcIlxuICB9KSkpO1xufVxuXG5mdW5jdGlvbiBzdWJzY3JpcHRpb25FeGNoYW5nZShlKSB7XG4gIHZhciB0ID0gZS5mb3J3YXJkU3Vic2NyaXB0aW9uO1xuICB2YXIgbiA9IGUuZW5hYmxlQWxsT3BlcmF0aW9ucztcbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgYSA9IGUuY2xpZW50O1xuICAgIHZhciBvID0gZS5mb3J3YXJkO1xuICAgIGZ1bmN0aW9uIGlzU3Vic2NyaXB0aW9uT3BlcmF0aW9uKGUpIHtcbiAgICAgIHZhciB0ID0gZS5raW5kO1xuICAgICAgcmV0dXJuIFwic3Vic2NyaXB0aW9uXCIgPT09IHQgfHwgISFuICYmIChcInF1ZXJ5XCIgPT09IHQgfHwgXCJtdXRhdGlvblwiID09PSB0KTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBuID0gayhlKTtcbiAgICAgIHZhciB1ID0gUigoZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgbyA9IGUua2V5O1xuICAgICAgICB2YXIgdSA9IE4oKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICByZXR1cm4gXCJ0ZWFyZG93blwiID09PSBlLmtpbmQgJiYgZS5rZXkgPT09IG87XG4gICAgICAgIH0pKShuKTtcbiAgICAgICAgcmV0dXJuIFAodSkoZnVuY3Rpb24gY3JlYXRlU3Vic2NyaXB0aW9uU291cmNlKGUpIHtcbiAgICAgICAgICB2YXIgbiA9IHQoe1xuICAgICAgICAgICAga2V5OiBlLmtleS50b1N0cmluZygzNiksXG4gICAgICAgICAgICBxdWVyeTogcihlLnF1ZXJ5KSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogZS52YXJpYWJsZXMsXG4gICAgICAgICAgICBjb250ZXh0OiBpKHt9LCBlLmNvbnRleHQpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIE8oKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIHZhciByID0gdC5uZXh0O1xuICAgICAgICAgICAgdmFyIGkgPSB0LmNvbXBsZXRlO1xuICAgICAgICAgICAgdmFyIG8gPSAhMTtcbiAgICAgICAgICAgIHZhciB1O1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHUgPSBuLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHIocyhlLCB0KSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHIoYyhlLCB0KSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIW8pIHtcbiAgICAgICAgICAgICAgICAgICAgbyA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJzdWJzY3JpcHRpb25cIiA9PT0gZS5raW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYS5yZWV4ZWN1dGVPcGVyYXRpb24obWFrZU9wZXJhdGlvbihcInRlYXJkb3duXCIsIGUsIGUuY29udGV4dCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBvID0gITA7XG4gICAgICAgICAgICAgIGlmICh1KSB7XG4gICAgICAgICAgICAgICAgdS51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfShlKSk7XG4gICAgICB9KSkoTihpc1N1YnNjcmlwdGlvbk9wZXJhdGlvbikobikpO1xuICAgICAgdmFyIHAgPSBvKE4oKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuICFpc1N1YnNjcmlwdGlvbk9wZXJhdGlvbihlKTtcbiAgICAgIH0pKShuKSk7XG4gICAgICByZXR1cm4gVChbIHUsIHAgXSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVidWdFeGNoYW5nZShlKSB7XG4gIHZhciB0ID0gZS5mb3J3YXJkO1xuICBpZiAoXCJwcm9kdWN0aW9uXCIgPT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiB0KGUpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiBTKChmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIltFeGNoYW5nZSBkZWJ1Z106IENvbXBsZXRlZCBvcGVyYXRpb246IFwiLCBlKTtcbiAgICAgIH0pKSh0KFMoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiW0V4Y2hhbmdlIGRlYnVnXTogSW5jb21pbmcgb3BlcmF0aW9uOiBcIiwgZSk7XG4gICAgICB9KSkoZSkpKTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZHVwRXhjaGFuZ2UoZSkge1xuICB2YXIgdCA9IGUuZm9yd2FyZDtcbiAgdmFyIHIgPSBlLmRpc3BhdGNoRGVidWc7XG4gIHZhciBuID0gbmV3IFNldDtcbiAgZnVuY3Rpb24gZmlsdGVySW5jb21pbmdPcGVyYXRpb24oZSkge1xuICAgIHZhciB0ID0gZS5rZXk7XG4gICAgdmFyIGkgPSBlLmtpbmQ7XG4gICAgaWYgKFwidGVhcmRvd25cIiA9PT0gaSkge1xuICAgICAgbi5kZWxldGUodCk7XG4gICAgICByZXR1cm4gITA7XG4gICAgfVxuICAgIGlmIChcInF1ZXJ5XCIgIT09IGkgJiYgXCJzdWJzY3JpcHRpb25cIiAhPT0gaSkge1xuICAgICAgcmV0dXJuICEwO1xuICAgIH1cbiAgICB2YXIgYSA9IG4uaGFzKHQpO1xuICAgIG4uYWRkKHQpO1xuICAgIGlmIChhKSB7XG4gICAgICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgcih7XG4gICAgICAgIHR5cGU6IFwiZGVkdXBcIixcbiAgICAgICAgbWVzc2FnZTogXCJBbiBvcGVyYXRpb24gaGFzIGJlZW4gZGVkdXBlZC5cIixcbiAgICAgICAgb3BlcmF0aW9uOiBlLFxuICAgICAgICBzb3VyY2U6IFwiZGVkdXBFeGNoYW5nZVwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICFhO1xuICB9XG4gIGZ1bmN0aW9uIGFmdGVyT3BlcmF0aW9uUmVzdWx0KGUpIHtcbiAgICBuLmRlbGV0ZShlLm9wZXJhdGlvbi5rZXkpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgdmFyIHIgPSBOKGZpbHRlckluY29taW5nT3BlcmF0aW9uKShlKTtcbiAgICByZXR1cm4gUyhhZnRlck9wZXJhdGlvblJlc3VsdCkodChyKSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZldGNoRXhjaGFuZ2UoZSkge1xuICB2YXIgdCA9IGUuZm9yd2FyZDtcbiAgdmFyIHIgPSBlLmRpc3BhdGNoRGVidWc7XG4gIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgdmFyIG4gPSBrKGUpO1xuICAgIHZhciBpID0gUigoZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHQgPSBlLmtleTtcbiAgICAgIHZhciBpID0gTigoZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gXCJ0ZWFyZG93blwiID09PSBlLmtpbmQgJiYgZS5rZXkgPT09IHQ7XG4gICAgICB9KSkobik7XG4gICAgICB2YXIgYSA9IHAoZSk7XG4gICAgICB2YXIgbyA9IGwoZSwgYSk7XG4gICAgICB2YXIgdSA9IGQoZSwgYSk7XG4gICAgICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgcih7XG4gICAgICAgIHR5cGU6IFwiZmV0Y2hSZXF1ZXN0XCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiQSBmZXRjaCByZXF1ZXN0IGlzIGJlaW5nIGV4ZWN1dGVkLlwiLFxuICAgICAgICBvcGVyYXRpb246IGUsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB1cmw6IG8sXG4gICAgICAgICAgZmV0Y2hPcHRpb25zOiB1XG4gICAgICAgIH0sXG4gICAgICAgIHNvdXJjZTogXCJmZXRjaEV4Y2hhbmdlXCJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHgoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIG4gPSAhdC5kYXRhID8gdC5lcnJvciA6IHZvaWQgMDtcbiAgICAgICAgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmIHIoe1xuICAgICAgICAgIHR5cGU6IG4gPyBcImZldGNoRXJyb3JcIiA6IFwiZmV0Y2hTdWNjZXNzXCIsXG4gICAgICAgICAgbWVzc2FnZTogXCJBIFwiICsgKG4gPyBcImZhaWxlZFwiIDogXCJzdWNjZXNzZnVsXCIpICsgXCIgZmV0Y2ggcmVzcG9uc2UgaGFzIGJlZW4gcmV0dXJuZWQuXCIsXG4gICAgICAgICAgb3BlcmF0aW9uOiBlLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHVybDogbyxcbiAgICAgICAgICAgIGZldGNoT3B0aW9uczogdSxcbiAgICAgICAgICAgIHZhbHVlOiBuIHx8IHRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNvdXJjZTogXCJmZXRjaEV4Y2hhbmdlXCJcbiAgICAgICAgfSk7XG4gICAgICB9KSkoUChpKSh2KGUsIG8sIHUpKSk7XG4gICAgfSkpKE4oKGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiBcInF1ZXJ5XCIgPT09IGUua2luZCB8fCBcIm11dGF0aW9uXCIgPT09IGUua2luZDtcbiAgICB9KSkobikpO1xuICAgIHZhciBhID0gdChOKChmdW5jdGlvbihlKSB7XG4gICAgICByZXR1cm4gXCJxdWVyeVwiICE9PSBlLmtpbmQgJiYgXCJtdXRhdGlvblwiICE9PSBlLmtpbmQ7XG4gICAgfSkpKG4pKTtcbiAgICByZXR1cm4gVChbIGksIGEgXSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZhbGxiYWNrRXhjaGFuZ2UoZSkge1xuICB2YXIgdCA9IGUuZGlzcGF0Y2hEZWJ1ZztcbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4gTigoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gITE7XG4gICAgfSkpKFMoKGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChcInRlYXJkb3duXCIgIT09IGUua2luZCAmJiBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICAgICAgdmFyIHIgPSAnTm8gZXhjaGFuZ2UgaGFzIGhhbmRsZWQgb3BlcmF0aW9ucyBvZiBraW5kIFwiJyArIGUua2luZCArIFwiXFxcIi4gQ2hlY2sgd2hldGhlciB5b3UndmUgYWRkZWQgYW4gZXhjaGFuZ2UgcmVzcG9uc2libGUgZm9yIHRoZXNlIG9wZXJhdGlvbnMuXCI7XG4gICAgICAgIFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiB0KHtcbiAgICAgICAgICB0eXBlOiBcImZhbGxiYWNrQ2F0Y2hcIixcbiAgICAgICAgICBtZXNzYWdlOiByLFxuICAgICAgICAgIG9wZXJhdGlvbjogZSxcbiAgICAgICAgICBzb3VyY2U6IFwiZmFsbGJhY2tFeGNoYW5nZVwiXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLndhcm4ocik7XG4gICAgICB9XG4gICAgfSkpKGUpKTtcbiAgfTtcbn1cblxudmFyICQgPSBmYWxsYmFja0V4Y2hhbmdlKHtcbiAgZGlzcGF0Y2hEZWJ1Zzogbm9vcFxufSk7XG5cbmZ1bmN0aW9uIGNvbXBvc2VFeGNoYW5nZXMoZSkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHZhciByID0gdC5jbGllbnQ7XG4gICAgdmFyIG4gPSB0LmRpc3BhdGNoRGVidWc7XG4gICAgcmV0dXJuIGUucmVkdWNlUmlnaHQoKGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgIHJldHVybiB0KHtcbiAgICAgICAgY2xpZW50OiByLFxuICAgICAgICBmb3J3YXJkOiBlLFxuICAgICAgICBkaXNwYXRjaERlYnVnOiBmdW5jdGlvbiBkaXNwYXRjaERlYnVnJDEoZSkge1xuICAgICAgICAgIFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiBuKGkoe30sIHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIHNvdXJjZTogdC5uYW1lXG4gICAgICAgICAgfSwgZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KSwgdC5mb3J3YXJkKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXJyb3JFeGNoYW5nZShlKSB7XG4gIHZhciB0ID0gZS5vbkVycm9yO1xuICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgIHZhciByID0gZS5mb3J3YXJkO1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICByZXR1cm4gUygoZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgciA9IGUuZXJyb3I7XG4gICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgdChyLCBlLm9wZXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pKShyKGUpKTtcbiAgICB9O1xuICB9O1xufVxuXG52YXIgUSA9IFsgZGVkdXBFeGNoYW5nZSwgY2FjaGVFeGNoYW5nZSwgZmV0Y2hFeGNoYW5nZSBdO1xuXG5mdW5jdGlvbiBjcmVhdGVDbGllbnQoZSkge1xuICByZXR1cm4gbmV3IENsaWVudChlKTtcbn1cblxuZnVuY3Rpb24gQ2xpZW50KGUpIHtcbiAgdmFyIHQgPSB0aGlzO1xuICB0aGlzLmFjdGl2ZU9wZXJhdGlvbnMgPSBuZXcgTWFwO1xuICB0aGlzLnF1ZXVlID0gW107XG4gIHRoaXMuY3JlYXRlT3BlcmF0aW9uQ29udGV4dCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoIWUpIHtcbiAgICAgIGUgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIGkoe30sIHtcbiAgICAgIHVybDogdC51cmwsXG4gICAgICBmZXRjaE9wdGlvbnM6IHQuZmV0Y2hPcHRpb25zLFxuICAgICAgZmV0Y2g6IHQuZmV0Y2gsXG4gICAgICBwcmVmZXJHZXRNZXRob2Q6IHQucHJlZmVyR2V0TWV0aG9kXG4gICAgfSwgZSwge1xuICAgICAgc3VzcGVuc2U6IGUuc3VzcGVuc2UgfHwgITEgIT09IGUuc3VzcGVuc2UgJiYgdC5zdXNwZW5zZSxcbiAgICAgIHJlcXVlc3RQb2xpY3k6IGUucmVxdWVzdFBvbGljeSB8fCB0LnJlcXVlc3RQb2xpY3lcbiAgICB9KTtcbiAgfTtcbiAgdGhpcy5jcmVhdGVSZXF1ZXN0T3BlcmF0aW9uID0gZnVuY3Rpb24oZSwgciwgbikge1xuICAgIHJldHVybiBtYWtlT3BlcmF0aW9uKGUsIHIsIHQuY3JlYXRlT3BlcmF0aW9uQ29udGV4dChuKSk7XG4gIH07XG4gIHRoaXMuZXhlY3V0ZVF1ZXJ5ID0gZnVuY3Rpb24oZSwgcikge1xuICAgIHZhciBuID0gdC5jcmVhdGVSZXF1ZXN0T3BlcmF0aW9uKFwicXVlcnlcIiwgZSwgcik7XG4gICAgcmV0dXJuIHQuZXhlY3V0ZVJlcXVlc3RPcGVyYXRpb24obik7XG4gIH07XG4gIHRoaXMuZXhlY3V0ZVN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uKGUsIHIpIHtcbiAgICB2YXIgbiA9IHQuY3JlYXRlUmVxdWVzdE9wZXJhdGlvbihcInN1YnNjcmlwdGlvblwiLCBlLCByKTtcbiAgICByZXR1cm4gdC5leGVjdXRlUmVxdWVzdE9wZXJhdGlvbihuKTtcbiAgfTtcbiAgdGhpcy5leGVjdXRlTXV0YXRpb24gPSBmdW5jdGlvbihlLCByKSB7XG4gICAgdmFyIG4gPSB0LmNyZWF0ZVJlcXVlc3RPcGVyYXRpb24oXCJtdXRhdGlvblwiLCBlLCByKTtcbiAgICByZXR1cm4gdC5leGVjdXRlUmVxdWVzdE9wZXJhdGlvbihuKTtcbiAgfTtcbiAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiAhZS51cmwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgYXJlIGNyZWF0aW5nIGFuIHVycWwtY2xpZW50IHdpdGhvdXQgYSB1cmwuXCIpO1xuICB9XG4gIHZhciByID0gbm9vcDtcbiAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgIHZhciBuID0gTSgpO1xuICAgIHZhciBhID0gbi5uZXh0O1xuICAgIHZhciBvID0gbi5zb3VyY2U7XG4gICAgdGhpcy5zdWJzY3JpYmVUb0RlYnVnVGFyZ2V0ID0gZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIGIoZSkobyk7XG4gICAgfTtcbiAgICByID0gYTtcbiAgfVxuICB0aGlzLnVybCA9IGUudXJsO1xuICB0aGlzLmZldGNoT3B0aW9ucyA9IGUuZmV0Y2hPcHRpb25zO1xuICB0aGlzLmZldGNoID0gZS5mZXRjaDtcbiAgdGhpcy5zdXNwZW5zZSA9ICEhZS5zdXNwZW5zZTtcbiAgdGhpcy5yZXF1ZXN0UG9saWN5ID0gZS5yZXF1ZXN0UG9saWN5IHx8IFwiY2FjaGUtZmlyc3RcIjtcbiAgdGhpcy5wcmVmZXJHZXRNZXRob2QgPSAhIWUucHJlZmVyR2V0TWV0aG9kO1xuICB0aGlzLm1hc2tUeXBlbmFtZSA9ICEhZS5tYXNrVHlwZW5hbWU7XG4gIHZhciB1ID0gTSgpO1xuICB2YXIgcyA9IHUubmV4dDtcbiAgdGhpcy5vcGVyYXRpb25zJCA9IHUuc291cmNlO1xuICB2YXIgYyA9ICExO1xuICB0aGlzLmRpc3BhdGNoT3BlcmF0aW9uID0gZnVuY3Rpb24oZSkge1xuICAgIGMgPSAhMDtcbiAgICBpZiAoZSkge1xuICAgICAgcyhlKTtcbiAgICB9XG4gICAgd2hpbGUgKGUgPSB0LnF1ZXVlLnNoaWZ0KCkpIHtcbiAgICAgIHMoZSk7XG4gICAgfVxuICAgIGMgPSAhMTtcbiAgfTtcbiAgdGhpcy5yZWV4ZWN1dGVPcGVyYXRpb24gPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKFwibXV0YXRpb25cIiA9PT0gZS5raW5kIHx8IHQuYWN0aXZlT3BlcmF0aW9ucy5oYXMoZS5rZXkpKSB7XG4gICAgICB0LnF1ZXVlLnB1c2goZSk7XG4gICAgICBpZiAoIWMpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbih0LmRpc3BhdGNoT3BlcmF0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHZhciBwID0gY29tcG9zZUV4Y2hhbmdlcyh2b2lkIDAgIT09IGUuZXhjaGFuZ2VzID8gZS5leGNoYW5nZXMgOiBRKTtcbiAgdGhpcy5yZXN1bHRzJCA9IGsocCh7XG4gICAgY2xpZW50OiB0aGlzLFxuICAgIGRpc3BhdGNoRGVidWc6IHIsXG4gICAgZm9yd2FyZDogZmFsbGJhY2tFeGNoYW5nZSh7XG4gICAgICBkaXNwYXRjaERlYnVnOiByXG4gICAgfSlcbiAgfSkodGhpcy5vcGVyYXRpb25zJCkpO1xuICBBKHRoaXMucmVzdWx0cyQpO1xufVxuXG5DbGllbnQucHJvdG90eXBlLmV4ZWN1dGVSZXF1ZXN0T3BlcmF0aW9uID0gZnVuY3Rpb24gZXhlY3V0ZVJlcXVlc3RPcGVyYXRpb24oZSkge1xuICB2YXIgdCA9IHRoaXM7XG4gIHZhciByID0gdGhpcy5hY3RpdmVPcGVyYXRpb25zLmdldChlLmtleSk7XG4gIGlmIChyKSB7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgdmFyIG4gPSBOKChmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIHQub3BlcmF0aW9uLmtleSA9PT0gZS5rZXk7XG4gIH0pKSh0aGlzLnJlc3VsdHMkKTtcbiAgaWYgKHRoaXMubWFza1R5cGVuYW1lKSB7XG4gICAgbiA9IF8oKGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiBpKHt9LCBlLCB7XG4gICAgICAgIGRhdGE6IG1hc2tUeXBlbmFtZShlLmRhdGEpXG4gICAgICB9KTtcbiAgICB9KSkobik7XG4gIH1cbiAgaWYgKFwibXV0YXRpb25cIiA9PT0gZS5raW5kKSB7XG4gICAgcmV0dXJuIEQoMSkocSgoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdC5kaXNwYXRjaE9wZXJhdGlvbihlKTtcbiAgICB9KSkobikpO1xuICB9XG4gIHZhciBhID0gTigoZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBcInRlYXJkb3duXCIgPT09IHQua2luZCAmJiB0LmtleSA9PT0gZS5rZXk7XG4gIH0pKSh0aGlzLm9wZXJhdGlvbnMkKTtcbiAgdmFyIG8gPSBEKDEpKE4oKGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gdC5raW5kID09PSBlLmtpbmQgJiYgdC5rZXkgPT09IGUua2V5ICYmIChcIm5ldHdvcmstb25seVwiID09PSB0LmNvbnRleHQucmVxdWVzdFBvbGljeSB8fCBcImNhY2hlLWFuZC1uZXR3b3JrXCIgPT09IHQuY29udGV4dC5yZXF1ZXN0UG9saWN5KTtcbiAgfSkpKHRoaXMub3BlcmF0aW9ucyQpKTtcbiAgbiA9IEUoKGZ1bmN0aW9uKCkge1xuICAgIHQuYWN0aXZlT3BlcmF0aW9ucy5kZWxldGUoZS5rZXkpO1xuICAgIGZvciAodmFyIHIgPSB0LnF1ZXVlLmxlbmd0aCAtIDE7IHIgPj0gMDsgci0tKSB7XG4gICAgICBpZiAodC5xdWV1ZVtyXS5rZXkgPT09IGUua2V5KSB7XG4gICAgICAgIHQucXVldWUuc3BsaWNlKHIsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0LmRpc3BhdGNoT3BlcmF0aW9uKG1ha2VPcGVyYXRpb24oXCJ0ZWFyZG93blwiLCBlLCBlLmNvbnRleHQpKTtcbiAgfSkpKFYoKGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS5zdGFsZSkge1xuICAgICAgcmV0dXJuIGooZSk7XG4gICAgfVxuICAgIHJldHVybiBUKFsgaihlKSwgXygoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaSh7fSwgZSwge1xuICAgICAgICBzdGFsZTogITBcbiAgICAgIH0pO1xuICAgIH0pKShvKSBdKTtcbiAgfSkpKFAoYSkobikpKTtcbiAgaWYgKFwic3Vic2NyaXB0aW9uXCIgPT09IGUua2luZCkge1xuICAgIHIgPSBrKHEoKGZ1bmN0aW9uKCkge1xuICAgICAgdC5hY3RpdmVPcGVyYXRpb25zLnNldChlLmtleSwgcik7XG4gICAgICB0LmRpc3BhdGNoT3BlcmF0aW9uKGUpO1xuICAgIH0pKShuKSk7XG4gIH0gZWxzZSB7XG4gICAgciA9IGZ1bmN0aW9uIHJlcGxheU9uU3RhcnQoZSwgdCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgdmFyIG47XG4gICAgICAgIHZhciBhID0gayh4KChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgbiA9IGU7XG4gICAgICAgIH0pKShFKChmdW5jdGlvbigpIHtcbiAgICAgICAgICBuID0gdm9pZCAwO1xuICAgICAgICB9KSkocikpKTtcbiAgICAgICAgcmV0dXJuIE8oKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICB2YXIgbyA9IG47XG4gICAgICAgICAgcmV0dXJuIGIoci5uZXh0KShxKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChcInByZVwiID09PSBlKSB7XG4gICAgICAgICAgICAgIHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IG8gJiYgbyA9PT0gbikge1xuICAgICAgICAgICAgICByLm5leHQoXCJwcmVcIiA9PT0gZSA/IGkoe30sIG8sIHtcbiAgICAgICAgICAgICAgICBzdGFsZTogITBcbiAgICAgICAgICAgICAgfSkgOiBvKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJwb3N0XCIgPT09IGUpIHtcbiAgICAgICAgICAgICAgdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKShFKHIuY29tcGxldGUpKGEpKSkudW5zdWJzY3JpYmU7XG4gICAgICAgIH0pKTtcbiAgICAgIH07XG4gICAgfShcImNhY2hlLWFuZC1uZXR3b3JrXCIgPT09IGUuY29udGV4dC5yZXF1ZXN0UG9saWN5IHx8IFwibmV0d29yay1vbmx5XCIgPT09IGUuY29udGV4dC5yZXF1ZXN0UG9saWN5ID8gXCJwcmVcIiA6IFwicG9zdFwiLCAoZnVuY3Rpb24oKSB7XG4gICAgICB0LmFjdGl2ZU9wZXJhdGlvbnMuc2V0KGUua2V5LCByKTtcbiAgICAgIHQuZGlzcGF0Y2hPcGVyYXRpb24oZSk7XG4gICAgfSkpKG4pO1xuICB9XG4gIHJldHVybiByO1xufTtcblxuQ2xpZW50LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIHF1ZXJ5KGUsIHQsIHIpIHtcbiAgaWYgKCFyIHx8IFwiYm9vbGVhblwiICE9IHR5cGVvZiByLnN1c3BlbnNlKSB7XG4gICAgciA9IGkoe30sIHIsIHtcbiAgICAgIHN1c3BlbnNlOiAhMVxuICAgIH0pO1xuICB9XG4gIHJldHVybiB3aXRoUHJvbWlzZSh0aGlzLmV4ZWN1dGVRdWVyeSh5KGUsIHQpLCByKSk7XG59O1xuXG5DbGllbnQucHJvdG90eXBlLnJlYWRRdWVyeSA9IGZ1bmN0aW9uIHJlYWRRdWVyeShlLCB0LCByKSB7XG4gIHZhciBuID0gbnVsbDtcbiAgYigoZnVuY3Rpb24oZSkge1xuICAgIG4gPSBlO1xuICB9KSkodGhpcy5xdWVyeShlLCB0LCByKSkudW5zdWJzY3JpYmUoKTtcbiAgcmV0dXJuIG47XG59O1xuXG5DbGllbnQucHJvdG90eXBlLnN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIHN1YnNjcmlwdGlvbihlLCB0LCByKSB7XG4gIHJldHVybiB0aGlzLmV4ZWN1dGVTdWJzY3JpcHRpb24oeShlLCB0KSwgcik7XG59O1xuXG5DbGllbnQucHJvdG90eXBlLm11dGF0aW9uID0gZnVuY3Rpb24gbXV0YXRpb24oZSwgdCwgcikge1xuICByZXR1cm4gd2l0aFByb21pc2UodGhpcy5leGVjdXRlTXV0YXRpb24oeShlLCB0KSwgcikpO1xufTtcblxuZXhwb3J0IHsgQ2xpZW50LCBjYWNoZUV4Y2hhbmdlLCBjb21wb3NlRXhjaGFuZ2VzLCBjcmVhdGVDbGllbnQsIGRlYnVnRXhjaGFuZ2UsIGRlZHVwRXhjaGFuZ2UsIFEgYXMgZGVmYXVsdEV4Y2hhbmdlcywgZXJyb3JFeGNoYW5nZSwgJCBhcyBmYWxsYmFja0V4Y2hhbmdlSU8sIGZldGNoRXhjaGFuZ2UsIGZvcm1hdERvY3VtZW50LCBncWwsIG1ha2VPcGVyYXRpb24sIG1hc2tUeXBlbmFtZSwgc3NyRXhjaGFuZ2UsIHN1YnNjcmlwdGlvbkV4Y2hhbmdlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11cnFsLWNvcmUubWpzLm1hcFxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIHJldHVybiAoX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICBmb3IgKHZhciBlID0gMTsgZSA8IGFyZ3VtZW50cy5sZW5ndGg7IGUrKykge1xuICAgICAgdmFyIG4gPSBhcmd1bWVudHNbZV07XG4gICAgICBmb3IgKHZhciByIGluIG4pIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLCByKSkge1xuICAgICAgICAgIHRbcl0gPSBuW3JdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgeyBfZXh0ZW5kcyBhcyBfIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD01MzAxY2NkMi5tanMubWFwXG4iLCJpbXBvcnQgeyBzdHJpbmdpZnlWYXJpYWJsZXMgYXMgZSwgY3JlYXRlUmVxdWVzdCBhcyB0LCBmb3JtYXREb2N1bWVudCBhcyByLCBtYWtlT3BlcmF0aW9uIGFzIGkgfSBmcm9tIFwiQHVycWwvY29yZVwiO1xuXG5pbXBvcnQgeyBzaGFyZSBhcyBuLCBtZXJnZU1hcCBhcyBhLCBmcm9tQXJyYXkgYXMgbywgdGFrZSBhcyBzLCBjb21iaW5lIGFzIHUsIHNjYW4gYXMgYywgZnJvbVByb21pc2UgYXMgbCwgZW1wdHkgYXMgZCwgY29uY2F0IGFzIGYsIG1hcCBhcyBwLCBmaWx0ZXIgYXMgdiwgbWVyZ2UgYXMgeSwgbWFrZVN1YmplY3QgYXMgbSB9IGZyb20gXCJ3b25rYVwiO1xuXG5pbXBvcnQgeyBfIGFzIGggfSBmcm9tIFwiLi81MzAxY2NkMi5tanNcIjtcblxuaW1wb3J0IHsgS2luZCBhcyBnIH0gZnJvbSBcImdyYXBocWwvbGFuZ3VhZ2Uva2luZHMubWpzXCI7XG5cbmltcG9ydCB7IHZhbHVlRnJvbUFTVFVudHlwZWQgYXMgTiB9IGZyb20gXCJncmFwaHFsL3V0aWxpdGllcy92YWx1ZUZyb21BU1RVbnR5cGVkLm1qc1wiO1xuXG5pbXBvcnQgeyBwcmludCBhcyBrIH0gZnJvbSBcImdyYXBocWwvbGFuZ3VhZ2UvcHJpbnRlci5tanNcIjtcblxuZnVuY3Rpb24gZ2V0TmFtZShlKSB7XG4gIHJldHVybiBlLm5hbWUudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldEZyYWdtZW50VHlwZU5hbWUoZSkge1xuICByZXR1cm4gZS50eXBlQ29uZGl0aW9uLm5hbWUudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldEZpZWxkQWxpYXMoZSkge1xuICByZXR1cm4gZS5hbGlhcyA/IGUuYWxpYXMudmFsdWUgOiBnZXROYW1lKGUpO1xufVxuXG5mdW5jdGlvbiBnZXRTZWxlY3Rpb25TZXQoZSkge1xuICByZXR1cm4gZS5zZWxlY3Rpb25TZXQgPyBlLnNlbGVjdGlvblNldC5zZWxlY3Rpb25zIDogW107XG59XG5cbmZ1bmN0aW9uIGdldFR5cGVDb25kaXRpb24oZSkge1xuICByZXR1cm4gZS50eXBlQ29uZGl0aW9uID8gZ2V0TmFtZShlLnR5cGVDb25kaXRpb24pIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNGaWVsZE5vZGUoZSkge1xuICByZXR1cm4gZS5raW5kID09PSBnLkZJRUxEO1xufVxuXG5mdW5jdGlvbiBpc0lubGluZUZyYWdtZW50KGUpIHtcbiAgcmV0dXJuIGUua2luZCA9PT0gZy5JTkxJTkVfRlJBR01FTlQ7XG59XG5cbmZ1bmN0aW9uIGdldEZpZWxkQXJndW1lbnRzKGUsIHQpIHtcbiAgdmFyIHIgPSB7fTtcbiAgdmFyIGkgPSAwO1xuICBpZiAoZS5hcmd1bWVudHMgJiYgZS5hcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgZm9yICh2YXIgbiA9IDAsIGEgPSBlLmFyZ3VtZW50cy5sZW5ndGg7IG4gPCBhOyBuKyspIHtcbiAgICAgIHZhciBvID0gZS5hcmd1bWVudHNbbl07XG4gICAgICB2YXIgcyA9IE4oby52YWx1ZSwgdCk7XG4gICAgICBpZiAobnVsbCAhPSBzKSB7XG4gICAgICAgIHJbZ2V0TmFtZShvKV0gPSBzO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBpID4gMCA/IHIgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJWYXJpYWJsZXMoZSwgdCkge1xuICBpZiAoIXQgfHwgIWUudmFyaWFibGVEZWZpbml0aW9ucykge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgciA9IHt9O1xuICBmb3IgKHZhciBpID0gMCwgbiA9IGUudmFyaWFibGVEZWZpbml0aW9ucy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICB2YXIgYSA9IGdldE5hbWUoZS52YXJpYWJsZURlZmluaXRpb25zW2ldLnZhcmlhYmxlKTtcbiAgICByW2FdID0gdFthXTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVmFyaWFibGVzKGUsIHQpIHtcbiAgdmFyIHIgPSB7fTtcbiAgaWYgKCF0KSB7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgaWYgKGUudmFyaWFibGVEZWZpbml0aW9ucykge1xuICAgIGZvciAodmFyIGkgPSAwLCBuID0gZS52YXJpYWJsZURlZmluaXRpb25zLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgdmFyIGEgPSBlLnZhcmlhYmxlRGVmaW5pdGlvbnNbaV07XG4gICAgICB2YXIgbyA9IGdldE5hbWUoYS52YXJpYWJsZSk7XG4gICAgICByW29dID0gdm9pZCAwID09PSB0W29dICYmIGEuZGVmYXVsdFZhbHVlID8gTihhLmRlZmF1bHRWYWx1ZSwgdCkgOiB0W29dO1xuICAgIH1cbiAgfVxuICBmb3IgKHZhciBzIGluIHQpIHtcbiAgICBpZiAoIShzIGluIHIpKSB7XG4gICAgICByW3NdID0gdFtzXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbnZhciBPID0gXCJcXG5odHRwczovL2JpdC5seS8yWGJWcnBSI1wiO1xuXG52YXIgXyA9IG5ldyBTZXQ7XG5cbnZhciBFID0gW107XG5cbmZ1bmN0aW9uIHBvcERlYnVnTm9kZSgpIHtcbiAgcmV0dXJuIEUucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHB1c2hEZWJ1Z05vZGUoZSwgdCkge1xuICB2YXIgciA9IFwiXCI7XG4gIGlmICh0LmtpbmQgPT09IGcuSU5MSU5FX0ZSQUdNRU5UKSB7XG4gICAgciA9IGUgPyAnSW5saW5lIEZyYWdtZW50IG9uIFwiJyArIGUgKyAnXCInIDogXCJJbmxpbmUgRnJhZ21lbnRcIjtcbiAgfSBlbHNlIGlmICh0LmtpbmQgPT09IGcuT1BFUkFUSU9OX0RFRklOSVRJT04pIHtcbiAgICByID0gKHQubmFtZSA/ICdcIicgKyB0Lm5hbWUudmFsdWUgKyAnXCInIDogXCJVbm5hbWVkXCIpICsgXCIgXCIgKyB0Lm9wZXJhdGlvbjtcbiAgfSBlbHNlIGlmICh0LmtpbmQgPT09IGcuRlJBR01FTlRfREVGSU5JVElPTikge1xuICAgIHIgPSAnXCInICsgdC5uYW1lLnZhbHVlICsgJ1wiIEZyYWdtZW50JztcbiAgfVxuICBpZiAocikge1xuICAgIEUucHVzaChyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWJ1Z091dHB1dCgpIHtcbiAgcmV0dXJuIEUubGVuZ3RoID8gXCJcXG4oQ2F1c2VkIEF0OiBcIiArIEUuam9pbihcIiwgXCIpICsgXCIpXCIgOiBcIlwiO1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoZSwgdCwgcikge1xuICBpZiAoIWUpIHtcbiAgICB2YXIgaSA9IHQgfHwgXCJNaW5maWVkIEVycm9yICNcIiArIHIgKyBcIlxcblwiO1xuICAgIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICAgIGkgKz0gZ2V0RGVidWdPdXRwdXQoKTtcbiAgICB9XG4gICAgdmFyIG4gPSBuZXcgRXJyb3IoaSArIE8gKyByKTtcbiAgICBuLm5hbWUgPSBcIkdyYXBoY2FjaGUgRXJyb3JcIjtcbiAgICB0aHJvdyBuO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdhcm4oZSwgdCkge1xuICBpZiAoIV8uaGFzKGUpKSB7XG4gICAgY29uc29sZS53YXJuKGUgKyBnZXREZWJ1Z091dHB1dCgpICsgTyArIHQpO1xuICAgIF8uYWRkKGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldE1haW5PcGVyYXRpb24oZSkge1xuICBmb3IgKHZhciB0ID0gMDsgdCA8IGUuZGVmaW5pdGlvbnMubGVuZ3RoOyB0KyspIHtcbiAgICBpZiAoZS5kZWZpbml0aW9uc1t0XS5raW5kID09PSBnLk9QRVJBVElPTl9ERUZJTklUSU9OKSB7XG4gICAgICByZXR1cm4gZS5kZWZpbml0aW9uc1t0XTtcbiAgICB9XG4gIH1cbiAgaW52YXJpYW50KCExLCBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPyBcIkludmFsaWQgR3JhcGhRTCBkb2N1bWVudDogQWxsIEdyYXBoUUwgZG9jdW1lbnRzIG11c3QgY29udGFpbiBhbiBPcGVyYXRpb25EZWZpbml0aW9ubm9kZSBmb3IgYSBxdWVyeSwgc3Vic2NyaXB0aW9uLCBvciBtdXRhdGlvbi5cIiA6IFwiXCIsIDEpO1xufVxuXG5mdW5jdGlvbiBnZXRGcmFnbWVudHMoZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciByID0gMDsgciA8IGUuZGVmaW5pdGlvbnMubGVuZ3RoOyByKyspIHtcbiAgICB2YXIgaSA9IGUuZGVmaW5pdGlvbnNbcl07XG4gICAgaWYgKGkua2luZCA9PT0gZy5GUkFHTUVOVF9ERUZJTklUSU9OKSB7XG4gICAgICB0W2dldE5hbWUoaSldID0gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIHNob3VsZEluY2x1ZGUoZSwgdCkge1xuICB2YXIgciA9IGUuZGlyZWN0aXZlcztcbiAgaWYgKCFyKSB7XG4gICAgcmV0dXJuICEwO1xuICB9XG4gIGZvciAodmFyIGkgPSAwLCBuID0gci5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICB2YXIgYSA9IHJbaV07XG4gICAgdmFyIG8gPSBnZXROYW1lKGEpO1xuICAgIGlmICgoXCJpbmNsdWRlXCIgPT09IG8gfHwgXCJza2lwXCIgPT09IG8pICYmIGEuYXJndW1lbnRzICYmIGEuYXJndW1lbnRzWzBdICYmIFwiaWZcIiA9PT0gZ2V0TmFtZShhLmFyZ3VtZW50c1swXSkpIHtcbiAgICAgIHZhciBzID0gTihhLmFyZ3VtZW50c1swXS52YWx1ZSwgdCk7XG4gICAgICByZXR1cm4gXCJpbmNsdWRlXCIgPT09IG8gPyAhIXMgOiAhcztcbiAgICB9XG4gIH1cbiAgcmV0dXJuICEwO1xufVxuXG52YXIgYiA9IC9eX18vO1xuXG5mdW5jdGlvbiBpc0ZpZWxkTnVsbGFibGUoZSwgdCwgcikge1xuICBpZiAoYi50ZXN0KHIpKSB7XG4gICAgcmV0dXJuICEwO1xuICB9XG4gIHZhciBpID0gZ2V0RmllbGQoZSwgdCwgcik7XG4gIHJldHVybiAhIWkgJiYgXCJOT05fTlVMTFwiICE9PSBpLnR5cGUua2luZDtcbn1cblxuZnVuY3Rpb24gaXNMaXN0TnVsbGFibGUoZSwgdCwgcikge1xuICB2YXIgaSA9IGdldEZpZWxkKGUsIHQsIHIpO1xuICBpZiAoIWkpIHtcbiAgICByZXR1cm4gITE7XG4gIH1cbiAgdmFyIG4gPSBcIk5PTl9OVUxMXCIgPT09IGkudHlwZS5raW5kID8gaS50eXBlLm9mVHlwZSA6IGkudHlwZTtcbiAgcmV0dXJuIFwiTElTVFwiID09PSBuLmtpbmQgJiYgXCJOT05fTlVMTFwiICE9PSBuLm9mVHlwZS5raW5kO1xufVxuXG5mdW5jdGlvbiBpc0ZpZWxkQXZhaWxhYmxlT25UeXBlKGUsIHQsIHIpIHtcbiAgaWYgKGIudGVzdChyKSkge1xuICAgIHJldHVybiAhMDtcbiAgfVxuICByZXR1cm4gISFnZXRGaWVsZChlLCB0LCByKTtcbn1cblxuZnVuY3Rpb24gaXNJbnRlcmZhY2VPZlR5cGUoZSwgdCwgcikge1xuICBpZiAoIXIpIHtcbiAgICByZXR1cm4gITE7XG4gIH1cbiAgdmFyIGkgPSBnZXRUeXBlQ29uZGl0aW9uKHQpO1xuICBpZiAoIWkgfHwgciA9PT0gaSkge1xuICAgIHJldHVybiAhMDtcbiAgfVxuICBpZiAoZS50eXBlc1tpXSAmJiBcIk9CSkVDVFwiID09PSBlLnR5cGVzW2ldLmtpbmQpIHtcbiAgICByZXR1cm4gaSA9PT0gcjtcbiAgfVxuICAhZnVuY3Rpb24gZXhwZWN0QWJzdHJhY3RUeXBlKGUsIHQpIHtcbiAgICBpbnZhcmlhbnQoZS50eXBlc1t0XSAmJiAoXCJJTlRFUkZBQ0VcIiA9PT0gZS50eXBlc1t0XS5raW5kIHx8IFwiVU5JT05cIiA9PT0gZS50eXBlc1t0XS5raW5kKSwgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WID8gXCJJbnZhbGlkIEFic3RyYWN0IHR5cGU6IFRoZSB0eXBlIGBcIiArIHQgKyBcImAgaXMgbm90IGFuIEludGVyZmFjZSBvciBVbmlvbiB0eXBlIGluIHRoZSBkZWZpbmVkIHNjaGVtYSwgYnV0IGEgZnJhZ21lbnQgaW4gdGhlIEdyYXBoUUwgZG9jdW1lbnQgaXMgdXNpbmcgaXQgYXMgYSB0eXBlIGNvbmRpdGlvbi5cIiA6IFwiXCIsIDUpO1xuICB9KGUsIGkpO1xuICBleHBlY3RPYmplY3RUeXBlKGUsIHIpO1xuICByZXR1cm4gZS5pc1N1YlR5cGUoaSwgcik7XG59XG5cbmZ1bmN0aW9uIGdldEZpZWxkKGUsIHQsIHIpIHtcbiAgZXhwZWN0T2JqZWN0VHlwZShlLCB0KTtcbiAgdmFyIGkgPSBlLnR5cGVzW3RdLmZpZWxkc1tyXTtcbiAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgIGlmICghaSkge1xuICAgICAgd2FybihcIkludmFsaWQgZmllbGQ6IFRoZSBmaWVsZCBgXCIgKyByICsgXCJgIGRvZXMgbm90IGV4aXN0IG9uIGBcIiArIHQgKyBcImAsIGJ1dCB0aGUgR3JhcGhRTCBkb2N1bWVudCBleHBlY3RzIGl0IHRvIGV4aXN0LlxcblRyYXZlcnNhbCB3aWxsIGNvbnRpbnVlLCBob3dldmVyIHRoaXMgbWF5IGxlYWQgdG8gdW5kZWZpbmVkIGJlaGF2aW9yIVwiLCA0KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGk7XG59XG5cbmZ1bmN0aW9uIGV4cGVjdE9iamVjdFR5cGUoZSwgdCkge1xuICBpbnZhcmlhbnQoZS50eXBlc1t0XSAmJiBcIk9CSkVDVFwiID09PSBlLnR5cGVzW3RdLmtpbmQsIFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViA/IFwiSW52YWxpZCBPYmplY3QgdHlwZTogVGhlIHR5cGUgYFwiICsgdCArIFwiYCBpcyBub3QgYW4gb2JqZWN0IGluIHRoZSBkZWZpbmVkIHNjaGVtYSwgYnV0IHRoZSBHcmFwaFFMIGRvY3VtZW50IGlzIHRyYXZlcnNpbmcgaXQuXCIgOiBcIlwiLCAzKTtcbn1cblxuZnVuY3Rpb24gd2FybkFib3V0UmVzb2x2ZXIoZSkge1xuICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgd2FybihcIkludmFsaWQgcmVzb2x2ZXI6IGBcIiArIGUgKyBcImAgaXMgbm90IGluIHRoZSBkZWZpbmVkIHNjaGVtYSwgYnV0IHRoZSBgcmVzb2x2ZXJzYCBvcHRpb24gaXMgcmVmZXJlbmNpbmcgaXQuXCIsIDIzKTtcbn1cblxuZnVuY3Rpb24ga2V5T2ZGaWVsZCh0LCByKSB7XG4gIHJldHVybiByID8gdCArIFwiKFwiICsgZShyKSArIFwiKVwiIDogdDtcbn1cblxuZnVuY3Rpb24gam9pbktleXMoZSwgdCkge1xuICByZXR1cm4gZSArIFwiLlwiICsgdDtcbn1cblxuZnVuY3Rpb24gZmllbGRJbmZvT2ZLZXkoZSkge1xuICB2YXIgdCA9IGUuaW5kZXhPZihcIihcIik7XG4gIGlmICh0ID4gLTEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGRLZXk6IGUsXG4gICAgICBmaWVsZE5hbWU6IGUuc2xpY2UoMCwgdCksXG4gICAgICBhcmd1bWVudHM6IEpTT04ucGFyc2UoZS5zbGljZSh0ICsgMSwgLTEpKVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkS2V5OiBlLFxuICAgICAgZmllbGROYW1lOiBlLFxuICAgICAgYXJndW1lbnRzOiBudWxsXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZUtleUluZm8oZSkge1xuICB2YXIgdCA9IGUuaW5kZXhPZihcIi5cIik7XG4gIHJldHVybiB7XG4gICAgZW50aXR5S2V5OiBlLnNsaWNlKDAsIHQpLnJlcGxhY2UoLyUyZS9nLCBcIi5cIiksXG4gICAgZmllbGRLZXk6IGUuc2xpY2UodCArIDEpXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VEaWN0KCkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cblxudmFyIHcgPSBudWxsO1xuXG52YXIgRCA9IG51bGw7XG5cbnZhciBGID0gbnVsbDtcblxudmFyIFMgPSBudWxsO1xuXG52YXIgTCA9ICExO1xuXG5mdW5jdGlvbiBtYWtlTm9kZU1hcCgpIHtcbiAgcmV0dXJuIHtcbiAgICBvcHRpbWlzdGljOiBtYWtlRGljdCgpLFxuICAgIGJhc2U6IG5ldyBNYXBcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5pdERhdGFTdGF0ZShlLCB0LCByLCBpKSB7XG4gIHcgPSBlO1xuICBEID0gdDtcbiAgRiA9IG1ha2VEaWN0KCk7XG4gIEwgPSAhIWk7XG4gIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICBFLmxlbmd0aCA9IDA7XG4gIH1cbiAgaWYgKCFyKSB7XG4gICAgUyA9IG51bGw7XG4gIH0gZWxzZSBpZiAoaSB8fCB0Lm9wdGltaXN0aWNPcmRlci5sZW5ndGggPiAwKSB7XG4gICAgaWYgKCFpICYmICF0LmNvbW11dGF0aXZlS2V5cy5oYXMocikpIHtcbiAgICAgIHJlc2VydmVMYXllcih0LCByKTtcbiAgICB9IGVsc2UgaWYgKGkpIHtcbiAgICAgIHQuY29tbXV0YXRpdmVLZXlzLmRlbGV0ZShyKTtcbiAgICB9XG4gICAgUyA9IHI7XG4gICAgIWZ1bmN0aW9uIGNyZWF0ZUxheWVyKGUsIHQpIHtcbiAgICAgIGlmICgtMSA9PT0gZS5vcHRpbWlzdGljT3JkZXIuaW5kZXhPZih0KSkge1xuICAgICAgICBlLm9wdGltaXN0aWNPcmRlci51bnNoaWZ0KHQpO1xuICAgICAgfVxuICAgICAgaWYgKCFlLnJlZkxvY2tbdF0pIHtcbiAgICAgICAgZS5yZWZMb2NrW3RdID0gbWFrZURpY3QoKTtcbiAgICAgICAgZS5saW5rcy5vcHRpbWlzdGljW3RdID0gbmV3IE1hcDtcbiAgICAgICAgZS5yZWNvcmRzLm9wdGltaXN0aWNbdF0gPSBuZXcgTWFwO1xuICAgICAgfVxuICAgIH0odCwgcik7XG4gIH0gZWxzZSB7XG4gICAgUyA9IG51bGw7XG4gICAgZGVsZXRlTGF5ZXIodCwgcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJEYXRhU3RhdGUoKSB7XG4gIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICBnZXRDdXJyZW50RGVwZW5kZW5jaWVzKCk7XG4gIH1cbiAgdmFyIHQgPSBEO1xuICB2YXIgciA9IFM7XG4gIEwgPSAhMTtcbiAgUyA9IG51bGw7XG4gIGlmIChyICYmIHQub3B0aW1pc3RpY09yZGVyLmluZGV4T2YocikgPiAtMSkge1xuICAgIHZhciBpID0gdC5vcHRpbWlzdGljT3JkZXIubGVuZ3RoO1xuICAgIHdoaWxlICgtLWkgPj0gMCAmJiB0LnJlZkxvY2tbdC5vcHRpbWlzdGljT3JkZXJbaV1dICYmIHQuY29tbXV0YXRpdmVLZXlzLmhhcyh0Lm9wdGltaXN0aWNPcmRlcltpXSkpIHtcbiAgICAgIHNxdWFzaExheWVyKHQub3B0aW1pc3RpY09yZGVyW2ldKTtcbiAgICB9XG4gIH1cbiAgdyA9IG51bGw7XG4gIEQgPSBudWxsO1xuICBGID0gbnVsbDtcbiAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgIEUubGVuZ3RoID0gMDtcbiAgfVxuICBpZiAoXCJ0ZXN0XCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmICF0LmRlZmVyKSB7XG4gICAgdC5kZWZlciA9ICEwO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgaW5pdERhdGFTdGF0ZShcInJlYWRcIiwgdCwgbnVsbCk7XG4gICAgICAhZnVuY3Rpb24gZ2MoKSB7XG4gICAgICAgIEQuZ2MuZm9yRWFjaCgoZnVuY3Rpb24oZSwgdCwgcikge1xuICAgICAgICAgIGlmICgoRC5yZWZDb3VudFtlXSB8fCAwKSA+IDApIHtcbiAgICAgICAgICAgIHIuZGVsZXRlKGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKHZhciBpIGluIEQucmVmTG9jaykge1xuICAgICAgICAgICAgdmFyIG4gPSBELnJlZkxvY2tbaV07XG4gICAgICAgICAgICBpZiAoKG5bZV0gfHwgMCkgPiAwKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSBuW2VdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWxldGUgRC5yZWZDb3VudFtlXTtcbiAgICAgICAgICByLmRlbGV0ZShlKTtcbiAgICAgICAgICBELnJlY29yZHMuYmFzZS5kZWxldGUoZSk7XG4gICAgICAgICAgdmFyIGEgPSBELmxpbmtzLmJhc2UuZ2V0KGUpO1xuICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICBELmxpbmtzLmJhc2UuZGVsZXRlKGUpO1xuICAgICAgICAgICAgZm9yICh2YXIgbyBpbiBhKSB7XG4gICAgICAgICAgICAgIHVwZGF0ZVJDRm9yTGluayhyLCBELnJlZkNvdW50LCBhW29dLCAtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICB9KCk7XG4gICAgICAhZnVuY3Rpb24gcGVyc2lzdERhdGEoKSB7XG4gICAgICAgIGlmIChELnN0b3JhZ2UpIHtcbiAgICAgICAgICBMID0gITA7XG4gICAgICAgICAgdyA9IFwicmVhZFwiO1xuICAgICAgICAgIHZhciB0ID0gbWFrZURpY3QoKTtcbiAgICAgICAgICBELnBlcnNpc3QuZm9yRWFjaCgoZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgdmFyIGkgPSBkZXNlcmlhbGl6ZUtleUluZm8ocik7XG4gICAgICAgICAgICB2YXIgbiA9IGkuZW50aXR5S2V5O1xuICAgICAgICAgICAgdmFyIGEgPSBpLmZpZWxkS2V5O1xuICAgICAgICAgICAgdmFyIG87XG4gICAgICAgICAgICBpZiAodm9pZCAwICE9PSAobyA9IHJlYWRMaW5rKG4sIGEpKSkge1xuICAgICAgICAgICAgICB0W3JdID0gXCI6XCIgKyBlKG8pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2b2lkIDAgIT09IChvID0gcmVhZFJlY29yZChuLCBhKSkpIHtcbiAgICAgICAgICAgICAgdFtyXSA9IGUobyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0W3JdID0gdm9pZCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgICBMID0gITE7XG4gICAgICAgICAgRC5zdG9yYWdlLndyaXRlRGF0YSh0KTtcbiAgICAgICAgICBELnBlcnNpc3QuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgfSgpO1xuICAgICAgY2xlYXJEYXRhU3RhdGUoKTtcbiAgICAgIHQuZGVmZXIgPSAhMTtcbiAgICB9KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9vcERhdGFTdGF0ZShlLCB0LCByKSB7XG4gIGluaXREYXRhU3RhdGUoXCJyZWFkXCIsIGUsIHQsIHIpO1xuICBjbGVhckRhdGFTdGF0ZSgpO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50T3BlcmF0aW9uKCkge1xuICBpbnZhcmlhbnQobnVsbCAhPT0gdywgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WID8gXCJJbnZhbGlkIENhY2hlIGNhbGw6IFRoZSBjYWNoZSBtYXkgb25seSBiZSBhY2Nlc3NlZCBvciBtdXRhdGVkIGR1cmluZ29wZXJhdGlvbnMgbGlrZSB3cml0ZSBvciBxdWVyeSwgb3IgYXMgcGFydCBvZiBpdHMgcmVzb2x2ZXJzLCB1cGRhdGVycywgb3Igb3B0aW1pc3RpYyBjb25maWdzLlwiIDogXCJcIiwgMik7XG4gIHJldHVybiB3O1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50RGVwZW5kZW5jaWVzKCkge1xuICBpbnZhcmlhbnQobnVsbCAhPT0gRiwgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WID8gXCJJbnZhbGlkIENhY2hlIGNhbGw6IFRoZSBjYWNoZSBtYXkgb25seSBiZSBhY2Nlc3NlZCBvciBtdXRhdGVkIGR1cmluZ29wZXJhdGlvbnMgbGlrZSB3cml0ZSBvciBxdWVyeSwgb3IgYXMgcGFydCBvZiBpdHMgcmVzb2x2ZXJzLCB1cGRhdGVycywgb3Igb3B0aW1pc3RpYyBjb25maWdzLlwiIDogXCJcIiwgMik7XG4gIHJldHVybiBGO1xufVxuXG5mdW5jdGlvbiBzZXROb2RlKGUsIHQsIHIsIGkpIHtcbiAgdmFyIG4gPSBTID8gZS5vcHRpbWlzdGljW1NdIDogZS5iYXNlO1xuICB2YXIgYSA9IG4uZ2V0KHQpO1xuICBpZiAodm9pZCAwID09PSBhKSB7XG4gICAgbi5zZXQodCwgYSA9IG1ha2VEaWN0KCkpO1xuICB9XG4gIGlmICh2b2lkIDAgPT09IGkgJiYgIVMpIHtcbiAgICBkZWxldGUgYVtyXTtcbiAgfSBlbHNlIHtcbiAgICBhW3JdID0gaTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXROb2RlKGUsIHQsIHIpIHtcbiAgdmFyIGk7XG4gIHZhciBuID0gIUwgJiYgXCJyZWFkXCIgPT09IHcgJiYgUyAmJiBELmNvbW11dGF0aXZlS2V5cy5oYXMoUyk7XG4gIGZvciAodmFyIGEgPSAwLCBvID0gRC5vcHRpbWlzdGljT3JkZXIubGVuZ3RoOyBhIDwgbzsgYSsrKSB7XG4gICAgdmFyIHMgPSBELm9wdGltaXN0aWNPcmRlclthXTtcbiAgICB2YXIgdSA9IGUub3B0aW1pc3RpY1tzXTtcbiAgICBuID0gbiAmJiBzICE9PSBTO1xuICAgIGlmICh1ICYmICghbiB8fCAhRC5jb21tdXRhdGl2ZUtleXMuaGFzKHMpKSAmJiAoIUwgfHwgXCJ3cml0ZVwiID09PSB3IHx8IEQuY29tbXV0YXRpdmVLZXlzLmhhcyhzKSkgJiYgdm9pZCAwICE9PSAoaSA9IHUuZ2V0KHQpKSAmJiByIGluIGkpIHtcbiAgICAgIHJldHVybiBpW3JdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdm9pZCAwICE9PSAoaSA9IGUuYmFzZS5nZXQodCkpID8gaVtyXSA6IHZvaWQgMDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUkNGb3JFbnRpdHkoZSwgdCwgciwgaSkge1xuICB2YXIgbiA9IHZvaWQgMCAhPT0gdFtyXSA/IHRbcl0gOiAwO1xuICB2YXIgYSA9IHRbcl0gPSBuICsgaSB8IDA7XG4gIGlmICh2b2lkIDAgIT09IGUpIHtcbiAgICBpZiAoYSA8PSAwKSB7XG4gICAgICBlLmFkZChyKTtcbiAgICB9IGVsc2UgaWYgKG4gPD0gMCAmJiBhID4gMCkge1xuICAgICAgZS5kZWxldGUocik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVJDRm9yTGluayhlLCB0LCByLCBpKSB7XG4gIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiByKSB7XG4gICAgdXBkYXRlUkNGb3JFbnRpdHkoZSwgdCwgciwgaSk7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyKSkge1xuICAgIGZvciAodmFyIG4gPSAwLCBhID0gci5sZW5ndGg7IG4gPCBhOyBuKyspIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJbbl0pKSB7XG4gICAgICAgIHVwZGF0ZVJDRm9yTGluayhlLCB0LCByW25dLCBpKTtcbiAgICAgIH0gZWxzZSBpZiAocltuXSkge1xuICAgICAgICB1cGRhdGVSQ0ZvckVudGl0eShlLCB0LCByW25dLCBpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdE5vZGVGaWVsZHMoZSwgdCwgcikge1xuICBpZiAodm9pZCAwICE9PSByKSB7XG4gICAgZm9yICh2YXIgaSBpbiByKSB7XG4gICAgICBpZiAoIXQuaGFzKGkpKSB7XG4gICAgICAgIGUucHVzaChmaWVsZEluZm9PZktleShpKSk7XG4gICAgICAgIHQuYWRkKGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBleHRyYWN0Tm9kZU1hcEZpZWxkcyhlLCB0LCByLCBpKSB7XG4gIGV4dHJhY3ROb2RlRmllbGRzKGUsIHQsIGkuYmFzZS5nZXQocikpO1xuICBmb3IgKHZhciBuID0gMCwgYSA9IEQub3B0aW1pc3RpY09yZGVyLmxlbmd0aDsgbiA8IGE7IG4rKykge1xuICAgIHZhciBvID0gaS5vcHRpbWlzdGljW0Qub3B0aW1pc3RpY09yZGVyW25dXTtcbiAgICBpZiAodm9pZCAwICE9PSBvKSB7XG4gICAgICBleHRyYWN0Tm9kZUZpZWxkcyhlLCB0LCBvLmdldChyKSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURlcGVuZGVuY2llcyhlLCB0KSB7XG4gIGlmIChcIl9fdHlwZW5hbWVcIiAhPT0gdCkge1xuICAgIGlmIChlICE9PSBELnF1ZXJ5Um9vdEtleSkge1xuICAgICAgRltlXSA9ICEwO1xuICAgIH0gZWxzZSBpZiAodm9pZCAwICE9PSB0KSB7XG4gICAgICBGW2pvaW5LZXlzKGUsIHQpXSA9ICEwO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQZXJzaXN0KGUsIHQpIHtcbiAgaWYgKCFMICYmIEQuc3RvcmFnZSkge1xuICAgIEQucGVyc2lzdC5hZGQoZnVuY3Rpb24gc2VyaWFsaXplS2V5cyhlLCB0KSB7XG4gICAgICByZXR1cm4gZS5yZXBsYWNlKC9cXC4vZywgXCIlMmVcIikgKyBcIi5cIiArIHQ7XG4gICAgfShlLCB0KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVhZFJlY29yZChlLCB0KSB7XG4gIHVwZGF0ZURlcGVuZGVuY2llcyhlLCB0KTtcbiAgcmV0dXJuIGdldE5vZGUoRC5yZWNvcmRzLCBlLCB0KTtcbn1cblxuZnVuY3Rpb24gcmVhZExpbmsoZSwgdCkge1xuICB1cGRhdGVEZXBlbmRlbmNpZXMoZSwgdCk7XG4gIHJldHVybiBnZXROb2RlKEQubGlua3MsIGUsIHQpO1xufVxuXG5mdW5jdGlvbiB3cml0ZVJlY29yZChlLCB0LCByKSB7XG4gIHVwZGF0ZURlcGVuZGVuY2llcyhlLCB0KTtcbiAgdXBkYXRlUGVyc2lzdChlLCB0KTtcbiAgc2V0Tm9kZShELnJlY29yZHMsIGUsIHQsIHIpO1xufVxuXG5mdW5jdGlvbiB3cml0ZUxpbmsoZSwgdCwgcikge1xuICB2YXIgaSA9IEQ7XG4gIHZhciBuO1xuICB2YXIgYTtcbiAgdmFyIG87XG4gIGlmIChTKSB7XG4gICAgbiA9IGkucmVmTG9ja1tTXSB8fCAoaS5yZWZMb2NrW1NdID0gbWFrZURpY3QoKSk7XG4gICAgYSA9IGkubGlua3Mub3B0aW1pc3RpY1tTXTtcbiAgfSBlbHNlIHtcbiAgICBuID0gaS5yZWZDb3VudDtcbiAgICBhID0gaS5saW5rcy5iYXNlO1xuICAgIG8gPSBpLmdjO1xuICB9XG4gIHZhciBzID0gYSAmJiBhLmdldChlKTtcbiAgdmFyIHUgPSBzICYmIHNbdF07XG4gIHVwZGF0ZURlcGVuZGVuY2llcyhlLCB0KTtcbiAgdXBkYXRlUGVyc2lzdChlLCB0KTtcbiAgc2V0Tm9kZShpLmxpbmtzLCBlLCB0LCByKTtcbiAgdXBkYXRlUkNGb3JMaW5rKG8sIG4sIHUsIC0xKTtcbiAgdXBkYXRlUkNGb3JMaW5rKG8sIG4sIHIsIDEpO1xufVxuXG5mdW5jdGlvbiByZXNlcnZlTGF5ZXIoZSwgdCkge1xuICB2YXIgciA9IGUub3B0aW1pc3RpY09yZGVyLmluZGV4T2YodCk7XG4gIGlmICgtMSA9PT0gcikge1xuICAgIGUub3B0aW1pc3RpY09yZGVyLnVuc2hpZnQodCk7XG4gIH0gZWxzZSBpZiAoIWUuY29tbXV0YXRpdmVLZXlzLmhhcyh0KSkge1xuICAgIGNsZWFyTGF5ZXIoZSwgdCk7XG4gICAgZS5vcHRpbWlzdGljT3JkZXIuc3BsaWNlKHIsIDEpO1xuICAgIGUub3B0aW1pc3RpY09yZGVyLnVuc2hpZnQodCk7XG4gIH1cbiAgZS5jb21tdXRhdGl2ZUtleXMuYWRkKHQpO1xufVxuXG5mdW5jdGlvbiBjbGVhckxheWVyKGUsIHQpIHtcbiAgaWYgKGUucmVmTG9ja1t0XSkge1xuICAgIGRlbGV0ZSBlLnJlZkxvY2tbdF07XG4gICAgZGVsZXRlIGUucmVjb3Jkcy5vcHRpbWlzdGljW3RdO1xuICAgIGRlbGV0ZSBlLmxpbmtzLm9wdGltaXN0aWNbdF07XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlTGF5ZXIoZSwgdCkge1xuICB2YXIgciA9IGUub3B0aW1pc3RpY09yZGVyLmluZGV4T2YodCk7XG4gIGlmIChyID4gLTEpIHtcbiAgICBlLm9wdGltaXN0aWNPcmRlci5zcGxpY2UociwgMSk7XG4gICAgZS5jb21tdXRhdGl2ZUtleXMuZGVsZXRlKHQpO1xuICB9XG4gIGNsZWFyTGF5ZXIoZSwgdCk7XG59XG5cbmZ1bmN0aW9uIHNxdWFzaExheWVyKGUpIHtcbiAgdmFyIHQgPSBGO1xuICBGID0gbWFrZURpY3QoKTtcbiAgdmFyIHIgPSBELmxpbmtzLm9wdGltaXN0aWNbZV07XG4gIGlmIChyKSB7XG4gICAgci5mb3JFYWNoKChmdW5jdGlvbihlLCB0KSB7XG4gICAgICBmb3IgKHZhciByIGluIGUpIHtcbiAgICAgICAgd3JpdGVMaW5rKHQsIHIsIGVbcl0pO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxuICB2YXIgaSA9IEQucmVjb3Jkcy5vcHRpbWlzdGljW2VdO1xuICBpZiAoaSkge1xuICAgIGkuZm9yRWFjaCgoZnVuY3Rpb24oZSwgdCkge1xuICAgICAgZm9yICh2YXIgciBpbiBlKSB7XG4gICAgICAgIHdyaXRlUmVjb3JkKHQsIHIsIGVbcl0pO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxuICBGID0gdDtcbiAgZGVsZXRlTGF5ZXIoRCwgZSk7XG59XG5cbmZ1bmN0aW9uIGluc3BlY3RGaWVsZHMoZSkge1xuICB2YXIgdCA9IEQubGlua3M7XG4gIHZhciByID0gRC5yZWNvcmRzO1xuICB2YXIgaSA9IFtdO1xuICB2YXIgbiA9IG5ldyBTZXQ7XG4gIHVwZGF0ZURlcGVuZGVuY2llcyhlKTtcbiAgZXh0cmFjdE5vZGVNYXBGaWVsZHMoaSwgbiwgZSwgdCk7XG4gIGV4dHJhY3ROb2RlTWFwRmllbGRzKGksIG4sIGUsIHIpO1xuICByZXR1cm4gaTtcbn1cblxudmFyIHEgPSB7XG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbmZ1bmN0aW9uIGdldEZpZWxkRXJyb3IoZSkge1xuICByZXR1cm4gZS5fX2ludGVybmFsLnBhdGgubGVuZ3RoID4gMCAmJiBlLl9faW50ZXJuYWwuZXJyb3JNYXAgPyBlLl9faW50ZXJuYWwuZXJyb3JNYXBbZS5fX2ludGVybmFsLnBhdGguam9pbihcIi5cIildIDogdm9pZCAwO1xufVxuXG5mdW5jdGlvbiBtYWtlQ29udGV4dChlLCB0LCByLCBpLCBuLCBhLCBvKSB7XG4gIHZhciBzID0ge1xuICAgIHN0b3JlOiBlLFxuICAgIHZhcmlhYmxlczogdCxcbiAgICBmcmFnbWVudHM6IHIsXG4gICAgcGFyZW50OiB7XG4gICAgICBfX3R5cGVuYW1lOiBpXG4gICAgfSxcbiAgICBwYXJlbnRUeXBlTmFtZTogaSxcbiAgICBwYXJlbnRLZXk6IG4sXG4gICAgcGFyZW50RmllbGRLZXk6IFwiXCIsXG4gICAgZmllbGROYW1lOiBcIlwiLFxuICAgIGVycm9yOiB2b2lkIDAsXG4gICAgcGFydGlhbDogITEsXG4gICAgb3B0aW1pc3RpYzogISFhLFxuICAgIF9faW50ZXJuYWw6IHtcbiAgICAgIHBhdGg6IFtdLFxuICAgICAgZXJyb3JNYXA6IHZvaWQgMFxuICAgIH1cbiAgfTtcbiAgaWYgKG8gJiYgby5ncmFwaFFMRXJyb3JzKSB7XG4gICAgZm9yICh2YXIgdSA9IDA7IHUgPCBvLmdyYXBoUUxFcnJvcnMubGVuZ3RoOyB1KyspIHtcbiAgICAgIHZhciBjID0gby5ncmFwaFFMRXJyb3JzW3VdO1xuICAgICAgaWYgKGMucGF0aCAmJiBjLnBhdGgubGVuZ3RoKSB7XG4gICAgICAgIGlmICghcy5fX2ludGVybmFsLmVycm9yTWFwKSB7XG4gICAgICAgICAgcy5fX2ludGVybmFsLmVycm9yTWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBzLl9faW50ZXJuYWwuZXJyb3JNYXBbYy5wYXRoLmpvaW4oXCIuXCIpXSA9IGM7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBzO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb250ZXh0KGUsIHQsIHIsIGksIG4sIGEpIHtcbiAgcS5jdXJyZW50ID0gZTtcbiAgZS5wYXJlbnQgPSB0O1xuICBlLnBhcmVudFR5cGVOYW1lID0gcjtcbiAgZS5wYXJlbnRLZXkgPSBpO1xuICBlLnBhcmVudEZpZWxkS2V5ID0gbjtcbiAgZS5maWVsZE5hbWUgPSBhO1xuICBlLmVycm9yID0gZ2V0RmllbGRFcnJvcihlKTtcbn1cblxuZnVuY3Rpb24gaXNGcmFnbWVudEhldXJpc3RpY2FsbHlNYXRjaGluZyhlLCB0LCByLCBpKSB7XG4gIGlmICghdCkge1xuICAgIHJldHVybiAhMTtcbiAgfVxuICB2YXIgbiA9IGdldFR5cGVDb25kaXRpb24oZSk7XG4gIGlmICghbiB8fCB0ID09PSBuKSB7XG4gICAgcmV0dXJuICEwO1xuICB9XG4gIFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiB3YXJuKFwiSGV1cmlzdGljIEZyYWdtZW50IE1hdGNoaW5nOiBBIGZyYWdtZW50IGlzIHRyeWluZyB0byBtYXRjaCBhZ2FpbnN0IHRoZSBgXCIgKyB0ICsgXCJgIHR5cGUsIGJ1dCB0aGUgdHlwZSBjb25kaXRpb24gaXMgYFwiICsgbiArIFwiYC4gU2luY2UgR3JhcGhRTCBhbGxvd3MgZm9yIGludGVyZmFjZXMgYFwiICsgbiArIFwiYCBtYXkgYmUgYW5pbnRlcmZhY2UuXFxuQSBzY2hlbWEgbmVlZHMgdG8gYmUgZGVmaW5lZCBmb3IgdGhpcyBtYXRjaCB0byBiZSBkZXRlcm1pbmlzdGljLCBvdGhlcndpc2UgdGhlIGZyYWdtZW50IHdpbGwgYmUgbWF0Y2hlZCBoZXVyaXN0aWNhbGx5IVwiLCAxNik7XG4gIHJldHVybiAhZ2V0U2VsZWN0aW9uU2V0KGUpLnNvbWUoKGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoIWlzRmllbGROb2RlKGUpKSB7XG4gICAgICByZXR1cm4gITE7XG4gICAgfVxuICAgIHZhciB0ID0ga2V5T2ZGaWVsZChnZXROYW1lKGUpLCBnZXRGaWVsZEFyZ3VtZW50cyhlLCBpKSk7XG4gICAgcmV0dXJuICFmdW5jdGlvbiBoYXNGaWVsZChlLCB0KSB7XG4gICAgICByZXR1cm4gdm9pZCAwICE9PSByZWFkUmVjb3JkKGUsIHQpIHx8IHZvaWQgMCAhPT0gcmVhZExpbmsoZSwgdCk7XG4gICAgfShyLCB0KTtcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBtYWtlU2VsZWN0aW9uSXRlcmF0b3IoZSwgdCwgciwgaSkge1xuICB2YXIgbjtcbiAgdmFyIGEgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBpZiAodm9pZCAwICE9PSBuKSB7XG4gICAgICB2YXIgbyA9IG4oKTtcbiAgICAgIGlmICh2b2lkIDAgIT09IG8pIHtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICB9XG4gICAgICBuID0gdm9pZCAwO1xuICAgICAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgICAgICBwb3BEZWJ1Z05vZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgd2hpbGUgKGEgPCByLmxlbmd0aCkge1xuICAgICAgdmFyIHMgPSByW2ErK107XG4gICAgICBpZiAoIXNob3VsZEluY2x1ZGUocywgaS52YXJpYWJsZXMpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmICghaXNGaWVsZE5vZGUocykpIHtcbiAgICAgICAgdmFyIHUgPSAhaXNJbmxpbmVGcmFnbWVudChzKSA/IGkuZnJhZ21lbnRzW2dldE5hbWUocyldIDogcztcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gdSkge1xuICAgICAgICAgIGlmIChpLnN0b3JlLnNjaGVtYSA/IGlzSW50ZXJmYWNlT2ZUeXBlKGkuc3RvcmUuc2NoZW1hLCB1LCBlKSA6IGlzRnJhZ21lbnRIZXVyaXN0aWNhbGx5TWF0Y2hpbmcodSwgZSwgdCwgaS52YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgICAgICAgICAgIHB1c2hEZWJ1Z05vZGUoZSwgdSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKG4gPSBtYWtlU2VsZWN0aW9uSXRlcmF0b3IoZSwgdCwgZ2V0U2VsZWN0aW9uU2V0KHUpLCBpKSkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW5zdXJlRGF0YShlKSB7XG4gIHJldHVybiB2b2lkIDAgPT09IGUgPyBudWxsIDogZTtcbn1cblxuZnVuY3Rpb24gZW5zdXJlTGluayhlLCB0KSB7XG4gIGlmIChudWxsID09IHQpIHtcbiAgICByZXR1cm4gdDtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHQpKSB7XG4gICAgdmFyIHIgPSBuZXcgQXJyYXkodC5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwLCBuID0gci5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHJbaV0gPSBlbnN1cmVMaW5rKGUsIHRbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxuICB2YXIgYSA9IGUua2V5T2ZFbnRpdHkodCk7XG4gIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICBpZiAoIWEgJiYgdCAmJiBcIm9iamVjdFwiID09IHR5cGVvZiB0KSB7XG4gICAgICB3YXJuKFwiQ2FuJ3QgZ2VuZXJhdGUgYSBrZXkgZm9yIGxpbmsoLi4uKSBpdGVtLlxcbllvdSBoYXZlIHRvIHBhc3MgYW4gYGlkYCBvciBgX2lkYCBmaWVsZCBvciBjcmVhdGUgYSBjdXN0b20gYGtleXNgIGNvbmZpZyBmb3IgYFwiICsgdC5fX3R5cGVuYW1lICsgXCJgLlwiLCAxMik7XG4gICAgfVxuICB9XG4gIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiB3cml0ZShlLCB0LCByLCBpLCBuKSB7XG4gIGluaXREYXRhU3RhdGUoXCJ3cml0ZVwiLCBlLmRhdGEsIG4gfHwgbnVsbCk7XG4gIHZhciBhID0gc3RhcnRXcml0ZShlLCB0LCByLCBpKTtcbiAgY2xlYXJEYXRhU3RhdGUoKTtcbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0V3JpdGUoZSwgdCwgciwgaSwgbikge1xuICB2YXIgYSA9IGdldE1haW5PcGVyYXRpb24odC5xdWVyeSk7XG4gIHZhciBvID0ge1xuICAgIGRhdGE6IHIsXG4gICAgZGVwZW5kZW5jaWVzOiBnZXRDdXJyZW50RGVwZW5kZW5jaWVzKClcbiAgfTtcbiAgdmFyIHMgPSBlLnJvb3RGaWVsZHNbYS5vcGVyYXRpb25dO1xuICB2YXIgdSA9IG1ha2VDb250ZXh0KGUsIG5vcm1hbGl6ZVZhcmlhYmxlcyhhLCB0LnZhcmlhYmxlcyksIGdldEZyYWdtZW50cyh0LnF1ZXJ5KSwgcywgcywgISFuLCBpKTtcbiAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgIHB1c2hEZWJ1Z05vZGUocywgYSk7XG4gIH1cbiAgd3JpdGVTZWxlY3Rpb24odSwgcywgZ2V0U2VsZWN0aW9uU2V0KGEpLCByKTtcbiAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgIHBvcERlYnVnTm9kZSgpO1xuICB9XG4gIHJldHVybiBvO1xufVxuXG5mdW5jdGlvbiB3cml0ZVNlbGVjdGlvbihlLCB0LCByLCBpKSB7XG4gIHZhciBuID0gdCA9PT0gZS5zdG9yZS5yb290RmllbGRzLnF1ZXJ5O1xuICB2YXIgYSA9ICFuICYmICEhZS5zdG9yZS5yb290TmFtZXNbdF07XG4gIHZhciBvID0gYSB8fCBuID8gdCA6IGkuX190eXBlbmFtZTtcbiAgaWYgKCFvKSB7XG4gICAgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmIHdhcm4oXCJDb3VsZG4ndCBmaW5kIF9fdHlwZW5hbWUgd2hlbiB3cml0aW5nLlxcbklmIHlvdSdyZSB3cml0aW5nIHRvIHRoZSBjYWNoZSBtYW51YWxseSBoYXZlIHRvIHBhc3MgYSBgX190eXBlbmFtZWAgcHJvcGVydHkgb24gZWFjaCBlbnRpdHkgaW4geW91ciBkYXRhLlwiLCAxNCk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKCFhICYmICFuICYmIHQpIHtcbiAgICB3cml0ZVJlY29yZCh0LCBcIl9fdHlwZW5hbWVcIiwgbyk7XG4gIH1cbiAgdmFyIHMgPSBtYWtlU2VsZWN0aW9uSXRlcmF0b3IobywgdCB8fCBvLCByLCBlKTtcbiAgdmFyIHU7XG4gIHdoaWxlICh1ID0gcygpKSB7XG4gICAgdmFyIGMgPSBnZXROYW1lKHUpO1xuICAgIHZhciBsID0gZ2V0RmllbGRBcmd1bWVudHModSwgZS52YXJpYWJsZXMpO1xuICAgIHZhciBkID0ga2V5T2ZGaWVsZChjLCBsKTtcbiAgICB2YXIgZiA9IGdldEZpZWxkQWxpYXModSk7XG4gICAgdmFyIHAgPSBpW2ZdO1xuICAgIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICAgIGlmICghYSAmJiB2b2lkIDAgPT09IHApIHtcbiAgICAgICAgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmIHdhcm4oXCJJbnZhbGlkIHVuZGVmaW5lZDogVGhlIGZpZWxkIGF0IGBcIiArIGQgKyBcImAgaXMgYHVuZGVmaW5lZGAsIGJ1dCB0aGUgR3JhcGhRTCBxdWVyeSBleHBlY3RzIGEgXCIgKyAodm9pZCAwID09PSB1LnNlbGVjdGlvblNldCA/IFwic2NhbGFyIChudW1iZXIsIGJvb2xlYW4sIGV0YylcIiA6IFwic2VsZWN0aW9uIHNldFwiKSArIFwiIGZvciB0aGlzIGZpZWxkLlwiICsgKGUub3B0aW1pc3RpYyA/IFwiXFxuWW91ciBvcHRpbWlzdGljIHJlc3VsdCBtYXkgYmUgbWlzc2luZyBhIGZpZWxkIVwiIDogXCJcIiksIDEzKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2UgaWYgKGUuc3RvcmUuc2NoZW1hICYmIG8gJiYgXCJfX3R5cGVuYW1lXCIgIT09IGMpIHtcbiAgICAgICAgaXNGaWVsZEF2YWlsYWJsZU9uVHlwZShlLnN0b3JlLnNjaGVtYSwgbywgYyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChcIl9fdHlwZW5hbWVcIiA9PT0gYykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGUuX19pbnRlcm5hbC5wYXRoLnB1c2goZik7XG4gICAgaWYgKGUub3B0aW1pc3RpYyAmJiBhKSB7XG4gICAgICB2YXIgdiA9IGUuc3RvcmUub3B0aW1pc3RpY011dGF0aW9uc1tjXTtcbiAgICAgIGlmICghdikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZUNvbnRleHQoZSwgaSwgbywgbywgZCwgYyk7XG4gICAgICBwID0gaVtmXSA9IGVuc3VyZURhdGEodihsIHx8IHt9LCBlLnN0b3JlLCBlKSk7XG4gICAgfVxuICAgIGlmICh1LnNlbGVjdGlvblNldCkge1xuICAgICAgaWYgKHQgJiYgIWEpIHtcbiAgICAgICAgdmFyIHkgPSBqb2luS2V5cyh0LCBkKTtcbiAgICAgICAgd3JpdGVMaW5rKHQgfHwgbywgZCwgd3JpdGVGaWVsZChlLCBnZXRTZWxlY3Rpb25TZXQodSksIGVuc3VyZURhdGEocCksIHkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyaXRlRmllbGQoZSwgZ2V0U2VsZWN0aW9uU2V0KHUpLCBlbnN1cmVEYXRhKHApKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHQgJiYgIWEpIHtcbiAgICAgIHdyaXRlUmVjb3JkKHQgfHwgbywgZCwgbnVsbCAhPT0gcCB8fCAhZ2V0RmllbGRFcnJvcihlKSA/IHAgOiB2b2lkIDApO1xuICAgIH1cbiAgICBpZiAoYSkge1xuICAgICAgdmFyIG0gPSBlLnN0b3JlLnVwZGF0ZXNbb11bY107XG4gICAgICBpZiAobSkge1xuICAgICAgICB1cGRhdGVDb250ZXh0KGUsIGksIG8sIG8sIGpvaW5LZXlzKG8sIGQpLCBjKTtcbiAgICAgICAgaVtjXSA9IHA7XG4gICAgICAgIG0oaSwgbCB8fCB7fSwgZS5zdG9yZSwgZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGUuX19pbnRlcm5hbC5wYXRoLnBvcCgpO1xuICB9XG59XG5cbnZhciBJID0gL15fX3xQYWdlSW5mb3woQ29ubmVjdGlvbnxFZGdlKSQvO1xuXG5mdW5jdGlvbiB3cml0ZUZpZWxkKGUsIHQsIHIsIGkpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocikpIHtcbiAgICB2YXIgbiA9IG5ldyBBcnJheShyLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgYSA9IDAsIG8gPSByLmxlbmd0aDsgYSA8IG87IGErKykge1xuICAgICAgZS5fX2ludGVybmFsLnBhdGgucHVzaChhKTtcbiAgICAgIHZhciBzID0gaSA/IGpvaW5LZXlzKGksIFwiXCIgKyBhKSA6IHZvaWQgMDtcbiAgICAgIHZhciB1ID0gd3JpdGVGaWVsZChlLCB0LCByW2FdLCBzKTtcbiAgICAgIG5bYV0gPSB1O1xuICAgICAgZS5fX2ludGVybmFsLnBhdGgucG9wKCk7XG4gICAgfVxuICAgIHJldHVybiBuO1xuICB9IGVsc2UgaWYgKG51bGwgPT09IHIpIHtcbiAgICByZXR1cm4gZ2V0RmllbGRFcnJvcihlKSA/IHZvaWQgMCA6IG51bGw7XG4gIH1cbiAgdmFyIGMgPSBlLnN0b3JlLmtleU9mRW50aXR5KHIpO1xuICB2YXIgbCA9IHIuX190eXBlbmFtZTtcbiAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgIGlmIChpICYmICFlLnN0b3JlLmtleXNbci5fX3R5cGVuYW1lXSAmJiBudWxsID09PSBjICYmIFwic3RyaW5nXCIgPT0gdHlwZW9mIGwgJiYgIUkudGVzdChsKSkge1xuICAgICAgd2FybihcIkludmFsaWQga2V5OiBUaGUgR3JhcGhRTCBxdWVyeSBhdCB0aGUgZmllbGQgYXQgYFwiICsgaSArIFwiYCBoYXMgYSBzZWxlY3Rpb24gc2V0LCBidXQgbm8ga2V5IGNvdWxkIGJlIGdlbmVyYXRlZCBmb3IgdGhlIGRhdGEgYXQgdGhpcyBmaWVsZC5cXG5Zb3UgaGF2ZSB0byByZXF1ZXN0IGBpZGAgb3IgYF9pZGAgZmllbGRzIGZvciBhbGwgc2VsZWN0aW9uIHNldHMgb3IgY3JlYXRlIGEgY3VzdG9tIGBrZXlzYCBjb25maWcgZm9yIGBcIiArIGwgKyBcImAuXFxuRW50aXRpZXMgd2l0aG91dCBrZXlzIHdpbGwgYmUgZW1iZWRkZWQgZGlyZWN0bHkgb24gdGhlIHBhcmVudCBlbnRpdHkuIElmIHRoaXMgaXMgaW50ZW50aW9uYWwsIGNyZWF0ZSBhIGBrZXlzYCBjb25maWcgZm9yIGBcIiArIGwgKyBcImAgdGhhdCBhbHdheXMgcmV0dXJucyBudWxsLlwiLCAxNSk7XG4gICAgfVxuICB9XG4gIHZhciBkID0gYyB8fCBpO1xuICB3cml0ZVNlbGVjdGlvbihlLCBkLCB0LCByKTtcbiAgcmV0dXJuIGQgfHwgbnVsbDtcbn1cblxuZnVuY3Rpb24gU3RvcmUoZSkge1xuICB2YXIgdCwgcjtcbiAgdGhpcy5rZXlPZkZpZWxkID0ga2V5T2ZGaWVsZDtcbiAgdGhpcy5yZXNvbHZlRmllbGRCeUtleSA9IHRoaXMucmVzb2x2ZTtcbiAgaWYgKCFlKSB7XG4gICAgZSA9IHt9O1xuICB9XG4gIHRoaXMucmVzb2x2ZXJzID0gZS5yZXNvbHZlcnMgfHwge307XG4gIHRoaXMub3B0aW1pc3RpY011dGF0aW9ucyA9IGUub3B0aW1pc3RpYyB8fCB7fTtcbiAgdGhpcy5rZXlzID0gZS5rZXlzIHx8IHt9O1xuICB2YXIgaSA9IFwiUXVlcnlcIjtcbiAgdmFyIG4gPSBcIk11dGF0aW9uXCI7XG4gIHZhciBhID0gXCJTdWJzY3JpcHRpb25cIjtcbiAgaWYgKGUuc2NoZW1hKSB7XG4gICAgdmFyIG8gPSBmdW5jdGlvbiBidWlsZENsaWVudFNjaGVtYShlKSB7XG4gICAgICB2YXIgdCA9IGUuX19zY2hlbWE7XG4gICAgICB2YXIgciA9IHt9O1xuICAgICAgZnVuY3Rpb24gYnVpbGROYW1lTWFwKGUpIHtcbiAgICAgICAgdmFyIHQgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBlLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgdFtlW3JdLm5hbWVdID0gZVtyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGJ1aWxkVHlwZShlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5raW5kKSB7XG4gICAgICAgICBjYXNlIFwiT0JKRUNUXCI6XG4gICAgICAgICBjYXNlIFwiSU5URVJGQUNFXCI6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IGUubmFtZSxcbiAgICAgICAgICAgIGtpbmQ6IGUua2luZCxcbiAgICAgICAgICAgIGludGVyZmFjZXM6IGJ1aWxkTmFtZU1hcChlLmludGVyZmFjZXMgfHwgW10pLFxuICAgICAgICAgICAgZmllbGRzOiBidWlsZE5hbWVNYXAoZS5maWVsZHMubWFwKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogZS5uYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6IGUudHlwZSxcbiAgICAgICAgICAgICAgICBhcmdzOiBidWlsZE5hbWVNYXAoZS5hcmdzKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkpKVxuICAgICAgICAgIH07XG5cbiAgICAgICAgIGNhc2UgXCJVTklPTlwiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBlLm5hbWUsXG4gICAgICAgICAgICBraW5kOiBlLmtpbmQsXG4gICAgICAgICAgICB0eXBlczogYnVpbGROYW1lTWFwKGUucG9zc2libGVUeXBlcyB8fCBbXSlcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgaSA9IHtcbiAgICAgICAgcXVlcnk6IHQucXVlcnlUeXBlID8gdC5xdWVyeVR5cGUubmFtZSA6IG51bGwsXG4gICAgICAgIG11dGF0aW9uOiB0Lm11dGF0aW9uVHlwZSA/IHQubXV0YXRpb25UeXBlLm5hbWUgOiBudWxsLFxuICAgICAgICBzdWJzY3JpcHRpb246IHQuc3Vic2NyaXB0aW9uVHlwZSA/IHQuc3Vic2NyaXB0aW9uVHlwZS5uYW1lIDogbnVsbCxcbiAgICAgICAgdHlwZXM6IHZvaWQgMCxcbiAgICAgICAgaXNTdWJUeXBlOiBmdW5jdGlvbiBpc1N1YlR5cGUoZSwgdCkge1xuICAgICAgICAgIHZhciBpID0gcltlXTtcbiAgICAgICAgICB2YXIgbiA9IHJbdF07XG4gICAgICAgICAgaWYgKCFpIHx8ICFuKSB7XG4gICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgfSBlbHNlIGlmIChcIlVOSU9OXCIgPT09IGkua2luZCkge1xuICAgICAgICAgICAgcmV0dXJuICEhaS50eXBlc1t0XTtcbiAgICAgICAgICB9IGVsc2UgaWYgKFwiT0JKRUNUXCIgIT09IGkua2luZCAmJiBcIk9CSkVDVFwiID09PSBuLmtpbmQpIHtcbiAgICAgICAgICAgIHJldHVybiAhIW4uaW50ZXJmYWNlc1tlXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGUgPT09IHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKHQudHlwZXMpIHtcbiAgICAgICAgaS50eXBlcyA9IHI7XG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdC50eXBlcy5sZW5ndGg7IG4rKykge1xuICAgICAgICAgIHZhciBhID0gdC50eXBlc1tuXTtcbiAgICAgICAgICBpZiAoYSAmJiBhLm5hbWUpIHtcbiAgICAgICAgICAgIHZhciBvID0gYnVpbGRUeXBlKGEpO1xuICAgICAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgICAgclthLm5hbWVdID0gbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpO1xuICAgIH0oZS5zY2hlbWEpO1xuICAgIGkgPSBvLnF1ZXJ5IHx8IGk7XG4gICAgbiA9IG8ubXV0YXRpb24gfHwgbjtcbiAgICBhID0gby5zdWJzY3JpcHRpb24gfHwgYTtcbiAgICBpZiAoby50eXBlcykge1xuICAgICAgdGhpcy5zY2hlbWEgPSBvO1xuICAgIH1cbiAgfVxuICB0aGlzLnVwZGF0ZXMgPSAoKHQgPSB7fSlbbl0gPSBlLnVwZGF0ZXMgJiYgZS51cGRhdGVzLk11dGF0aW9uIHx8IHt9LCB0W2FdID0gZS51cGRhdGVzICYmIGUudXBkYXRlcy5TdWJzY3JpcHRpb24gfHwge30sIFxuICB0KTtcbiAgdGhpcy5yb290RmllbGRzID0ge1xuICAgIHF1ZXJ5OiBpLFxuICAgIG11dGF0aW9uOiBuLFxuICAgIHN1YnNjcmlwdGlvbjogYVxuICB9O1xuICB0aGlzLnJvb3ROYW1lcyA9ICgociA9IHt9KVtpXSA9IFwicXVlcnlcIiwgcltuXSA9IFwibXV0YXRpb25cIiwgclthXSA9IFwic3Vic2NyaXB0aW9uXCIsIFxuICByKTtcbiAgdGhpcy5kYXRhID0gZnVuY3Rpb24gbWFrZShlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlZmVyOiAhMSxcbiAgICAgIGdjOiBuZXcgU2V0LFxuICAgICAgcGVyc2lzdDogbmV3IFNldCxcbiAgICAgIHF1ZXJ5Um9vdEtleTogZSxcbiAgICAgIHJlZkNvdW50OiBtYWtlRGljdCgpLFxuICAgICAgcmVmTG9jazogbWFrZURpY3QoKSxcbiAgICAgIGxpbmtzOiBtYWtlTm9kZU1hcCgpLFxuICAgICAgcmVjb3JkczogbWFrZU5vZGVNYXAoKSxcbiAgICAgIGNvbW11dGF0aXZlS2V5czogbmV3IFNldCxcbiAgICAgIG9wdGltaXN0aWNPcmRlcjogW10sXG4gICAgICBzdG9yYWdlOiBudWxsXG4gICAgfTtcbiAgfShpKTtcbiAgaWYgKHRoaXMuc2NoZW1hICYmIFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgICFmdW5jdGlvbiBleHBlY3RWYWxpZEtleWluZ0NvbmZpZyhlLCB0KSB7XG4gICAgICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgICAgIGZvciAodmFyIHIgaW4gdCkge1xuICAgICAgICAgIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICAgICAgICAgIGlmICghZS50eXBlc1tyXSkge1xuICAgICAgICAgICAgICB3YXJuKFwiSW52YWxpZCBPYmplY3QgdHlwZTogVGhlIHR5cGUgYFwiICsgciArIFwiYCBpcyBub3QgYW4gb2JqZWN0IGluIHRoZSBkZWZpbmVkIHNjaGVtYSwgYnV0IHRoZSBga2V5c2Agb3B0aW9uIGlzIHJlZmVyZW5jaW5nIGl0LlwiLCAyMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSh0aGlzLnNjaGVtYSwgdGhpcy5rZXlzKTtcbiAgICAhZnVuY3Rpb24gZXhwZWN0VmFsaWRVcGRhdGVzQ29uZmlnKGUsIHQpIHtcbiAgICAgIGlmIChcInByb2R1Y3Rpb25cIiA9PT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGUubXV0YXRpb24pIHtcbiAgICAgICAgdmFyIHIgPSBlLnR5cGVzW2UubXV0YXRpb25dLmZpZWxkcztcbiAgICAgICAgdmFyIGkgPSB0W2UubXV0YXRpb25dIHx8IHt9O1xuICAgICAgICBmb3IgKHZhciBuIGluIGkpIHtcbiAgICAgICAgICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgICAgICAgICBpZiAodm9pZCAwID09PSByW25dKSB7XG4gICAgICAgICAgICAgIHdhcm4oXCJJbnZhbGlkIG11dGF0aW9uIGZpZWxkOiBgXCIgKyBuICsgXCJgIGlzIG5vdCBpbiB0aGUgZGVmaW5lZCBzY2hlbWEsIGJ1dCB0aGUgYHVwZGF0ZXMuTXV0YXRpb25gIG9wdGlvbiBpcyByZWZlcmVuY2luZyBpdC5cIiwgMjEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGUuc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHZhciBhID0gZS50eXBlc1tlLnN1YnNjcmlwdGlvbl0uZmllbGRzO1xuICAgICAgICB2YXIgbyA9IHRbZS5zdWJzY3JpcHRpb25dIHx8IHt9O1xuICAgICAgICBmb3IgKHZhciBzIGluIG8pIHtcbiAgICAgICAgICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgICAgICAgICBpZiAodm9pZCAwID09PSBhW3NdKSB7XG4gICAgICAgICAgICAgIHdhcm4oXCJJbnZhbGlkIHN1YnNjcmlwdGlvbiBmaWVsZDogYFwiICsgcyArIFwiYCBpcyBub3QgaW4gdGhlIGRlZmluZWQgc2NoZW1hLCBidXQgdGhlIGB1cGRhdGVzLlN1YnNjcmlwdGlvbmAgb3B0aW9uIGlzIHJlZmVyZW5jaW5nIGl0LlwiLCAyMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSh0aGlzLnNjaGVtYSwgdGhpcy51cGRhdGVzKTtcbiAgICAhZnVuY3Rpb24gZXhwZWN0VmFsaWRSZXNvbHZlcnNDb25maWcoZSwgdCkge1xuICAgICAgaWYgKFwicHJvZHVjdGlvblwiID09PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3IgKHZhciByIGluIHQpIHtcbiAgICAgICAgaWYgKFwiUXVlcnlcIiA9PT0gcikge1xuICAgICAgICAgIGlmIChlLnF1ZXJ5KSB7XG4gICAgICAgICAgICB2YXIgaSA9IGUudHlwZXNbZS5xdWVyeV0uZmllbGRzO1xuICAgICAgICAgICAgZm9yICh2YXIgbiBpbiB0LlF1ZXJ5KSB7XG4gICAgICAgICAgICAgIGlmICghaVtuXSkge1xuICAgICAgICAgICAgICAgIHdhcm5BYm91dFJlc29sdmVyKFwiUXVlcnkuXCIgKyBuKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3YXJuQWJvdXRSZXNvbHZlcihcIlF1ZXJ5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghZS50eXBlc1tyXSkge1xuICAgICAgICAgIHdhcm5BYm91dFJlc29sdmVyKHIpO1xuICAgICAgICB9IGVsc2UgaWYgKFwiSU5URVJGQUNFXCIgPT09IGUudHlwZXNbcl0ua2luZCB8fCBcIlVOSU9OXCIgPT09IGUudHlwZXNbcl0ua2luZCkge1xuICAgICAgICAgIHMgPSByLCB1ID0gZS50eXBlc1tyXS5raW5kLCBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgd2FybihcIkludmFsaWQgcmVzb2x2ZXI6IGBcIiArIHMgKyBcImAgZG9lcyBub3QgbWF0Y2ggdG8gYSBjb25jcmV0ZSB0eXBlIGluIHRoZSBzY2hlbWEsIGJ1dCB0aGUgYHJlc29sdmVyc2Agb3B0aW9uIGlzIHJlZmVyZW5jaW5nIGl0LiBJbXBsZW1lbnQgdGhlIHJlc29sdmVyIGZvciB0aGUgdHlwZXMgdGhhdCBcIiArIChcIlVOSU9OXCIgPT09IHUgPyBcIm1ha2UgdXAgdGhlIHVuaW9uXCIgOiBcImltcGxlbWVudCB0aGUgaW50ZXJmYWNlXCIpICsgXCIgaW5zdGVhZC5cIiwgMjYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBhID0gZS50eXBlc1tyXS5maWVsZHM7XG4gICAgICAgICAgZm9yICh2YXIgbyBpbiB0W3JdKSB7XG4gICAgICAgICAgICBpZiAoIWFbb10pIHtcbiAgICAgICAgICAgICAgd2FybkFib3V0UmVzb2x2ZXIociArIFwiLlwiICsgbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgcywgdTtcbiAgICB9KHRoaXMuc2NoZW1hLCB0aGlzLnJlc29sdmVycyk7XG4gICAgIWZ1bmN0aW9uIGV4cGVjdFZhbGlkT3B0aW1pc3RpY011dGF0aW9uc0NvbmZpZyhlLCB0KSB7XG4gICAgICBpZiAoXCJwcm9kdWN0aW9uXCIgPT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChlLm11dGF0aW9uKSB7XG4gICAgICAgIHZhciByID0gZS50eXBlc1tlLm11dGF0aW9uXS5maWVsZHM7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdCkge1xuICAgICAgICAgIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICAgICAgICAgIGlmICghcltpXSkge1xuICAgICAgICAgICAgICB3YXJuKFwiSW52YWxpZCBvcHRpbWlzdGljIG11dGF0aW9uIGZpZWxkOiBgXCIgKyBpICsgXCJgIGlzIG5vdCBhIG11dGF0aW9uIGZpZWxkIGluIHRoZSBkZWZpbmVkIHNjaGVtYSwgYnV0IHRoZSBgb3B0aW1pc3RpY2Agb3B0aW9uIGlzIHJlZmVyZW5jaW5nIGl0LlwiLCAyNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSh0aGlzLnNjaGVtYSwgdGhpcy5vcHRpbWlzdGljTXV0YXRpb25zKTtcbiAgfVxufVxuXG5TdG9yZS5wcm90b3R5cGUua2V5T2ZFbnRpdHkgPSBmdW5jdGlvbiBrZXlPZkVudGl0eShlKSB7XG4gIGlmIChxLmN1cnJlbnQgJiYgZSA9PT0gcS5jdXJyZW50LnBhcmVudCkge1xuICAgIHJldHVybiBxLmN1cnJlbnQucGFyZW50S2V5O1xuICB9XG4gIGlmIChudWxsID09IGUgfHwgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSkge1xuICAgIHJldHVybiBlIHx8IG51bGw7XG4gIH1cbiAgaWYgKCFlLl9fdHlwZW5hbWUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAodGhpcy5yb290TmFtZXNbZS5fX3R5cGVuYW1lXSkge1xuICAgIHJldHVybiBlLl9fdHlwZW5hbWU7XG4gIH1cbiAgdmFyIHQ7XG4gIGlmICh0aGlzLmtleXNbZS5fX3R5cGVuYW1lXSkge1xuICAgIHQgPSB0aGlzLmtleXNbZS5fX3R5cGVuYW1lXShlKTtcbiAgfSBlbHNlIGlmIChudWxsICE9IGUuaWQpIHtcbiAgICB0ID0gXCJcIiArIGUuaWQ7XG4gIH0gZWxzZSBpZiAobnVsbCAhPSBlLl9pZCkge1xuICAgIHQgPSBcIlwiICsgZS5faWQ7XG4gIH1cbiAgcmV0dXJuIHQgPyBlLl9fdHlwZW5hbWUgKyBcIjpcIiArIHQgOiBudWxsO1xufTtcblxuU3RvcmUucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbiByZXNvbHZlKGUsIHQsIHIpIHtcbiAgdmFyIGkgPSBrZXlPZkZpZWxkKHQsIHIpO1xuICB2YXIgbiA9IHRoaXMua2V5T2ZFbnRpdHkoZSk7XG4gIGlmICghbikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZhciBhID0gcmVhZFJlY29yZChuLCBpKTtcbiAgaWYgKHZvaWQgMCAhPT0gYSkge1xuICAgIHJldHVybiBhO1xuICB9XG4gIHJldHVybiByZWFkTGluayhuLCBpKSB8fCBudWxsO1xufTtcblxuU3RvcmUucHJvdG90eXBlLmludmFsaWRhdGUgPSBmdW5jdGlvbiBpbnZhbGlkYXRlKGUsIHQsIHIpIHtcbiAgdmFyIGkgPSB0aGlzLmtleU9mRW50aXR5KGUpO1xuICBpbnZhcmlhbnQoaSwgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WID8gXCJDYW4ndCBnZW5lcmF0ZSBhIGtleSBmb3IgaW52YWxpZGF0ZSguLi4pLlxcbllvdSBoYXZlIHRvIHBhc3MgYW4gaWQgb3IgX2lkIGZpZWxkIG9yIGNyZWF0ZSBhIGN1c3RvbSBga2V5c2AgZmllbGQgZm9yIGBcIiArIHR5cGVvZiBlID09IFwib2JqZWN0XCIgPyBlLl9fdHlwZW5hbWUgOiBlICsgXCJgLlwiIDogXCJcIiwgMTkpO1xuICAhZnVuY3Rpb24gaW52YWxpZGF0ZUVudGl0eShlLCB0LCByKSB7XG4gICAgdmFyIGkgPSB0ID8gWyB7XG4gICAgICBmaWVsZEtleToga2V5T2ZGaWVsZCh0LCByKVxuICAgIH0gXSA6IGluc3BlY3RGaWVsZHMoZSk7XG4gICAgZm9yICh2YXIgbiA9IDAsIGEgPSBpLmxlbmd0aDsgbiA8IGE7IG4rKykge1xuICAgICAgdmFyIG8gPSBpW25dLmZpZWxkS2V5O1xuICAgICAgaWYgKHZvaWQgMCAhPT0gcmVhZExpbmsoZSwgbykpIHtcbiAgICAgICAgd3JpdGVMaW5rKGUsIG8sIHZvaWQgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cml0ZVJlY29yZChlLCBvLCB2b2lkIDApO1xuICAgICAgfVxuICAgIH1cbiAgfShpLCB0LCByKTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS5pbnNwZWN0RmllbGRzID0gZnVuY3Rpb24gaW5zcGVjdEZpZWxkcyQxKGUpIHtcbiAgdmFyIHQgPSB0aGlzLmtleU9mRW50aXR5KGUpO1xuICByZXR1cm4gdCA/IGluc3BlY3RGaWVsZHModCkgOiBbXTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS51cGRhdGVRdWVyeSA9IGZ1bmN0aW9uIHVwZGF0ZVF1ZXJ5KGUsIGkpIHtcbiAgdmFyIG4gPSB0KGUucXVlcnksIGUudmFyaWFibGVzKTtcbiAgbi5xdWVyeSA9IHIobi5xdWVyeSk7XG4gIHZhciBhID0gaSh0aGlzLnJlYWRRdWVyeShuKSk7XG4gIGlmIChudWxsICE9PSBhKSB7XG4gICAgc3RhcnRXcml0ZSh0aGlzLCBuLCBhKTtcbiAgfVxufTtcblxuU3RvcmUucHJvdG90eXBlLnJlYWRRdWVyeSA9IGZ1bmN0aW9uIHJlYWRRdWVyeShlKSB7XG4gIHZhciBpID0gdChlLnF1ZXJ5LCBlLnZhcmlhYmxlcyk7XG4gIGkucXVlcnkgPSByKGkucXVlcnkpO1xuICByZXR1cm4gcmVhZCh0aGlzLCBpKS5kYXRhO1xufTtcblxuU3RvcmUucHJvdG90eXBlLnJlYWRGcmFnbWVudCA9IGZ1bmN0aW9uIHJlYWRGcmFnbWVudCQxKGUsIHQsIGkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlYWRGcmFnbWVudChlLCB0LCByLCBpKSB7XG4gICAgdmFyIG4gPSBnZXRGcmFnbWVudHModCk7XG4gICAgdmFyIGEgPSBPYmplY3Qua2V5cyhuKTtcbiAgICB2YXIgbyA9IG5bYVswXV07XG4gICAgaWYgKCFvKSB7XG4gICAgICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgd2FybihcInJlYWRGcmFnbWVudCguLi4pIHdhcyBjYWxsZWQgd2l0aCBhbiBlbXB0eSBmcmFnbWVudC5cXG5Zb3UgaGF2ZSB0byBjYWxsIGl0IHdpdGggYXQgbGVhc3Qgb25lIGZyYWdtZW50IGluIHlvdXIgR3JhcGhRTCBkb2N1bWVudC5cIiwgNik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIHMgPSBnZXRGcmFnbWVudFR5cGVOYW1lKG8pO1xuICAgIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiByICYmICFyLl9fdHlwZW5hbWUpIHtcbiAgICAgIHIuX190eXBlbmFtZSA9IHM7XG4gICAgfVxuICAgIHZhciB1ID0gZS5rZXlPZkVudGl0eShyKTtcbiAgICBpZiAoIXUpIHtcbiAgICAgIFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiB3YXJuKFwiQ2FuJ3QgZ2VuZXJhdGUgYSBrZXkgZm9yIHJlYWRGcmFnbWVudCguLi4pLlxcbllvdSBoYXZlIHRvIHBhc3MgYW4gYGlkYCBvciBgX2lkYCBmaWVsZCBvciBjcmVhdGUgYSBjdXN0b20gYGtleXNgIGNvbmZpZyBmb3IgYFwiICsgcyArIFwiYC5cIiwgNyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgICAgcHVzaERlYnVnTm9kZShzLCBvKTtcbiAgICB9XG4gICAgdmFyIGMgPSByZWFkU2VsZWN0aW9uKG1ha2VDb250ZXh0KGUsIGkgfHwge30sIG4sIHMsIHUpLCB1LCBnZXRTZWxlY3Rpb25TZXQobyksIHt9KSB8fCBudWxsO1xuICAgIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICAgIHBvcERlYnVnTm9kZSgpO1xuICAgIH1cbiAgICByZXR1cm4gYztcbiAgfSh0aGlzLCByKGUpLCB0LCBpKTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS53cml0ZUZyYWdtZW50ID0gZnVuY3Rpb24gd3JpdGVGcmFnbWVudCQxKGUsIHQsIGkpIHtcbiAgIWZ1bmN0aW9uIHdyaXRlRnJhZ21lbnQoZSwgdCwgciwgaSkge1xuICAgIHZhciBuID0gZ2V0RnJhZ21lbnRzKHQpO1xuICAgIHZhciBhID0gbltPYmplY3Qua2V5cyhuKVswXV07XG4gICAgaWYgKCFhKSB7XG4gICAgICByZXR1cm4gXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WID8gd2FybihcIndyaXRlRnJhZ21lbnQoLi4uKSB3YXMgY2FsbGVkIHdpdGggYW4gZW1wdHkgZnJhZ21lbnQuXFxuWW91IGhhdmUgdG8gY2FsbCBpdCB3aXRoIGF0IGxlYXN0IG9uZSBmcmFnbWVudCBpbiB5b3VyIEdyYXBoUUwgZG9jdW1lbnQuXCIsIDExKSA6IHZvaWQgMDtcbiAgICB9XG4gICAgdmFyIG8gPSBnZXRGcmFnbWVudFR5cGVOYW1lKGEpO1xuICAgIHZhciBzID0gaCh7fSwge1xuICAgICAgX190eXBlbmFtZTogb1xuICAgIH0sIHIpO1xuICAgIHZhciB1ID0gZS5rZXlPZkVudGl0eShzKTtcbiAgICBpZiAoIXUpIHtcbiAgICAgIHJldHVybiBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPyB3YXJuKFwiQ2FuJ3QgZ2VuZXJhdGUgYSBrZXkgZm9yIHdyaXRlRnJhZ21lbnQoLi4uKSBkYXRhLlxcbllvdSBoYXZlIHRvIHBhc3MgYW4gYGlkYCBvciBgX2lkYCBmaWVsZCBvciBjcmVhdGUgYSBjdXN0b20gYGtleXNgIGNvbmZpZyBmb3IgYFwiICsgbyArIFwiYC5cIiwgMTIpIDogdm9pZCAwO1xuICAgIH1cbiAgICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgICBwdXNoRGVidWdOb2RlKG8sIGEpO1xuICAgIH1cbiAgICB3cml0ZVNlbGVjdGlvbihtYWtlQ29udGV4dChlLCBpIHx8IHt9LCBuLCBvLCB1LCB2b2lkIDApLCB1LCBnZXRTZWxlY3Rpb25TZXQoYSksIHMpO1xuICAgIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICAgIHBvcERlYnVnTm9kZSgpO1xuICAgIH1cbiAgfSh0aGlzLCByKGUpLCB0LCBpKTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24gbGluayhlLCB0LCByLCBpKSB7XG4gIHZhciBuID0gdm9pZCAwICE9PSBpID8gciA6IG51bGw7XG4gIHZhciBsaW5rID0gdm9pZCAwICE9PSBpID8gaSA6IHI7XG4gIHZhciBhID0gZW5zdXJlTGluayh0aGlzLCBlKTtcbiAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGEpIHtcbiAgICB3cml0ZUxpbmsoYSwga2V5T2ZGaWVsZCh0LCBuKSwgZW5zdXJlTGluayh0aGlzLCBsaW5rKSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHF1ZXJ5KGUsIHQsIHIsIGksIG4pIHtcbiAgaW5pdERhdGFTdGF0ZShcInJlYWRcIiwgZS5kYXRhLCByICYmIG4gfHwgbnVsbCk7XG4gIHZhciBhID0gcmVhZChlLCB0LCByLCBpKTtcbiAgY2xlYXJEYXRhU3RhdGUoKTtcbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIHJlYWQoZSwgdCwgciwgaSkge1xuICB2YXIgbiA9IGdldE1haW5PcGVyYXRpb24odC5xdWVyeSk7XG4gIHZhciBhID0gZS5yb290RmllbGRzW24ub3BlcmF0aW9uXTtcbiAgdmFyIG8gPSBnZXRTZWxlY3Rpb25TZXQobik7XG4gIHZhciBzID0gbWFrZUNvbnRleHQoZSwgbm9ybWFsaXplVmFyaWFibGVzKG4sIHQudmFyaWFibGVzKSwgZ2V0RnJhZ21lbnRzKHQucXVlcnkpLCBhLCBhLCAhMSwgaSk7XG4gIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICBwdXNoRGVidWdOb2RlKGEsIG4pO1xuICB9XG4gIHZhciB1ID0gYSAhPT0gcy5zdG9yZS5yb290RmllbGRzLnF1ZXJ5ID8gcmVhZFJvb3QocywgYSwgbywgciB8fCB7fSkgOiByZWFkU2VsZWN0aW9uKHMsIGEsIG8sIHt9KTtcbiAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgIHBvcERlYnVnTm9kZSgpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGVwZW5kZW5jaWVzOiBnZXRDdXJyZW50RGVwZW5kZW5jaWVzKCksXG4gICAgcGFydGlhbDogcy5wYXJ0aWFsIHx8ICF1LFxuICAgIGRhdGE6IHUgfHwgbnVsbFxuICB9O1xufVxuXG5mdW5jdGlvbiByZWFkUm9vdChlLCB0LCByLCBpKSB7XG4gIHZhciBuID0gZS5zdG9yZS5yb290TmFtZXNbdF0gPyB0IDogaS5fX3R5cGVuYW1lO1xuICBpZiAoXCJzdHJpbmdcIiAhPSB0eXBlb2Ygbikge1xuICAgIHJldHVybiBpO1xuICB9XG4gIHZhciBhID0gbWFrZVNlbGVjdGlvbkl0ZXJhdG9yKHQsIHQsIHIsIGUpO1xuICB2YXIgbyA9IHtcbiAgICBfX3R5cGVuYW1lOiBuXG4gIH07XG4gIHZhciBzO1xuICB3aGlsZSAocyA9IGEoKSkge1xuICAgIHZhciB1ID0gZ2V0RmllbGRBbGlhcyhzKTtcbiAgICB2YXIgYyA9IGlbdV07XG4gICAgZS5fX2ludGVybmFsLnBhdGgucHVzaCh1KTtcbiAgICBpZiAocy5zZWxlY3Rpb25TZXQgJiYgbnVsbCAhPT0gYykge1xuICAgICAgdmFyIGwgPSBlbnN1cmVEYXRhKGMpO1xuICAgICAgb1t1XSA9IHJlYWRSb290RmllbGQoZSwgZ2V0U2VsZWN0aW9uU2V0KHMpLCBsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb1t1XSA9IGM7XG4gICAgfVxuICAgIGUuX19pbnRlcm5hbC5wYXRoLnBvcCgpO1xuICB9XG4gIHJldHVybiBvO1xufVxuXG5mdW5jdGlvbiByZWFkUm9vdEZpZWxkKGUsIHQsIHIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocikpIHtcbiAgICB2YXIgaSA9IG5ldyBBcnJheShyLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgbiA9IDAsIGEgPSByLmxlbmd0aDsgbiA8IGE7IG4rKykge1xuICAgICAgZS5fX2ludGVybmFsLnBhdGgucHVzaChuKTtcbiAgICAgIGlbbl0gPSByZWFkUm9vdEZpZWxkKGUsIHQsIHJbbl0pO1xuICAgICAgZS5fX2ludGVybmFsLnBhdGgucG9wKCk7XG4gICAgfVxuICAgIHJldHVybiBpO1xuICB9IGVsc2UgaWYgKG51bGwgPT09IHIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgbyA9IGUuc3RvcmUua2V5T2ZFbnRpdHkocik7XG4gIGlmIChudWxsICE9PSBvKSB7XG4gICAgdmFyIHMgPSByZWFkU2VsZWN0aW9uKGUsIG8sIHQsIHt9KTtcbiAgICByZXR1cm4gdm9pZCAwID09PSBzID8gbnVsbCA6IHM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlYWRSb290KGUsIHIuX190eXBlbmFtZSwgdCwgcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVhZFNlbGVjdGlvbihlLCB0LCByLCBpLCBuKSB7XG4gIHZhciBhID0gZS5zdG9yZTtcbiAgdmFyIG8gPSB0ID09PSBhLnJvb3RGaWVsZHMucXVlcnk7XG4gIHZhciBzID0gbiAmJiBhLmtleU9mRW50aXR5KG4pIHx8IHQ7XG4gIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICBpZiAoIW8gJiYgZS5zdG9yZS5yb290TmFtZXNbc10pIHtcbiAgICAgIHdhcm4oXCJJbnZhbGlkIHJvb3QgdHJhdmVyc2FsOiBBIHNlbGVjdGlvbiB3YXMgYmVpbmcgcmVhZCBvbiBgXCIgKyBzICsgXCJgIHdoaWNoIGlzIGFuIHVuY2FjaGVkIHJvb3QgdHlwZS5cXG5UaGUgYFwiICsgZS5zdG9yZS5yb290RmllbGRzLm11dGF0aW9uICsgXCJgIGFuZCBgXCIgKyBlLnN0b3JlLnJvb3RGaWVsZHMuc3Vic2NyaXB0aW9uICsgXCJgIHR5cGVzIGFyZSBzcGVjaWFsIE9wZXJhdGlvbiBSb290IFR5cGVzIGFuZCBjYW5ub3QgYmUgcmVhZCBiYWNrIGZyb20gdGhlIGNhY2hlLlwiLCAyNSk7XG4gICAgfVxuICB9XG4gIHZhciB1ID0gIW8gPyByZWFkUmVjb3JkKHMsIFwiX190eXBlbmFtZVwiKSB8fCBuICYmIG4uX190eXBlbmFtZSA6IHQ7XG4gIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiB1KSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKG4gJiYgdSAhPT0gbi5fX3R5cGVuYW1lKSB7XG4gICAgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmIHdhcm4oXCJJbnZhbGlkIHJlc29sdmVyIGRhdGE6IFRoZSByZXNvbHZlciBhdCBgXCIgKyBzICsgXCJgIHJldHVybmVkIGFuIGludmFsaWQgdHlwZW5hbWUgdGhhdCBjb3VsZCBub3QgYmUgcmVjb25jaWxlZCB3aXRoIHRoZSBjYWNoZS5cIiwgOCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBjID0gbWFrZVNlbGVjdGlvbkl0ZXJhdG9yKHUsIHMsIHIsIGUpO1xuICB2YXIgbDtcbiAgdmFyIGQgPSAhMTtcbiAgdmFyIGYgPSAhMTtcbiAgd2hpbGUgKHZvaWQgMCAhPT0gKGwgPSBjKCkpKSB7XG4gICAgdmFyIHAgPSBnZXROYW1lKGwpO1xuICAgIHZhciB2ID0gZ2V0RmllbGRBcmd1bWVudHMobCwgZS52YXJpYWJsZXMpO1xuICAgIHZhciB5ID0gZ2V0RmllbGRBbGlhcyhsKTtcbiAgICB2YXIgbSA9IGtleU9mRmllbGQocCwgdik7XG4gICAgdmFyIGggPSBqb2luS2V5cyhzLCBtKTtcbiAgICB2YXIgZyA9IHJlYWRSZWNvcmQocywgbSk7XG4gICAgdmFyIE4gPSBuID8gbltwXSA6IHZvaWQgMDtcbiAgICB2YXIgayA9IGEucmVzb2x2ZXJzW3VdO1xuICAgIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgYS5zY2hlbWEgJiYgdSkge1xuICAgICAgaXNGaWVsZEF2YWlsYWJsZU9uVHlwZShhLnNjaGVtYSwgdSwgcCk7XG4gICAgfVxuICAgIGlmIChcIl9fdHlwZW5hbWVcIiA9PT0gcCkge1xuICAgICAgaVt5XSA9IHU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIE8gPSB2b2lkIDA7XG4gICAgZS5fX2ludGVybmFsLnBhdGgucHVzaCh5KTtcbiAgICBpZiAodm9pZCAwICE9PSBOICYmIHZvaWQgMCA9PT0gbC5zZWxlY3Rpb25TZXQpIHtcbiAgICAgIE8gPSBOO1xuICAgIH0gZWxzZSBpZiAoXCJyZWFkXCIgPT09IGdldEN1cnJlbnRPcGVyYXRpb24oKSAmJiBrICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Yga1twXSkge1xuICAgICAgdXBkYXRlQ29udGV4dChlLCBpLCB1LCBzLCBoLCBwKTtcbiAgICAgIGlmICh2b2lkIDAgIT09IGcpIHtcbiAgICAgICAgaVt5XSA9IGc7XG4gICAgICB9XG4gICAgICBPID0ga1twXShpLCB2IHx8IHt9LCBhLCBlKTtcbiAgICAgIGlmIChsLnNlbGVjdGlvblNldCkge1xuICAgICAgICBPID0gcmVzb2x2ZVJlc29sdmVyUmVzdWx0KGUsIHUsIHAsIGgsIGdldFNlbGVjdGlvblNldChsKSwgaVt5XSwgTyk7XG4gICAgICB9XG4gICAgICBpZiAoYS5zY2hlbWEgJiYgbnVsbCA9PT0gTyAmJiAhaXNGaWVsZE51bGxhYmxlKGEuc2NoZW1hLCB1LCBwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghbC5zZWxlY3Rpb25TZXQpIHtcbiAgICAgIE8gPSBnO1xuICAgIH0gZWxzZSBpZiAodm9pZCAwICE9PSBOKSB7XG4gICAgICBPID0gcmVzb2x2ZVJlc29sdmVyUmVzdWx0KGUsIHUsIHAsIGgsIGdldFNlbGVjdGlvblNldChsKSwgaVt5XSwgTik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfID0gcmVhZExpbmsocywgbSk7XG4gICAgICBpZiAodm9pZCAwICE9PSBfKSB7XG4gICAgICAgIE8gPSByZXNvbHZlTGluayhlLCBfLCB1LCBwLCBnZXRTZWxlY3Rpb25TZXQobCksIGlbeV0pO1xuICAgICAgfSBlbHNlIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBnICYmIG51bGwgIT09IGcpIHtcbiAgICAgICAgTyA9IGc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2b2lkIDAgPT09IE8gJiYgZ2V0RmllbGRFcnJvcihlKSkge1xuICAgICAgZiA9ICEwO1xuICAgICAgTyA9IG51bGw7XG4gICAgfVxuICAgIGUuX19pbnRlcm5hbC5wYXRoLnBvcCgpO1xuICAgIGlmICh2b2lkIDAgPT09IE8gJiYgYS5zY2hlbWEgJiYgaXNGaWVsZE51bGxhYmxlKGEuc2NoZW1hLCB1LCBwKSkge1xuICAgICAgZiA9ICEwO1xuICAgICAgaVt5XSA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh2b2lkIDAgPT09IE8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgZCA9ICEwO1xuICAgICAgaVt5XSA9IE87XG4gICAgfVxuICB9XG4gIGlmIChmKSB7XG4gICAgZS5wYXJ0aWFsID0gITA7XG4gIH1cbiAgcmV0dXJuIG8gJiYgZiAmJiAhZCA/IHZvaWQgMCA6IGk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVSZXNvbHZlclJlc3VsdChlLCB0LCByLCBpLCBuLCBhLCBvKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG8pKSB7XG4gICAgdmFyIHMgPSBlLnN0b3JlO1xuICAgIHZhciB1ID0gcy5zY2hlbWEgPyBpc0xpc3ROdWxsYWJsZShzLnNjaGVtYSwgdCwgcikgOiAhMTtcbiAgICB2YXIgYyA9IG5ldyBBcnJheShvLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgbCA9IDAsIGQgPSBvLmxlbmd0aDsgbCA8IGQ7IGwrKykge1xuICAgICAgZS5fX2ludGVybmFsLnBhdGgucHVzaChsKTtcbiAgICAgIHZhciBmID0gcmVzb2x2ZVJlc29sdmVyUmVzdWx0KGUsIHQsIHIsIGpvaW5LZXlzKGksIFwiXCIgKyBsKSwgbiwgbnVsbCAhPSBhID8gYVtsXSA6IHZvaWQgMCwgb1tsXSk7XG4gICAgICBlLl9faW50ZXJuYWwucGF0aC5wb3AoKTtcbiAgICAgIGlmICh2b2lkIDAgPT09IGYgJiYgIXUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY1tsXSA9IHZvaWQgMCAhPT0gZiA/IGYgOiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYztcbiAgfSBlbHNlIGlmIChudWxsID09IG8pIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIGlmIChudWxsID09PSBhKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSBpZiAoZnVuY3Rpb24gaXNEYXRhT3JLZXkoZSkge1xuICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBlIHx8IFwib2JqZWN0XCIgPT0gdHlwZW9mIGUgJiYgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZS5fX3R5cGVuYW1lO1xuICB9KG8pKSB7XG4gICAgdmFyIHAgPSBhIHx8IHt9O1xuICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBvID8gcmVhZFNlbGVjdGlvbihlLCBvLCBuLCBwKSA6IHJlYWRTZWxlY3Rpb24oZSwgaSwgbiwgcCwgbyk7XG4gIH0gZWxzZSB7XG4gICAgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmIHdhcm4oXCJJbnZhbGlkIHJlc29sdmVyIHZhbHVlOiBUaGUgZmllbGQgYXQgYFwiICsgaSArIFwiYCBpcyBhIHNjYWxhciAobnVtYmVyLCBib29sZWFuLCBldGMpLCBidXQgdGhlIEdyYXBoUUwgcXVlcnkgZXhwZWN0cyBhIHNlbGVjdGlvbiBzZXQgZm9yIHRoaXMgZmllbGQuXCIsIDkpO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlTGluayhlLCB0LCByLCBpLCBuLCBhKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHQpKSB7XG4gICAgdmFyIG8gPSBlLnN0b3JlO1xuICAgIHZhciBzID0gby5zY2hlbWEgPyBpc0xpc3ROdWxsYWJsZShvLnNjaGVtYSwgciwgaSkgOiAhMTtcbiAgICB2YXIgdSA9IG5ldyBBcnJheSh0Lmxlbmd0aCk7XG4gICAgZm9yICh2YXIgYyA9IDAsIGwgPSB0Lmxlbmd0aDsgYyA8IGw7IGMrKykge1xuICAgICAgZS5fX2ludGVybmFsLnBhdGgucHVzaChjKTtcbiAgICAgIHZhciBkID0gcmVzb2x2ZUxpbmsoZSwgdFtjXSwgciwgaSwgbiwgbnVsbCAhPSBhID8gYVtjXSA6IHZvaWQgMCk7XG4gICAgICBlLl9faW50ZXJuYWwucGF0aC5wb3AoKTtcbiAgICAgIGlmICh2b2lkIDAgPT09IGQgJiYgIXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdVtjXSA9IHZvaWQgMCAhPT0gZCA/IGQgOiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdTtcbiAgfSBlbHNlIGlmIChudWxsID09PSB0IHx8IG51bGwgPT09IGEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVhZFNlbGVjdGlvbihlLCB0LCBuLCBhIHx8IHt9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRDYWNoZU91dGNvbWUoZSwgdCkge1xuICByZXR1cm4gaShlLmtpbmQsIGUsIGgoe30sIGUuY29udGV4dCwge1xuICAgIG1ldGE6IGgoe30sIGUuY29udGV4dC5tZXRhLCB7XG4gICAgICBjYWNoZU91dGNvbWU6IHRcbiAgICB9KVxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIHRvUmVxdWVzdFBvbGljeShlLCB0KSB7XG4gIHJldHVybiBpKGUua2luZCwgZSwgaCh7fSwgZS5jb250ZXh0LCB7XG4gICAgcmVxdWVzdFBvbGljeTogdFxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIGNhY2hlRXhjaGFuZ2UoZSkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHZhciBtID0gdC5mb3J3YXJkO1xuICAgIHZhciBoID0gdC5jbGllbnQ7XG4gICAgdmFyIGcgPSB0LmRpc3BhdGNoRGVidWc7XG4gICAgdmFyIE4gPSBuZXcgU3RvcmUoZSk7XG4gICAgdmFyIGs7XG4gICAgaWYgKGUgJiYgZS5zdG9yYWdlKSB7XG4gICAgICBrID0gZS5zdG9yYWdlLnJlYWREYXRhKCkudGhlbigoZnVuY3Rpb24odCkge1xuICAgICAgICAhZnVuY3Rpb24gaHlkcmF0ZURhdGEoZSwgdCwgcikge1xuICAgICAgICAgIGluaXREYXRhU3RhdGUoXCJ3cml0ZVwiLCBlLCBudWxsKTtcbiAgICAgICAgICBmb3IgKHZhciBpIGluIHIpIHtcbiAgICAgICAgICAgIHZhciBuID0gcltpXTtcbiAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IG4pIHtcbiAgICAgICAgICAgICAgdmFyIGEgPSBkZXNlcmlhbGl6ZUtleUluZm8oaSk7XG4gICAgICAgICAgICAgIHZhciBvID0gYS5lbnRpdHlLZXk7XG4gICAgICAgICAgICAgIHZhciBzID0gYS5maWVsZEtleTtcbiAgICAgICAgICAgICAgaWYgKFwiOlwiID09PSBuWzBdKSB7XG4gICAgICAgICAgICAgICAgd3JpdGVMaW5rKG8sIHMsIEpTT04ucGFyc2Uobi5zbGljZSgxKSkpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdyaXRlUmVjb3JkKG8sIHMsIEpTT04ucGFyc2UobikpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNsZWFyRGF0YVN0YXRlKCk7XG4gICAgICAgICAgZS5zdG9yYWdlID0gdDtcbiAgICAgICAgfShOLmRhdGEsIGUuc3RvcmFnZSwgdCk7XG4gICAgICB9KSk7XG4gICAgfVxuICAgIHZhciBPID0gbmV3IE1hcDtcbiAgICB2YXIgXyA9IFtdO1xuICAgIHZhciBFID0gbmV3IE1hcDtcbiAgICB2YXIgYiA9IG1ha2VEaWN0KCk7XG4gICAgdmFyIHcgPSBuZXcgU2V0O1xuICAgIHZhciBEID0gbWFrZURpY3QoKTtcbiAgICBmdW5jdGlvbiBpc0Jsb2NrZWRCeU9wdGltaXN0aWNVcGRhdGUoZSkge1xuICAgICAgZm9yICh2YXIgdCBpbiBlKSB7XG4gICAgICAgIGlmIChiW3RdKSB7XG4gICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gITE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbGxlY3RQZW5kaW5nT3BlcmF0aW9ucyhlLCB0KSB7XG4gICAgICBpZiAodCkge1xuICAgICAgICBmb3IgKHZhciByIGluIHQpIHtcbiAgICAgICAgICB2YXIgaSA9IERbcl07XG4gICAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICAgIERbcl0gPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwLCBhID0gaS5sZW5ndGg7IG4gPCBhOyBuKyspIHtcbiAgICAgICAgICAgICAgZS5hZGQoaVtuXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGV4ZWN1dGVQZW5kaW5nT3BlcmF0aW9ucyhlLCB0KSB7XG4gICAgICB0LmZvckVhY2goKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgaWYgKHQgIT09IGUua2V5KSB7XG4gICAgICAgICAgdmFyIHIgPSBFLmdldCh0KTtcbiAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgRS5kZWxldGUodCk7XG4gICAgICAgICAgICB2YXIgaSA9IFwiY2FjaGUtZmlyc3RcIjtcbiAgICAgICAgICAgIGlmICh3Lmhhcyh0KSkge1xuICAgICAgICAgICAgICB3LmRlbGV0ZSh0KTtcbiAgICAgICAgICAgICAgaSA9IFwiY2FjaGUtYW5kLW5ldHdvcmtcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgucmVleGVjdXRlT3BlcmF0aW9uKHRvUmVxdWVzdFBvbGljeShyLCBpKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHByZXBhcmVGb3J3YXJkZWRPcGVyYXRpb24oZSkge1xuICAgICAgaWYgKFwicXVlcnlcIiA9PT0gZS5raW5kKSB7XG4gICAgICAgIHJlc2VydmVMYXllcihOLmRhdGEsIGUua2V5KTtcbiAgICAgIH0gZWxzZSBpZiAoXCJ0ZWFyZG93blwiID09PSBlLmtpbmQpIHtcbiAgICAgICAgRS5kZWxldGUoZS5rZXkpO1xuICAgICAgICBub29wRGF0YVN0YXRlKE4uZGF0YSwgZS5rZXkpO1xuICAgICAgfSBlbHNlIGlmIChcIm11dGF0aW9uXCIgPT09IGUua2luZCAmJiBcIm5ldHdvcmstb25seVwiICE9PSBlLmNvbnRleHQucmVxdWVzdFBvbGljeSkge1xuICAgICAgICB2YXIgdCA9IGZ1bmN0aW9uIHdyaXRlT3B0aW1pc3RpYyhlLCB0LCByKSB7XG4gICAgICAgICAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgICAgICAgICAgaW52YXJpYW50KFwibXV0YXRpb25cIiA9PT0gZ2V0TWFpbk9wZXJhdGlvbih0LnF1ZXJ5KS5vcGVyYXRpb24sIFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViA/IFwid3JpdGVPcHRpbWlzdGljKC4uLikgd2FzIGNhbGxlZCB3aXRoIGFuIG9wZXJhdGlvbiB0aGF0IGlzIG5vdCBhIG11dGF0aW9uLlxcblRoaXMgY2FzZSBpcyB1bnN1cHBvcnRlZCBhbmQgc2hvdWxkIG5ldmVyIG9jY3VyLlwiIDogXCJcIiwgMTApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbml0RGF0YVN0YXRlKFwid3JpdGVcIiwgZS5kYXRhLCByLCAhMCk7XG4gICAgICAgICAgdmFyIGkgPSBzdGFydFdyaXRlKGUsIHQsIHt9LCB2b2lkIDAsICEwKTtcbiAgICAgICAgICBjbGVhckRhdGFTdGF0ZSgpO1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9KE4sIGUsIGUua2V5KS5kZXBlbmRlbmNpZXM7XG4gICAgICAgIGlmICghZnVuY3Rpb24gaXNEaWN0RW1wdHkoZSkge1xuICAgICAgICAgIGZvciAodmFyIHQgaW4gZSkge1xuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgIH0odCkpIHtcbiAgICAgICAgICBmb3IgKHZhciBuIGluIHQpIHtcbiAgICAgICAgICAgIGJbbl0gPSAhMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgTy5zZXQoZS5rZXksIHQpO1xuICAgICAgICAgIHZhciBhID0gbmV3IFNldDtcbiAgICAgICAgICBjb2xsZWN0UGVuZGluZ09wZXJhdGlvbnMoYSwgdCk7XG4gICAgICAgICAgZXhlY3V0ZVBlbmRpbmdPcGVyYXRpb25zKGUsIGEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaShlLmtpbmQsIHtcbiAgICAgICAga2V5OiBlLmtleSxcbiAgICAgICAgcXVlcnk6IHIoZS5xdWVyeSksXG4gICAgICAgIHZhcmlhYmxlczogZS52YXJpYWJsZXMgPyBmaWx0ZXJWYXJpYWJsZXMoZ2V0TWFpbk9wZXJhdGlvbihlLnF1ZXJ5KSwgZS52YXJpYWJsZXMpIDogZS52YXJpYWJsZXNcbiAgICAgIH0sIGUuY29udGV4dCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZURlcGVuZGVuY2llcyhlLCB0KSB7XG4gICAgICBmb3IgKHZhciByIGluIHQpIHtcbiAgICAgICAgKERbcl0gfHwgKERbcl0gPSBbXSkpLnB1c2goZS5rZXkpO1xuICAgICAgICBFLnNldChlLmtleSwgZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9wZXJhdGlvblJlc3VsdEZyb21DYWNoZShlKSB7XG4gICAgICB2YXIgdCA9IHF1ZXJ5KE4sIGUpO1xuICAgICAgdmFyIHIgPSB0LmRhdGEgPyAhdC5wYXJ0aWFsID8gXCJoaXRcIiA6IFwicGFydGlhbFwiIDogXCJtaXNzXCI7XG4gICAgICB1cGRhdGVEZXBlbmRlbmNpZXMoZSwgdC5kZXBlbmRlbmNpZXMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3V0Y29tZTogcixcbiAgICAgICAgb3BlcmF0aW9uOiBlLFxuICAgICAgICBkYXRhOiB0LmRhdGEsXG4gICAgICAgIGRlcGVuZGVuY2llczogdC5kZXBlbmRlbmNpZXNcbiAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNhY2hlV2l0aFJlc3VsdChlLCB0KSB7XG4gICAgICB2YXIgciA9IGUub3BlcmF0aW9uO1xuICAgICAgdmFyIGkgPSBlLmVycm9yO1xuICAgICAgdmFyIG4gPSBlLmV4dGVuc2lvbnM7XG4gICAgICB2YXIgYSA9IHIua2V5O1xuICAgICAgaWYgKFwibXV0YXRpb25cIiA9PT0gci5raW5kKSB7XG4gICAgICAgIGNvbGxlY3RQZW5kaW5nT3BlcmF0aW9ucyh0LCBPLmdldChhKSk7XG4gICAgICAgIE8uZGVsZXRlKGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZXJ2ZUxheWVyKE4uZGF0YSwgci5rZXkpO1xuICAgICAgfVxuICAgICAgdmFyIG87XG4gICAgICBpZiAoZS5kYXRhKSB7XG4gICAgICAgIGNvbGxlY3RQZW5kaW5nT3BlcmF0aW9ucyh0LCB3cml0ZShOLCByLCBlLmRhdGEsIGUuZXJyb3IsIGEpLmRlcGVuZGVuY2llcyk7XG4gICAgICAgIHZhciBzID0gcXVlcnkoTiwgciwgZS5kYXRhLCBlLmVycm9yLCBhKTtcbiAgICAgICAgZS5kYXRhID0gcy5kYXRhO1xuICAgICAgICBpZiAoXCJxdWVyeVwiID09PSByLmtpbmQpIHtcbiAgICAgICAgICBjb2xsZWN0UGVuZGluZ09wZXJhdGlvbnModCwgbyA9IHMuZGVwZW5kZW5jaWVzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9vcERhdGFTdGF0ZShOLmRhdGEsIHIua2V5KTtcbiAgICAgIH1cbiAgICAgIGlmIChvKSB7XG4gICAgICAgIHVwZGF0ZURlcGVuZGVuY2llcyhlLm9wZXJhdGlvbiwgbyk7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhOiBlLmRhdGEsXG4gICAgICAgIGVycm9yOiBpLFxuICAgICAgICBleHRlbnNpb25zOiBuLFxuICAgICAgICBvcGVyYXRpb246IHJcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgdCA9IG4oZSk7XG4gICAgICB2YXIgciA9IGsgPyBhKChmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBvKGVbMF0pO1xuICAgICAgfSkpKHMoMSkodShjKChmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgIHJldHVybiBlLnB1c2godCksIGU7XG4gICAgICB9KSwgW10pKHQpLCBsKGspKSkpIDogZDtcbiAgICAgIHZhciBpID0gbihmKFsgciwgdCBdKSk7XG4gICAgICB2YXIgRSA9IG4ocChvcGVyYXRpb25SZXN1bHRGcm9tQ2FjaGUpKHYoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIFwicXVlcnlcIiA9PT0gZS5raW5kICYmIFwibmV0d29yay1vbmx5XCIgIT09IGUuY29udGV4dC5yZXF1ZXN0UG9saWN5O1xuICAgICAgfSkpKGkpKSk7XG4gICAgICB2YXIgRCA9IHYoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIFwicXVlcnlcIiAhPT0gZS5raW5kIHx8IFwibmV0d29yay1vbmx5XCIgPT09IGUuY29udGV4dC5yZXF1ZXN0UG9saWN5O1xuICAgICAgfSkpKGkpO1xuICAgICAgdmFyIEYgPSBwKChmdW5jdGlvbihlKSB7XG4gICAgICAgIFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiBnKHtcbiAgICAgICAgICB0eXBlOiBcImNhY2hlTWlzc1wiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlIHJlc3VsdCBjb3VsZCBub3QgYmUgcmV0cmlldmVkIGZyb20gdGhlIGNhY2hlXCIsXG4gICAgICAgICAgb3BlcmF0aW9uOiBlLm9wZXJhdGlvbixcbiAgICAgICAgICBzb3VyY2U6IFwiY2FjaGVFeGNoYW5nZVwiXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWRkQ2FjaGVPdXRjb21lKGUub3BlcmF0aW9uLCBcIm1pc3NcIik7XG4gICAgICB9KSkodigoZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gXCJtaXNzXCIgPT09IGUub3V0Y29tZSAmJiBcImNhY2hlLW9ubHlcIiAhPT0gZS5vcGVyYXRpb24uY29udGV4dC5yZXF1ZXN0UG9saWN5ICYmICFpc0Jsb2NrZWRCeU9wdGltaXN0aWNVcGRhdGUoZS5kZXBlbmRlbmNpZXMpO1xuICAgICAgfSkpKEUpKTtcbiAgICAgIHZhciBTID0gcCgoZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgdCA9IGUub3BlcmF0aW9uO1xuICAgICAgICB2YXIgciA9IGUub3V0Y29tZTtcbiAgICAgICAgdmFyIGkgPSBlLmRlcGVuZGVuY2llcztcbiAgICAgICAgdmFyIG4gPSB7XG4gICAgICAgICAgb3BlcmF0aW9uOiBhZGRDYWNoZU91dGNvbWUodCwgciksXG4gICAgICAgICAgZGF0YTogZS5kYXRhLFxuICAgICAgICAgIGVycm9yOiBlLmVycm9yLFxuICAgICAgICAgIGV4dGVuc2lvbnM6IGUuZXh0ZW5zaW9uc1xuICAgICAgICB9O1xuICAgICAgICBpZiAoXCJjYWNoZS1hbmQtbmV0d29ya1wiID09PSB0LmNvbnRleHQucmVxdWVzdFBvbGljeSB8fCBcImNhY2hlLWZpcnN0XCIgPT09IHQuY29udGV4dC5yZXF1ZXN0UG9saWN5ICYmIFwicGFydGlhbFwiID09PSByKSB7XG4gICAgICAgICAgbi5zdGFsZSA9ICEwO1xuICAgICAgICAgIGlmICghaXNCbG9ja2VkQnlPcHRpbWlzdGljVXBkYXRlKGkpKSB7XG4gICAgICAgICAgICBoLnJlZXhlY3V0ZU9wZXJhdGlvbih0b1JlcXVlc3RQb2xpY3kodCwgXCJuZXR3b3JrLW9ubHlcIikpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoXCJjYWNoZS1hbmQtbmV0d29ya1wiID09PSB0LmNvbnRleHQucmVxdWVzdFBvbGljeSkge1xuICAgICAgICAgICAgdy5hZGQodC5rZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgZyh7XG4gICAgICAgICAgdHlwZTogXCJjYWNoZUhpdFwiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiQSByZXF1ZXN0ZWQgb3BlcmF0aW9uIHdhcyBmb3VuZCBhbmQgcmV0dXJuZWQgZnJvbSB0aGUgY2FjaGUuXCIsXG4gICAgICAgICAgb3BlcmF0aW9uOiBlLm9wZXJhdGlvbixcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB2YWx1ZTogblxuICAgICAgICAgIH0sXG4gICAgICAgICAgc291cmNlOiBcImNhY2hlRXhjaGFuZ2VcIlxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG47XG4gICAgICB9KSkodigoZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gXCJtaXNzXCIgIT09IGUub3V0Y29tZSB8fCBcImNhY2hlLW9ubHlcIiA9PT0gZS5vcGVyYXRpb24uY29udGV4dC5yZXF1ZXN0UG9saWN5O1xuICAgICAgfSkpKEUpKTtcbiAgICAgIHZhciBMID0gbihtKHAocHJlcGFyZUZvcndhcmRlZE9wZXJhdGlvbikoeShbIEQsIEYgXSkpKSk7XG4gICAgICB2YXIgcSA9IHAoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIHQgPSBuZXcgU2V0O1xuICAgICAgICB2YXIgciA9IHVwZGF0ZUNhY2hlV2l0aFJlc3VsdChlLCB0KTtcbiAgICAgICAgZXhlY3V0ZVBlbmRpbmdPcGVyYXRpb25zKGUub3BlcmF0aW9uLCB0KTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgICB9KSkodigoZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gIU8uaGFzKGUub3BlcmF0aW9uLmtleSk7XG4gICAgICB9KSkoTCkpO1xuICAgICAgdmFyIEkgPSBhKChmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChfLnB1c2goZSkgPCBPLnNpemUpIHtcbiAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IF8ubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgICByZXNlcnZlTGF5ZXIoTi5kYXRhLCBfW3RdLm9wZXJhdGlvbi5rZXkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIHIgaW4gYikge1xuICAgICAgICAgIGRlbGV0ZSBiW3JdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gW107XG4gICAgICAgIHZhciBuID0gbmV3IFNldDtcbiAgICAgICAgdmFyIGE7XG4gICAgICAgIHdoaWxlIChhID0gXy5zaGlmdCgpKSB7XG4gICAgICAgICAgaS5wdXNoKHVwZGF0ZUNhY2hlV2l0aFJlc3VsdChhLCBuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhlY3V0ZVBlbmRpbmdPcGVyYXRpb25zKGUub3BlcmF0aW9uLCBuKTtcbiAgICAgICAgcmV0dXJuIG8oaSk7XG4gICAgICB9KSkodigoZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gTy5oYXMoZS5vcGVyYXRpb24ua2V5KTtcbiAgICAgIH0pKShMKSk7XG4gICAgICByZXR1cm4geShbIHEsIEksIFMgXSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNPZmZsaW5lRXJyb3IoZSkge1xuICByZXR1cm4gZSAmJiBlLm5ldHdvcmtFcnJvciAmJiAhZS5yZXNwb25zZSAmJiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgbmF2aWdhdG9yICYmICExID09PSBuYXZpZ2F0b3Iub25MaW5lIHx8IC9yZXF1ZXN0IGZhaWxlZHxmYWlsZWQgdG8gZmV0Y2h8bmV0d29ya1xccz9lcnJvci9pLnRlc3QoZS5uZXR3b3JrRXJyb3IubWVzc2FnZSkpO1xufVxuXG5mdW5jdGlvbiBvZmZsaW5lRXhjaGFuZ2UoZSkge1xuICByZXR1cm4gZnVuY3Rpb24ocikge1xuICAgIHZhciBhID0gZS5zdG9yYWdlO1xuICAgIGlmIChhICYmIGEub25PbmxpbmUgJiYgYS5yZWFkTWV0YWRhdGEgJiYgYS53cml0ZU1ldGFkYXRhKSB7XG4gICAgICB2YXIgbyA9IHIuZm9yd2FyZDtcbiAgICAgIHZhciBzID0gci5jbGllbnQ7XG4gICAgICB2YXIgdSA9IHIuZGlzcGF0Y2hEZWJ1ZztcbiAgICAgIHZhciBjID0gbSgpO1xuICAgICAgdmFyIGwgPSBjLnNvdXJjZTtcbiAgICAgIHZhciBkID0gYy5uZXh0O1xuICAgICAgdmFyIGYgPSBlLm9wdGltaXN0aWMgfHwge307XG4gICAgICB2YXIgcCA9IFtdO1xuICAgICAgdmFyIHVwZGF0ZU1ldGFkYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlID0gW107XG4gICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgcC5sZW5ndGg7IHQrKykge1xuICAgICAgICAgIHZhciByID0gcFt0XTtcbiAgICAgICAgICBpZiAoXCJtdXRhdGlvblwiID09PSByLmtpbmQpIHtcbiAgICAgICAgICAgIGUucHVzaCh7XG4gICAgICAgICAgICAgIHF1ZXJ5OiBrKHIucXVlcnkpLFxuICAgICAgICAgICAgICB2YXJpYWJsZXM6IHIudmFyaWFibGVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYS53cml0ZU1ldGFkYXRhKGUpO1xuICAgICAgfTtcbiAgICAgIHZhciBoID0gITE7XG4gICAgICB2YXIgZmx1c2hRdWV1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIWgpIHtcbiAgICAgICAgICBoID0gITA7XG4gICAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCBwLmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHBbZV07XG4gICAgICAgICAgICBpZiAoXCJtdXRhdGlvblwiID09PSB0LmtpbmQpIHtcbiAgICAgICAgICAgICAgZChpKFwidGVhcmRvd25cIiwgdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IHAubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgIHMucmVleGVjdXRlT3BlcmF0aW9uKHBbcl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwLmxlbmd0aCA9IDA7XG4gICAgICAgICAgaCA9ICExO1xuICAgICAgICAgIHVwZGF0ZU1ldGFkYXRhKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBhLm9uT25saW5lKGZsdXNoUXVldWUpO1xuICAgICAgYS5yZWFkTWV0YWRhdGEoKS50aGVuKChmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBlLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICBwLnB1c2gocy5jcmVhdGVSZXF1ZXN0T3BlcmF0aW9uKFwibXV0YXRpb25cIiwgdChlW3JdLnF1ZXJ5LCBlW3JdLnZhcmlhYmxlcykpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmx1c2hRdWV1ZSgpO1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgICB2YXIgZyA9IGNhY2hlRXhjaGFuZ2UoZSkoe1xuICAgICAgICBjbGllbnQ6IHMsXG4gICAgICAgIGRpc3BhdGNoRGVidWc6IHUsXG4gICAgICAgIGZvcndhcmQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICByZXR1cm4gdigoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKFwibXV0YXRpb25cIiA9PT0gZS5vcGVyYXRpb24ua2luZCAmJiBpc09mZmxpbmVFcnJvcihlLmVycm9yKSAmJiBmdW5jdGlvbiBpc09wdGltaXN0aWNNdXRhdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgIHZhciByID0gdC52YXJpYWJsZXMgfHwgbWFrZURpY3QoKTtcbiAgICAgICAgICAgICAgdmFyIGkgPSBnZXRGcmFnbWVudHModC5xdWVyeSk7XG4gICAgICAgICAgICAgIHZhciBuID0gW10uY29uY2F0KGdldFNlbGVjdGlvblNldChnZXRNYWluT3BlcmF0aW9uKHQucXVlcnkpKSk7XG4gICAgICAgICAgICAgIHZhciBhO1xuICAgICAgICAgICAgICB3aGlsZSAoYSA9IG4ucG9wKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNob3VsZEluY2x1ZGUoYSwgcikpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzRmllbGROb2RlKGEpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbyA9ICFpc0lubGluZUZyYWdtZW50KGEpID8gaVtnZXROYW1lKGEpXSA6IGE7XG4gICAgICAgICAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgICAgICAgICBuLnB1c2guYXBwbHkobiwgZ2V0U2VsZWN0aW9uU2V0KG8pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVbZ2V0TmFtZShhKV0pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgfShmLCBlLm9wZXJhdGlvbikpIHtcbiAgICAgICAgICAgICAgcC5wdXNoKGUub3BlcmF0aW9uKTtcbiAgICAgICAgICAgICAgdXBkYXRlTWV0YWRhdGEoKTtcbiAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgIH0pKShvKGUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgdCA9IG4oZSk7XG4gICAgICAgIHZhciByID0geShbIGwsIHQgXSk7XG4gICAgICAgIHJldHVybiB2KChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgaWYgKFwicXVlcnlcIiA9PT0gZS5vcGVyYXRpb24ua2luZCAmJiBpc09mZmxpbmVFcnJvcihlLmVycm9yKSkge1xuICAgICAgICAgICAgZCh0b1JlcXVlc3RQb2xpY3koZS5vcGVyYXRpb24sIFwiY2FjaGUtb25seVwiKSk7XG4gICAgICAgICAgICBwLnB1c2goZS5vcGVyYXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgIH0pKShnKHIpKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBjYWNoZUV4Y2hhbmdlKGUpKHIpO1xuICB9O1xufVxuXG5leHBvcnQgeyBTdG9yZSwgY2FjaGVFeGNoYW5nZSwgb2ZmbGluZUV4Y2hhbmdlLCBxdWVyeSwgd3JpdGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVycWwtZXhjaGFuZ2UtZ3JhcGhjYWNoZS5tanMubWFwXG4iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkOyBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzOyBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7IGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpOyBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTsgfSBmdW5jdGlvbiBXcmFwcGVyKCkgeyByZXR1cm4gX2NvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpOyB9IFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IFdyYXBwZXIsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IHJldHVybiBfc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpOyB9OyByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7IH1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHsgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0OyB9IGVsc2UgeyBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IHZhciBhID0gW251bGxdOyBhLnB1c2guYXBwbHkoYSwgYXJncyk7IHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTsgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7IGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpOyByZXR1cm4gaW5zdGFuY2U7IH07IH0gcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7IHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG4vLyBGSVhNRTpcbi8vIGZsb3dsaW50IHVuaW5pdGlhbGl6ZWQtaW5zdGFuY2UtcHJvcGVydHk6b2ZmXG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gXCIuLi9qc3V0aWxzL2lzT2JqZWN0TGlrZS5tanNcIjtcbmltcG9ydCB7IFNZTUJPTF9UT19TVFJJTkdfVEFHIH0gZnJvbSBcIi4uL3BvbHlmaWxscy9zeW1ib2xzLm1qc1wiO1xuaW1wb3J0IHsgZ2V0TG9jYXRpb24gfSBmcm9tIFwiLi4vbGFuZ3VhZ2UvbG9jYXRpb24ubWpzXCI7XG5pbXBvcnQgeyBwcmludExvY2F0aW9uLCBwcmludFNvdXJjZUxvY2F0aW9uIH0gZnJvbSBcIi4uL2xhbmd1YWdlL3ByaW50TG9jYXRpb24ubWpzXCI7XG4vKipcbiAqIEEgR3JhcGhRTEVycm9yIGRlc2NyaWJlcyBhbiBFcnJvciBmb3VuZCBkdXJpbmcgdGhlIHBhcnNlLCB2YWxpZGF0ZSwgb3JcbiAqIGV4ZWN1dGUgcGhhc2VzIG9mIHBlcmZvcm1pbmcgYSBHcmFwaFFMIG9wZXJhdGlvbi4gSW4gYWRkaXRpb24gdG8gYSBtZXNzYWdlXG4gKiBhbmQgc3RhY2sgdHJhY2UsIGl0IGFsc28gaW5jbHVkZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGxvY2F0aW9ucyBpbiBhXG4gKiBHcmFwaFFMIGRvY3VtZW50IGFuZC9vciBleGVjdXRpb24gcmVzdWx0IHRoYXQgY29ycmVzcG9uZCB0byB0aGUgRXJyb3IuXG4gKi9cblxuZXhwb3J0IHZhciBHcmFwaFFMRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9FcnJvcikge1xuICBfaW5oZXJpdHMoR3JhcGhRTEVycm9yLCBfRXJyb3IpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoR3JhcGhRTEVycm9yKTtcblxuICAvKipcbiAgICogQSBtZXNzYWdlIGRlc2NyaWJpbmcgdGhlIEVycm9yIGZvciBkZWJ1Z2dpbmcgcHVycG9zZXMuXG4gICAqXG4gICAqIEVudW1lcmFibGUsIGFuZCBhcHBlYXJzIGluIHRoZSByZXN1bHQgb2YgSlNPTi5zdHJpbmdpZnkoKS5cbiAgICpcbiAgICogTm90ZTogc2hvdWxkIGJlIHRyZWF0ZWQgYXMgcmVhZG9ubHksIGRlc3BpdGUgaW52YXJpYW50IHVzYWdlLlxuICAgKi9cblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgeyBsaW5lLCBjb2x1bW4gfSBsb2NhdGlvbnMgd2l0aGluIHRoZSBzb3VyY2UgR3JhcGhRTCBkb2N1bWVudFxuICAgKiB3aGljaCBjb3JyZXNwb25kIHRvIHRoaXMgZXJyb3IuXG4gICAqXG4gICAqIEVycm9ycyBkdXJpbmcgdmFsaWRhdGlvbiBvZnRlbiBjb250YWluIG11bHRpcGxlIGxvY2F0aW9ucywgZm9yIGV4YW1wbGUgdG9cbiAgICogcG9pbnQgb3V0IHR3byB0aGluZ3Mgd2l0aCB0aGUgc2FtZSBuYW1lLiBFcnJvcnMgZHVyaW5nIGV4ZWN1dGlvbiBpbmNsdWRlIGFcbiAgICogc2luZ2xlIGxvY2F0aW9uLCB0aGUgZmllbGQgd2hpY2ggcHJvZHVjZWQgdGhlIGVycm9yLlxuICAgKlxuICAgKiBFbnVtZXJhYmxlLCBhbmQgYXBwZWFycyBpbiB0aGUgcmVzdWx0IG9mIEpTT04uc3RyaW5naWZ5KCkuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBkZXNjcmliaW5nIHRoZSBKU09OLXBhdGggaW50byB0aGUgZXhlY3V0aW9uIHJlc3BvbnNlIHdoaWNoXG4gICAqIGNvcnJlc3BvbmRzIHRvIHRoaXMgZXJyb3IuIE9ubHkgaW5jbHVkZWQgZm9yIGVycm9ycyBkdXJpbmcgZXhlY3V0aW9uLlxuICAgKlxuICAgKiBFbnVtZXJhYmxlLCBhbmQgYXBwZWFycyBpbiB0aGUgcmVzdWx0IG9mIEpTT04uc3RyaW5naWZ5KCkuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBHcmFwaFFMIEFTVCBOb2RlcyBjb3JyZXNwb25kaW5nIHRvIHRoaXMgZXJyb3IuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgc291cmNlIEdyYXBoUUwgZG9jdW1lbnQgZm9yIHRoZSBmaXJzdCBsb2NhdGlvbiBvZiB0aGlzIGVycm9yLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgaWYgdGhpcyBFcnJvciByZXByZXNlbnRzIG1vcmUgdGhhbiBvbmUgbm9kZSwgdGhlIHNvdXJjZSBtYXkgbm90XG4gICAqIHJlcHJlc2VudCBub2RlcyBhZnRlciB0aGUgZmlyc3Qgbm9kZS5cbiAgICovXG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGNoYXJhY3RlciBvZmZzZXRzIHdpdGhpbiB0aGUgc291cmNlIEdyYXBoUUwgZG9jdW1lbnRcbiAgICogd2hpY2ggY29ycmVzcG9uZCB0byB0aGlzIGVycm9yLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIG9yaWdpbmFsIGVycm9yIHRocm93biBmcm9tIGEgZmllbGQgcmVzb2x2ZXIgZHVyaW5nIGV4ZWN1dGlvbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIEV4dGVuc2lvbiBmaWVsZHMgdG8gYWRkIHRvIHRoZSBmb3JtYXR0ZWQgZXJyb3IuXG4gICAqL1xuICBmdW5jdGlvbiBHcmFwaFFMRXJyb3IobWVzc2FnZSwgbm9kZXMsIHNvdXJjZSwgcG9zaXRpb25zLCBwYXRoLCBvcmlnaW5hbEVycm9yLCBleHRlbnNpb25zKSB7XG4gICAgdmFyIF9sb2NhdGlvbnMyLCBfc291cmNlMiwgX3Bvc2l0aW9uczIsIF9leHRlbnNpb25zMjtcblxuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHcmFwaFFMRXJyb3IpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKTsgLy8gQ29tcHV0ZSBsaXN0IG9mIGJsYW1lIG5vZGVzLlxuXG4gICAgdmFyIF9ub2RlcyA9IEFycmF5LmlzQXJyYXkobm9kZXMpID8gbm9kZXMubGVuZ3RoICE9PSAwID8gbm9kZXMgOiB1bmRlZmluZWQgOiBub2RlcyA/IFtub2Rlc10gOiB1bmRlZmluZWQ7IC8vIENvbXB1dGUgbG9jYXRpb25zIGluIHRoZSBzb3VyY2UgZm9yIHRoZSBnaXZlbiBub2Rlcy9wb3NpdGlvbnMuXG5cblxuICAgIHZhciBfc291cmNlID0gc291cmNlO1xuXG4gICAgaWYgKCFfc291cmNlICYmIF9ub2Rlcykge1xuICAgICAgdmFyIF9ub2RlcyQwJGxvYztcblxuICAgICAgX3NvdXJjZSA9IChfbm9kZXMkMCRsb2MgPSBfbm9kZXNbMF0ubG9jKSA9PT0gbnVsbCB8fCBfbm9kZXMkMCRsb2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ub2RlcyQwJGxvYy5zb3VyY2U7XG4gICAgfVxuXG4gICAgdmFyIF9wb3NpdGlvbnMgPSBwb3NpdGlvbnM7XG5cbiAgICBpZiAoIV9wb3NpdGlvbnMgJiYgX25vZGVzKSB7XG4gICAgICBfcG9zaXRpb25zID0gX25vZGVzLnJlZHVjZShmdW5jdGlvbiAobGlzdCwgbm9kZSkge1xuICAgICAgICBpZiAobm9kZS5sb2MpIHtcbiAgICAgICAgICBsaXN0LnB1c2gobm9kZS5sb2Muc3RhcnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuXG4gICAgaWYgKF9wb3NpdGlvbnMgJiYgX3Bvc2l0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIF9wb3NpdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIF9sb2NhdGlvbnM7XG5cbiAgICBpZiAocG9zaXRpb25zICYmIHNvdXJjZSkge1xuICAgICAgX2xvY2F0aW9ucyA9IHBvc2l0aW9ucy5tYXAoZnVuY3Rpb24gKHBvcykge1xuICAgICAgICByZXR1cm4gZ2V0TG9jYXRpb24oc291cmNlLCBwb3MpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChfbm9kZXMpIHtcbiAgICAgIF9sb2NhdGlvbnMgPSBfbm9kZXMucmVkdWNlKGZ1bmN0aW9uIChsaXN0LCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmxvYykge1xuICAgICAgICAgIGxpc3QucHVzaChnZXRMb2NhdGlvbihub2RlLmxvYy5zb3VyY2UsIG5vZGUubG9jLnN0YXJ0KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgIH0sIFtdKTtcbiAgICB9XG5cbiAgICB2YXIgX2V4dGVuc2lvbnMgPSBleHRlbnNpb25zO1xuXG4gICAgaWYgKF9leHRlbnNpb25zID09IG51bGwgJiYgb3JpZ2luYWxFcnJvciAhPSBudWxsKSB7XG4gICAgICB2YXIgb3JpZ2luYWxFeHRlbnNpb25zID0gb3JpZ2luYWxFcnJvci5leHRlbnNpb25zO1xuXG4gICAgICBpZiAoaXNPYmplY3RMaWtlKG9yaWdpbmFsRXh0ZW5zaW9ucykpIHtcbiAgICAgICAgX2V4dGVuc2lvbnMgPSBvcmlnaW5hbEV4dGVuc2lvbnM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIHtcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdmFsdWU6ICdHcmFwaFFMRXJyb3InXG4gICAgICB9LFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICB2YWx1ZTogbWVzc2FnZSxcbiAgICAgICAgLy8gQnkgYmVpbmcgZW51bWVyYWJsZSwgSlNPTi5zdHJpbmdpZnkgd2lsbCBpbmNsdWRlIGBtZXNzYWdlYCBpbiB0aGVcbiAgICAgICAgLy8gcmVzdWx0aW5nIG91dHB1dC4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHNpbXBsZXN0IHBvc3NpYmxlIEdyYXBoUUxcbiAgICAgICAgLy8gc2VydmljZSBhZGhlcmVzIHRvIHRoZSBzcGVjLlxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGxvY2F0aW9uczoge1xuICAgICAgICAvLyBDb2VyY2luZyBmYWxzeSB2YWx1ZXMgdG8gdW5kZWZpbmVkIGVuc3VyZXMgdGhleSB3aWxsIG5vdCBiZSBpbmNsdWRlZFxuICAgICAgICAvLyBpbiBKU09OLnN0cmluZ2lmeSgpIHdoZW4gbm90IHByb3ZpZGVkLlxuICAgICAgICB2YWx1ZTogKF9sb2NhdGlvbnMyID0gX2xvY2F0aW9ucykgIT09IG51bGwgJiYgX2xvY2F0aW9uczIgIT09IHZvaWQgMCA/IF9sb2NhdGlvbnMyIDogdW5kZWZpbmVkLFxuICAgICAgICAvLyBCeSBiZWluZyBlbnVtZXJhYmxlLCBKU09OLnN0cmluZ2lmeSB3aWxsIGluY2x1ZGUgYGxvY2F0aW9uc2AgaW4gdGhlXG4gICAgICAgIC8vIHJlc3VsdGluZyBvdXRwdXQuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSBzaW1wbGVzdCBwb3NzaWJsZSBHcmFwaFFMXG4gICAgICAgIC8vIHNlcnZpY2UgYWRoZXJlcyB0byB0aGUgc3BlYy5cbiAgICAgICAgZW51bWVyYWJsZTogX2xvY2F0aW9ucyAhPSBudWxsXG4gICAgICB9LFxuICAgICAgcGF0aDoge1xuICAgICAgICAvLyBDb2VyY2luZyBmYWxzeSB2YWx1ZXMgdG8gdW5kZWZpbmVkIGVuc3VyZXMgdGhleSB3aWxsIG5vdCBiZSBpbmNsdWRlZFxuICAgICAgICAvLyBpbiBKU09OLnN0cmluZ2lmeSgpIHdoZW4gbm90IHByb3ZpZGVkLlxuICAgICAgICB2YWx1ZTogcGF0aCAhPT0gbnVsbCAmJiBwYXRoICE9PSB2b2lkIDAgPyBwYXRoIDogdW5kZWZpbmVkLFxuICAgICAgICAvLyBCeSBiZWluZyBlbnVtZXJhYmxlLCBKU09OLnN0cmluZ2lmeSB3aWxsIGluY2x1ZGUgYHBhdGhgIGluIHRoZVxuICAgICAgICAvLyByZXN1bHRpbmcgb3V0cHV0LiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgc2ltcGxlc3QgcG9zc2libGUgR3JhcGhRTFxuICAgICAgICAvLyBzZXJ2aWNlIGFkaGVyZXMgdG8gdGhlIHNwZWMuXG4gICAgICAgIGVudW1lcmFibGU6IHBhdGggIT0gbnVsbFxuICAgICAgfSxcbiAgICAgIG5vZGVzOiB7XG4gICAgICAgIHZhbHVlOiBfbm9kZXMgIT09IG51bGwgJiYgX25vZGVzICE9PSB2b2lkIDAgPyBfbm9kZXMgOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICBzb3VyY2U6IHtcbiAgICAgICAgdmFsdWU6IChfc291cmNlMiA9IF9zb3VyY2UpICE9PSBudWxsICYmIF9zb3VyY2UyICE9PSB2b2lkIDAgPyBfc291cmNlMiA6IHVuZGVmaW5lZFxuICAgICAgfSxcbiAgICAgIHBvc2l0aW9uczoge1xuICAgICAgICB2YWx1ZTogKF9wb3NpdGlvbnMyID0gX3Bvc2l0aW9ucykgIT09IG51bGwgJiYgX3Bvc2l0aW9uczIgIT09IHZvaWQgMCA/IF9wb3NpdGlvbnMyIDogdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgb3JpZ2luYWxFcnJvcjoge1xuICAgICAgICB2YWx1ZTogb3JpZ2luYWxFcnJvclxuICAgICAgfSxcbiAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgLy8gQ29lcmNpbmcgZmFsc3kgdmFsdWVzIHRvIHVuZGVmaW5lZCBlbnN1cmVzIHRoZXkgd2lsbCBub3QgYmUgaW5jbHVkZWRcbiAgICAgICAgLy8gaW4gSlNPTi5zdHJpbmdpZnkoKSB3aGVuIG5vdCBwcm92aWRlZC5cbiAgICAgICAgdmFsdWU6IChfZXh0ZW5zaW9uczIgPSBfZXh0ZW5zaW9ucykgIT09IG51bGwgJiYgX2V4dGVuc2lvbnMyICE9PSB2b2lkIDAgPyBfZXh0ZW5zaW9uczIgOiB1bmRlZmluZWQsXG4gICAgICAgIC8vIEJ5IGJlaW5nIGVudW1lcmFibGUsIEpTT04uc3RyaW5naWZ5IHdpbGwgaW5jbHVkZSBgcGF0aGAgaW4gdGhlXG4gICAgICAgIC8vIHJlc3VsdGluZyBvdXRwdXQuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSBzaW1wbGVzdCBwb3NzaWJsZSBHcmFwaFFMXG4gICAgICAgIC8vIHNlcnZpY2UgYWRoZXJlcyB0byB0aGUgc3BlYy5cbiAgICAgICAgZW51bWVyYWJsZTogX2V4dGVuc2lvbnMgIT0gbnVsbFxuICAgICAgfVxuICAgIH0pOyAvLyBJbmNsdWRlIChub24tZW51bWVyYWJsZSkgc3RhY2sgdHJhY2UuXG5cbiAgICBpZiAob3JpZ2luYWxFcnJvciAhPT0gbnVsbCAmJiBvcmlnaW5hbEVycm9yICE9PSB2b2lkIDAgJiYgb3JpZ2luYWxFcnJvci5zdGFjaykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCAnc3RhY2snLCB7XG4gICAgICAgIHZhbHVlOiBvcmlnaW5hbEVycm9yLnN0YWNrLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcyk7XG4gICAgfSAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG5cblxuICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIEdyYXBoUUxFcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgJ3N0YWNrJywge1xuICAgICAgICB2YWx1ZTogRXJyb3IoKS5zdGFjayxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdyYXBoUUxFcnJvciwgW3tcbiAgICBrZXk6IFwidG9TdHJpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gcHJpbnRFcnJvcih0aGlzKTtcbiAgICB9IC8vIEZJWE1FOiB3b3JrYXJvdW5kIHRvIG5vdCBicmVhayBjaGFpIGNvbXBhcmlzb25zLCBzaG91bGQgYmUgcmVtb3ZlIGluIHYxNlxuICAgIC8vICRGbG93Rml4TWVbdW5zdXBwb3J0ZWQtc3ludGF4XSBGbG93IGRvZXNuJ3Qgc3VwcG9ydCBjb21wdXRlZCBwcm9wZXJ0aWVzIHlldFxuXG4gIH0sIHtcbiAgICBrZXk6IFNZTUJPTF9UT19TVFJJTkdfVEFHLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuICdPYmplY3QnO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHcmFwaFFMRXJyb3I7XG59KCAvKiNfX1BVUkVfXyovX3dyYXBOYXRpdmVTdXBlcihFcnJvcikpO1xuLyoqXG4gKiBQcmludHMgYSBHcmFwaFFMRXJyb3IgdG8gYSBzdHJpbmcsIHJlcHJlc2VudGluZyB1c2VmdWwgbG9jYXRpb24gaW5mb3JtYXRpb25cbiAqIGFib3V0IHRoZSBlcnJvcidzIHBvc2l0aW9uIGluIHRoZSBzb3VyY2UuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50RXJyb3IoZXJyb3IpIHtcbiAgdmFyIG91dHB1dCA9IGVycm9yLm1lc3NhZ2U7XG5cbiAgaWYgKGVycm9yLm5vZGVzKSB7XG4gICAgZm9yICh2YXIgX2kyID0gMCwgX2Vycm9yJG5vZGVzMiA9IGVycm9yLm5vZGVzOyBfaTIgPCBfZXJyb3Ikbm9kZXMyLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBub2RlID0gX2Vycm9yJG5vZGVzMltfaTJdO1xuXG4gICAgICBpZiAobm9kZS5sb2MpIHtcbiAgICAgICAgb3V0cHV0ICs9ICdcXG5cXG4nICsgcHJpbnRMb2NhdGlvbihub2RlLmxvYyk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGVycm9yLnNvdXJjZSAmJiBlcnJvci5sb2NhdGlvbnMpIHtcbiAgICBmb3IgKHZhciBfaTQgPSAwLCBfZXJyb3IkbG9jYXRpb25zMiA9IGVycm9yLmxvY2F0aW9uczsgX2k0IDwgX2Vycm9yJGxvY2F0aW9uczIubGVuZ3RoOyBfaTQrKykge1xuICAgICAgdmFyIGxvY2F0aW9uID0gX2Vycm9yJGxvY2F0aW9uczJbX2k0XTtcbiAgICAgIG91dHB1dCArPSAnXFxuXFxuJyArIHByaW50U291cmNlTG9jYXRpb24oZXJyb3Iuc291cmNlLCBsb2NhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbiIsImltcG9ydCB7IEdyYXBoUUxFcnJvciB9IGZyb20gXCIuL0dyYXBoUUxFcnJvci5tanNcIjtcbi8qKlxuICogUHJvZHVjZXMgYSBHcmFwaFFMRXJyb3IgcmVwcmVzZW50aW5nIGEgc3ludGF4IGVycm9yLCBjb250YWluaW5nIHVzZWZ1bFxuICogZGVzY3JpcHRpdmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHN5bnRheCBlcnJvcidzIHBvc2l0aW9uIGluIHRoZSBzb3VyY2UuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sIGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiBuZXcgR3JhcGhRTEVycm9yKFwiU3ludGF4IEVycm9yOiBcIi5jb25jYXQoZGVzY3JpcHRpb24pLCB1bmRlZmluZWQsIHNvdXJjZSwgW3Bvc2l0aW9uXSk7XG59XG4iLCJpbXBvcnQgaW52YXJpYW50IGZyb20gXCIuL2ludmFyaWFudC5tanNcIjtcbmltcG9ydCBub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sIGZyb20gXCIuL25vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2wubWpzXCI7XG4vKipcbiAqIFRoZSBgZGVmaW5lSW5zcGVjdCgpYCBmdW5jdGlvbiBkZWZpbmVzIGBpbnNwZWN0KClgIHByb3RvdHlwZSBtZXRob2QgYXMgYWxpYXMgb2YgYHRvSlNPTmBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZpbmVJbnNwZWN0KGNsYXNzT2JqZWN0KSB7XG4gIHZhciBmbiA9IGNsYXNzT2JqZWN0LnByb3RvdHlwZS50b0pTT047XG4gIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyB8fCBpbnZhcmlhbnQoMCk7XG4gIGNsYXNzT2JqZWN0LnByb3RvdHlwZS5pbnNwZWN0ID0gZm47IC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlIChTZWU6ICdodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL2lzc3Vlcy8yMzE3JylcblxuICBpZiAobm9kZWpzQ3VzdG9tSW5zcGVjdFN5bWJvbCkge1xuICAgIGNsYXNzT2JqZWN0LnByb3RvdHlwZVtub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sXSA9IGZuO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXZBc3NlcnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIHZhciBib29sZWFuQ29uZGl0aW9uID0gQm9vbGVhbihjb25kaXRpb24pOyAvLyBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAoU2VlIHRyYW5zZm9ybWF0aW9uIGRvbmUgaW4gJy4vcmVzb3VyY2VzL2lubGluZUludmFyaWFudC5qcycpXG5cbiAgaWYgKCFib29sZWFuQ29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIGZsb3d0eXBlL25vLXdlYWstdHlwZXMgKi9cbmltcG9ydCBub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sIGZyb20gXCIuL25vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2wubWpzXCI7XG52YXIgTUFYX0FSUkFZX0xFTkdUSCA9IDEwO1xudmFyIE1BWF9SRUNVUlNJVkVfREVQVEggPSAyO1xuLyoqXG4gKiBVc2VkIHRvIHByaW50IHZhbHVlcyBpbiBlcnJvciBtZXNzYWdlcy5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnNwZWN0KHZhbHVlKSB7XG4gIHJldHVybiBmb3JtYXRWYWx1ZSh2YWx1ZSwgW10pO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZSh2YWx1ZSwgc2VlblZhbHVlcykge1xuICBzd2l0Y2ggKF90eXBlb2YodmFsdWUpKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICByZXR1cm4gdmFsdWUubmFtZSA/IFwiW2Z1bmN0aW9uIFwiLmNvbmNhdCh2YWx1ZS5uYW1lLCBcIl1cIikgOiAnW2Z1bmN0aW9uXSc7XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXRPYmplY3RWYWx1ZSh2YWx1ZSwgc2VlblZhbHVlcyk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0T2JqZWN0VmFsdWUodmFsdWUsIHByZXZpb3VzbHlTZWVuVmFsdWVzKSB7XG4gIGlmIChwcmV2aW91c2x5U2VlblZhbHVlcy5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICB9XG5cbiAgdmFyIHNlZW5WYWx1ZXMgPSBbXS5jb25jYXQocHJldmlvdXNseVNlZW5WYWx1ZXMsIFt2YWx1ZV0pO1xuICB2YXIgY3VzdG9tSW5zcGVjdEZuID0gZ2V0Q3VzdG9tRm4odmFsdWUpO1xuXG4gIGlmIChjdXN0b21JbnNwZWN0Rm4gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBjdXN0b21WYWx1ZSA9IGN1c3RvbUluc3BlY3RGbi5jYWxsKHZhbHVlKTsgLy8gY2hlY2sgZm9yIGluZmluaXRlIHJlY3Vyc2lvblxuXG4gICAgaWYgKGN1c3RvbVZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBjdXN0b21WYWx1ZSA9PT0gJ3N0cmluZycgPyBjdXN0b21WYWx1ZSA6IGZvcm1hdFZhbHVlKGN1c3RvbVZhbHVlLCBzZWVuVmFsdWVzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZm9ybWF0QXJyYXkodmFsdWUsIHNlZW5WYWx1ZXMpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdE9iamVjdCh2YWx1ZSwgc2VlblZhbHVlcyk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE9iamVjdChvYmplY3QsIHNlZW5WYWx1ZXMpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAne30nO1xuICB9XG5cbiAgaWYgKHNlZW5WYWx1ZXMubGVuZ3RoID4gTUFYX1JFQ1VSU0lWRV9ERVBUSCkge1xuICAgIHJldHVybiAnWycgKyBnZXRPYmplY3RUYWcob2JqZWN0KSArICddJztcbiAgfVxuXG4gIHZhciBwcm9wZXJ0aWVzID0ga2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB2YWx1ZSA9IGZvcm1hdFZhbHVlKG9iamVjdFtrZXldLCBzZWVuVmFsdWVzKTtcbiAgICByZXR1cm4ga2V5ICsgJzogJyArIHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuICd7ICcgKyBwcm9wZXJ0aWVzLmpvaW4oJywgJykgKyAnIH0nO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShhcnJheSwgc2VlblZhbHVlcykge1xuICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICdbXSc7XG4gIH1cblxuICBpZiAoc2VlblZhbHVlcy5sZW5ndGggPiBNQVhfUkVDVVJTSVZFX0RFUFRIKSB7XG4gICAgcmV0dXJuICdbQXJyYXldJztcbiAgfVxuXG4gIHZhciBsZW4gPSBNYXRoLm1pbihNQVhfQVJSQVlfTEVOR1RILCBhcnJheS5sZW5ndGgpO1xuICB2YXIgcmVtYWluaW5nID0gYXJyYXkubGVuZ3RoIC0gbGVuO1xuICB2YXIgaXRlbXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaXRlbXMucHVzaChmb3JtYXRWYWx1ZShhcnJheVtpXSwgc2VlblZhbHVlcykpO1xuICB9XG5cbiAgaWYgKHJlbWFpbmluZyA9PT0gMSkge1xuICAgIGl0ZW1zLnB1c2goJy4uLiAxIG1vcmUgaXRlbScpO1xuICB9IGVsc2UgaWYgKHJlbWFpbmluZyA+IDEpIHtcbiAgICBpdGVtcy5wdXNoKFwiLi4uIFwiLmNvbmNhdChyZW1haW5pbmcsIFwiIG1vcmUgaXRlbXNcIikpO1xuICB9XG5cbiAgcmV0dXJuICdbJyArIGl0ZW1zLmpvaW4oJywgJykgKyAnXSc7XG59XG5cbmZ1bmN0aW9uIGdldEN1c3RvbUZuKG9iamVjdCkge1xuICB2YXIgY3VzdG9tSW5zcGVjdEZuID0gb2JqZWN0W1N0cmluZyhub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sKV07XG5cbiAgaWYgKHR5cGVvZiBjdXN0b21JbnNwZWN0Rm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gY3VzdG9tSW5zcGVjdEZuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmplY3QuaW5zcGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBvYmplY3QuaW5zcGVjdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRPYmplY3RUYWcob2JqZWN0KSB7XG4gIHZhciB0YWcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KS5yZXBsYWNlKC9eXFxbb2JqZWN0IC8sICcnKS5yZXBsYWNlKC9dJC8sICcnKTtcblxuICBpZiAodGFnID09PSAnT2JqZWN0JyAmJiB0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIG5hbWUgPSBvYmplY3QuY29uc3RydWN0b3IubmFtZTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycgJiYgbmFtZSAhPT0gJycpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YWc7XG59XG4iLCIvKipcbiAqIEEgcmVwbGFjZW1lbnQgZm9yIGluc3RhbmNlb2Ygd2hpY2ggaW5jbHVkZXMgYW4gZXJyb3Igd2FybmluZyB3aGVuIG11bHRpLXJlYWxtXG4gKiBjb25zdHJ1Y3RvcnMgYXJlIGRldGVjdGVkLlxuICovXG4vLyBTZWU6IGh0dHBzOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXBlcmZvcm1hbmNlLmh0bWwjc2V0LW5vZGVfZW52LXRvLXByb2R1Y3Rpb25cbi8vIFNlZTogaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9ndWlkZXMvcHJvZHVjdGlvbi9cbmV4cG9ydCBkZWZhdWx0IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG5mdW5jdGlvbiBpbnN0YW5jZU9mKHZhbHVlLCBjb25zdHJ1Y3Rvcikge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcjtcbn0gOiAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG5mdW5jdGlvbiBpbnN0YW5jZU9mKHZhbHVlLCBjb25zdHJ1Y3Rvcikge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHZhbHVlKSB7XG4gICAgdmFyIHZhbHVlQ2xhc3MgPSB2YWx1ZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY2xhc3NOYW1lID0gY29uc3RydWN0b3IubmFtZTtcblxuICAgIGlmIChjbGFzc05hbWUgJiYgdmFsdWVDbGFzcyAmJiB2YWx1ZUNsYXNzLm5hbWUgPT09IGNsYXNzTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHVzZSBcIi5jb25jYXQoY2xhc3NOYW1lLCBcIiBcXFwiXCIpLmNvbmNhdCh2YWx1ZSwgXCJcXFwiIGZyb20gYW5vdGhlciBtb2R1bGUgb3IgcmVhbG0uXFxuXFxuRW5zdXJlIHRoYXQgdGhlcmUgaXMgb25seSBvbmUgaW5zdGFuY2Ugb2YgXFxcImdyYXBocWxcXFwiIGluIHRoZSBub2RlX21vZHVsZXNcXG5kaXJlY3RvcnkuIElmIGRpZmZlcmVudCB2ZXJzaW9ucyBvZiBcXFwiZ3JhcGhxbFxcXCIgYXJlIHRoZSBkZXBlbmRlbmNpZXMgb2Ygb3RoZXJcXG5yZWxpZWQgb24gbW9kdWxlcywgdXNlIFxcXCJyZXNvbHV0aW9uc1xcXCIgdG8gZW5zdXJlIG9ubHkgb25lIHZlcnNpb24gaXMgaW5zdGFsbGVkLlxcblxcbmh0dHBzOi8veWFybnBrZy5jb20vZW4vZG9jcy9zZWxlY3RpdmUtdmVyc2lvbi1yZXNvbHV0aW9uc1xcblxcbkR1cGxpY2F0ZSBcXFwiZ3JhcGhxbFxcXCIgbW9kdWxlcyBjYW5ub3QgYmUgdXNlZCBhdCB0aGUgc2FtZSB0aW1lIHNpbmNlIGRpZmZlcmVudFxcbnZlcnNpb25zIG1heSBoYXZlIGRpZmZlcmVudCBjYXBhYmlsaXRpZXMgYW5kIGJlaGF2aW9yLiBUaGUgZGF0YSBmcm9tIG9uZVxcbnZlcnNpb24gdXNlZCBpbiB0aGUgZnVuY3Rpb24gZnJvbSBhbm90aGVyIGNvdWxkIHByb2R1Y2UgY29uZnVzaW5nIGFuZFxcbnNwdXJpb3VzIHJlc3VsdHMuXCIpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICB2YXIgYm9vbGVhbkNvbmRpdGlvbiA9IEJvb2xlYW4oY29uZGl0aW9uKTsgLy8gaXN0YW5idWwgaWdub3JlIGVsc2UgKFNlZSB0cmFuc2Zvcm1hdGlvbiBkb25lIGluICcuL3Jlc291cmNlcy9pbmxpbmVJbnZhcmlhbnQuanMnKVxuXG4gIGlmICghYm9vbGVhbkNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlICE9IG51bGwgPyBtZXNzYWdlIDogJ1VuZXhwZWN0ZWQgaW52YXJpYW50IHRyaWdnZXJlZC4nKTtcbiAgfVxufVxuIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG4vKipcbiAqIFJldHVybiB0cnVlIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3RcbiAqIGBudWxsYCBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gX3R5cGVvZih2YWx1ZSkgPT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGw7XG59XG4iLCIvKipcbiAqIENyZWF0ZXMgYSBrZXllZCBKUyBvYmplY3QgZnJvbSBhbiBhcnJheSwgZ2l2ZW4gYSBmdW5jdGlvbiB0byBwcm9kdWNlIHRoZSBrZXlzXG4gKiBhbmQgYSBmdW5jdGlvbiB0byBwcm9kdWNlIHRoZSB2YWx1ZXMgZnJvbSBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5LlxuICpcbiAqICAgICBjb25zdCBwaG9uZUJvb2sgPSBbXG4gKiAgICAgICB7IG5hbWU6ICdKb24nLCBudW06ICc1NTUtMTIzNCcgfSxcbiAqICAgICAgIHsgbmFtZTogJ0plbm55JywgbnVtOiAnODY3LTUzMDknIH1cbiAqICAgICBdXG4gKlxuICogICAgIC8vIHsgSm9uOiAnNTU1LTEyMzQnLCBKZW5ueTogJzg2Ny01MzA5JyB9XG4gKiAgICAgY29uc3QgcGhvbmVzQnlOYW1lID0ga2V5VmFsTWFwKFxuICogICAgICAgcGhvbmVCb29rLFxuICogICAgICAgZW50cnkgPT4gZW50cnkubmFtZSxcbiAqICAgICAgIGVudHJ5ID0+IGVudHJ5Lm51bVxuICogICAgIClcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtleVZhbE1hcChsaXN0LCBrZXlGbiwgdmFsRm4pIHtcbiAgcmV0dXJuIGxpc3QucmVkdWNlKGZ1bmN0aW9uIChtYXAsIGl0ZW0pIHtcbiAgICBtYXBba2V5Rm4oaXRlbSldID0gdmFsRm4oaXRlbSk7XG4gICAgcmV0dXJuIG1hcDtcbiAgfSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XG59XG4iLCIvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG52YXIgbm9kZWpzQ3VzdG9tSW5zcGVjdFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC5mb3IgPT09ICdmdW5jdGlvbicgPyBTeW1ib2wuZm9yKCdub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbScpIDogdW5kZWZpbmVkO1xuZXhwb3J0IGRlZmF1bHQgbm9kZWpzQ3VzdG9tSW5zcGVjdFN5bWJvbDtcbiIsImltcG9ydCBkZWZpbmVJbnNwZWN0IGZyb20gXCIuLi9qc3V0aWxzL2RlZmluZUluc3BlY3QubWpzXCI7XG5cbi8qKlxuICogQ29udGFpbnMgYSByYW5nZSBvZiBVVEYtOCBjaGFyYWN0ZXIgb2Zmc2V0cyBhbmQgdG9rZW4gcmVmZXJlbmNlcyB0aGF0XG4gKiBpZGVudGlmeSB0aGUgcmVnaW9uIG9mIHRoZSBzb3VyY2UgZnJvbSB3aGljaCB0aGUgQVNUIGRlcml2ZWQuXG4gKi9cbmV4cG9ydCB2YXIgTG9jYXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogVGhlIGNoYXJhY3RlciBvZmZzZXQgYXQgd2hpY2ggdGhpcyBOb2RlIGJlZ2lucy5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBjaGFyYWN0ZXIgb2Zmc2V0IGF0IHdoaWNoIHRoaXMgTm9kZSBlbmRzLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIFRva2VuIGF0IHdoaWNoIHRoaXMgTm9kZSBiZWdpbnMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgVG9rZW4gYXQgd2hpY2ggdGhpcyBOb2RlIGVuZHMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgU291cmNlIGRvY3VtZW50IHRoZSBBU1QgcmVwcmVzZW50cy5cbiAgICovXG4gIGZ1bmN0aW9uIExvY2F0aW9uKHN0YXJ0VG9rZW4sIGVuZFRva2VuLCBzb3VyY2UpIHtcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnRUb2tlbi5zdGFydDtcbiAgICB0aGlzLmVuZCA9IGVuZFRva2VuLmVuZDtcbiAgICB0aGlzLnN0YXJ0VG9rZW4gPSBzdGFydFRva2VuO1xuICAgIHRoaXMuZW5kVG9rZW4gPSBlbmRUb2tlbjtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBMb2NhdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQ6IHRoaXMuc3RhcnQsXG4gICAgICBlbmQ6IHRoaXMuZW5kXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gTG9jYXRpb247XG59KCk7IC8vIFByaW50IGEgc2ltcGxpZmllZCBmb3JtIHdoZW4gYXBwZWFyaW5nIGluIGBpbnNwZWN0YCBhbmQgYHV0aWwuaW5zcGVjdGAuXG5cbmRlZmluZUluc3BlY3QoTG9jYXRpb24pO1xuLyoqXG4gKiBSZXByZXNlbnRzIGEgcmFuZ2Ugb2YgY2hhcmFjdGVycyByZXByZXNlbnRlZCBieSBhIGxleGljYWwgdG9rZW5cbiAqIHdpdGhpbiBhIFNvdXJjZS5cbiAqL1xuXG5leHBvcnQgdmFyIFRva2VuID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIFRoZSBraW5kIG9mIFRva2VuLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIGNoYXJhY3RlciBvZmZzZXQgYXQgd2hpY2ggdGhpcyBOb2RlIGJlZ2lucy5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBjaGFyYWN0ZXIgb2Zmc2V0IGF0IHdoaWNoIHRoaXMgTm9kZSBlbmRzLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIDEtaW5kZXhlZCBsaW5lIG51bWJlciBvbiB3aGljaCB0aGlzIFRva2VuIGFwcGVhcnMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgMS1pbmRleGVkIGNvbHVtbiBudW1iZXIgYXQgd2hpY2ggdGhpcyBUb2tlbiBiZWdpbnMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBGb3Igbm9uLXB1bmN0dWF0aW9uIHRva2VucywgcmVwcmVzZW50cyB0aGUgaW50ZXJwcmV0ZWQgdmFsdWUgb2YgdGhlIHRva2VuLlxuICAgKi9cblxuICAvKipcbiAgICogVG9rZW5zIGV4aXN0IGFzIG5vZGVzIGluIGEgZG91YmxlLWxpbmtlZC1saXN0IGFtb25nc3QgYWxsIHRva2Vuc1xuICAgKiBpbmNsdWRpbmcgaWdub3JlZCB0b2tlbnMuIDxTT0Y+IGlzIGFsd2F5cyB0aGUgZmlyc3Qgbm9kZSBhbmQgPEVPRj5cbiAgICogdGhlIGxhc3QuXG4gICAqL1xuICBmdW5jdGlvbiBUb2tlbihraW5kLCBzdGFydCwgZW5kLCBsaW5lLCBjb2x1bW4sIHByZXYsIHZhbHVlKSB7XG4gICAgdGhpcy5raW5kID0ga2luZDtcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5wcmV2ID0gcHJldjtcbiAgICB0aGlzLm5leHQgPSBudWxsO1xuICB9XG5cbiAgdmFyIF9wcm90bzIgPSBUb2tlbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMi50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IHRoaXMua2luZCxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgbGluZTogdGhpcy5saW5lLFxuICAgICAgY29sdW1uOiB0aGlzLmNvbHVtblxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIFRva2VuO1xufSgpOyAvLyBQcmludCBhIHNpbXBsaWZpZWQgZm9ybSB3aGVuIGFwcGVhcmluZyBpbiBgaW5zcGVjdGAgYW5kIGB1dGlsLmluc3BlY3RgLlxuXG5kZWZpbmVJbnNwZWN0KFRva2VuKTtcbi8qKlxuICogQGludGVybmFsXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZShtYXliZU5vZGUpIHtcbiAgcmV0dXJuIG1heWJlTm9kZSAhPSBudWxsICYmIHR5cGVvZiBtYXliZU5vZGUua2luZCA9PT0gJ3N0cmluZyc7XG59XG4vKipcbiAqIFRoZSBsaXN0IG9mIGFsbCBwb3NzaWJsZSBBU1Qgbm9kZSB0eXBlcy5cbiAqL1xuIiwiLyoqXG4gKiBQcm9kdWNlcyB0aGUgdmFsdWUgb2YgYSBibG9jayBzdHJpbmcgZnJvbSBpdHMgcGFyc2VkIHJhdyB2YWx1ZSwgc2ltaWxhciB0b1xuICogQ29mZmVlU2NyaXB0J3MgYmxvY2sgc3RyaW5nLCBQeXRob24ncyBkb2NzdHJpbmcgdHJpbSBvciBSdWJ5J3Mgc3RyaXBfaGVyZWRvYy5cbiAqXG4gKiBUaGlzIGltcGxlbWVudHMgdGhlIEdyYXBoUUwgc3BlYydzIEJsb2NrU3RyaW5nVmFsdWUoKSBzdGF0aWMgYWxnb3JpdGhtLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVkZW50QmxvY2tTdHJpbmdWYWx1ZShyYXdTdHJpbmcpIHtcbiAgLy8gRXhwYW5kIGEgYmxvY2sgc3RyaW5nJ3MgcmF3IHZhbHVlIGludG8gaW5kZXBlbmRlbnQgbGluZXMuXG4gIHZhciBsaW5lcyA9IHJhd1N0cmluZy5zcGxpdCgvXFxyXFxufFtcXG5cXHJdL2cpOyAvLyBSZW1vdmUgY29tbW9uIGluZGVudGF0aW9uIGZyb20gYWxsIGxpbmVzIGJ1dCBmaXJzdC5cblxuICB2YXIgY29tbW9uSW5kZW50ID0gZ2V0QmxvY2tTdHJpbmdJbmRlbnRhdGlvbihyYXdTdHJpbmcpO1xuXG4gIGlmIChjb21tb25JbmRlbnQgIT09IDApIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaW5lc1tpXSA9IGxpbmVzW2ldLnNsaWNlKGNvbW1vbkluZGVudCk7XG4gICAgfVxuICB9IC8vIFJlbW92ZSBsZWFkaW5nIGFuZCB0cmFpbGluZyBibGFuayBsaW5lcy5cblxuXG4gIHZhciBzdGFydExpbmUgPSAwO1xuXG4gIHdoaWxlIChzdGFydExpbmUgPCBsaW5lcy5sZW5ndGggJiYgaXNCbGFuayhsaW5lc1tzdGFydExpbmVdKSkge1xuICAgICsrc3RhcnRMaW5lO1xuICB9XG5cbiAgdmFyIGVuZExpbmUgPSBsaW5lcy5sZW5ndGg7XG5cbiAgd2hpbGUgKGVuZExpbmUgPiBzdGFydExpbmUgJiYgaXNCbGFuayhsaW5lc1tlbmRMaW5lIC0gMV0pKSB7XG4gICAgLS1lbmRMaW5lO1xuICB9IC8vIFJldHVybiBhIHN0cmluZyBvZiB0aGUgbGluZXMgam9pbmVkIHdpdGggVSswMDBBLlxuXG5cbiAgcmV0dXJuIGxpbmVzLnNsaWNlKHN0YXJ0TGluZSwgZW5kTGluZSkuam9pbignXFxuJyk7XG59XG5cbmZ1bmN0aW9uIGlzQmxhbmsoc3RyKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHN0cltpXSAhPT0gJyAnICYmIHN0cltpXSAhPT0gJ1xcdCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogQGludGVybmFsXG4gKi9cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmxvY2tTdHJpbmdJbmRlbnRhdGlvbih2YWx1ZSkge1xuICB2YXIgX2NvbW1vbkluZGVudDtcblxuICB2YXIgaXNGaXJzdExpbmUgPSB0cnVlO1xuICB2YXIgaXNFbXB0eUxpbmUgPSB0cnVlO1xuICB2YXIgaW5kZW50ID0gMDtcbiAgdmFyIGNvbW1vbkluZGVudCA9IG51bGw7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7ICsraSkge1xuICAgIHN3aXRjaCAodmFsdWUuY2hhckNvZGVBdChpKSkge1xuICAgICAgY2FzZSAxMzpcbiAgICAgICAgLy8gIFxcclxuICAgICAgICBpZiAodmFsdWUuY2hhckNvZGVBdChpICsgMSkgPT09IDEwKSB7XG4gICAgICAgICAgKytpOyAvLyBza2lwIFxcclxcbiBhcyBvbmUgc3ltYm9sXG4gICAgICAgIH1cblxuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuXG4gICAgICBjYXNlIDEwOlxuICAgICAgICAvLyAgXFxuXG4gICAgICAgIGlzRmlyc3RMaW5lID0gZmFsc2U7XG4gICAgICAgIGlzRW1wdHlMaW5lID0gdHJ1ZTtcbiAgICAgICAgaW5kZW50ID0gMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTogLy8gICBcXHRcblxuICAgICAgY2FzZSAzMjpcbiAgICAgICAgLy8gIDxzcGFjZT5cbiAgICAgICAgKytpbmRlbnQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoaXNFbXB0eUxpbmUgJiYgIWlzRmlyc3RMaW5lICYmIChjb21tb25JbmRlbnQgPT09IG51bGwgfHwgaW5kZW50IDwgY29tbW9uSW5kZW50KSkge1xuICAgICAgICAgIGNvbW1vbkluZGVudCA9IGluZGVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzRW1wdHlMaW5lID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChfY29tbW9uSW5kZW50ID0gY29tbW9uSW5kZW50KSAhPT0gbnVsbCAmJiBfY29tbW9uSW5kZW50ICE9PSB2b2lkIDAgPyBfY29tbW9uSW5kZW50IDogMDtcbn1cbi8qKlxuICogUHJpbnQgYSBibG9jayBzdHJpbmcgaW4gdGhlIGluZGVudGVkIGJsb2NrIGZvcm0gYnkgYWRkaW5nIGEgbGVhZGluZyBhbmRcbiAqIHRyYWlsaW5nIGJsYW5rIGxpbmUuIEhvd2V2ZXIsIGlmIGEgYmxvY2sgc3RyaW5nIHN0YXJ0cyB3aXRoIHdoaXRlc3BhY2UgYW5kIGlzXG4gKiBhIHNpbmdsZS1saW5lLCBhZGRpbmcgYSBsZWFkaW5nIGJsYW5rIGxpbmUgd291bGQgc3RyaXAgdGhhdCB3aGl0ZXNwYWNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEJsb2NrU3RyaW5nKHZhbHVlKSB7XG4gIHZhciBpbmRlbnRhdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJyc7XG4gIHZhciBwcmVmZXJNdWx0aXBsZUxpbmVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcbiAgdmFyIGlzU2luZ2xlTGluZSA9IHZhbHVlLmluZGV4T2YoJ1xcbicpID09PSAtMTtcbiAgdmFyIGhhc0xlYWRpbmdTcGFjZSA9IHZhbHVlWzBdID09PSAnICcgfHwgdmFsdWVbMF0gPT09ICdcXHQnO1xuICB2YXIgaGFzVHJhaWxpbmdRdW90ZSA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdID09PSAnXCInO1xuICB2YXIgaGFzVHJhaWxpbmdTbGFzaCA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdID09PSAnXFxcXCc7XG4gIHZhciBwcmludEFzTXVsdGlwbGVMaW5lcyA9ICFpc1NpbmdsZUxpbmUgfHwgaGFzVHJhaWxpbmdRdW90ZSB8fCBoYXNUcmFpbGluZ1NsYXNoIHx8IHByZWZlck11bHRpcGxlTGluZXM7XG4gIHZhciByZXN1bHQgPSAnJzsgLy8gRm9ybWF0IGEgbXVsdGktbGluZSBibG9jayBxdW90ZSB0byBhY2NvdW50IGZvciBsZWFkaW5nIHNwYWNlLlxuXG4gIGlmIChwcmludEFzTXVsdGlwbGVMaW5lcyAmJiAhKGlzU2luZ2xlTGluZSAmJiBoYXNMZWFkaW5nU3BhY2UpKSB7XG4gICAgcmVzdWx0ICs9ICdcXG4nICsgaW5kZW50YXRpb247XG4gIH1cblxuICByZXN1bHQgKz0gaW5kZW50YXRpb24gPyB2YWx1ZS5yZXBsYWNlKC9cXG4vZywgJ1xcbicgKyBpbmRlbnRhdGlvbikgOiB2YWx1ZTtcblxuICBpZiAocHJpbnRBc011bHRpcGxlTGluZXMpIHtcbiAgICByZXN1bHQgKz0gJ1xcbic7XG4gIH1cblxuICByZXR1cm4gJ1wiXCJcIicgKyByZXN1bHQucmVwbGFjZSgvXCJcIlwiL2csICdcXFxcXCJcIlwiJykgKyAnXCJcIlwiJztcbn1cbiIsIi8qKlxuICogVGhlIHNldCBvZiBhbGxvd2VkIGRpcmVjdGl2ZSBsb2NhdGlvbiB2YWx1ZXMuXG4gKi9cbmV4cG9ydCB2YXIgRGlyZWN0aXZlTG9jYXRpb24gPSBPYmplY3QuZnJlZXplKHtcbiAgLy8gUmVxdWVzdCBEZWZpbml0aW9uc1xuICBRVUVSWTogJ1FVRVJZJyxcbiAgTVVUQVRJT046ICdNVVRBVElPTicsXG4gIFNVQlNDUklQVElPTjogJ1NVQlNDUklQVElPTicsXG4gIEZJRUxEOiAnRklFTEQnLFxuICBGUkFHTUVOVF9ERUZJTklUSU9OOiAnRlJBR01FTlRfREVGSU5JVElPTicsXG4gIEZSQUdNRU5UX1NQUkVBRDogJ0ZSQUdNRU5UX1NQUkVBRCcsXG4gIElOTElORV9GUkFHTUVOVDogJ0lOTElORV9GUkFHTUVOVCcsXG4gIFZBUklBQkxFX0RFRklOSVRJT046ICdWQVJJQUJMRV9ERUZJTklUSU9OJyxcbiAgLy8gVHlwZSBTeXN0ZW0gRGVmaW5pdGlvbnNcbiAgU0NIRU1BOiAnU0NIRU1BJyxcbiAgU0NBTEFSOiAnU0NBTEFSJyxcbiAgT0JKRUNUOiAnT0JKRUNUJyxcbiAgRklFTERfREVGSU5JVElPTjogJ0ZJRUxEX0RFRklOSVRJT04nLFxuICBBUkdVTUVOVF9ERUZJTklUSU9OOiAnQVJHVU1FTlRfREVGSU5JVElPTicsXG4gIElOVEVSRkFDRTogJ0lOVEVSRkFDRScsXG4gIFVOSU9OOiAnVU5JT04nLFxuICBFTlVNOiAnRU5VTScsXG4gIEVOVU1fVkFMVUU6ICdFTlVNX1ZBTFVFJyxcbiAgSU5QVVRfT0JKRUNUOiAnSU5QVVRfT0JKRUNUJyxcbiAgSU5QVVRfRklFTERfREVGSU5JVElPTjogJ0lOUFVUX0ZJRUxEX0RFRklOSVRJT04nXG59KTtcbi8qKlxuICogVGhlIGVudW0gdHlwZSByZXByZXNlbnRpbmcgdGhlIGRpcmVjdGl2ZSBsb2NhdGlvbiB2YWx1ZXMuXG4gKi9cbiIsIi8qKlxuICogVGhlIHNldCBvZiBhbGxvd2VkIGtpbmQgdmFsdWVzIGZvciBBU1Qgbm9kZXMuXG4gKi9cbmV4cG9ydCB2YXIgS2luZCA9IE9iamVjdC5mcmVlemUoe1xuICAvLyBOYW1lXG4gIE5BTUU6ICdOYW1lJyxcbiAgLy8gRG9jdW1lbnRcbiAgRE9DVU1FTlQ6ICdEb2N1bWVudCcsXG4gIE9QRVJBVElPTl9ERUZJTklUSU9OOiAnT3BlcmF0aW9uRGVmaW5pdGlvbicsXG4gIFZBUklBQkxFX0RFRklOSVRJT046ICdWYXJpYWJsZURlZmluaXRpb24nLFxuICBTRUxFQ1RJT05fU0VUOiAnU2VsZWN0aW9uU2V0JyxcbiAgRklFTEQ6ICdGaWVsZCcsXG4gIEFSR1VNRU5UOiAnQXJndW1lbnQnLFxuICAvLyBGcmFnbWVudHNcbiAgRlJBR01FTlRfU1BSRUFEOiAnRnJhZ21lbnRTcHJlYWQnLFxuICBJTkxJTkVfRlJBR01FTlQ6ICdJbmxpbmVGcmFnbWVudCcsXG4gIEZSQUdNRU5UX0RFRklOSVRJT046ICdGcmFnbWVudERlZmluaXRpb24nLFxuICAvLyBWYWx1ZXNcbiAgVkFSSUFCTEU6ICdWYXJpYWJsZScsXG4gIElOVDogJ0ludFZhbHVlJyxcbiAgRkxPQVQ6ICdGbG9hdFZhbHVlJyxcbiAgU1RSSU5HOiAnU3RyaW5nVmFsdWUnLFxuICBCT09MRUFOOiAnQm9vbGVhblZhbHVlJyxcbiAgTlVMTDogJ051bGxWYWx1ZScsXG4gIEVOVU06ICdFbnVtVmFsdWUnLFxuICBMSVNUOiAnTGlzdFZhbHVlJyxcbiAgT0JKRUNUOiAnT2JqZWN0VmFsdWUnLFxuICBPQkpFQ1RfRklFTEQ6ICdPYmplY3RGaWVsZCcsXG4gIC8vIERpcmVjdGl2ZXNcbiAgRElSRUNUSVZFOiAnRGlyZWN0aXZlJyxcbiAgLy8gVHlwZXNcbiAgTkFNRURfVFlQRTogJ05hbWVkVHlwZScsXG4gIExJU1RfVFlQRTogJ0xpc3RUeXBlJyxcbiAgTk9OX05VTExfVFlQRTogJ05vbk51bGxUeXBlJyxcbiAgLy8gVHlwZSBTeXN0ZW0gRGVmaW5pdGlvbnNcbiAgU0NIRU1BX0RFRklOSVRJT046ICdTY2hlbWFEZWZpbml0aW9uJyxcbiAgT1BFUkFUSU9OX1RZUEVfREVGSU5JVElPTjogJ09wZXJhdGlvblR5cGVEZWZpbml0aW9uJyxcbiAgLy8gVHlwZSBEZWZpbml0aW9uc1xuICBTQ0FMQVJfVFlQRV9ERUZJTklUSU9OOiAnU2NhbGFyVHlwZURlZmluaXRpb24nLFxuICBPQkpFQ1RfVFlQRV9ERUZJTklUSU9OOiAnT2JqZWN0VHlwZURlZmluaXRpb24nLFxuICBGSUVMRF9ERUZJTklUSU9OOiAnRmllbGREZWZpbml0aW9uJyxcbiAgSU5QVVRfVkFMVUVfREVGSU5JVElPTjogJ0lucHV0VmFsdWVEZWZpbml0aW9uJyxcbiAgSU5URVJGQUNFX1RZUEVfREVGSU5JVElPTjogJ0ludGVyZmFjZVR5cGVEZWZpbml0aW9uJyxcbiAgVU5JT05fVFlQRV9ERUZJTklUSU9OOiAnVW5pb25UeXBlRGVmaW5pdGlvbicsXG4gIEVOVU1fVFlQRV9ERUZJTklUSU9OOiAnRW51bVR5cGVEZWZpbml0aW9uJyxcbiAgRU5VTV9WQUxVRV9ERUZJTklUSU9OOiAnRW51bVZhbHVlRGVmaW5pdGlvbicsXG4gIElOUFVUX09CSkVDVF9UWVBFX0RFRklOSVRJT046ICdJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uJyxcbiAgLy8gRGlyZWN0aXZlIERlZmluaXRpb25zXG4gIERJUkVDVElWRV9ERUZJTklUSU9OOiAnRGlyZWN0aXZlRGVmaW5pdGlvbicsXG4gIC8vIFR5cGUgU3lzdGVtIEV4dGVuc2lvbnNcbiAgU0NIRU1BX0VYVEVOU0lPTjogJ1NjaGVtYUV4dGVuc2lvbicsXG4gIC8vIFR5cGUgRXh0ZW5zaW9uc1xuICBTQ0FMQVJfVFlQRV9FWFRFTlNJT046ICdTY2FsYXJUeXBlRXh0ZW5zaW9uJyxcbiAgT0JKRUNUX1RZUEVfRVhURU5TSU9OOiAnT2JqZWN0VHlwZUV4dGVuc2lvbicsXG4gIElOVEVSRkFDRV9UWVBFX0VYVEVOU0lPTjogJ0ludGVyZmFjZVR5cGVFeHRlbnNpb24nLFxuICBVTklPTl9UWVBFX0VYVEVOU0lPTjogJ1VuaW9uVHlwZUV4dGVuc2lvbicsXG4gIEVOVU1fVFlQRV9FWFRFTlNJT046ICdFbnVtVHlwZUV4dGVuc2lvbicsXG4gIElOUFVUX09CSkVDVF9UWVBFX0VYVEVOU0lPTjogJ0lucHV0T2JqZWN0VHlwZUV4dGVuc2lvbidcbn0pO1xuLyoqXG4gKiBUaGUgZW51bSB0eXBlIHJlcHJlc2VudGluZyB0aGUgcG9zc2libGUga2luZCB2YWx1ZXMgb2YgQVNUIG5vZGVzLlxuICovXG4iLCJpbXBvcnQgeyBzeW50YXhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9zeW50YXhFcnJvci5tanNcIjtcbmltcG9ydCB7IFRva2VuIH0gZnJvbSBcIi4vYXN0Lm1qc1wiO1xuaW1wb3J0IHsgVG9rZW5LaW5kIH0gZnJvbSBcIi4vdG9rZW5LaW5kLm1qc1wiO1xuaW1wb3J0IHsgZGVkZW50QmxvY2tTdHJpbmdWYWx1ZSB9IGZyb20gXCIuL2Jsb2NrU3RyaW5nLm1qc1wiO1xuLyoqXG4gKiBHaXZlbiBhIFNvdXJjZSBvYmplY3QsIGNyZWF0ZXMgYSBMZXhlciBmb3IgdGhhdCBzb3VyY2UuXG4gKiBBIExleGVyIGlzIGEgc3RhdGVmdWwgc3RyZWFtIGdlbmVyYXRvciBpbiB0aGF0IGV2ZXJ5IHRpbWVcbiAqIGl0IGlzIGFkdmFuY2VkLCBpdCByZXR1cm5zIHRoZSBuZXh0IHRva2VuIGluIHRoZSBTb3VyY2UuIEFzc3VtaW5nIHRoZVxuICogc291cmNlIGxleGVzLCB0aGUgZmluYWwgVG9rZW4gZW1pdHRlZCBieSB0aGUgbGV4ZXIgd2lsbCBiZSBvZiBraW5kXG4gKiBFT0YsIGFmdGVyIHdoaWNoIHRoZSBsZXhlciB3aWxsIHJlcGVhdGVkbHkgcmV0dXJuIHRoZSBzYW1lIEVPRiB0b2tlblxuICogd2hlbmV2ZXIgY2FsbGVkLlxuICovXG5cbmV4cG9ydCB2YXIgTGV4ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogVGhlIHByZXZpb3VzbHkgZm9jdXNlZCBub24taWdub3JlZCB0b2tlbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgZm9jdXNlZCBub24taWdub3JlZCB0b2tlbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSAoMS1pbmRleGVkKSBsaW5lIGNvbnRhaW5pbmcgdGhlIGN1cnJlbnQgdG9rZW4uXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgY2hhcmFjdGVyIG9mZnNldCBhdCB3aGljaCB0aGUgY3VycmVudCBsaW5lIGJlZ2lucy5cbiAgICovXG4gIGZ1bmN0aW9uIExleGVyKHNvdXJjZSkge1xuICAgIHZhciBzdGFydE9mRmlsZVRva2VuID0gbmV3IFRva2VuKFRva2VuS2luZC5TT0YsIDAsIDAsIDAsIDAsIG51bGwpO1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIHRoaXMubGFzdFRva2VuID0gc3RhcnRPZkZpbGVUb2tlbjtcbiAgICB0aGlzLnRva2VuID0gc3RhcnRPZkZpbGVUb2tlbjtcbiAgICB0aGlzLmxpbmUgPSAxO1xuICAgIHRoaXMubGluZVN0YXJ0ID0gMDtcbiAgfVxuICAvKipcbiAgICogQWR2YW5jZXMgdGhlIHRva2VuIHN0cmVhbSB0byB0aGUgbmV4dCBub24taWdub3JlZCB0b2tlbi5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gTGV4ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5hZHZhbmNlID0gZnVuY3Rpb24gYWR2YW5jZSgpIHtcbiAgICB0aGlzLmxhc3RUb2tlbiA9IHRoaXMudG9rZW47XG4gICAgdmFyIHRva2VuID0gdGhpcy50b2tlbiA9IHRoaXMubG9va2FoZWFkKCk7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG4gIC8qKlxuICAgKiBMb29rcyBhaGVhZCBhbmQgcmV0dXJucyB0aGUgbmV4dCBub24taWdub3JlZCB0b2tlbiwgYnV0IGRvZXMgbm90IGNoYW5nZVxuICAgKiB0aGUgc3RhdGUgb2YgTGV4ZXIuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmxvb2thaGVhZCA9IGZ1bmN0aW9uIGxvb2thaGVhZCgpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2VuO1xuXG4gICAgaWYgKHRva2VuLmtpbmQgIT09IFRva2VuS2luZC5FT0YpIHtcbiAgICAgIGRvIHtcbiAgICAgICAgdmFyIF90b2tlbiRuZXh0O1xuXG4gICAgICAgIC8vIE5vdGU6IG5leHQgaXMgb25seSBtdXRhYmxlIGR1cmluZyBwYXJzaW5nLCBzbyB3ZSBjYXN0IHRvIGFsbG93IHRoaXMuXG4gICAgICAgIHRva2VuID0gKF90b2tlbiRuZXh0ID0gdG9rZW4ubmV4dCkgIT09IG51bGwgJiYgX3Rva2VuJG5leHQgIT09IHZvaWQgMCA/IF90b2tlbiRuZXh0IDogdG9rZW4ubmV4dCA9IHJlYWRUb2tlbih0aGlzLCB0b2tlbik7XG4gICAgICB9IHdoaWxlICh0b2tlbi5raW5kID09PSBUb2tlbktpbmQuQ09NTUVOVCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9O1xuXG4gIHJldHVybiBMZXhlcjtcbn0oKTtcbi8qKlxuICogQGludGVybmFsXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHVuY3R1YXRvclRva2VuS2luZChraW5kKSB7XG4gIHJldHVybiBraW5kID09PSBUb2tlbktpbmQuQkFORyB8fCBraW5kID09PSBUb2tlbktpbmQuRE9MTEFSIHx8IGtpbmQgPT09IFRva2VuS2luZC5BTVAgfHwga2luZCA9PT0gVG9rZW5LaW5kLlBBUkVOX0wgfHwga2luZCA9PT0gVG9rZW5LaW5kLlBBUkVOX1IgfHwga2luZCA9PT0gVG9rZW5LaW5kLlNQUkVBRCB8fCBraW5kID09PSBUb2tlbktpbmQuQ09MT04gfHwga2luZCA9PT0gVG9rZW5LaW5kLkVRVUFMUyB8fCBraW5kID09PSBUb2tlbktpbmQuQVQgfHwga2luZCA9PT0gVG9rZW5LaW5kLkJSQUNLRVRfTCB8fCBraW5kID09PSBUb2tlbktpbmQuQlJBQ0tFVF9SIHx8IGtpbmQgPT09IFRva2VuS2luZC5CUkFDRV9MIHx8IGtpbmQgPT09IFRva2VuS2luZC5QSVBFIHx8IGtpbmQgPT09IFRva2VuS2luZC5CUkFDRV9SO1xufVxuXG5mdW5jdGlvbiBwcmludENoYXJDb2RlKGNvZGUpIHtcbiAgcmV0dXJuICgvLyBOYU4vdW5kZWZpbmVkIHJlcHJlc2VudHMgYWNjZXNzIGJleW9uZCB0aGUgZW5kIG9mIHRoZSBmaWxlLlxuICAgIGlzTmFOKGNvZGUpID8gVG9rZW5LaW5kLkVPRiA6IC8vIFRydXN0IEpTT04gZm9yIEFTQ0lJLlxuICAgIGNvZGUgPCAweDAwN2YgPyBKU09OLnN0cmluZ2lmeShTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpKSA6IC8vIE90aGVyd2lzZSBwcmludCB0aGUgZXNjYXBlZCBmb3JtLlxuICAgIFwiXFxcIlxcXFx1XCIuY29uY2F0KCgnMDAnICsgY29kZS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkuc2xpY2UoLTQpLCBcIlxcXCJcIilcbiAgKTtcbn1cbi8qKlxuICogR2V0cyB0aGUgbmV4dCB0b2tlbiBmcm9tIHRoZSBzb3VyY2Ugc3RhcnRpbmcgYXQgdGhlIGdpdmVuIHBvc2l0aW9uLlxuICpcbiAqIFRoaXMgc2tpcHMgb3ZlciB3aGl0ZXNwYWNlIHVudGlsIGl0IGZpbmRzIHRoZSBuZXh0IGxleGFibGUgdG9rZW4sIHRoZW4gbGV4ZXNcbiAqIHB1bmN0dWF0b3JzIGltbWVkaWF0ZWx5IG9yIGNhbGxzIHRoZSBhcHByb3ByaWF0ZSBoZWxwZXIgZnVuY3Rpb24gZm9yIG1vcmVcbiAqIGNvbXBsaWNhdGVkIHRva2Vucy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWRUb2tlbihsZXhlciwgcHJldikge1xuICB2YXIgc291cmNlID0gbGV4ZXIuc291cmNlO1xuICB2YXIgYm9keSA9IHNvdXJjZS5ib2R5O1xuICB2YXIgYm9keUxlbmd0aCA9IGJvZHkubGVuZ3RoO1xuICB2YXIgcG9zID0gcHJldi5lbmQ7XG5cbiAgd2hpbGUgKHBvcyA8IGJvZHlMZW5ndGgpIHtcbiAgICB2YXIgY29kZSA9IGJvZHkuY2hhckNvZGVBdChwb3MpO1xuICAgIHZhciBfbGluZSA9IGxleGVyLmxpbmU7XG5cbiAgICB2YXIgX2NvbCA9IDEgKyBwb3MgLSBsZXhlci5saW5lU3RhcnQ7IC8vIFNvdXJjZUNoYXJhY3RlclxuXG5cbiAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgIGNhc2UgMHhmZWZmOiAvLyA8Qk9NPlxuXG4gICAgICBjYXNlIDk6IC8vICAgXFx0XG5cbiAgICAgIGNhc2UgMzI6IC8vICA8c3BhY2U+XG5cbiAgICAgIGNhc2UgNDQ6XG4gICAgICAgIC8vICAsXG4gICAgICAgICsrcG9zO1xuICAgICAgICBjb250aW51ZTtcblxuICAgICAgY2FzZSAxMDpcbiAgICAgICAgLy8gIFxcblxuICAgICAgICArK3BvcztcbiAgICAgICAgKytsZXhlci5saW5lO1xuICAgICAgICBsZXhlci5saW5lU3RhcnQgPSBwb3M7XG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBjYXNlIDEzOlxuICAgICAgICAvLyAgXFxyXG4gICAgICAgIGlmIChib2R5LmNoYXJDb2RlQXQocG9zICsgMSkgPT09IDEwKSB7XG4gICAgICAgICAgcG9zICs9IDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKytwb3M7XG4gICAgICAgIH1cblxuICAgICAgICArK2xleGVyLmxpbmU7XG4gICAgICAgIGxleGVyLmxpbmVTdGFydCA9IHBvcztcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGNhc2UgMzM6XG4gICAgICAgIC8vICAhXG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkJBTkcsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDM1OlxuICAgICAgICAvLyAgI1xuICAgICAgICByZXR1cm4gcmVhZENvbW1lbnQoc291cmNlLCBwb3MsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSAzNjpcbiAgICAgICAgLy8gICRcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuRE9MTEFSLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSAzODpcbiAgICAgICAgLy8gICZcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQU1QLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA0MDpcbiAgICAgICAgLy8gIChcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuUEFSRU5fTCwgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgNDE6XG4gICAgICAgIC8vICApXG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLlBBUkVOX1IsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDQ2OlxuICAgICAgICAvLyAgLlxuICAgICAgICBpZiAoYm9keS5jaGFyQ29kZUF0KHBvcyArIDEpID09PSA0NiAmJiBib2R5LmNoYXJDb2RlQXQocG9zICsgMikgPT09IDQ2KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuU1BSRUFELCBwb3MsIHBvcyArIDMsIF9saW5lLCBfY29sLCBwcmV2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDU4OlxuICAgICAgICAvLyAgOlxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5DT0xPTiwgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgNjE6XG4gICAgICAgIC8vICA9XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkVRVUFMUywgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgNjQ6XG4gICAgICAgIC8vICBAXG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkFULCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA5MTpcbiAgICAgICAgLy8gIFtcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQlJBQ0tFVF9MLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA5MzpcbiAgICAgICAgLy8gIF1cbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQlJBQ0tFVF9SLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSAxMjM6XG4gICAgICAgIC8vIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQlJBQ0VfTCwgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgMTI0OlxuICAgICAgICAvLyB8XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLlBJUEUsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDEyNTpcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5CUkFDRV9SLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSAzNDpcbiAgICAgICAgLy8gIFwiXG4gICAgICAgIGlmIChib2R5LmNoYXJDb2RlQXQocG9zICsgMSkgPT09IDM0ICYmIGJvZHkuY2hhckNvZGVBdChwb3MgKyAyKSA9PT0gMzQpIHtcbiAgICAgICAgICByZXR1cm4gcmVhZEJsb2NrU3RyaW5nKHNvdXJjZSwgcG9zLCBfbGluZSwgX2NvbCwgcHJldiwgbGV4ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlYWRTdHJpbmcoc291cmNlLCBwb3MsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA0NTogLy8gIC1cblxuICAgICAgY2FzZSA0ODogLy8gIDBcblxuICAgICAgY2FzZSA0OTogLy8gIDFcblxuICAgICAgY2FzZSA1MDogLy8gIDJcblxuICAgICAgY2FzZSA1MTogLy8gIDNcblxuICAgICAgY2FzZSA1MjogLy8gIDRcblxuICAgICAgY2FzZSA1MzogLy8gIDVcblxuICAgICAgY2FzZSA1NDogLy8gIDZcblxuICAgICAgY2FzZSA1NTogLy8gIDdcblxuICAgICAgY2FzZSA1NjogLy8gIDhcblxuICAgICAgY2FzZSA1NzpcbiAgICAgICAgLy8gIDlcbiAgICAgICAgcmV0dXJuIHJlYWROdW1iZXIoc291cmNlLCBwb3MsIGNvZGUsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA2NTogLy8gIEFcblxuICAgICAgY2FzZSA2NjogLy8gIEJcblxuICAgICAgY2FzZSA2NzogLy8gIENcblxuICAgICAgY2FzZSA2ODogLy8gIERcblxuICAgICAgY2FzZSA2OTogLy8gIEVcblxuICAgICAgY2FzZSA3MDogLy8gIEZcblxuICAgICAgY2FzZSA3MTogLy8gIEdcblxuICAgICAgY2FzZSA3MjogLy8gIEhcblxuICAgICAgY2FzZSA3MzogLy8gIElcblxuICAgICAgY2FzZSA3NDogLy8gIEpcblxuICAgICAgY2FzZSA3NTogLy8gIEtcblxuICAgICAgY2FzZSA3NjogLy8gIExcblxuICAgICAgY2FzZSA3NzogLy8gIE1cblxuICAgICAgY2FzZSA3ODogLy8gIE5cblxuICAgICAgY2FzZSA3OTogLy8gIE9cblxuICAgICAgY2FzZSA4MDogLy8gIFBcblxuICAgICAgY2FzZSA4MTogLy8gIFFcblxuICAgICAgY2FzZSA4MjogLy8gIFJcblxuICAgICAgY2FzZSA4MzogLy8gIFNcblxuICAgICAgY2FzZSA4NDogLy8gIFRcblxuICAgICAgY2FzZSA4NTogLy8gIFVcblxuICAgICAgY2FzZSA4NjogLy8gIFZcblxuICAgICAgY2FzZSA4NzogLy8gIFdcblxuICAgICAgY2FzZSA4ODogLy8gIFhcblxuICAgICAgY2FzZSA4OTogLy8gIFlcblxuICAgICAgY2FzZSA5MDogLy8gIFpcblxuICAgICAgY2FzZSA5NTogLy8gIF9cblxuICAgICAgY2FzZSA5NzogLy8gIGFcblxuICAgICAgY2FzZSA5ODogLy8gIGJcblxuICAgICAgY2FzZSA5OTogLy8gIGNcblxuICAgICAgY2FzZSAxMDA6IC8vIGRcblxuICAgICAgY2FzZSAxMDE6IC8vIGVcblxuICAgICAgY2FzZSAxMDI6IC8vIGZcblxuICAgICAgY2FzZSAxMDM6IC8vIGdcblxuICAgICAgY2FzZSAxMDQ6IC8vIGhcblxuICAgICAgY2FzZSAxMDU6IC8vIGlcblxuICAgICAgY2FzZSAxMDY6IC8vIGpcblxuICAgICAgY2FzZSAxMDc6IC8vIGtcblxuICAgICAgY2FzZSAxMDg6IC8vIGxcblxuICAgICAgY2FzZSAxMDk6IC8vIG1cblxuICAgICAgY2FzZSAxMTA6IC8vIG5cblxuICAgICAgY2FzZSAxMTE6IC8vIG9cblxuICAgICAgY2FzZSAxMTI6IC8vIHBcblxuICAgICAgY2FzZSAxMTM6IC8vIHFcblxuICAgICAgY2FzZSAxMTQ6IC8vIHJcblxuICAgICAgY2FzZSAxMTU6IC8vIHNcblxuICAgICAgY2FzZSAxMTY6IC8vIHRcblxuICAgICAgY2FzZSAxMTc6IC8vIHVcblxuICAgICAgY2FzZSAxMTg6IC8vIHZcblxuICAgICAgY2FzZSAxMTk6IC8vIHdcblxuICAgICAgY2FzZSAxMjA6IC8vIHhcblxuICAgICAgY2FzZSAxMjE6IC8vIHlcblxuICAgICAgY2FzZSAxMjI6XG4gICAgICAgIC8vIHpcbiAgICAgICAgcmV0dXJuIHJlYWROYW1lKHNvdXJjZSwgcG9zLCBfbGluZSwgX2NvbCwgcHJldik7XG4gICAgfVxuXG4gICAgdGhyb3cgc3ludGF4RXJyb3Ioc291cmNlLCBwb3MsIHVuZXhwZWN0ZWRDaGFyYWN0ZXJNZXNzYWdlKGNvZGUpKTtcbiAgfVxuXG4gIHZhciBsaW5lID0gbGV4ZXIubGluZTtcbiAgdmFyIGNvbCA9IDEgKyBwb3MgLSBsZXhlci5saW5lU3RhcnQ7XG4gIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkVPRiwgYm9keUxlbmd0aCwgYm9keUxlbmd0aCwgbGluZSwgY29sLCBwcmV2KTtcbn1cbi8qKlxuICogUmVwb3J0IGEgbWVzc2FnZSB0aGF0IGFuIHVuZXhwZWN0ZWQgY2hhcmFjdGVyIHdhcyBlbmNvdW50ZXJlZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIHVuZXhwZWN0ZWRDaGFyYWN0ZXJNZXNzYWdlKGNvZGUpIHtcbiAgaWYgKGNvZGUgPCAweDAwMjAgJiYgY29kZSAhPT0gMHgwMDA5ICYmIGNvZGUgIT09IDB4MDAwYSAmJiBjb2RlICE9PSAweDAwMGQpIHtcbiAgICByZXR1cm4gXCJDYW5ub3QgY29udGFpbiB0aGUgaW52YWxpZCBjaGFyYWN0ZXIgXCIuY29uY2F0KHByaW50Q2hhckNvZGUoY29kZSksIFwiLlwiKTtcbiAgfVxuXG4gIGlmIChjb2RlID09PSAzOSkge1xuICAgIC8vICdcbiAgICByZXR1cm4gJ1VuZXhwZWN0ZWQgc2luZ2xlIHF1b3RlIGNoYXJhY3RlciAoXFwnKSwgZGlkIHlvdSBtZWFuIHRvIHVzZSBhIGRvdWJsZSBxdW90ZSAoXCIpPyc7XG4gIH1cblxuICByZXR1cm4gXCJDYW5ub3QgcGFyc2UgdGhlIHVuZXhwZWN0ZWQgY2hhcmFjdGVyIFwiLmNvbmNhdChwcmludENoYXJDb2RlKGNvZGUpLCBcIi5cIik7XG59XG4vKipcbiAqIFJlYWRzIGEgY29tbWVudCB0b2tlbiBmcm9tIHRoZSBzb3VyY2UgZmlsZS5cbiAqXG4gKiAjW1xcdTAwMDlcXHUwMDIwLVxcdUZGRkZdKlxuICovXG5cblxuZnVuY3Rpb24gcmVhZENvbW1lbnQoc291cmNlLCBzdGFydCwgbGluZSwgY29sLCBwcmV2KSB7XG4gIHZhciBib2R5ID0gc291cmNlLmJvZHk7XG4gIHZhciBjb2RlO1xuICB2YXIgcG9zaXRpb24gPSBzdGFydDtcblxuICBkbyB7XG4gICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKTtcbiAgfSB3aGlsZSAoIWlzTmFOKGNvZGUpICYmICggLy8gU291cmNlQ2hhcmFjdGVyIGJ1dCBub3QgTGluZVRlcm1pbmF0b3JcbiAgY29kZSA+IDB4MDAxZiB8fCBjb2RlID09PSAweDAwMDkpKTtcblxuICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5DT01NRU5ULCBzdGFydCwgcG9zaXRpb24sIGxpbmUsIGNvbCwgcHJldiwgYm9keS5zbGljZShzdGFydCArIDEsIHBvc2l0aW9uKSk7XG59XG4vKipcbiAqIFJlYWRzIGEgbnVtYmVyIHRva2VuIGZyb20gdGhlIHNvdXJjZSBmaWxlLCBlaXRoZXIgYSBmbG9hdFxuICogb3IgYW4gaW50IGRlcGVuZGluZyBvbiB3aGV0aGVyIGEgZGVjaW1hbCBwb2ludCBhcHBlYXJzLlxuICpcbiAqIEludDogICAtPygwfFsxLTldWzAtOV0qKVxuICogRmxvYXQ6IC0/KDB8WzEtOV1bMC05XSopKFxcLlswLTldKyk/KChFfGUpKCt8LSk/WzAtOV0rKT9cbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWROdW1iZXIoc291cmNlLCBzdGFydCwgZmlyc3RDb2RlLCBsaW5lLCBjb2wsIHByZXYpIHtcbiAgdmFyIGJvZHkgPSBzb3VyY2UuYm9keTtcbiAgdmFyIGNvZGUgPSBmaXJzdENvZGU7XG4gIHZhciBwb3NpdGlvbiA9IHN0YXJ0O1xuICB2YXIgaXNGbG9hdCA9IGZhbHNlO1xuXG4gIGlmIChjb2RlID09PSA0NSkge1xuICAgIC8vIC1cbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09IDQ4KSB7XG4gICAgLy8gMFxuICAgIGNvZGUgPSBib2R5LmNoYXJDb2RlQXQoKytwb3NpdGlvbik7XG5cbiAgICBpZiAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB7XG4gICAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgbnVtYmVyLCB1bmV4cGVjdGVkIGRpZ2l0IGFmdGVyIDA6IFwiLmNvbmNhdChwcmludENoYXJDb2RlKGNvZGUpLCBcIi5cIikpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwb3NpdGlvbiA9IHJlYWREaWdpdHMoc291cmNlLCBwb3NpdGlvbiwgY29kZSk7XG4gICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbik7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gNDYpIHtcbiAgICAvLyAuXG4gICAgaXNGbG9hdCA9IHRydWU7XG4gICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKTtcbiAgICBwb3NpdGlvbiA9IHJlYWREaWdpdHMoc291cmNlLCBwb3NpdGlvbiwgY29kZSk7XG4gICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbik7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gNjkgfHwgY29kZSA9PT0gMTAxKSB7XG4gICAgLy8gRSBlXG4gICAgaXNGbG9hdCA9IHRydWU7XG4gICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKTtcblxuICAgIGlmIChjb2RlID09PSA0MyB8fCBjb2RlID09PSA0NSkge1xuICAgICAgLy8gKyAtXG4gICAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuICAgIH1cblxuICAgIHBvc2l0aW9uID0gcmVhZERpZ2l0cyhzb3VyY2UsIHBvc2l0aW9uLCBjb2RlKTtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgfSAvLyBOdW1iZXJzIGNhbm5vdCBiZSBmb2xsb3dlZCBieSAuIG9yIE5hbWVTdGFydFxuXG5cbiAgaWYgKGNvZGUgPT09IDQ2IHx8IGlzTmFtZVN0YXJ0KGNvZGUpKSB7XG4gICAgdGhyb3cgc3ludGF4RXJyb3Ioc291cmNlLCBwb3NpdGlvbiwgXCJJbnZhbGlkIG51bWJlciwgZXhwZWN0ZWQgZGlnaXQgYnV0IGdvdDogXCIuY29uY2F0KHByaW50Q2hhckNvZGUoY29kZSksIFwiLlwiKSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFRva2VuKGlzRmxvYXQgPyBUb2tlbktpbmQuRkxPQVQgOiBUb2tlbktpbmQuSU5ULCBzdGFydCwgcG9zaXRpb24sIGxpbmUsIGNvbCwgcHJldiwgYm9keS5zbGljZShzdGFydCwgcG9zaXRpb24pKTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgbmV3IHBvc2l0aW9uIGluIHRoZSBzb3VyY2UgYWZ0ZXIgcmVhZGluZyBkaWdpdHMuXG4gKi9cblxuXG5mdW5jdGlvbiByZWFkRGlnaXRzKHNvdXJjZSwgc3RhcnQsIGZpcnN0Q29kZSkge1xuICB2YXIgYm9keSA9IHNvdXJjZS5ib2R5O1xuICB2YXIgcG9zaXRpb24gPSBzdGFydDtcbiAgdmFyIGNvZGUgPSBmaXJzdENvZGU7XG5cbiAgaWYgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1Nykge1xuICAgIC8vIDAgLSA5XG4gICAgZG8ge1xuICAgICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKTtcbiAgICB9IHdoaWxlIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpOyAvLyAwIC0gOVxuXG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgbnVtYmVyLCBleHBlY3RlZCBkaWdpdCBidXQgZ290OiBcIi5jb25jYXQocHJpbnRDaGFyQ29kZShjb2RlKSwgXCIuXCIpKTtcbn1cbi8qKlxuICogUmVhZHMgYSBzdHJpbmcgdG9rZW4gZnJvbSB0aGUgc291cmNlIGZpbGUuXG4gKlxuICogXCIoW15cIlxcXFxcXHUwMDBBXFx1MDAwRF18KFxcXFwodVswLTlhLWZBLUZdezR9fFtcIlxcXFwvYmZucnRdKSkpKlwiXG4gKi9cblxuXG5mdW5jdGlvbiByZWFkU3RyaW5nKHNvdXJjZSwgc3RhcnQsIGxpbmUsIGNvbCwgcHJldikge1xuICB2YXIgYm9keSA9IHNvdXJjZS5ib2R5O1xuICB2YXIgcG9zaXRpb24gPSBzdGFydCArIDE7XG4gIHZhciBjaHVua1N0YXJ0ID0gcG9zaXRpb247XG4gIHZhciBjb2RlID0gMDtcbiAgdmFyIHZhbHVlID0gJyc7XG5cbiAgd2hpbGUgKHBvc2l0aW9uIDwgYm9keS5sZW5ndGggJiYgIWlzTmFOKGNvZGUgPSBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24pKSAmJiAvLyBub3QgTGluZVRlcm1pbmF0b3JcbiAgY29kZSAhPT0gMHgwMDBhICYmIGNvZGUgIT09IDB4MDAwZCkge1xuICAgIC8vIENsb3NpbmcgUXVvdGUgKFwiKVxuICAgIGlmIChjb2RlID09PSAzNCkge1xuICAgICAgdmFsdWUgKz0gYm9keS5zbGljZShjaHVua1N0YXJ0LCBwb3NpdGlvbik7XG4gICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5TVFJJTkcsIHN0YXJ0LCBwb3NpdGlvbiArIDEsIGxpbmUsIGNvbCwgcHJldiwgdmFsdWUpO1xuICAgIH0gLy8gU291cmNlQ2hhcmFjdGVyXG5cblxuICAgIGlmIChjb2RlIDwgMHgwMDIwICYmIGNvZGUgIT09IDB4MDAwOSkge1xuICAgICAgdGhyb3cgc3ludGF4RXJyb3Ioc291cmNlLCBwb3NpdGlvbiwgXCJJbnZhbGlkIGNoYXJhY3RlciB3aXRoaW4gU3RyaW5nOiBcIi5jb25jYXQocHJpbnRDaGFyQ29kZShjb2RlKSwgXCIuXCIpKTtcbiAgICB9XG5cbiAgICArK3Bvc2l0aW9uO1xuXG4gICAgaWYgKGNvZGUgPT09IDkyKSB7XG4gICAgICAvLyBcXFxuICAgICAgdmFsdWUgKz0gYm9keS5zbGljZShjaHVua1N0YXJ0LCBwb3NpdGlvbiAtIDEpO1xuICAgICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbik7XG5cbiAgICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgIHZhbHVlICs9ICdcIic7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICB2YWx1ZSArPSAnLyc7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA5MjpcbiAgICAgICAgICB2YWx1ZSArPSAnXFxcXCc7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA5ODpcbiAgICAgICAgICB2YWx1ZSArPSAnXFxiJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICB2YWx1ZSArPSAnXFxmJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDExMDpcbiAgICAgICAgICB2YWx1ZSArPSAnXFxuJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDExNDpcbiAgICAgICAgICB2YWx1ZSArPSAnXFxyJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDExNjpcbiAgICAgICAgICB2YWx1ZSArPSAnXFx0JztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDExNzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyB1WFhYWFxuICAgICAgICAgICAgdmFyIGNoYXJDb2RlID0gdW5pQ2hhckNvZGUoYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSksIGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDIpLCBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAzKSwgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgNCkpO1xuXG4gICAgICAgICAgICBpZiAoY2hhckNvZGUgPCAwKSB7XG4gICAgICAgICAgICAgIHZhciBpbnZhbGlkU2VxdWVuY2UgPSBib2R5LnNsaWNlKHBvc2l0aW9uICsgMSwgcG9zaXRpb24gKyA1KTtcbiAgICAgICAgICAgICAgdGhyb3cgc3ludGF4RXJyb3Ioc291cmNlLCBwb3NpdGlvbiwgXCJJbnZhbGlkIGNoYXJhY3RlciBlc2NhcGUgc2VxdWVuY2U6IFxcXFx1XCIuY29uY2F0KGludmFsaWRTZXF1ZW5jZSwgXCIuXCIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSk7XG4gICAgICAgICAgICBwb3NpdGlvbiArPSA0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgc3ludGF4RXJyb3Ioc291cmNlLCBwb3NpdGlvbiwgXCJJbnZhbGlkIGNoYXJhY3RlciBlc2NhcGUgc2VxdWVuY2U6IFxcXFxcIi5jb25jYXQoU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKSwgXCIuXCIpKTtcbiAgICAgIH1cblxuICAgICAgKytwb3NpdGlvbjtcbiAgICAgIGNodW5rU3RhcnQgPSBwb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCAnVW50ZXJtaW5hdGVkIHN0cmluZy4nKTtcbn1cbi8qKlxuICogUmVhZHMgYSBibG9jayBzdHJpbmcgdG9rZW4gZnJvbSB0aGUgc291cmNlIGZpbGUuXG4gKlxuICogXCJcIlwiKFwiP1wiPyhcXFxcXCJcIlwifFxcXFwoPyE9XCJcIlwiKXxbXlwiXFxcXF0pKSpcIlwiXCJcbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWRCbG9ja1N0cmluZyhzb3VyY2UsIHN0YXJ0LCBsaW5lLCBjb2wsIHByZXYsIGxleGVyKSB7XG4gIHZhciBib2R5ID0gc291cmNlLmJvZHk7XG4gIHZhciBwb3NpdGlvbiA9IHN0YXJ0ICsgMztcbiAgdmFyIGNodW5rU3RhcnQgPSBwb3NpdGlvbjtcbiAgdmFyIGNvZGUgPSAwO1xuICB2YXIgcmF3VmFsdWUgPSAnJztcblxuICB3aGlsZSAocG9zaXRpb24gPCBib2R5Lmxlbmd0aCAmJiAhaXNOYU4oY29kZSA9IGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbikpKSB7XG4gICAgLy8gQ2xvc2luZyBUcmlwbGUtUXVvdGUgKFwiXCJcIilcbiAgICBpZiAoY29kZSA9PT0gMzQgJiYgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSkgPT09IDM0ICYmIGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDIpID09PSAzNCkge1xuICAgICAgcmF3VmFsdWUgKz0gYm9keS5zbGljZShjaHVua1N0YXJ0LCBwb3NpdGlvbik7XG4gICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5CTE9DS19TVFJJTkcsIHN0YXJ0LCBwb3NpdGlvbiArIDMsIGxpbmUsIGNvbCwgcHJldiwgZGVkZW50QmxvY2tTdHJpbmdWYWx1ZShyYXdWYWx1ZSkpO1xuICAgIH0gLy8gU291cmNlQ2hhcmFjdGVyXG5cblxuICAgIGlmIChjb2RlIDwgMHgwMDIwICYmIGNvZGUgIT09IDB4MDAwOSAmJiBjb2RlICE9PSAweDAwMGEgJiYgY29kZSAhPT0gMHgwMDBkKSB7XG4gICAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgY2hhcmFjdGVyIHdpdGhpbiBTdHJpbmc6IFwiLmNvbmNhdChwcmludENoYXJDb2RlKGNvZGUpLCBcIi5cIikpO1xuICAgIH1cblxuICAgIGlmIChjb2RlID09PSAxMCkge1xuICAgICAgLy8gbmV3IGxpbmVcbiAgICAgICsrcG9zaXRpb247XG4gICAgICArK2xleGVyLmxpbmU7XG4gICAgICBsZXhlci5saW5lU3RhcnQgPSBwb3NpdGlvbjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDEzKSB7XG4gICAgICAvLyBjYXJyaWFnZSByZXR1cm5cbiAgICAgIGlmIChib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKSA9PT0gMTApIHtcbiAgICAgICAgcG9zaXRpb24gKz0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICsrcG9zaXRpb247XG4gICAgICB9XG5cbiAgICAgICsrbGV4ZXIubGluZTtcbiAgICAgIGxleGVyLmxpbmVTdGFydCA9IHBvc2l0aW9uO1xuICAgIH0gZWxzZSBpZiAoIC8vIEVzY2FwZSBUcmlwbGUtUXVvdGUgKFxcXCJcIlwiKVxuICAgIGNvZGUgPT09IDkyICYmIGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDEpID09PSAzNCAmJiBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAyKSA9PT0gMzQgJiYgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMykgPT09IDM0KSB7XG4gICAgICByYXdWYWx1ZSArPSBib2R5LnNsaWNlKGNodW5rU3RhcnQsIHBvc2l0aW9uKSArICdcIlwiXCInO1xuICAgICAgcG9zaXRpb24gKz0gNDtcbiAgICAgIGNodW5rU3RhcnQgPSBwb3NpdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgKytwb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCAnVW50ZXJtaW5hdGVkIHN0cmluZy4nKTtcbn1cbi8qKlxuICogQ29udmVydHMgZm91ciBoZXhhZGVjaW1hbCBjaGFycyB0byB0aGUgaW50ZWdlciB0aGF0IHRoZVxuICogc3RyaW5nIHJlcHJlc2VudHMuIEZvciBleGFtcGxlLCB1bmlDaGFyQ29kZSgnMCcsJzAnLCcwJywnZicpXG4gKiB3aWxsIHJldHVybiAxNSwgYW5kIHVuaUNoYXJDb2RlKCcwJywnMCcsJ2YnLCdmJykgcmV0dXJucyAyNTUuXG4gKlxuICogUmV0dXJucyBhIG5lZ2F0aXZlIG51bWJlciBvbiBlcnJvciwgaWYgYSBjaGFyIHdhcyBpbnZhbGlkLlxuICpcbiAqIFRoaXMgaXMgaW1wbGVtZW50ZWQgYnkgbm90aW5nIHRoYXQgY2hhcjJoZXgoKSByZXR1cm5zIC0xIG9uIGVycm9yLFxuICogd2hpY2ggbWVhbnMgdGhlIHJlc3VsdCBvZiBPUmluZyB0aGUgY2hhcjJoZXgoKSB3aWxsIGFsc28gYmUgbmVnYXRpdmUuXG4gKi9cblxuXG5mdW5jdGlvbiB1bmlDaGFyQ29kZShhLCBiLCBjLCBkKSB7XG4gIHJldHVybiBjaGFyMmhleChhKSA8PCAxMiB8IGNoYXIyaGV4KGIpIDw8IDggfCBjaGFyMmhleChjKSA8PCA0IHwgY2hhcjJoZXgoZCk7XG59XG4vKipcbiAqIENvbnZlcnRzIGEgaGV4IGNoYXJhY3RlciB0byBpdHMgaW50ZWdlciB2YWx1ZS5cbiAqICcwJyBiZWNvbWVzIDAsICc5JyBiZWNvbWVzIDlcbiAqICdBJyBiZWNvbWVzIDEwLCAnRicgYmVjb21lcyAxNVxuICogJ2EnIGJlY29tZXMgMTAsICdmJyBiZWNvbWVzIDE1XG4gKlxuICogUmV0dXJucyAtMSBvbiBlcnJvci5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNoYXIyaGV4KGEpIHtcbiAgcmV0dXJuIGEgPj0gNDggJiYgYSA8PSA1NyA/IGEgLSA0OCAvLyAwLTlcbiAgOiBhID49IDY1ICYmIGEgPD0gNzAgPyBhIC0gNTUgLy8gQS1GXG4gIDogYSA+PSA5NyAmJiBhIDw9IDEwMiA/IGEgLSA4NyAvLyBhLWZcbiAgOiAtMTtcbn1cbi8qKlxuICogUmVhZHMgYW4gYWxwaGFudW1lcmljICsgdW5kZXJzY29yZSBuYW1lIGZyb20gdGhlIHNvdXJjZS5cbiAqXG4gKiBbX0EtWmEtel1bXzAtOUEtWmEtel0qXG4gKi9cblxuXG5mdW5jdGlvbiByZWFkTmFtZShzb3VyY2UsIHN0YXJ0LCBsaW5lLCBjb2wsIHByZXYpIHtcbiAgdmFyIGJvZHkgPSBzb3VyY2UuYm9keTtcbiAgdmFyIGJvZHlMZW5ndGggPSBib2R5Lmxlbmd0aDtcbiAgdmFyIHBvc2l0aW9uID0gc3RhcnQgKyAxO1xuICB2YXIgY29kZSA9IDA7XG5cbiAgd2hpbGUgKHBvc2l0aW9uICE9PSBib2R5TGVuZ3RoICYmICFpc05hTihjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKSkgJiYgKGNvZGUgPT09IDk1IHx8IC8vIF9cbiAgY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3IHx8IC8vIDAtOVxuICBjb2RlID49IDY1ICYmIGNvZGUgPD0gOTAgfHwgLy8gQS1aXG4gIGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIC8vIGEtelxuICApIHtcbiAgICArK3Bvc2l0aW9uO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuTkFNRSwgc3RhcnQsIHBvc2l0aW9uLCBsaW5lLCBjb2wsIHByZXYsIGJvZHkuc2xpY2Uoc3RhcnQsIHBvc2l0aW9uKSk7XG59IC8vIF8gQS1aIGEtelxuXG5cbmZ1bmN0aW9uIGlzTmFtZVN0YXJ0KGNvZGUpIHtcbiAgcmV0dXJuIGNvZGUgPT09IDk1IHx8IGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCB8fCBjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyO1xufVxuIiwiLyoqXG4gKiBSZXByZXNlbnRzIGEgbG9jYXRpb24gaW4gYSBTb3VyY2UuXG4gKi9cblxuLyoqXG4gKiBUYWtlcyBhIFNvdXJjZSBhbmQgYSBVVEYtOCBjaGFyYWN0ZXIgb2Zmc2V0LCBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZ1xuICogbGluZSBhbmQgY29sdW1uIGFzIGEgU291cmNlTG9jYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbihzb3VyY2UsIHBvc2l0aW9uKSB7XG4gIHZhciBsaW5lUmVnZXhwID0gL1xcclxcbnxbXFxuXFxyXS9nO1xuICB2YXIgbGluZSA9IDE7XG4gIHZhciBjb2x1bW4gPSBwb3NpdGlvbiArIDE7XG4gIHZhciBtYXRjaDtcblxuICB3aGlsZSAoKG1hdGNoID0gbGluZVJlZ2V4cC5leGVjKHNvdXJjZS5ib2R5KSkgJiYgbWF0Y2guaW5kZXggPCBwb3NpdGlvbikge1xuICAgIGxpbmUgKz0gMTtcbiAgICBjb2x1bW4gPSBwb3NpdGlvbiArIDEgLSAobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsaW5lOiBsaW5lLFxuICAgIGNvbHVtbjogY29sdW1uXG4gIH07XG59XG4iLCJpbXBvcnQgeyBzeW50YXhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9zeW50YXhFcnJvci5tanNcIjtcbmltcG9ydCB7IEtpbmQgfSBmcm9tIFwiLi9raW5kcy5tanNcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIi4vYXN0Lm1qc1wiO1xuaW1wb3J0IHsgVG9rZW5LaW5kIH0gZnJvbSBcIi4vdG9rZW5LaW5kLm1qc1wiO1xuaW1wb3J0IHsgU291cmNlLCBpc1NvdXJjZSB9IGZyb20gXCIuL3NvdXJjZS5tanNcIjtcbmltcG9ydCB7IERpcmVjdGl2ZUxvY2F0aW9uIH0gZnJvbSBcIi4vZGlyZWN0aXZlTG9jYXRpb24ubWpzXCI7XG5pbXBvcnQgeyBMZXhlciwgaXNQdW5jdHVhdG9yVG9rZW5LaW5kIH0gZnJvbSBcIi4vbGV4ZXIubWpzXCI7XG4vKipcbiAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byBjb250cm9sIHBhcnNlciBiZWhhdmlvclxuICovXG5cbi8qKlxuICogR2l2ZW4gYSBHcmFwaFFMIHNvdXJjZSwgcGFyc2VzIGl0IGludG8gYSBEb2N1bWVudC5cbiAqIFRocm93cyBHcmFwaFFMRXJyb3IgaWYgYSBzeW50YXggZXJyb3IgaXMgZW5jb3VudGVyZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcnNlciA9IG5ldyBQYXJzZXIoc291cmNlLCBvcHRpb25zKTtcbiAgcmV0dXJuIHBhcnNlci5wYXJzZURvY3VtZW50KCk7XG59XG4vKipcbiAqIEdpdmVuIGEgc3RyaW5nIGNvbnRhaW5pbmcgYSBHcmFwaFFMIHZhbHVlIChleC4gYFs0Ml1gKSwgcGFyc2UgdGhlIEFTVCBmb3JcbiAqIHRoYXQgdmFsdWUuXG4gKiBUaHJvd3MgR3JhcGhRTEVycm9yIGlmIGEgc3ludGF4IGVycm9yIGlzIGVuY291bnRlcmVkLlxuICpcbiAqIFRoaXMgaXMgdXNlZnVsIHdpdGhpbiB0b29scyB0aGF0IG9wZXJhdGUgdXBvbiBHcmFwaFFMIFZhbHVlcyBkaXJlY3RseSBhbmRcbiAqIGluIGlzb2xhdGlvbiBvZiBjb21wbGV0ZSBHcmFwaFFMIGRvY3VtZW50cy5cbiAqXG4gKiBDb25zaWRlciBwcm92aWRpbmcgdGhlIHJlc3VsdHMgdG8gdGhlIHV0aWxpdHkgZnVuY3Rpb246IHZhbHVlRnJvbUFTVCgpLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZhbHVlKHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgcGFyc2VyID0gbmV3IFBhcnNlcihzb3VyY2UsIG9wdGlvbnMpO1xuICBwYXJzZXIuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLlNPRik7XG4gIHZhciB2YWx1ZSA9IHBhcnNlci5wYXJzZVZhbHVlTGl0ZXJhbChmYWxzZSk7XG4gIHBhcnNlci5leHBlY3RUb2tlbihUb2tlbktpbmQuRU9GKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4gKiBHaXZlbiBhIHN0cmluZyBjb250YWluaW5nIGEgR3JhcGhRTCBUeXBlIChleC4gYFtJbnQhXWApLCBwYXJzZSB0aGUgQVNUIGZvclxuICogdGhhdCB0eXBlLlxuICogVGhyb3dzIEdyYXBoUUxFcnJvciBpZiBhIHN5bnRheCBlcnJvciBpcyBlbmNvdW50ZXJlZC5cbiAqXG4gKiBUaGlzIGlzIHVzZWZ1bCB3aXRoaW4gdG9vbHMgdGhhdCBvcGVyYXRlIHVwb24gR3JhcGhRTCBUeXBlcyBkaXJlY3RseSBhbmRcbiAqIGluIGlzb2xhdGlvbiBvZiBjb21wbGV0ZSBHcmFwaFFMIGRvY3VtZW50cy5cbiAqXG4gKiBDb25zaWRlciBwcm92aWRpbmcgdGhlIHJlc3VsdHMgdG8gdGhlIHV0aWxpdHkgZnVuY3Rpb246IHR5cGVGcm9tQVNUKCkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHlwZShzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcnNlciA9IG5ldyBQYXJzZXIoc291cmNlLCBvcHRpb25zKTtcbiAgcGFyc2VyLmV4cGVjdFRva2VuKFRva2VuS2luZC5TT0YpO1xuICB2YXIgdHlwZSA9IHBhcnNlci5wYXJzZVR5cGVSZWZlcmVuY2UoKTtcbiAgcGFyc2VyLmV4cGVjdFRva2VuKFRva2VuS2luZC5FT0YpO1xuICByZXR1cm4gdHlwZTtcbn1cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBleHBvcnRlZCBvbmx5IHRvIGFzc2lzdCBwZW9wbGUgaW4gaW1wbGVtZW50aW5nIHRoZWlyIG93biBwYXJzZXJzXG4gKiB3aXRob3V0IGR1cGxpY2F0aW5nIHRvbyBtdWNoIGNvZGUgYW5kIHNob3VsZCBiZSB1c2VkIG9ubHkgYXMgbGFzdCByZXNvcnQgZm9yIGNhc2VzXG4gKiBzdWNoIGFzIGV4cGVyaW1lbnRhbCBzeW50YXggb3IgaWYgY2VydGFpbiBmZWF0dXJlcyBjb3VsZCBub3QgYmUgY29udHJpYnV0ZWQgdXBzdHJlYW0uXG4gKlxuICogSXQgaXMgc3RpbGwgcGFydCBvZiB0aGUgaW50ZXJuYWwgQVBJIGFuZCBpcyB2ZXJzaW9uZWQsIHNvIGFueSBjaGFuZ2VzIHRvIGl0IGFyZSBuZXZlclxuICogY29uc2lkZXJlZCBicmVha2luZyBjaGFuZ2VzLiBJZiB5b3Ugc3RpbGwgbmVlZCB0byBzdXBwb3J0IG11bHRpcGxlIHZlcnNpb25zIG9mIHRoZVxuICogbGlicmFyeSwgcGxlYXNlIHVzZSB0aGUgYHZlcnNpb25JbmZvYCB2YXJpYWJsZSBmb3IgdmVyc2lvbiBkZXRlY3Rpb24uXG4gKlxuICogQGludGVybmFsXG4gKi9cblxuZXhwb3J0IHZhciBQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQYXJzZXIoc291cmNlLCBvcHRpb25zKSB7XG4gICAgdmFyIHNvdXJjZU9iaiA9IGlzU291cmNlKHNvdXJjZSkgPyBzb3VyY2UgOiBuZXcgU291cmNlKHNvdXJjZSk7XG4gICAgdGhpcy5fbGV4ZXIgPSBuZXcgTGV4ZXIoc291cmNlT2JqKTtcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuICAvKipcbiAgICogQ29udmVydHMgYSBuYW1lIGxleCB0b2tlbiBpbnRvIGEgbmFtZSBwYXJzZSBub2RlLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBQYXJzZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5wYXJzZU5hbWUgPSBmdW5jdGlvbiBwYXJzZU5hbWUoKSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuTkFNRSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuTkFNRSxcbiAgICAgIHZhbHVlOiB0b2tlbi52YWx1ZSxcbiAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgfTtcbiAgfSAvLyBJbXBsZW1lbnRzIHRoZSBwYXJzaW5nIHJ1bGVzIGluIHRoZSBEb2N1bWVudCBzZWN0aW9uLlxuXG4gIC8qKlxuICAgKiBEb2N1bWVudCA6IERlZmluaXRpb24rXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRG9jdW1lbnQgPSBmdW5jdGlvbiBwYXJzZURvY3VtZW50KCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLkRPQ1VNRU5ULFxuICAgICAgZGVmaW5pdGlvbnM6IHRoaXMubWFueShUb2tlbktpbmQuU09GLCB0aGlzLnBhcnNlRGVmaW5pdGlvbiwgVG9rZW5LaW5kLkVPRiksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIERlZmluaXRpb24gOlxuICAgKiAgIC0gRXhlY3V0YWJsZURlZmluaXRpb25cbiAgICogICAtIFR5cGVTeXN0ZW1EZWZpbml0aW9uXG4gICAqICAgLSBUeXBlU3lzdGVtRXh0ZW5zaW9uXG4gICAqXG4gICAqIEV4ZWN1dGFibGVEZWZpbml0aW9uIDpcbiAgICogICAtIE9wZXJhdGlvbkRlZmluaXRpb25cbiAgICogICAtIEZyYWdtZW50RGVmaW5pdGlvblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZURlZmluaXRpb24oKSB7XG4gICAgaWYgKHRoaXMucGVlayhUb2tlbktpbmQuTkFNRSkpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5fbGV4ZXIudG9rZW4udmFsdWUpIHtcbiAgICAgICAgY2FzZSAncXVlcnknOlxuICAgICAgICBjYXNlICdtdXRhdGlvbic6XG4gICAgICAgIGNhc2UgJ3N1YnNjcmlwdGlvbic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPcGVyYXRpb25EZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnZnJhZ21lbnQnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRnJhZ21lbnREZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnc2NoZW1hJzpcbiAgICAgICAgY2FzZSAnc2NhbGFyJzpcbiAgICAgICAgY2FzZSAndHlwZSc6XG4gICAgICAgIGNhc2UgJ2ludGVyZmFjZSc6XG4gICAgICAgIGNhc2UgJ3VuaW9uJzpcbiAgICAgICAgY2FzZSAnZW51bSc6XG4gICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgY2FzZSAnZGlyZWN0aXZlJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVR5cGVTeXN0ZW1EZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnZXh0ZW5kJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVR5cGVTeXN0ZW1FeHRlbnNpb24oKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucGVlayhUb2tlbktpbmQuQlJBQ0VfTCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlT3BlcmF0aW9uRGVmaW5pdGlvbigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrRGVzY3JpcHRpb24oKSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VUeXBlU3lzdGVtRGVmaW5pdGlvbigpO1xuICAgIH1cblxuICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIE9wZXJhdGlvbnMgc2VjdGlvbi5cblxuICAvKipcbiAgICogT3BlcmF0aW9uRGVmaW5pdGlvbiA6XG4gICAqICAtIFNlbGVjdGlvblNldFxuICAgKiAgLSBPcGVyYXRpb25UeXBlIE5hbWU/IFZhcmlhYmxlRGVmaW5pdGlvbnM/IERpcmVjdGl2ZXM/IFNlbGVjdGlvblNldFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZU9wZXJhdGlvbkRlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZU9wZXJhdGlvbkRlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICBpZiAodGhpcy5wZWVrKFRva2VuS2luZC5CUkFDRV9MKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZDogS2luZC5PUEVSQVRJT05fREVGSU5JVElPTixcbiAgICAgICAgb3BlcmF0aW9uOiAncXVlcnknLFxuICAgICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICAgIHZhcmlhYmxlRGVmaW5pdGlvbnM6IFtdLFxuICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgc2VsZWN0aW9uU2V0OiB0aGlzLnBhcnNlU2VsZWN0aW9uU2V0KCksXG4gICAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBvcGVyYXRpb24gPSB0aGlzLnBhcnNlT3BlcmF0aW9uVHlwZSgpO1xuICAgIHZhciBuYW1lO1xuXG4gICAgaWYgKHRoaXMucGVlayhUb2tlbktpbmQuTkFNRSkpIHtcbiAgICAgIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLk9QRVJBVElPTl9ERUZJTklUSU9OLFxuICAgICAgb3BlcmF0aW9uOiBvcGVyYXRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgdmFyaWFibGVEZWZpbml0aW9uczogdGhpcy5wYXJzZVZhcmlhYmxlRGVmaW5pdGlvbnMoKSxcbiAgICAgIGRpcmVjdGl2ZXM6IHRoaXMucGFyc2VEaXJlY3RpdmVzKGZhbHNlKSxcbiAgICAgIHNlbGVjdGlvblNldDogdGhpcy5wYXJzZVNlbGVjdGlvblNldCgpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBPcGVyYXRpb25UeXBlIDogb25lIG9mIHF1ZXJ5IG11dGF0aW9uIHN1YnNjcmlwdGlvblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZU9wZXJhdGlvblR5cGUgPSBmdW5jdGlvbiBwYXJzZU9wZXJhdGlvblR5cGUoKSB7XG4gICAgdmFyIG9wZXJhdGlvblRva2VuID0gdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuTkFNRSk7XG5cbiAgICBzd2l0Y2ggKG9wZXJhdGlvblRva2VuLnZhbHVlKSB7XG4gICAgICBjYXNlICdxdWVyeSc6XG4gICAgICAgIHJldHVybiAncXVlcnknO1xuXG4gICAgICBjYXNlICdtdXRhdGlvbic6XG4gICAgICAgIHJldHVybiAnbXV0YXRpb24nO1xuXG4gICAgICBjYXNlICdzdWJzY3JpcHRpb24nOlxuICAgICAgICByZXR1cm4gJ3N1YnNjcmlwdGlvbic7XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKG9wZXJhdGlvblRva2VuKTtcbiAgfVxuICAvKipcbiAgICogVmFyaWFibGVEZWZpbml0aW9ucyA6ICggVmFyaWFibGVEZWZpbml0aW9uKyApXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVmFyaWFibGVEZWZpbml0aW9ucyA9IGZ1bmN0aW9uIHBhcnNlVmFyaWFibGVEZWZpbml0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLlBBUkVOX0wsIHRoaXMucGFyc2VWYXJpYWJsZURlZmluaXRpb24sIFRva2VuS2luZC5QQVJFTl9SKTtcbiAgfVxuICAvKipcbiAgICogVmFyaWFibGVEZWZpbml0aW9uIDogVmFyaWFibGUgOiBUeXBlIERlZmF1bHRWYWx1ZT8gRGlyZWN0aXZlc1tDb25zdF0/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVmFyaWFibGVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VWYXJpYWJsZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuVkFSSUFCTEVfREVGSU5JVElPTixcbiAgICAgIHZhcmlhYmxlOiB0aGlzLnBhcnNlVmFyaWFibGUoKSxcbiAgICAgIHR5cGU6ICh0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTiksIHRoaXMucGFyc2VUeXBlUmVmZXJlbmNlKCkpLFxuICAgICAgZGVmYXVsdFZhbHVlOiB0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkVRVUFMUykgPyB0aGlzLnBhcnNlVmFsdWVMaXRlcmFsKHRydWUpIDogdW5kZWZpbmVkLFxuICAgICAgZGlyZWN0aXZlczogdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFZhcmlhYmxlIDogJCBOYW1lXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVmFyaWFibGUgPSBmdW5jdGlvbiBwYXJzZVZhcmlhYmxlKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkRPTExBUik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuVkFSSUFCTEUsXG4gICAgICBuYW1lOiB0aGlzLnBhcnNlTmFtZSgpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBTZWxlY3Rpb25TZXQgOiB7IFNlbGVjdGlvbisgfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNlbGVjdGlvblNldCA9IGZ1bmN0aW9uIHBhcnNlU2VsZWN0aW9uU2V0KCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlNFTEVDVElPTl9TRVQsXG4gICAgICBzZWxlY3Rpb25zOiB0aGlzLm1hbnkoVG9rZW5LaW5kLkJSQUNFX0wsIHRoaXMucGFyc2VTZWxlY3Rpb24sIFRva2VuS2luZC5CUkFDRV9SKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogU2VsZWN0aW9uIDpcbiAgICogICAtIEZpZWxkXG4gICAqICAgLSBGcmFnbWVudFNwcmVhZFxuICAgKiAgIC0gSW5saW5lRnJhZ21lbnRcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VTZWxlY3Rpb24gPSBmdW5jdGlvbiBwYXJzZVNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wZWVrKFRva2VuS2luZC5TUFJFQUQpID8gdGhpcy5wYXJzZUZyYWdtZW50KCkgOiB0aGlzLnBhcnNlRmllbGQoKTtcbiAgfVxuICAvKipcbiAgICogRmllbGQgOiBBbGlhcz8gTmFtZSBBcmd1bWVudHM/IERpcmVjdGl2ZXM/IFNlbGVjdGlvblNldD9cbiAgICpcbiAgICogQWxpYXMgOiBOYW1lIDpcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VGaWVsZCA9IGZ1bmN0aW9uIHBhcnNlRmllbGQoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIG5hbWVPckFsaWFzID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgYWxpYXM7XG4gICAgdmFyIG5hbWU7XG5cbiAgICBpZiAodGhpcy5leHBlY3RPcHRpb25hbFRva2VuKFRva2VuS2luZC5DT0xPTikpIHtcbiAgICAgIGFsaWFzID0gbmFtZU9yQWxpYXM7XG4gICAgICBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWVPckFsaWFzO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLkZJRUxELFxuICAgICAgYWxpYXM6IGFsaWFzLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGFyZ3VtZW50czogdGhpcy5wYXJzZUFyZ3VtZW50cyhmYWxzZSksXG4gICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyhmYWxzZSksXG4gICAgICBzZWxlY3Rpb25TZXQ6IHRoaXMucGVlayhUb2tlbktpbmQuQlJBQ0VfTCkgPyB0aGlzLnBhcnNlU2VsZWN0aW9uU2V0KCkgOiB1bmRlZmluZWQsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEFyZ3VtZW50c1tDb25zdF0gOiAoIEFyZ3VtZW50Wz9Db25zdF0rIClcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VBcmd1bWVudHMgPSBmdW5jdGlvbiBwYXJzZUFyZ3VtZW50cyhpc0NvbnN0KSB7XG4gICAgdmFyIGl0ZW0gPSBpc0NvbnN0ID8gdGhpcy5wYXJzZUNvbnN0QXJndW1lbnQgOiB0aGlzLnBhcnNlQXJndW1lbnQ7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWxNYW55KFRva2VuS2luZC5QQVJFTl9MLCBpdGVtLCBUb2tlbktpbmQuUEFSRU5fUik7XG4gIH1cbiAgLyoqXG4gICAqIEFyZ3VtZW50W0NvbnN0XSA6IE5hbWUgOiBWYWx1ZVs/Q29uc3RdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlQXJndW1lbnQgPSBmdW5jdGlvbiBwYXJzZUFyZ3VtZW50KCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuQVJHVU1FTlQsXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgdmFsdWU6IHRoaXMucGFyc2VWYWx1ZUxpdGVyYWwoZmFsc2UpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5wYXJzZUNvbnN0QXJndW1lbnQgPSBmdW5jdGlvbiBwYXJzZUNvbnN0QXJndW1lbnQoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuQVJHVU1FTlQsXG4gICAgICBuYW1lOiB0aGlzLnBhcnNlTmFtZSgpLFxuICAgICAgdmFsdWU6ICh0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTiksIHRoaXMucGFyc2VWYWx1ZUxpdGVyYWwodHJ1ZSkpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIEZyYWdtZW50cyBzZWN0aW9uLlxuXG4gIC8qKlxuICAgKiBDb3JyZXNwb25kcyB0byBib3RoIEZyYWdtZW50U3ByZWFkIGFuZCBJbmxpbmVGcmFnbWVudCBpbiB0aGUgc3BlYy5cbiAgICpcbiAgICogRnJhZ21lbnRTcHJlYWQgOiAuLi4gRnJhZ21lbnROYW1lIERpcmVjdGl2ZXM/XG4gICAqXG4gICAqIElubGluZUZyYWdtZW50IDogLi4uIFR5cGVDb25kaXRpb24/IERpcmVjdGl2ZXM/IFNlbGVjdGlvblNldFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUZyYWdtZW50ID0gZnVuY3Rpb24gcGFyc2VGcmFnbWVudCgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5TUFJFQUQpO1xuICAgIHZhciBoYXNUeXBlQ29uZGl0aW9uID0gdGhpcy5leHBlY3RPcHRpb25hbEtleXdvcmQoJ29uJyk7XG5cbiAgICBpZiAoIWhhc1R5cGVDb25kaXRpb24gJiYgdGhpcy5wZWVrKFRva2VuS2luZC5OQU1FKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZDogS2luZC5GUkFHTUVOVF9TUFJFQUQsXG4gICAgICAgIG5hbWU6IHRoaXMucGFyc2VGcmFnbWVudE5hbWUoKSxcbiAgICAgICAgZGlyZWN0aXZlczogdGhpcy5wYXJzZURpcmVjdGl2ZXMoZmFsc2UpLFxuICAgICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5JTkxJTkVfRlJBR01FTlQsXG4gICAgICB0eXBlQ29uZGl0aW9uOiBoYXNUeXBlQ29uZGl0aW9uID8gdGhpcy5wYXJzZU5hbWVkVHlwZSgpIDogdW5kZWZpbmVkLFxuICAgICAgZGlyZWN0aXZlczogdGhpcy5wYXJzZURpcmVjdGl2ZXMoZmFsc2UpLFxuICAgICAgc2VsZWN0aW9uU2V0OiB0aGlzLnBhcnNlU2VsZWN0aW9uU2V0KCksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEZyYWdtZW50RGVmaW5pdGlvbiA6XG4gICAqICAgLSBmcmFnbWVudCBGcmFnbWVudE5hbWUgb24gVHlwZUNvbmRpdGlvbiBEaXJlY3RpdmVzPyBTZWxlY3Rpb25TZXRcbiAgICpcbiAgICogVHlwZUNvbmRpdGlvbiA6IE5hbWVkVHlwZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUZyYWdtZW50RGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRnJhZ21lbnREZWZpbml0aW9uKCkge1xuICAgIHZhciBfdGhpcyRfb3B0aW9ucztcblxuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZnJhZ21lbnQnKTsgLy8gRXhwZXJpbWVudGFsIHN1cHBvcnQgZm9yIGRlZmluaW5nIHZhcmlhYmxlcyB3aXRoaW4gZnJhZ21lbnRzIGNoYW5nZXNcbiAgICAvLyB0aGUgZ3JhbW1hciBvZiBGcmFnbWVudERlZmluaXRpb246XG4gICAgLy8gICAtIGZyYWdtZW50IEZyYWdtZW50TmFtZSBWYXJpYWJsZURlZmluaXRpb25zPyBvbiBUeXBlQ29uZGl0aW9uIERpcmVjdGl2ZXM/IFNlbGVjdGlvblNldFxuXG4gICAgaWYgKCgoX3RoaXMkX29wdGlvbnMgPSB0aGlzLl9vcHRpb25zKSA9PT0gbnVsbCB8fCBfdGhpcyRfb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkX29wdGlvbnMuZXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiBLaW5kLkZSQUdNRU5UX0RFRklOSVRJT04sXG4gICAgICAgIG5hbWU6IHRoaXMucGFyc2VGcmFnbWVudE5hbWUoKSxcbiAgICAgICAgdmFyaWFibGVEZWZpbml0aW9uczogdGhpcy5wYXJzZVZhcmlhYmxlRGVmaW5pdGlvbnMoKSxcbiAgICAgICAgdHlwZUNvbmRpdGlvbjogKHRoaXMuZXhwZWN0S2V5d29yZCgnb24nKSwgdGhpcy5wYXJzZU5hbWVkVHlwZSgpKSxcbiAgICAgICAgZGlyZWN0aXZlczogdGhpcy5wYXJzZURpcmVjdGl2ZXMoZmFsc2UpLFxuICAgICAgICBzZWxlY3Rpb25TZXQ6IHRoaXMucGFyc2VTZWxlY3Rpb25TZXQoKSxcbiAgICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRlJBR01FTlRfREVGSU5JVElPTixcbiAgICAgIG5hbWU6IHRoaXMucGFyc2VGcmFnbWVudE5hbWUoKSxcbiAgICAgIHR5cGVDb25kaXRpb246ICh0aGlzLmV4cGVjdEtleXdvcmQoJ29uJyksIHRoaXMucGFyc2VOYW1lZFR5cGUoKSksXG4gICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyhmYWxzZSksXG4gICAgICBzZWxlY3Rpb25TZXQ6IHRoaXMucGFyc2VTZWxlY3Rpb25TZXQoKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRnJhZ21lbnROYW1lIDogTmFtZSBidXQgbm90IGBvbmBcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VGcmFnbWVudE5hbWUgPSBmdW5jdGlvbiBwYXJzZUZyYWdtZW50TmFtZSgpIHtcbiAgICBpZiAodGhpcy5fbGV4ZXIudG9rZW4udmFsdWUgPT09ICdvbicpIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnBhcnNlTmFtZSgpO1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIFZhbHVlcyBzZWN0aW9uLlxuXG4gIC8qKlxuICAgKiBWYWx1ZVtDb25zdF0gOlxuICAgKiAgIC0gW35Db25zdF0gVmFyaWFibGVcbiAgICogICAtIEludFZhbHVlXG4gICAqICAgLSBGbG9hdFZhbHVlXG4gICAqICAgLSBTdHJpbmdWYWx1ZVxuICAgKiAgIC0gQm9vbGVhblZhbHVlXG4gICAqICAgLSBOdWxsVmFsdWVcbiAgICogICAtIEVudW1WYWx1ZVxuICAgKiAgIC0gTGlzdFZhbHVlWz9Db25zdF1cbiAgICogICAtIE9iamVjdFZhbHVlWz9Db25zdF1cbiAgICpcbiAgICogQm9vbGVhblZhbHVlIDogb25lIG9mIGB0cnVlYCBgZmFsc2VgXG4gICAqXG4gICAqIE51bGxWYWx1ZSA6IGBudWxsYFxuICAgKlxuICAgKiBFbnVtVmFsdWUgOiBOYW1lIGJ1dCBub3QgYHRydWVgLCBgZmFsc2VgIG9yIGBudWxsYFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVZhbHVlTGl0ZXJhbCA9IGZ1bmN0aW9uIHBhcnNlVmFsdWVMaXRlcmFsKGlzQ29uc3QpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIHN3aXRjaCAodG9rZW4ua2luZCkge1xuICAgICAgY2FzZSBUb2tlbktpbmQuQlJBQ0tFVF9MOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUxpc3QoaXNDb25zdCk7XG5cbiAgICAgIGNhc2UgVG9rZW5LaW5kLkJSQUNFX0w6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlT2JqZWN0KGlzQ29uc3QpO1xuXG4gICAgICBjYXNlIFRva2VuS2luZC5JTlQ6XG4gICAgICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtpbmQ6IEtpbmQuSU5ULFxuICAgICAgICAgIHZhbHVlOiB0b2tlbi52YWx1ZSxcbiAgICAgICAgICBsb2M6IHRoaXMubG9jKHRva2VuKVxuICAgICAgICB9O1xuXG4gICAgICBjYXNlIFRva2VuS2luZC5GTE9BVDpcbiAgICAgICAgdGhpcy5fbGV4ZXIuYWR2YW5jZSgpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2luZDogS2luZC5GTE9BVCxcbiAgICAgICAgICB2YWx1ZTogdG9rZW4udmFsdWUsXG4gICAgICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICAgICAgfTtcblxuICAgICAgY2FzZSBUb2tlbktpbmQuU1RSSU5HOlxuICAgICAgY2FzZSBUb2tlbktpbmQuQkxPQ0tfU1RSSU5HOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVN0cmluZ0xpdGVyYWwoKTtcblxuICAgICAgY2FzZSBUb2tlbktpbmQuTkFNRTpcbiAgICAgICAgdGhpcy5fbGV4ZXIuYWR2YW5jZSgpO1xuXG4gICAgICAgIHN3aXRjaCAodG9rZW4udmFsdWUpIHtcbiAgICAgICAgICBjYXNlICd0cnVlJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGtpbmQ6IEtpbmQuQk9PTEVBTixcbiAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgY2FzZSAnZmFsc2UnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAga2luZDogS2luZC5CT09MRUFOLFxuICAgICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgY2FzZSAnbnVsbCc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBraW5kOiBLaW5kLk5VTEwsXG4gICAgICAgICAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGtpbmQ6IEtpbmQuRU5VTSxcbiAgICAgICAgICAgICAgdmFsdWU6IHRva2VuLnZhbHVlLFxuICAgICAgICAgICAgICBsb2M6IHRoaXMubG9jKHRva2VuKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFRva2VuS2luZC5ET0xMQVI6XG4gICAgICAgIGlmICghaXNDb25zdCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVmFyaWFibGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICB9O1xuXG4gIF9wcm90by5wYXJzZVN0cmluZ0xpdGVyYWwgPSBmdW5jdGlvbiBwYXJzZVN0cmluZ0xpdGVyYWwoKSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5TVFJJTkcsXG4gICAgICB2YWx1ZTogdG9rZW4udmFsdWUsXG4gICAgICBibG9jazogdG9rZW4ua2luZCA9PT0gVG9rZW5LaW5kLkJMT0NLX1NUUklORyxcbiAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogTGlzdFZhbHVlW0NvbnN0XSA6XG4gICAqICAgLSBbIF1cbiAgICogICAtIFsgVmFsdWVbP0NvbnN0XSsgXVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUxpc3QgPSBmdW5jdGlvbiBwYXJzZUxpc3QoaXNDb25zdCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIHZhciBpdGVtID0gZnVuY3Rpb24gaXRlbSgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wYXJzZVZhbHVlTGl0ZXJhbChpc0NvbnN0KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuTElTVCxcbiAgICAgIHZhbHVlczogdGhpcy5hbnkoVG9rZW5LaW5kLkJSQUNLRVRfTCwgaXRlbSwgVG9rZW5LaW5kLkJSQUNLRVRfUiksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdFZhbHVlW0NvbnN0XSA6XG4gICAqICAgLSB7IH1cbiAgICogICAtIHsgT2JqZWN0RmllbGRbP0NvbnN0XSsgfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZU9iamVjdCA9IGZ1bmN0aW9uIHBhcnNlT2JqZWN0KGlzQ29uc3QpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgdmFyIGl0ZW0gPSBmdW5jdGlvbiBpdGVtKCkge1xuICAgICAgcmV0dXJuIF90aGlzMi5wYXJzZU9iamVjdEZpZWxkKGlzQ29uc3QpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5PQkpFQ1QsXG4gICAgICBmaWVsZHM6IHRoaXMuYW55KFRva2VuS2luZC5CUkFDRV9MLCBpdGVtLCBUb2tlbktpbmQuQlJBQ0VfUiksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdEZpZWxkW0NvbnN0XSA6IE5hbWUgOiBWYWx1ZVs/Q29uc3RdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT2JqZWN0RmllbGQgPSBmdW5jdGlvbiBwYXJzZU9iamVjdEZpZWxkKGlzQ29uc3QpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuQ09MT04pO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLk9CSkVDVF9GSUVMRCxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB2YWx1ZTogdGhpcy5wYXJzZVZhbHVlTGl0ZXJhbChpc0NvbnN0KSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfSAvLyBJbXBsZW1lbnRzIHRoZSBwYXJzaW5nIHJ1bGVzIGluIHRoZSBEaXJlY3RpdmVzIHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIERpcmVjdGl2ZXNbQ29uc3RdIDogRGlyZWN0aXZlWz9Db25zdF0rXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGlyZWN0aXZlcyA9IGZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlcyhpc0NvbnN0KSB7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSBbXTtcblxuICAgIHdoaWxlICh0aGlzLnBlZWsoVG9rZW5LaW5kLkFUKSkge1xuICAgICAgZGlyZWN0aXZlcy5wdXNoKHRoaXMucGFyc2VEaXJlY3RpdmUoaXNDb25zdCkpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RpdmVzO1xuICB9XG4gIC8qKlxuICAgKiBEaXJlY3RpdmVbQ29uc3RdIDogQCBOYW1lIEFyZ3VtZW50c1s/Q29uc3RdP1xuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZURpcmVjdGl2ZSA9IGZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlKGlzQ29uc3QpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5BVCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRElSRUNUSVZFLFxuICAgICAgbmFtZTogdGhpcy5wYXJzZU5hbWUoKSxcbiAgICAgIGFyZ3VtZW50czogdGhpcy5wYXJzZUFyZ3VtZW50cyhpc0NvbnN0KSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfSAvLyBJbXBsZW1lbnRzIHRoZSBwYXJzaW5nIHJ1bGVzIGluIHRoZSBUeXBlcyBzZWN0aW9uLlxuXG4gIC8qKlxuICAgKiBUeXBlIDpcbiAgICogICAtIE5hbWVkVHlwZVxuICAgKiAgIC0gTGlzdFR5cGVcbiAgICogICAtIE5vbk51bGxUeXBlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVHlwZVJlZmVyZW5jZSA9IGZ1bmN0aW9uIHBhcnNlVHlwZVJlZmVyZW5jZSgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgdHlwZTtcblxuICAgIGlmICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkJSQUNLRVRfTCkpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnBhcnNlVHlwZVJlZmVyZW5jZSgpO1xuICAgICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuQlJBQ0tFVF9SKTtcbiAgICAgIHR5cGUgPSB7XG4gICAgICAgIGtpbmQ6IEtpbmQuTElTVF9UWVBFLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZSA9IHRoaXMucGFyc2VOYW1lZFR5cGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5leHBlY3RPcHRpb25hbFRva2VuKFRva2VuS2luZC5CQU5HKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZDogS2luZC5OT05fTlVMTF9UWVBFLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuICAvKipcbiAgICogTmFtZWRUeXBlIDogTmFtZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZU5hbWVkVHlwZSA9IGZ1bmN0aW9uIHBhcnNlTmFtZWRUeXBlKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLk5BTUVEX1RZUEUsXG4gICAgICBuYW1lOiB0aGlzLnBhcnNlTmFtZSgpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIFR5cGUgRGVmaW5pdGlvbiBzZWN0aW9uLlxuXG4gIC8qKlxuICAgKiBUeXBlU3lzdGVtRGVmaW5pdGlvbiA6XG4gICAqICAgLSBTY2hlbWFEZWZpbml0aW9uXG4gICAqICAgLSBUeXBlRGVmaW5pdGlvblxuICAgKiAgIC0gRGlyZWN0aXZlRGVmaW5pdGlvblxuICAgKlxuICAgKiBUeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBTY2FsYXJUeXBlRGVmaW5pdGlvblxuICAgKiAgIC0gT2JqZWN0VHlwZURlZmluaXRpb25cbiAgICogICAtIEludGVyZmFjZVR5cGVEZWZpbml0aW9uXG4gICAqICAgLSBVbmlvblR5cGVEZWZpbml0aW9uXG4gICAqICAgLSBFbnVtVHlwZURlZmluaXRpb25cbiAgICogICAtIElucHV0T2JqZWN0VHlwZURlZmluaXRpb25cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VUeXBlU3lzdGVtRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlVHlwZVN5c3RlbURlZmluaXRpb24oKSB7XG4gICAgLy8gTWFueSBkZWZpbml0aW9ucyBiZWdpbiB3aXRoIGEgZGVzY3JpcHRpb24gYW5kIHJlcXVpcmUgYSBsb29rYWhlYWQuXG4gICAgdmFyIGtleXdvcmRUb2tlbiA9IHRoaXMucGVla0Rlc2NyaXB0aW9uKCkgPyB0aGlzLl9sZXhlci5sb29rYWhlYWQoKSA6IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgaWYgKGtleXdvcmRUb2tlbi5raW5kID09PSBUb2tlbktpbmQuTkFNRSkge1xuICAgICAgc3dpdGNoIChrZXl3b3JkVG9rZW4udmFsdWUpIHtcbiAgICAgICAgY2FzZSAnc2NoZW1hJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVNjaGVtYURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdzY2FsYXInOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlU2NhbGFyVHlwZURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICd0eXBlJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZU9iamVjdFR5cGVEZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnaW50ZXJmYWNlJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUludGVyZmFjZVR5cGVEZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAndW5pb24nOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVW5pb25UeXBlRGVmaW5pdGlvbigpO1xuXG4gICAgICAgIGNhc2UgJ2VudW0nOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRW51bVR5cGVEZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvbigpO1xuXG4gICAgICAgIGNhc2UgJ2RpcmVjdGl2ZSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VEaXJlY3RpdmVEZWZpbml0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKGtleXdvcmRUb2tlbik7XG4gIH07XG5cbiAgX3Byb3RvLnBlZWtEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uIHBlZWtEZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wZWVrKFRva2VuS2luZC5TVFJJTkcpIHx8IHRoaXMucGVlayhUb2tlbktpbmQuQkxPQ0tfU1RSSU5HKTtcbiAgfVxuICAvKipcbiAgICogRGVzY3JpcHRpb24gOiBTdHJpbmdWYWx1ZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZURlc2NyaXB0aW9uID0gZnVuY3Rpb24gcGFyc2VEZXNjcmlwdGlvbigpIHtcbiAgICBpZiAodGhpcy5wZWVrRGVzY3JpcHRpb24oKSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VTdHJpbmdMaXRlcmFsKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTY2hlbWFEZWZpbml0aW9uIDogRGVzY3JpcHRpb24/IHNjaGVtYSBEaXJlY3RpdmVzW0NvbnN0XT8geyBPcGVyYXRpb25UeXBlRGVmaW5pdGlvbisgfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNjaGVtYURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZVNjaGVtYURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdzY2hlbWEnKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciBvcGVyYXRpb25UeXBlcyA9IHRoaXMubWFueShUb2tlbktpbmQuQlJBQ0VfTCwgdGhpcy5wYXJzZU9wZXJhdGlvblR5cGVEZWZpbml0aW9uLCBUb2tlbktpbmQuQlJBQ0VfUik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuU0NIRU1BX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgb3BlcmF0aW9uVHlwZXM6IG9wZXJhdGlvblR5cGVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBPcGVyYXRpb25UeXBlRGVmaW5pdGlvbiA6IE9wZXJhdGlvblR5cGUgOiBOYW1lZFR5cGVcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VPcGVyYXRpb25UeXBlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlT3BlcmF0aW9uVHlwZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIG9wZXJhdGlvbiA9IHRoaXMucGFyc2VPcGVyYXRpb25UeXBlKCk7XG4gICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuQ09MT04pO1xuICAgIHZhciB0eXBlID0gdGhpcy5wYXJzZU5hbWVkVHlwZSgpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLk9QRVJBVElPTl9UWVBFX0RFRklOSVRJT04sXG4gICAgICBvcGVyYXRpb246IG9wZXJhdGlvbixcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFNjYWxhclR5cGVEZWZpbml0aW9uIDogRGVzY3JpcHRpb24/IHNjYWxhciBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdP1xuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNjYWxhclR5cGVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VTY2FsYXJUeXBlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ3NjYWxhcicpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlNDQUxBUl9UWVBFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogT2JqZWN0VHlwZURlZmluaXRpb24gOlxuICAgKiAgIERlc2NyaXB0aW9uP1xuICAgKiAgIHR5cGUgTmFtZSBJbXBsZW1lbnRzSW50ZXJmYWNlcz8gRGlyZWN0aXZlc1tDb25zdF0/IEZpZWxkc0RlZmluaXRpb24/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT2JqZWN0VHlwZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZU9iamVjdFR5cGVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgndHlwZScpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgaW50ZXJmYWNlcyA9IHRoaXMucGFyc2VJbXBsZW1lbnRzSW50ZXJmYWNlcygpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIGZpZWxkcyA9IHRoaXMucGFyc2VGaWVsZHNEZWZpbml0aW9uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuT0JKRUNUX1RZUEVfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBpbnRlcmZhY2VzOiBpbnRlcmZhY2VzLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGZpZWxkczogZmllbGRzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBJbXBsZW1lbnRzSW50ZXJmYWNlcyA6XG4gICAqICAgLSBpbXBsZW1lbnRzIGAmYD8gTmFtZWRUeXBlXG4gICAqICAgLSBJbXBsZW1lbnRzSW50ZXJmYWNlcyAmIE5hbWVkVHlwZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzID0gZnVuY3Rpb24gcGFyc2VJbXBsZW1lbnRzSW50ZXJmYWNlcygpIHtcbiAgICB2YXIgX3RoaXMkX29wdGlvbnMyO1xuXG4gICAgaWYgKCF0aGlzLmV4cGVjdE9wdGlvbmFsS2V5d29yZCgnaW1wbGVtZW50cycpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgaWYgKCgoX3RoaXMkX29wdGlvbnMyID0gdGhpcy5fb3B0aW9ucykgPT09IG51bGwgfHwgX3RoaXMkX29wdGlvbnMyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRfb3B0aW9uczIuYWxsb3dMZWdhY3lTRExJbXBsZW1lbnRzSW50ZXJmYWNlcykgPT09IHRydWUpIHtcbiAgICAgIHZhciB0eXBlcyA9IFtdOyAvLyBPcHRpb25hbCBsZWFkaW5nIGFtcGVyc2FuZFxuXG4gICAgICB0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkFNUCk7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgdHlwZXMucHVzaCh0aGlzLnBhcnNlTmFtZWRUeXBlKCkpO1xuICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3RPcHRpb25hbFRva2VuKFRva2VuS2luZC5BTVApIHx8IHRoaXMucGVlayhUb2tlbktpbmQuTkFNRSkpO1xuXG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGVsaW1pdGVkTWFueShUb2tlbktpbmQuQU1QLCB0aGlzLnBhcnNlTmFtZWRUeXBlKTtcbiAgfVxuICAvKipcbiAgICogRmllbGRzRGVmaW5pdGlvbiA6IHsgRmllbGREZWZpbml0aW9uKyB9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRmllbGRzRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRmllbGRzRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgX3RoaXMkX29wdGlvbnMzO1xuXG4gICAgLy8gTGVnYWN5IHN1cHBvcnQgZm9yIHRoZSBTREw/XG4gICAgaWYgKCgoX3RoaXMkX29wdGlvbnMzID0gdGhpcy5fb3B0aW9ucykgPT09IG51bGwgfHwgX3RoaXMkX29wdGlvbnMzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRfb3B0aW9uczMuYWxsb3dMZWdhY3lTRExFbXB0eUZpZWxkcykgPT09IHRydWUgJiYgdGhpcy5wZWVrKFRva2VuS2luZC5CUkFDRV9MKSAmJiB0aGlzLl9sZXhlci5sb29rYWhlYWQoKS5raW5kID09PSBUb2tlbktpbmQuQlJBQ0VfUikge1xuICAgICAgdGhpcy5fbGV4ZXIuYWR2YW5jZSgpO1xuXG4gICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLkJSQUNFX0wsIHRoaXMucGFyc2VGaWVsZERlZmluaXRpb24sIFRva2VuS2luZC5CUkFDRV9SKTtcbiAgfVxuICAvKipcbiAgICogRmllbGREZWZpbml0aW9uIDpcbiAgICogICAtIERlc2NyaXB0aW9uPyBOYW1lIEFyZ3VtZW50c0RlZmluaXRpb24/IDogVHlwZSBEaXJlY3RpdmVzW0NvbnN0XT9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VGaWVsZERlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUZpZWxkRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGFyZ3MgPSB0aGlzLnBhcnNlQXJndW1lbnREZWZzKCk7XG4gICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuQ09MT04pO1xuICAgIHZhciB0eXBlID0gdGhpcy5wYXJzZVR5cGVSZWZlcmVuY2UoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLkZJRUxEX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgYXJndW1lbnRzOiBhcmdzLFxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEFyZ3VtZW50c0RlZmluaXRpb24gOiAoIElucHV0VmFsdWVEZWZpbml0aW9uKyApXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlQXJndW1lbnREZWZzID0gZnVuY3Rpb24gcGFyc2VBcmd1bWVudERlZnMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWxNYW55KFRva2VuS2luZC5QQVJFTl9MLCB0aGlzLnBhcnNlSW5wdXRWYWx1ZURlZiwgVG9rZW5LaW5kLlBBUkVOX1IpO1xuICB9XG4gIC8qKlxuICAgKiBJbnB1dFZhbHVlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBEZXNjcmlwdGlvbj8gTmFtZSA6IFR5cGUgRGVmYXVsdFZhbHVlPyBEaXJlY3RpdmVzW0NvbnN0XT9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnB1dFZhbHVlRGVmID0gZnVuY3Rpb24gcGFyc2VJbnB1dFZhbHVlRGVmKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTik7XG4gICAgdmFyIHR5cGUgPSB0aGlzLnBhcnNlVHlwZVJlZmVyZW5jZSgpO1xuICAgIHZhciBkZWZhdWx0VmFsdWU7XG5cbiAgICBpZiAodGhpcy5leHBlY3RPcHRpb25hbFRva2VuKFRva2VuS2luZC5FUVVBTFMpKSB7XG4gICAgICBkZWZhdWx0VmFsdWUgPSB0aGlzLnBhcnNlVmFsdWVMaXRlcmFsKHRydWUpO1xuICAgIH1cblxuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuSU5QVVRfVkFMVUVfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBJbnRlcmZhY2VUeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBEZXNjcmlwdGlvbj8gaW50ZXJmYWNlIE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IEZpZWxkc0RlZmluaXRpb24/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlSW50ZXJmYWNlVHlwZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUludGVyZmFjZVR5cGVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnaW50ZXJmYWNlJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBpbnRlcmZhY2VzID0gdGhpcy5wYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUZpZWxkc0RlZmluaXRpb24oKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5JTlRFUkZBQ0VfVFlQRV9ERUZJTklUSU9OLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGludGVyZmFjZXM6IGludGVyZmFjZXMsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFVuaW9uVHlwZURlZmluaXRpb24gOlxuICAgKiAgIC0gRGVzY3JpcHRpb24/IHVuaW9uIE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IFVuaW9uTWVtYmVyVHlwZXM/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVW5pb25UeXBlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlVW5pb25UeXBlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ3VuaW9uJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIHR5cGVzID0gdGhpcy5wYXJzZVVuaW9uTWVtYmVyVHlwZXMoKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5VTklPTl9UWVBFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIHR5cGVzOiB0eXBlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogVW5pb25NZW1iZXJUeXBlcyA6XG4gICAqICAgLSA9IGB8YD8gTmFtZWRUeXBlXG4gICAqICAgLSBVbmlvbk1lbWJlclR5cGVzIHwgTmFtZWRUeXBlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVW5pb25NZW1iZXJUeXBlcyA9IGZ1bmN0aW9uIHBhcnNlVW5pb25NZW1iZXJUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5leHBlY3RPcHRpb25hbFRva2VuKFRva2VuS2luZC5FUVVBTFMpID8gdGhpcy5kZWxpbWl0ZWRNYW55KFRva2VuS2luZC5QSVBFLCB0aGlzLnBhcnNlTmFtZWRUeXBlKSA6IFtdO1xuICB9XG4gIC8qKlxuICAgKiBFbnVtVHlwZURlZmluaXRpb24gOlxuICAgKiAgIC0gRGVzY3JpcHRpb24/IGVudW0gTmFtZSBEaXJlY3RpdmVzW0NvbnN0XT8gRW51bVZhbHVlc0RlZmluaXRpb24/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRW51bVR5cGVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VFbnVtVHlwZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdlbnVtJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMucGFyc2VFbnVtVmFsdWVzRGVmaW5pdGlvbigpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLkVOVU1fVFlQRV9ERUZJTklUSU9OLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRW51bVZhbHVlc0RlZmluaXRpb24gOiB7IEVudW1WYWx1ZURlZmluaXRpb24rIH1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VFbnVtVmFsdWVzRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRW51bVZhbHVlc0RlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWxNYW55KFRva2VuS2luZC5CUkFDRV9MLCB0aGlzLnBhcnNlRW51bVZhbHVlRGVmaW5pdGlvbiwgVG9rZW5LaW5kLkJSQUNFX1IpO1xuICB9XG4gIC8qKlxuICAgKiBFbnVtVmFsdWVEZWZpbml0aW9uIDogRGVzY3JpcHRpb24/IEVudW1WYWx1ZSBEaXJlY3RpdmVzW0NvbnN0XT9cbiAgICpcbiAgICogRW51bVZhbHVlIDogTmFtZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUVudW1WYWx1ZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUVudW1WYWx1ZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRU5VTV9WQUxVRV9ERUZJTklUSU9OLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIElucHV0T2JqZWN0VHlwZURlZmluaXRpb24gOlxuICAgKiAgIC0gRGVzY3JpcHRpb24/IGlucHV0IE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IElucHV0RmllbGRzRGVmaW5pdGlvbj9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnaW5wdXQnKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUlucHV0RmllbGRzRGVmaW5pdGlvbigpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLklOUFVUX09CSkVDVF9UWVBFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGZpZWxkczogZmllbGRzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBJbnB1dEZpZWxkc0RlZmluaXRpb24gOiB7IElucHV0VmFsdWVEZWZpbml0aW9uKyB9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlSW5wdXRGaWVsZHNEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VJbnB1dEZpZWxkc0RlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWxNYW55KFRva2VuS2luZC5CUkFDRV9MLCB0aGlzLnBhcnNlSW5wdXRWYWx1ZURlZiwgVG9rZW5LaW5kLkJSQUNFX1IpO1xuICB9XG4gIC8qKlxuICAgKiBUeXBlU3lzdGVtRXh0ZW5zaW9uIDpcbiAgICogICAtIFNjaGVtYUV4dGVuc2lvblxuICAgKiAgIC0gVHlwZUV4dGVuc2lvblxuICAgKlxuICAgKiBUeXBlRXh0ZW5zaW9uIDpcbiAgICogICAtIFNjYWxhclR5cGVFeHRlbnNpb25cbiAgICogICAtIE9iamVjdFR5cGVFeHRlbnNpb25cbiAgICogICAtIEludGVyZmFjZVR5cGVFeHRlbnNpb25cbiAgICogICAtIFVuaW9uVHlwZUV4dGVuc2lvblxuICAgKiAgIC0gRW51bVR5cGVFeHRlbnNpb25cbiAgICogICAtIElucHV0T2JqZWN0VHlwZURlZmluaXRpb25cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VUeXBlU3lzdGVtRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VUeXBlU3lzdGVtRXh0ZW5zaW9uKCkge1xuICAgIHZhciBrZXl3b3JkVG9rZW4gPSB0aGlzLl9sZXhlci5sb29rYWhlYWQoKTtcblxuICAgIGlmIChrZXl3b3JkVG9rZW4ua2luZCA9PT0gVG9rZW5LaW5kLk5BTUUpIHtcbiAgICAgIHN3aXRjaCAoa2V5d29yZFRva2VuLnZhbHVlKSB7XG4gICAgICAgIGNhc2UgJ3NjaGVtYSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VTY2hlbWFFeHRlbnNpb24oKTtcblxuICAgICAgICBjYXNlICdzY2FsYXInOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlU2NhbGFyVHlwZUV4dGVuc2lvbigpO1xuXG4gICAgICAgIGNhc2UgJ3R5cGUnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlT2JqZWN0VHlwZUV4dGVuc2lvbigpO1xuXG4gICAgICAgIGNhc2UgJ2ludGVyZmFjZSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uKCk7XG5cbiAgICAgICAgY2FzZSAndW5pb24nOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVW5pb25UeXBlRXh0ZW5zaW9uKCk7XG5cbiAgICAgICAgY2FzZSAnZW51bSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFbnVtVHlwZUV4dGVuc2lvbigpO1xuXG4gICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUlucHV0T2JqZWN0VHlwZUV4dGVuc2lvbigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRocm93IHRoaXMudW5leHBlY3RlZChrZXl3b3JkVG9rZW4pO1xuICB9XG4gIC8qKlxuICAgKiBTY2hlbWFFeHRlbnNpb24gOlxuICAgKiAgLSBleHRlbmQgc2NoZW1hIERpcmVjdGl2ZXNbQ29uc3RdPyB7IE9wZXJhdGlvblR5cGVEZWZpbml0aW9uKyB9XG4gICAqICAtIGV4dGVuZCBzY2hlbWEgRGlyZWN0aXZlc1tDb25zdF1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VTY2hlbWFFeHRlbnNpb24gPSBmdW5jdGlvbiBwYXJzZVNjaGVtYUV4dGVuc2lvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2V4dGVuZCcpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnc2NoZW1hJyk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgb3BlcmF0aW9uVHlwZXMgPSB0aGlzLm9wdGlvbmFsTWFueShUb2tlbktpbmQuQlJBQ0VfTCwgdGhpcy5wYXJzZU9wZXJhdGlvblR5cGVEZWZpbml0aW9uLCBUb2tlbktpbmQuQlJBQ0VfUik7XG5cbiAgICBpZiAoZGlyZWN0aXZlcy5sZW5ndGggPT09IDAgJiYgb3BlcmF0aW9uVHlwZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5TQ0hFTUFfRVhURU5TSU9OLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIG9wZXJhdGlvblR5cGVzOiBvcGVyYXRpb25UeXBlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogU2NhbGFyVHlwZUV4dGVuc2lvbiA6XG4gICAqICAgLSBleHRlbmQgc2NhbGFyIE5hbWUgRGlyZWN0aXZlc1tDb25zdF1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VTY2FsYXJUeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VTY2FsYXJUeXBlRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdzY2FsYXInKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcblxuICAgIGlmIChkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuU0NBTEFSX1RZUEVfRVhURU5TSU9OLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdFR5cGVFeHRlbnNpb24gOlxuICAgKiAgLSBleHRlbmQgdHlwZSBOYW1lIEltcGxlbWVudHNJbnRlcmZhY2VzPyBEaXJlY3RpdmVzW0NvbnN0XT8gRmllbGRzRGVmaW5pdGlvblxuICAgKiAgLSBleHRlbmQgdHlwZSBOYW1lIEltcGxlbWVudHNJbnRlcmZhY2VzPyBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKiAgLSBleHRlbmQgdHlwZSBOYW1lIEltcGxlbWVudHNJbnRlcmZhY2VzXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT2JqZWN0VHlwZUV4dGVuc2lvbiA9IGZ1bmN0aW9uIHBhcnNlT2JqZWN0VHlwZUV4dGVuc2lvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2V4dGVuZCcpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgndHlwZScpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgaW50ZXJmYWNlcyA9IHRoaXMucGFyc2VJbXBsZW1lbnRzSW50ZXJmYWNlcygpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIGZpZWxkcyA9IHRoaXMucGFyc2VGaWVsZHNEZWZpbml0aW9uKCk7XG5cbiAgICBpZiAoaW50ZXJmYWNlcy5sZW5ndGggPT09IDAgJiYgZGlyZWN0aXZlcy5sZW5ndGggPT09IDAgJiYgZmllbGRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuT0JKRUNUX1RZUEVfRVhURU5TSU9OLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGludGVyZmFjZXM6IGludGVyZmFjZXMsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEludGVyZmFjZVR5cGVFeHRlbnNpb24gOlxuICAgKiAgLSBleHRlbmQgaW50ZXJmYWNlIE5hbWUgSW1wbGVtZW50c0ludGVyZmFjZXM/IERpcmVjdGl2ZXNbQ29uc3RdPyBGaWVsZHNEZWZpbml0aW9uXG4gICAqICAtIGV4dGVuZCBpbnRlcmZhY2UgTmFtZSBJbXBsZW1lbnRzSW50ZXJmYWNlcz8gRGlyZWN0aXZlc1tDb25zdF1cbiAgICogIC0gZXh0ZW5kIGludGVyZmFjZSBOYW1lIEltcGxlbWVudHNJbnRlcmZhY2VzXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlSW50ZXJmYWNlVHlwZUV4dGVuc2lvbiA9IGZ1bmN0aW9uIHBhcnNlSW50ZXJmYWNlVHlwZUV4dGVuc2lvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2V4dGVuZCcpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnaW50ZXJmYWNlJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBpbnRlcmZhY2VzID0gdGhpcy5wYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUZpZWxkc0RlZmluaXRpb24oKTtcblxuICAgIGlmIChpbnRlcmZhY2VzLmxlbmd0aCA9PT0gMCAmJiBkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiBmaWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5JTlRFUkZBQ0VfVFlQRV9FWFRFTlNJT04sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgaW50ZXJmYWNlczogaW50ZXJmYWNlcyxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBmaWVsZHM6IGZpZWxkcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogVW5pb25UeXBlRXh0ZW5zaW9uIDpcbiAgICogICAtIGV4dGVuZCB1bmlvbiBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdPyBVbmlvbk1lbWJlclR5cGVzXG4gICAqICAgLSBleHRlbmQgdW5pb24gTmFtZSBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVVuaW9uVHlwZUV4dGVuc2lvbiA9IGZ1bmN0aW9uIHBhcnNlVW5pb25UeXBlRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCd1bmlvbicpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciB0eXBlcyA9IHRoaXMucGFyc2VVbmlvbk1lbWJlclR5cGVzKCk7XG5cbiAgICBpZiAoZGlyZWN0aXZlcy5sZW5ndGggPT09IDAgJiYgdHlwZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5VTklPTl9UWVBFX0VYVEVOU0lPTixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgdHlwZXM6IHR5cGVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBFbnVtVHlwZUV4dGVuc2lvbiA6XG4gICAqICAgLSBleHRlbmQgZW51bSBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdPyBFbnVtVmFsdWVzRGVmaW5pdGlvblxuICAgKiAgIC0gZXh0ZW5kIGVudW0gTmFtZSBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUVudW1UeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VFbnVtVHlwZUV4dGVuc2lvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2V4dGVuZCcpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZW51bScpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciB2YWx1ZXMgPSB0aGlzLnBhcnNlRW51bVZhbHVlc0RlZmluaXRpb24oKTtcblxuICAgIGlmIChkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiB2YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5FTlVNX1RZUEVfRVhURU5TSU9OLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogSW5wdXRPYmplY3RUeXBlRXh0ZW5zaW9uIDpcbiAgICogICAtIGV4dGVuZCBpbnB1dCBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdPyBJbnB1dEZpZWxkc0RlZmluaXRpb25cbiAgICogICAtIGV4dGVuZCBpbnB1dCBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlSW5wdXRPYmplY3RUeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VJbnB1dE9iamVjdFR5cGVFeHRlbnNpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdleHRlbmQnKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2lucHV0Jyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIGZpZWxkcyA9IHRoaXMucGFyc2VJbnB1dEZpZWxkc0RlZmluaXRpb24oKTtcblxuICAgIGlmIChkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiBmaWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5JTlBVVF9PQkpFQ1RfVFlQRV9FWFRFTlNJT04sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGZpZWxkczogZmllbGRzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBEaXJlY3RpdmVEZWZpbml0aW9uIDpcbiAgICogICAtIERlc2NyaXB0aW9uPyBkaXJlY3RpdmUgQCBOYW1lIEFyZ3VtZW50c0RlZmluaXRpb24/IGByZXBlYXRhYmxlYD8gb24gRGlyZWN0aXZlTG9jYXRpb25zXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGlyZWN0aXZlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2RpcmVjdGl2ZScpO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkFUKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGFyZ3MgPSB0aGlzLnBhcnNlQXJndW1lbnREZWZzKCk7XG4gICAgdmFyIHJlcGVhdGFibGUgPSB0aGlzLmV4cGVjdE9wdGlvbmFsS2V5d29yZCgncmVwZWF0YWJsZScpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnb24nKTtcbiAgICB2YXIgbG9jYXRpb25zID0gdGhpcy5wYXJzZURpcmVjdGl2ZUxvY2F0aW9ucygpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLkRJUkVDVElWRV9ERUZJTklUSU9OLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGFyZ3VtZW50czogYXJncyxcbiAgICAgIHJlcGVhdGFibGU6IHJlcGVhdGFibGUsXG4gICAgICBsb2NhdGlvbnM6IGxvY2F0aW9ucyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRGlyZWN0aXZlTG9jYXRpb25zIDpcbiAgICogICAtIGB8YD8gRGlyZWN0aXZlTG9jYXRpb25cbiAgICogICAtIERpcmVjdGl2ZUxvY2F0aW9ucyB8IERpcmVjdGl2ZUxvY2F0aW9uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGlyZWN0aXZlTG9jYXRpb25zID0gZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmVMb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsaW1pdGVkTWFueShUb2tlbktpbmQuUElQRSwgdGhpcy5wYXJzZURpcmVjdGl2ZUxvY2F0aW9uKTtcbiAgfVxuICAvKlxuICAgKiBEaXJlY3RpdmVMb2NhdGlvbiA6XG4gICAqICAgLSBFeGVjdXRhYmxlRGlyZWN0aXZlTG9jYXRpb25cbiAgICogICAtIFR5cGVTeXN0ZW1EaXJlY3RpdmVMb2NhdGlvblxuICAgKlxuICAgKiBFeGVjdXRhYmxlRGlyZWN0aXZlTG9jYXRpb24gOiBvbmUgb2ZcbiAgICogICBgUVVFUllgXG4gICAqICAgYE1VVEFUSU9OYFxuICAgKiAgIGBTVUJTQ1JJUFRJT05gXG4gICAqICAgYEZJRUxEYFxuICAgKiAgIGBGUkFHTUVOVF9ERUZJTklUSU9OYFxuICAgKiAgIGBGUkFHTUVOVF9TUFJFQURgXG4gICAqICAgYElOTElORV9GUkFHTUVOVGBcbiAgICpcbiAgICogVHlwZVN5c3RlbURpcmVjdGl2ZUxvY2F0aW9uIDogb25lIG9mXG4gICAqICAgYFNDSEVNQWBcbiAgICogICBgU0NBTEFSYFxuICAgKiAgIGBPQkpFQ1RgXG4gICAqICAgYEZJRUxEX0RFRklOSVRJT05gXG4gICAqICAgYEFSR1VNRU5UX0RFRklOSVRJT05gXG4gICAqICAgYElOVEVSRkFDRWBcbiAgICogICBgVU5JT05gXG4gICAqICAgYEVOVU1gXG4gICAqICAgYEVOVU1fVkFMVUVgXG4gICAqICAgYElOUFVUX09CSkVDVGBcbiAgICogICBgSU5QVVRfRklFTERfREVGSU5JVElPTmBcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VEaXJlY3RpdmVMb2NhdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlTG9jYXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuXG4gICAgaWYgKERpcmVjdGl2ZUxvY2F0aW9uW25hbWUudmFsdWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIHRocm93IHRoaXMudW5leHBlY3RlZChzdGFydCk7XG4gIH0gLy8gQ29yZSBwYXJzaW5nIHV0aWxpdHkgZnVuY3Rpb25zXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2NhdGlvbiBvYmplY3QsIHVzZWQgdG8gaWRlbnRpZnkgdGhlIHBsYWNlIGluIHRoZSBzb3VyY2UgdGhhdCBjcmVhdGVkIGEgZ2l2ZW4gcGFyc2VkIG9iamVjdC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ubG9jID0gZnVuY3Rpb24gbG9jKHN0YXJ0VG9rZW4pIHtcbiAgICB2YXIgX3RoaXMkX29wdGlvbnM0O1xuXG4gICAgaWYgKCgoX3RoaXMkX29wdGlvbnM0ID0gdGhpcy5fb3B0aW9ucykgPT09IG51bGwgfHwgX3RoaXMkX29wdGlvbnM0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRfb3B0aW9uczQubm9Mb2NhdGlvbikgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBuZXcgTG9jYXRpb24oc3RhcnRUb2tlbiwgdGhpcy5fbGV4ZXIubGFzdFRva2VuLCB0aGlzLl9sZXhlci5zb3VyY2UpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGUgbmV4dCB0b2tlbiBpcyBvZiBhIGdpdmVuIGtpbmRcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGVlayA9IGZ1bmN0aW9uIHBlZWsoa2luZCkge1xuICAgIHJldHVybiB0aGlzLl9sZXhlci50b2tlbi5raW5kID09PSBraW5kO1xuICB9XG4gIC8qKlxuICAgKiBJZiB0aGUgbmV4dCB0b2tlbiBpcyBvZiB0aGUgZ2l2ZW4ga2luZCwgcmV0dXJuIHRoYXQgdG9rZW4gYWZ0ZXIgYWR2YW5jaW5nIHRoZSBsZXhlci5cbiAgICogT3RoZXJ3aXNlLCBkbyBub3QgY2hhbmdlIHRoZSBwYXJzZXIgc3RhdGUgYW5kIHRocm93IGFuIGVycm9yLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5leHBlY3RUb2tlbiA9IGZ1bmN0aW9uIGV4cGVjdFRva2VuKGtpbmQpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIGlmICh0b2tlbi5raW5kID09PSBraW5kKSB7XG4gICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG5cbiAgICB0aHJvdyBzeW50YXhFcnJvcih0aGlzLl9sZXhlci5zb3VyY2UsIHRva2VuLnN0YXJ0LCBcIkV4cGVjdGVkIFwiLmNvbmNhdChnZXRUb2tlbktpbmREZXNjKGtpbmQpLCBcIiwgZm91bmQgXCIpLmNvbmNhdChnZXRUb2tlbkRlc2ModG9rZW4pLCBcIi5cIikpO1xuICB9XG4gIC8qKlxuICAgKiBJZiB0aGUgbmV4dCB0b2tlbiBpcyBvZiB0aGUgZ2l2ZW4ga2luZCwgcmV0dXJuIHRoYXQgdG9rZW4gYWZ0ZXIgYWR2YW5jaW5nIHRoZSBsZXhlci5cbiAgICogT3RoZXJ3aXNlLCBkbyBub3QgY2hhbmdlIHRoZSBwYXJzZXIgc3RhdGUgYW5kIHJldHVybiB1bmRlZmluZWQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmV4cGVjdE9wdGlvbmFsVG9rZW4gPSBmdW5jdGlvbiBleHBlY3RPcHRpb25hbFRva2VuKGtpbmQpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIGlmICh0b2tlbi5raW5kID09PSBraW5kKSB7XG4gICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIC8qKlxuICAgKiBJZiB0aGUgbmV4dCB0b2tlbiBpcyBhIGdpdmVuIGtleXdvcmQsIGFkdmFuY2UgdGhlIGxleGVyLlxuICAgKiBPdGhlcndpc2UsIGRvIG5vdCBjaGFuZ2UgdGhlIHBhcnNlciBzdGF0ZSBhbmQgdGhyb3cgYW4gZXJyb3IuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmV4cGVjdEtleXdvcmQgPSBmdW5jdGlvbiBleHBlY3RLZXl3b3JkKHZhbHVlKSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICBpZiAodG9rZW4ua2luZCA9PT0gVG9rZW5LaW5kLk5BTUUgJiYgdG9rZW4udmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IHN5bnRheEVycm9yKHRoaXMuX2xleGVyLnNvdXJjZSwgdG9rZW4uc3RhcnQsIFwiRXhwZWN0ZWQgXFxcIlwiLmNvbmNhdCh2YWx1ZSwgXCJcXFwiLCBmb3VuZCBcIikuY29uY2F0KGdldFRva2VuRGVzYyh0b2tlbiksIFwiLlwiKSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBJZiB0aGUgbmV4dCB0b2tlbiBpcyBhIGdpdmVuIGtleXdvcmQsIHJldHVybiBcInRydWVcIiBhZnRlciBhZHZhbmNpbmcgdGhlIGxleGVyLlxuICAgKiBPdGhlcndpc2UsIGRvIG5vdCBjaGFuZ2UgdGhlIHBhcnNlciBzdGF0ZSBhbmQgcmV0dXJuIFwiZmFsc2VcIi5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZXhwZWN0T3B0aW9uYWxLZXl3b3JkID0gZnVuY3Rpb24gZXhwZWN0T3B0aW9uYWxLZXl3b3JkKHZhbHVlKSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICBpZiAodG9rZW4ua2luZCA9PT0gVG9rZW5LaW5kLk5BTUUgJiYgdG9rZW4udmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvKipcbiAgICogSGVscGVyIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhbiBlcnJvciB3aGVuIGFuIHVuZXhwZWN0ZWQgbGV4ZWQgdG9rZW4gaXMgZW5jb3VudGVyZWQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVuZXhwZWN0ZWQgPSBmdW5jdGlvbiB1bmV4cGVjdGVkKGF0VG9rZW4pIHtcbiAgICB2YXIgdG9rZW4gPSBhdFRva2VuICE9PSBudWxsICYmIGF0VG9rZW4gIT09IHZvaWQgMCA/IGF0VG9rZW4gOiB0aGlzLl9sZXhlci50b2tlbjtcbiAgICByZXR1cm4gc3ludGF4RXJyb3IodGhpcy5fbGV4ZXIuc291cmNlLCB0b2tlbi5zdGFydCwgXCJVbmV4cGVjdGVkIFwiLmNvbmNhdChnZXRUb2tlbkRlc2ModG9rZW4pLCBcIi5cIikpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcG9zc2libHkgZW1wdHkgbGlzdCBvZiBwYXJzZSBub2RlcywgZGV0ZXJtaW5lZCBieSB0aGUgcGFyc2VGbi5cbiAgICogVGhpcyBsaXN0IGJlZ2lucyB3aXRoIGEgbGV4IHRva2VuIG9mIG9wZW5LaW5kIGFuZCBlbmRzIHdpdGggYSBsZXggdG9rZW4gb2YgY2xvc2VLaW5kLlxuICAgKiBBZHZhbmNlcyB0aGUgcGFyc2VyIHRvIHRoZSBuZXh0IGxleCB0b2tlbiBhZnRlciB0aGUgY2xvc2luZyB0b2tlbi5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYW55ID0gZnVuY3Rpb24gYW55KG9wZW5LaW5kLCBwYXJzZUZuLCBjbG9zZUtpbmQpIHtcbiAgICB0aGlzLmV4cGVjdFRva2VuKG9wZW5LaW5kKTtcbiAgICB2YXIgbm9kZXMgPSBbXTtcblxuICAgIHdoaWxlICghdGhpcy5leHBlY3RPcHRpb25hbFRva2VuKGNsb3NlS2luZCkpIHtcbiAgICAgIG5vZGVzLnB1c2gocGFyc2VGbi5jYWxsKHRoaXMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIHBhcnNlIG5vZGVzLCBkZXRlcm1pbmVkIGJ5IHRoZSBwYXJzZUZuLlxuICAgKiBJdCBjYW4gYmUgZW1wdHkgb25seSBpZiBvcGVuIHRva2VuIGlzIG1pc3Npbmcgb3RoZXJ3aXNlIGl0IHdpbGwgYWx3YXlzIHJldHVybiBub24tZW1wdHkgbGlzdFxuICAgKiB0aGF0IGJlZ2lucyB3aXRoIGEgbGV4IHRva2VuIG9mIG9wZW5LaW5kIGFuZCBlbmRzIHdpdGggYSBsZXggdG9rZW4gb2YgY2xvc2VLaW5kLlxuICAgKiBBZHZhbmNlcyB0aGUgcGFyc2VyIHRvIHRoZSBuZXh0IGxleCB0b2tlbiBhZnRlciB0aGUgY2xvc2luZyB0b2tlbi5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ub3B0aW9uYWxNYW55ID0gZnVuY3Rpb24gb3B0aW9uYWxNYW55KG9wZW5LaW5kLCBwYXJzZUZuLCBjbG9zZUtpbmQpIHtcbiAgICBpZiAodGhpcy5leHBlY3RPcHRpb25hbFRva2VuKG9wZW5LaW5kKSkge1xuICAgICAgdmFyIG5vZGVzID0gW107XG5cbiAgICAgIGRvIHtcbiAgICAgICAgbm9kZXMucHVzaChwYXJzZUZuLmNhbGwodGhpcykpO1xuICAgICAgfSB3aGlsZSAoIXRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihjbG9zZUtpbmQpKTtcblxuICAgICAgcmV0dXJuIG5vZGVzO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIG5vbi1lbXB0eSBsaXN0IG9mIHBhcnNlIG5vZGVzLCBkZXRlcm1pbmVkIGJ5IHRoZSBwYXJzZUZuLlxuICAgKiBUaGlzIGxpc3QgYmVnaW5zIHdpdGggYSBsZXggdG9rZW4gb2Ygb3BlbktpbmQgYW5kIGVuZHMgd2l0aCBhIGxleCB0b2tlbiBvZiBjbG9zZUtpbmQuXG4gICAqIEFkdmFuY2VzIHRoZSBwYXJzZXIgdG8gdGhlIG5leHQgbGV4IHRva2VuIGFmdGVyIHRoZSBjbG9zaW5nIHRva2VuLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5tYW55ID0gZnVuY3Rpb24gbWFueShvcGVuS2luZCwgcGFyc2VGbiwgY2xvc2VLaW5kKSB7XG4gICAgdGhpcy5leHBlY3RUb2tlbihvcGVuS2luZCk7XG4gICAgdmFyIG5vZGVzID0gW107XG5cbiAgICBkbyB7XG4gICAgICBub2Rlcy5wdXNoKHBhcnNlRm4uY2FsbCh0aGlzKSk7XG4gICAgfSB3aGlsZSAoIXRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihjbG9zZUtpbmQpKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIG5vbi1lbXB0eSBsaXN0IG9mIHBhcnNlIG5vZGVzLCBkZXRlcm1pbmVkIGJ5IHRoZSBwYXJzZUZuLlxuICAgKiBUaGlzIGxpc3QgbWF5IGJlZ2luIHdpdGggYSBsZXggdG9rZW4gb2YgZGVsaW1pdGVyS2luZCBmb2xsb3dlZCBieSBpdGVtcyBzZXBhcmF0ZWQgYnkgbGV4IHRva2VucyBvZiB0b2tlbktpbmQuXG4gICAqIEFkdmFuY2VzIHRoZSBwYXJzZXIgdG8gdGhlIG5leHQgbGV4IHRva2VuIGFmdGVyIGxhc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGVsaW1pdGVkTWFueSA9IGZ1bmN0aW9uIGRlbGltaXRlZE1hbnkoZGVsaW1pdGVyS2luZCwgcGFyc2VGbikge1xuICAgIHRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihkZWxpbWl0ZXJLaW5kKTtcbiAgICB2YXIgbm9kZXMgPSBbXTtcblxuICAgIGRvIHtcbiAgICAgIG5vZGVzLnB1c2gocGFyc2VGbi5jYWxsKHRoaXMpKTtcbiAgICB9IHdoaWxlICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oZGVsaW1pdGVyS2luZCkpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9O1xuXG4gIHJldHVybiBQYXJzZXI7XG59KCk7XG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIHRvIGRlc2NyaWJlIGEgdG9rZW4gYXMgYSBzdHJpbmcgZm9yIGRlYnVnZ2luZy5cbiAqL1xuXG5mdW5jdGlvbiBnZXRUb2tlbkRlc2ModG9rZW4pIHtcbiAgdmFyIHZhbHVlID0gdG9rZW4udmFsdWU7XG4gIHJldHVybiBnZXRUb2tlbktpbmREZXNjKHRva2VuLmtpbmQpICsgKHZhbHVlICE9IG51bGwgPyBcIiBcXFwiXCIuY29uY2F0KHZhbHVlLCBcIlxcXCJcIikgOiAnJyk7XG59XG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIHRvIGRlc2NyaWJlIGEgdG9rZW4ga2luZCBhcyBhIHN0cmluZyBmb3IgZGVidWdnaW5nLlxuICovXG5cblxuZnVuY3Rpb24gZ2V0VG9rZW5LaW5kRGVzYyhraW5kKSB7XG4gIHJldHVybiBpc1B1bmN0dWF0b3JUb2tlbktpbmQoa2luZCkgPyBcIlxcXCJcIi5jb25jYXQoa2luZCwgXCJcXFwiXCIpIDoga2luZDtcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uIH0gZnJvbSBcIi4vbG9jYXRpb24ubWpzXCI7XG4vKipcbiAqIFJlbmRlciBhIGhlbHBmdWwgZGVzY3JpcHRpb24gb2YgdGhlIGxvY2F0aW9uIGluIHRoZSBHcmFwaFFMIFNvdXJjZSBkb2N1bWVudC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRMb2NhdGlvbihsb2NhdGlvbikge1xuICByZXR1cm4gcHJpbnRTb3VyY2VMb2NhdGlvbihsb2NhdGlvbi5zb3VyY2UsIGdldExvY2F0aW9uKGxvY2F0aW9uLnNvdXJjZSwgbG9jYXRpb24uc3RhcnQpKTtcbn1cbi8qKlxuICogUmVuZGVyIGEgaGVscGZ1bCBkZXNjcmlwdGlvbiBvZiB0aGUgbG9jYXRpb24gaW4gdGhlIEdyYXBoUUwgU291cmNlIGRvY3VtZW50LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludFNvdXJjZUxvY2F0aW9uKHNvdXJjZSwgc291cmNlTG9jYXRpb24pIHtcbiAgdmFyIGZpcnN0TGluZUNvbHVtbk9mZnNldCA9IHNvdXJjZS5sb2NhdGlvbk9mZnNldC5jb2x1bW4gLSAxO1xuICB2YXIgYm9keSA9IHdoaXRlc3BhY2UoZmlyc3RMaW5lQ29sdW1uT2Zmc2V0KSArIHNvdXJjZS5ib2R5O1xuICB2YXIgbGluZUluZGV4ID0gc291cmNlTG9jYXRpb24ubGluZSAtIDE7XG4gIHZhciBsaW5lT2Zmc2V0ID0gc291cmNlLmxvY2F0aW9uT2Zmc2V0LmxpbmUgLSAxO1xuICB2YXIgbGluZU51bSA9IHNvdXJjZUxvY2F0aW9uLmxpbmUgKyBsaW5lT2Zmc2V0O1xuICB2YXIgY29sdW1uT2Zmc2V0ID0gc291cmNlTG9jYXRpb24ubGluZSA9PT0gMSA/IGZpcnN0TGluZUNvbHVtbk9mZnNldCA6IDA7XG4gIHZhciBjb2x1bW5OdW0gPSBzb3VyY2VMb2NhdGlvbi5jb2x1bW4gKyBjb2x1bW5PZmZzZXQ7XG4gIHZhciBsb2NhdGlvblN0ciA9IFwiXCIuY29uY2F0KHNvdXJjZS5uYW1lLCBcIjpcIikuY29uY2F0KGxpbmVOdW0sIFwiOlwiKS5jb25jYXQoY29sdW1uTnVtLCBcIlxcblwiKTtcbiAgdmFyIGxpbmVzID0gYm9keS5zcGxpdCgvXFxyXFxufFtcXG5cXHJdL2cpO1xuICB2YXIgbG9jYXRpb25MaW5lID0gbGluZXNbbGluZUluZGV4XTsgLy8gU3BlY2lhbCBjYXNlIGZvciBtaW5pZmllZCBkb2N1bWVudHNcblxuICBpZiAobG9jYXRpb25MaW5lLmxlbmd0aCA+IDEyMCkge1xuICAgIHZhciBzdWJMaW5lSW5kZXggPSBNYXRoLmZsb29yKGNvbHVtbk51bSAvIDgwKTtcbiAgICB2YXIgc3ViTGluZUNvbHVtbk51bSA9IGNvbHVtbk51bSAlIDgwO1xuICAgIHZhciBzdWJMaW5lcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2NhdGlvbkxpbmUubGVuZ3RoOyBpICs9IDgwKSB7XG4gICAgICBzdWJMaW5lcy5wdXNoKGxvY2F0aW9uTGluZS5zbGljZShpLCBpICsgODApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYXRpb25TdHIgKyBwcmludFByZWZpeGVkTGluZXMoW1tcIlwiLmNvbmNhdChsaW5lTnVtKSwgc3ViTGluZXNbMF1dXS5jb25jYXQoc3ViTGluZXMuc2xpY2UoMSwgc3ViTGluZUluZGV4ICsgMSkubWFwKGZ1bmN0aW9uIChzdWJMaW5lKSB7XG4gICAgICByZXR1cm4gWycnLCBzdWJMaW5lXTtcbiAgICB9KSwgW1snICcsIHdoaXRlc3BhY2Uoc3ViTGluZUNvbHVtbk51bSAtIDEpICsgJ14nXSwgWycnLCBzdWJMaW5lc1tzdWJMaW5lSW5kZXggKyAxXV1dKSk7XG4gIH1cblxuICByZXR1cm4gbG9jYXRpb25TdHIgKyBwcmludFByZWZpeGVkTGluZXMoWy8vIExpbmVzIHNwZWNpZmllZCBsaWtlIHRoaXM6IFtcInByZWZpeFwiLCBcInN0cmluZ1wiXSxcbiAgW1wiXCIuY29uY2F0KGxpbmVOdW0gLSAxKSwgbGluZXNbbGluZUluZGV4IC0gMV1dLCBbXCJcIi5jb25jYXQobGluZU51bSksIGxvY2F0aW9uTGluZV0sIFsnJywgd2hpdGVzcGFjZShjb2x1bW5OdW0gLSAxKSArICdeJ10sIFtcIlwiLmNvbmNhdChsaW5lTnVtICsgMSksIGxpbmVzW2xpbmVJbmRleCArIDFdXV0pO1xufVxuXG5mdW5jdGlvbiBwcmludFByZWZpeGVkTGluZXMobGluZXMpIHtcbiAgdmFyIGV4aXN0aW5nTGluZXMgPSBsaW5lcy5maWx0ZXIoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgXyA9IF9yZWZbMF0sXG4gICAgICAgIGxpbmUgPSBfcmVmWzFdO1xuICAgIHJldHVybiBsaW5lICE9PSB1bmRlZmluZWQ7XG4gIH0pO1xuICB2YXIgcGFkTGVuID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgZXhpc3RpbmdMaW5lcy5tYXAoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgdmFyIHByZWZpeCA9IF9yZWYyWzBdO1xuICAgIHJldHVybiBwcmVmaXgubGVuZ3RoO1xuICB9KSk7XG4gIHJldHVybiBleGlzdGluZ0xpbmVzLm1hcChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICB2YXIgcHJlZml4ID0gX3JlZjNbMF0sXG4gICAgICAgIGxpbmUgPSBfcmVmM1sxXTtcbiAgICByZXR1cm4gbGVmdFBhZChwYWRMZW4sIHByZWZpeCkgKyAobGluZSA/ICcgfCAnICsgbGluZSA6ICcgfCcpO1xuICB9KS5qb2luKCdcXG4nKTtcbn1cblxuZnVuY3Rpb24gd2hpdGVzcGFjZShsZW4pIHtcbiAgcmV0dXJuIEFycmF5KGxlbiArIDEpLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gbGVmdFBhZChsZW4sIHN0cikge1xuICByZXR1cm4gd2hpdGVzcGFjZShsZW4gLSBzdHIubGVuZ3RoKSArIHN0cjtcbn1cbiIsImltcG9ydCB7IHZpc2l0IH0gZnJvbSBcIi4vdmlzaXRvci5tanNcIjtcbmltcG9ydCB7IHByaW50QmxvY2tTdHJpbmcgfSBmcm9tIFwiLi9ibG9ja1N0cmluZy5tanNcIjtcbi8qKlxuICogQ29udmVydHMgYW4gQVNUIGludG8gYSBzdHJpbmcsIHVzaW5nIG9uZSBzZXQgb2YgcmVhc29uYWJsZVxuICogZm9ybWF0dGluZyBydWxlcy5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnQoYXN0KSB7XG4gIHJldHVybiB2aXNpdChhc3QsIHtcbiAgICBsZWF2ZTogcHJpbnREb2NBU1RSZWR1Y2VyXG4gIH0pO1xufVxudmFyIE1BWF9MSU5FX0xFTkdUSCA9IDgwOyAvLyBUT0RPOiBwcm92aWRlIGJldHRlciB0eXBlIGNvdmVyYWdlIGluIGZ1dHVyZVxuXG52YXIgcHJpbnREb2NBU1RSZWR1Y2VyID0ge1xuICBOYW1lOiBmdW5jdGlvbiBOYW1lKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS52YWx1ZTtcbiAgfSxcbiAgVmFyaWFibGU6IGZ1bmN0aW9uIFZhcmlhYmxlKG5vZGUpIHtcbiAgICByZXR1cm4gJyQnICsgbm9kZS5uYW1lO1xuICB9LFxuICAvLyBEb2N1bWVudFxuICBEb2N1bWVudDogZnVuY3Rpb24gRG9jdW1lbnQobm9kZSkge1xuICAgIHJldHVybiBqb2luKG5vZGUuZGVmaW5pdGlvbnMsICdcXG5cXG4nKSArICdcXG4nO1xuICB9LFxuICBPcGVyYXRpb25EZWZpbml0aW9uOiBmdW5jdGlvbiBPcGVyYXRpb25EZWZpbml0aW9uKG5vZGUpIHtcbiAgICB2YXIgb3AgPSBub2RlLm9wZXJhdGlvbjtcbiAgICB2YXIgbmFtZSA9IG5vZGUubmFtZTtcbiAgICB2YXIgdmFyRGVmcyA9IHdyYXAoJygnLCBqb2luKG5vZGUudmFyaWFibGVEZWZpbml0aW9ucywgJywgJyksICcpJyk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSBqb2luKG5vZGUuZGlyZWN0aXZlcywgJyAnKTtcbiAgICB2YXIgc2VsZWN0aW9uU2V0ID0gbm9kZS5zZWxlY3Rpb25TZXQ7IC8vIEFub255bW91cyBxdWVyaWVzIHdpdGggbm8gZGlyZWN0aXZlcyBvciB2YXJpYWJsZSBkZWZpbml0aW9ucyBjYW4gdXNlXG4gICAgLy8gdGhlIHF1ZXJ5IHNob3J0IGZvcm0uXG5cbiAgICByZXR1cm4gIW5hbWUgJiYgIWRpcmVjdGl2ZXMgJiYgIXZhckRlZnMgJiYgb3AgPT09ICdxdWVyeScgPyBzZWxlY3Rpb25TZXQgOiBqb2luKFtvcCwgam9pbihbbmFtZSwgdmFyRGVmc10pLCBkaXJlY3RpdmVzLCBzZWxlY3Rpb25TZXRdLCAnICcpO1xuICB9LFxuICBWYXJpYWJsZURlZmluaXRpb246IGZ1bmN0aW9uIFZhcmlhYmxlRGVmaW5pdGlvbihfcmVmKSB7XG4gICAgdmFyIHZhcmlhYmxlID0gX3JlZi52YXJpYWJsZSxcbiAgICAgICAgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gX3JlZi5kZWZhdWx0VmFsdWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmLmRpcmVjdGl2ZXM7XG4gICAgcmV0dXJuIHZhcmlhYmxlICsgJzogJyArIHR5cGUgKyB3cmFwKCcgPSAnLCBkZWZhdWx0VmFsdWUpICsgd3JhcCgnICcsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSk7XG4gIH0sXG4gIFNlbGVjdGlvblNldDogZnVuY3Rpb24gU2VsZWN0aW9uU2V0KF9yZWYyKSB7XG4gICAgdmFyIHNlbGVjdGlvbnMgPSBfcmVmMi5zZWxlY3Rpb25zO1xuICAgIHJldHVybiBibG9jayhzZWxlY3Rpb25zKTtcbiAgfSxcbiAgRmllbGQ6IGZ1bmN0aW9uIEZpZWxkKF9yZWYzKSB7XG4gICAgdmFyIGFsaWFzID0gX3JlZjMuYWxpYXMsXG4gICAgICAgIG5hbWUgPSBfcmVmMy5uYW1lLFxuICAgICAgICBhcmdzID0gX3JlZjMuYXJndW1lbnRzLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjMuZGlyZWN0aXZlcyxcbiAgICAgICAgc2VsZWN0aW9uU2V0ID0gX3JlZjMuc2VsZWN0aW9uU2V0O1xuICAgIHZhciBwcmVmaXggPSB3cmFwKCcnLCBhbGlhcywgJzogJykgKyBuYW1lO1xuICAgIHZhciBhcmdzTGluZSA9IHByZWZpeCArIHdyYXAoJygnLCBqb2luKGFyZ3MsICcsICcpLCAnKScpO1xuXG4gICAgaWYgKGFyZ3NMaW5lLmxlbmd0aCA+IE1BWF9MSU5FX0xFTkdUSCkge1xuICAgICAgYXJnc0xpbmUgPSBwcmVmaXggKyB3cmFwKCcoXFxuJywgaW5kZW50KGpvaW4oYXJncywgJ1xcbicpKSwgJ1xcbiknKTtcbiAgICB9XG5cbiAgICByZXR1cm4gam9pbihbYXJnc0xpbmUsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgc2VsZWN0aW9uU2V0XSwgJyAnKTtcbiAgfSxcbiAgQXJndW1lbnQ6IGZ1bmN0aW9uIEFyZ3VtZW50KF9yZWY0KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmNC5uYW1lLFxuICAgICAgICB2YWx1ZSA9IF9yZWY0LnZhbHVlO1xuICAgIHJldHVybiBuYW1lICsgJzogJyArIHZhbHVlO1xuICB9LFxuICAvLyBGcmFnbWVudHNcbiAgRnJhZ21lbnRTcHJlYWQ6IGZ1bmN0aW9uIEZyYWdtZW50U3ByZWFkKF9yZWY1KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmNS5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjUuZGlyZWN0aXZlcztcbiAgICByZXR1cm4gJy4uLicgKyBuYW1lICsgd3JhcCgnICcsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSk7XG4gIH0sXG4gIElubGluZUZyYWdtZW50OiBmdW5jdGlvbiBJbmxpbmVGcmFnbWVudChfcmVmNikge1xuICAgIHZhciB0eXBlQ29uZGl0aW9uID0gX3JlZjYudHlwZUNvbmRpdGlvbixcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWY2LmRpcmVjdGl2ZXMsXG4gICAgICAgIHNlbGVjdGlvblNldCA9IF9yZWY2LnNlbGVjdGlvblNldDtcbiAgICByZXR1cm4gam9pbihbJy4uLicsIHdyYXAoJ29uICcsIHR5cGVDb25kaXRpb24pLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIHNlbGVjdGlvblNldF0sICcgJyk7XG4gIH0sXG4gIEZyYWdtZW50RGVmaW5pdGlvbjogZnVuY3Rpb24gRnJhZ21lbnREZWZpbml0aW9uKF9yZWY3KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmNy5uYW1lLFxuICAgICAgICB0eXBlQ29uZGl0aW9uID0gX3JlZjcudHlwZUNvbmRpdGlvbixcbiAgICAgICAgdmFyaWFibGVEZWZpbml0aW9ucyA9IF9yZWY3LnZhcmlhYmxlRGVmaW5pdGlvbnMsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmNy5kaXJlY3RpdmVzLFxuICAgICAgICBzZWxlY3Rpb25TZXQgPSBfcmVmNy5zZWxlY3Rpb25TZXQ7XG4gICAgcmV0dXJuICgvLyBOb3RlOiBmcmFnbWVudCB2YXJpYWJsZSBkZWZpbml0aW9ucyBhcmUgZXhwZXJpbWVudGFsIGFuZCBtYXkgYmUgY2hhbmdlZFxuICAgICAgLy8gb3IgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxuICAgICAgXCJmcmFnbWVudCBcIi5jb25jYXQobmFtZSkuY29uY2F0KHdyYXAoJygnLCBqb2luKHZhcmlhYmxlRGVmaW5pdGlvbnMsICcsICcpLCAnKScpLCBcIiBcIikgKyBcIm9uIFwiLmNvbmNhdCh0eXBlQ29uZGl0aW9uLCBcIiBcIikuY29uY2F0KHdyYXAoJycsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgJyAnKSkgKyBzZWxlY3Rpb25TZXRcbiAgICApO1xuICB9LFxuICAvLyBWYWx1ZVxuICBJbnRWYWx1ZTogZnVuY3Rpb24gSW50VmFsdWUoX3JlZjgpIHtcbiAgICB2YXIgdmFsdWUgPSBfcmVmOC52YWx1ZTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIEZsb2F0VmFsdWU6IGZ1bmN0aW9uIEZsb2F0VmFsdWUoX3JlZjkpIHtcbiAgICB2YXIgdmFsdWUgPSBfcmVmOS52YWx1ZTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIFN0cmluZ1ZhbHVlOiBmdW5jdGlvbiBTdHJpbmdWYWx1ZShfcmVmMTAsIGtleSkge1xuICAgIHZhciB2YWx1ZSA9IF9yZWYxMC52YWx1ZSxcbiAgICAgICAgaXNCbG9ja1N0cmluZyA9IF9yZWYxMC5ibG9jaztcbiAgICByZXR1cm4gaXNCbG9ja1N0cmluZyA/IHByaW50QmxvY2tTdHJpbmcodmFsdWUsIGtleSA9PT0gJ2Rlc2NyaXB0aW9uJyA/ICcnIDogJyAgJykgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gIH0sXG4gIEJvb2xlYW5WYWx1ZTogZnVuY3Rpb24gQm9vbGVhblZhbHVlKF9yZWYxMSkge1xuICAgIHZhciB2YWx1ZSA9IF9yZWYxMS52YWx1ZTtcbiAgICByZXR1cm4gdmFsdWUgPyAndHJ1ZScgOiAnZmFsc2UnO1xuICB9LFxuICBOdWxsVmFsdWU6IGZ1bmN0aW9uIE51bGxWYWx1ZSgpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9LFxuICBFbnVtVmFsdWU6IGZ1bmN0aW9uIEVudW1WYWx1ZShfcmVmMTIpIHtcbiAgICB2YXIgdmFsdWUgPSBfcmVmMTIudmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuICBMaXN0VmFsdWU6IGZ1bmN0aW9uIExpc3RWYWx1ZShfcmVmMTMpIHtcbiAgICB2YXIgdmFsdWVzID0gX3JlZjEzLnZhbHVlcztcbiAgICByZXR1cm4gJ1snICsgam9pbih2YWx1ZXMsICcsICcpICsgJ10nO1xuICB9LFxuICBPYmplY3RWYWx1ZTogZnVuY3Rpb24gT2JqZWN0VmFsdWUoX3JlZjE0KSB7XG4gICAgdmFyIGZpZWxkcyA9IF9yZWYxNC5maWVsZHM7XG4gICAgcmV0dXJuICd7JyArIGpvaW4oZmllbGRzLCAnLCAnKSArICd9JztcbiAgfSxcbiAgT2JqZWN0RmllbGQ6IGZ1bmN0aW9uIE9iamVjdEZpZWxkKF9yZWYxNSkge1xuICAgIHZhciBuYW1lID0gX3JlZjE1Lm5hbWUsXG4gICAgICAgIHZhbHVlID0gX3JlZjE1LnZhbHVlO1xuICAgIHJldHVybiBuYW1lICsgJzogJyArIHZhbHVlO1xuICB9LFxuICAvLyBEaXJlY3RpdmVcbiAgRGlyZWN0aXZlOiBmdW5jdGlvbiBEaXJlY3RpdmUoX3JlZjE2KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMTYubmFtZSxcbiAgICAgICAgYXJncyA9IF9yZWYxNi5hcmd1bWVudHM7XG4gICAgcmV0dXJuICdAJyArIG5hbWUgKyB3cmFwKCcoJywgam9pbihhcmdzLCAnLCAnKSwgJyknKTtcbiAgfSxcbiAgLy8gVHlwZVxuICBOYW1lZFR5cGU6IGZ1bmN0aW9uIE5hbWVkVHlwZShfcmVmMTcpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYxNy5uYW1lO1xuICAgIHJldHVybiBuYW1lO1xuICB9LFxuICBMaXN0VHlwZTogZnVuY3Rpb24gTGlzdFR5cGUoX3JlZjE4KSB7XG4gICAgdmFyIHR5cGUgPSBfcmVmMTgudHlwZTtcbiAgICByZXR1cm4gJ1snICsgdHlwZSArICddJztcbiAgfSxcbiAgTm9uTnVsbFR5cGU6IGZ1bmN0aW9uIE5vbk51bGxUeXBlKF9yZWYxOSkge1xuICAgIHZhciB0eXBlID0gX3JlZjE5LnR5cGU7XG4gICAgcmV0dXJuIHR5cGUgKyAnISc7XG4gIH0sXG4gIC8vIFR5cGUgU3lzdGVtIERlZmluaXRpb25zXG4gIFNjaGVtYURlZmluaXRpb246IGFkZERlc2NyaXB0aW9uKGZ1bmN0aW9uIChfcmVmMjApIHtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IF9yZWYyMC5kaXJlY3RpdmVzLFxuICAgICAgICBvcGVyYXRpb25UeXBlcyA9IF9yZWYyMC5vcGVyYXRpb25UeXBlcztcbiAgICByZXR1cm4gam9pbihbJ3NjaGVtYScsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgYmxvY2sob3BlcmF0aW9uVHlwZXMpXSwgJyAnKTtcbiAgfSksXG4gIE9wZXJhdGlvblR5cGVEZWZpbml0aW9uOiBmdW5jdGlvbiBPcGVyYXRpb25UeXBlRGVmaW5pdGlvbihfcmVmMjEpIHtcbiAgICB2YXIgb3BlcmF0aW9uID0gX3JlZjIxLm9wZXJhdGlvbixcbiAgICAgICAgdHlwZSA9IF9yZWYyMS50eXBlO1xuICAgIHJldHVybiBvcGVyYXRpb24gKyAnOiAnICsgdHlwZTtcbiAgfSxcbiAgU2NhbGFyVHlwZURlZmluaXRpb246IGFkZERlc2NyaXB0aW9uKGZ1bmN0aW9uIChfcmVmMjIpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYyMi5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjIyLmRpcmVjdGl2ZXM7XG4gICAgcmV0dXJuIGpvaW4oWydzY2FsYXInLCBuYW1lLCBqb2luKGRpcmVjdGl2ZXMsICcgJyldLCAnICcpO1xuICB9KSxcbiAgT2JqZWN0VHlwZURlZmluaXRpb246IGFkZERlc2NyaXB0aW9uKGZ1bmN0aW9uIChfcmVmMjMpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYyMy5uYW1lLFxuICAgICAgICBpbnRlcmZhY2VzID0gX3JlZjIzLmludGVyZmFjZXMsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjMuZGlyZWN0aXZlcyxcbiAgICAgICAgZmllbGRzID0gX3JlZjIzLmZpZWxkcztcbiAgICByZXR1cm4gam9pbihbJ3R5cGUnLCBuYW1lLCB3cmFwKCdpbXBsZW1lbnRzICcsIGpvaW4oaW50ZXJmYWNlcywgJyAmICcpKSwgam9pbihkaXJlY3RpdmVzLCAnICcpLCBibG9jayhmaWVsZHMpXSwgJyAnKTtcbiAgfSksXG4gIEZpZWxkRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYyNCkge1xuICAgIHZhciBuYW1lID0gX3JlZjI0Lm5hbWUsXG4gICAgICAgIGFyZ3MgPSBfcmVmMjQuYXJndW1lbnRzLFxuICAgICAgICB0eXBlID0gX3JlZjI0LnR5cGUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjQuZGlyZWN0aXZlcztcbiAgICByZXR1cm4gbmFtZSArIChoYXNNdWx0aWxpbmVJdGVtcyhhcmdzKSA/IHdyYXAoJyhcXG4nLCBpbmRlbnQoam9pbihhcmdzLCAnXFxuJykpLCAnXFxuKScpIDogd3JhcCgnKCcsIGpvaW4oYXJncywgJywgJyksICcpJykpICsgJzogJyArIHR5cGUgKyB3cmFwKCcgJywgam9pbihkaXJlY3RpdmVzLCAnICcpKTtcbiAgfSksXG4gIElucHV0VmFsdWVEZWZpbml0aW9uOiBhZGREZXNjcmlwdGlvbihmdW5jdGlvbiAoX3JlZjI1KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMjUubmFtZSxcbiAgICAgICAgdHlwZSA9IF9yZWYyNS50eXBlLFxuICAgICAgICBkZWZhdWx0VmFsdWUgPSBfcmVmMjUuZGVmYXVsdFZhbHVlLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjI1LmRpcmVjdGl2ZXM7XG4gICAgcmV0dXJuIGpvaW4oW25hbWUgKyAnOiAnICsgdHlwZSwgd3JhcCgnPSAnLCBkZWZhdWx0VmFsdWUpLCBqb2luKGRpcmVjdGl2ZXMsICcgJyldLCAnICcpO1xuICB9KSxcbiAgSW50ZXJmYWNlVHlwZURlZmluaXRpb246IGFkZERlc2NyaXB0aW9uKGZ1bmN0aW9uIChfcmVmMjYpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYyNi5uYW1lLFxuICAgICAgICBpbnRlcmZhY2VzID0gX3JlZjI2LmludGVyZmFjZXMsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjYuZGlyZWN0aXZlcyxcbiAgICAgICAgZmllbGRzID0gX3JlZjI2LmZpZWxkcztcbiAgICByZXR1cm4gam9pbihbJ2ludGVyZmFjZScsIG5hbWUsIHdyYXAoJ2ltcGxlbWVudHMgJywgam9pbihpbnRlcmZhY2VzLCAnICYgJykpLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKGZpZWxkcyldLCAnICcpO1xuICB9KSxcbiAgVW5pb25UeXBlRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYyNykge1xuICAgIHZhciBuYW1lID0gX3JlZjI3Lm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjcuZGlyZWN0aXZlcyxcbiAgICAgICAgdHlwZXMgPSBfcmVmMjcudHlwZXM7XG4gICAgcmV0dXJuIGpvaW4oWyd1bmlvbicsIG5hbWUsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgdHlwZXMgJiYgdHlwZXMubGVuZ3RoICE9PSAwID8gJz0gJyArIGpvaW4odHlwZXMsICcgfCAnKSA6ICcnXSwgJyAnKTtcbiAgfSksXG4gIEVudW1UeXBlRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYyOCkge1xuICAgIHZhciBuYW1lID0gX3JlZjI4Lm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjguZGlyZWN0aXZlcyxcbiAgICAgICAgdmFsdWVzID0gX3JlZjI4LnZhbHVlcztcbiAgICByZXR1cm4gam9pbihbJ2VudW0nLCBuYW1lLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKHZhbHVlcyldLCAnICcpO1xuICB9KSxcbiAgRW51bVZhbHVlRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYyOSkge1xuICAgIHZhciBuYW1lID0gX3JlZjI5Lm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjkuZGlyZWN0aXZlcztcbiAgICByZXR1cm4gam9pbihbbmFtZSwgam9pbihkaXJlY3RpdmVzLCAnICcpXSwgJyAnKTtcbiAgfSksXG4gIElucHV0T2JqZWN0VHlwZURlZmluaXRpb246IGFkZERlc2NyaXB0aW9uKGZ1bmN0aW9uIChfcmVmMzApIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYzMC5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjMwLmRpcmVjdGl2ZXMsXG4gICAgICAgIGZpZWxkcyA9IF9yZWYzMC5maWVsZHM7XG4gICAgcmV0dXJuIGpvaW4oWydpbnB1dCcsIG5hbWUsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgYmxvY2soZmllbGRzKV0sICcgJyk7XG4gIH0pLFxuICBEaXJlY3RpdmVEZWZpbml0aW9uOiBhZGREZXNjcmlwdGlvbihmdW5jdGlvbiAoX3JlZjMxKSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMzEubmFtZSxcbiAgICAgICAgYXJncyA9IF9yZWYzMS5hcmd1bWVudHMsXG4gICAgICAgIHJlcGVhdGFibGUgPSBfcmVmMzEucmVwZWF0YWJsZSxcbiAgICAgICAgbG9jYXRpb25zID0gX3JlZjMxLmxvY2F0aW9ucztcbiAgICByZXR1cm4gJ2RpcmVjdGl2ZSBAJyArIG5hbWUgKyAoaGFzTXVsdGlsaW5lSXRlbXMoYXJncykgPyB3cmFwKCcoXFxuJywgaW5kZW50KGpvaW4oYXJncywgJ1xcbicpKSwgJ1xcbiknKSA6IHdyYXAoJygnLCBqb2luKGFyZ3MsICcsICcpLCAnKScpKSArIChyZXBlYXRhYmxlID8gJyByZXBlYXRhYmxlJyA6ICcnKSArICcgb24gJyArIGpvaW4obG9jYXRpb25zLCAnIHwgJyk7XG4gIH0pLFxuICBTY2hlbWFFeHRlbnNpb246IGZ1bmN0aW9uIFNjaGVtYUV4dGVuc2lvbihfcmVmMzIpIHtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IF9yZWYzMi5kaXJlY3RpdmVzLFxuICAgICAgICBvcGVyYXRpb25UeXBlcyA9IF9yZWYzMi5vcGVyYXRpb25UeXBlcztcbiAgICByZXR1cm4gam9pbihbJ2V4dGVuZCBzY2hlbWEnLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKG9wZXJhdGlvblR5cGVzKV0sICcgJyk7XG4gIH0sXG4gIFNjYWxhclR5cGVFeHRlbnNpb246IGZ1bmN0aW9uIFNjYWxhclR5cGVFeHRlbnNpb24oX3JlZjMzKSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMzMubmFtZSxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYzMy5kaXJlY3RpdmVzO1xuICAgIHJldHVybiBqb2luKFsnZXh0ZW5kIHNjYWxhcicsIG5hbWUsIGpvaW4oZGlyZWN0aXZlcywgJyAnKV0sICcgJyk7XG4gIH0sXG4gIE9iamVjdFR5cGVFeHRlbnNpb246IGZ1bmN0aW9uIE9iamVjdFR5cGVFeHRlbnNpb24oX3JlZjM0KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMzQubmFtZSxcbiAgICAgICAgaW50ZXJmYWNlcyA9IF9yZWYzNC5pbnRlcmZhY2VzLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjM0LmRpcmVjdGl2ZXMsXG4gICAgICAgIGZpZWxkcyA9IF9yZWYzNC5maWVsZHM7XG4gICAgcmV0dXJuIGpvaW4oWydleHRlbmQgdHlwZScsIG5hbWUsIHdyYXAoJ2ltcGxlbWVudHMgJywgam9pbihpbnRlcmZhY2VzLCAnICYgJykpLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKGZpZWxkcyldLCAnICcpO1xuICB9LFxuICBJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uOiBmdW5jdGlvbiBJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uKF9yZWYzNSkge1xuICAgIHZhciBuYW1lID0gX3JlZjM1Lm5hbWUsXG4gICAgICAgIGludGVyZmFjZXMgPSBfcmVmMzUuaW50ZXJmYWNlcyxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYzNS5kaXJlY3RpdmVzLFxuICAgICAgICBmaWVsZHMgPSBfcmVmMzUuZmllbGRzO1xuICAgIHJldHVybiBqb2luKFsnZXh0ZW5kIGludGVyZmFjZScsIG5hbWUsIHdyYXAoJ2ltcGxlbWVudHMgJywgam9pbihpbnRlcmZhY2VzLCAnICYgJykpLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKGZpZWxkcyldLCAnICcpO1xuICB9LFxuICBVbmlvblR5cGVFeHRlbnNpb246IGZ1bmN0aW9uIFVuaW9uVHlwZUV4dGVuc2lvbihfcmVmMzYpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYzNi5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjM2LmRpcmVjdGl2ZXMsXG4gICAgICAgIHR5cGVzID0gX3JlZjM2LnR5cGVzO1xuICAgIHJldHVybiBqb2luKFsnZXh0ZW5kIHVuaW9uJywgbmFtZSwgam9pbihkaXJlY3RpdmVzLCAnICcpLCB0eXBlcyAmJiB0eXBlcy5sZW5ndGggIT09IDAgPyAnPSAnICsgam9pbih0eXBlcywgJyB8ICcpIDogJyddLCAnICcpO1xuICB9LFxuICBFbnVtVHlwZUV4dGVuc2lvbjogZnVuY3Rpb24gRW51bVR5cGVFeHRlbnNpb24oX3JlZjM3KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMzcubmFtZSxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYzNy5kaXJlY3RpdmVzLFxuICAgICAgICB2YWx1ZXMgPSBfcmVmMzcudmFsdWVzO1xuICAgIHJldHVybiBqb2luKFsnZXh0ZW5kIGVudW0nLCBuYW1lLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKHZhbHVlcyldLCAnICcpO1xuICB9LFxuICBJbnB1dE9iamVjdFR5cGVFeHRlbnNpb246IGZ1bmN0aW9uIElucHV0T2JqZWN0VHlwZUV4dGVuc2lvbihfcmVmMzgpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYzOC5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjM4LmRpcmVjdGl2ZXMsXG4gICAgICAgIGZpZWxkcyA9IF9yZWYzOC5maWVsZHM7XG4gICAgcmV0dXJuIGpvaW4oWydleHRlbmQgaW5wdXQnLCBuYW1lLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKGZpZWxkcyldLCAnICcpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBhZGREZXNjcmlwdGlvbihjYikge1xuICByZXR1cm4gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICByZXR1cm4gam9pbihbbm9kZS5kZXNjcmlwdGlvbiwgY2Iobm9kZSldLCAnXFxuJyk7XG4gIH07XG59XG4vKipcbiAqIEdpdmVuIG1heWJlQXJyYXksIHByaW50IGFuIGVtcHR5IHN0cmluZyBpZiBpdCBpcyBudWxsIG9yIGVtcHR5LCBvdGhlcndpc2VcbiAqIHByaW50IGFsbCBpdGVtcyB0b2dldGhlciBzZXBhcmF0ZWQgYnkgc2VwYXJhdG9yIGlmIHByb3ZpZGVkXG4gKi9cblxuXG5mdW5jdGlvbiBqb2luKG1heWJlQXJyYXkpIHtcbiAgdmFyIF9tYXliZUFycmF5JGZpbHRlciRqbztcblxuICB2YXIgc2VwYXJhdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcbiAgcmV0dXJuIChfbWF5YmVBcnJheSRmaWx0ZXIkam8gPSBtYXliZUFycmF5ID09PSBudWxsIHx8IG1heWJlQXJyYXkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1heWJlQXJyYXkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0pLmpvaW4oc2VwYXJhdG9yKSkgIT09IG51bGwgJiYgX21heWJlQXJyYXkkZmlsdGVyJGpvICE9PSB2b2lkIDAgPyBfbWF5YmVBcnJheSRmaWx0ZXIkam8gOiAnJztcbn1cbi8qKlxuICogR2l2ZW4gYXJyYXksIHByaW50IGVhY2ggaXRlbSBvbiBpdHMgb3duIGxpbmUsIHdyYXBwZWQgaW4gYW5cbiAqIGluZGVudGVkIFwieyB9XCIgYmxvY2suXG4gKi9cblxuXG5mdW5jdGlvbiBibG9jayhhcnJheSkge1xuICByZXR1cm4gd3JhcCgne1xcbicsIGluZGVudChqb2luKGFycmF5LCAnXFxuJykpLCAnXFxufScpO1xufVxuLyoqXG4gKiBJZiBtYXliZVN0cmluZyBpcyBub3QgbnVsbCBvciBlbXB0eSwgdGhlbiB3cmFwIHdpdGggc3RhcnQgYW5kIGVuZCwgb3RoZXJ3aXNlIHByaW50IGFuIGVtcHR5IHN0cmluZy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHdyYXAoc3RhcnQsIG1heWJlU3RyaW5nKSB7XG4gIHZhciBlbmQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICcnO1xuICByZXR1cm4gbWF5YmVTdHJpbmcgIT0gbnVsbCAmJiBtYXliZVN0cmluZyAhPT0gJycgPyBzdGFydCArIG1heWJlU3RyaW5nICsgZW5kIDogJyc7XG59XG5cbmZ1bmN0aW9uIGluZGVudChzdHIpIHtcbiAgcmV0dXJuIHdyYXAoJyAgJywgc3RyLnJlcGxhY2UoL1xcbi9nLCAnXFxuICAnKSk7XG59XG5cbmZ1bmN0aW9uIGlzTXVsdGlsaW5lKHN0cikge1xuICByZXR1cm4gc3RyLmluZGV4T2YoJ1xcbicpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gaGFzTXVsdGlsaW5lSXRlbXMobWF5YmVBcnJheSkge1xuICByZXR1cm4gbWF5YmVBcnJheSAhPSBudWxsICYmIG1heWJlQXJyYXkuc29tZShpc011bHRpbGluZSk7XG59XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmltcG9ydCB7IFNZTUJPTF9UT19TVFJJTkdfVEFHIH0gZnJvbSBcIi4uL3BvbHlmaWxscy9zeW1ib2xzLm1qc1wiO1xuaW1wb3J0IGluc3BlY3QgZnJvbSBcIi4uL2pzdXRpbHMvaW5zcGVjdC5tanNcIjtcbmltcG9ydCBkZXZBc3NlcnQgZnJvbSBcIi4uL2pzdXRpbHMvZGV2QXNzZXJ0Lm1qc1wiO1xuaW1wb3J0IGluc3RhbmNlT2YgZnJvbSBcIi4uL2pzdXRpbHMvaW5zdGFuY2VPZi5tanNcIjtcblxuLyoqXG4gKiBBIHJlcHJlc2VudGF0aW9uIG9mIHNvdXJjZSBpbnB1dCB0byBHcmFwaFFMLiBUaGUgYG5hbWVgIGFuZCBgbG9jYXRpb25PZmZzZXRgIHBhcmFtZXRlcnMgYXJlXG4gKiBvcHRpb25hbCwgYnV0IHRoZXkgYXJlIHVzZWZ1bCBmb3IgY2xpZW50cyB3aG8gc3RvcmUgR3JhcGhRTCBkb2N1bWVudHMgaW4gc291cmNlIGZpbGVzLlxuICogRm9yIGV4YW1wbGUsIGlmIHRoZSBHcmFwaFFMIGlucHV0IHN0YXJ0cyBhdCBsaW5lIDQwIGluIGEgZmlsZSBuYW1lZCBgRm9vLmdyYXBocWxgLCBpdCBtaWdodFxuICogYmUgdXNlZnVsIGZvciBgbmFtZWAgdG8gYmUgYFwiRm9vLmdyYXBocWxcImAgYW5kIGxvY2F0aW9uIHRvIGJlIGB7IGxpbmU6IDQwLCBjb2x1bW46IDEgfWAuXG4gKiBUaGUgYGxpbmVgIGFuZCBgY29sdW1uYCBwcm9wZXJ0aWVzIGluIGBsb2NhdGlvbk9mZnNldGAgYXJlIDEtaW5kZXhlZC5cbiAqL1xuZXhwb3J0IHZhciBTb3VyY2UgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTb3VyY2UoYm9keSkge1xuICAgIHZhciBuYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnR3JhcGhRTCByZXF1ZXN0JztcbiAgICB2YXIgbG9jYXRpb25PZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHtcbiAgICAgIGxpbmU6IDEsXG4gICAgICBjb2x1bW46IDFcbiAgICB9O1xuICAgIHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJyB8fCBkZXZBc3NlcnQoMCwgXCJCb2R5IG11c3QgYmUgYSBzdHJpbmcuIFJlY2VpdmVkOiBcIi5jb25jYXQoaW5zcGVjdChib2R5KSwgXCIuXCIpKTtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sb2NhdGlvbk9mZnNldCA9IGxvY2F0aW9uT2Zmc2V0O1xuICAgIHRoaXMubG9jYXRpb25PZmZzZXQubGluZSA+IDAgfHwgZGV2QXNzZXJ0KDAsICdsaW5lIGluIGxvY2F0aW9uT2Zmc2V0IGlzIDEtaW5kZXhlZCBhbmQgbXVzdCBiZSBwb3NpdGl2ZS4nKTtcbiAgICB0aGlzLmxvY2F0aW9uT2Zmc2V0LmNvbHVtbiA+IDAgfHwgZGV2QXNzZXJ0KDAsICdjb2x1bW4gaW4gbG9jYXRpb25PZmZzZXQgaXMgMS1pbmRleGVkIGFuZCBtdXN0IGJlIHBvc2l0aXZlLicpO1xuICB9IC8vICRGbG93Rml4TWVbdW5zdXBwb3J0ZWQtc3ludGF4XSBGbG93IGRvZXNuJ3Qgc3VwcG9ydCBjb21wdXRlZCBwcm9wZXJ0aWVzIHlldFxuXG5cbiAgX2NyZWF0ZUNsYXNzKFNvdXJjZSwgW3tcbiAgICBrZXk6IFNZTUJPTF9UT19TVFJJTkdfVEFHLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuICdTb3VyY2UnO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTb3VyY2U7XG59KCk7XG4vKipcbiAqIFRlc3QgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgU291cmNlIG9iamVjdC5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5leHBvcnQgZnVuY3Rpb24gaXNTb3VyY2Uoc291cmNlKSB7XG4gIHJldHVybiBpbnN0YW5jZU9mKHNvdXJjZSwgU291cmNlKTtcbn1cbiIsIi8qKlxuICogQW4gZXhwb3J0ZWQgZW51bSBkZXNjcmliaW5nIHRoZSBkaWZmZXJlbnQga2luZHMgb2YgdG9rZW5zIHRoYXQgdGhlXG4gKiBsZXhlciBlbWl0cy5cbiAqL1xuZXhwb3J0IHZhciBUb2tlbktpbmQgPSBPYmplY3QuZnJlZXplKHtcbiAgU09GOiAnPFNPRj4nLFxuICBFT0Y6ICc8RU9GPicsXG4gIEJBTkc6ICchJyxcbiAgRE9MTEFSOiAnJCcsXG4gIEFNUDogJyYnLFxuICBQQVJFTl9MOiAnKCcsXG4gIFBBUkVOX1I6ICcpJyxcbiAgU1BSRUFEOiAnLi4uJyxcbiAgQ09MT046ICc6JyxcbiAgRVFVQUxTOiAnPScsXG4gIEFUOiAnQCcsXG4gIEJSQUNLRVRfTDogJ1snLFxuICBCUkFDS0VUX1I6ICddJyxcbiAgQlJBQ0VfTDogJ3snLFxuICBQSVBFOiAnfCcsXG4gIEJSQUNFX1I6ICd9JyxcbiAgTkFNRTogJ05hbWUnLFxuICBJTlQ6ICdJbnQnLFxuICBGTE9BVDogJ0Zsb2F0JyxcbiAgU1RSSU5HOiAnU3RyaW5nJyxcbiAgQkxPQ0tfU1RSSU5HOiAnQmxvY2tTdHJpbmcnLFxuICBDT01NRU5UOiAnQ29tbWVudCdcbn0pO1xuLyoqXG4gKiBUaGUgZW51bSB0eXBlIHJlcHJlc2VudGluZyB0aGUgdG9rZW4ga2luZHMgdmFsdWVzLlxuICovXG4iLCJpbXBvcnQgaW5zcGVjdCBmcm9tIFwiLi4vanN1dGlscy9pbnNwZWN0Lm1qc1wiO1xuaW1wb3J0IHsgaXNOb2RlIH0gZnJvbSBcIi4vYXN0Lm1qc1wiO1xuLyoqXG4gKiBBIHZpc2l0b3IgaXMgcHJvdmlkZWQgdG8gdmlzaXQsIGl0IGNvbnRhaW5zIHRoZSBjb2xsZWN0aW9uIG9mXG4gKiByZWxldmFudCBmdW5jdGlvbnMgdG8gYmUgY2FsbGVkIGR1cmluZyB0aGUgdmlzaXRvcidzIHRyYXZlcnNhbC5cbiAqL1xuXG5leHBvcnQgdmFyIFF1ZXJ5RG9jdW1lbnRLZXlzID0ge1xuICBOYW1lOiBbXSxcbiAgRG9jdW1lbnQ6IFsnZGVmaW5pdGlvbnMnXSxcbiAgT3BlcmF0aW9uRGVmaW5pdGlvbjogWyduYW1lJywgJ3ZhcmlhYmxlRGVmaW5pdGlvbnMnLCAnZGlyZWN0aXZlcycsICdzZWxlY3Rpb25TZXQnXSxcbiAgVmFyaWFibGVEZWZpbml0aW9uOiBbJ3ZhcmlhYmxlJywgJ3R5cGUnLCAnZGVmYXVsdFZhbHVlJywgJ2RpcmVjdGl2ZXMnXSxcbiAgVmFyaWFibGU6IFsnbmFtZSddLFxuICBTZWxlY3Rpb25TZXQ6IFsnc2VsZWN0aW9ucyddLFxuICBGaWVsZDogWydhbGlhcycsICduYW1lJywgJ2FyZ3VtZW50cycsICdkaXJlY3RpdmVzJywgJ3NlbGVjdGlvblNldCddLFxuICBBcmd1bWVudDogWyduYW1lJywgJ3ZhbHVlJ10sXG4gIEZyYWdtZW50U3ByZWFkOiBbJ25hbWUnLCAnZGlyZWN0aXZlcyddLFxuICBJbmxpbmVGcmFnbWVudDogWyd0eXBlQ29uZGl0aW9uJywgJ2RpcmVjdGl2ZXMnLCAnc2VsZWN0aW9uU2V0J10sXG4gIEZyYWdtZW50RGVmaW5pdGlvbjogWyduYW1lJywgLy8gTm90ZTogZnJhZ21lbnQgdmFyaWFibGUgZGVmaW5pdGlvbnMgYXJlIGV4cGVyaW1lbnRhbCBhbmQgbWF5IGJlIGNoYW5nZWRcbiAgLy8gb3IgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxuICAndmFyaWFibGVEZWZpbml0aW9ucycsICd0eXBlQ29uZGl0aW9uJywgJ2RpcmVjdGl2ZXMnLCAnc2VsZWN0aW9uU2V0J10sXG4gIEludFZhbHVlOiBbXSxcbiAgRmxvYXRWYWx1ZTogW10sXG4gIFN0cmluZ1ZhbHVlOiBbXSxcbiAgQm9vbGVhblZhbHVlOiBbXSxcbiAgTnVsbFZhbHVlOiBbXSxcbiAgRW51bVZhbHVlOiBbXSxcbiAgTGlzdFZhbHVlOiBbJ3ZhbHVlcyddLFxuICBPYmplY3RWYWx1ZTogWydmaWVsZHMnXSxcbiAgT2JqZWN0RmllbGQ6IFsnbmFtZScsICd2YWx1ZSddLFxuICBEaXJlY3RpdmU6IFsnbmFtZScsICdhcmd1bWVudHMnXSxcbiAgTmFtZWRUeXBlOiBbJ25hbWUnXSxcbiAgTGlzdFR5cGU6IFsndHlwZSddLFxuICBOb25OdWxsVHlwZTogWyd0eXBlJ10sXG4gIFNjaGVtYURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnZGlyZWN0aXZlcycsICdvcGVyYXRpb25UeXBlcyddLFxuICBPcGVyYXRpb25UeXBlRGVmaW5pdGlvbjogWyd0eXBlJ10sXG4gIFNjYWxhclR5cGVEZWZpbml0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJ25hbWUnLCAnZGlyZWN0aXZlcyddLFxuICBPYmplY3RUeXBlRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICduYW1lJywgJ2ludGVyZmFjZXMnLCAnZGlyZWN0aXZlcycsICdmaWVsZHMnXSxcbiAgRmllbGREZWZpbml0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJ25hbWUnLCAnYXJndW1lbnRzJywgJ3R5cGUnLCAnZGlyZWN0aXZlcyddLFxuICBJbnB1dFZhbHVlRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICduYW1lJywgJ3R5cGUnLCAnZGVmYXVsdFZhbHVlJywgJ2RpcmVjdGl2ZXMnXSxcbiAgSW50ZXJmYWNlVHlwZURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdpbnRlcmZhY2VzJywgJ2RpcmVjdGl2ZXMnLCAnZmllbGRzJ10sXG4gIFVuaW9uVHlwZURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdkaXJlY3RpdmVzJywgJ3R5cGVzJ10sXG4gIEVudW1UeXBlRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICduYW1lJywgJ2RpcmVjdGl2ZXMnLCAndmFsdWVzJ10sXG4gIEVudW1WYWx1ZURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdkaXJlY3RpdmVzJ10sXG4gIElucHV0T2JqZWN0VHlwZURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdkaXJlY3RpdmVzJywgJ2ZpZWxkcyddLFxuICBEaXJlY3RpdmVEZWZpbml0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJ25hbWUnLCAnYXJndW1lbnRzJywgJ2xvY2F0aW9ucyddLFxuICBTY2hlbWFFeHRlbnNpb246IFsnZGlyZWN0aXZlcycsICdvcGVyYXRpb25UeXBlcyddLFxuICBTY2FsYXJUeXBlRXh0ZW5zaW9uOiBbJ25hbWUnLCAnZGlyZWN0aXZlcyddLFxuICBPYmplY3RUeXBlRXh0ZW5zaW9uOiBbJ25hbWUnLCAnaW50ZXJmYWNlcycsICdkaXJlY3RpdmVzJywgJ2ZpZWxkcyddLFxuICBJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uOiBbJ25hbWUnLCAnaW50ZXJmYWNlcycsICdkaXJlY3RpdmVzJywgJ2ZpZWxkcyddLFxuICBVbmlvblR5cGVFeHRlbnNpb246IFsnbmFtZScsICdkaXJlY3RpdmVzJywgJ3R5cGVzJ10sXG4gIEVudW1UeXBlRXh0ZW5zaW9uOiBbJ25hbWUnLCAnZGlyZWN0aXZlcycsICd2YWx1ZXMnXSxcbiAgSW5wdXRPYmplY3RUeXBlRXh0ZW5zaW9uOiBbJ25hbWUnLCAnZGlyZWN0aXZlcycsICdmaWVsZHMnXVxufTtcbmV4cG9ydCB2YXIgQlJFQUsgPSBPYmplY3QuZnJlZXplKHt9KTtcbi8qKlxuICogdmlzaXQoKSB3aWxsIHdhbGsgdGhyb3VnaCBhbiBBU1QgdXNpbmcgYSBkZXB0aC1maXJzdCB0cmF2ZXJzYWwsIGNhbGxpbmdcbiAqIHRoZSB2aXNpdG9yJ3MgZW50ZXIgZnVuY3Rpb24gYXQgZWFjaCBub2RlIGluIHRoZSB0cmF2ZXJzYWwsIGFuZCBjYWxsaW5nIHRoZVxuICogbGVhdmUgZnVuY3Rpb24gYWZ0ZXIgdmlzaXRpbmcgdGhhdCBub2RlIGFuZCBhbGwgb2YgaXRzIGNoaWxkIG5vZGVzLlxuICpcbiAqIEJ5IHJldHVybmluZyBkaWZmZXJlbnQgdmFsdWVzIGZyb20gdGhlIGVudGVyIGFuZCBsZWF2ZSBmdW5jdGlvbnMsIHRoZVxuICogYmVoYXZpb3Igb2YgdGhlIHZpc2l0b3IgY2FuIGJlIGFsdGVyZWQsIGluY2x1ZGluZyBza2lwcGluZyBvdmVyIGEgc3ViLXRyZWUgb2ZcbiAqIHRoZSBBU1QgKGJ5IHJldHVybmluZyBmYWxzZSksIGVkaXRpbmcgdGhlIEFTVCBieSByZXR1cm5pbmcgYSB2YWx1ZSBvciBudWxsXG4gKiB0byByZW1vdmUgdGhlIHZhbHVlLCBvciB0byBzdG9wIHRoZSB3aG9sZSB0cmF2ZXJzYWwgYnkgcmV0dXJuaW5nIEJSRUFLLlxuICpcbiAqIFdoZW4gdXNpbmcgdmlzaXQoKSB0byBlZGl0IGFuIEFTVCwgdGhlIG9yaWdpbmFsIEFTVCB3aWxsIG5vdCBiZSBtb2RpZmllZCwgYW5kXG4gKiBhIG5ldyB2ZXJzaW9uIG9mIHRoZSBBU1Qgd2l0aCB0aGUgY2hhbmdlcyBhcHBsaWVkIHdpbGwgYmUgcmV0dXJuZWQgZnJvbSB0aGVcbiAqIHZpc2l0IGZ1bmN0aW9uLlxuICpcbiAqICAgICBjb25zdCBlZGl0ZWRBU1QgPSB2aXNpdChhc3QsIHtcbiAqICAgICAgIGVudGVyKG5vZGUsIGtleSwgcGFyZW50LCBwYXRoLCBhbmNlc3RvcnMpIHtcbiAqICAgICAgICAgLy8gQHJldHVyblxuICogICAgICAgICAvLyAgIHVuZGVmaW5lZDogbm8gYWN0aW9uXG4gKiAgICAgICAgIC8vICAgZmFsc2U6IHNraXAgdmlzaXRpbmcgdGhpcyBub2RlXG4gKiAgICAgICAgIC8vICAgdmlzaXRvci5CUkVBSzogc3RvcCB2aXNpdGluZyBhbHRvZ2V0aGVyXG4gKiAgICAgICAgIC8vICAgbnVsbDogZGVsZXRlIHRoaXMgbm9kZVxuICogICAgICAgICAvLyAgIGFueSB2YWx1ZTogcmVwbGFjZSB0aGlzIG5vZGUgd2l0aCB0aGUgcmV0dXJuZWQgdmFsdWVcbiAqICAgICAgIH0sXG4gKiAgICAgICBsZWF2ZShub2RlLCBrZXksIHBhcmVudCwgcGF0aCwgYW5jZXN0b3JzKSB7XG4gKiAgICAgICAgIC8vIEByZXR1cm5cbiAqICAgICAgICAgLy8gICB1bmRlZmluZWQ6IG5vIGFjdGlvblxuICogICAgICAgICAvLyAgIGZhbHNlOiBubyBhY3Rpb25cbiAqICAgICAgICAgLy8gICB2aXNpdG9yLkJSRUFLOiBzdG9wIHZpc2l0aW5nIGFsdG9nZXRoZXJcbiAqICAgICAgICAgLy8gICBudWxsOiBkZWxldGUgdGhpcyBub2RlXG4gKiAgICAgICAgIC8vICAgYW55IHZhbHVlOiByZXBsYWNlIHRoaXMgbm9kZSB3aXRoIHRoZSByZXR1cm5lZCB2YWx1ZVxuICogICAgICAgfVxuICogICAgIH0pO1xuICpcbiAqIEFsdGVybmF0aXZlbHkgdG8gcHJvdmlkaW5nIGVudGVyKCkgYW5kIGxlYXZlKCkgZnVuY3Rpb25zLCBhIHZpc2l0b3IgY2FuXG4gKiBpbnN0ZWFkIHByb3ZpZGUgZnVuY3Rpb25zIG5hbWVkIHRoZSBzYW1lIGFzIHRoZSBraW5kcyBvZiBBU1Qgbm9kZXMsIG9yXG4gKiBlbnRlci9sZWF2ZSB2aXNpdG9ycyBhdCBhIG5hbWVkIGtleSwgbGVhZGluZyB0byBmb3VyIHBlcm11dGF0aW9ucyBvZiB0aGVcbiAqIHZpc2l0b3IgQVBJOlxuICpcbiAqIDEpIE5hbWVkIHZpc2l0b3JzIHRyaWdnZXJlZCB3aGVuIGVudGVyaW5nIGEgbm9kZSBvZiBhIHNwZWNpZmljIGtpbmQuXG4gKlxuICogICAgIHZpc2l0KGFzdCwge1xuICogICAgICAgS2luZChub2RlKSB7XG4gKiAgICAgICAgIC8vIGVudGVyIHRoZSBcIktpbmRcIiBub2RlXG4gKiAgICAgICB9XG4gKiAgICAgfSlcbiAqXG4gKiAyKSBOYW1lZCB2aXNpdG9ycyB0aGF0IHRyaWdnZXIgdXBvbiBlbnRlcmluZyBhbmQgbGVhdmluZyBhIG5vZGUgb2ZcbiAqICAgIGEgc3BlY2lmaWMga2luZC5cbiAqXG4gKiAgICAgdmlzaXQoYXN0LCB7XG4gKiAgICAgICBLaW5kOiB7XG4gKiAgICAgICAgIGVudGVyKG5vZGUpIHtcbiAqICAgICAgICAgICAvLyBlbnRlciB0aGUgXCJLaW5kXCIgbm9kZVxuICogICAgICAgICB9XG4gKiAgICAgICAgIGxlYXZlKG5vZGUpIHtcbiAqICAgICAgICAgICAvLyBsZWF2ZSB0aGUgXCJLaW5kXCIgbm9kZVxuICogICAgICAgICB9XG4gKiAgICAgICB9XG4gKiAgICAgfSlcbiAqXG4gKiAzKSBHZW5lcmljIHZpc2l0b3JzIHRoYXQgdHJpZ2dlciB1cG9uIGVudGVyaW5nIGFuZCBsZWF2aW5nIGFueSBub2RlLlxuICpcbiAqICAgICB2aXNpdChhc3QsIHtcbiAqICAgICAgIGVudGVyKG5vZGUpIHtcbiAqICAgICAgICAgLy8gZW50ZXIgYW55IG5vZGVcbiAqICAgICAgIH0sXG4gKiAgICAgICBsZWF2ZShub2RlKSB7XG4gKiAgICAgICAgIC8vIGxlYXZlIGFueSBub2RlXG4gKiAgICAgICB9XG4gKiAgICAgfSlcbiAqXG4gKiA0KSBQYXJhbGxlbCB2aXNpdG9ycyBmb3IgZW50ZXJpbmcgYW5kIGxlYXZpbmcgbm9kZXMgb2YgYSBzcGVjaWZpYyBraW5kLlxuICpcbiAqICAgICB2aXNpdChhc3QsIHtcbiAqICAgICAgIGVudGVyOiB7XG4gKiAgICAgICAgIEtpbmQobm9kZSkge1xuICogICAgICAgICAgIC8vIGVudGVyIHRoZSBcIktpbmRcIiBub2RlXG4gKiAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICBsZWF2ZToge1xuICogICAgICAgICBLaW5kKG5vZGUpIHtcbiAqICAgICAgICAgICAvLyBsZWF2ZSB0aGUgXCJLaW5kXCIgbm9kZVxuICogICAgICAgICB9XG4gKiAgICAgICB9XG4gKiAgICAgfSlcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdmlzaXQocm9vdCwgdmlzaXRvcikge1xuICB2YXIgdmlzaXRvcktleXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFF1ZXJ5RG9jdW1lbnRLZXlzO1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmLWluaXQgKi9cbiAgdmFyIHN0YWNrID0gdW5kZWZpbmVkO1xuICB2YXIgaW5BcnJheSA9IEFycmF5LmlzQXJyYXkocm9vdCk7XG4gIHZhciBrZXlzID0gW3Jvb3RdO1xuICB2YXIgaW5kZXggPSAtMTtcbiAgdmFyIGVkaXRzID0gW107XG4gIHZhciBub2RlID0gdW5kZWZpbmVkO1xuICB2YXIga2V5ID0gdW5kZWZpbmVkO1xuICB2YXIgcGFyZW50ID0gdW5kZWZpbmVkO1xuICB2YXIgcGF0aCA9IFtdO1xuICB2YXIgYW5jZXN0b3JzID0gW107XG4gIHZhciBuZXdSb290ID0gcm9vdDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlZi1pbml0ICovXG5cbiAgZG8ge1xuICAgIGluZGV4Kys7XG4gICAgdmFyIGlzTGVhdmluZyA9IGluZGV4ID09PSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaXNFZGl0ZWQgPSBpc0xlYXZpbmcgJiYgZWRpdHMubGVuZ3RoICE9PSAwO1xuXG4gICAgaWYgKGlzTGVhdmluZykge1xuICAgICAga2V5ID0gYW5jZXN0b3JzLmxlbmd0aCA9PT0gMCA/IHVuZGVmaW5lZCA6IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICAgIG5vZGUgPSBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBhbmNlc3RvcnMucG9wKCk7XG5cbiAgICAgIGlmIChpc0VkaXRlZCkge1xuICAgICAgICBpZiAoaW5BcnJheSkge1xuICAgICAgICAgIG5vZGUgPSBub2RlLnNsaWNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGNsb25lID0ge307XG5cbiAgICAgICAgICBmb3IgKHZhciBfaTIgPSAwLCBfT2JqZWN0JGtleXMyID0gT2JqZWN0LmtleXMobm9kZSk7IF9pMiA8IF9PYmplY3Qka2V5czIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgICAgdmFyIGsgPSBfT2JqZWN0JGtleXMyW19pMl07XG4gICAgICAgICAgICBjbG9uZVtrXSA9IG5vZGVba107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbm9kZSA9IGNsb25lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVkaXRPZmZzZXQgPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBlZGl0cy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICB2YXIgZWRpdEtleSA9IGVkaXRzW2lpXVswXTtcbiAgICAgICAgICB2YXIgZWRpdFZhbHVlID0gZWRpdHNbaWldWzFdO1xuXG4gICAgICAgICAgaWYgKGluQXJyYXkpIHtcbiAgICAgICAgICAgIGVkaXRLZXkgLT0gZWRpdE9mZnNldDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5BcnJheSAmJiBlZGl0VmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUuc3BsaWNlKGVkaXRLZXksIDEpO1xuICAgICAgICAgICAgZWRpdE9mZnNldCsrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlW2VkaXRLZXldID0gZWRpdFZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbmRleCA9IHN0YWNrLmluZGV4O1xuICAgICAga2V5cyA9IHN0YWNrLmtleXM7XG4gICAgICBlZGl0cyA9IHN0YWNrLmVkaXRzO1xuICAgICAgaW5BcnJheSA9IHN0YWNrLmluQXJyYXk7XG4gICAgICBzdGFjayA9IHN0YWNrLnByZXY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleSA9IHBhcmVudCA/IGluQXJyYXkgPyBpbmRleCA6IGtleXNbaW5kZXhdIDogdW5kZWZpbmVkO1xuICAgICAgbm9kZSA9IHBhcmVudCA/IHBhcmVudFtrZXldIDogbmV3Um9vdDtcblxuICAgICAgaWYgKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHBhdGgucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSB2b2lkIDA7XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGlmICghaXNOb2RlKG5vZGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgQVNUIE5vZGU6IFwiLmNvbmNhdChpbnNwZWN0KG5vZGUpLCBcIi5cIikpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmlzaXRGbiA9IGdldFZpc2l0Rm4odmlzaXRvciwgbm9kZS5raW5kLCBpc0xlYXZpbmcpO1xuXG4gICAgICBpZiAodmlzaXRGbikge1xuICAgICAgICByZXN1bHQgPSB2aXNpdEZuLmNhbGwodmlzaXRvciwgbm9kZSwga2V5LCBwYXJlbnQsIHBhdGgsIGFuY2VzdG9ycyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gQlJFQUspIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgaWYgKCFpc0xlYXZpbmcpIHtcbiAgICAgICAgICAgIHBhdGgucG9wKCk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlZGl0cy5wdXNoKFtrZXksIHJlc3VsdF0pO1xuXG4gICAgICAgICAgaWYgKCFpc0xlYXZpbmcpIHtcbiAgICAgICAgICAgIGlmIChpc05vZGUocmVzdWx0KSkge1xuICAgICAgICAgICAgICBub2RlID0gcmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGF0aC5wb3AoKTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkICYmIGlzRWRpdGVkKSB7XG4gICAgICBlZGl0cy5wdXNoKFtrZXksIG5vZGVdKTtcbiAgICB9XG5cbiAgICBpZiAoaXNMZWF2aW5nKSB7XG4gICAgICBwYXRoLnBvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX3Zpc2l0b3JLZXlzJG5vZGUka2luO1xuXG4gICAgICBzdGFjayA9IHtcbiAgICAgICAgaW5BcnJheTogaW5BcnJheSxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBrZXlzOiBrZXlzLFxuICAgICAgICBlZGl0czogZWRpdHMsXG4gICAgICAgIHByZXY6IHN0YWNrXG4gICAgICB9O1xuICAgICAgaW5BcnJheSA9IEFycmF5LmlzQXJyYXkobm9kZSk7XG4gICAgICBrZXlzID0gaW5BcnJheSA/IG5vZGUgOiAoX3Zpc2l0b3JLZXlzJG5vZGUka2luID0gdmlzaXRvcktleXNbbm9kZS5raW5kXSkgIT09IG51bGwgJiYgX3Zpc2l0b3JLZXlzJG5vZGUka2luICE9PSB2b2lkIDAgPyBfdmlzaXRvcktleXMkbm9kZSRraW4gOiBbXTtcbiAgICAgIGluZGV4ID0gLTE7XG4gICAgICBlZGl0cyA9IFtdO1xuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIGFuY2VzdG9ycy5wdXNoKHBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudCA9IG5vZGU7XG4gICAgfVxuICB9IHdoaWxlIChzdGFjayAhPT0gdW5kZWZpbmVkKTtcblxuICBpZiAoZWRpdHMubGVuZ3RoICE9PSAwKSB7XG4gICAgbmV3Um9vdCA9IGVkaXRzW2VkaXRzLmxlbmd0aCAtIDFdWzFdO1xuICB9XG5cbiAgcmV0dXJuIG5ld1Jvb3Q7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmlzaXRvciBpbnN0YW5jZSB3aGljaCBkZWxlZ2F0ZXMgdG8gbWFueSB2aXNpdG9ycyB0byBydW4gaW5cbiAqIHBhcmFsbGVsLiBFYWNoIHZpc2l0b3Igd2lsbCBiZSB2aXNpdGVkIGZvciBlYWNoIG5vZGUgYmVmb3JlIG1vdmluZyBvbi5cbiAqXG4gKiBJZiBhIHByaW9yIHZpc2l0b3IgZWRpdHMgYSBub2RlLCBubyBmb2xsb3dpbmcgdmlzaXRvcnMgd2lsbCBzZWUgdGhhdCBub2RlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB2aXNpdEluUGFyYWxsZWwodmlzaXRvcnMpIHtcbiAgdmFyIHNraXBwaW5nID0gbmV3IEFycmF5KHZpc2l0b3JzLmxlbmd0aCk7XG4gIHJldHVybiB7XG4gICAgZW50ZXI6IGZ1bmN0aW9uIGVudGVyKG5vZGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlzaXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNraXBwaW5nW2ldID09IG51bGwpIHtcbiAgICAgICAgICB2YXIgZm4gPSBnZXRWaXNpdEZuKHZpc2l0b3JzW2ldLCBub2RlLmtpbmQsXG4gICAgICAgICAgLyogaXNMZWF2aW5nICovXG4gICAgICAgICAgZmFsc2UpO1xuXG4gICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZm4uYXBwbHkodmlzaXRvcnNbaV0sIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHNraXBwaW5nW2ldID0gbm9kZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBCUkVBSykge1xuICAgICAgICAgICAgICBza2lwcGluZ1tpXSA9IEJSRUFLO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbGVhdmU6IGZ1bmN0aW9uIGxlYXZlKG5vZGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlzaXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNraXBwaW5nW2ldID09IG51bGwpIHtcbiAgICAgICAgICB2YXIgZm4gPSBnZXRWaXNpdEZuKHZpc2l0b3JzW2ldLCBub2RlLmtpbmQsXG4gICAgICAgICAgLyogaXNMZWF2aW5nICovXG4gICAgICAgICAgdHJ1ZSk7XG5cbiAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmbi5hcHBseSh2aXNpdG9yc1tpXSwgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gQlJFQUspIHtcbiAgICAgICAgICAgICAgc2tpcHBpbmdbaV0gPSBCUkVBSztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgcmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChza2lwcGluZ1tpXSA9PT0gbm9kZSkge1xuICAgICAgICAgIHNraXBwaW5nW2ldID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbi8qKlxuICogR2l2ZW4gYSB2aXNpdG9yIGluc3RhbmNlLCBpZiBpdCBpcyBsZWF2aW5nIG9yIG5vdCwgYW5kIGEgbm9kZSBraW5kLCByZXR1cm5cbiAqIHRoZSBmdW5jdGlvbiB0aGUgdmlzaXRvciBydW50aW1lIHNob3VsZCBjYWxsLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaXNpdEZuKHZpc2l0b3IsIGtpbmQsIGlzTGVhdmluZykge1xuICB2YXIga2luZFZpc2l0b3IgPSB2aXNpdG9yW2tpbmRdO1xuXG4gIGlmIChraW5kVmlzaXRvcikge1xuICAgIGlmICghaXNMZWF2aW5nICYmIHR5cGVvZiBraW5kVmlzaXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8geyBLaW5kKCkge30gfVxuICAgICAgcmV0dXJuIGtpbmRWaXNpdG9yO1xuICAgIH1cblxuICAgIHZhciBraW5kU3BlY2lmaWNWaXNpdG9yID0gaXNMZWF2aW5nID8ga2luZFZpc2l0b3IubGVhdmUgOiBraW5kVmlzaXRvci5lbnRlcjtcblxuICAgIGlmICh0eXBlb2Yga2luZFNwZWNpZmljVmlzaXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8geyBLaW5kOiB7IGVudGVyKCkge30sIGxlYXZlKCkge30gfSB9XG4gICAgICByZXR1cm4ga2luZFNwZWNpZmljVmlzaXRvcjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHNwZWNpZmljVmlzaXRvciA9IGlzTGVhdmluZyA/IHZpc2l0b3IubGVhdmUgOiB2aXNpdG9yLmVudGVyO1xuXG4gICAgaWYgKHNwZWNpZmljVmlzaXRvcikge1xuICAgICAgaWYgKHR5cGVvZiBzcGVjaWZpY1Zpc2l0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8geyBlbnRlcigpIHt9LCBsZWF2ZSgpIHt9IH1cbiAgICAgICAgcmV0dXJuIHNwZWNpZmljVmlzaXRvcjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNwZWNpZmljS2luZFZpc2l0b3IgPSBzcGVjaWZpY1Zpc2l0b3Jba2luZF07XG5cbiAgICAgIGlmICh0eXBlb2Ygc3BlY2lmaWNLaW5kVmlzaXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyB7IGVudGVyOiB7IEtpbmQoKSB7fSB9LCBsZWF2ZTogeyBLaW5kKCkge30gfSB9XG4gICAgICAgIHJldHVybiBzcGVjaWZpY0tpbmRWaXNpdG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gSW4gRVMyMDE1IChvciBhIHBvbHlmaWxsZWQpIGVudmlyb25tZW50LCB0aGlzIHdpbGwgYmUgU3ltYm9sLml0ZXJhdG9yXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG5leHBvcnQgdmFyIFNZTUJPTF9JVEVSQVRPUiA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yICE9IG51bGwgPyBTeW1ib2wuaXRlcmF0b3IgOiAnQEBpdGVyYXRvcic7IC8vIEluIEVTMjAxNyAob3IgYSBwb2x5ZmlsbGVkKSBlbnZpcm9ubWVudCwgdGhpcyB3aWxsIGJlIFN5bWJvbC5hc3luY0l0ZXJhdG9yXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG5cbmV4cG9ydCB2YXIgU1lNQk9MX0FTWU5DX0lURVJBVE9SID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvciAhPSBudWxsID8gU3ltYm9sLmFzeW5jSXRlcmF0b3IgOiAnQEBhc3luY0l0ZXJhdG9yJzsgLy8gaXN0YW5idWwgaWdub3JlIG5leHQgKFNlZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ncmFwaHFsL2dyYXBocWwtanMvaXNzdWVzLzIzMTcnKVxuXG5leHBvcnQgdmFyIFNZTUJPTF9UT19TVFJJTkdfVEFHID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcgIT0gbnVsbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6ICdAQHRvU3RyaW5nVGFnJztcbiIsImltcG9ydCBpbnNwZWN0IGZyb20gXCIuLi9qc3V0aWxzL2luc3BlY3QubWpzXCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCIuLi9qc3V0aWxzL2ludmFyaWFudC5tanNcIjtcbmltcG9ydCBrZXlWYWxNYXAgZnJvbSBcIi4uL2pzdXRpbHMva2V5VmFsTWFwLm1qc1wiO1xuaW1wb3J0IHsgS2luZCB9IGZyb20gXCIuLi9sYW5ndWFnZS9raW5kcy5tanNcIjtcblxuLyoqXG4gKiBQcm9kdWNlcyBhIEphdmFTY3JpcHQgdmFsdWUgZ2l2ZW4gYSBHcmFwaFFMIFZhbHVlIEFTVC5cbiAqXG4gKiBVbmxpa2UgYHZhbHVlRnJvbUFTVCgpYCwgbm8gdHlwZSBpcyBwcm92aWRlZC4gVGhlIHJlc3VsdGluZyBKYXZhU2NyaXB0IHZhbHVlXG4gKiB3aWxsIHJlZmxlY3QgdGhlIHByb3ZpZGVkIEdyYXBoUUwgdmFsdWUgQVNULlxuICpcbiAqIHwgR3JhcGhRTCBWYWx1ZSAgICAgICAgfCBKYXZhU2NyaXB0IFZhbHVlIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgSW5wdXQgT2JqZWN0ICAgICAgICAgfCBPYmplY3QgICAgICAgICAgIHxcbiAqIHwgTGlzdCAgICAgICAgICAgICAgICAgfCBBcnJheSAgICAgICAgICAgIHxcbiAqIHwgQm9vbGVhbiAgICAgICAgICAgICAgfCBCb29sZWFuICAgICAgICAgIHxcbiAqIHwgU3RyaW5nIC8gRW51bSAgICAgICAgfCBTdHJpbmcgICAgICAgICAgIHxcbiAqIHwgSW50IC8gRmxvYXQgICAgICAgICAgfCBOdW1iZXIgICAgICAgICAgIHxcbiAqIHwgTnVsbCAgICAgICAgICAgICAgICAgfCBudWxsICAgICAgICAgICAgIHxcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZUZyb21BU1RVbnR5cGVkKHZhbHVlTm9kZSwgdmFyaWFibGVzKSB7XG4gIHN3aXRjaCAodmFsdWVOb2RlLmtpbmQpIHtcbiAgICBjYXNlIEtpbmQuTlVMTDpcbiAgICAgIHJldHVybiBudWxsO1xuXG4gICAgY2FzZSBLaW5kLklOVDpcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZU5vZGUudmFsdWUsIDEwKTtcblxuICAgIGNhc2UgS2luZC5GTE9BVDpcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlTm9kZS52YWx1ZSk7XG5cbiAgICBjYXNlIEtpbmQuU1RSSU5HOlxuICAgIGNhc2UgS2luZC5FTlVNOlxuICAgIGNhc2UgS2luZC5CT09MRUFOOlxuICAgICAgcmV0dXJuIHZhbHVlTm9kZS52YWx1ZTtcblxuICAgIGNhc2UgS2luZC5MSVNUOlxuICAgICAgcmV0dXJuIHZhbHVlTm9kZS52YWx1ZXMubWFwKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZUZyb21BU1RVbnR5cGVkKG5vZGUsIHZhcmlhYmxlcyk7XG4gICAgICB9KTtcblxuICAgIGNhc2UgS2luZC5PQkpFQ1Q6XG4gICAgICByZXR1cm4ga2V5VmFsTWFwKHZhbHVlTm9kZS5maWVsZHMsIGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICByZXR1cm4gZmllbGQubmFtZS52YWx1ZTtcbiAgICAgIH0sIGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICByZXR1cm4gdmFsdWVGcm9tQVNUVW50eXBlZChmaWVsZC52YWx1ZSwgdmFyaWFibGVzKTtcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBLaW5kLlZBUklBQkxFOlxuICAgICAgcmV0dXJuIHZhcmlhYmxlcyA9PT0gbnVsbCB8fCB2YXJpYWJsZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhcmlhYmxlc1t2YWx1ZU5vZGUubmFtZS52YWx1ZV07XG4gIH0gLy8gaXN0YW5idWwgaWdub3JlIG5leHQgKE5vdCByZWFjaGFibGUuIEFsbCBwb3NzaWJsZSB2YWx1ZSBub2RlcyBoYXZlIGJlZW4gY29uc2lkZXJlZClcblxuXG4gIGZhbHNlIHx8IGludmFyaWFudCgwLCAnVW5leHBlY3RlZCB2YWx1ZSBub2RlOiAnICsgaW5zcGVjdCh2YWx1ZU5vZGUpKTtcbn1cbiIsImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0ICogYXMgVXJxbCBmcm9tICd1cnFsJztcbmV4cG9ydCB0eXBlIE1heWJlPFQ+ID0gVCB8IG51bGw7XG5leHBvcnQgdHlwZSBFeGFjdDxUIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+ID0geyBbSyBpbiBrZXlvZiBUXTogVFtLXSB9O1xuZXhwb3J0IHR5cGUgTWFrZU9wdGlvbmFsPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IE9taXQ8VCwgSz4gJiB7IFtTdWJLZXkgaW4gS10/OiBNYXliZTxUW1N1YktleV0+IH07XG5leHBvcnQgdHlwZSBNYWtlTWF5YmU8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXTogTWF5YmU8VFtTdWJLZXldPiB9O1xuZXhwb3J0IHR5cGUgT21pdDxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBQaWNrPFQsIEV4Y2x1ZGU8a2V5b2YgVCwgSz4+O1xuLyoqIEFsbCBidWlsdC1pbiBhbmQgY3VzdG9tIHNjYWxhcnMsIG1hcHBlZCB0byB0aGVpciBhY3R1YWwgdmFsdWVzICovXG5leHBvcnQgdHlwZSBTY2FsYXJzID0ge1xuICBJRDogc3RyaW5nO1xuICBTdHJpbmc6IHN0cmluZztcbiAgQm9vbGVhbjogYm9vbGVhbjtcbiAgSW50OiBudW1iZXI7XG4gIEZsb2F0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBGaWVsZEVycm9yID0ge1xuICBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InO1xuICBmaWVsZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIG1lc3NhZ2U6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgTXV0YXRpb24gPSB7XG4gIF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nO1xuICBDcmVhdGVQb3N0PzogTWF5YmU8UG9zdD47XG4gIHVwZGF0ZVBvc3Q/OiBNYXliZTxQb3N0PjtcbiAgZGVsZXRlUG9zdD86IE1heWJlPFNjYWxhcnNbJ0Jvb2xlYW4nXT47XG4gIHJlZ2lzdGVyOiBVc2VyUmVzcG9uc2U7XG4gIGxvZ2luOiBVc2VyUmVzcG9uc2U7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQ3JlYXRlUG9zdEFyZ3MgPSB7XG4gIHRpdGxlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25VcGRhdGVQb3N0QXJncyA9IHtcbiAgdGl0bGU/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkRlbGV0ZVBvc3RBcmdzID0ge1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25SZWdpc3RlckFyZ3MgPSB7XG4gIG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dDtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25Mb2dpbkFyZ3MgPSB7XG4gIG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dDtcbn07XG5cbmV4cG9ydCB0eXBlIFBvc3QgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUG9zdCc7XG4gIF9pZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGl0bGU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgUXVlcnkgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUXVlcnknO1xuICBoZWxsbzogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBvc3RzOiBBcnJheTxQb3N0PjtcbiAgcG9zdD86IE1heWJlPFBvc3Q+O1xuICBtZT86IE1heWJlPFVzZXI+O1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeVBvc3RBcmdzID0ge1xuICBpZDogU2NhbGFyc1snSW50J107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyID0ge1xuICBfX3R5cGVuYW1lPzogJ1VzZXInO1xuICBfaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJSZXNwb25zZSA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnO1xuICBlcnJvcnM/OiBNYXliZTxBcnJheTxGaWVsZEVycm9yPj47XG4gIHVzZXI/OiBNYXliZTxVc2VyPjtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJuYW1lUGFzc3dvcmRJbnB1dCA9IHtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQ7XG59PjtcblxuXG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGxvZ2luOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAgICYgeyBlcnJvcnM/OiBNYXliZTxBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcicgfVxuICAgICAgJiBQaWNrPEZpZWxkRXJyb3IsICdmaWVsZCcgfCAnbWVzc2FnZSc+XG4gICAgKT4+LCB1c2VyPzogTWF5YmU8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAgICYgUGljazxVc2VyLCAnX2lkJyB8ICd1c2VybmFtZSc+XG4gICAgKT4gfVxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyByZWdpc3RlcjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIHsgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgICAgICYgUGljazxGaWVsZEVycm9yLCAnZmllbGQnIHwgJ21lc3NhZ2UnPlxuICAgICk+PiwgdXNlcj86IE1heWJlPChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAmIFBpY2s8VXNlciwgJ19pZCcgfCAndXNlcm5hbWUnPlxuICAgICk+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBNZVF1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgTWVRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBtZT86IE1heWJlPChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICYgUGljazxVc2VyLCAnX2lkJyB8ICd1c2VybmFtZSc+XG4gICk+IH1cbik7XG5cblxuZXhwb3J0IGNvbnN0IExvZ2luRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gTG9naW4oJG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dCEpIHtcbiAgbG9naW4ob3B0aW9uczogJG9wdGlvbnMpIHtcbiAgICBlcnJvcnMge1xuICAgICAgZmllbGRcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gICAgdXNlciB7XG4gICAgICBfaWRcbiAgICAgIHVzZXJuYW1lXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ2luTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPExvZ2luTXV0YXRpb24sIExvZ2luTXV0YXRpb25WYXJpYWJsZXM+KExvZ2luRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBSZWdpc3RlckRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFJlZ2lzdGVyKCR1c2VybmFtZTogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gIHJlZ2lzdGVyKG9wdGlvbnM6IHt1c2VybmFtZTogJHVzZXJuYW1lLCBwYXNzd29yZDogJHBhc3N3b3JkfSkge1xuICAgIGVycm9ycyB7XG4gICAgICBmaWVsZFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgICB1c2VyIHtcbiAgICAgIF9pZFxuICAgICAgdXNlcm5hbWVcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVnaXN0ZXJNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248UmVnaXN0ZXJNdXRhdGlvbiwgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcz4oUmVnaXN0ZXJEb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IE1lRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgTWUge1xuICBtZSB7XG4gICAgX2lkXG4gICAgdXNlcm5hbWVcbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZVF1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8TWVRdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8TWVRdWVyeT4oeyBxdWVyeTogTWVEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07IiwiaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIENvbG9yTW9kZVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCwgZGVkdXBFeGNoYW5nZSwgZmV0Y2hFeGNoYW5nZSwgUHJvdmlkZXIgfSBmcm9tIFwidXJxbFwiO1xuaW1wb3J0IHsgY2FjaGVFeGNoYW5nZSwgQ2FjaGUsIFF1ZXJ5SW5wdXQgfSBmcm9tIFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IHtcbiAgTG9naW5NdXRhdGlvbixcbiAgTWVEb2N1bWVudCxcbiAgLy9SZWdpc3Rlck11dGF0aW9uLFxuICBNZVF1ZXJ5LFxufSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcblxuZnVuY3Rpb24gYmV0dGVyVXBkYXRlUXVlcnk8UmVzdWx0LCBRdWVyeT4oXG4gIGNhY2hlOiBDYWNoZSxcbiAgcWk6IFF1ZXJ5SW5wdXQsXG4gIHJlc3VsdDogYW55LFxuICBmbjogKHI6IFJlc3VsdCwgcTogUXVlcnkpID0+IFF1ZXJ5XG4pIHtcbiAgcmV0dXJuIGNhY2hlLnVwZGF0ZVF1ZXJ5KHFpLCAoZGF0YSkgPT4gZm4ocmVzdWx0LCBkYXRhIGFzIGFueSkgYXMgYW55KTtcbn1cblxuY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCIsXG4gIGZldGNoT3B0aW9uczogeyBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIgfSwgLy8gKiBQZXJtZXQgZGUgcmFqb3V0ZXIgbGUgY29va2llXG4gIGV4Y2hhbmdlczogW1xuICAgIGRlZHVwRXhjaGFuZ2UsXG4gICAgY2FjaGVFeGNoYW5nZSh7XG4gICAgICB1cGRhdGVzOiB7XG4gICAgICAgIE11dGF0aW9uOiB7XG4gICAgICAgICAgbG9naW46IChfcmVzdWx0LCBfYXJncywgY2FjaGUsIF9pbmZvKSA9PiB7XG4gICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dpbk11dGF0aW9uLCBNZVF1ZXJ5PihcbiAgICAgICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcbiAgICAgICAgICAgICAgX3Jlc3VsdCxcbiAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmxvZ2luLmVycm9ycykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBtZTogcmVzdWx0LmxvZ2luLnVzZXIsXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8qIHJlZ2lzdGVyOiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcbiAgICAgICAgICBcbiAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PFJlZ2lzdGVyTXV0YXRpb24sIE1lUXVlcnk+KFxuICAgICAgICAgICAgICBjYWNoZSxcbiAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxuICAgICAgICAgICAgICBfcmVzdWx0LFxuICAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVnaXN0ZXIuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IG1lOiByZXN1bHQucmVnaXN0ZXIudXNlciB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LCovXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGZldGNoRXhjaGFuZ2UsXG4gIF0sXG59KTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBhbnkpIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgdmFsdWU9e2NsaWVudH0+XG4gICAgICA8Q2hha3JhUHJvdmlkZXIgcmVzZXRDU1MgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPENvbG9yTW9kZVByb3ZpZGVyXG4gICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgdXNlU3lzdGVtQ29sb3JNb2RlOiB0cnVlLFxuICAgICAgICAgICAgaW5pdGlhbENvbG9yTW9kZTogXCJkYXJrXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9Db2xvck1vZGVQcm92aWRlcj5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVCcmVha3BvaW50cyB9IGZyb20gJ0BjaGFrcmEtdWkvdGhlbWUtdG9vbHMnXG5cbmNvbnN0IGZvbnRzID0geyBtb25vOiBgJ01lbmxvJywgbW9ub3NwYWNlYCB9XG5cbmNvbnN0IGJyZWFrcG9pbnRzID0gY3JlYXRlQnJlYWtwb2ludHMoe1xuICBzbTogJzQwZW0nLFxuICBtZDogJzUyZW0nLFxuICBsZzogJzY0ZW0nLFxuICB4bDogJzgwZW0nLFxufSlcblxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG4gIGNvbG9yczoge1xuICAgIGJsYWNrOiAnIzE2MTYxRCcsXG4gIH0sXG4gIGZvbnRzLFxuICBicmVha3BvaW50cyxcbiAgaWNvbnM6IHtcbiAgICBsb2dvOiB7XG4gICAgICBwYXRoOiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICB3aWR0aD1cIjMwMDBcIlxuICAgICAgICAgIGhlaWdodD1cIjMxNjNcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzAwMCAzMTYzXCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgID5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjMwMDBcIiBoZWlnaHQ9XCIzMTYyLjk1XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTE0NzAuODkgMTQ0OC44MUwyMTcwIDI0ODguMTlIODIwVjcwNi4zOTJIMjE3MEwxNDcwLjg5IDE0NDguODFaTTE0MDguMjEgMTUxNS4zN0w5MDkuMTk2IDIwNDUuM1YyMzkzLjQ2SDE5OTguODRMMTQwOC4yMSAxNTE1LjM3WlwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICksXG4gICAgICB2aWV3Qm94OiAnMCAwIDMwMDAgMzE2MycsXG4gICAgfSxcbiAgfSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lXG4iLCJmdW5jdGlvbiBsKGEsIGIpIHtcbiAgYi50YWcgPSBhO1xuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gbSgpIHt9XG5cbmZ1bmN0aW9uIHAoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICB2YXIgYyA9IGEubGVuZ3RoO1xuICAgIGxldCBkID0gITEsXG4gICAgICBlID0gITEsXG4gICAgICBmID0gITEsXG4gICAgICBnID0gMDtcbiAgICBiKFxuICAgICAgbCgwLCBbXG4gICAgICAgIGZ1bmN0aW9uIChoKSB7XG4gICAgICAgICAgaWYgKGgpIHtcbiAgICAgICAgICAgIGQgPSAhMDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGUpIHtcbiAgICAgICAgICAgIGYgPSAhMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChlID0gZiA9ICEwOyBmICYmICFkOyApIHtcbiAgICAgICAgICAgICAgZyA8IGMgPyAoKGggPSBhW2ddKSwgKGcgPSAoZyArIDEpIHwgMCksIChmID0gITEpLCBiKGwoMSwgW2hdKSkpIDogKChkID0gITApLCBiKDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUgPSAhMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICBdKVxuICAgICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHIoKSB7fVxuXG5mdW5jdGlvbiB0KGEpIHtcbiAgYSgwKTtcbn1cblxuZnVuY3Rpb24gdShhKSB7XG4gIGxldCBiID0gITE7XG4gIGEoXG4gICAgbCgwLCBbXG4gICAgICBmdW5jdGlvbiAoYykge1xuICAgICAgICBjID8gKGIgPSAhMCkgOiBiIHx8IGEoMCk7XG4gICAgICB9LFxuICAgIF0pXG4gICk7XG59XG5cbmZ1bmN0aW9uIHcoYSkge1xuICBpZiAodm9pZCAwID09PSBhKSB7XG4gICAgcmV0dXJuICgoYSA9IFt2LCAwXSkudGFnID0gMjU2KSwgYTtcbiAgfVxuICBpZiAobnVsbCA9PT0gYSB8fCBhWzBdICE9PSB2KSB7XG4gICAgcmV0dXJuIGE7XG4gIH1cbiAgKGEgPSBbdiwgKGFbMV0gKyAxKSB8IDBdKS50YWcgPSAyNTY7XG4gIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiB4KGEpIHtcbiAgaWYgKG51bGwgPT09IGEgfHwgYVswXSAhPT0gdikge1xuICAgIHJldHVybiBhO1xuICB9XG4gIGlmICgwICE9PSAoYSA9IGFbMV0pKSB7XG4gICAgcmV0dXJuIFt2LCAoYSAtIDEpIHwgMF07XG4gIH1cbn1cblxuZnVuY3Rpb24geihhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgZnVuY3Rpb24gZChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiXG4gICAgICAgICAgPyBrICYmXG4gICAgICAgICAgICAoKGsgPSAhMSksXG4gICAgICAgICAgICB2b2lkIDAgIT09IChiID0gZS5zaGlmdCgpKVxuICAgICAgICAgICAgICA/ICgoYiA9IGEoeChiKSkpLCAoayA9ICEwKSwgYihkKSlcbiAgICAgICAgICAgICAgOiBxXG4gICAgICAgICAgICAgID8gYygwKVxuICAgICAgICAgICAgICA6IGcgfHwgKChnID0gITApLCBmKDApKSlcbiAgICAgICAgICA6IGIudGFnXG4gICAgICAgICAgPyBrICYmIChjKGIpLCBuID8gKG4gPSAhMSkgOiBoKDApKVxuICAgICAgICAgIDogKChoID0gYiA9IGJbMF0pLCAobiA9ICExKSwgYigwKSk7XG4gICAgICB9XG4gICAgICBsZXQgZSA9IFtdLFxuICAgICAgICBmID0gbSxcbiAgICAgICAgZyA9ICExLFxuICAgICAgICBoID0gbSxcbiAgICAgICAgayA9ICExLFxuICAgICAgICBuID0gITEsXG4gICAgICAgIHEgPSAhMTtcbiAgICAgIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGJcbiAgICAgICAgICA/IHEgfHwgKChxID0gITApLCBrIHx8IDAgIT09IGUubGVuZ3RoIHx8IGMoMCkpXG4gICAgICAgICAgOiBiLnRhZ1xuICAgICAgICAgID8gcSB8fCAoKGIgPSBiWzBdKSwgKGcgPSAhMSksIGsgPyBlLnB1c2goYikgOiAoKGIgPSBhKGIpKSwgKGsgPSAhMCksIGIoZCkpKVxuICAgICAgICAgIDogKGYgPSBiWzBdKTtcbiAgICAgIH0pO1xuICAgICAgYyhcbiAgICAgICAgbCgwLCBbXG4gICAgICAgICAgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgICAgIGlmICgocSB8fCAoKHEgPSAhMCksIGYoMSkpLCBrKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoayA9ICExKSwgaCgxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcSB8fCBnIHx8ICgoZyA9ICEwKSwgZigwKSksIGsgJiYgIW4gJiYgKChuID0gITApLCBoKDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBBKGEpIHtcbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIEIoYSkge1xuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gQyhhKSB7XG4gIHJldHVybiBhKDApO1xufVxuXG5mdW5jdGlvbiBEKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBsZXQgZSA9IG0sXG4gICAgICAgIGYgPSAhMSxcbiAgICAgICAgZyA9IFtdLFxuICAgICAgICBoID0gITE7XG4gICAgICBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiXG4gICAgICAgICAgPyBoIHx8ICgoaCA9ICEwKSwgMCA9PT0gZy5sZW5ndGggJiYgYygwKSlcbiAgICAgICAgICA6IGIudGFnXG4gICAgICAgICAgPyBoIHx8XG4gICAgICAgICAgICAoKGYgPSAhMSksXG4gICAgICAgICAgICAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gYihhKSB7XG4gICAgICAgICAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGFcbiAgICAgICAgICAgICAgICAgID8gMCAhPT0gZy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICAgKChnID0gZy5maWx0ZXIoZCkpLFxuICAgICAgICAgICAgICAgICAgICAoYSA9IDAgPT09IGcubGVuZ3RoKSxcbiAgICAgICAgICAgICAgICAgICAgaCAmJiBhID8gYygwKSA6ICFmICYmIGEgJiYgKChmID0gITApLCBlKDApKSlcbiAgICAgICAgICAgICAgICAgIDogYS50YWdcbiAgICAgICAgICAgICAgICAgID8gMCAhPT0gZy5sZW5ndGggJiYgKGMobCgxLCBbYVswXV0pKSwgaygwKSlcbiAgICAgICAgICAgICAgICAgIDogKChrID0gYSA9IGFbMF0pLCAoZyA9IGcuY29uY2F0KGEpKSwgYSgwKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZnVuY3Rpb24gZChhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgIT09IGs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGV0IGsgPSBtO1xuICAgICAgICAgICAgICAxID09PSBhLmxlbmd0aCA/IGEoYikgOiBhLmJpbmQobnVsbCwgYik7XG4gICAgICAgICAgICB9KShhKGJbMF0pKSxcbiAgICAgICAgICAgIGYgfHwgKChmID0gITApLCBlKDApKSlcbiAgICAgICAgICA6IChlID0gYlswXSk7XG4gICAgICB9KTtcbiAgICAgIGMoXG4gICAgICAgIGwoMCwgW1xuICAgICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICBhXG4gICAgICAgICAgICAgID8gKGggfHwgKChoID0gITApLCBlKGEpKSxcbiAgICAgICAgICAgICAgICBnLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjKGEpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIChnID0gW10pKVxuICAgICAgICAgICAgICA6IChmIHx8IGggPyAoZiA9ICExKSA6ICgoZiA9ICEwKSwgZSgwKSksIGcuZm9yRWFjaChDKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gRShhKSB7XG4gIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiBGKGEpIHtcbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIEcoYSkge1xuICByZXR1cm4gRChGKShhKTtcbn1cblxuZnVuY3Rpb24gSChhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGQgPSAhMTtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgZSkge1xuICAgICAgICAgIGQgfHwgKChkID0gITApLCBjKGUpKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhZykge1xuICAgICAgICAgIGQgfHwgKGEoZVswXSksIGMoZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBnID0gZVswXTtcbiAgICAgICAgICBjKFxuICAgICAgICAgICAgbCgwLCBbXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYSAmJiAoZCA9ICEwKSwgZyhhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIEooYSkge1xuICBhKDApO1xufVxuXG5mdW5jdGlvbiBLKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBmdW5jdGlvbiBkKGEpIHtcbiAgICAgICAgaCAmJlxuICAgICAgICAgICgnbnVtYmVyJyA9PSB0eXBlb2YgYVxuICAgICAgICAgICAgPyAoKGggPSAhMSksIG4gPyBjKGEpIDogZiB8fCAoKGYgPSAhMCksIGUoMCkpKVxuICAgICAgICAgICAgOiBhLnRhZ1xuICAgICAgICAgICAgPyAoYyhhKSwgayA/IChrID0gITEpIDogZygwKSlcbiAgICAgICAgICAgIDogKChnID0gYSA9IGFbMF0pLCAoayA9ICExKSwgYSgwKSkpO1xuICAgICAgfVxuICAgICAgbGV0IGUgPSBtLFxuICAgICAgICBmID0gITEsXG4gICAgICAgIGcgPSBtLFxuICAgICAgICBoID0gITEsXG4gICAgICAgIGsgPSAhMSxcbiAgICAgICAgbiA9ICExO1xuICAgICAgYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYlxuICAgICAgICAgID8gbiB8fCAoKG4gPSAhMCksIGggfHwgYygwKSlcbiAgICAgICAgICA6IGIudGFnXG4gICAgICAgICAgPyBuIHx8XG4gICAgICAgICAgICAoaCAmJiAoZygxKSwgKGcgPSBtKSksIGYgPyAoZiA9ICExKSA6ICgoZiA9ICEwKSwgZSgwKSksIChiID0gYShiWzBdKSksIChoID0gITApLCBiKGQpKVxuICAgICAgICAgIDogKGUgPSBiWzBdKTtcbiAgICAgIH0pO1xuICAgICAgYyhcbiAgICAgICAgbCgwLCBbXG4gICAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICAgIGlmICgobiB8fCAoKG4gPSAhMCksIGUoMSkpLCBoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoaCA9ICExKSwgZygxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbiB8fCBmIHx8ICgoZiA9ICEwKSwgZSgwKSksIGggJiYgIWsgJiYgKChrID0gITApLCBnKDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBMKGEpIHtcbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIE0oYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxldCBkID0gW10sXG4gICAgICAgIGUgPSBtO1xuICAgICAgcmV0dXJuIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGJcbiAgICAgICAgICA/IHAoZCkoYylcbiAgICAgICAgICA6IGIudGFnXG4gICAgICAgICAgPyAoZC5sZW5ndGggPj0gYSAmJiAwIDwgYSAmJiBkLnNoaWZ0KCksIGQucHVzaChiWzBdKSwgZSgwKSlcbiAgICAgICAgICA6ICgoYiA9IGJbMF0pLCAwID49IGEgPyAoYigxKSwgdShjKSkgOiAoKGUgPSBiKSwgYigwKSkpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gTihhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIGxldCBjID0gbSxcbiAgICAgIGQgPSAhMTtcbiAgICBiKGZ1bmN0aW9uIChlKSB7XG4gICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgZSA/IChkID0gITApIDogZS50YWcgPyBkIHx8IChhKGVbMF0pLCBjKDApKSA6ICgoYyA9IGUgPSBlWzBdKSwgZSgwKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghZCkge1xuICAgICAgICAgIHJldHVybiAoZCA9ICEwKSwgYygxKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBPKCkge31cblxuZnVuY3Rpb24gUSgpIHt9XG5cbmZ1bmN0aW9uIFIoKSB7fVxuXG5mdW5jdGlvbiBTKCkge31cblxuZnVuY3Rpb24gYnVmZmVyJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGZ1bmN0aW9uIGQoYSkge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYVxuICAgICAgICAgID8gayB8fCAoKGsgPSAhMCksIGYoMSksIDAgPCBlLmxlbmd0aCAmJiBjKGwoMSwgW2VdKSksIGMoMCkpXG4gICAgICAgICAgOiBhLnRhZ1xuICAgICAgICAgID8gIWsgJiYgMCA8IGUubGVuZ3RoICYmICgoYSA9IGUpLCAoZSA9IFtdKSwgYyhsKDEsIFthXSkpKVxuICAgICAgICAgIDogKGcgPSBhWzBdKTtcbiAgICAgIH1cbiAgICAgIGxldCBlID0gW10sXG4gICAgICAgIGYgPSBtLFxuICAgICAgICBnID0gbSxcbiAgICAgICAgaCA9ICExLFxuICAgICAgICBrID0gITE7XG4gICAgICBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiXG4gICAgICAgICAgPyBrIHx8ICgoayA9ICEwKSwgZygxKSwgMCA8IGUubGVuZ3RoICYmIGMobCgxLCBbZV0pKSwgYygwKSlcbiAgICAgICAgICA6IGIudGFnXG4gICAgICAgICAgPyBrIHx8IChlLnB1c2goYlswXSksIGggPyAoaCA9ICExKSA6ICgoaCA9ICEwKSwgZigwKSwgZygwKSkpXG4gICAgICAgICAgOiAoKGYgPSBiWzBdKSwgYShkKSk7XG4gICAgICB9KTtcbiAgICAgIGMoXG4gICAgICAgIGwoMCwgW1xuICAgICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICBpZiAoIWspIHtcbiAgICAgICAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGsgPSAhMCksIGYoMSksIGcoMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCFoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChoID0gITApLCBmKDApLCBnKDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29tYmluZSQxKGEsIGIpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGQgPSBtLFxuICAgICAgICBlID0gbSxcbiAgICAgICAgZiA9IHZvaWQgMCxcbiAgICAgICAgZyA9IHZvaWQgMCxcbiAgICAgICAgaCA9ICExLFxuICAgICAgICBrID0gMCxcbiAgICAgICAgbiA9ICExO1xuICAgICAgYShmdW5jdGlvbiAoYSkge1xuICAgICAgICB2YXIgYiA9IGc7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBhXG4gICAgICAgICAgPyAxID4ga1xuICAgICAgICAgICAgPyAoayA9IChrICsgMSkgfCAwKVxuICAgICAgICAgICAgOiBuIHx8ICgobiA9ICEwKSwgYygwKSlcbiAgICAgICAgICA6IGEudGFnXG4gICAgICAgICAgPyAoKGEgPSBhWzBdKSxcbiAgICAgICAgICAgIHZvaWQgMCAhPT0gYlxuICAgICAgICAgICAgICA/IG4gfHwgKChmID0gdyhhKSksIChoID0gITEpLCBjKGwoMSwgW1thLCB4KGIpXV0pKSlcbiAgICAgICAgICAgICAgOiAoKGYgPSB3KGEpKSwgaCA/IChoID0gITEpIDogZSgwKSkpXG4gICAgICAgICAgOiAoZCA9IGFbMF0pO1xuICAgICAgfSk7XG4gICAgICBiKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHZhciBiID0gZjtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGFcbiAgICAgICAgICA/IDEgPiBrXG4gICAgICAgICAgICA/IChrID0gKGsgKyAxKSB8IDApXG4gICAgICAgICAgICA6IG4gfHwgKChuID0gITApLCBjKDApKVxuICAgICAgICAgIDogYS50YWdcbiAgICAgICAgICA/ICgoYSA9IGFbMF0pLFxuICAgICAgICAgICAgdm9pZCAwICE9PSBiXG4gICAgICAgICAgICAgID8gbiB8fCAoKGcgPSB3KGEpKSwgKGggPSAhMSksIGMobCgxLCBbW3goYiksIGFdXSkpKVxuICAgICAgICAgICAgICA6ICgoZyA9IHcoYSkpLCBoID8gKGggPSAhMSkgOiBkKDApKSlcbiAgICAgICAgICA6IChlID0gYVswXSk7XG4gICAgICB9KTtcbiAgICAgIGMoXG4gICAgICAgIGwoMCwgW1xuICAgICAgICAgIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICBpZiAoIW4pIHtcbiAgICAgICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKG4gPSAhMCksIGQoMSksIGUoMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCFoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChoID0gITApLCBkKGMpLCBlKGMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfTtcbiAgfSkoYSwgYik7XG59XG5cbmZ1bmN0aW9uIGNvbmNhdCQxKGEpIHtcbiAgcmV0dXJuIHooQikocChhKSk7XG59XG5cbmZ1bmN0aW9uIGNvbmNhdEFsbCQxKGEpIHtcbiAgcmV0dXJuIHooQSkoYSk7XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGZ1bmN0aW9uIGQoKSB7XG4gICAgICAgIHZhciBhID0gZTtcbiAgICAgICAgdm9pZCAwICE9PSBhICYmICgoZSA9IHZvaWQgMCksIGNsZWFyVGltZW91dCh4KGEpKSk7XG4gICAgICB9XG4gICAgICBsZXQgZSA9IHZvaWQgMCxcbiAgICAgICAgZiA9ICExLFxuICAgICAgICBnID0gITE7XG4gICAgICByZXR1cm4gYihmdW5jdGlvbiAoYikge1xuICAgICAgICBpZiAoJ251bWJlcicgPT0gdHlwZW9mIGIpIHtcbiAgICAgICAgICBnIHx8ICgoZyA9ICEwKSwgdm9pZCAwICE9PSBlID8gKGYgPSAhMCkgOiBjKDApKTtcbiAgICAgICAgfSBlbHNlIGlmIChiLnRhZykge1xuICAgICAgICAgIGcgfHxcbiAgICAgICAgICAgIChkKCksXG4gICAgICAgICAgICAoZSA9IHcoXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgYyhiKTtcbiAgICAgICAgICAgICAgICBmICYmIGMoMCk7XG4gICAgICAgICAgICAgIH0sIGEoYlswXSkpXG4gICAgICAgICAgICApKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG4gPSBiWzBdO1xuICAgICAgICAgIGMoXG4gICAgICAgICAgICBsKDAsIFtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhID8gKChnID0gITApLCAoZiA9ICExKSwgZCgpLCBuKDEpKSA6IG4oMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBkZWxheSQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBsZXQgZCA9IDA7XG4gICAgICByZXR1cm4gYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYiB8fCBiLnRhZ1xuICAgICAgICAgID8gKChkID0gKGQgKyAxKSB8IDApLFxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIDAgIT09IGQgJiYgKChkID0gKGQgLSAxKSB8IDApLCBjKGIpKTtcbiAgICAgICAgICAgIH0sIGEpKVxuICAgICAgICAgIDogYyhiKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbHRlciQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBsZXQgZCA9IG07XG4gICAgICByZXR1cm4gYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYiA/IGMoYikgOiBiLnRhZyA/IChhKGJbMF0pID8gYyhiKSA6IGQoMCkpIDogKChkID0gYlswXSksIGMoYikpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaCQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgTihhKShiKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZnJvbUNhbGxiYWckMihhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIGZ1bmN0aW9uIGMoYSwgYykge1xuICAgICAgc3dpdGNoIChhKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBiKFxuICAgICAgICAgICAgbCgwLCBbXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgPyBjKDIpIDogYygxKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgYihsKDEsIFtjXSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBiKDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMiA9PT0gYS5sZW5ndGggPyBhKDAsIGMpIDogYS5iaW5kKG51bGwsIDAsIGMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmcm9tRG9tRXZlbnQkMShhLCBiKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGZ1bmN0aW9uIGQoYSkge1xuICAgICAgICBjKGwoMSwgW2FdKSk7XG4gICAgICB9XG4gICAgICBjKFxuICAgICAgICBsKDAsIFtcbiAgICAgICAgICBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgYyAmJiBhLnJlbW92ZUV2ZW50TGlzdGVuZXIoYiwgZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoYiwgZCk7XG4gICAgfTtcbiAgfSkoYSwgYik7XG59XG5cbmZ1bmN0aW9uIGZyb21MaXN0JDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICBsZXQgYyA9ICExLFxuICAgICAgZCA9ICExLFxuICAgICAgZSA9ICExLFxuICAgICAgZiA9IGE7XG4gICAgYihcbiAgICAgIGwoMCwgW1xuICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICBjID0gITA7XG4gICAgICAgICAgfSBlbHNlIGlmIChkKSB7XG4gICAgICAgICAgICBlID0gITA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoZCA9IGUgPSAhMDsgZSAmJiAhYzsgKSB7XG4gICAgICAgICAgICAgIChhID0gZikgPyAoKGYgPSBhWzFdKSwgKGUgPSAhMSksIGIobCgxLCBbYVswXV0pKSkgOiAoKGMgPSAhMCksIGIoMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZCA9ICExO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZnJvbU9ic2VydmFibGUkMihhKSB7XG4gIHZhciBiID0gdm9pZCAwICE9PSBhW1BdID8gYVtQXSgpIDogYTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGMgPSBiLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoYykge1xuICAgICAgICBhKGwoMSwgW2NdKSk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYSgwKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogUSxcbiAgICB9KTtcbiAgICBhKFxuICAgICAgbCgwLCBbXG4gICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgIHJldHVybiBjLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgXSlcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmcm9tUHJvbWlzZSQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgbGV0IGMgPSAhMTtcbiAgICBhLnRoZW4oZnVuY3Rpb24gKGEpIHtcbiAgICAgIGMgfHwgKGIobCgxLCBbYV0pKSwgYigwKSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZvaWQgMCk7XG4gICAgfSk7XG4gICAgYihcbiAgICAgIGwoMCwgW1xuICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIGEgJiYgKGMgPSAhMCk7XG4gICAgICAgIH0sXG4gICAgICBdKVxuICAgICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZyb21WYWx1ZSQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgbGV0IGMgPSAhMTtcbiAgICBiKFxuICAgICAgbCgwLCBbXG4gICAgICAgIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgZCA/IChjID0gITApIDogYyB8fCAoKGMgPSAhMCksIGIobCgxLCBbYV0pKSwgYigwKSk7XG4gICAgICAgIH0sXG4gICAgICBdKVxuICAgICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludGVydmFsJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICBsZXQgYyA9IDA7XG4gICAgdmFyIGQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgYSA9IGM7XG4gICAgICBjID0gKGMgKyAxKSB8IDA7XG4gICAgICBiKGwoMSwgW2FdKSk7XG4gICAgfSwgYSk7XG4gICAgYihcbiAgICAgIGwoMCwgW1xuICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIGEgJiYgY2xlYXJJbnRlcnZhbChkKTtcbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZSQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgbGV0IGMgPSByLFxuICAgICAgZCA9ICExO1xuICAgIGMgPSBhKHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIGQgfHwgYihsKDEsIFthXSkpO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGQgfHwgKChkID0gITApLCBiKDApKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgYihcbiAgICAgIGwoMCwgW1xuICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIGlmIChhICYmICFkKSB7XG4gICAgICAgICAgICByZXR1cm4gKGQgPSAhMCksIGMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICBdKVxuICAgICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VTdWJqZWN0JDEoKSB7XG4gIGxldCBhID0gW10sXG4gICAgYiA9ICExO1xuICByZXR1cm4ge1xuICAgIHNvdXJjZTogZnVuY3Rpb24gKGMpIHtcbiAgICAgIGZ1bmN0aW9uIGIoYSkge1xuICAgICAgICByZXR1cm4gYSAhPT0gYztcbiAgICAgIH1cbiAgICAgIGEgPSBhLmNvbmNhdChjKTtcbiAgICAgIGMoXG4gICAgICAgIGwoMCwgW1xuICAgICAgICAgIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICBjICYmIChhID0gYS5maWx0ZXIoYikpO1xuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH0sXG4gICAgbmV4dDogZnVuY3Rpb24gKGMpIHtcbiAgICAgIGIgfHxcbiAgICAgICAgYS5mb3JFYWNoKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgYShsKDEsIFtjXSkpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBiIHx8ICgoYiA9ICEwKSwgYS5mb3JFYWNoKHQpKTtcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBtYXAkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgYiA9ICdudW1iZXInID09IHR5cGVvZiBiID8gMCA6IGIudGFnID8gbCgxLCBbYShiWzBdKV0pIDogbCgwLCBbYlswXV0pO1xuICAgICAgICBjKGIpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWVyZ2UkMShhKSB7XG4gIHJldHVybiBEKEUpKHAoYSkpO1xufVxuXG5mdW5jdGlvbiBuZXZlciQxKGEpIHtcbiAgYShsKDAsIFttXSkpO1xufVxuXG5mdW5jdGlvbiBvbkVuZCQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBsZXQgZCA9ICExO1xuICAgICAgcmV0dXJuIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgaWYgKCdudW1iZXInID09IHR5cGVvZiBiKSB7XG4gICAgICAgICAgaWYgKGQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZCA9ICEwO1xuICAgICAgICAgIGMoYik7XG4gICAgICAgICAgcmV0dXJuIGEoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYi50YWcpIHtcbiAgICAgICAgICBkIHx8IGMoYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGUgPSBiWzBdO1xuICAgICAgICAgIGMoXG4gICAgICAgICAgICBsKDAsIFtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjID8gKChkID0gITApLCBlKGMpLCBhKCkpIDogZShjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9uU3RhcnQkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGIgPyBjKGIpIDogYi50YWcgPyBjKGIpIDogKGMoYiksIGEoKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBwaXBlKCkge1xuICBmb3IgKHZhciBhID0gYXJndW1lbnRzLCBiID0gYXJndW1lbnRzWzBdLCBjID0gMSwgZCA9IGFyZ3VtZW50cy5sZW5ndGg7IGMgPCBkOyBjKyspIHtcbiAgICBiID0gYVtjXShiKTtcbiAgfVxuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gcHVibGlzaCQxKGEpIHtcbiAgcmV0dXJuIE4oTykoYSk7XG59XG5cbmZ1bmN0aW9uIHNhbXBsZSQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBsZXQgZCA9IG0sXG4gICAgICAgIGUgPSBtLFxuICAgICAgICBmID0gdm9pZCAwLFxuICAgICAgICBnID0gITEsXG4gICAgICAgIGggPSAhMTtcbiAgICAgIGIoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGFcbiAgICAgICAgICA/IGggfHwgKChoID0gITApLCBlKDEpLCBjKDApKVxuICAgICAgICAgIDogYS50YWdcbiAgICAgICAgICA/ICgoZiA9IHcoYVswXSkpLCBnID8gKGcgPSAhMSkgOiAoKGcgPSAhMCksIGUoMCksIGQoMCkpKVxuICAgICAgICAgIDogKGQgPSBhWzBdKTtcbiAgICAgIH0pO1xuICAgICAgYShmdW5jdGlvbiAoYSkge1xuICAgICAgICB2YXIgYiA9IGY7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBhXG4gICAgICAgICAgPyBoIHx8ICgoaCA9ICEwKSwgZCgxKSwgYygwKSlcbiAgICAgICAgICA6IGEudGFnXG4gICAgICAgICAgPyB2b2lkIDAgPT09IGIgfHwgaCB8fCAoKGYgPSB2b2lkIDApLCBjKGwoMSwgW3goYildKSkpXG4gICAgICAgICAgOiAoZSA9IGFbMF0pO1xuICAgICAgfSk7XG4gICAgICBjKFxuICAgICAgICBsKDAsIFtcbiAgICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgaWYgKCFoKSB7XG4gICAgICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChoID0gITApLCBkKDEpLCBlKDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghZykge1xuICAgICAgICAgICAgICAgIHJldHVybiAoZyA9ICEwKSwgZCgwKSwgZSgwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNjYW4kMShhLCBiKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZCkge1xuICAgICAgICBsZXQgZSA9IGI7XG4gICAgICAgIHJldHVybiBjKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGNcbiAgICAgICAgICAgID8gKGMgPSAwKVxuICAgICAgICAgICAgOiBjLnRhZ1xuICAgICAgICAgICAgPyAoKGUgPSBhKGUsIGNbMF0pKSwgKGMgPSBsKDEsIFtlXSkpKVxuICAgICAgICAgICAgOiAoYyA9IGwoMCwgW2NbMF1dKSk7XG4gICAgICAgICAgZChjKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH07XG4gIH0pKGEsIGIpO1xufVxuXG5mdW5jdGlvbiBzaGFyZSQxKGEpIHtcbiAgZnVuY3Rpb24gYihhKSB7XG4gICAgJ251bWJlcicgPT0gdHlwZW9mIGFcbiAgICAgID8gKGMuZm9yRWFjaChKKSwgKGMgPSBbXSkpXG4gICAgICA6IGEudGFnXG4gICAgICA/ICgoZSA9ICExKSxcbiAgICAgICAgYy5mb3JFYWNoKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICAgYihhKTtcbiAgICAgICAgfSkpXG4gICAgICA6IChkID0gYVswXSk7XG4gIH1cbiAgbGV0IGMgPSBbXSxcbiAgICBkID0gbSxcbiAgICBlID0gITE7XG4gIHJldHVybiBmdW5jdGlvbiAoZikge1xuICAgIGZ1bmN0aW9uIGcoYSkge1xuICAgICAgcmV0dXJuIGEgIT09IGY7XG4gICAgfVxuICAgIGMgPSBjLmNvbmNhdChmKTtcbiAgICAxID09PSBjLmxlbmd0aCAmJiBhKGIpO1xuICAgIGYoXG4gICAgICBsKDAsIFtcbiAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgaWYgKCgoYyA9IGMuZmlsdGVyKGcpKSwgMCA9PT0gYy5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlIHx8ICgoZSA9ICEwKSwgZChhKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgXSlcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBza2lwJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxldCBkID0gbSxcbiAgICAgICAgZSA9IGE7XG4gICAgICByZXR1cm4gYihmdW5jdGlvbiAoYSkge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYVxuICAgICAgICAgID8gYyhhKVxuICAgICAgICAgIDogYS50YWdcbiAgICAgICAgICA/IDAgPCBlXG4gICAgICAgICAgICA/ICgoZSA9IChlIC0gMSkgfCAwKSwgZCgwKSlcbiAgICAgICAgICAgIDogYyhhKVxuICAgICAgICAgIDogKChkID0gYVswXSksIGMoYSkpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2tpcFVudGlsJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGZ1bmN0aW9uIGQoYSkge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYVxuICAgICAgICAgID8gZyAmJiAoKGsgPSAhMCksIGUoMSkpXG4gICAgICAgICAgOiBhLnRhZ1xuICAgICAgICAgID8gKChnID0gITEpLCBmKDEpKVxuICAgICAgICAgIDogKChmID0gYSA9IGFbMF0pLCBhKDApKTtcbiAgICAgIH1cbiAgICAgIGxldCBlID0gbSxcbiAgICAgICAgZiA9IG0sXG4gICAgICAgIGcgPSAhMCxcbiAgICAgICAgaCA9ICExLFxuICAgICAgICBrID0gITE7XG4gICAgICBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiXG4gICAgICAgICAgPyAoZyAmJiBmKDEpLCAoayA9ICEwKSwgYygwKSlcbiAgICAgICAgICA6IGIudGFnXG4gICAgICAgICAgPyBnIHx8IGtcbiAgICAgICAgICAgID8gaFxuICAgICAgICAgICAgICA/IChoID0gITEpXG4gICAgICAgICAgICAgIDogKChoID0gITApLCBlKDApLCBmKDApKVxuICAgICAgICAgICAgOiAoKGggPSAhMSksIGMoYikpXG4gICAgICAgICAgOiAoKGUgPSBiWzBdKSwgYShkKSk7XG4gICAgICB9KTtcbiAgICAgIGMoXG4gICAgICAgIGwoMCwgW1xuICAgICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICBpZiAoIWspIHtcbiAgICAgICAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoKChrID0gITApLCBlKDEpLCBnKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGYoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGggfHwgKChoID0gITApLCBnICYmIGYoMCksIGUoMCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2tpcFdoaWxlJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxldCBkID0gbSxcbiAgICAgICAgZSA9ICEwO1xuICAgICAgcmV0dXJuIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGJcbiAgICAgICAgICA/IGMoYilcbiAgICAgICAgICA6IGIudGFnXG4gICAgICAgICAgPyBlXG4gICAgICAgICAgICA/IGEoYlswXSlcbiAgICAgICAgICAgICAgPyBkKDApXG4gICAgICAgICAgICAgIDogKChlID0gITEpLCBjKGIpKVxuICAgICAgICAgICAgOiBjKGIpXG4gICAgICAgICAgOiAoKGQgPSBiWzBdKSwgYyhiKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hBbGwkMShhKSB7XG4gIHJldHVybiBLKEwpKGEpO1xufVxuXG5mdW5jdGlvbiB0YWtlJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxldCBkID0gITEsXG4gICAgICAgIGUgPSAwLFxuICAgICAgICBmID0gbTtcbiAgICAgIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGJcbiAgICAgICAgICA/IGQgfHwgKChkID0gITApLCBjKDApKVxuICAgICAgICAgIDogYi50YWdcbiAgICAgICAgICA/IGUgPCBhICYmICFkICYmICgoZSA9IChlICsgMSkgfCAwKSwgYyhiKSwgIWQgJiYgZSA+PSBhICYmICgoZCA9ICEwKSwgYygwKSwgZigxKSkpXG4gICAgICAgICAgOiAoKGIgPSBiWzBdKSwgMCA+PSBhID8gKChkID0gITApLCBjKDApLCBiKDEpKSA6IChmID0gYikpO1xuICAgICAgfSk7XG4gICAgICBjKFxuICAgICAgICBsKDAsIFtcbiAgICAgICAgICBmdW5jdGlvbiAoYikge1xuICAgICAgICAgICAgaWYgKCFkKSB7XG4gICAgICAgICAgICAgIGlmIChiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChkID0gITApLCBmKDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChlIDwgYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmKDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGFrZVVudGlsJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGZ1bmN0aW9uIGQoYSkge1xuICAgICAgICAnbnVtYmVyJyAhPSB0eXBlb2YgYSAmJiAoYS50YWcgPyAoKGUgPSAhMCksIGYoMSksIGMoMCkpIDogKChnID0gYSA9IGFbMF0pLCBhKDApKSk7XG4gICAgICB9XG4gICAgICBsZXQgZSA9ICExLFxuICAgICAgICBmID0gbSxcbiAgICAgICAgZyA9IG07XG4gICAgICBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiID8gZSB8fCAoKGUgPSAhMCksIGcoMSksIGMoMCkpIDogYi50YWcgPyBlIHx8IGMoYikgOiAoKGYgPSBiWzBdKSwgYShkKSk7XG4gICAgICB9KTtcbiAgICAgIGMoXG4gICAgICAgIGwoMCwgW1xuICAgICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICBpZiAoIWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGEgPyAoKGUgPSAhMCksIGYoMSksIGcoMSkpIDogZigwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiB0YWtlV2hpbGUkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGQgPSBtLFxuICAgICAgICBlID0gITE7XG4gICAgICByZXR1cm4gYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYlxuICAgICAgICAgID8gZSB8fCAoKGUgPSAhMCksIGMoMCkpXG4gICAgICAgICAgOiBiLnRhZ1xuICAgICAgICAgID8gZSB8fCAoYShiWzBdKSA/IGMoYikgOiAoKGUgPSAhMCksIGMoMCksIGQoMSkpKVxuICAgICAgICAgIDogKChkID0gYlswXSksIGMoYikpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhyb3R0bGUkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgZnVuY3Rpb24gZCgpIHtcbiAgICAgICAgdm9pZCAwICE9PSBnICYmIGNsZWFyVGltZW91dCh4KGcpKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIGcgPSB2b2lkIDA7XG4gICAgICAgIGYgPSAhMTtcbiAgICAgIH1cbiAgICAgIGxldCBmID0gITEsXG4gICAgICAgIGcgPSB2b2lkIDA7XG4gICAgICByZXR1cm4gYihmdW5jdGlvbiAoYikge1xuICAgICAgICBpZiAoJ251bWJlcicgPT0gdHlwZW9mIGIpIHtcbiAgICAgICAgICBkKCksIGMoMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYi50YWcpIHtcbiAgICAgICAgICBmIHx8ICgoZiA9ICEwKSwgZCgpLCAoZyA9IHcoc2V0VGltZW91dChlLCBhKGJbMF0pKSkpLCBjKGIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaCA9IGJbMF07XG4gICAgICAgICAgYyhcbiAgICAgICAgICAgIGwoMCwgW1xuICAgICAgICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhID8gKGQoKSwgaCgxKSkgOiBoKGEpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiB0b0FycmF5JDEoYSkge1xuICBsZXQgYiA9IFtdLFxuICAgIGMgPSBtLFxuICAgIGQgPSAhMTtcbiAgYShmdW5jdGlvbiAoYSkge1xuICAgICdudW1iZXInID09IHR5cGVvZiBhID8gKGQgPSAhMCkgOiBhLnRhZyA/IChiLnB1c2goYVswXSksIGMoMCkpIDogKChjID0gYSA9IGFbMF0pLCBhKDApKTtcbiAgfSk7XG4gIGQgfHwgYygxKTtcbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIHRvQ2FsbGJhZyQyKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiLCBjKSB7XG4gICAgaWYgKDAgPT09IGIpIHtcbiAgICAgIHJldHVybiBhKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIGZ1bmN0aW9uIGIoYSkge1xuICAgICAgICAgIHN3aXRjaCAoYSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBkKDApO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBkKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJ251bWJlcicgPT0gdHlwZW9mIGEpIHtcbiAgICAgICAgICByZXR1cm4gMiA9PT0gYy5sZW5ndGggPyBjKDIsIHZvaWQgMCkgOiBjLmJpbmQobnVsbCwgMiwgdm9pZCAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYS50YWcpIHtcbiAgICAgICAgICByZXR1cm4gKGEgPSBhWzBdKSwgMiA9PT0gYy5sZW5ndGggPyBjKDEsIGEpIDogYy5iaW5kKG51bGwsIDEsIGEpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkID0gYVswXTtcbiAgICAgICAgcmV0dXJuIDIgPT09IGMubGVuZ3RoID8gYygwLCBiKSA6IGMuYmluZChudWxsLCAwLCBiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9PYnNlcnZhYmxlJDIoYSkge1xuICB2YXIgYiA9IHtcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIChiLCBkLCBlKSB7XG4gICAgICB2YXIgYyA9ICgnb2JqZWN0JyA9PSB0eXBlb2YgYiA/IGIubmV4dC5iaW5kKGIpIDogYikgfHwgUixcbiAgICAgICAgZyA9ICgnb2JqZWN0JyA9PSB0eXBlb2YgYiA/IGIuY29tcGxldGUuYmluZChiKSA6IGUpIHx8IFM7XG4gICAgICBsZXQgaCA9IG0sXG4gICAgICAgIGsgPSAhMTtcbiAgICAgIGEoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgaWYgKCdudW1iZXInID09IHR5cGVvZiBhKSB7XG4gICAgICAgICAgcmV0dXJuIChrID0gITApLCBnKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEudGFnKSB7XG4gICAgICAgICAgaWYgKGspIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYyhhWzBdKTtcbiAgICAgICAgICByZXR1cm4gaCgwKTtcbiAgICAgICAgfVxuICAgICAgICBoID0gYSA9IGFbMF07XG4gICAgICAgIGEoMCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFrKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuY2xvc2VkID0gITEpLCAoayA9ICEwKSwgaCgxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlZDogITEsXG4gICAgICB9O1xuICAgIH0sXG4gIH07XG4gIGJbUF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGI7XG4gIH07XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiB0b1Byb21pc2UkMShhKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYikge1xuICAgIE0oMSkoYSkoZnVuY3Rpb24gKGEpIHtcbiAgICAgIGlmICgnbnVtYmVyJyAhPSB0eXBlb2YgYSkge1xuICAgICAgICBpZiAoYS50YWcpIHtcbiAgICAgICAgICBiKGFbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFbMF0oMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbnZhciB2ID0gW10sXG4gIFAgPVxuICAgICdmdW5jdGlvbicgPT0gdHlwZW9mIFN5bWJvbFxuICAgICAgPyBTeW1ib2wub2JzZXJ2YWJsZSB8fCAoU3ltYm9sLm9ic2VydmFibGUgPSBTeW1ib2woJ29ic2VydmFibGUnKSlcbiAgICAgIDogJ0BAb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCB7XG4gIGJ1ZmZlciQxIGFzIGJ1ZmZlcixcbiAgY29tYmluZSQxIGFzIGNvbWJpbmUsXG4gIGNvbmNhdCQxIGFzIGNvbmNhdCxcbiAgY29uY2F0QWxsJDEgYXMgY29uY2F0QWxsLFxuICB6IGFzIGNvbmNhdE1hcCxcbiAgZGVib3VuY2UkMSBhcyBkZWJvdW5jZSxcbiAgZGVsYXkkMSBhcyBkZWxheSxcbiAgdSBhcyBlbXB0eSxcbiAgZmlsdGVyJDEgYXMgZmlsdGVyLFxuICBHIGFzIGZsYXR0ZW4sXG4gIGZvckVhY2gkMSBhcyBmb3JFYWNoLFxuICBwIGFzIGZyb21BcnJheSxcbiAgZnJvbUNhbGxiYWckMiBhcyBmcm9tQ2FsbGJhZyxcbiAgZnJvbURvbUV2ZW50JDEgYXMgZnJvbURvbUV2ZW50LFxuICBmcm9tTGlzdCQxIGFzIGZyb21MaXN0LFxuICBmcm9tT2JzZXJ2YWJsZSQyIGFzIGZyb21PYnNlcnZhYmxlLFxuICBmcm9tUHJvbWlzZSQxIGFzIGZyb21Qcm9taXNlLFxuICBmcm9tVmFsdWUkMSBhcyBmcm9tVmFsdWUsXG4gIGludGVydmFsJDEgYXMgaW50ZXJ2YWwsXG4gIG1ha2UkMSBhcyBtYWtlLFxuICBtYWtlU3ViamVjdCQxIGFzIG1ha2VTdWJqZWN0LFxuICBtYXAkMSBhcyBtYXAsXG4gIG1lcmdlJDEgYXMgbWVyZ2UsXG4gIEcgYXMgbWVyZ2VBbGwsXG4gIEQgYXMgbWVyZ2VNYXAsXG4gIG5ldmVyJDEgYXMgbmV2ZXIsXG4gIG9uRW5kJDEgYXMgb25FbmQsXG4gIEggYXMgb25QdXNoLFxuICBvblN0YXJ0JDEgYXMgb25TdGFydCxcbiAgcGlwZSxcbiAgcHVibGlzaCQxIGFzIHB1Ymxpc2gsXG4gIHNhbXBsZSQxIGFzIHNhbXBsZSxcbiAgc2NhbiQxIGFzIHNjYW4sXG4gIHNoYXJlJDEgYXMgc2hhcmUsXG4gIHNraXAkMSBhcyBza2lwLFxuICBza2lwVW50aWwkMSBhcyBza2lwVW50aWwsXG4gIHNraXBXaGlsZSQxIGFzIHNraXBXaGlsZSxcbiAgTiBhcyBzdWJzY3JpYmUsXG4gIHN3aXRjaEFsbCQxIGFzIHN3aXRjaEFsbCxcbiAgSyBhcyBzd2l0Y2hNYXAsXG4gIHRha2UkMSBhcyB0YWtlLFxuICBNIGFzIHRha2VMYXN0LFxuICB0YWtlVW50aWwkMSBhcyB0YWtlVW50aWwsXG4gIHRha2VXaGlsZSQxIGFzIHRha2VXaGlsZSxcbiAgSCBhcyB0YXAsXG4gIHRocm90dGxlJDEgYXMgdGhyb3R0bGUsXG4gIHRvQXJyYXkkMSBhcyB0b0FycmF5LFxuICB0b0NhbGxiYWckMiBhcyB0b0NhbGxiYWcsXG4gIHRvT2JzZXJ2YWJsZSQyIGFzIHRvT2JzZXJ2YWJsZSxcbiAgdG9Qcm9taXNlJDEgYXMgdG9Qcm9taXNlLFxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVycWxcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=