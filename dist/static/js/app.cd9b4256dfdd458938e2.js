webpackJsonp([1],{"+tOl":function(t,e){},"1Hrm":function(t,e){},"7D5T":function(t,e){},"7zck":function(t,e){},CR7k:function(t,e){},"DV+a":function(t,e){},FhoZ:function(t,e,a){"use strict";(function(e){const s=a("o/zv");t.exports={dev:{assetsSubDirectory:"static",assetsPublicPath:"/",proxyTable:{},host:"localhost",port:8080,autoOpenBrowser:!1,errorOverlay:!0,notifyOnErrors:!0,poll:!1,useEslint:!0,showEslintErrorsInOverlay:!1,devtool:"cheap-module-eval-source-map",cacheBusting:!0,cssSourceMap:!0},build:{index:s.resolve(e,"../dist/index.html"),assetsRoot:s.resolve(e,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"/",productionSourceMap:!0,devtool:"#source-map",productionGzip:!1,productionGzipExtensions:["js","css"]}}}).call(e,"/")},Go53:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("7zck");var s=a("7+uW"),n=a("3EgV"),r=a.n(n),i=a("ESwS"),o=a.n(i),c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var u=a("VU/8")({name:"App"},c,!1,function(t){a("7D5T")},null,null).exports,l=a("/ocq"),d=a("Dd8w"),_=a.n(d),E=a("NYxO"),v=(a("sax8"),a("bOdI")),f=a.n(v),m=a("2aIq"),h=a.n(m),S=a("//Fk"),p=a.n(S),A=a("mvHQ"),U=a.n(A),R=a("mtWM"),g=a.n(R),T=(a("FhoZ"),a("rBKV")),D=a.n(T),C=a("dhIU"),L=a.n(C),O=D.a.APIENDPOINT;g.a.defaults.withCredentials=!0;var w,I,b=function(){var t=JSON.parse(localStorage.getItem("authUser"));return{headers:{"x-auth":t&&t.token?t.token:""}}},G=function(t){localStorage.setItem("authUser",U()({email:t.data.email,token:t.headers["x-auth"],access:t.data.access}))},P={SET_LOGGED_IN:"SET_LOGGED_IN",SET_USER_URL:"SET_USER_URL",SET_USER_ACCESS:"SET_USER_ACCESS",UPDATE_USER_DETAILS:"UPDATE_USER_DETAILS",CLEAR_USER_AVATAR:"CLEAR_USER_AVATAR",SAVE_USERS_TO_STORE:"SAVE_USERS_TO_STORE",UPDATE_USER_ACCESS:"UPDATE_USER_ACCESS",SET_DEFAULT_AVATAR:"SET_DEFAULT_AVATAR"},N={LOGIN_BY_CREDENTIALS:"LOGIN_BY_CREDENTIALS",SET_LOGGED_IN:"SET_LOGGED_IN",SET_USER_URL:"SET_USER_URL",CHECK_LOGIN_ON_SERVER:"CHECK_LOGIN_ON_SERVER",LOGOUT_USER:"LOGOUT_USER",UPDATE_USER_DETAILS_ON_SERVER:"UPDATE_USER_DETAILS_ON_SERVER",CLEAR_USER_AVATAR:"CLEAR_USER_AVATAR",REMOVE_USER_ACCOUNT:"REMOVE_USER_ACCOUNT",GET_USERS_FROM_SERVER:"GET_USERS_FROM_SERVER",UPDATE_USER_ACCESS:"UPDATE_USER_ACCESS"},V={IS_LOGGED_IN:"IS_LOGGED_IN",GET_USER_URL:"GET_USER_URL",GET_USER_ACCESS:"GET_USER_ACCESS",GET_USER_DETAILS:"GET_USER_DETAILS",GET_USER_AVATAR:"GET_USER_AVATAR",GET_ALL_USERS:"GET_ALL_USERS",GET_DEFAULT_AVATAR:"GET_DEFAULT_AVATAR"},x={action:N,mutation:P,getter:V},$=(w={},f()(w,N.SET_LOGGED_IN,function(t,e){(0,t.commit)(P.SET_LOGGED_IN,e)}),f()(w,N.SET_USER_URL,function(t,e){(0,t.commit)(P.SET_USER_URL,e)}),f()(w,N.LOGIN_BY_CREDENTIALS,function(t,e){var a=t.commit;return new p.a(function(t,s){(function(t){return new p.a(function(e,a){g.a.post(O+"/auth/login",t).then(function(t){return G(t),e(t.data)}).catch(function(t){return console.log("error in loginService.js: ",t),t.response?a(t.response.status):a(t)})})})(e).then(function(e){a(P.SET_LOGGED_IN,!0),a(P.UPDATE_USER_DETAILS,{data:e}),t()}).catch(function(t){console.log("error: ",t),s()})})}),f()(w,N.CHECK_LOGIN_ON_SERVER,function(t){var e=t.commit;return new p.a(function(t,a){g.a.get(O+"/auth/me").then(function(t){return t.data}).catch(function(t){return console.log("error in isLoggedIn (loginService.js): ",t),p.a.reject(t.response.status)}).then(function(a){return e(P.SET_LOGGED_IN,!0),e(P.UPDATE_USER_DETAILS,{data:a}),e(P.SET_DEFAULT_AVATAR,a.defaultAvatar),t()}).catch(function(t){return e(P.SET_LOGGED_IN,!1),a(t)})})}),f()(w,N.LOGOUT_USER,function(t){var e=t.commit;g.a.get(O+"/logout").catch(function(t){return"Cannot logout"}),e(P.SET_USER_ACCESS,""),e(P.SET_LOGGED_IN,!1)}),f()(w,N.UPDATE_USER_DETAILS_ON_SERVER,function(t,e){var a=t.commit,s=e.userId,n=e.details;return function(t,e){return new p.a(function(a,s){g.a.patch(O+"/users/"+t,e,b()).then(function(t){return a(t)}).catch(function(t){return s(t)})})}(s,n).then(function(t){return a(P.UPDATE_USER_DETAILS,{userId:s,data:t.data}),p.a.resolve()}).catch(function(t){return console.log("catch in action"),console.log("error: ",t),p.a.reject(t)})}),f()(w,N.CLEAR_USER_AVATAR,function(t,e){(0,t.commit)(P.CLEAR_USER_AVATAR,e)}),f()(w,N.REMOVE_USER_ACCOUNT,function(t,e){return h()(t),function(t){return new p.a(function(e,a){g.a.delete(O+"/users/"+t,b()).then(function(t){return e(t)}).catch(function(t){return a(t)})})}(e).then(function(t){return p.a.resolve(t)}).catch(function(t){return p.a.reject(t)})}),f()(w,N.GET_USERS_FROM_SERVER,function(t){var e=t.commit;new p.a(function(t,e){g.a.get(O+"/users",b()).then(function(e){return t(e)}).catch(function(t){return e(t)})}).then(function(t){e(P.SAVE_USERS_TO_STORE,t.data)}).catch(function(t){console.log("error: ",t)})}),f()(w,N.UPDATE_USER_ACCESS,function(t,e){var a=t.commit,s=e.userId,n=e.access;(function(t,e){return new p.a(function(a,s){g.a.patch(O+"/users/access/"+t,{access:e},b()).then(function(t){return a(t)}).catch(function(t){return s(t)})})})(s,n).then(function(t){a(P.UPDATE_USER_ACCESS,{userId:s,access:t.data.access})}).catch(function(t){console.log("error: ",t)})}),w),F=a("M4fF"),k=a.n(F),y=L.a.APIENDPOINT;y=D.a.APIENDPOINT;var j,M=(I={},f()(I,P.SET_LOGGED_IN,function(t,e){t.isLoggedIn=e}),f()(I,P.SET_USER_URL,function(t,e){t.userUrl=e}),f()(I,P.SET_USER_ACCESS,function(t,e){t.userAccess=e}),f()(I,P.UPDATE_USER_DETAILS,function(t,e){var a=e.userId,s=e.data;a&&a!==t.userId||(t.userAccess=s.access,t.details.name=s.details.name,t.details.email=s.email,t.userId=s._id,t.details.avatar=""!==s.details.avatar?y+"/"+s.details.avatar:""),t.users=k.a.map(t.users,function(t){return t._id===a?(console.log("user: ",t),console.log("data.details: ",s.details),_()({},t,{details:_()({},t.details,{name:s.details.name,avatar:""!==s.details.avatar?y+"/"+s.details.avatar:""})})):t})}),f()(I,P.CLEAR_USER_AVATAR,function(t,e){if(e){e===t.userId&&(t.details.avatar="");var a=k.a.map(t.users,function(t){return t._id===e?_()({},t,{details:_()({},t.details,{avatar:""})}):t});t.users=a}else t.details.avatar=""}),f()(I,P.SAVE_USERS_TO_STORE,function(t,e){t.users=k.a.map(e,function(t){return _()({},t,{details:_()({},t.details,{avatar:""!==t.details.avatar?y+"/"+t.details.avatar:""})})})}),f()(I,P.UPDATE_USER_ACCESS,function(t,e){var a=e.userId,s=e.access;a===t.userId?t.access=s:t.users=k.a.map(t.users,function(t){return t._id===a?_()({},t,{access:s}):t})}),f()(I,P.SET_DEFAULT_AVATAR,function(t,e){t.defaultAvatar=y+"/"+e}),I),H=(j={},f()(j,V.IS_LOGGED_IN,function(t){return t.auth.isLoggedIn}),f()(j,V.GET_USER_URL,function(t){return t.auth.userUrl}),f()(j,V.GET_USER_ACCESS,function(t){return t.auth.userAccess}),f()(j,V.GET_USER_DETAILS,function(t){return{access:t.auth.userAccess,name:t.auth.details.name,avatar:t.auth.details.avatar,email:t.auth.details.email,id:t.auth.userId}}),f()(j,V.GET_USER_AVATAR,function(t){return function(t){}}),f()(j,V.GET_ALL_USERS,function(t){return k.a.map(t.auth.users,function(t){return{name:t.details.name,avatar:t.details.avatar,email:t.email,id:t._id,access:t.access}})}),f()(j,V.GET_DEFAULT_AVATAR,function(t){return t.auth.defaultAvatar}),j),q={state:{userId:null,isLoggedIn:!1,userUrl:"",userAccess:"",defaultAvatar:"",details:{email:null,name:"",avatar:null},users:[]},actions:$,mutations:M},B=x,z=_()({},H),K={auth:q};s.a.use(E.a);var Y=new E.a.Store({modules:K,getters:z,plugins:[]}),Z={name:"Header",computed:_()({},Object(E.c)({isLoggedIn:B.getter.IS_LOGGED_IN,userDetails:B.getter.GET_USER_DETAILS})),methods:_()({},Object(E.b)({logout:B.action.LOGOUT_USER}),{loginUser:function(){this.isLoggedIn?this.logout():this.$router.push("/login")}})},W={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("v-toolbar-side-icon",{staticClass:"header-icon"}),t._v(" "),a("h1",{staticClass:"header-title"},[t._v("Vue Application + Node.js & MongoDB + Authorization")]),t._v(" "),a("button",{staticClass:"header-login",on:{click:t.loginUser}},[t._v("\n\t\t\t"+t._s(t.isLoggedIn?"Log out ("+(t.userDetails.name||t.userDetails.email)+")":"log in / Sign up")+"\n\t\t")])],1)},staticRenderFns:[]};var J=a("VU/8")(Z,W,!1,function(t){a("Go53")},"data-v-b802aad8",null).exports,Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer-copyright"},[this._v("© "+this._s((new Date).getFullYear())+" by Oleksii Khlopotov")])])},staticRenderFns:[]};var X=a("VU/8")({name:"Footer"},Q,!1,function(t){a("DV+a")},"data-v-fd7bbeb6",null).exports,tt={name:"UserDetails",props:{userDetails:{type:Object,required:!0}},data:function(){return{name:this.userDetails.name,newAvatar:"",savingStatus:0,formData:new FormData}},computed:_()({},Object(E.c)({userAccess:B.getter.GET_USER_ACCESS,currentUser:B.getter.GET_USER_DETAILS,defaultAvatar:B.getter.GET_DEFAULT_AVATAR}),{isInitial:function(){return 0===this.savingStatus},isSaving:function(){return 1===this.savingStatus},isSuccess:function(){return 2===this.savingStatus},isFailed:function(){return 3===this.savingStatus},formChanged:function(){return this.name!==this.userDetails.name||this.newAvatar||this.formData.has("avatar")}}),methods:_()({},Object(E.b)({updateDetails:B.action.UPDATE_USER_DETAILS_ON_SERVER,clearUserAvatar:B.action.CLEAR_USER_AVATAR,removeUserAccount:B.action.REMOVE_USER_ACCOUNT,updateUserAccess:B.action.UPDATE_USER_ACCESS}),{saveUserDetails:function(){var t=this;this.name!==this.userDetails.name&&this.formData.append("name",this.name),this.savingStatus=1,this.updateDetails({userId:this.userDetails.id,details:this.formData}).then(function(){t.savingStatus=2,t.formData=new FormData,t.newAvatar=""}).catch(function(){t.savingStatus=3,t.formData=new FormData})},saveForm:function(t){if(t.length){this.formData.delete("avatar"),this.formData.append("avatar",t[0],t[0].name);var e=new FileReader,a=this;e.onload=function(t){a.newAvatar=t.target.result},e.readAsDataURL(t[0]),this.savingStatus=0}},clearAvatar:function(){this.newAvatar="",this.$refs.updatedAvatar.value="",this.clearUserAvatar(this.userDetails.id),this.savingStatus=0,this.formData.append("avatar","")},inputChange:function(t){this.name=t},deleteAccount:function(t){var e=this;this.removeUserAccount(t).then(function(a){t===e.currentUser.id&&e.$router.go()}).catch(function(t){console.log("error: ",t)})},updateAccess:function(){var t=this;this.updateUserAccess({userId:this.userDetails.id,access:"Resident"===this.userDetails.access?"Admin":"Resident"}).then(function(){t.userDetails.id===t.currentUser.id&&t.$router.go()}).catch(function(t){console.log("error: ",t)})}})},et={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-details"},[a("v-form",{staticClass:"user-form",attrs:{enctype:"multipart/form-data"}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs4:""}},[a("v-subheader",[t._v("E-mail:")])],1),t._v(" "),a("v-flex",{attrs:{xs8:""}},[a("v-text-field",{ref:"email",staticClass:"user-form-input",attrs:{disabled:"",name:"email",label:"E-mail address",value:t.userDetails.email}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs4:""}},[a("v-subheader",[t._v("User name:")])],1),t._v(" "),a("v-flex",{attrs:{xs8:""}},[a("v-text-field",{ref:"name",attrs:{name:"name",label:"User name",value:t.userDetails.name},on:{input:function(e){t.inputChange(e)}}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs4:""}},[a("v-subheader",[t._v("Avatar:")]),t._v(" "),a("div",{staticClass:"avatar-buttons"},[a("label",{class:"avatar-label"+(t.isSaving?" disabled":"")},[a("input",{ref:"updatedAvatar",staticClass:"avatar-file",attrs:{type:"file",name:"file",disabled:t.isSaving},on:{change:function(e){t.saveForm(e.target.files),t.accept="image/*"}}}),t._v("\n\t\t\t\t\t\t\tLoad image\n\t\t\t\t\t\t")]),t._v(" "),a("v-btn",{staticClass:"avatar-clear",attrs:{color:"warning",disabled:!t.userDetails.avatar&&!t.newAvatar||t.isSaving},on:{click:t.clearAvatar}},[t._v("Clear avatar")])],1)],1),t._v(" "),a("v-flex",{staticClass:"avatar-image",attrs:{xs8:""}},[a("img",{ref:"avatar",staticClass:"user-avatar",attrs:{src:t.newAvatar||t.userDetails.avatar||t.defaultAvatar,alt:"avatar"}})])],1),t._v(" "),a("v-layout",{attrs:{row:""}})],1),t._v(" "),a("div",{staticClass:"form-buttons"},["Admin"===t.userAccess?a("v-btn",{attrs:{color:"info"},on:{click:t.updateAccess}},[t._v("\n\t\t\t\t"+t._s("Resident"===t.userDetails.access?"Set":"Remove")+" Admin rights\n\t\t\t")]):t._e(),t._v(" "),a("v-btn",{attrs:{color:"error"},on:{click:function(e){t.deleteAccount(t.userDetails.id)}}},[t._v("Delete account")]),t._v(" "),a("v-btn",{attrs:{color:"success",disabled:!t.formChanged||t.isSaving},on:{click:t.saveUserDetails}},[t._v("Save")])],1)],1)},staticRenderFns:[]};var at=a("VU/8")(tt,et,!1,function(t){a("1Hrm")},"data-v-3d889390",null).exports,st={name:"admin-page",components:{UserDetails:at},computed:_()({},Object(E.c)({users:B.getter.GET_ALL_USERS,userDetails:B.getter.GET_USER_DETAILS})),methods:_()({},Object(E.b)({getUsers:B.action.GET_USERS_FROM_SERVER})),mounted:function(){this.getUsers()}},nt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin"},[t._m(0),t._v(" "),a("v-expansion-panel",{staticClass:"userlist",attrs:{popout:""}},[a("h2",[t._v("User list:")]),t._v(" "),t._l(t.users,function(e){return a("v-expansion-panel-content",{key:e.email,staticClass:"user-panel"},[a("div",{staticClass:"user-header",attrs:{slot:"header"},slot:"header"},[t._v("\n\t\t\t\t\t"+t._s(e.email+(e.id===t.userDetails.id?" (Current user)":""))+"\n\t\t\t\t\t"),a("span",{class:"user-access"+("Resident"===e.access?"":" user-admin")},[t._v(t._s(e.access))])]),t._v(" "),a("user-details",{staticClass:"user-details",attrs:{userDetails:e}})],1)})],2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"admin-title"},[e("h1",[this._v("Hello on Admin page")])])}]};var rt=a("VU/8")(st,nt,!1,function(t){a("eiG0")},"data-v-36d108dd",null).exports,it={name:"resident-page",components:{UserDetails:at},data:function(){return{email:""}},computed:_()({},Object(E.c)({userDetails:B.getter.GET_USER_DETAILS})),mounted:function(){}},ot={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"resident"},[this._m(0),this._v(" "),e("div",{staticClass:"resident-details"},[e("h2",[this._v("Your details:")]),this._v(" "),e("user-details",{staticClass:"resident-user",attrs:{userDetails:this.userDetails}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"resident-title"},[e("h1",[this._v("Hello on Resident page")])])}]};var ct={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"unauth"},[a("div",{staticClass:"unauth-title"},[a("h1",[t._v("Hello on Unauthorized page")])]),t._v(" "),a("h2",[t._v("Information:")]),t._v(" "),a("p",[t._v("This is example project which uses such technologies:")]),t._v(" "),a("ul",[a("li",[t._v("Frontend: Vue, Vuex, routes")]),t._v(" "),a("li",[t._v("Backend: Node.js + express, MongoDB + Mongoose")])]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("Please login as a user or create new user account")]),t._v(" "),a("p",[t._v("To access admin page use these credentials: admin@example.com/Password")])])}]};var ut={name:"Main",components:{AdminPage:rt,ResidentPage:a("VU/8")(it,ot,!1,function(t){a("Tu2Z")},"data-v-2e7a6b2e",null).exports,UnauthorizedPage:a("VU/8")({name:"UnauthorizedPage"},ct,!1,function(t){a("lEOB")},"data-v-02b87b3f",null).exports,Header:J,Footer:X},data:function(){return{msg:"Welcome my dear friend"}},computed:_()({},Object(E.c)({isLoggedIn:B.getter.IS_LOGGED_IN,userAccess:B.getter.GET_USER_ACCESS}),{userComponent:function(){return this.isLoggedIn?"Admin"===this.userAccess?"AdminPage":"Resident"===this.userAccess?"ResidentPage":"":"UnauthorizedPage"}}),methods:_()({},Object(E.b)({checkAuthorisation:B.action.CHECK_LOGIN_ON_SERVER})),beforeMount:function(){this.checkAuthorisation().catch(function(t){console.log("e: ",t)})}},lt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-app",{attrs:{id:"inspire"}},[e("div",{staticClass:"main"},[e("Header",{staticClass:"header"}),this._v(" "),e(this.userComponent,{tag:"component",staticClass:"content"}),this._v(" "),e("Footer",{staticClass:"footer"})],1)])],1)},staticRenderFns:[]};var dt=a("VU/8")(ut,lt,!1,function(t){a("RHEP")},"data-v-62bc682a",null).exports,_t={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"posts"})},staticRenderFns:[]};a("VU/8")({name:"posts"},_t,!1,function(t){a("CR7k")},"data-v-2f54d2a8",null).exports;var Et=a("+cKO"),vt={name:"LoginPage",data:function(){return{email:"",password:"",confirmPassword:"",newUser:!1,customError:""}},validations:function(){var t={email:{required:Et.required,email:Et.email},password:{required:Et.required,minLength:Object(Et.minLength)(8)}};return this.newUser&&(t=_()({},t,{confirmPassword:{required:Et.required,sameAsPassword:Object(Et.sameAs)("password")}})),t},computed:_()({},Object(E.c)({initialUserUrl:B.getter.GET_USER_URL}),{emailErrors:function(){var t=[];return this.$v.email.$dirty?(!this.$v.email.email&&t.push("Must be valid e-mail"),!this.$v.email.required&&t.push("E-mail is required"),t):t},passwordErrors:function(){var t=[];return this.$v.password.$dirty?(!this.$v.password.required&&t.push("Password is required"),!this.$v.password.minLength&&t.push("Password should be at least 8 characters"),this.customError&&t.push(this.customError),t):t},confirmPasswordErrors:function(){var t=[];return this.$v.confirmPassword.$dirty?(!this.$v.confirmPassword.required&&t.push("Confirm password is required"),!this.$v.confirmPassword.sameAsPassword&&t.push("Passwords must be identical"),t):t}}),methods:_()({},Object(E.b)({login:B.action.LOGIN_BY_CREDENTIALS}),{loginUser:function(){var t=this;this.login({email:this.email,password:this.password}).then(function(){t.$router.push("/")}).catch(function(t){console.log("error inside LoginPage: ",t)})},createUser:function(){var t,e,a=this;(t=this.email,e=this.password,new p.a(function(a,s){g.a.post(O+"/users",{email:t,password:e}).then(function(t){return G(t),a(t.data)}).catch(function(t){return s(t)})})).then(function(){a.$router.push("/")}).catch(function(){})}})},ft={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-content",[a("v-container",{attrs:{fluid:"","fill-height":""},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.newUser?t.createUser():t.loginUser()}}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[t._v("Login form")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-tooltip",{attrs:{bottom:""}},[a("v-btn",{attrs:{slot:"activator",icon:"",large:"",target:"_blank"},slot:"activator"},[a("v-icon",{attrs:{large:""}},[t._v("code")])],1),t._v(" "),a("span",[t._v("Source")])],1)],1),t._v(" "),a("v-card-text",[a("v-form",[a("v-radio-group",{attrs:{column:!1,row:!0},on:{change:function(e){t.customError=""}},model:{value:t.newUser,callback:function(e){t.newUser=e},expression:"newUser"}},[a("v-radio",{attrs:{label:"Existing user",value:!1}}),t._v(" "),a("v-radio",{attrs:{label:"New user",value:!0}})],1),t._v(" "),a("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"Login",type:"text","error-messages":t.emailErrors},on:{input:function(e){t.$v.email.$touch(),t.customError=""},blur:function(e){t.$v.email.$touch()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),a("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",id:"password",type:"password","error-messages":t.passwordErrors},on:{input:function(e){t.$v.password.$touch(),t.customError=""},blur:function(e){t.$v.password.$touch()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),t.newUser?a("v-text-field",{attrs:{"prepend-icon":"lock",name:"confirm-password",label:"Confirm password",id:"password2",type:"password","error-messages":t.confirmPasswordErrors},on:{input:function(e){t.$v.confirmPassword.$touch()},blur:function(e){t.$v.confirmPassword.$touch()}},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}}):t._e()],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary",disabled:t.$v.$invalid},on:{click:function(e){e.preventDefault(),t.newUser?t.createUser():t.loginUser()}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.newUser?"Create":"Login"))])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var mt=a("VU/8")(vt,ft,!1,function(t){a("+tOl")},"data-v-298c9588",null).exports;s.a.use(l.a);var ht=[{path:"/",name:"Main",component:dt},{name:"login",path:"/login",component:mt}],St=new l.a({mode:"history",routes:ht});St.beforeEach(function(t,e,a){a()});var pt=St;s.a.config.productionTip=!1,s.a.use(r.a),s.a.use(o.a),new s.a({store:Y,el:"#app",router:pt,components:{App:u},template:"<App/>"})},RHEP:function(t,e){},Tu2Z:function(t,e){},dhIU:function(t,e,a){"use strict";const s=a("2cg0"),n=a("rBKV");t.exports=s(n,{NODE_ENV:'"development"',APIENDPOINT:"http://localhost:8081"})},eiG0:function(t,e){},lEOB:function(t,e){},rBKV:function(t,e,a){"use strict";t.exports={NODE_ENV:'"production"',APIENDPOINT:"https://vuenodeapp.herokuapp.com"}}},["NHnr"]);
//# sourceMappingURL=app.cd9b4256dfdd458938e2.js.map