(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{fLW0:function(t,e,n){"use strict";n.r(e),n.d(e,"RestaurantsPageModule",function(){return h});var r=n("ofXK"),s=n("3Pt+"),a=n("TEn/"),i=n("tyNb"),o=n("RD+2"),c=n("fXoL");const u=function(){return["restaurant-info"]},d=function(t,e){return{name:t,formatted_address:e}};function b(t,e){if(1&t&&(c.Mb(0,"ion-card",5),c.Mb(1,"ion-card-content"),c.Mb(2,"ion-list",0),c.Mb(3,"ion-item"),c.Mb(4,"ion-text"),c.jc(5),c.Kb(6,"br"),c.Kb(7,"br"),c.jc(8),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&t){const t=e.$implicit;c.ac("routerLink",c.cc(4,u))("queryParams",c.ec(5,d,t.name,t.formatted_address)),c.zb(5),c.kc(t.name),c.zb(3),c.kc(t.formatted_address)}}const l=[],m=[{path:"",component:(()=>{class t{constructor(t){this.restaurantsService=t,this.order=(t,e)=>{if(t.name<e.name)return e.name},this.inputAddress="Part-Dieu"}ngOnInit(){}ionViewWillEnter(){}search(t){this.serviceLocation(t)}services(){this.serviceLocation(this.inputAddress)}serviceLocation(t){JSON.parse(window.sessionStorage.getItem("location")),this.restaurantsService.getLocation(t).subscribe(t=>{const e=JSON.parse(JSON.stringify(t)).candidates[0].geometry.location;this.resultLocation=JSON.stringify(e.lat+","+e.lng),window.sessionStorage.setItem("location",this.resultLocation),this.serviceRestaurant(e.lat,e.lng)})}serviceRestaurant(t,e){this.restaurantsService.getAllRestaurantLyon(t,e).subscribe(t=>{this.resultTest=JSON.stringify(t),this.createTest(l,this.resultTest)})}createTest(t,e){t=[];const n=JSON.parse(this.resultTest),r={name:"",rating:0,formatted_address:"",weekday_text:"",formatted_phone_number:"",website:"",user_ratings_total:0};n.results.forEach(e=>{this.affectation(t,e,r)})}affectation(t,e,n){this.restaurantsService.getPlaceName(e.place_id,"name,rating,formatted_phone_number,formatted_address,opening_hours,website,user_ratings_total").subscribe(e=>{const r=JSON.stringify(e),s=JSON.parse(r).result;(n={name:"",rating:0,formatted_address:"",weekday_text:"",formatted_phone_number:"",website:"",user_ratings_total:0}).formatted_address=s.formatted_address,n.formatted_phone_number=s.formatted_phone_number,n.name=s.name,n.rating=s.rating,n.user_ratings_total=s.user_ratings_total,n.website=s.website,null!=s.opening_hours&&(n.weekday_text=s.opening_hours.weekday_text),t.push(n),this.restaurants=t,window.sessionStorage.setItem("allRes",JSON.stringify(t))})}loadAllRestaurants(){this.restaurants=JSON.parse(window.sessionStorage.getItem("allRestaurants"))}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(o.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-restaurants"]],decls:14,vars:2,consts:[["lines","none"],["color","primary","stacked",""],["placeholder","Part-Dieu","type","text",3,"ngModel","ngModelChange"],[3,"click"],[3,"routerLink","queryParams",4,"ngFor","ngForOf"],[3,"routerLink","queryParams"]],template:function(t,e){1&t&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title"),c.jc(3,"Restaurants"),c.Lb(),c.Lb(),c.Mb(4,"ion-list"),c.Mb(5,"ion-item",0),c.Mb(6,"ion-label",1),c.jc(7,"Place"),c.Lb(),c.Mb(8,"ion-input",2),c.Tb("ngModelChange",function(t){return e.inputAddress=t}),c.Lb(),c.Lb(),c.Mb(9,"ion-item",0),c.Mb(10,"ion-button",3),c.Tb("click",function(){return e.search(e.inputAddress)}),c.jc(11,"Search"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(12,"ion-content"),c.ic(13,b,9,8,"ion-card",4),c.Lb()),2&t&&(c.zb(8),c.ac("ngModel",e.inputAddress),c.zb(5),c.ac("ngForOf",e.restaurants))},directives:[a.o,a.D,a.C,a.u,a.s,a.t,a.r,a.I,s.e,s.h,a.e,a.m,r.i,a.g,a.H,i.h,a.h,a.A],styles:[""]}),t})()},{path:"restaurant-info",loadChildren:()=>n.e(13).then(n.bind(null,"mpU6")).then(t=>t.RestaurantInfoPageModule)}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({imports:[[i.i.forChild(m)],i.i]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({imports:[[r.b,s.b,a.E,f]]}),t})()}}]);