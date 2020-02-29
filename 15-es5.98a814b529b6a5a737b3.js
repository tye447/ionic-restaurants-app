function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"F/Pw":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),r=function l(){_classCallCheck(this,l)},t=u("pMnS"),i=u("MKJQ"),o=u("sZkV"),c=u("iInd"),a=u("SVse"),s=function(){function l(){_classCallCheck(this,l)}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.loadOrdersCurrentUser()}},{key:"loadOrdersCurrentUser",value:function(){var l=this;this.orders=[];var n={orderId:0,restaurantName:"",recipes:[],recipesCount:0,orderPriceTotal:0,orderDate:"",restaurantIcon:""},u=JSON.parse(window.sessionStorage.getItem("ordersCurrentUser")),e=JSON.parse(window.sessionStorage.getItem("allRestaurants"));u.forEach((function(u){(n={orderId:0,restaurantName:"",recipes:[],recipesCount:0,orderPriceTotal:0,orderDate:"",restaurantIcon:""}).orderId=u.id;var r=e.filter((function(l){return l.id===parseInt(u.restaurantId,10)}))[0];n.restaurantName=r.name,n.restaurantIcon=r.img;var t=r.recipes;t.filter((function(l){return l.id===parseInt(u.recipeId[0],10)})),n.recipes=l.setRecipes(u,t,n),n.recipesCount=u.recipeId.length,n.orderDate=u.date,l.orders.push(n)})),window.sessionStorage.setItem("ordersCurrentUserTrans",JSON.stringify(this.orders))}},{key:"setRecipes",value:function(l,n,u){var e=[];return l.recipeId.forEach((function(l){var r=n.filter((function(n){return n.id===parseInt(l,10)}))[0];u.orderPriceTotal+=r.price,e.push(r)})),e}}]),l}(),b=e.nb({encapsulation:0,styles:[[""]],data:{}});function p(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,2,"ion-label",[],null,null,null,i.S,i.r)),e.ob(1,49152,null,0,o.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(2,0,[" + ",""]))],null,(function(l,n){l(n,2,0,(null==n.parent.context.$implicit?null:n.parent.context.$implicit.recipesCount)-1)}))}function d(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,34,"ion-card",[],null,[[null,"click"]],(function(l,n,u){var r=!0;return"click"===n&&(r=!1!==e.Bb(l,2).onClick()&&r),"click"===n&&(r=!1!==e.Bb(l,5).onClick(u)&&r),r}),i.J,i.e)),e.ob(1,49152,null,0,o.l,[e.h,e.k,e.x],null,null),e.ob(2,16384,null,0,c.n,[c.m,c.a,[8,null],e.B,e.k],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),e.Eb(3,{id:0}),e.Cb(4,1),e.ob(5,737280,null,0,o.Gb,[a.h,o.Db,e.k,c.m,[2,c.n]],null,null),(l()(),e.pb(6,0,null,0,28,"ion-card-content",[],null,null,null,i.F,i.f)),e.ob(7,49152,null,0,o.m,[e.h,e.k,e.x],null,null),(l()(),e.pb(8,0,null,0,26,"ion-list",[["lines","none"]],null,null,null,i.T,i.s)),e.ob(9,49152,null,0,o.N,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.pb(10,0,null,0,8,"ion-item",[],null,null,null,i.R,i.q)),e.ob(11,49152,null,0,o.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(12,0,null,0,3,"ion-thumbnail",[["slot","start"]],null,null,null,i.Z,i.y)),e.ob(13,49152,null,0,o.vb,[e.h,e.k,e.x],null,null),(l()(),e.pb(14,0,null,0,1,"ion-img",[],null,null,null,i.P,i.o)),e.ob(15,49152,null,0,o.C,[e.h,e.k,e.x],{src:[0,"src"]},null),(l()(),e.Ib(16,0,[" ",""])),(l()(),e.pb(17,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Ib(18,0,[""," "])),(l()(),e.pb(19,0,null,0,15,"ion-grid",[],null,null,null,i.M,i.l)),e.ob(20,49152,null,0,o.z,[e.h,e.k,e.x],null,null),(l()(),e.pb(21,0,null,0,13,"ion-row",[],null,null,null,i.U,i.t)),e.ob(22,49152,null,0,o.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(23,0,null,0,6,"ion-col",[["size","10"]],null,null,null,i.K,i.j)),e.ob(24,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(25,0,null,0,2,"ion-label",[],null,null,null,i.S,i.r)),e.ob(26,49152,null,0,o.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(27,0,["",""])),(l()(),e.eb(16777216,null,0,1,null,p)),e.ob(29,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(30,0,null,0,4,"ion-col",[["size","2"]],null,null,null,i.K,i.j)),e.ob(31,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(32,0,null,0,2,"ion-label",[],null,null,null,i.S,i.r)),e.ob(33,49152,null,0,o.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(34,0,[""," \u20ac"]))],(function(l,n){var u=l(n,3,0,n.context.$implicit.orderId),e=l(n,4,0,"order-info");l(n,2,0,u,e),l(n,5,0),l(n,9,0,"none"),l(n,15,0,null==n.context.$implicit?null:n.context.$implicit.restaurantIcon),l(n,24,0,"10"),l(n,29,0,(null==n.context.$implicit?null:n.context.$implicit.recipesCount)>1),l(n,31,0,"2")}),(function(l,n){l(n,16,0,null==n.context.$implicit?null:n.context.$implicit.restaurantName),l(n,18,0,null==n.context.$implicit?null:n.context.$implicit.orderDate),l(n,27,0,null==n.context.$implicit?null:n.context.$implicit.recipes[0].name),l(n,34,0,null==n.context.$implicit?null:n.context.$implicit.orderPriceTotal)}))}function f(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,11,"body",[],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,6,"ion-header",[],null,null,null,i.N,i.m)),e.ob(2,49152,null,0,o.A,[e.h,e.k,e.x],null,null),(l()(),e.pb(3,0,null,0,4,"ion-toolbar",[],null,null,null,i.bb,i.A)),e.ob(4,49152,null,0,o.yb,[e.h,e.k,e.x],null,null),(l()(),e.pb(5,0,null,0,2,"ion-title",[],null,null,null,i.ab,i.z)),e.ob(6,49152,null,0,o.wb,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Orders"])),(l()(),e.pb(8,0,null,null,3,"ion-content",[],null,null,null,i.L,i.k)),e.ob(9,49152,null,0,o.t,[e.h,e.k,e.x],null,null),(l()(),e.eb(16777216,null,0,1,null,d)),e.ob(11,278528,null,0,a.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,11,0,n.component.orders)}),null)}var h=e.lb("app-orders",s,(function(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"app-orders",[],null,null,null,f,b)),e.ob(1,114688,null,0,s,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),k=u("s7LF"),m=function(){return u.e(14).then(u.bind(null,"aSNb")).then((function(l){return l.OrderInfoPageModuleNgFactory}))},x=function l(){_classCallCheck(this,l)};u.d(n,"OrdersPageModuleNgFactory",(function(){return I}));var I=e.mb(r,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[t.a,h]],[3,e.j],e.v]),e.zb(4608,a.l,a.k,[e.s,[2,a.r]]),e.zb(4608,k.l,k.l,[]),e.zb(4608,o.b,o.b,[e.x,e.g]),e.zb(4608,o.Cb,o.Cb,[o.b,e.j,e.p]),e.zb(4608,o.Fb,o.Fb,[o.b,e.j,e.p]),e.zb(1073742336,a.b,a.b,[]),e.zb(1073742336,k.k,k.k,[]),e.zb(1073742336,k.c,k.c,[]),e.zb(1073742336,o.Ab,o.Ab,[]),e.zb(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),e.zb(1073742336,x,x,[]),e.zb(1073742336,r,r,[]),e.zb(1024,c.k,(function(){return[[{path:"",component:s},{path:"order-info",loadChildren:m}]]}),[])])}))}}]);