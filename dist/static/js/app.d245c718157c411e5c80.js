webpackJsonp([1],{"/v5o":function(e,t){},"7D5T":function(e,t){},"7zck":function(e,t){},DQUW:function(e,t){},"DV+a":function(e,t){},Go53:function(e,t){},MyUj:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("7zck");var a=s("7+uW"),r=s("3EgV"),n=s.n(r),i=s("ESwS"),o=s.n(i),u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var c=s("VU/8")({name:"App"},u,!1,function(e){s("7D5T")},null,null).exports,_=s("/ocq"),E=s("Dd8w"),l=s.n(E),d=s("NYxO"),S=(s("sax8"),s("bOdI")),v=s.n(S),A={SET_HOST_ADDRESS:"SET_HOST_ADDRESS"},m={REQUEST_HOST_ADDRESS:"REQUEST_HOST_ADDRESS"},h={HOST_ADDRESS:"HOST_ADDRESS"},f={action:m,mutation:A,getter:h},p=v()({},m.REQUEST_HOST_ADDRESS,function(e){var t=e.commit,s=location.host.includes("localhost")?location.protocol+"//"+location.hostname+":8081":location.protocol+"//"+location.hostname;t(A.SET_HOST_ADDRESS,s)}),T=s("M4fF"),R=s.n(T),U=v()({},A.SET_HOST_ADDRESS,function(e,t){e.hostAddress=t}),g=v()({},h.HOST_ADDRESS,function(e){return e.app.hostAddress}),D={state:{hostAddress:null},actions:p,mutations:U},I={userId:null,isLoggedIn:void 0,userUrl:"",userAccess:"",defaultAvatar:"",details:{email:null,name:"",avatar:null},users:[]},G=s("Xxa5"),O=s.n(G),w=s("exGp"),C=s.n(w),L=s("mtWM"),b=s.n(L);b.a.defaults.withCredentials=!0;var M,N,H,x,W,V,y,k,P,$,F,j,q,Y,K=function(e){return b.a.post(Te.getters.HOST_ADDRESS+"/auth/login",e)},z=function(e,t){return b.a.post(Te.getters.HOST_ADDRESS+"/users",{email:e,password:t})},B=function(e,t){return b.a.patch(Te.getters.HOST_ADDRESS+"/users/"+e,t)},Q=function(e,t){return b.a.patch(Te.getters.HOST_ADDRESS+"/users/access/"+e,{access:t})},Z=function(e){return b.a.delete(Te.getters.HOST_ADDRESS+"/users/"+e)},J=function(e){return function(){return e.apply(void 0,arguments).catch(function(e){var t="",s="";e&&e.response&&e.response.status&&(t=e.response.status),e&&e.response&&e.response.data&&(s=e.response.data);var a={messageText:"Error occurred. "+(t?"Status: "+t+". ":"")+(s?"Message: "+s:""),messageType:"error"};Te.dispatch(he.userMessages.action.SHOW_USER_MESSAGE,a)})}},X={SET_LOGGED_IN:"SET_LOGGED_IN",SET_USER_URL:"SET_USER_URL",SET_USER_ACCESS:"SET_USER_ACCESS",UPDATE_USER_DETAILS:"UPDATE_USER_DETAILS",CLEAR_USER_AVATAR:"CLEAR_USER_AVATAR",SAVE_USERS_TO_STORE:"SAVE_USERS_TO_STORE",UPDATE_USER_ACCESS:"UPDATE_USER_ACCESS",SET_DEFAULT_AVATAR:"SET_DEFAULT_AVATAR"},ee={LOGIN_BY_CREDENTIALS:"LOGIN_BY_CREDENTIALS",SET_LOGGED_IN:"SET_LOGGED_IN",SET_USER_URL:"SET_USER_URL",CHECK_LOGIN_ON_SERVER:"CHECK_LOGIN_ON_SERVER",LOGOUT_USER:"LOGOUT_USER",UPDATE_USER_DETAILS_ON_SERVER:"UPDATE_USER_DETAILS_ON_SERVER",CLEAR_USER_AVATAR:"CLEAR_USER_AVATAR",REMOVE_USER_ACCOUNT:"REMOVE_USER_ACCOUNT",GET_USERS_FROM_SERVER:"GET_USERS_FROM_SERVER",UPDATE_USER_ACCESS:"UPDATE_USER_ACCESS",CREATE_USER:"CREATE_USER"},te={IS_LOGGED_IN:"IS_LOGGED_IN",GET_USER_URL:"GET_USER_URL",GET_USER_ACCESS:"GET_USER_ACCESS",GET_USER_DETAILS:"GET_USER_DETAILS",GET_USER_AVATAR:"GET_USER_AVATAR",GET_ALL_USERS:"GET_ALL_USERS",GET_DEFAULT_AVATAR:"GET_DEFAULT_AVATAR"},se={action:ee,mutation:X,getter:te},ae=this,re=(M={},v()(M,ee.CHECK_LOGIN_ON_SERVER,J((P=C()(O.a.mark(function e(t){var s,a,r=t.commit,n=t.getters,i=t.dispatch;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=void 0===n.IS_LOGGED_IN,e.next=3,b.a.get(Te.getters.HOST_ADDRESS+"/auth/me");case 3:if(a=e.sent,s&&i(he.userMessages.action.HIDE_WAITING),!1!==a.data){e.next=9;break}return r(X.SET_LOGGED_IN,!1),i(he.userMessages.action.SHOW_USER_MESSAGE,{messageText:"User is not authorized.",messageType:"warning"}),e.abrupt("return");case 9:r(X.SET_LOGGED_IN,!0),i(he.userMessages.action.HIDE_WAITING),r(X.UPDATE_USER_DETAILS,{data:a.data,hostAddress:n.HOST_ADDRESS}),r(X.SET_DEFAULT_AVATAR,{avatar:a.data.defaultAvatar,hostAddress:n.HOST_ADDRESS});case 13:case"end":return e.stop()}},e,ae)})),function(e){return P.apply(this,arguments)}))),v()(M,ee.LOGIN_BY_CREDENTIALS,J((k=C()(O.a.mark(function e(t,s){var a,r=t.commit,n=t.getters;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K(s);case 2:a=e.sent,r(X.SET_LOGGED_IN,!0),r(X.UPDATE_USER_DETAILS,{data:a.data,hostAddress:n.HOST_ADDRESS}),et.push("/");case 6:case"end":return e.stop()}},e,ae)})),function(e,t){return k.apply(this,arguments)}))),v()(M,ee.LOGOUT_USER,J((y=C()(O.a.mark(function e(t){var s=t.commit;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(Te.getters.HOST_ADDRESS+"/logout");case 2:s(X.SET_USER_ACCESS,""),s(X.SET_LOGGED_IN,!1);case 4:case"end":return e.stop()}},e,ae)})),function(e){return y.apply(this,arguments)}))),v()(M,ee.CREATE_USER,J((V=C()(O.a.mark(function e(t,s){t.commit;var a=s.email,r=s.password;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(a,r);case 2:et.push("/");case 3:case"end":return e.stop()}},e,ae)})),function(e,t){return V.apply(this,arguments)}))),v()(M,ee.UPDATE_USER_DETAILS_ON_SERVER,J((W=C()(O.a.mark(function e(t,s){var a,r=t.commit,n=t.getters,i=t.dispatch,o=s.userId,u=s.details;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i(he.userMessages.action.SHOW_WAITING),e.next=3,B(o,u);case 3:a=e.sent,r(X.UPDATE_USER_DETAILS,{userId:o,data:a.data,hostAddress:n.HOST_ADDRESS}),i(he.userMessages.action.HIDE_WAITING),i(he.userMessages.action.SHOW_USER_MESSAGE,{messageText:"User details have been successfully updated",messageType:"success"});case 7:case"end":return e.stop()}},e,ae)})),function(e,t){return W.apply(this,arguments)}))),v()(M,ee.CLEAR_USER_AVATAR,function(e,t){(0,e.commit)(X.CLEAR_USER_AVATAR,t)}),v()(M,ee.REMOVE_USER_ACCOUNT,J((x=C()(O.a.mark(function e(t,s){var a=t.dispatch,r=t.state;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a(he.userMessages.action.SHOW_WAITING),e.next=3,Z(s);case 3:r.userId===s?et.go():a(ee.GET_USERS_FROM_SERVER),a(he.userMessages.action.HIDE_WAITING),a(he.userMessages.action.SHOW_USER_MESSAGE,{messageText:"User has been successfully deleted",messageType:"success"});case 6:case"end":return e.stop()}},e,ae)})),function(e,t){return x.apply(this,arguments)}))),v()(M,ee.GET_USERS_FROM_SERVER,J((H=C()(O.a.mark(function e(t){var s,a=t.commit,r=t.getters,n=t.dispatch;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n(he.userMessages.action.SHOW_WAITING),e.next=3,b.a.get(Te.getters.HOST_ADDRESS+"/users");case 3:s=e.sent,a(X.SAVE_USERS_TO_STORE,{users:s.data,hostAddress:r.HOST_ADDRESS}),n(he.userMessages.action.HIDE_WAITING);case 6:case"end":return e.stop()}},e,ae)})),function(e){return H.apply(this,arguments)}))),v()(M,ee.UPDATE_USER_ACCESS,J((N=C()(O.a.mark(function e(t,s){var a,r=t.commit,n=t.dispatch,i=s.userId,o=s.access;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(i,o);case 2:a=e.sent,r(X.UPDATE_USER_ACCESS,{userId:i,access:a.data.access}),n(he.userMessages.action.SHOW_USER_MESSAGE,{messageText:"User access has been successfully updated",messageType:"success"});case 5:case"end":return e.stop()}},e,ae)})),function(e,t){return N.apply(this,arguments)}))),M),ne=($={},v()($,X.SET_LOGGED_IN,function(e,t){e.isLoggedIn=t}),v()($,X.SET_USER_URL,function(e,t){e.userUrl=t}),v()($,X.SET_USER_ACCESS,function(e,t){e.userAccess=t}),v()($,X.UPDATE_USER_DETAILS,function(e,t){var s=t.userId,a=t.data,r=t.hostAddress;s&&s!==e.userId||(e.userAccess=a.access,e.details.name=a.details.name,e.details.email=a.email,e.userId=a._id,e.details.avatar=""!==a.details.avatar?r+"/"+a.details.avatar:""),e.users=R.a.map(e.users,function(e){return e._id===s?l()({},e,{details:l()({},e.details,{name:a.details.name,avatar:""!==a.details.avatar?r+"/"+a.details.avatar:""})}):e})}),v()($,X.CLEAR_USER_AVATAR,function(e,t){if(t){t===e.userId&&(e.details.avatar="");var s=R.a.map(e.users,function(e){return e._id===t?l()({},e,{details:l()({},e.details,{avatar:""})}):e});e.users=s}else e.details.avatar=""}),v()($,X.SAVE_USERS_TO_STORE,function(e,t){var s=t.users,a=t.hostAddress;e.users=R.a.map(s,function(e){return l()({},e,{details:l()({},e.details,{avatar:""!==e.details.avatar?a+"/"+e.details.avatar:""})})})}),v()($,X.UPDATE_USER_ACCESS,function(e,t){var s=t.userId,a=t.access;s===e.userId?e.access=a:e.users=R.a.map(e.users,function(e){return e._id===s?l()({},e,{access:a}):e})}),v()($,X.SET_DEFAULT_AVATAR,function(e,t){var s=t.avatar,a=t.hostAddress;e.defaultAvatar=a+"/"+s}),$),ie=(F={},v()(F,te.IS_LOGGED_IN,function(e){return e.auth.isLoggedIn}),v()(F,te.GET_USER_URL,function(e){return e.auth.userUrl}),v()(F,te.GET_USER_ACCESS,function(e){return e.auth.userAccess}),v()(F,te.GET_USER_DETAILS,function(e){return{access:e.auth.userAccess,name:e.auth.details.name,avatar:e.auth.details.avatar,email:e.auth.details.email,id:e.auth.userId}}),v()(F,te.GET_USER_AVATAR,function(e){return function(e){}}),v()(F,te.GET_ALL_USERS,function(e){return R.a.map(e.auth.users,function(e){return{name:e.details.name,avatar:e.details.avatar,email:e.email,id:e._id,access:e.access}})}),v()(F,te.GET_DEFAULT_AVATAR,function(e){return e.auth.defaultAvatar}),F),oe={state:I,actions:re,mutations:ne},ue=s("DtRx"),ce=s.n(ue),_e={ADD_USER_MESSAGE:"ADD_USER_MESSAGE",REMOVE_USER_MESSAGE:"REMOVE_USER_MESSAGE",SET_WAITING:"SET_WAITING",SET_WAITING_SHOW:"SET_WAITING_SHOW"},Ee={SHOW_USER_MESSAGE:"SHOW_USER_MESSAGE",HIDE_USER_MESSAGE:"HIDE_USER_MESSAGE",SHOW_WAITING:"SHOW_WAITING",HIDE_WAITING:"HIDE_WAITING"},le={USER_MESSAGES:"USER_MESSAGES",AUTO_HIDE:"AUTO_HIDE",GET_HIDE_DELAY:"GET_HIDE_DELAY",GET_WAITING_DELAY:"GET_WAITING_DELAY",WAITING:"WAITING",SHOW_WAITING:"SHOW_WAITING"},de={action:Ee,mutation:_e,getter:le},Se=(j={},v()(j,Ee.SHOW_USER_MESSAGE,function(e,t){var s=e.commit,a=e.getters,r=ce()();s(_e.ADD_USER_MESSAGE,l()({},t,{id:r})),a.AUTO_HIDE&&setTimeout(function(){s(_e.REMOVE_USER_MESSAGE,r)},a.GET_HIDE_DELAY)}),v()(j,Ee.HIDE_USER_MESSAGE,function(e,t){(0,e.commit)(_e.REMOVE_USER_MESSAGE,t)}),v()(j,Ee.SHOW_WAITING,function(e){var t=e.commit;t(_e.SET_WAITING,!0),t(_e.SET_WAITING_SHOW,!0)}),v()(j,Ee.HIDE_WAITING,function(e){var t=e.commit,s=e.getters;t(_e.SET_WAITING,!1),setTimeout(function(){t(_e.SET_WAITING_SHOW,!1)},s.GET_WAITING_DELAY)}),j),ve=(q={},v()(q,_e.ADD_USER_MESSAGE,function(e,t){e.messages.push(t)}),v()(q,_e.REMOVE_USER_MESSAGE,function(e,t){e.messages=R.a.filter(e.messages,function(e){return e.id!==t})}),v()(q,_e.SET_WAITING,function(e,t){e.waiting=t}),v()(q,_e.SET_WAITING_SHOW,function(e,t){e.waitingShow=t}),q),Ae=(Y={},v()(Y,le.USER_MESSAGES,function(e){return e.userMessages.messages}),v()(Y,le.AUTO_HIDE,function(e){return e.userMessages.autoHide}),v()(Y,le.GET_HIDE_DELAY,function(e){return e.userMessages.hideDelay}),v()(Y,le.GET_WAITING_DELAY,function(e){return e.userMessages.waitingDelay}),v()(Y,le.WAITING,function(e){return e.userMessages.waiting}),v()(Y,le.SHOW_WAITING,function(e){return e.userMessages.waitingShow}),Y),me={state:{messages:[],autoHide:!0,hideDelay:5e3,waitingDelay:300,waiting:!0,waitingShow:!0},actions:Se,mutations:ve},he={app:f,auth:se,userMessages:de},fe=l()({},g,ie,Ae),pe={app:D,auth:oe,userMessages:me};a.a.use(d.a);var Te=new d.a.Store({modules:pe,getters:fe,plugins:[]}),Re={name:"Header",computed:l()({},Object(d.c)({isLoggedIn:he.auth.getter.IS_LOGGED_IN,userDetails:he.auth.getter.GET_USER_DETAILS})),methods:l()({},Object(d.b)({logout:he.auth.action.LOGOUT_USER}),{loginUser:function(){this.isLoggedIn?this.logout():this.$router.push("/login")}})},Ue={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header"},[s("v-toolbar-side-icon",{staticClass:"header-icon"}),e._v(" "),s("h1",{staticClass:"header-title"},[e._v("Vue Application + Node.js & MongoDB + Authorization")]),e._v(" "),s("button",{staticClass:"header-login",on:{click:e.loginUser}},[e._v("\n\t\t\t"+e._s(e.isLoggedIn?"Log out ("+(e.userDetails.name||e.userDetails.email)+")":"log in / Sign up")+"\n\t\t")])],1)},staticRenderFns:[]};var ge=s("VU/8")(Re,Ue,!1,function(e){s("Go53")},"data-v-b802aad8",null).exports,De={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer"},[t("div",{staticClass:"footer-copyright"},[this._v("© "+this._s((new Date).getFullYear())+" by Oleksii Khlopotov")])])},staticRenderFns:[]};var Ie=s("VU/8")({name:"Footer"},De,!1,function(e){s("DV+a")},"data-v-fd7bbeb6",null).exports,Ge={name:"UserDetails",props:{userDetails:{type:Object,required:!0}},data:function(){return{name:this.userDetails.name,newAvatar:"",busyStatus:!1,formData:new FormData}},computed:l()({},Object(d.c)({userAccess:he.auth.getter.GET_USER_ACCESS,currentUser:he.auth.getter.GET_USER_DETAILS,defaultAvatar:he.auth.getter.GET_DEFAULT_AVATAR}),{formChanged:function(){return this.name!==this.userDetails.name||this.newAvatar||this.formData.has("avatar")}}),methods:l()({},Object(d.b)({updateDetails:he.auth.action.UPDATE_USER_DETAILS_ON_SERVER,clearUserAvatar:he.auth.action.CLEAR_USER_AVATAR,removeUserAccount:he.auth.action.REMOVE_USER_ACCOUNT,updateUserAccess:he.auth.action.UPDATE_USER_ACCESS}),{saveUserDetails:function(){var e=this;return C()(O.a.mark(function t(){return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.name!==e.userDetails.name&&e.formData.append("name",e.name),e.busyStatus=!0,t.next=4,e.updateDetails({userId:e.userDetails.id,details:e.formData});case 4:e.busyStatus=!1,e.formData=new FormData;case 6:case"end":return t.stop()}},t,e)}))()},saveForm:function(e){if(e.length){this.formData.delete("avatar"),this.formData.append("avatar",e[0],e[0].name);var t=new FileReader,s=this;t.onload=function(e){s.newAvatar=e.target.result},t.readAsDataURL(e[0])}},clearAvatar:function(){this.newAvatar="",this.$refs.updatedAvatar.value="",this.clearUserAvatar(this.userDetails.id),this.formData.append("avatar","")},inputChange:function(e){this.name=e},deleteAccount:function(e){var t=this;return C()(O.a.mark(function s(){return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t.busyStatus=!0,s.next=3,t.removeUserAccount(e);case 3:t.busyStatus=!1;case 4:case"end":return s.stop()}},s,t)}))()},updateAccess:function(){this.updateUserAccess({userId:this.userDetails.id,access:"Resident"===this.userDetails.access?"Admin":"Resident"})}})},Oe={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-details"},[s("v-form",{staticClass:"user-form",attrs:{enctype:"multipart/form-data"}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs4:""}},[s("v-subheader",[e._v("E-mail:")])],1),e._v(" "),s("v-flex",{attrs:{xs8:""}},[s("v-text-field",{ref:"email",staticClass:"user-form-input",attrs:{disabled:"",name:"email",label:"E-mail address",value:e.userDetails.email}})],1)],1),e._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs4:""}},[s("v-subheader",[e._v("User name:")])],1),e._v(" "),s("v-flex",{attrs:{xs8:""}},[s("v-text-field",{ref:"name",attrs:{name:"name",label:"User name",value:e.userDetails.name},on:{input:function(t){e.inputChange(t)}}})],1)],1),e._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs4:""}},[s("v-subheader",[e._v("Avatar:")]),e._v(" "),s("div",{staticClass:"avatar-buttons"},[s("label",{class:"avatar-label"+(e.busyStatus?" disabled":"")},[s("input",{ref:"updatedAvatar",staticClass:"avatar-file",attrs:{type:"file",name:"file",disabled:e.busyStatus},on:{change:function(t){e.saveForm(t.target.files),e.accept="image/*"}}}),e._v("\n\t\t\t\t\t\t\tLoad image\n\t\t\t\t\t\t")]),e._v(" "),s("v-btn",{staticClass:"avatar-clear",attrs:{color:"warning",disabled:!e.userDetails.avatar&&!e.newAvatar||e.busyStatus},on:{click:e.clearAvatar}},[e._v("Clear avatar")])],1)],1),e._v(" "),s("v-flex",{staticClass:"avatar-image",attrs:{xs8:""}},[s("img",{ref:"avatar",staticClass:"user-avatar",attrs:{src:e.newAvatar||e.userDetails.avatar||e.defaultAvatar,alt:"avatar"}})])],1),e._v(" "),s("v-layout",{attrs:{row:""}})],1),e._v(" "),s("div",{staticClass:"form-buttons"},["Admin"===e.userAccess?s("v-btn",{attrs:{color:"info"},on:{click:e.updateAccess}},[e._v("\n\t\t\t\t"+e._s("Resident"===e.userDetails.access?"Set":"Remove")+" Admin rights\n\t\t\t")]):e._e(),e._v(" "),s("v-btn",{attrs:{color:"error"},on:{click:function(t){e.deleteAccount(e.userDetails.id)}}},[e._v("Delete account")]),e._v(" "),s("v-btn",{attrs:{color:"success",disabled:!e.formChanged||e.busyStatus},on:{click:e.saveUserDetails}},[e._v("Save")])],1)],1)},staticRenderFns:[]};var we=s("VU/8")(Ge,Oe,!1,function(e){s("oCmK")},"data-v-c322a248",null).exports,Ce={name:"admin-page",components:{UserDetails:we},computed:l()({},Object(d.c)({users:he.auth.getter.GET_ALL_USERS,userDetails:he.auth.getter.GET_USER_DETAILS})),methods:l()({},Object(d.b)({getUsers:he.auth.action.GET_USERS_FROM_SERVER})),mounted:function(){this.getUsers()}},Le={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"admin"},[e._m(0),e._v(" "),s("v-expansion-panel",{staticClass:"userlist",attrs:{popout:""}},[s("h2",[e._v("User list:")]),e._v(" "),e._l(e.users,function(t){return s("v-expansion-panel-content",{key:t.email,staticClass:"user-panel"},[s("div",{staticClass:"user-header",attrs:{slot:"header"},slot:"header"},[s("span",[e._v(e._s(t.email))]),e._v(" "),s("span",{staticStyle:{"font-weight":"bold"}},[e._v("\n\t\t\t\t\t\t"+e._s(t.id===e.userDetails.id?" (Current user)":"")+"\n\t\t\t\t\t")]),e._v(" "),s("span",{class:"user-access"+("Resident"===t.access?"":" user-admin")},[e._v("\n\t\t\t\t\t\t"+e._s(t.access)+"\n\t\t\t\t\t")])]),e._v(" "),s("user-details",{staticClass:"user-details",attrs:{userDetails:t}})],1)})],2)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"admin-title"},[t("h1",[this._v("Welcome to Admin page")])])}]};var be=s("VU/8")(Ce,Le,!1,function(e){s("DQUW")},"data-v-5558953c",null).exports,Me={name:"resident-page",components:{UserDetails:we},computed:l()({},Object(d.c)({userDetails:he.auth.getter.GET_USER_DETAILS}))},Ne={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"resident"},[this._m(0),this._v(" "),t("div",{staticClass:"resident-details"},[t("h2",[this._v("Your details:")]),this._v(" "),t("user-details",{staticClass:"resident-user",attrs:{userDetails:this.userDetails}})],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"resident-title"},[t("h1",[this._v("Welcome to Resident page")])])}]};var He=s("VU/8")(Me,Ne,!1,function(e){s("/v5o")},"data-v-360909c8",null).exports,xe={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"unauth"},[s("div",{staticClass:"unauth-title"},[s("h1",[e._v("Welcome to Unauthorized page")])]),e._v(" "),s("h2",[e._v("Information:")]),e._v(" "),s("p",[e._v("This is example project which uses such technologies:")]),e._v(" "),s("ul",[s("li",[e._v("Frontend: Vue, Vuex, routes")]),e._v(" "),s("li",[e._v("Backend: Node.js + express, MongoDB + Mongoose")])]),e._v(" "),s("br"),e._v(" "),s("p",[e._v("Please login as a user or create new user account")]),e._v(" "),s("p",[e._v("To access admin page use these credentials: admin@example.com/Password")]),e._v(" "),s("h2",[e._v("Please find source code on GitHub")]),e._v(" "),s("ul",[s("li",[e._v("Server-side: "),s("a",{attrs:{href:"https://github.com/khlopik/VueTSAuth-server",target:"_blank"}},[e._v("\n\t\t\thttps://github.com/khlopik/VueTSAuth-server")])]),e._v(" "),s("li",[e._v("Client-side: "),s("a",{attrs:{href:"https://github.com/khlopik/VueTSAuth-client",target:"_blank"}},[e._v("\n\t\t\thttps://github.com/khlopik/VueTSAuth-client")])])])])}]};var We=s("VU/8")({name:"UnauthorizedPage"},xe,!1,function(e){s("Z641")},"data-v-02bfee78",null).exports,Ve={name:"UserMessages",computed:l()({},Object(d.c)({userMessages:he.userMessages.getter.USER_MESSAGES})),methods:l()({},Object(d.b)({hideMessage:he.userMessages.action.HIDE_USER_MESSAGE}))},ye={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wrapper"},e._l(e.userMessages,function(t){return s("v-alert",{key:t.id,attrs:{type:t.messageType,dismissible:"",value:"true",transition:"scale-transition"},on:{click:function(s){e.hideMessage(t.id)}}},[e._v("\n\t\t"+e._s(t.messageText)+"\n\t")])}))},staticRenderFns:[]};var ke=s("VU/8")(Ve,ye,!1,function(e){s("ZOBC")},"data-v-d1fd15ea",null).exports,Pe={name:"UserWaiting",computed:l()({},Object(d.c)({waiting:he.userMessages.getter.WAITING,showWaiting:he.userMessages.getter.SHOW_WAITING})),methods:l()({},Object(d.b)({}))},$e={render:function(){var e=this.$createElement,t=this._self._c||e;return this.showWaiting?t("div",{class:"user-waiting"+(this.waiting?"":" hide")},[t("v-progress-circular",{attrs:{indeterminate:"",size:170,width:7,color:"yellow"}})],1):this._e()},staticRenderFns:[]};var Fe={name:"Main",components:{AdminPage:be,ResidentPage:He,UnauthorizedPage:We,Header:ge,Footer:Ie,UserMessages:ke,UserWaiting:s("VU/8")(Pe,$e,!1,function(e){s("ZKSJ")},"data-v-7e0d451b",null).exports},data:function(){return{msg:"Welcome my dear friend"}},computed:l()({},Object(d.c)({isLoggedIn:he.auth.getter.IS_LOGGED_IN,userAccess:he.auth.getter.GET_USER_ACCESS}),{userComponent:function(){return this.isLoggedIn||void 0===this.isLoggedIn?"Admin"===this.userAccess?"AdminPage":"Resident"===this.userAccess?"ResidentPage":"":"UnauthorizedPage"}}),methods:l()({},Object(d.b)({checkAuthorisation:he.auth.action.CHECK_LOGIN_ON_SERVER,requestHostAddress:he.auth.action.REQUEST_HOST_ADDRESS,addMessage:he.userMessages.action.SHOW_USER_MESSAGE})),beforeMount:function(){this.checkAuthorisation()}},je={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("v-app",{attrs:{id:"inspire"}},[t("div",{staticClass:"main"},[t("Header",{staticClass:"header"}),this._v(" "),t(this.userComponent,{tag:"component",staticClass:"content"}),this._v(" "),t("user-messages",{staticClass:"user-messages"}),this._v(" "),t("Footer",{staticClass:"footer"})],1),this._v(" "),t("user-waiting")],1)],1)},staticRenderFns:[]};var qe=s("VU/8")(Fe,je,!1,function(e){s("Nuum")},"data-v-37c620af",null).exports,Ye=s("Gu7T"),Ke=s.n(Ye),ze=s("+cKO"),Be={name:"LoginPage",data:function(){return{email:"",password:"",confirmPassword:"",newUser:!1,customError:""}},validations:function(){var e={email:{required:ze.required,email:ze.email},password:{required:ze.required,minLength:Object(ze.minLength)(8)}};return this.newUser&&(e=l()({},e,{confirmPassword:{required:ze.required,sameAsPassword:Object(ze.sameAs)("password")}})),e},computed:l()({},Object(d.c)({initialUserUrl:he.auth.getter.GET_USER_URL,userMessages:he.userMessages.getter.USER_MESSAGES}),{emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.email&&e.push("Must be valid e-mail"),!this.$v.email.required&&e.push("E-mail is required"),e):e},passwordErrors:function(){var e=this.newUser?[]:this.userMessages.map(function(e){return e.messageText}),t=[];return this.$v.password.$dirty?(t=[].concat(Ke()(e)),!this.$v.password.required&&t.push("Password is required"),!this.$v.password.minLength&&t.push("Password should be at least 8 characters"),this.customError&&t.push(this.customError),t):t},confirmPasswordErrors:function(){var e=this.newUser?this.userMessages.map(function(e){return e.messageText}):[],t=[];return this.$v.confirmPassword.$dirty?(t=[].concat(Ke()(e)),!this.$v.confirmPassword.required&&t.push("Confirm password is required"),!this.$v.confirmPassword.sameAsPassword&&t.push("Passwords must be identical"),t):t}}),methods:l()({},Object(d.b)({login:he.auth.action.LOGIN_BY_CREDENTIALS,createUser:he.auth.action.CREATE_USER}),{createNewUser:function(){this.createUser({email:this.email,password:this.password})},loginUser:function(){this.login({email:this.email,password:this.password})}})},Qe={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",{attrs:{id:"inspire"}},[s("v-content",[s("v-container",{attrs:{fluid:"","fill-height":""},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;!e.$v.$invalid&&(e.newUser?e.createNewUser():e.loginUser())}}},[s("v-layout",{attrs:{"align-center":"","justify-center":""}},[s("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[s("v-card",{staticClass:"elevation-12"},[s("v-toolbar",{attrs:{dark:"",color:"primary"}},[s("v-toolbar-title",[e._v("Login form")]),e._v(" "),s("v-spacer"),e._v(" "),s("v-tooltip",{attrs:{bottom:""}},[s("v-btn",{attrs:{slot:"activator",icon:"",large:"",target:"_blank"},slot:"activator"},[s("v-icon",{attrs:{large:""}},[e._v("code")])],1),e._v(" "),s("span",[e._v("Source")])],1)],1),e._v(" "),s("v-card-text",[s("v-form",[s("v-radio-group",{attrs:{column:!1,row:!0},on:{change:function(t){e.customError=""}},model:{value:e.newUser,callback:function(t){e.newUser=t},expression:"newUser"}},[s("v-radio",{attrs:{label:"Existing user",value:!1}}),e._v(" "),s("v-radio",{attrs:{label:"New user",value:!0}})],1),e._v(" "),s("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"Login",type:"text","error-messages":e.emailErrors},on:{input:function(t){e.$v.email.$touch(),e.customError=""},blur:function(t){e.$v.email.$touch()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),s("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",id:"password",type:"password","error-messages":e.passwordErrors},on:{input:function(t){e.$v.password.$touch(),e.customError=""},blur:function(t){e.$v.password.$touch()}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),e.newUser?s("v-text-field",{attrs:{"prepend-icon":"lock",name:"confirm-password",label:"Confirm password",id:"password2",type:"password","error-messages":e.confirmPasswordErrors},on:{input:function(t){e.$v.confirmPassword.$touch()},blur:function(t){e.$v.confirmPassword.$touch()}},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}}):e._e()],1)],1),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{color:"primary",disabled:e.$v.$invalid},on:{click:function(t){t.preventDefault(),e.newUser?e.createNewUser:e.loginUser()}}},[e._v("\n\t\t\t\t\t\t\t\t"+e._s(e.newUser?"Create":"Login"))])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var Ze=s("VU/8")(Be,Qe,!1,function(e){s("MyUj")},"data-v-7b590d82",null).exports;a.a.use(_.a);var Je=[{path:"/",name:"Main",component:qe},{name:"login",path:"/login",component:Ze}],Xe=new _.a({mode:"history",routes:Je});Xe.beforeEach(function(e,t,s){s()});var et=Xe;a.a.config.productionTip=!1,a.a.use(n.a),a.a.use(o.a);new a.a({store:Te,el:"#app",router:et,components:{App:c},template:"<App/>",beforeCreate:function(){Te.dispatch("REQUEST_HOST_ADDRESS").catch(function(e){console.log("error: ",e)})}})},Nuum:function(e,t){},Z641:function(e,t){},ZKSJ:function(e,t){},ZOBC:function(e,t){},oCmK:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d245c718157c411e5c80.js.map