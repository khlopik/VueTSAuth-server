webpackJsonp([1],{

/***/ "+ro/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "4q9H":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "7zck":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9R/n":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9Rz0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "CR7k":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FhoZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = __webpack_require__("o/zv")

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: Object({"NODE_ENV":"production","APIENDPOINT":https://vuenodeapp.herokuapp.com}).npm_config_report
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vuetify/dist/vuetify.min.css
var vuetify_min = __webpack_require__("7zck");
var vuetify_min_default = /*#__PURE__*/__webpack_require__.n(vuetify_min);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./node_modules/vuetify/dist/vuetify.js
var vuetify = __webpack_require__("3EgV");
var vuetify_default = /*#__PURE__*/__webpack_require__.n(vuetify);

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/index.js
var lib = __webpack_require__("ESwS");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//

/* harmony default export */ var App = ({
	name: 'App'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b6745898","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("4q9H")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// EXTERNAL MODULE: ./node_modules/vuex/dist/logger.js
var logger = __webpack_require__("sax8");
var logger_default = /*#__PURE__*/__webpack_require__.n(logger);

// CONCATENATED MODULE: ./src/store/modules/auth/state.js
/* harmony default export */ var auth_state = ({
	userId: null,
	isLoggedIn: false,
	userUrl: '',
	userAccess: '',
	details: {
		email: null,
		name: '',
		avatar: null
	},
	users: []
});
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("bOdI");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__("2aIq");
var objectDestructuringEmpty_default = /*#__PURE__*/__webpack_require__.n(objectDestructuringEmpty);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__("//Fk");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("mtWM");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__("FhoZ");
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// EXTERNAL MODULE: ./config/prod.env.js
var prod_env = __webpack_require__("rBKV");
var prod_env_default = /*#__PURE__*/__webpack_require__.n(prod_env);

// EXTERNAL MODULE: ./config/dev.env.js
var dev_env = __webpack_require__("dhIU");
var dev_env_default = /*#__PURE__*/__webpack_require__.n(dev_env);

// CONCATENATED MODULE: ./src/components/LoginPage/loginService.js







// console.log('config: ', config);
// console.log('prod: ', prod);
// console.log('dev: ', dev);
// console.log('process.env: ', process.env);
var server = dev_env_default.a.APIENDPOINT;
if (true) {
	server = prod_env_default.a.APIENDPOINT;
}

console.log('server: ', server);

var header = function header() {
	var authUser = JSON.parse(localStorage.getItem('authUser'));
	return {
		headers: {
			'x-auth': authUser && authUser.token ? authUser.token : ''
		}
	};
};

var loginService_getUsers = function getUsers() {
	return new promise_default.a(function (resolve, reject) {
		axios_default.a.get(server + '/users', header()).then(function (result) {
			resolve(result);
		}).catch(function (error) {
			console.log('error: ', error);
			reject(error);
		});
	});
};

var loginService_saveAuthUser = function saveAuthUser(result) {
	localStorage.setItem('authUser', stringify_default()({
		email: result.data.email,
		token: result.headers['x-auth'],
		access: result.data.access
	}));
};

var loginService_loginService = function loginService(email, password) {
	return new promise_default.a(function (resolve, reject) {
		console.log('host', server);
		axios_default.a.post(server + '/auth/login', {
			email: email,
			password: password
		}).then(function (result) {
			loginService_saveAuthUser(result);
			resolve(result.data);
		}).catch(function (error) {
			console.log('error: ', error);
			reject(error);
		});
	});
};

var loginService_createUser = function createUser(email, password) {
	return new promise_default.a(function (resolve, reject) {
		axios_default.a.post(server + '/users', {
			email: email,
			password: password
		}).then(function (result) {
			loginService_saveAuthUser(result);
			resolve(result.data);
		}).catch(function (error) {
			console.log('error: ', error);
			reject(error);
		});
	});
};

var loginService_authUserByToken = function authUserByToken() {
	return new promise_default.a(function (resolve, reject) {
		axios_default.a.get(server + '/auth/me', header()).then(function (result) {
			// console.log('result.data: ', result.data);
			resolve(result);
		}).catch(function (error) {
			console.log('error: ', error);
			localStorage.removeItem('authUser');
			reject(error);
		});
	});
};

var loginService_updateUserDetails = function updateUserDetails(userId, details) {
	return new promise_default.a(function (resolve, reject) {
		// console.log('hello inside api.js');
		// console.log('userId inside api.js: ', userId);
		// console.log('details: ', details);
		axios_default.a.patch(server + '/users/' + userId, details, header()).then(function (result) {
			// console.log('result: ', result);
			resolve(result);
		}).catch(function (error) {
			console.log('error: ', error);
			reject(error);
		});
	});
};

var loginService_updateUserAccess = function updateUserAccess(userId, access) {
	return new promise_default.a(function (resolve, reject) {
		axios_default.a.patch(server + '/users/access/' + userId, { access: access }, header()).then(function (result) {
			// console.log('result: ', result);
			resolve(result);
		}).catch(function (error) {
			console.log('error: ', error);
			reject(error);
		});
	});
};

var loginService_removeUserAccount = function removeUserAccount(userId) {
	return new promise_default.a(function (resolve, reject) {
		axios_default.a.delete(server + '/users/' + userId, header()).then(function (result) {
			resolve(result);
		}).catch(function (error) {
			console.log('error: ', error);
			reject(error);
		});
	});
};


// CONCATENATED MODULE: ./src/store/modules/auth/types.js
var mutation = {
	SET_LOGGED_IN: 'SET_LOGGED_IN',
	SET_USER_URL: 'SET_USER_URL',
	SET_USER_ACCESS: 'SET_USER_ACCESS',
	UPDATE_USER_DETAILS: 'UPDATE_USER_DETAILS',
	CLEAR_USER_AVATAR: 'CLEAR_USER_AVATAR',
	SAVE_USERS_TO_STORE: 'SAVE_USERS_TO_STORE',
	UPDATE_USER_ACCESS: 'UPDATE_USER_ACCESS'
};

var action = {
	SET_LOGGED_IN: 'SET_LOGGED_IN',
	SET_USER_URL: 'SET_USER_URL',
	CHECK_LOGIN_ON_SERVER: 'CHECK_LOGIN_ON_SERVER',
	LOGOUT_USER: 'LOGOUT_USER',
	UPDATE_USER_DETAILS_ON_SERVER: 'UPDATE_USER_DETAILS_ON_SERVER',
	CLEAR_USER_AVATAR: 'CLEAR_USER_AVATAR',
	REMOVE_USER_ACCOUNT: 'REMOVE_USER_ACCOUNT',
	GET_USERS_FROM_SERVER: 'GET_USERS_FROM_SERVER',
	UPDATE_USER_ACCESS: 'UPDATE_USER_ACCESS'
};

var getter = {
	IS_LOGGED_IN: 'IS_LOGGED_IN',
	GET_USER_URL: 'GET_USER_URL',
	GET_USER_ACCESS: 'GET_USER_ACCESS',
	GET_USER_DETAILS: 'GET_USER_DETAILS',
	GET_USER_AVATAR: 'GET_USER_AVATAR',
	GET_ALL_USERS: 'GET_ALL_USERS'
};

/* harmony default export */ var types = ({
	action: action,
	mutation: mutation,
	getter: getter
});
// CONCATENATED MODULE: ./src/store/modules/auth/actions.js




var _action$SET_LOGGED_IN;




/* harmony default export */ var actions = (_action$SET_LOGGED_IN = {}, defineProperty_default()(_action$SET_LOGGED_IN, action.SET_LOGGED_IN, function (_ref, status) {
	var commit = _ref.commit;

	commit(mutation.SET_LOGGED_IN, status);
}), defineProperty_default()(_action$SET_LOGGED_IN, action.SET_USER_URL, function (_ref2, url) {
	var commit = _ref2.commit;

	commit(mutation.SET_USER_URL, url);
}), defineProperty_default()(_action$SET_LOGGED_IN, action.CHECK_LOGIN_ON_SERVER, function (_ref3) {
	var commit = _ref3.commit;

	return new promise_default.a(function (resolve, reject) {
		var authUser = JSON.parse(localStorage.getItem('authUser'));
		if (authUser && authUser.token) {
			loginService_authUserByToken(authUser.token).then(function (result) {
				commit(mutation.SET_LOGGED_IN, true);
				commit(mutation.UPDATE_USER_DETAILS, { data: result.data });
				resolve();
			}).catch(function (e) {
				commit(mutation.SET_LOGGED_IN, false);
				reject();
			});
		} else {
			commit(mutation.SET_LOGGED_IN, false);
			resolve();
		}
	});
}), defineProperty_default()(_action$SET_LOGGED_IN, action.LOGOUT_USER, function (_ref4) {
	var commit = _ref4.commit;

	localStorage.removeItem('authUser');
	commit(mutation.SET_USER_ACCESS, '');
	commit(mutation.SET_LOGGED_IN, false);
}), defineProperty_default()(_action$SET_LOGGED_IN, action.UPDATE_USER_DETAILS_ON_SERVER, function (_ref5, _ref6) {
	var commit = _ref5.commit;
	var userId = _ref6.userId,
	    details = _ref6.details;

	return loginService_updateUserDetails(userId, details).then(function (result) {
		commit(mutation.UPDATE_USER_DETAILS, { userId: userId, data: result.data });
		promise_default.a.resolve();
	}).catch(function (error) {
		console.log('error: ', error);
		promise_default.a.reject(error);
	});
}), defineProperty_default()(_action$SET_LOGGED_IN, action.CLEAR_USER_AVATAR, function (_ref7, userId) {
	var commit = _ref7.commit;

	commit(mutation.CLEAR_USER_AVATAR, userId);
}), defineProperty_default()(_action$SET_LOGGED_IN, action.REMOVE_USER_ACCOUNT, function (_ref8, userId) {
	objectDestructuringEmpty_default()(_ref8);

	return loginService_removeUserAccount(userId).then(function (result) {
		// console.log('result: ', result);
		promise_default.a.resolve(result);
	}).catch(function (error) {
		promise_default.a.reject(error);
	});
}), defineProperty_default()(_action$SET_LOGGED_IN, action.GET_USERS_FROM_SERVER, function (_ref9) {
	var commit = _ref9.commit;

	loginService_getUsers().then(function (result) {
		// console.log('result: ', result.data);
		commit(mutation.SAVE_USERS_TO_STORE, result.data);
	}).catch(function (error) {
		console.log('error: ', error);
	});
}), defineProperty_default()(_action$SET_LOGGED_IN, action.UPDATE_USER_ACCESS, function (_ref10, _ref11) {
	var commit = _ref10.commit;
	var userId = _ref11.userId,
	    access = _ref11.access;

	loginService_updateUserAccess(userId, access).then(function (result) {
		commit(mutation.UPDATE_USER_ACCESS, { userId: userId, access: result.data.access });
	}).catch(function (error) {
		console.log('error: ', error);
	});
}), _action$SET_LOGGED_IN);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("M4fF");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);

// CONCATENATED MODULE: ./src/store/modules/auth/mutations.js



var _mutation$SET_LOGGED_;

/* eslint no-param-reassign: "error" */
// import config from '@/../config';





var mutations_server = dev_env_default.a.APIENDPOINT;
if (true) {
	mutations_server = prod_env_default.a.APIENDPOINT;
}

/* harmony default export */ var mutations = (_mutation$SET_LOGGED_ = {}, defineProperty_default()(_mutation$SET_LOGGED_, mutation.SET_LOGGED_IN, function (auth, status) {
	auth.isLoggedIn = status;
}), defineProperty_default()(_mutation$SET_LOGGED_, mutation.SET_USER_URL, function (auth, url) {
	auth.userUrl = url;
}), defineProperty_default()(_mutation$SET_LOGGED_, mutation.SET_USER_ACCESS, function (auth, access) {
	auth.userAccess = access;
}), defineProperty_default()(_mutation$SET_LOGGED_, mutation.UPDATE_USER_DETAILS, function (auth, _ref) {
	var userId = _ref.userId,
	    data = _ref.data;

	if (!userId || userId === auth.userId) {
		auth.userAccess = data.access;
		auth.details.name = data.details.name;
		auth.details.email = data.email;
		auth.userId = data._id;
		auth.details.avatar = mutations_server + '/' + data.details.avatar;
	}
	auth.users = lodash_default.a.map(auth.users, function (user) {
		if (user._id === userId) {
			return extends_default()({}, user, {
				details: extends_default()({}, user.details, {
					name: data.details.name,
					avatar: mutations_server + '/' + data.details.avatar
				})
			});
		} else {
			return user;
		}
	});
}), defineProperty_default()(_mutation$SET_LOGGED_, mutation.CLEAR_USER_AVATAR, function (auth, userId) {
	if (!userId) {
		auth.details.avatar = mutations_server + '/images/unauth/unknown.png';
	} else {
		if (userId === auth.userId) {
			auth.details.avatar = mutations_server + '/images/unauth/unknown.png';
		}
		var result = lodash_default.a.map(auth.users, function (user) {
			if (user._id === userId) {
				return extends_default()({}, user, {
					details: extends_default()({}, user.details, {
						avatar: mutations_server + '/images/unauth/unknown.png'
					})
				});
			} else {
				return user;
			}
		});
		auth.users = result;
	}
}), defineProperty_default()(_mutation$SET_LOGGED_, mutation.SAVE_USERS_TO_STORE, function (auth, users) {
	// console.log('users: ', users);
	auth.users = lodash_default.a.map(users, function (user) {
		// console.log('user: ', user);
		var updatedUser = extends_default()({}, user, {
			details: extends_default()({}, user.details, {
				avatar: mutations_server + '/' + user.details.avatar
			})
		});
		// console.log('updatedUser: ', updatedUser);
		return updatedUser;
	});
}), defineProperty_default()(_mutation$SET_LOGGED_, mutation.UPDATE_USER_ACCESS, function (auth, _ref2) {
	var userId = _ref2.userId,
	    access = _ref2.access;

	if (userId === auth.userId) {
		auth.access = access;
	} else {
		auth.users = lodash_default.a.map(auth.users, function (user) {
			if (user._id === userId) {
				return extends_default()({}, user, {
					access: access
				});
			} else {
				return user;
			}
		});
	}
}), _mutation$SET_LOGGED_);
// CONCATENATED MODULE: ./src/store/modules/auth/getters.js


var _getter$IS_LOGGED_IN$;





/* harmony default export */ var getters = (_getter$IS_LOGGED_IN$ = {}, defineProperty_default()(_getter$IS_LOGGED_IN$, getter.IS_LOGGED_IN, function (state) {
	return state.auth.isLoggedIn;
}), defineProperty_default()(_getter$IS_LOGGED_IN$, getter.GET_USER_URL, function (state) {
	return state.auth.userUrl;
}), defineProperty_default()(_getter$IS_LOGGED_IN$, getter.GET_USER_ACCESS, function (state) {
	return state.auth.userAccess;
}), defineProperty_default()(_getter$IS_LOGGED_IN$, getter.GET_USER_DETAILS, function (state) {
	return {
		access: state.auth.userAccess,
		name: state.auth.details.name,
		avatar: state.auth.details.avatar,
		email: state.auth.details.email,
		id: state.auth.userId
	};
}), defineProperty_default()(_getter$IS_LOGGED_IN$, getter.GET_USER_AVATAR, function (state) {
	return function (userId) {
		// if (userId) {
		// 	console.log('state: ', state);
		// 	console.log('userId: ', userId);
		// 	const user = _.filter(state.auth.users, user => user._id === userId);
		// 	if (user.length) {
		// 		console.log('user: ', user);
		// 		return user.details.avatar;
		// 	}
		// }
		// return state.auth.details.avatar;
	};
}), defineProperty_default()(_getter$IS_LOGGED_IN$, getter.GET_ALL_USERS, function (state) {
	var result = lodash_default.a.map(state.auth.users, function (user) {
		return {
			name: user.details.name,
			avatar: user.details.avatar,
			email: user.email,
			id: user._id,
			access: user.access
		};
	});
	return result;
}), _getter$IS_LOGGED_IN$);
// CONCATENATED MODULE: ./src/store/modules/auth/index.js







/* harmony default export */ var modules_auth = ({
	state: auth_state,
	actions: actions,
	mutations: mutations
});
// CONCATENATED MODULE: ./src/store/modules/index.js



var modules_types = {
	auth: types
};

var modules_getters = extends_default()({}, getters);

var modules = {
	auth: modules_auth
};
// CONCATENATED MODULE: ./src/store/index.js




// import actionsLogger from './plugins/actionsLogger'

vue_esm["a" /* default */].use(vuex_esm["a" /* default */]);


/* harmony default export */ var store = (new vuex_esm["a" /* default */].Store({
	modules: modules,
	getters: modules_getters,
	plugins:  false ? [mutationsLogger()] : []
}));
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Header/Header.vue

//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Header = ({
	name: 'Header',
	computed: extends_default()({}, Object(vuex_esm["c" /* mapGetters */])({
		isLoggedIn: modules_types.auth.getter.IS_LOGGED_IN,
		userDetails: modules_types.auth.getter.GET_USER_DETAILS
	})),
	methods: extends_default()({}, Object(vuex_esm["b" /* mapActions */])({
		logout: modules_types.auth.action.LOGOUT_USER
	}), {
		loginUser: function loginUser() {
			if (this.isLoggedIn) {
				this.logout();
			} else {
				this.$router.push('/auth/login');
			}

			// this.$router.go();
		}
	})
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c0811f08","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Header/Header.vue
var Header_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header"},[_c('v-toolbar',{attrs:{"color":"yellow"}},[_c('v-toolbar-side-icon'),_vm._v(" "),_c('v-toolbar-title',[_vm._v("Vue Application + Node.js & MongoDB + Authorisation")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-toolbar-items',{staticClass:"hidden-sm-and-down"},[_c('v-btn',{attrs:{"flat":""},nativeOn:{"click":function($event){return _vm.loginUser($event)}}},[_vm._v(_vm._s(_vm.isLoggedIn ? ("Log out (" + (_vm.userDetails.name || _vm.userDetails.email) + ")") : 'log in / Sign up'))])],1)],1)],1)}
var Header_staticRenderFns = []
var Header_esExports = { render: Header_render, staticRenderFns: Header_staticRenderFns }
/* harmony default export */ var Header_Header = (Header_esExports);
// CONCATENATED MODULE: ./src/components/Header/Header.vue
function Header_injectStyle (ssrContext) {
  __webpack_require__("9Rz0")
}
var Header_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Header___vue_template_functional__ = false
/* styles */
var Header___vue_styles__ = Header_injectStyle
/* scopeId */
var Header___vue_scopeId__ = "data-v-c0811f08"
/* moduleIdentifier (server only) */
var Header___vue_module_identifier__ = null
var Header_Component = Header_normalizeComponent(
  Header,
  Header_Header,
  Header___vue_template_functional__,
  Header___vue_styles__,
  Header___vue_scopeId__,
  Header___vue_module_identifier__
)

/* harmony default export */ var components_Header_Header = (Header_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Footer/Footer.vue
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Footer = ({
	name: 'Footer'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b7d703f4","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Footer/Footer.vue
var Footer_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer"},[_c('v-footer',{staticClass:"pa-3",attrs:{"color":"yellow"}},[_c('v-spacer'),_vm._v(" "),_c('div',[_vm._v("© "+_vm._s(new Date().getFullYear())+" by Oleksii Khlopotov")])],1)],1)}
var Footer_staticRenderFns = []
var Footer_esExports = { render: Footer_render, staticRenderFns: Footer_staticRenderFns }
/* harmony default export */ var Footer_Footer = (Footer_esExports);
// CONCATENATED MODULE: ./src/components/Footer/Footer.vue
function Footer_injectStyle (ssrContext) {
  __webpack_require__("yEwv")
}
var Footer_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Footer___vue_template_functional__ = false
/* styles */
var Footer___vue_styles__ = Footer_injectStyle
/* scopeId */
var Footer___vue_scopeId__ = "data-v-b7d703f4"
/* moduleIdentifier (server only) */
var Footer___vue_module_identifier__ = null
var Footer_Component = Footer_normalizeComponent(
  Footer,
  Footer_Footer,
  Footer___vue_template_functional__,
  Footer___vue_styles__,
  Footer___vue_scopeId__,
  Footer___vue_module_identifier__
)

/* harmony default export */ var components_Footer_Footer = (Footer_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/UserDetails.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var STATUS_INITIAL = 0;
var STATUS_SAVING = 1;
var STATUS_SUCCESS = 2;
var STATUS_FAILED = 3;

/* harmony default export */ var UserDetails = ({
	name: 'UserDetails',
	props: {
		userDetails: {
			type: Object,
			required: true
		}
	},
	data: function data() {
		return {
			// email: '',
			name: this.userDetails.name,
			// avatar: '',
			avatarChanged: false,
			savingStatus: STATUS_INITIAL,
			formData: new FormData()
		};
	},

	computed: extends_default()({}, Object(vuex_esm["c" /* mapGetters */])({
		userAccess: modules_types.auth.getter.GET_USER_ACCESS
		// userDetails: types.auth.getter.GET_USER_DETAILS,
		// avatar: () => (types.auth.getter.GET_USER_AVATAR(this.userDetails)),
	}), {
		isInitial: function isInitial() {
			return this.savingStatus === STATUS_INITIAL;
		},
		isSaving: function isSaving() {
			return this.savingStatus === STATUS_SAVING;
		},
		isSuccess: function isSuccess() {
			return this.savingStatus === STATUS_SUCCESS;
		},
		isFailed: function isFailed() {
			return this.savingStatus === STATUS_FAILED;
		},
		formChanged: function formChanged() {
			return this.avatarChanged || this.name !== this.userDetails.name;
		}
	}),
	methods: extends_default()({}, Object(vuex_esm["b" /* mapActions */])({
		updateDetails: modules_types.auth.action.UPDATE_USER_DETAILS_ON_SERVER,
		clearUserAvatar: modules_types.auth.action.CLEAR_USER_AVATAR,
		removeUserAccount: modules_types.auth.action.REMOVE_USER_ACCOUNT,
		updateUserAccess: modules_types.auth.action.UPDATE_USER_ACCESS
	}), {
		saveUserDetails: function saveUserDetails() {
			var _this = this;

			this.formData.append('name', this.name);
			console.log('this.formData: ', this.formData);
			this.savingStatus = STATUS_SAVING;
			this.updateDetails({
				userId: this.userDetails.id,
				details: this.formData
			}).then(function () {
				_this.savingStatus = STATUS_SUCCESS;
				_this.avatarChanged = false;
			}).catch(function () {
				_this.savingStatus = STATUS_FAILED;
			});
		},
		saveForm: function saveForm(files) {
			if (!files.length) return;
			this.formData.append('avatar', files[0], files[0].name);
			var reader = new FileReader();
			var self = this;
			reader.onload = function (e) {
				self.$refs.avatar.src = e.target.result;
			};
			reader.readAsDataURL(files[0]);
			this.savingStatus = STATUS_INITIAL;
			this.avatarChanged = true;
		},
		clearAvatar: function clearAvatar() {
			this.clearUserAvatar(this.userDetails.id);
			this.savingStatus = STATUS_INITIAL;
			this.formData.append('avatar', '');
			this.avatarChanged = true;
		},
		inputChange: function inputChange($event) {
			this.name = $event;
		}
	})
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c5950418","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/UserDetails.vue
var UserDetails_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"user-details"},[_c('v-form',{staticClass:"user-form",attrs:{"enctype":"multipart/form-data"}},[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs4":""}},[_c('v-subheader',[_vm._v("E-mail:")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs8":""}},[_c('v-text-field',{ref:"email",staticClass:"user-form-input",attrs:{"disabled":"","name":"email","label":"E-mail address","value":_vm.userDetails.email}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs4":""}},[_c('v-subheader',[_vm._v("User name:")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs8":""}},[_c('v-text-field',{ref:"name",attrs:{"name":"name","label":"User name","value":_vm.userDetails.name},on:{"input":function($event){_vm.inputChange($event)}}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs4":""}},[_c('v-subheader',[_vm._v("Avatar:")]),_vm._v(" "),_c('div',{staticClass:"avatar-buttons"},[_c('label',{staticClass:"avatar-label"},[_c('input',{staticClass:"avatar-file",attrs:{"type":"file","name":"file"},on:{"change":function($event){_vm.saveForm($event.target.files); _vm.accept='image/*'}}}),_vm._v("\n\t\t\t\t\t\t\tLoad image\n\t\t\t\t\t\t")]),_vm._v(" "),_c('v-btn',{staticClass:"avatar-clear",attrs:{"color":"warning"},on:{"click":_vm.clearAvatar}},[_vm._v("Clear avatar")])],1)],1),_vm._v(" "),_c('v-flex',{staticClass:"avatar-image",attrs:{"xs8":""}},[_c('img',{ref:"avatar",staticClass:"user-avatar",attrs:{"src":_vm.userDetails.avatar,"alt":"avatar"}})])],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}})],1),_vm._v(" "),_c('div',{staticClass:"form-buttons"},[(_vm.userAccess === 'Admin')?_c('v-btn',{attrs:{"color":"info"},on:{"click":function($event){_vm.updateUserAccess({userId: _vm.userDetails.id, access: _vm.userDetails.access === 'Resident' ? 'Admin' : 'Resident'})}}},[_vm._v("\n\t\t\t\t"+_vm._s(_vm.userDetails.access === 'Resident' ? 'Set' : 'Remove')+" Admin rights\n\t\t\t")]):_vm._e(),_vm._v(" "),_c('v-btn',{attrs:{"color":"error"},on:{"click":function($event){_vm.removeUserAccount(_vm.userDetails.id)}}},[_vm._v("Delete account")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"success","disabled":!_vm.formChanged},on:{"click":_vm.saveUserDetails}},[_vm._v("Save")])],1)],1)}
var UserDetails_staticRenderFns = []
var UserDetails_esExports = { render: UserDetails_render, staticRenderFns: UserDetails_staticRenderFns }
/* harmony default export */ var components_UserDetails = (UserDetails_esExports);
// CONCATENATED MODULE: ./src/components/UserDetails.vue
function UserDetails_injectStyle (ssrContext) {
  __webpack_require__("+ro/")
}
var UserDetails_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var UserDetails___vue_template_functional__ = false
/* styles */
var UserDetails___vue_styles__ = UserDetails_injectStyle
/* scopeId */
var UserDetails___vue_scopeId__ = "data-v-c5950418"
/* moduleIdentifier (server only) */
var UserDetails___vue_module_identifier__ = null
var UserDetails_Component = UserDetails_normalizeComponent(
  UserDetails,
  components_UserDetails,
  UserDetails___vue_template_functional__,
  UserDetails___vue_styles__,
  UserDetails___vue_scopeId__,
  UserDetails___vue_module_identifier__
)

/* harmony default export */ var src_components_UserDetails = (UserDetails_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/AdminPage/AdminPage.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var AdminPage = ({
	name: 'admin-page',
	components: {
		UserDetails: src_components_UserDetails
	},
	computed: extends_default()({}, Object(vuex_esm["c" /* mapGetters */])({
		users: modules_types.auth.getter.GET_ALL_USERS,
		userDetails: modules_types.auth.getter.GET_USER_DETAILS
	})),
	methods: extends_default()({}, Object(vuex_esm["b" /* mapActions */])({
		getUsers: modules_types.auth.action.GET_USERS_FROM_SERVER
	})),
	mounted: function mounted() {
		this.getUsers();
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-36d108dd","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/AdminPage/AdminPage.vue
var AdminPage_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"admin"},[_vm._m(0),_vm._v(" "),_c('v-expansion-panel',{staticClass:"userlist",attrs:{"popout":""}},[_c('h2',[_vm._v("User list:")]),_vm._v(" "),_vm._l((_vm.users),function(user){return _c('v-expansion-panel-content',{key:user.email,staticClass:"user-panel"},[_c('div',{staticClass:"user-header",attrs:{"slot":"header"},slot:"header"},[_vm._v("\n\t\t\t\t\t"+_vm._s(("" + (user.email) + (user.id === _vm.userDetails.id ? ' (Current user)' : '')))+"\n\t\t\t\t\t"),_c('span',{class:("user-access" + (user.access === 'Resident' ? '' : ' user-admin'))},[_vm._v(_vm._s(user.access))])]),_vm._v(" "),_c('user-details',{staticClass:"user-details",attrs:{"userDetails":user}})],1)})],2)],1)}
var AdminPage_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"admin-title"},[_c('h1',[_vm._v("Hello on Admin page")])])}]
var AdminPage_esExports = { render: AdminPage_render, staticRenderFns: AdminPage_staticRenderFns }
/* harmony default export */ var AdminPage_AdminPage = (AdminPage_esExports);
// CONCATENATED MODULE: ./src/components/AdminPage/AdminPage.vue
function AdminPage_injectStyle (ssrContext) {
  __webpack_require__("eiG0")
}
var AdminPage_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var AdminPage___vue_template_functional__ = false
/* styles */
var AdminPage___vue_styles__ = AdminPage_injectStyle
/* scopeId */
var AdminPage___vue_scopeId__ = "data-v-36d108dd"
/* moduleIdentifier (server only) */
var AdminPage___vue_module_identifier__ = null
var AdminPage_Component = AdminPage_normalizeComponent(
  AdminPage,
  AdminPage_AdminPage,
  AdminPage___vue_template_functional__,
  AdminPage___vue_styles__,
  AdminPage___vue_scopeId__,
  AdminPage___vue_module_identifier__
)

/* harmony default export */ var components_AdminPage_AdminPage = (AdminPage_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/ResidentPage/ResidentPage.vue

//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var ResidentPage = ({
	name: 'resident-page',
	components: {
		UserDetails: src_components_UserDetails
	},
	data: function data() {
		return {
			email: ''
		};
	},

	computed: extends_default()({}, Object(vuex_esm["c" /* mapGetters */])({
		userDetails: modules_types.auth.getter.GET_USER_DETAILS
	})),
	mounted: function mounted() {
		var _this = this;

		loginService_authUserByToken(JSON.parse(localStorage.getItem('authUser')).token).then(function (result) {
			_this.email = result.data.email;
		}).catch(function () {
			return 'Cannot find user information';
		});
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7ec11296","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/ResidentPage/ResidentPage.vue
var ResidentPage_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resident"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"resident-details"},[_c('h2',[_vm._v("Your details:")]),_vm._v(" "),_c('user-details',{staticClass:"resident-user",attrs:{"userDetails":_vm.userDetails}})],1)])}
var ResidentPage_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resident-title"},[_c('h1',[_vm._v("Hello on Resident page")])])}]
var ResidentPage_esExports = { render: ResidentPage_render, staticRenderFns: ResidentPage_staticRenderFns }
/* harmony default export */ var ResidentPage_ResidentPage = (ResidentPage_esExports);
// CONCATENATED MODULE: ./src/components/ResidentPage/ResidentPage.vue
function ResidentPage_injectStyle (ssrContext) {
  __webpack_require__("bb26")
}
var ResidentPage_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var ResidentPage___vue_template_functional__ = false
/* styles */
var ResidentPage___vue_styles__ = ResidentPage_injectStyle
/* scopeId */
var ResidentPage___vue_scopeId__ = "data-v-7ec11296"
/* moduleIdentifier (server only) */
var ResidentPage___vue_module_identifier__ = null
var ResidentPage_Component = ResidentPage_normalizeComponent(
  ResidentPage,
  ResidentPage_ResidentPage,
  ResidentPage___vue_template_functional__,
  ResidentPage___vue_styles__,
  ResidentPage___vue_scopeId__,
  ResidentPage___vue_module_identifier__
)

/* harmony default export */ var components_ResidentPage_ResidentPage = (ResidentPage_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/UnauthorizedPage/UnauthorizedPage.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var UnauthorizedPage = ({
	name: 'UnauthorizedPage'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-02b87b3f","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/UnauthorizedPage/UnauthorizedPage.vue
var UnauthorizedPage_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var UnauthorizedPage_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"unauth"},[_c('div',{staticClass:"unauth-title"},[_c('h1',[_vm._v("Hello on Unauthorized page")])]),_vm._v(" "),_c('h2',[_vm._v("Information:")]),_vm._v(" "),_c('p',[_vm._v("This is example project which uses such technologies:")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Frontend: Vue, Vuex, routes")]),_vm._v(" "),_c('li',[_vm._v("Backend: Node.js + express, MongoDB + Mongoose")])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_vm._v("Please login as a user or create new user account")]),_vm._v(" "),_c('p',[_vm._v("To access admin page use these credentials: admin@example.com/Password")])])}]
var UnauthorizedPage_esExports = { render: UnauthorizedPage_render, staticRenderFns: UnauthorizedPage_staticRenderFns }
/* harmony default export */ var UnauthorizedPage_UnauthorizedPage = (UnauthorizedPage_esExports);
// CONCATENATED MODULE: ./src/components/UnauthorizedPage/UnauthorizedPage.vue
function UnauthorizedPage_injectStyle (ssrContext) {
  __webpack_require__("lEOB")
}
var UnauthorizedPage_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var UnauthorizedPage___vue_template_functional__ = false
/* styles */
var UnauthorizedPage___vue_styles__ = UnauthorizedPage_injectStyle
/* scopeId */
var UnauthorizedPage___vue_scopeId__ = "data-v-02b87b3f"
/* moduleIdentifier (server only) */
var UnauthorizedPage___vue_module_identifier__ = null
var UnauthorizedPage_Component = UnauthorizedPage_normalizeComponent(
  UnauthorizedPage,
  UnauthorizedPage_UnauthorizedPage,
  UnauthorizedPage___vue_template_functional__,
  UnauthorizedPage___vue_styles__,
  UnauthorizedPage___vue_scopeId__,
  UnauthorizedPage___vue_module_identifier__
)

/* harmony default export */ var components_UnauthorizedPage_UnauthorizedPage = (UnauthorizedPage_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Main.vue

//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var Main = ({
	name: 'Main',
	components: {
		AdminPage: components_AdminPage_AdminPage,
		ResidentPage: components_ResidentPage_ResidentPage,
		UnauthorizedPage: components_UnauthorizedPage_UnauthorizedPage,
		Header: components_Header_Header,
		Footer: components_Footer_Footer
	},
	data: function data() {
		return {
			msg: 'Welcome my dear friend'
		};
	},

	computed: extends_default()({}, Object(vuex_esm["c" /* mapGetters */])({
		isLoggedIn: modules_types.auth.getter.IS_LOGGED_IN,
		userAccess: modules_types.auth.getter.GET_USER_ACCESS
	}), {
		userComponent: function userComponent() {
			if (!this.isLoggedIn) {
				return 'UnauthorizedPage';
			}
			if (this.userAccess === 'Admin') {
				return 'AdminPage';
			}
			if (this.userAccess === 'Resident') {
				return 'ResidentPage';
			}
			return '';
		}
	}),
	methods: extends_default()({}, Object(vuex_esm["b" /* mapActions */])({
		checkAuthorisation: modules_types.auth.action.CHECK_LOGIN_ON_SERVER
	})),
	beforeMount: function beforeMount() {
		this.checkAuthorisation().catch(function (e) {
			console.log('e: ', e);
			// this.$router.go();
		});
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-403e675d","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Main.vue
var Main_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main"},[_c('v-app',{attrs:{"id":"inspire"}},[_c('Header'),_vm._v(" "),_c(_vm.userComponent,{tag:"component"}),_vm._v(" "),_c('Footer')],1)],1)}
var Main_staticRenderFns = []
var Main_esExports = { render: Main_render, staticRenderFns: Main_staticRenderFns }
/* harmony default export */ var components_Main = (Main_esExports);
// CONCATENATED MODULE: ./src/components/Main.vue
function Main_injectStyle (ssrContext) {
  __webpack_require__("dl+l")
}
var Main_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Main___vue_template_functional__ = false
/* styles */
var Main___vue_styles__ = Main_injectStyle
/* scopeId */
var Main___vue_scopeId__ = "data-v-403e675d"
/* moduleIdentifier (server only) */
var Main___vue_module_identifier__ = null
var Main_Component = Main_normalizeComponent(
  Main,
  components_Main,
  Main___vue_template_functional__,
  Main___vue_styles__,
  Main___vue_scopeId__,
  Main___vue_module_identifier__
)

/* harmony default export */ var src_components_Main = (Main_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Posts.vue
//
//
//
//
//

/* harmony default export */ var Posts = ({
	name: 'posts'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2f54d2a8","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Posts.vue
var Posts_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"posts"})}
var Posts_staticRenderFns = []
var Posts_esExports = { render: Posts_render, staticRenderFns: Posts_staticRenderFns }
/* harmony default export */ var components_Posts = (Posts_esExports);
// CONCATENATED MODULE: ./src/components/Posts.vue
function Posts_injectStyle (ssrContext) {
  __webpack_require__("CR7k")
}
var Posts_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Posts___vue_template_functional__ = false
/* styles */
var Posts___vue_styles__ = Posts_injectStyle
/* scopeId */
var Posts___vue_scopeId__ = "data-v-2f54d2a8"
/* moduleIdentifier (server only) */
var Posts___vue_module_identifier__ = null
var Posts_Component = Posts_normalizeComponent(
  Posts,
  components_Posts,
  Posts___vue_template_functional__,
  Posts___vue_styles__,
  Posts___vue_scopeId__,
  Posts___vue_module_identifier__
)

/* harmony default export */ var src_components_Posts = (Posts_Component.exports);

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/validators/index.js
var validators = __webpack_require__("+cKO");
var validators_default = /*#__PURE__*/__webpack_require__.n(validators);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/LoginPage/LoginPage.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var LoginPage = ({
	name: 'LoginPage',
	data: function data() {
		return {
			email: '',
			password: '',
			confirmPassword: '',
			newUser: false,
			authFailed: false
		};
	},
	validations: function validations() {
		var validation = {
			email: {
				required: validators["required"],
				email: validators["email"]
			},
			password: {
				required: validators["required"],
				minLength: Object(validators["minLength"])(8)
			}
		};
		if (this.newUser) {
			validation = extends_default()({}, validation, {
				confirmPassword: {
					required: validators["required"],
					sameAsPassword: Object(validators["sameAs"])('password')
				}
			});
		}
		return validation;
	},

	computed: extends_default()({}, Object(vuex_esm["c" /* mapGetters */])({
		initialUserUrl: modules_types.auth.getter.GET_USER_URL
	}), {
		emailErrors: function emailErrors() {
			var errors = [];
			if (!this.$v.email.$dirty) return errors;
			!this.$v.email.email && errors.push('Must be valid e-mail');
			!this.$v.email.required && errors.push('E-mail is required');
			return errors;
		},
		passwordErrors: function passwordErrors() {
			var errors = [];
			if (!this.$v.password.$dirty) return errors;
			!this.$v.password.required && errors.push('Password is required');
			!this.$v.password.minLength && errors.push('Password should be at least 8 characters');
			this.authFailed && errors.push('Username or password is incorrect!');
			return errors;
		},
		confirmPasswordErrors: function confirmPasswordErrors() {
			var errors = [];
			if (!this.$v.confirmPassword.$dirty) return errors;
			!this.$v.confirmPassword.required && errors.push('Confirm password is required');
			!this.$v.confirmPassword.sameAsPassword && errors.push('Passwords must be identical');
			return errors;
		}
	}),
	methods: {
		loginUser: function loginUser() {
			var _this = this;

			loginService_loginService(this.email, this.password).then(function () {
				_this.$router.push('/');
			}).catch(function () {
				_this.authFailed = true;
			});
		},
		createUser: function createUser() {
			var _this2 = this;

			loginService_createUser(this.email, this.password).then(function () {
				_this2.$router.push('/');
			}).catch(function () {});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-23d035ee","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/LoginPage/LoginPage.vue
var LoginPage_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"id":"inspire"}},[_c('v-content',[_c('v-container',{attrs:{"fluid":"","fill-height":""},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.newUser ? _vm.createUser() : _vm.loginUser()}}},[_c('v-layout',{attrs:{"align-center":"","justify-center":""}},[_c('v-flex',{attrs:{"xs12":"","sm8":"","md4":""}},[_c('v-card',{staticClass:"elevation-12"},[_c('v-toolbar',{attrs:{"dark":"","color":"primary"}},[_c('v-toolbar-title',[_vm._v("Login form")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-tooltip',{attrs:{"bottom":""}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","large":"","target":"_blank"},slot:"activator"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("code")])],1),_vm._v(" "),_c('span',[_vm._v("Source")])],1)],1),_vm._v(" "),_c('v-card-text',[_c('v-form',[_c('v-radio-group',{attrs:{"column":false,"row":true},on:{"change":function($event){_vm.authFailed=false}},model:{value:(_vm.newUser),callback:function ($$v) {_vm.newUser=$$v},expression:"newUser"}},[_c('v-radio',{attrs:{"label":"Existing user","value":false}}),_vm._v(" "),_c('v-radio',{attrs:{"label":"New user","value":true}})],1),_vm._v(" "),_c('v-text-field',{attrs:{"prepend-icon":"person","name":"login","label":"Login","type":"text","error-messages":_vm.emailErrors},on:{"input":function($event){_vm.$v.email.$touch(); _vm.authFailed=false},"blur":function($event){_vm.$v.email.$touch()}},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}}),_vm._v(" "),_c('v-text-field',{attrs:{"prepend-icon":"lock","name":"password","label":"Password","id":"password","type":"password","error-messages":_vm.passwordErrors},on:{"input":function($event){_vm.$v.password.$touch(); _vm.authFailed=false},"blur":function($event){_vm.$v.password.$touch()}},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}}),_vm._v(" "),(_vm.newUser)?_c('v-text-field',{attrs:{"prepend-icon":"lock","name":"confirm-password","label":"Confirm password","id":"password2","type":"password","error-messages":_vm.confirmPasswordErrors},on:{"input":function($event){_vm.$v.confirmPassword.$touch()},"blur":function($event){_vm.$v.confirmPassword.$touch()}},model:{value:(_vm.confirmPassword),callback:function ($$v) {_vm.confirmPassword=$$v},expression:"confirmPassword"}}):_vm._e()],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary","disabled":_vm.$v.$invalid},on:{"click":function($event){$event.preventDefault();_vm.newUser ? _vm.createUser() : _vm.loginUser()}}},[_vm._v("\n\t\t\t\t\t\t\t\t"+_vm._s(_vm.newUser ? 'Create' : 'Login'))])],1)],1)],1)],1)],1)],1)],1)}
var LoginPage_staticRenderFns = []
var LoginPage_esExports = { render: LoginPage_render, staticRenderFns: LoginPage_staticRenderFns }
/* harmony default export */ var LoginPage_LoginPage = (LoginPage_esExports);
// CONCATENATED MODULE: ./src/components/LoginPage/LoginPage.vue
function LoginPage_injectStyle (ssrContext) {
  __webpack_require__("9R/n")
}
var LoginPage_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var LoginPage___vue_template_functional__ = false
/* styles */
var LoginPage___vue_styles__ = LoginPage_injectStyle
/* scopeId */
var LoginPage___vue_scopeId__ = "data-v-23d035ee"
/* moduleIdentifier (server only) */
var LoginPage___vue_module_identifier__ = null
var LoginPage_Component = LoginPage_normalizeComponent(
  LoginPage,
  LoginPage_LoginPage,
  LoginPage___vue_template_functional__,
  LoginPage___vue_styles__,
  LoginPage___vue_scopeId__,
  LoginPage___vue_module_identifier__
)

/* harmony default export */ var components_LoginPage_LoginPage = (LoginPage_Component.exports);

// CONCATENATED MODULE: ./src/router/index.js










vue_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

var routes = [{
	path: '/',
	name: 'Main',
	component: src_components_Main,
	meta: {
		requiresAuth: true
	}
}, {
	path: '/posts',
	name: 'Posts',
	component: src_components_Posts
}, {
	name: 'login',
	path: '/auth/login',
	component: components_LoginPage_LoginPage
}];

var router = new vue_router_esm["a" /* default */]({
	mode: 'history',
	routes: routes
});

router.beforeEach(function (to, from, next) {
	store.dispatch(modules_types.auth.action.CHECK_LOGIN_ON_SERVER);
	var authUser = JSON.parse(localStorage.getItem('authUser'));
	if (to.meta.requiresAuth) {
		if (!authUser || !authUser.token) {
			// console.log('authUser not found in localStorage');
			// localStorage.setItem('initialUserUrl', to.path);
			// next({ name: 'login' });
			next();
		} else {
			next();
		}
	} else {
		next();
	}
});

/* harmony default export */ var src_router = (router);
// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.








vue_esm["a" /* default */].config.productionTip = false;
vue_esm["a" /* default */].use(vuetify_default.a);
vue_esm["a" /* default */].use(lib_default.a);

/* eslint-disable no-new */
new vue_esm["a" /* default */]({
	store: store,
	el: '#app',
	router: src_router,
	components: { App: src_App },
	template: '<App/>'
});

/***/ }),

/***/ "bb26":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dhIU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const merge = __webpack_require__("2cg0")
const prodEnv = __webpack_require__("rBKV")

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
	APIENDPOINT: "http://localhost:8081"
})


/***/ }),

/***/ "dl+l":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "eiG0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lEOB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rBKV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {
  NODE_ENV: '"production"',
	APIENDPOINT: "https://vuenodeapp.herokuapp.com"
}


/***/ }),

/***/ "yEwv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.b18461690ae345e2367a.js.map