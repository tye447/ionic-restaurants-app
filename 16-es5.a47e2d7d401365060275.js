function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{IkQQ:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),o=function l(){_classCallCheck(this,l)},t=u("pMnS"),b=u("MKJQ"),r=u("sZkV"),i=function(){function l(n,u){_classCallCheck(this,l),this.route=n,this.router=u,this.dayOrder=function(l,n){if(l.key<n.key)return n.key}}return _createClass(l,[{key:"ionViewWillEnter",value:function(){this.userInfo=JSON.parse(sessionStorage.getItem("currentUser"))}},{key:"ngOnInit",value:function(){}},{key:"back",value:function(){this.router.navigateByUrl("tabs/settings").then()}}]),l}(),a=u("iInd"),s=e.nb({encapsulation:0,styles:[[""]],data:{}});function c(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,11,"ion-header",[],null,null,null,b.N,b.m)),e.ob(1,49152,null,0,r.A,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,b.bb,b.A)),e.ob(3,49152,null,0,r.yb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.E,b.d)),e.ob(5,49152,null,0,r.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,2,"ion-back-button",[["defaultHref",""]],null,[[null,"click"]],(function(l,n,u){var o=!0,t=l.component;return"click"===n&&(o=!1!==e.Bb(l,8).onClick(u)&&o),"click"===n&&(o=!1!==t.back()&&o),o}),b.C,b.b)),e.ob(7,49152,null,0,r.f,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.ob(8,16384,null,0,r.g,[[2,r.eb],r.Db,r.c],{defaultHref:[0,"defaultHref"]},null),(l()(),e.pb(9,0,null,0,2,"ion-title",[],null,null,null,b.ab,b.z)),e.ob(10,49152,null,0,r.wb,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["My Information"])),(l()(),e.pb(12,0,null,null,22,"ion-content",[],null,null,null,b.L,b.k)),e.ob(13,49152,null,0,r.t,[e.h,e.k,e.x],null,null),(l()(),e.pb(14,0,null,0,20,"ion-card",[],null,null,null,b.J,b.e)),e.ob(15,49152,null,0,r.l,[e.h,e.k,e.x],null,null),(l()(),e.pb(16,0,null,0,6,"ion-card-header",[],null,null,null,b.G,b.g)),e.ob(17,49152,null,0,r.n,[e.h,e.k,e.x],null,null),(l()(),e.pb(18,0,null,0,1,"ion-card-subtitle",[],null,null,null,b.H,b.h)),e.ob(19,49152,null,0,r.o,[e.h,e.k,e.x],null,null),(l()(),e.pb(20,0,null,0,2,"ion-card-title",[],null,null,null,b.I,b.i)),e.ob(21,49152,null,0,r.p,[e.h,e.k,e.x],null,null),(l()(),e.Ib(22,0,["",""])),(l()(),e.pb(23,0,null,0,11,"ion-card-content",[],null,null,null,b.F,b.f)),e.ob(24,49152,null,0,r.m,[e.h,e.k,e.x],null,null),(l()(),e.pb(25,0,null,0,4,"ion-list",[],null,null,null,b.T,b.s)),e.ob(26,49152,null,0,r.N,[e.h,e.k,e.x],null,null),(l()(),e.pb(27,0,null,0,2,"ion-text",[],null,null,null,b.Y,b.x)),e.ob(28,49152,null,0,r.tb,[e.h,e.k,e.x],null,null),(l()(),e.Ib(29,0,["Age: ",""])),(l()(),e.pb(30,0,null,0,4,"ion-list",[],null,null,null,b.T,b.s)),e.ob(31,49152,null,0,r.N,[e.h,e.k,e.x],null,null),(l()(),e.pb(32,0,null,0,2,"ion-text",[],null,null,null,b.Y,b.x)),e.ob(33,49152,null,0,r.tb,[e.h,e.k,e.x],null,null),(l()(),e.Ib(34,0,["Number of orders: ",""]))],(function(l,n){l(n,7,0,""),l(n,8,0,"")}),(function(l,n){var u=n.component;l(n,22,0,null==u.userInfo?null:u.userInfo.name),l(n,29,0,null==u.userInfo?null:u.userInfo.age),l(n,34,0,null==u.userInfo?null:u.userInfo.ordersCount)}))}var f=e.lb("app-user-info",i,(function(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"app-user-info",[],null,null,null,c,s)),e.ob(1,114688,null,0,i,[a.a,a.m],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),k=u("SVse"),p=u("s7LF"),h=function l(){_classCallCheck(this,l)};u.d(n,"UserInfoPageModuleNgFactory",(function(){return d}));var d=e.mb(o,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[t.a,f]],[3,e.j],e.v]),e.zb(4608,k.l,k.k,[e.s,[2,k.r]]),e.zb(4608,p.l,p.l,[]),e.zb(4608,r.b,r.b,[e.x,e.g]),e.zb(4608,r.Cb,r.Cb,[r.b,e.j,e.p]),e.zb(4608,r.Fb,r.Fb,[r.b,e.j,e.p]),e.zb(1073742336,k.b,k.b,[]),e.zb(1073742336,p.k,p.k,[]),e.zb(1073742336,p.c,p.c,[]),e.zb(1073742336,r.Ab,r.Ab,[]),e.zb(1073742336,a.o,a.o,[[2,a.t],[2,a.m]]),e.zb(1073742336,h,h,[]),e.zb(1073742336,o,o,[]),e.zb(1024,a.k,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);