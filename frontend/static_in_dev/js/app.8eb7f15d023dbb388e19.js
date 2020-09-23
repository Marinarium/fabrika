/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors","styles"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Root.tsx":
/*!**********************!*\
  !*** ./src/Root.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var connected_react_router_1 = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var root_1 = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
var configureStore_1 = tslib_1.__importDefault(__webpack_require__(/*! ./redux/store/configureStore */ "./src/redux/store/configureStore.ts"));
var configureStore_2 = __webpack_require__(/*! ./redux/store/configureStore */ "./src/redux/store/configureStore.ts");
var scrollToTop_1 = tslib_1.__importDefault(__webpack_require__(/*! ./components/scrollToTop */ "./src/components/scrollToTop/index.ts"));
var MainRoutes_1 = tslib_1.__importDefault(__webpack_require__(/*! ./routes/MainRoutes */ "./src/routes/MainRoutes.tsx"));
var GlobalStyles_1 = tslib_1.__importDefault(__webpack_require__(/*! ./style/GlobalStyles */ "./src/style/GlobalStyles.ts"));
var registration_1 = tslib_1.__importDefault(__webpack_require__(/*! ./pages/registration */ "./src/pages/registration/index.ts"));
var registerServiceWorker_1 = tslib_1.__importDefault(__webpack_require__(/*! ./services/sw/registerServiceWorker */ "./src/services/sw/registerServiceWorker.ts"));
var logoutRoute_1 = tslib_1.__importDefault(__webpack_require__(/*! ./components/logoutRoute */ "./src/components/logoutRoute/index.ts"));
var store = configureStore_1.default({}).store;
var Root = (function (_super) {
    tslib_1.__extends(Root, _super);
    function Root() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Root.prototype.componentDidMount = function () {
        registerServiceWorker_1.default();
    };
    Root.prototype.componentDidCatch = function (error, info) {
        console.log('App error: ', error);
        console.log('App error info: ', info);
    };
    Root.prototype.render = function () {
        return (react_1.default.createElement(react_redux_1.Provider, { store: store },
            react_1.default.createElement(styled_components_1.ThemeProvider, { theme: {} },
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(connected_react_router_1.ConnectedRouter, { history: configureStore_2.history },
                        react_1.default.createElement(scrollToTop_1.default, null,
                            react_1.default.createElement(react_router_dom_1.Switch, null,
                                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/registration" },
                                    react_1.default.createElement(registration_1.default, null)),
                                react_1.default.createElement(MainRoutes_1.default, null),
                                react_1.default.createElement(logoutRoute_1.default, { path: "/logout" })))),
                    react_1.default.createElement(GlobalStyles_1.default, null)))));
    };
    return Root;
}(react_2.Component));
exports.default = root_1.hot(Root);


/***/ }),

/***/ "./src/components/logoutRoute/LogoutRoute.tsx":
/*!****************************************************!*\
  !*** ./src/components/logoutRoute/LogoutRoute.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function LogoutRoute(props) {
    var disconnectUser = props.disconnectUser;
    react_2.useEffect(function () { return disconnectUser(); });
    return (react_1.default.createElement(react_router_dom_1.Route, tslib_1.__assign({}, props),
        react_1.default.createElement(react_router_dom_1.Redirect, { to: { pathname: '/login' } })));
}
LogoutRoute.displayName = 'LogoutRoute';
exports.default = LogoutRoute;


/***/ }),

/***/ "./src/components/logoutRoute/index.ts":
/*!*********************************************!*\
  !*** ./src/components/logoutRoute/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var userAuthActions = tslib_1.__importStar(__webpack_require__(/*! ../../redux/modules/userAuth */ "./src/redux/modules/userAuth/index.ts"));
var LogoutRoute_1 = tslib_1.__importDefault(__webpack_require__(/*! ./LogoutRoute */ "./src/components/logoutRoute/LogoutRoute.tsx"));
var mapStateToProps = function (state) {
    return {};
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators(tslib_1.__assign({}, userAuthActions), dispatch);
};
exports.default = redux_1.compose(react_redux_1.connect(mapStateToProps, mapDispatchToProps), react_router_dom_1.withRouter)(LogoutRoute_1.default);


/***/ }),

/***/ "./src/components/privateRoute/PrivateRoute.tsx":
/*!******************************************************!*\
  !*** ./src/components/privateRoute/PrivateRoute.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function PrivateRoute(props) {
    var InnerComponent = props.component, rest = tslib_1.__rest(props, ["component"]);
    var location = props.location, isAuthenticated = props.isAuthenticated;
    return (react_1.default.createElement(react_router_dom_1.Route, tslib_1.__assign({}, rest, { render: function (props) {
            return isAuthenticated ? (react_1.default.createElement(InnerComponent, tslib_1.__assign({}, props))) : (react_1.default.createElement(react_router_dom_1.Redirect, { to: { pathname: '/login', state: { from: location } } }));
        } })));
}
PrivateRoute.displayName = 'PrivateRoute';
exports.default = PrivateRoute;


/***/ }),

/***/ "./src/components/privateRoute/index.ts":
/*!**********************************************!*\
  !*** ./src/components/privateRoute/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var userAuthActions = tslib_1.__importStar(__webpack_require__(/*! ../../redux/modules/userAuth */ "./src/redux/modules/userAuth/index.ts"));
var PrivateRoute_1 = tslib_1.__importDefault(__webpack_require__(/*! ./PrivateRoute */ "./src/components/privateRoute/PrivateRoute.tsx"));
var mapStateToProps = function (state) {
    return {
        isAuthenticated: state.userAuth.isAuthenticated,
    };
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators(tslib_1.__assign({}, userAuthActions), dispatch);
};
exports.default = redux_1.compose(react_redux_1.connect(mapStateToProps, mapDispatchToProps), react_router_dom_1.withRouter)(PrivateRoute_1.default);


/***/ }),

/***/ "./src/components/scrollToTop/ScrollToTop.tsx":
/*!****************************************************!*\
  !*** ./src/components/scrollToTop/ScrollToTop.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var useScrollToTopOnLocationChange_1 = __webpack_require__(/*! ./hooks/useScrollToTopOnLocationChange */ "./src/components/scrollToTop/hooks/useScrollToTopOnLocationChange/index.ts");
function ScrollToTop(_a) {
    var children = _a.children;
    var location = react_router_dom_1.useLocation();
    useScrollToTopOnLocationChange_1.useScrollToTopOnLocationChange(location);
    return react_1.default.createElement(react_1.Fragment, null, children);
}
ScrollToTop.displayName = 'ScrollToTop';
exports.default = ScrollToTop;


/***/ }),

/***/ "./src/components/scrollToTop/hooks/useScrollToTopOnLocationChange/index.ts":
/*!**********************************************************************************!*\
  !*** ./src/components/scrollToTop/hooks/useScrollToTopOnLocationChange/index.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useScrollToTopOnLocationChange = void 0;
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function useScrollToTopOnLocationChange(location) {
    var prevLocation = react_1.useRef(null);
    react_1.useEffect(function () {
        prevLocation.current = location;
    }, []);
    react_1.useEffect(function () {
        if (prevLocation.current !== location) {
            window && window.scrollTo(0, 0);
            prevLocation.current = location;
        }
    }, [location]);
}
exports.useScrollToTopOnLocationChange = useScrollToTopOnLocationChange;


/***/ }),

/***/ "./src/components/scrollToTop/index.ts":
/*!*********************************************!*\
  !*** ./src/components/scrollToTop/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var ScrollToTop_1 = tslib_1.__importDefault(__webpack_require__(/*! ./ScrollToTop */ "./src/components/scrollToTop/ScrollToTop.tsx"));
exports.default = ScrollToTop_1.default;


/***/ }),

/***/ "./src/config/appConfig.ts":
/*!*********************************!*\
  !*** ./src/config/appConfig.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
exports.appConfig = Object.freeze({
    DEV_MODE: true,
    api: {
        fakeEndPoint: 'api/somewhere',
        users: 'api/someusersapi',
    },
    sw: {
        path: 'public/assets/sw.js',
    },
});
exports.default = exports.appConfig;


/***/ }),

/***/ "./src/contexts/auth/index.tsx":
/*!*************************************!*\
  !*** ./src/contexts/auth/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProvider = exports.AuthContext = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var auth_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../services/auth */ "./src/services/auth/index.ts"));
var withDevTools_1 = __webpack_require__(/*! ../withDevTools */ "./src/contexts/withDevTools/index.ts");
exports.AuthContext = react_1.createContext(null);
var initialState = {
    token: '',
    user: undefined,
    isAuthenticated: false,
    isExpiredToken: true,
    lastAuthDate: undefined,
};
var AuthProvider = (function (_super) {
    tslib_1.__extends(AuthProvider, _super);
    function AuthProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.checkIsAuthenticated = function () {
            var checkUserHasId = function (user) { return user.id; };
            var user = auth_1.default.getUserInfo();
            var isAuthenticated = !!(auth_1.default.getToken() && checkUserHasId(user));
            withDevTools_1.devToolsStore &&
                withDevTools_1.devToolsStore.dispatch({
                    type: 'AUTH_CHECK_IS_AUTHENTICATED',
                    state: tslib_1.__assign(tslib_1.__assign({}, _this.state), { isAuthenticated: isAuthenticated }),
                });
            _this.setState({ isAuthenticated: isAuthenticated });
            return isAuthenticated;
        };
        _this.checkTokenIsExpired = function () {
            var token = auth_1.default.getToken();
            var isExpiredToken = auth_1.default.isExpiredToken(token);
            withDevTools_1.devToolsStore &&
                withDevTools_1.devToolsStore.dispatch({
                    type: 'AUTH_CHECK_TOKEN_IS_EXPIRED',
                    state: tslib_1.__assign(tslib_1.__assign({}, _this.state), { isExpiredToken: isExpiredToken }),
                });
            _this.setState({ isExpiredToken: isExpiredToken });
            return isExpiredToken;
        };
        _this.setToken = function (token) {
            if (token === void 0) { token = ''; }
            auth_1.default.setToken(token);
            var isExpiredToken = auth_1.default.isExpiredToken(token);
            withDevTools_1.devToolsStore &&
                withDevTools_1.devToolsStore.dispatch({
                    type: 'AUTH_SET_TOKEN',
                    state: tslib_1.__assign(tslib_1.__assign({}, _this.state), { token: token, isAuthenticated: true, isExpiredToken: isExpiredToken }),
                });
            _this.setState({ token: token, isAuthenticated: true, isExpiredToken: isExpiredToken });
        };
        _this.setUserInfo = function (user) {
            if (typeof user === 'object') {
                auth_1.default.setUserInfo(user);
                withDevTools_1.devToolsStore &&
                    withDevTools_1.devToolsStore.dispatch({
                        type: 'AUTH_SET_USER_INFO',
                        state: tslib_1.__assign(tslib_1.__assign({}, _this.state), { user: user }),
                    });
                _this.setState({ user: user });
            }
        };
        _this.disconnectUser = function () {
            auth_1.default.clearAllAppStorage();
            _this.checkIsAuthenticated();
            withDevTools_1.devToolsStore &&
                withDevTools_1.devToolsStore.dispatch({
                    type: 'AUTH_DISCONNECT_USER',
                    state: tslib_1.__assign({}, initialState),
                });
            _this.setState(tslib_1.__assign({}, initialState));
            return true;
        };
        _this.state = tslib_1.__assign(tslib_1.__assign({}, _this.props.initialState), { checkIsAuthenticated: _this.checkIsAuthenticated, checkTokenIsExpired: _this.checkTokenIsExpired, disconnectUser: _this.disconnectUser, setToken: _this.setToken, setUserInfo: _this.setUserInfo });
        return _this;
    }
    AuthProvider.prototype.render = function () {
        var children = this.props.children;
        return (react_1.default.createElement(exports.AuthContext.Provider, { value: tslib_1.__assign({}, this.state) }, children));
    };
    AuthProvider.defaultProps = {
        initialState: tslib_1.__assign({}, initialState),
    };
    return AuthProvider;
}(react_1.Component));
exports.AuthProvider = AuthProvider;
exports.default = AuthProvider;


/***/ }),

/***/ "./src/contexts/withDevTools/index.ts":
/*!********************************************!*\
  !*** ./src/contexts/withDevTools/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.devToolsStore = exports.reducer = exports.withDevTools = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var isDEV = "dev" === 'development';
exports.withDevTools = isDEV &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__;
var devTools = !exports.withDevTools
    ? null
    : window.__REDUX_DEVTOOLS_EXTENSION__.connect();
var initialState = {
    auth: {},
};
exports.reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'AUTH_CHECK_IS_AUTHENTICATED':
        case 'AUTH_CHECK_TOKEN_IS_EXPIRED':
        case 'AUTH_SET_TOKEN':
        case 'AUTH_SET_USER_INFO':
        case 'AUTH_DISCONNECT_USER': {
            var type = action.type, context = action.state, rest = tslib_1.__rest(action, ["type", "state"]);
            return tslib_1.__assign(tslib_1.__assign({}, state), { user: tslib_1.__assign({ context: context }, rest) });
        }
        default:
            return state;
    }
};
var state;
exports.devToolsStore = !exports.withDevTools
    ? null
    : tslib_1.__assign(tslib_1.__assign({}, devTools), { dispatch: function (action) {
            if (!action) {
                throw new Error('devTools dispatched action should be defined');
            }
            if (typeof action === 'function') {
                throw new Error('devTools dispatched action should be an object');
            }
            if (typeof action !== 'object') {
                throw new Error('devTools dispatched action should be an object');
            }
            if (Array.isArray(action)) {
                throw new Error('devTools dispatched action should be an object');
            }
            var newState = exports.reducer(state, action);
            state = newState;
            devTools && devTools.send(tslib_1.__assign({}, action), newState);
        } });


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
__webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
__webpack_require__(/*! ./style/bootstrap.css */ "./src/style/bootstrap.css");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_dom_1 = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var smoothscroll_polyfill_1 = tslib_1.__importDefault(__webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js"));
var loadable_components_1 = __webpack_require__(/*! loadable-components */ "./node_modules/loadable-components/dist/loadable-components.es.js");
var Root_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Root */ "./src/Root.tsx"));
var ELEMENT_TO_BOOTSTRAP = 'root';
var bootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
smoothscroll_polyfill_1.default.polyfill();
window.__forceSmoothScrollPolyfill__ = true;
window.snapSaveState = function () { return loadable_components_1.getState(); };
(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        console.log('You have async support if you read this instead of "ReferenceError: regeneratorRuntime is not defined" error.');
        return [2];
    });
}); })();
function renderApp(RootComponent) {
    var Application = RootComponent;
    bootstrapedElement && bootstrapedElement.hasChildNodes()
        ? loadable_components_1.loadComponents().then(function () { return react_dom_1.hydrate(react_1.default.createElement(Application, null), bootstrapedElement); })
        : react_dom_1.render(react_1.default.createElement(Application, null), bootstrapedElement);
}
renderApp(Root_1.default);


/***/ }),

/***/ "./src/layout/mainLayout/MainLayout.tsx":
/*!**********************************************!*\
  !*** ./src/layout/mainLayout/MainLayout.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var react_router_1 = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
var registerServiceWorker_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../services/sw/registerServiceWorker */ "./src/services/sw/registerServiceWorker.ts"));
function MainLayout(_a) {
    var history = _a.history, location = _a.location, match = _a.match, children = _a.children;
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var toggle = function () { return setIsOpen(!isOpen); };
    react_1.useEffect(function () {
        if (typeof window !== undefined) {
            registerServiceWorker_1.default();
        }
    }, []);
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(reactstrap_1.Container, null,
            react_1.default.createElement(reactstrap_1.Navbar, { color: "light", light: true, expand: "md" },
                react_1.default.createElement(reactstrap_1.NavbarBrand, { className: "mr-5", href: "/" },
                    react_1.default.createElement("b", null, "fabrika")),
                react_1.default.createElement(reactstrap_1.NavbarToggler, { onClick: toggle }),
                react_1.default.createElement(reactstrap_1.Collapse, { isOpen: isOpen, navbar: true },
                    react_1.default.createElement(reactstrap_1.Nav, { className: "mr-auto ml-5", navbar: true },
                        react_1.default.createElement(reactstrap_1.NavItem, null,
                            react_1.default.createElement(reactstrap_1.NavLink, { className: "mr-5", href: "/about" }, "Platform")),
                        react_1.default.createElement(reactstrap_1.NavItem, null,
                            react_1.default.createElement(reactstrap_1.NavLink, { className: "mr-5", href: "#" }, "Capabilities")),
                        react_1.default.createElement(reactstrap_1.NavItem, null,
                            react_1.default.createElement(reactstrap_1.NavLink, { className: "mr-5", href: "#" }, "Company"))),
                    react_1.default.createElement(reactstrap_1.Button, { color: "link", href: "/", className: "mr-2" }, "Sign In"),
                    react_1.default.createElement(reactstrap_1.Button, { color: "primary", href: "/registration" }, "Sign Up"))),
            children)));
}
exports.default = react_router_1.withRouter(MainLayout);


/***/ }),

/***/ "./src/layout/mainLayout/index.ts":
/*!****************************************!*\
  !*** ./src/layout/mainLayout/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var MainLayout_1 = tslib_1.__importDefault(__webpack_require__(/*! ./MainLayout */ "./src/layout/mainLayout/MainLayout.tsx"));
exports.default = MainLayout_1.default;


/***/ }),

/***/ "./src/layout/privateLayout/PrivateLayout.tsx":
/*!****************************************************!*\
  !*** ./src/layout/privateLayout/PrivateLayout.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var react_router_1 = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
var registerServiceWorker_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../services/sw/registerServiceWorker */ "./src/services/sw/registerServiceWorker.ts"));
function PrivateLayout(_a) {
    var history = _a.history, location = _a.location, match = _a.match, children = _a.children;
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var toggle = function () { return setIsOpen(!isOpen); };
    react_1.useEffect(function () {
        if (typeof window !== undefined) {
            registerServiceWorker_1.default();
        }
    }, []);
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(reactstrap_1.Container, null,
            react_1.default.createElement(reactstrap_1.Navbar, { color: "light", light: true, expand: "md" },
                react_1.default.createElement(reactstrap_1.NavbarBrand, { className: "mr-5", href: "/" },
                    react_1.default.createElement("b", null, "fabrika")),
                react_1.default.createElement(reactstrap_1.NavbarToggler, { onClick: toggle }),
                react_1.default.createElement(reactstrap_1.Collapse, { isOpen: isOpen, navbar: true },
                    react_1.default.createElement(reactstrap_1.Nav, { className: "mr-auto ml-5", navbar: true },
                        react_1.default.createElement(reactstrap_1.NavItem, null,
                            react_1.default.createElement(reactstrap_1.Button, { outline: true, color: "secondary", href: "#", className: "mr-5" }, "New calculation")),
                        react_1.default.createElement(reactstrap_1.NavItem, null,
                            react_1.default.createElement(reactstrap_1.NavLink, { href: "#" }, "Orders"))),
                    react_1.default.createElement(reactstrap_1.Button, { color: "link", className: "text-secondary", href: "#" }, "avenir.babin@mehanika.studio"))),
            children)));
}
exports.default = react_router_1.withRouter(PrivateLayout);


/***/ }),

/***/ "./src/layout/privateLayout/index.ts":
/*!*******************************************!*\
  !*** ./src/layout/privateLayout/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var PrivateLayout_1 = tslib_1.__importDefault(__webpack_require__(/*! ./PrivateLayout */ "./src/layout/privateLayout/PrivateLayout.tsx"));
exports.default = PrivateLayout_1.default;


/***/ }),

/***/ "./src/pages/about/About.tsx":
/*!***********************************!*\
  !*** ./src/pages/about/About.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var mainLayout_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../layout/mainLayout */ "./src/layout/mainLayout/index.ts"));
function About(props) {
    return (react_1.default.createElement(mainLayout_1.default, null));
}
About.displayName = 'About';
exports.default = About;


/***/ }),

/***/ "./src/pages/about/index.ts":
/*!**********************************!*\
  !*** ./src/pages/about/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var About_1 = tslib_1.__importDefault(__webpack_require__(/*! ./About */ "./src/pages/about/About.tsx"));
var mapStateToProps = function (state) {
    return {};
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({}, dispatch);
};
var connector = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
exports.default = redux_1.compose(connector)(About_1.default);


/***/ }),

/***/ "./src/pages/element/Element.tsx":
/*!***************************************!*\
  !*** ./src/pages/element/Element.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var privateLayout_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../layout/privateLayout */ "./src/layout/privateLayout/index.ts"));
var stl_viewer_1 = tslib_1.__importDefault(__webpack_require__(/*! stl-viewer */ "./node_modules/stl-viewer/dist/STLViewer.js"));
var styles_1 = __webpack_require__(/*! ./styled/styles */ "./src/pages/element/styled/styles.tsx");
function Element(props) {
    return (react_1.default.createElement(privateLayout_1.default, null,
        react_1.default.createElement(reactstrap_1.Card, { className: "p-5 mt-5" },
            react_1.default.createElement(reactstrap_1.Row, null,
                react_1.default.createElement(reactstrap_1.Col, { md: "12", className: "pb-3" },
                    react_1.default.createElement("small", null, "Calculation from 06.12.20"))),
            react_1.default.createElement(reactstrap_1.Row, null,
                react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                    react_1.default.createElement("ul", { className: "list-group list-group-horizontal list-unstyled pt-2" },
                        react_1.default.createElement("li", null,
                            react_1.default.createElement(stl_viewer_1.default, { url: "https://www.dropbox.com/s/sruy9bg9w9luyr7/example.stl", width: 128, height: 128, modelColor: "#317AF7", backgroundColor: "#EAEAEA", rotate: true, orbitControls: true })),
                        react_1.default.createElement("li", { className: "pl-3" },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("b", null, "Adaptor_16092019-FGiiiyt.step")),
                            react_1.default.createElement("small", null, "28x73x62 mm")))),
                react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                    react_1.default.createElement("ul", null,
                        react_1.default.createElement("li", null, "incorrect holes detected"),
                        react_1.default.createElement("li", null, "difficult places for manufacturing")))),
            react_1.default.createElement(reactstrap_1.Row, null,
                react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                    react_1.default.createElement("div", { className: "pt-3" },
                        react_1.default.createElement("div", { className: "pb-2" }, "Technology"),
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "CNC Milling"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "CNC Turning"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", active: true, size: "sm", color: "primary" }, "Silicone molding"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "3d-print FDM"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "3d-print SLA"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", disabled: true, size: "sm", color: "primary" }, "3d-print SLS"),
                        ' ')),
                react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                    react_1.default.createElement("div", { className: "pt-3" },
                        react_1.default.createElement("div", { className: "pb-2" }, "Surface finish"),
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "As is"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "Sand blasting"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", active: true, size: "sm", color: "primary" }, "Tumbling"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "Powder Coating"),
                        ' '))),
            react_1.default.createElement(reactstrap_1.Row, null,
                react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                    react_1.default.createElement("div", { className: "pt-3" },
                        react_1.default.createElement("div", { className: "pb-2" }, "Material"),
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "Aluminium 6061-T6"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "Polycarbonate"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "ABS"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "Mild Steel 1020"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "Rubber"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", disabled: true, size: "sm", color: "primary" }, "SikaBlock \u041C935"),
                        ' ')),
                react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                    react_1.default.createElement("div", { className: "pt-3" },
                        react_1.default.createElement("div", { className: "pb-2" }, "Color"),
                        react_1.default.createElement(styles_1.ButtonCicleWhite, { className: "m-1" }),
                        react_1.default.createElement(styles_1.ButtonCicleBlack, { className: "m-1" }),
                        react_1.default.createElement(styles_1.ButtonCicleRed, { className: "m-1" }),
                        react_1.default.createElement(styles_1.ButtonCicleGreen, { className: "m-1" }),
                        react_1.default.createElement(styles_1.ButtonCicleBlue, { className: "m-1" })))),
            react_1.default.createElement(reactstrap_1.Row, null,
                react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                    react_1.default.createElement(reactstrap_1.Jumbotron, { className: "pt-2 pb-2 mt-3 text-center" },
                        react_1.default.createElement(styles_1.UploadText, null, "upload the drawing for specifying threads or increasing tolerances")),
                    react_1.default.createElement(reactstrap_1.CustomInput, { type: "switch", id: "increased-tolerances", name: "increased_tolerances", label: "Increased tolerances" }),
                    react_1.default.createElement(reactstrap_1.CustomInput, { type: "switch", id: "threads", name: "threads", label: "Threads" })),
                react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                    react_1.default.createElement(reactstrap_1.Input, { type: "textarea", name: "text", id: "information", className: "h-100", placeholder: "Any additional information about your part" }))),
            react_1.default.createElement(reactstrap_1.Row, null,
                react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                    react_1.default.createElement("div", { className: "pt-3" },
                        react_1.default.createElement("div", { className: "pb-2" }, "Quantity"),
                        react_1.default.createElement(reactstrap_1.CustomInput, { type: "range", id: "quantity-range", name: "quantity" }))),
                react_1.default.createElement(reactstrap_1.Col, { md: "6" })),
            react_1.default.createElement(reactstrap_1.Row, null,
                react_1.default.createElement(reactstrap_1.Col, { md: "12", className: "text-right mt-5" },
                    react_1.default.createElement("b", null, "Select technology and material for estimation")))),
        react_1.default.createElement(reactstrap_1.Jumbotron, { className: "pt-5 pb-5 text-center mt-5 mb-5" },
            react_1.default.createElement(styles_1.UploadText, null, "upload the drawing for specifying threads or increasing tolerances")),
        react_1.default.createElement(reactstrap_1.Row, null,
            react_1.default.createElement(reactstrap_1.Col, { md: "12", className: "text-center pt-5" },
                react_1.default.createElement(reactstrap_1.Button, { size: "lg", outline: true, color: "primary", className: "mr-3" }, "Save calculation"),
                react_1.default.createElement(reactstrap_1.Button, { size: "lg", color: "secondary", disabled: true }, "Order it")),
            react_1.default.createElement(reactstrap_1.Col, { md: "12", className: "text-center pt-2 pb-5" }, "Please, login to place your order"))));
}
Element.displayName = 'Element';
exports.default = Element;


/***/ }),

/***/ "./src/pages/element/index.ts":
/*!************************************!*\
  !*** ./src/pages/element/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var Element_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Element */ "./src/pages/element/Element.tsx"));
var mapStateToProps = function (state) {
    return {};
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({}, dispatch);
};
var connector = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
exports.default = redux_1.compose(connector)(Element_1.default);


/***/ }),

/***/ "./src/pages/element/styled/styles.tsx":
/*!*********************************************!*\
  !*** ./src/pages/element/styled/styles.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonCicleBlue = exports.ButtonCicleBlack = exports.ButtonCicleGreen = exports.ButtonCicleRed = exports.ButtonCicleWhite = exports.UploadText = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var styled_components_1 = tslib_1.__importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.UploadText = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  color: #afb5b5;\n"], ["\n  color: #afb5b5;\n"])));
exports.ButtonCicleWhite = styled_components_1.default.button(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  box-shadow: none;\n  border-style: solid;\n  color: #ffffff;\n  background-color: #ffffff;\n  border-color: #ccc;\n  line-height: 1.428571429;\n  border-radius: 15px;\n"], ["\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  box-shadow: none;\n  border-style: solid;\n  color: #ffffff;\n  background-color: #ffffff;\n  border-color: #ccc;\n  line-height: 1.428571429;\n  border-radius: 15px;\n"])));
exports.ButtonCicleRed = styled_components_1.default.button(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  color: #ff3c3c;\n  background-color: #ff3c3c;\n  border-color: #ff3c3c;\n  box-shadow: none;\n  border-style: solid;\n  line-height: 1.428571429;\n  border-radius: 15px;\n"], ["\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  color: #ff3c3c;\n  background-color: #ff3c3c;\n  border-color: #ff3c3c;\n  box-shadow: none;\n  border-style: solid;\n  line-height: 1.428571429;\n  border-radius: 15px;\n"])));
exports.ButtonCicleGreen = styled_components_1.default.button(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  box-shadow: none;\n  border-style: solid;\n  color: #6cfe54;\n  background-color: #6cfe54;\n  border-color: #6cfe54;\n  line-height: 1.428571429;\n  border-radius: 15px;\n"], ["\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  box-shadow: none;\n  border-style: solid;\n  color: #6cfe54;\n  background-color: #6cfe54;\n  border-color: #6cfe54;\n  line-height: 1.428571429;\n  border-radius: 15px;\n"])));
exports.ButtonCicleBlack = styled_components_1.default.button(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  box-shadow: none;\n  border-style: solid;\n  color: #565050;\n  background-color: #565050;\n  border-color: #565050;\n  line-height: 1.428571429;\n  border-radius: 15px;\n"], ["\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  box-shadow: none;\n  border-style: solid;\n  color: #565050;\n  background-color: #565050;\n  border-color: #565050;\n  line-height: 1.428571429;\n  border-radius: 15px;\n"])));
exports.ButtonCicleBlue = styled_components_1.default.button(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  box-shadow: none;\n  border-style: solid;\n  color: #3649f8;\n  background-color: #3649f8;\n  border-color: #3649f8;\n  line-height: 1.428571429;\n  border-radius: 15px;\n"], ["\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  box-shadow: none;\n  border-style: solid;\n  color: #3649f8;\n  background-color: #3649f8;\n  border-color: #3649f8;\n  line-height: 1.428571429;\n  border-radius: 15px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/pages/elements/Elements.tsx":
/*!*****************************************!*\
  !*** ./src/pages/elements/Elements.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var privateLayout_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../layout/privateLayout */ "./src/layout/privateLayout/index.ts"));
var styles_1 = __webpack_require__(/*! ./styled/styles */ "./src/pages/elements/styled/styles.tsx");
function Elements(props) {
    return (react_1.default.createElement(privateLayout_1.default, null,
        react_1.default.createElement(reactstrap_1.Row, { className: "mt-5" },
            react_1.default.createElement(reactstrap_1.Col, { md: "2" },
                react_1.default.createElement("img", { width: "128px", height: "128px", src: "https://assets.flatpyramid.com/wp-content/uploads/2018/06/30111623/rabbit-model-for-3d-print-3d-model-279402.jpg", className: "img-thumbnail" })),
            react_1.default.createElement(reactstrap_1.Col, { md: "7" },
                react_1.default.createElement("ul", { className: "list-unstyled" },
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("b", null, "Board Bracket.stp")),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("small", null, "38x85x27 mm")),
                    react_1.default.createElement("li", null, "CNC Milling, Aluminium 6061-T6, Anodizing, Color: as is"))),
            react_1.default.createElement(reactstrap_1.Col, { md: "3", className: "text-right" },
                react_1.default.createElement("ul", { className: "list-unstyled" },
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("b", null, "$101.54")),
                    react_1.default.createElement("li", null,
                        ' ',
                        react_1.default.createElement("small", null, "7 business days, 10 parts $10.15 for ea"))))),
        react_1.default.createElement(reactstrap_1.Card, { className: "p-5 mt-3 mb-5" },
            react_1.default.createElement(reactstrap_1.Row, null,
                react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                    react_1.default.createElement("ul", { className: "list-group list-group-horizontal list-unstyled pt-2" },
                        react_1.default.createElement("li", null,
                            react_1.default.createElement("img", { width: "128px", height: "128px", src: "https://assets.flatpyramid.com/wp-content/uploads/2018/06/30111623/rabbit-model-for-3d-print-3d-model-279402.jpg", className: "img-thumbnail" })),
                        react_1.default.createElement("li", { className: "pl-3" },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("b", null, "Adaptor_16092019-FGiiiyt.step")),
                            react_1.default.createElement("small", null, "28x73x62 mm")))),
                react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                    react_1.default.createElement("ul", null,
                        react_1.default.createElement("li", null, "incorrect holes detected"),
                        react_1.default.createElement("li", null, "difficult places for manufacturing")))),
            react_1.default.createElement(reactstrap_1.Row, null,
                react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                    react_1.default.createElement("div", { className: "pt-3" },
                        react_1.default.createElement("div", { className: "pb-2" }, "Technology"),
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "CNC Milling"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "CNC Turning"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", active: true, size: "sm", color: "primary" }, "Silicone molding"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "3d-print FDM"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "3d-print SLA"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", disabled: true, size: "sm", color: "primary" }, "3d-print SLS"),
                        ' ')),
                react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                    react_1.default.createElement("div", { className: "pt-3" },
                        react_1.default.createElement("div", { className: "pb-2" }, "Surface finish"),
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "As is"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "Sand blasting"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", active: true, size: "sm", color: "primary" }, "Tumbling"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "Powder Coating"),
                        ' '))),
            react_1.default.createElement(reactstrap_1.Row, null,
                react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                    react_1.default.createElement("div", { className: "pt-3" },
                        react_1.default.createElement("div", { className: "pb-2" }, "Material"),
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "Aluminium 6061-T6"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "Polycarbonate"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "ABS"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "Mild Steel 1020"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", size: "sm", color: "primary" }, "Rubber"),
                        ' ',
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, className: "m-1", disabled: true, size: "sm", color: "primary" }, "SikaBlock \u041C935"),
                        ' ')),
                react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                    react_1.default.createElement("div", { className: "pt-3" },
                        react_1.default.createElement("div", { className: "pb-2" }, "Color"),
                        react_1.default.createElement(styles_1.ButtonCicleWhite, { className: "m-1" }),
                        react_1.default.createElement(styles_1.ButtonCicleBlack, { className: "m-1" }),
                        react_1.default.createElement(styles_1.ButtonCicleRed, { className: "m-1" }),
                        react_1.default.createElement(styles_1.ButtonCicleGreen, { className: "m-1" }),
                        react_1.default.createElement(styles_1.ButtonCicleBlue, { className: "m-1" })))),
            react_1.default.createElement(reactstrap_1.Row, null,
                react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                    react_1.default.createElement(reactstrap_1.Jumbotron, { className: "pt-2 pb-2 mt-3 text-center" },
                        react_1.default.createElement(styles_1.UploadText, null, "upload the drawing for specifying threads or increasing tolerances")),
                    react_1.default.createElement(reactstrap_1.CustomInput, { type: "switch", id: "increased-tolerances", name: "increased_tolerances", label: "Increased tolerances" }),
                    react_1.default.createElement(reactstrap_1.CustomInput, { type: "switch", id: "threads", name: "threads", label: "Threads" })),
                react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                    react_1.default.createElement(reactstrap_1.Input, { type: "textarea", name: "text", id: "information", className: "h-100", placeholder: "Any additional information about your part" }))),
            react_1.default.createElement(reactstrap_1.Row, null,
                react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                    react_1.default.createElement("div", { className: "pt-3" },
                        react_1.default.createElement("div", { className: "pb-2" }, "Quantity"),
                        react_1.default.createElement(reactstrap_1.CustomInput, { type: "range", id: "quantity-range", name: "quantity" }))),
                react_1.default.createElement(reactstrap_1.Col, { md: "6" })),
            react_1.default.createElement(reactstrap_1.Row, null,
                react_1.default.createElement(reactstrap_1.Col, { md: "12", className: "text-right mt-5" },
                    react_1.default.createElement("b", null, "Select technology and material for estimation")))),
        react_1.default.createElement(reactstrap_1.Row, { className: "mt-2" },
            react_1.default.createElement(reactstrap_1.Col, { md: "2" },
                react_1.default.createElement("img", { width: "128px", height: "128px", src: "https://www.eso.org/public/archives/models3d/screen/3dmodel_010.jpg", className: "img-thumbnail" })),
            react_1.default.createElement(reactstrap_1.Col, { md: "7" },
                react_1.default.createElement("ul", { className: "list-unstyled" },
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("b", null, "Board Bracket.stp")),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("small", null, "38x85x27 mm")),
                    react_1.default.createElement("li", null, "CNC Milling, Aluminium 6061-T6, Anodizing, Color: as is"))),
            react_1.default.createElement(reactstrap_1.Col, { md: "3", className: "text-right" },
                react_1.default.createElement("ul", { className: "list-unstyled" },
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("b", null, "$101.54")),
                    react_1.default.createElement("li", null,
                        ' ',
                        react_1.default.createElement("small", null, "7 business days, 10 parts $10.15 for ea"))))),
        react_1.default.createElement(reactstrap_1.Row, { className: "mt-2" },
            react_1.default.createElement(reactstrap_1.Col, { md: "2" },
                react_1.default.createElement("img", { width: "128px", height: "128px", src: "https://done3d.com/wp-content/uploads/2019/01/Tarbosaurus_Dinosaur_1-418x315.jpeg", className: "img-thumbnail" })),
            react_1.default.createElement(reactstrap_1.Col, { md: "7" },
                react_1.default.createElement("ul", { className: "list-unstyled" },
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("b", null, "Board Bracket.stp")),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("small", null, "38x85x27 mm")),
                    react_1.default.createElement("li", null, "CNC Milling, Aluminium 6061-T6, Anodizing, Color: as is"))),
            react_1.default.createElement(reactstrap_1.Col, { md: "3", className: "text-right" },
                react_1.default.createElement("ul", { className: "list-unstyled" },
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("b", null, "$101.54")),
                    react_1.default.createElement("li", null,
                        ' ',
                        react_1.default.createElement("small", null, "7 business days, 10 parts $10.15 for ea"))))),
        react_1.default.createElement(reactstrap_1.Jumbotron, { className: "pt-5 pb-5 text-center mt-5 mb-5" },
            react_1.default.createElement(styles_1.UploadText, null, "upload the drawing for specifying threads or increasing tolerances")),
        react_1.default.createElement(reactstrap_1.Row, null,
            react_1.default.createElement(reactstrap_1.Col, { md: "12", className: "text-center pt-2" },
                react_1.default.createElement("div", { className: "text-primary" }, "You have 3 details"),
                react_1.default.createElement("h1", { className: "text-primary" }, "$304.62"),
                "Including a 20% tax $120 Shipment costs doesn\u2019t include"),
            react_1.default.createElement(reactstrap_1.Col, { md: "12", className: "text-center pt-5" },
                react_1.default.createElement(reactstrap_1.Button, { size: "lg", outline: true, color: "primary", className: "mr-3" }, "Save calculation"),
                react_1.default.createElement(reactstrap_1.Button, { size: "lg", color: "primary", disabled: true }, "Order it")),
            react_1.default.createElement(reactstrap_1.Col, { md: "12", className: "text-center pt-2 pb-5" }, "Please, login to place your order"))));
}
Elements.displayName = 'Elements';
exports.default = Elements;


/***/ }),

/***/ "./src/pages/elements/index.ts":
/*!*************************************!*\
  !*** ./src/pages/elements/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var Elements_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Elements */ "./src/pages/elements/Elements.tsx"));
var mapStateToProps = function (state) {
    return {};
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({}, dispatch);
};
var connector = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
exports.default = redux_1.compose(connector)(Elements_1.default);


/***/ }),

/***/ "./src/pages/elements/styled/styles.tsx":
/*!**********************************************!*\
  !*** ./src/pages/elements/styled/styles.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonCicleBlue = exports.ButtonCicleBlack = exports.ButtonCicleGreen = exports.ButtonCicleRed = exports.ButtonCicleWhite = exports.UploadText = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var styled_components_1 = tslib_1.__importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.UploadText = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  color: #afb5b5;\n"], ["\n  color: #afb5b5;\n"])));
exports.ButtonCicleWhite = styled_components_1.default.button(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  box-shadow: none;\n  border-style: solid;\n  color: #ffffff;\n  background-color: #ffffff;\n  border-color: #ccc;\n  line-height: 1.428571429;\n  border-radius: 15px;\n"], ["\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  box-shadow: none;\n  border-style: solid;\n  color: #ffffff;\n  background-color: #ffffff;\n  border-color: #ccc;\n  line-height: 1.428571429;\n  border-radius: 15px;\n"])));
exports.ButtonCicleRed = styled_components_1.default.button(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  color: #ff3c3c;\n  background-color: #ff3c3c;\n  border-color: #ff3c3c;\n  box-shadow: none;\n  border-style: solid;\n  line-height: 1.428571429;\n  border-radius: 15px;\n"], ["\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  color: #ff3c3c;\n  background-color: #ff3c3c;\n  border-color: #ff3c3c;\n  box-shadow: none;\n  border-style: solid;\n  line-height: 1.428571429;\n  border-radius: 15px;\n"])));
exports.ButtonCicleGreen = styled_components_1.default.button(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  box-shadow: none;\n  border-style: solid;\n  color: #6cfe54;\n  background-color: #6cfe54;\n  border-color: #6cfe54;\n  line-height: 1.428571429;\n  border-radius: 15px;\n"], ["\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  box-shadow: none;\n  border-style: solid;\n  color: #6cfe54;\n  background-color: #6cfe54;\n  border-color: #6cfe54;\n  line-height: 1.428571429;\n  border-radius: 15px;\n"])));
exports.ButtonCicleBlack = styled_components_1.default.button(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  box-shadow: none;\n  border-style: solid;\n  color: #565050;\n  background-color: #565050;\n  border-color: #565050;\n  line-height: 1.428571429;\n  border-radius: 15px;\n"], ["\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  box-shadow: none;\n  border-style: solid;\n  color: #565050;\n  background-color: #565050;\n  border-color: #565050;\n  line-height: 1.428571429;\n  border-radius: 15px;\n"])));
exports.ButtonCicleBlue = styled_components_1.default.button(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  box-shadow: none;\n  border-style: solid;\n  color: #3649f8;\n  background-color: #3649f8;\n  border-color: #3649f8;\n  line-height: 1.428571429;\n  border-radius: 15px;\n"], ["\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  box-shadow: none;\n  border-style: solid;\n  color: #3649f8;\n  background-color: #3649f8;\n  border-color: #3649f8;\n  line-height: 1.428571429;\n  border-radius: 15px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/pages/home/Home.tsx":
/*!*********************************!*\
  !*** ./src/pages/home/Home.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var mainLayout_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../layout/mainLayout */ "./src/layout/mainLayout/index.ts"));
var auth_1 = __webpack_require__(/*! ../../contexts/auth */ "./src/contexts/auth/index.tsx");
var fetchTools_1 = __webpack_require__(/*! ../../services/API/fetchTools */ "./src/services/API/fetchTools.ts");
var axios_1 = tslib_1.__importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));
function Home(props) {
    var _this = this;
    var location = react_router_dom_1.useLocation();
    var history = react_router_dom_1.useHistory();
    var _a = react_1.useState('dmitry'), username = _a[0], setUsername = _a[1];
    var _b = react_1.useState('729082app'), password = _b[0], setPassword = _b[1];
    var _c = react_1.useState(false), isLogging = _c[0], setIsLogging = _c[1];
    var auth = react_1.useContext(auth_1.AuthContext);
    var handlesOnLogin = react_1.useCallback(function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var response, _a, key, user, error_1;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    event && event.preventDefault();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    setIsLogging(true);
                    return [4, logUser(username, password)];
                case 2:
                    response = _b.sent();
                    _a = response.data, key = _a.key, user = _a.user;
                    console.log('user fetched: ', { key: key, user: user });
                    auth === null || auth === void 0 ? void 0 : auth.setToken(key);
                    auth === null || auth === void 0 ? void 0 : auth.setUserInfo(user);
                    history.push('/onboarding');
                    return [3, 5];
                case 3:
                    error_1 = _b.sent();
                    console.log('login went wrong..., error: ', error_1);
                    return [3, 5];
                case 4:
                    setIsLogging(false);
                    return [7];
                case 5: return [2];
            }
        });
    }); }, [history, username, password, location]);
    var handlesOnUsernameChange = react_1.useCallback(function (event) {
        event && event.preventDefault();
        setUsername(event.target.value.trim());
    }, []);
    var handlesOnPasswordChange = react_1.useCallback(function (event) {
        event && event.preventDefault();
        setPassword(event.target.value.trim());
    }, []);
    var logUser = react_1.useCallback(function (email, password) {
        if (email === void 0) { email = ''; }
        if (password === void 0) { password = ''; }
        return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var __SOME_LOGIN_API__, url, method, headers, options, response, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        __SOME_LOGIN_API__ = 'login';
                        url = fetchTools_1.getLocationOrigin() + "/" + __SOME_LOGIN_API__ + "/";
                        method = 'post';
                        headers = fetchTools_1.jsonHeader;
                        options = {
                            data: {
                                username: username,
                                password: password,
                            },
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, axios_1.default.request(tslib_1.__assign({ method: method,
                                url: url, headers: tslib_1.__assign({}, headers) }, options))];
                    case 2:
                        response = _a.sent();
                        return [2, response];
                    case 3:
                        error_2 = _a.sent();
                        throw error_2;
                    case 4: return [2];
                }
            });
        });
    }, []);
    return (react_1.default.createElement(mainLayout_1.default, null,
        react_1.default.createElement(reactstrap_1.Row, null,
            react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                react_1.default.createElement("h2", { className: "pt-5 pb-3" }, "Sign In"),
                react_1.default.createElement("p", null, "Account will allow you to track your order status online."),
                react_1.default.createElement("p", null,
                    "Don\u2019t have an account yet?",
                    ' ',
                    react_1.default.createElement("a", { href: "/registration" }, "Create an account")),
                react_1.default.createElement(reactstrap_1.Form, { className: "p-3" },
                    react_1.default.createElement(reactstrap_1.FormGroup, { row: true },
                        react_1.default.createElement(reactstrap_1.Label, { for: "inputUsername" }, "Username"),
                        react_1.default.createElement(reactstrap_1.Input, { type: "text", name: "username", id: "inputUsername", placeholder: "", value: username, onChange: handlesOnUsernameChange })),
                    react_1.default.createElement(reactstrap_1.FormGroup, { row: true },
                        react_1.default.createElement(reactstrap_1.Label, { for: "inputPassword" }, "Password"),
                        react_1.default.createElement(reactstrap_1.Input, { type: "password", name: "password", id: "inputPassword", value: password, onChange: handlesOnPasswordChange, placeholder: "" }))),
                react_1.default.createElement(reactstrap_1.Button, { outline: true, color: "secondary", onClick: handlesOnLogin, className: "mt-2" }, "Sign In")),
            react_1.default.createElement(reactstrap_1.Col, { md: "6" }))));
}
Home.displayName = 'Home';
exports.default = Home;


/***/ }),

/***/ "./src/pages/home/index.ts":
/*!*********************************!*\
  !*** ./src/pages/home/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var Home_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Home */ "./src/pages/home/Home.tsx"));
var mapStateToProps = function (state) {
    return {};
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({}, dispatch);
};
var connector = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
exports.default = redux_1.compose(connector)(Home_1.default);


/***/ }),

/***/ "./src/pages/onboarding/Onboarding.tsx":
/*!*********************************************!*\
  !*** ./src/pages/onboarding/Onboarding.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var privateLayout_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../layout/privateLayout */ "./src/layout/privateLayout/index.ts"));
var react_dropzone_1 = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
var react_router_1 = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
var style_1 = __webpack_require__(/*! ./styled/style */ "./src/pages/onboarding/styled/style.tsx");
function Onboarding(props) {
    var _a = react_1.useState([]), files = _a[0], setFiles = _a[1];
    var onDrop = react_1.useCallback(function (files) {
        props.history.push('/element');
        setFiles(files);
    }, []);
    var _b = react_dropzone_1.useDropzone({ onDrop: onDrop }), getRootProps = _b.getRootProps, getInputProps = _b.getInputProps, isDragActive = _b.isDragActive;
    return (react_1.default.createElement(privateLayout_1.default, null,
        react_1.default.createElement(reactstrap_1.Card, { className: "mt-5" },
            react_1.default.createElement("div", tslib_1.__assign({}, getRootProps()),
                react_1.default.createElement("input", tslib_1.__assign({}, getInputProps())),
                react_1.default.createElement(style_1.DD, null,
                    react_1.default.createElement(reactstrap_1.Row, null,
                        react_1.default.createElement(reactstrap_1.Col, { md: "2" }),
                        react_1.default.createElement(reactstrap_1.Col, { md: "7" }, isDragActive ? (react_1.default.createElement(style_1.DDTitle, null, "Drop the files here...")) : (react_1.default.createElement("p", null,
                            react_1.default.createElement(style_1.DDTitle, null, "Drop parts here"),
                            react_1.default.createElement("div", null, "or select files")))),
                        react_1.default.createElement(reactstrap_1.Col, { md: "3" }))))),
        react_1.default.createElement(reactstrap_1.Row, { className: "mt-5" },
            react_1.default.createElement(reactstrap_1.Col, { md: "2" }),
            react_1.default.createElement(reactstrap_1.Col, { md: "10" },
                react_1.default.createElement("div", null, "please, check inside radii > 1 mm, walls > 1 mm, minimum holes is 1 mm"),
                react_1.default.createElement("div", null, "all uploads are secure and confidential")))));
}
Onboarding.displayName = 'Onboarding';
exports.default = react_router_1.withRouter(Onboarding);


/***/ }),

/***/ "./src/pages/onboarding/index.ts":
/*!***************************************!*\
  !*** ./src/pages/onboarding/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var Onboarding_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Onboarding */ "./src/pages/onboarding/Onboarding.tsx"));
var mapStateToProps = function (state) {
    return {};
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({}, dispatch);
};
var connector = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
exports.default = redux_1.compose(connector)(Onboarding_1.default);


/***/ }),

/***/ "./src/pages/onboarding/styled/style.tsx":
/*!***********************************************!*\
  !*** ./src/pages/onboarding/styled/style.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DDTitle = exports.DD = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var styled_components_1 = tslib_1.__importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.DD = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  margin-top: 100px;\n  margin-bottom: 100px;\n"], ["\n  margin-top: 100px;\n  margin-bottom: 100px;\n"])));
exports.DDTitle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  font-size: 100px;\n"], ["\n  font-size: 100px;\n"])));
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/pages/orders/Orders.tsx":
/*!*************************************!*\
  !*** ./src/pages/orders/Orders.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var privateLayout_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../layout/privateLayout */ "./src/layout/privateLayout/index.ts"));
var react_router_1 = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
var style_1 = __webpack_require__(/*! ./styled/style */ "./src/pages/orders/styled/style.tsx");
function Orders(props) {
    return (react_1.default.createElement(privateLayout_1.default, null,
        react_1.default.createElement(reactstrap_1.Card, { className: "mt-5 p-2" },
            react_1.default.createElement(reactstrap_1.Row, { className: "h-100 justify-content-center align-items-center" },
                react_1.default.createElement(reactstrap_1.Col, { md: "3", className: "text-center" },
                    react_1.default.createElement("b", null, "23.05.20 \u2116139128749")),
                react_1.default.createElement(reactstrap_1.Col, { md: "2", className: "text-center" },
                    react_1.default.createElement(reactstrap_1.Button, { size: "sm", outline: true, color: "secondary", href: "#" }, "completed")),
                react_1.default.createElement(reactstrap_1.Col, { md: "2", className: "text-center" },
                    react_1.default.createElement("b", null, "1 items")),
                react_1.default.createElement(reactstrap_1.Col, { md: "2", className: "text-center" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("b", null, "5 business days")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("b", null,
                            react_1.default.createElement("small", null, "20.02.20")))),
                react_1.default.createElement(reactstrap_1.Col, { md: "2", className: "text-center" },
                    react_1.default.createElement("h4", { className: "text-primary" }, "$114.21")),
                react_1.default.createElement(reactstrap_1.Col, { md: "1", className: "text-center" },
                    react_1.default.createElement(style_1.Status, null,
                        react_1.default.createElement("b", null, "paid"))))),
        react_1.default.createElement(reactstrap_1.Card, { className: "mt-1 p-2" },
            react_1.default.createElement(reactstrap_1.Row, { className: "h-100 justify-content-center align-items-center" },
                react_1.default.createElement(reactstrap_1.Col, { md: "3", className: "text-center" },
                    react_1.default.createElement("b", null, "23.05.20 \u2116139128749")),
                react_1.default.createElement(reactstrap_1.Col, { md: "2", className: "text-center" },
                    react_1.default.createElement(reactstrap_1.Button, { size: "sm", outline: true, color: "secondary", href: "#" }, "completed")),
                react_1.default.createElement(reactstrap_1.Col, { md: "2", className: "text-center" },
                    react_1.default.createElement("b", null, "1 items")),
                react_1.default.createElement(reactstrap_1.Col, { md: "2", className: "text-center" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("b", null, "5 business days")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("b", null,
                            react_1.default.createElement("small", null, "20.02.20")))),
                react_1.default.createElement(reactstrap_1.Col, { md: "2", className: "text-center" },
                    react_1.default.createElement("h4", { className: "text-primary" }, "$114.21")),
                react_1.default.createElement(reactstrap_1.Col, { md: "1", className: "text-center" },
                    react_1.default.createElement(style_1.Status, null,
                        react_1.default.createElement("b", null, "paid"))))),
        react_1.default.createElement(reactstrap_1.Card, { className: "mt-1 p-2" },
            react_1.default.createElement(reactstrap_1.Row, { className: "h-100 justify-content-center align-items-center" },
                react_1.default.createElement(reactstrap_1.Col, { md: "3", className: "text-center" },
                    react_1.default.createElement("b", null, "23.05.20 \u2116139128749")),
                react_1.default.createElement(reactstrap_1.Col, { md: "2", className: "text-center" },
                    react_1.default.createElement(reactstrap_1.Button, { size: "sm", outline: true, color: "secondary", href: "#" }, "completed")),
                react_1.default.createElement(reactstrap_1.Col, { md: "2", className: "text-center" },
                    react_1.default.createElement("b", null, "1 items")),
                react_1.default.createElement(reactstrap_1.Col, { md: "2", className: "text-center" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("b", null, "5 business days")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("b", null,
                            react_1.default.createElement("small", null, "20.02.20")))),
                react_1.default.createElement(reactstrap_1.Col, { md: "2", className: "text-center" },
                    react_1.default.createElement("h4", { className: "text-primary" }, "$114.21")),
                react_1.default.createElement(reactstrap_1.Col, { md: "1", className: "text-center" },
                    react_1.default.createElement(style_1.Status, null,
                        react_1.default.createElement("b", null, "paid"))))),
        react_1.default.createElement(reactstrap_1.Card, { className: "mt-1 p-2" },
            react_1.default.createElement(reactstrap_1.Row, { className: "h-100 justify-content-center align-items-center" },
                react_1.default.createElement(reactstrap_1.Col, { md: "3", className: "text-center" },
                    react_1.default.createElement("b", null, "23.05.20 \u2116139128749")),
                react_1.default.createElement(reactstrap_1.Col, { md: "2", className: "text-center" },
                    react_1.default.createElement(reactstrap_1.Button, { size: "sm", outline: true, color: "secondary", href: "#" }, "completed")),
                react_1.default.createElement(reactstrap_1.Col, { md: "2", className: "text-center" },
                    react_1.default.createElement("b", null, "1 items")),
                react_1.default.createElement(reactstrap_1.Col, { md: "2", className: "text-center" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("b", null, "5 business days")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("b", null,
                            react_1.default.createElement("small", null, "20.02.20")))),
                react_1.default.createElement(reactstrap_1.Col, { md: "2", className: "text-center" },
                    react_1.default.createElement("h4", { className: "text-primary" }, "$114.21")),
                react_1.default.createElement(reactstrap_1.Col, { md: "1", className: "text-center" },
                    react_1.default.createElement(style_1.Status, null,
                        react_1.default.createElement("b", null, "paid")))))));
}
Orders.displayName = 'Orders';
exports.default = react_router_1.withRouter(Orders);


/***/ }),

/***/ "./src/pages/orders/index.ts":
/*!***********************************!*\
  !*** ./src/pages/orders/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var Orders_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Orders */ "./src/pages/orders/Orders.tsx"));
var mapStateToProps = function (state) {
    return {};
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({}, dispatch);
};
var connector = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
exports.default = redux_1.compose(connector)(Orders_1.default);


/***/ }),

/***/ "./src/pages/orders/styled/style.tsx":
/*!*******************************************!*\
  !*** ./src/pages/orders/styled/style.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var styled_components_1 = tslib_1.__importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.Status = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  opacity: 0.5\n"], ["\n  opacity: 0.5\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/pages/pageNotFound/PageNotFound.tsx":
/*!*************************************************!*\
  !*** ./src/pages/pageNotFound/PageNotFound.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var Jumbotron_1 = tslib_1.__importDefault(__webpack_require__(/*! reactstrap/lib/Jumbotron */ "./node_modules/reactstrap/lib/Jumbotron.js"));
var mainLayout_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../layout/mainLayout */ "./src/layout/mainLayout/index.ts"));
function PageNotFound(props) {
    return (react_1.default.createElement(mainLayout_1.default, null,
        react_1.default.createElement(Jumbotron_1.default, null,
            react_1.default.createElement("h1", null, "Sorry this page does not exists..."))));
}
PageNotFound.displayName = 'PageNotFound';
exports.default = PageNotFound;


/***/ }),

/***/ "./src/pages/pageNotFound/index.ts":
/*!*****************************************!*\
  !*** ./src/pages/pageNotFound/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var PageNotFound_1 = tslib_1.__importDefault(__webpack_require__(/*! ./PageNotFound */ "./src/pages/pageNotFound/PageNotFound.tsx"));
var mapStateToProps = function (state) {
    return {};
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({}, dispatch);
};
var connector = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
exports.default = redux_1.compose(connector)(PageNotFound_1.default);


/***/ }),

/***/ "./src/pages/profile/Profile.tsx":
/*!***************************************!*\
  !*** ./src/pages/profile/Profile.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var privateLayout_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../layout/privateLayout */ "./src/layout/privateLayout/index.ts"));
var react_router_1 = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
function Profile(props) {
    return (react_1.default.createElement(privateLayout_1.default, null,
        react_1.default.createElement(reactstrap_1.Row, { className: "mt-5" },
            react_1.default.createElement(reactstrap_1.Col, { md: "4" },
                react_1.default.createElement(reactstrap_1.Nav, { vertical: true },
                    react_1.default.createElement(reactstrap_1.NavItem, null,
                        react_1.default.createElement(reactstrap_1.NavLink, { className: "text-secondary", href: "#" }, "Personal information")),
                    react_1.default.createElement(reactstrap_1.NavItem, null,
                        react_1.default.createElement(reactstrap_1.NavLink, { className: "text-secondary", href: "#" }, "Password")),
                    react_1.default.createElement(reactstrap_1.NavItem, null,
                        react_1.default.createElement(reactstrap_1.NavLink, { className: "text-secondary", href: "#" }, "Shipping information")))),
            react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                react_1.default.createElement(reactstrap_1.Form, null,
                    react_1.default.createElement(reactstrap_1.FormGroup, null,
                        react_1.default.createElement(reactstrap_1.Label, { for: "labelFirstName" }, "First name"),
                        react_1.default.createElement(reactstrap_1.Input, { type: "text", name: "first_name", id: "labelFirstName", placeholder: "First name" })),
                    react_1.default.createElement(reactstrap_1.FormGroup, null,
                        react_1.default.createElement(reactstrap_1.Label, { for: "labelLastName" }, "Last name"),
                        react_1.default.createElement(reactstrap_1.Input, { type: "text", id: "labelLastName", name: "last_name", placeholder: "Last name" })),
                    react_1.default.createElement(reactstrap_1.FormGroup, null,
                        react_1.default.createElement(reactstrap_1.Label, { for: "labelEmail" }, "Email"),
                        react_1.default.createElement(reactstrap_1.Input, { type: "email", id: "labelEmail", name: "email", placeholder: "Email" })),
                    react_1.default.createElement(reactstrap_1.FormGroup, null,
                        react_1.default.createElement(reactstrap_1.Label, { for: "labelPhone" }, "Phone"),
                        react_1.default.createElement(reactstrap_1.Input, { type: "text", name: "phone", id: "labelPhone", placeholder: "Phone" })),
                    react_1.default.createElement(reactstrap_1.FormGroup, { className: "mt-5 text-right" },
                        react_1.default.createElement(reactstrap_1.Button, { outline: true, color: "primary", size: "lg" }, "Save")))))));
}
Profile.displayName = 'Profile';
exports.default = react_router_1.withRouter(Profile);


/***/ }),

/***/ "./src/pages/profile/index.ts":
/*!************************************!*\
  !*** ./src/pages/profile/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var Profile_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Profile */ "./src/pages/profile/Profile.tsx"));
var mapStateToProps = function (state) {
    return {};
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({}, dispatch);
};
var connector = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
exports.default = redux_1.compose(connector)(Profile_1.default);


/***/ }),

/***/ "./src/pages/registration/Registration.tsx":
/*!*************************************************!*\
  !*** ./src/pages/registration/Registration.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var auth_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../services/auth */ "./src/services/auth/index.ts"));
var mainLayout_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../layout/mainLayout */ "./src/layout/mainLayout/index.ts"));
function Registration(_a) {
    var _this = this;
    var location = _a.location, isLogging = _a.isLogging, isFetching = _a.isFetching, disconnectUser = _a.disconnectUser, logUserIfNeeded = _a.logUserIfNeeded, history = _a.history;
    var _b = react_1.useState(''), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(''), password = _c[0], setPassword = _c[1];
    react_1.useEffect(function () {
        disconnectUser();
    }, []);
    var handlesOnEmailChange = react_1.useCallback(function (event) {
        if (event) {
            event.preventDefault();
            setEmail(event.target.value.trim());
        }
    }, []);
    var handlesOnPasswordChange = react_1.useCallback(function (event) {
        if (event) {
            event.preventDefault();
            setPassword(event.target.value.trim());
        }
    }, []);
    var handlesOnLogin = react_1.useCallback(function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var response, _a, token, user, from, error_1;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    event && event.preventDefault();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4, logUserIfNeeded(email, password)];
                case 2:
                    response = _b.sent();
                    _a = response.payload.data, token = _a.token, user = _a.user;
                    auth_1.default.setToken(token);
                    auth_1.default.setUserInfo(user);
                    from = (location.state || { from: { pathname: '/' } }).from;
                    history.replace(from);
                    return [3, 4];
                case 3:
                    error_1 = _b.sent();
                    console.log('login went wrong..., error: ', error_1);
                    return [3, 4];
                case 4: return [2];
            }
        });
    }); }, [history, location, email, password]);
    var goHome = react_1.useCallback(function (event) {
        event && event.preventDefault();
        history.push({ pathname: '/' });
    }, [history]);
    return (react_1.default.createElement(mainLayout_1.default, null,
        react_1.default.createElement(reactstrap_1.Row, null,
            react_1.default.createElement(reactstrap_1.Col, { md: "6" },
                react_1.default.createElement("h2", { className: "pt-5 pb-3" }, "Sign Up"),
                react_1.default.createElement("p", null, "Account will allow you to track your order status online "),
                react_1.default.createElement("p", null,
                    "Already have an account? ",
                    react_1.default.createElement("a", { href: "/" }, "Log in")),
                react_1.default.createElement(reactstrap_1.Form, { className: "p-3" },
                    react_1.default.createElement(reactstrap_1.FormGroup, { row: true },
                        react_1.default.createElement(reactstrap_1.Label, { for: "inputUsername" }, "Username"),
                        react_1.default.createElement(reactstrap_1.Input, { type: "text", name: "username", id: "inputUsername", placeholder: "" })),
                    react_1.default.createElement(reactstrap_1.FormGroup, { row: true },
                        react_1.default.createElement(reactstrap_1.Label, { for: "inputEmail" }, "Email"),
                        react_1.default.createElement(reactstrap_1.Input, { type: "email", name: "email", id: "inputEmail", placeholder: "" })),
                    react_1.default.createElement(reactstrap_1.FormGroup, { row: true },
                        react_1.default.createElement(reactstrap_1.Label, { for: "inputPassword" }, "Password"),
                        react_1.default.createElement(reactstrap_1.Input, { type: "password", name: "password", id: "inputPassword", placeholder: "" })),
                    react_1.default.createElement(reactstrap_1.FormGroup, { row: true },
                        react_1.default.createElement(reactstrap_1.Label, { for: "inputPasswordRepeat" }, "Password repeat"),
                        react_1.default.createElement(reactstrap_1.Input, { type: "password", name: "password", id: "inputPasswordRepeat", placeholder: "" })),
                    react_1.default.createElement(reactstrap_1.FormGroup, { row: true },
                        react_1.default.createElement(reactstrap_1.Col, null,
                            react_1.default.createElement(reactstrap_1.FormGroup, { check: true },
                                react_1.default.createElement(reactstrap_1.Label, { check: true },
                                    react_1.default.createElement(reactstrap_1.Input, { type: "checkbox", id: "checkbox" }),
                                    " I agree with the terms of use"))))),
                react_1.default.createElement(reactstrap_1.Button, { outline: true, disabled: true, color: "secondary", className: "mt-2" }, "Sign Up")),
            react_1.default.createElement(reactstrap_1.Col, { md: "6" }))));
}
Registration.defaultProps = {
    isFetching: false,
    isLogging: false,
};
Registration.displayName = 'Registration';
exports.default = Registration;


/***/ }),

/***/ "./src/pages/registration/index.ts":
/*!*****************************************!*\
  !*** ./src/pages/registration/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var userAuthActions = tslib_1.__importStar(__webpack_require__(/*! ../../redux/modules/userAuth */ "./src/redux/modules/userAuth/index.ts"));
var Registration_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Registration */ "./src/pages/registration/Registration.tsx"));
var mapStateToProps = function (state, ownProps) {
    return {
        isAuthenticated: state.userAuth.isAuthenticated,
        isFetching: state.userAuth.isFetching,
        isLogging: state.userAuth.isLogging,
    };
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators(tslib_1.__assign({}, userAuthActions), dispatch);
};
var connector = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
exports.default = redux_1.compose(connector)(Registration_1.default);


/***/ }),

/***/ "./src/redux/middleware/fetchMiddleware.ts":
/*!*************************************************!*\
  !*** ./src/redux/middleware/fetchMiddleware.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FETCH_TYPE_ENUM = exports.FETCH = exports.FETCH_MOCK = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var axios_1 = tslib_1.__importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));
exports.FETCH_MOCK = 'FETCH_MOCK';
exports.FETCH = 'FETCH';
var FETCH_TYPE_ENUM;
(function (FETCH_TYPE_ENUM) {
    FETCH_TYPE_ENUM["FETCH"] = "FETCH";
    FETCH_TYPE_ENUM["FETCH_MOCK"] = "FETCH_MOCK";
})(FETCH_TYPE_ENUM = exports.FETCH_TYPE_ENUM || (exports.FETCH_TYPE_ENUM = {}));
var fetchMiddleware = function (store) { return function (next) { return function (action) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, _b, request, success, mockResult, _c, _d, request, success, fail_1, url, method, headers, options, data, error_1;
    return tslib_1.__generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                if (!action.fetch) {
                    return [2, next(action)];
                }
                if (!action.fetch.type) {
                    return [2, next(action)];
                }
                if (!action.fetch.actionTypes) {
                    return [2, next(action)];
                }
                if (action.fetch.type === FETCH_TYPE_ENUM.FETCH_MOCK) {
                    if (!action.fetch.mockResult) {
                        throw new Error('Fetch middleware require a mockResult payload when type is "FETCH_MOCK"');
                    }
                    _a = action.fetch, _b = _a.actionTypes, request = _b.request, success = _b.success, mockResult = _a.mockResult;
                    store.dispatch({ type: request });
                    return [2, Promise.resolve(store.dispatch({
                            type: success,
                            payload: {
                                status: 200,
                                data: mockResult,
                            },
                        }))];
                }
                if (!(action.fetch.type === FETCH_TYPE_ENUM.FETCH)) return [3, 4];
                _c = action.fetch, _d = _c.actionTypes, request = _d.request, success = _d.success, fail_1 = _d.fail, url = _c.url, method = _c.method, headers = _c.headers, options = _c.options;
                store.dispatch({ type: request });
                _e.label = 1;
            case 1:
                _e.trys.push([1, 3, , 4]);
                return [4, axios_1.default.request(tslib_1.__assign({ method: method,
                        url: url, withCredentials: true, headers: tslib_1.__assign({ Accept: 'application/json', 'Content-Type': 'application/json', 'Acces-Control-Allow-Origin': '*' }, headers) }, options))];
            case 2:
                data = _e.sent();
                store.dispatch({ type: success, payload: data });
                return [2, data];
            case 3:
                error_1 = _e.sent();
                store.dispatch({ type: fail_1, error: error_1.response });
                throw error_1;
            case 4: return [2, next(action)];
        }
    });
}); }; }; };
exports.default = fetchMiddleware;


/***/ }),

/***/ "./src/redux/modules/reducers.ts":
/*!***************************************!*\
  !*** ./src/redux/modules/reducers.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.reducers = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var userAuth_1 = tslib_1.__importDefault(__webpack_require__(/*! ./userAuth */ "./src/redux/modules/userAuth/index.ts"));
exports.reducers = {
    userAuth: userAuth_1.default,
};
exports.default = redux_1.combineReducers(tslib_1.__assign({}, exports.reducers));


/***/ }),

/***/ "./src/redux/modules/userAuth/index.ts":
/*!*********************************************!*\
  !*** ./src/redux/modules/userAuth/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserInfoDataIfNeeded = exports.logUserIfNeeded = exports.checkUserIsConnected = exports.disconnectUser = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var axios_1 = tslib_1.__importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));
var appConfig_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../../config/appConfig */ "./src/config/appConfig.ts"));
var fetchTools_1 = __webpack_require__(/*! ../../../services/API/fetchTools */ "./src/services/API/fetchTools.ts");
var auth_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../../services/auth */ "./src/services/auth/index.ts"));
var fetchMiddleware_1 = __webpack_require__(/*! ../../middleware/fetchMiddleware */ "./src/redux/middleware/fetchMiddleware.ts");
var REQUEST_USER_INFOS_DATA = 'REQUEST_USER_INFOS_DATA';
var RECEIVED_USER_INFOS_DATA = 'RECEIVED_USER_INFOS_DATA';
var ERROR_USER_INFOS_DATA = 'ERROR_USER_INFOS_DATA';
var REQUEST_LOG_USER = 'REQUEST_LOG_USER';
var RECEIVED_LOG_USER = 'RECEIVED_LOG_USER';
var ERROR_LOG_USER = 'ERROR_LOG_USER';
var CHECK_IF_USER_IS_AUTHENTICATED = 'CHECK_IF_USER_IS_AUTHENTICATED';
var DISCONNECT_USER = 'DISCONNECT_USER';
var initialState = {
    isFetching: false,
    isLogging: false,
    id: '',
    login: '',
    firstname: '',
    lastname: '',
    token: '',
    isAuthenticated: false,
};
function default_1(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case CHECK_IF_USER_IS_AUTHENTICATED: {
            var _a = action.isAuthenticated, isAuthenticated = _a === void 0 ? false : _a, _b = action.token, token = _b === void 0 ? '' : _b, _c = action.user, user = _c === void 0 ? { id: '', login: '', firstname: '', lastname: '' } : _c;
            return tslib_1.__assign(tslib_1.__assign({}, state), { isAuthenticated: isAuthenticated,
                token: token, id: user.id, login: user.login, firstname: user.firstname, lastname: user.lastname });
        }
        case DISCONNECT_USER: {
            return tslib_1.__assign(tslib_1.__assign({}, state), { isAuthenticated: false, token: initialState.token, id: initialState.id, login: initialState.login, firstname: initialState.firstname, lastname: initialState.lastname });
        }
        case REQUEST_LOG_USER: {
            return tslib_1.__assign(tslib_1.__assign({}, state), { isLogging: true });
        }
        case RECEIVED_LOG_USER: {
            var _d = action.payload.data, _e = _d.token, token = _e === void 0 ? '' : _e, _f = _d.id, id = _f === void 0 ? '' : _f, _g = _d.login, login = _g === void 0 ? '' : _g, _h = _d.firstname, firstname = _h === void 0 ? '' : _h, _j = _d.lastname, lastname = _j === void 0 ? '' : _j;
            return tslib_1.__assign(tslib_1.__assign({}, state), { isAuthenticated: true, token: token, id: id, login: login, firstname: firstname, lastname: lastname, isLogging: false });
        }
        case ERROR_LOG_USER: {
            return tslib_1.__assign(tslib_1.__assign({}, state), { isAuthenticated: false, isLogging: false });
        }
        case REQUEST_USER_INFOS_DATA: {
            return tslib_1.__assign(tslib_1.__assign({}, state), { isFetching: true });
        }
        case RECEIVED_USER_INFOS_DATA: {
            var _k = action.payload.data.userInfos, userInfos = _k === void 0 ? { id: '', login: '', firstname: '', lastname: '' } : _k;
            return tslib_1.__assign(tslib_1.__assign({}, state), { isFetching: false, id: userInfos.id, login: userInfos.login, firstname: userInfos.firstname, lastname: userInfos.lastname });
        }
        case ERROR_USER_INFOS_DATA: {
            return tslib_1.__assign(tslib_1.__assign({}, state), { isFetching: false });
        }
        default:
            return state;
    }
}
exports.default = default_1;
function disconnectUser() {
    auth_1.default.clearAllAppStorage();
    return { type: 'DISCONNECT_USER' };
}
exports.disconnectUser = disconnectUser;
function checkUserIsConnected() {
    return function (dispatch) {
        var token = auth_1.default.getToken();
        var user = auth_1.default.getUserInfo();
        var checkUserHasId = function (obj) { return obj && (obj.id || false); };
        var isExpired = auth_1.default.isExpiredToken(token);
        var isAuthenticated = token && checkUserHasId(user) ? true : false;
        dispatch(tslib_1.__assign(tslib_1.__assign({ type: CHECK_IF_USER_IS_AUTHENTICATED, token: token }, user), { isAuthenticated: isAuthenticated && !isExpired }));
        return tslib_1.__assign(tslib_1.__assign({ token: token }, user), { isAuthenticated: isAuthenticated && !isExpired });
    };
}
exports.checkUserIsConnected = checkUserIsConnected;
function logUser(login, password) {
    var _this = this;
    return function (dispatch) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var FETCH_TYPE, __SOME_LOGIN_API__, url, method, headers, options, type;
        return tslib_1.__generator(this, function (_a) {
            FETCH_TYPE = appConfig_1.default.DEV_MODE
                ? fetchMiddleware_1.FETCH_TYPE_ENUM.FETCH_MOCK
                : fetchMiddleware_1.FETCH_TYPE_ENUM.FETCH;
            __SOME_LOGIN_API__ = 'login';
            url = fetchTools_1.getLocationOrigin() + "/" + __SOME_LOGIN_API__;
            method = 'post';
            headers = {};
            options = {
                credentials: 'same-origin',
                data: {
                    login: login,
                    password: password,
                },
            };
            type = 'FETCH';
            return [2, dispatch({
                    type: type,
                    fetch: {
                        type: FETCH_TYPE,
                        actionTypes: {
                            request: REQUEST_LOG_USER,
                            success: RECEIVED_LOG_USER,
                            fail: ERROR_LOG_USER,
                        },
                        url: url,
                        method: method,
                        headers: headers,
                        options: options,
                    },
                })];
        });
    }); };
}
function logUserIfNeeded(email, password) {
    return function (dispatch, getState) {
        if (shouldLogUser(getState())) {
            return dispatch(logUser(email, password));
        }
        return Promise.resolve();
    };
}
exports.logUserIfNeeded = logUserIfNeeded;
function shouldLogUser(state) {
    var isLogging = state.userAuth.isLogging;
    return !isLogging;
}
function fetchUserInfosData(id) {
    var _this = this;
    if (id === void 0) { id = ''; }
    return function (dispatch) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var token, DEV_MODE, users, FETCH_TYPE, url, method, headers, options, reponse, error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = auth_1.default.getToken();
                    DEV_MODE = appConfig_1.default.DEV_MODE, users = appConfig_1.default.api.users;
                    FETCH_TYPE = DEV_MODE
                        ? fetchMiddleware_1.FETCH_TYPE_ENUM.FETCH_MOCK
                        : fetchMiddleware_1.FETCH_TYPE_ENUM.FETCH;
                    url = fetchTools_1.getLocationOrigin() + "/" + users + "/" + id;
                    method = 'get';
                    headers = { authorization: "Bearer " + (token || '') };
                    options = { credentials: 'same-origin' };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    dispatch({ type: REQUEST_USER_INFOS_DATA });
                    return [4, axios_1.default.request(tslib_1.__assign({ url: url,
                            method: method, withCredentials: true, headers: tslib_1.__assign({ Accept: 'application/json', 'Content-Type': 'application/json', 'Acces-Control-Allow-Origin': '*' }, headers) }, options))];
                case 2:
                    reponse = _a.sent();
                    return [2, reponse];
                case 3:
                    error_1 = _a.sent();
                    dispatch({ type: ERROR_USER_INFOS_DATA, error: error_1 });
                    return [3, 4];
                case 4: return [2];
            }
        });
    }); };
}
function fetchUserInfoDataIfNeeded(id) {
    if (id === void 0) { id = ''; }
    return function (dispatch, getState) {
        if (shouldFetchUserInfoData(getState())) {
            return dispatch(fetchUserInfosData(id));
        }
        return Promise.resolve();
    };
}
exports.fetchUserInfoDataIfNeeded = fetchUserInfoDataIfNeeded;
function shouldFetchUserInfoData(state) {
    var isFetching = state.userAuth.isFetching;
    return !isFetching;
}


/***/ }),

/***/ "./src/redux/store/configureStore.ts":
/*!*******************************************!*\
  !*** ./src/redux/store/configureStore.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.history = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var connected_react_router_1 = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
var redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
var history_1 = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
var redux_persist_1 = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
var storage_1 = tslib_1.__importDefault(__webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js"));
var redux_thunk_1 = tslib_1.__importDefault(__webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js"));
var redux_logger_1 = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
var reducers_1 = tslib_1.__importDefault(__webpack_require__(/*! ../modules/reducers */ "./src/redux/modules/reducers.ts"));
var fetchMiddleware_1 = tslib_1.__importDefault(__webpack_require__(/*! ../middleware/fetchMiddleware */ "./src/redux/middleware/fetchMiddleware.ts"));
var isProd = "dev" === 'production';
exports.history = history_1.createBrowserHistory();
var loggerMiddleware = redux_logger_1.createLogger({
    level: 'info',
    collapsed: true,
});
var enhancer = !isProd
    ? redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default, fetchMiddleware_1.default, connected_react_router_1.routerMiddleware(exports.history), loggerMiddleware))
    : redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default, fetchMiddleware_1.default, connected_react_router_1.routerMiddleware(exports.history)));
var persistConfig = {
    key: 'root',
    storage: storage_1.default,
    blacklist: ['router'],
};
var persistedReducer = redux_persist_1.persistReducer(persistConfig, connected_react_router_1.connectRouter(exports.history)(reducers_1.default));
function configureStore(initialState) {
    if (initialState === void 0) { initialState = {}; }
    var store = redux_1.createStore(persistedReducer, initialState, enhancer);
    var persistor = redux_persist_1.persistStore(store);
    return { store: store, persistor: persistor };
}
exports.default = configureStore;


/***/ }),

/***/ "./src/routes/MainRoutes.tsx":
/*!***********************************!*\
  !*** ./src/routes/MainRoutes.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_1 = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
var routes_1 = __webpack_require__(/*! ./routes */ "./src/routes/routes.ts");
var privateRoute_1 = tslib_1.__importDefault(__webpack_require__(/*! ../components/privateRoute */ "./src/components/privateRoute/index.ts"));
var MainRoutes = function () {
    return (react_1.default.createElement(react_router_1.Switch, null,
        react_1.default.createElement(react_router_1.Route, { exact: true, path: "/" },
            react_1.default.createElement(routes_1.Home, null)),
        react_1.default.createElement(react_router_1.Route, { exact: true, path: "/registration" },
            react_1.default.createElement(routes_1.Registration, null)),
        react_1.default.createElement(react_router_1.Route, { path: "/about" },
            react_1.default.createElement(routes_1.About, null)),
        react_1.default.createElement(react_router_1.Route, { path: "/element" },
            react_1.default.createElement(routes_1.Element, null)),
        react_1.default.createElement(react_router_1.Route, { path: "/elements" },
            react_1.default.createElement(routes_1.Elements, null)),
        react_1.default.createElement(privateRoute_1.default, { path: "/onboarding" },
            react_1.default.createElement(routes_1.Onboarding, null)),
        react_1.default.createElement(privateRoute_1.default, { path: "/orders" },
            react_1.default.createElement(routes_1.Orders, null)),
        react_1.default.createElement(privateRoute_1.default, { path: "/profile" },
            react_1.default.createElement(routes_1.Profile, null)),
        react_1.default.createElement(react_router_1.Route, { path: "*" },
            react_1.default.createElement(routes_1.PageNotFound, null))));
};
exports.default = MainRoutes;


/***/ }),

/***/ "./src/routes/routes.ts":
/*!******************************!*\
  !*** ./src/routes/routes.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = exports.Orders = exports.PageNotFound = exports.Elements = exports.Element = exports.Onboarding = exports.Registration = exports.About = exports.Home = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var loadable_components_1 = tslib_1.__importDefault(__webpack_require__(/*! loadable-components */ "./node_modules/loadable-components/dist/loadable-components.es.js"));
exports.Home = loadable_components_1.default(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(__webpack_require__(/*! ../pages/home */ "./src/pages/home/index.ts")); }); }, {
    modules: ['home'],
});
exports.About = loadable_components_1.default(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(__webpack_require__(/*! ../pages/about */ "./src/pages/about/index.ts")); }); }, {
    modules: ['about'],
});
exports.Registration = loadable_components_1.default(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(__webpack_require__(/*! ../pages/registration */ "./src/pages/registration/index.ts")); }); }, {
    modules: ['registration'],
});
exports.Onboarding = loadable_components_1.default(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(__webpack_require__(/*! ../pages/onboarding */ "./src/pages/onboarding/index.ts")); }); }, {
    modules: ['onboarding'],
});
exports.Element = loadable_components_1.default(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(__webpack_require__(/*! ../pages/element */ "./src/pages/element/index.ts")); }); }, {
    modules: ['element'],
});
exports.Elements = loadable_components_1.default(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(__webpack_require__(/*! ../pages/elements */ "./src/pages/elements/index.ts")); }); }, {
    modules: ['elements'],
});
exports.PageNotFound = loadable_components_1.default(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(__webpack_require__(/*! ../pages/pageNotFound */ "./src/pages/pageNotFound/index.ts")); }); }, {
    modules: ['pageNotFound'],
});
exports.Orders = loadable_components_1.default(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(__webpack_require__(/*! ../pages/orders */ "./src/pages/orders/index.ts")); }); }, {
    modules: ['orders'],
});
exports.Profile = loadable_components_1.default(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(__webpack_require__(/*! ../pages/profile */ "./src/pages/profile/index.ts")); }); }, {
    modules: ['profile'],
});


/***/ }),

/***/ "./src/services/API/fetchTools.ts":
/*!****************************************!*\
  !*** ./src/services/API/fetchTools.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeBase64 = exports.jsonHeader = exports.defaultOptions = exports.postMethod = exports.getMethod = exports.getLocationOrigin = void 0;
var js_base64_1 = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
exports.getLocationOrigin = function () {
    return 'http://api.fabrika.byte-up.company/api/v1';
};
exports.getMethod = {
    method: 'get',
};
exports.postMethod = {
    method: 'post',
};
exports.defaultOptions = {
    credentials: 'same-origin',
};
exports.jsonHeader = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-control-Allow-Origin': '*'
    },
};
exports.encodeBase64 = function (stringToEncode) {
    if (stringToEncode === void 0) { stringToEncode = ''; }
    return js_base64_1.Base64.encode(stringToEncode);
};


/***/ }),

/***/ "./src/services/auth/index.ts":
/*!************************************!*\
  !*** ./src/services/auth/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var jwt_decode_1 = tslib_1.__importDefault(__webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js"));
var is_after_1 = tslib_1.__importDefault(__webpack_require__(/*! date-fns/is_after */ "./node_modules/date-fns/is_after/index.js"));
var TOKEN_KEY = 'token';
var USER_INFO = 'userInfo';
var APP_PERSIST_STORES_TYPES = [
    'localStorage',
    'sessionStorage',
];
var parse = JSON.parse;
var stringify = JSON.stringify;
exports.auth = {
    getToken: function (fromStorage, tokenKey) {
        if (fromStorage === void 0) { fromStorage = APP_PERSIST_STORES_TYPES[0]; }
        if (tokenKey === void 0) { tokenKey = TOKEN_KEY; }
        if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
            return (localStorage && localStorage.getItem(tokenKey)) || null;
        }
        if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
            return (sessionStorage && sessionStorage.getItem(tokenKey)) || null;
        }
        return null;
    },
    setToken: function (value, toStorage, tokenKey) {
        if (value === void 0) { value = ''; }
        if (toStorage === void 0) { toStorage = APP_PERSIST_STORES_TYPES[0]; }
        if (tokenKey === void 0) { tokenKey = TOKEN_KEY; }
        if (!value || value.length <= 0) {
            return;
        }
        if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
            if (localStorage) {
                localStorage.setItem(tokenKey, value);
                return;
            }
        }
        if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
            if (sessionStorage) {
                sessionStorage.setItem(tokenKey, value);
                return;
            }
        }
    },
    isAuthenticated: function (fromStorage, tokenKey) {
        if (fromStorage === void 0) { fromStorage = APP_PERSIST_STORES_TYPES[0]; }
        if (tokenKey === void 0) { tokenKey = TOKEN_KEY; }
        if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
            if (localStorage && localStorage.getItem(tokenKey)) {
                return true;
            }
            return false;
        }
        if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
            if (sessionStorage && sessionStorage.getItem(tokenKey)) {
                return true;
            }
            return false;
        }
        return false;
    },
    clearToken: function (storage, tokenKey) {
        if (storage === void 0) { storage = APP_PERSIST_STORES_TYPES[0]; }
        if (tokenKey === void 0) { tokenKey = TOKEN_KEY; }
        if (localStorage && localStorage[tokenKey]) {
            localStorage.removeItem(tokenKey);
            return true;
        }
        if (sessionStorage && sessionStorage[tokenKey]) {
            sessionStorage.removeItem(tokenKey);
            return true;
        }
        return false;
    },
    getTokenExpirationDate: function (encodedToken) {
        if (!encodedToken) {
            return new Date(0);
        }
        var token = jwt_decode_1.default(encodedToken);
        if (!token.exp) {
            return new Date(0);
        }
        var expirationDate = new Date(token.exp * 1000);
        return expirationDate;
    },
    isExpiredToken: function (encodedToken) {
        var expirationDate = this.getTokenExpirationDate(encodedToken);
        var rightNow = new Date();
        var isExpiredToken = is_after_1.default(rightNow, expirationDate);
        return isExpiredToken;
    },
    getUserInfo: function (fromStorage, userInfoKey) {
        if (fromStorage === void 0) { fromStorage = APP_PERSIST_STORES_TYPES[0]; }
        if (userInfoKey === void 0) { userInfoKey = USER_INFO; }
        if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
            try {
                return ((window &&
                    localStorage &&
                    parse(localStorage.getItem(userInfoKey) || '')) ||
                    null);
            }
            catch (error) {
                return null;
            }
        }
        if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
            try {
                return ((window &&
                    sessionStorage &&
                    parse(sessionStorage.getItem(userInfoKey) || '')) ||
                    null);
            }
            catch (error) {
                return null;
            }
        }
        return null;
    },
    setUserInfo: function (value, toStorage, userInfoKey) {
        if (value === void 0) { value = ''; }
        if (toStorage === void 0) { toStorage = APP_PERSIST_STORES_TYPES[0]; }
        if (userInfoKey === void 0) { userInfoKey = USER_INFO; }
        if (!value || value.length <= 0) {
            return;
        }
        if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
            if (localStorage) {
                localStorage.setItem(userInfoKey, stringify(value));
                return;
            }
        }
        if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
            if (sessionStorage) {
                sessionStorage.setItem(userInfoKey, stringify(value));
                return;
            }
        }
    },
    clearUserInfo: function (userInfoKey) {
        if (userInfoKey === void 0) { userInfoKey = USER_INFO; }
        if (localStorage && localStorage[userInfoKey]) {
            localStorage.removeItem(userInfoKey);
            return;
        }
        if (sessionStorage && sessionStorage[userInfoKey]) {
            sessionStorage.removeItem(userInfoKey);
            return;
        }
    },
    clearAllAppStorage: function () {
        if (localStorage) {
            localStorage.clear();
            return;
        }
        if (sessionStorage) {
            sessionStorage.clear();
            return;
        }
    },
};
exports.default = exports.auth;


/***/ }),

/***/ "./src/services/sw/registerServiceWorker.ts":
/*!**************************************************!*\
  !*** ./src/services/sw/registerServiceWorker.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var appConfig_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../config/appConfig */ "./src/config/appConfig.ts"));
var swPath = appConfig_1.default.sw.path;
function registerServiceWorker() {
    var _this = this;
    if (typeof window !== undefined) {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var registration, error_1;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4, navigator.serviceWorker.register(swPath)];
                        case 1:
                            registration = _a.sent();
                            console.log('SW registered: ', registration);
                            return [3, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.log('SW registration failed: ', error_1);
                            return [3, 3];
                        case 3: return [2];
                    }
                });
            }); });
        }
    }
}
exports.default = registerServiceWorker;


/***/ }),

/***/ "./src/style/GlobalStyles.ts":
/*!***********************************!*\
  !*** ./src/style/GlobalStyles.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: #317AF7;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"], ["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: #317AF7;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"])));
exports.default = GlobalStyle;
var templateObject_1;


/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alexpetul/Desktop/fabrika.cloud-master/frontend/src/index.tsx */"./src/index.tsx");


/***/ })

/******/ });
//# sourceMappingURL=app.8eb7f15d023dbb388e19.js.map