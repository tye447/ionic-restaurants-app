(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{aSNb:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class e{}var r=u("pMnS"),b=u("MKJQ"),i=u("sZkV"),t=u("SVse");class s{constructor(l){this.route=l,this.orderInfo={orderDate:"",recipes:[],orderId:0,priceTotal:0,restaurantName:"",restaurantAddress:""}}ngOnInit(){const l=JSON.parse(window.sessionStorage.getItem("ordersCurrentUserTrans")),n=JSON.parse(window.sessionStorage.getItem("allRestaurants"));this.route.queryParams.subscribe(u=>{const o=l.filter(l=>l.orderId===parseInt(u.id,10))[0];console.log(o),this.orderInfo.orderDate=o.orderDate,this.orderInfo.orderId=o.orderId,this.orderInfo.priceTotal=o.orderPriceTotal,this.orderInfo.restaurantName=o.restaurantName,this.setRecipes(o,n),console.log(this.orderInfo)})}setRecipes(l,n){const u=[];let o={name:"",price:0};l.recipes.forEach(e=>{o={name:"",price:0};const r=n.filter(n=>n.name===l.restaurantName)[0].recipes.filter(l=>l.name===e.name)[0];o.name=r.name,o.price=r.price,u.push(o)}),this.orderInfo.recipes=u}}var a=u("iInd"),c=o.nb({encapsulation:0,styles:[[".label[_ngcontent-%COMP%]{font-size:large;font-weight:700}"]],data:{}});function p(l){return o.Kb(0,[(l()(),o.pb(0,0,null,null,7,"ion-row",[],null,null,null,b.U,b.t)),o.ob(1,49152,null,0,i.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,2,"ion-col",[["size","9"]],null,null,null,b.K,b.j)),o.ob(3,49152,null,0,i.s,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.Ib(4,0,["",""])),(l()(),o.pb(5,0,null,0,2,"ion-col",[["size","3"],["style","text-align: right"]],null,null,null,b.K,b.j)),o.ob(6,49152,null,0,i.s,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.Ib(7,0,[""," \u20ac"]))],(function(l,n){l(n,3,0,"9"),l(n,6,0,"3")}),(function(l,n){l(n,4,0,null==n.context.$implicit?null:n.context.$implicit.name),l(n,7,0,null==n.context.$implicit?null:n.context.$implicit.price)}))}function d(l){return o.Kb(0,[(l()(),o.pb(0,0,null,null,11,"ion-header",[],null,null,null,b.N,b.m)),o.ob(1,49152,null,0,i.A,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,b.bb,b.A)),o.ob(3,49152,null,0,i.yb,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.E,b.d)),o.ob(5,49152,null,0,i.k,[o.h,o.k,o.x],null,null),(l()(),o.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==o.Bb(l,8).onClick(u)&&e),e}),b.C,b.b)),o.ob(7,49152,null,0,i.f,[o.h,o.k,o.x],{defaultHref:[0,"defaultHref"]},null),o.ob(8,16384,null,0,i.g,[[2,i.eb],i.Db],{defaultHref:[0,"defaultHref"]},null),(l()(),o.pb(9,0,null,0,2,"ion-title",[],null,null,null,b.ab,b.z)),o.ob(10,49152,null,0,i.wb,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Order Detail"])),(l()(),o.pb(12,0,null,null,54,"ion-content",[],null,null,null,b.L,b.k)),o.ob(13,49152,null,0,i.t,[o.h,o.k,o.x],null,null),(l()(),o.pb(14,0,null,0,52,"ion-card",[],null,null,null,b.J,b.e)),o.ob(15,49152,null,0,i.l,[o.h,o.k,o.x],null,null),(l()(),o.pb(16,0,null,0,13,"ion-grid",[["style","font-size: 16px"]],null,null,null,b.M,b.l)),o.ob(17,49152,null,0,i.z,[o.h,o.k,o.x],null,null),(l()(),o.pb(18,0,null,0,11,"ion-row",[],null,null,null,b.U,b.t)),o.ob(19,49152,null,0,i.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(20,0,null,0,4,"ion-col",[["size","6"]],null,null,null,b.K,b.j)),o.ob(21,49152,null,0,i.s,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.pb(22,0,null,0,2,"ion-label",[["class","label"]],null,null,null,b.S,b.r)),o.ob(23,49152,null,0,i.M,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Order Date:"])),(l()(),o.pb(25,0,null,0,4,"ion-col",[["size","6"]],null,null,null,b.K,b.j)),o.ob(26,49152,null,0,i.s,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.pb(27,0,null,0,2,"ion-label",[],null,null,null,b.S,b.r)),o.ob(28,49152,null,0,i.M,[o.h,o.k,o.x],null,null),(l()(),o.Ib(29,0,["",""])),(l()(),o.pb(30,0,null,0,13,"ion-grid",[],null,null,null,b.M,b.l)),o.ob(31,49152,null,0,i.z,[o.h,o.k,o.x],null,null),(l()(),o.pb(32,0,null,0,11,"ion-row",[],null,null,null,b.U,b.t)),o.ob(33,49152,null,0,i.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(34,0,null,0,4,"ion-col",[["size","6"]],null,null,null,b.K,b.j)),o.ob(35,49152,null,0,i.s,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.pb(36,0,null,0,2,"ion-label",[["class","label"]],null,null,null,b.S,b.r)),o.ob(37,49152,null,0,i.M,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Order Id:"])),(l()(),o.pb(39,0,null,0,4,"ion-col",[["size","6"]],null,null,null,b.K,b.j)),o.ob(40,49152,null,0,i.s,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.pb(41,0,null,0,2,"ion-label",[],null,null,null,b.S,b.r)),o.ob(42,49152,null,0,i.M,[o.h,o.k,o.x],null,null),(l()(),o.Ib(43,0,["",""])),(l()(),o.pb(44,0,null,0,10,"ion-grid",[],null,null,null,b.M,b.l)),o.ob(45,49152,null,0,i.z,[o.h,o.k,o.x],null,null),(l()(),o.pb(46,0,null,0,6,"ion-row",[],null,null,null,b.U,b.t)),o.ob(47,49152,null,0,i.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(48,0,null,0,4,"ion-col",[],null,null,null,b.K,b.j)),o.ob(49,49152,null,0,i.s,[o.h,o.k,o.x],null,null),(l()(),o.pb(50,0,null,0,2,"ion-label",[["class","label"]],null,null,null,b.S,b.r)),o.ob(51,49152,null,0,i.M,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Recipes:"])),(l()(),o.eb(16777216,null,0,1,null,p)),o.ob(54,278528,null,0,t.i,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null),(l()(),o.pb(55,0,null,0,11,"ion-grid",[],null,null,null,b.M,b.l)),o.ob(56,49152,null,0,i.z,[o.h,o.k,o.x],null,null),(l()(),o.pb(57,0,null,0,9,"ion-row",[["ion-item",""],["lines","full"]],null,null,null,b.U,b.t)),o.ob(58,49152,null,0,i.fb,[o.h,o.k,o.x],null,null),(l()(),o.pb(59,0,null,0,4,"ion-col",[["class","label"],["size","6"]],null,null,null,b.K,b.j)),o.ob(60,49152,null,0,i.s,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.pb(61,0,null,0,2,"ion-label",[],null,null,null,b.S,b.r)),o.ob(62,49152,null,0,i.M,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Total:"])),(l()(),o.pb(64,0,null,0,2,"ion-col",[["size","6"],["style","text-align: right"]],null,null,null,b.K,b.j)),o.ob(65,49152,null,0,i.s,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.Ib(66,0,[""," \u20ac"]))],(function(l,n){var u=n.component;l(n,7,0,"/"),l(n,8,0,"/"),l(n,21,0,"6"),l(n,26,0,"6"),l(n,35,0,"6"),l(n,40,0,"6"),l(n,54,0,null==u.orderInfo?null:u.orderInfo.recipes),l(n,60,0,"6"),l(n,65,0,"6")}),(function(l,n){var u=n.component;l(n,29,0,u.orderInfo.orderDate),l(n,43,0,u.orderInfo.orderId),l(n,66,0,u.orderInfo.priceTotal)}))}function f(l){return o.Kb(0,[(l()(),o.pb(0,0,null,null,1,"app-order-info",[],null,null,null,d,c)),o.ob(1,114688,null,0,s,[a.a],null,null)],(function(l,n){l(n,1,0)}),null)}var h=o.lb("app-order-info",s,f,{},{},[]),z=u("s7LF");class k{}u.d(n,"OrderInfoPageModuleNgFactory",(function(){return x}));var x=o.mb(e,[],(function(l){return o.yb([o.zb(512,o.j,o.X,[[8,[r.a,h]],[3,o.j],o.v]),o.zb(4608,t.l,t.k,[o.s,[2,t.r]]),o.zb(4608,z.l,z.l,[]),o.zb(4608,i.b,i.b,[o.x,o.g]),o.zb(4608,i.Cb,i.Cb,[i.b,o.j,o.p]),o.zb(4608,i.Fb,i.Fb,[i.b,o.j,o.p]),o.zb(1073742336,t.b,t.b,[]),o.zb(1073742336,z.k,z.k,[]),o.zb(1073742336,z.c,z.c,[]),o.zb(1073742336,i.Ab,i.Ab,[]),o.zb(1073742336,a.o,a.o,[[2,a.t],[2,a.m]]),o.zb(1073742336,k,k,[]),o.zb(1073742336,e,e,[]),o.zb(1024,a.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);