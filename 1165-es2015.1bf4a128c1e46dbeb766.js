(self.webpackChunkionic_restaurants_app=self.webpackChunkionic_restaurants_app||[]).push([[1165],{1165:function(e,t,s){"use strict";s.r(t),s.d(t,{LoginPageModule:function(){return h}});var r=s(1116),n=s(1462),o=s(8809),i=s(5860),a=s(8619),u=s(2693);let l=(()=>{class e{constructor(e){this.http=e}getAllUsers(e){return this.http.get(e).pipe()}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(u.eN))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var c=s(9827);let g=(()=>{class e{constructor(e){this.http=e}getAllOrders(e){return this.http.get(e).pipe()}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(u.eN))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const d=[{path:"",component:(()=>{class e{constructor(e,t,s,r,n,o){this.route=e,this.fb=t,this.router=s,this.userService=r,this.restaurantsService=n,this.ordersService=o,this.urlUsers="./assets/users.json",this.urlRestaurants="./assets/restaurants.json",this.urlOrders="./assets/orders.json"}ngOnInit(){}ionViewWillEnter(){sessionStorage.clear(),this.name="",this.password=""}logForm(){this.buildLoginForm(),this.setCurrentUser(this.urlUsers,this.loginForm.value.name,this.loginForm.value.password)}buildLoginForm(){this.loginForm=this.fb.group({name:[this.name],password:[this.password]})}setCurrentUser(e,t,s){this.userService.getAllUsers(e).subscribe(e=>{const r=e.filter(e=>e.name===t).filter(e=>e.password===s)[0];null!=r?(window.sessionStorage.setItem("currentUser",JSON.stringify(r)),this.router.navigateByUrl("tabs/restaurants").then(()=>{this.setRestaurants(),this.setOrdersByUser()})):(alert("Invalid name or password: Please try again"),window.sessionStorage.clear())})}setRestaurants(){this.restaurantsService.getAllRestaurantJSON(this.urlRestaurants).subscribe(e=>{window.sessionStorage.setItem("allRestaurants",JSON.stringify(e))})}setOrdersByUser(){this.ordersService.getAllOrders(this.urlOrders).subscribe(e=>{const t=JSON.parse(window.sessionStorage.getItem("currentUser")),s=t.id,r=e.filter(e=>e.userId===parseInt(s,10));t.ordersCount=r.length,window.sessionStorage.setItem("currentUser",JSON.stringify(t)),window.sessionStorage.setItem("ordersCurrentUser",JSON.stringify(r))})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(i.gz),a.Y36(n.qu),a.Y36(i.F0),a.Y36(l),a.Y36(c.P),a.Y36(g))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-login"]],decls:18,vars:2,consts:[[3,"ngSubmit"],["autocomplete","","type","text","name","name",3,"ngModel","ngModelChange"],["type","password","name","password",3,"ngModel","ngModelChange"],["type","submit"]],template:function(e,t){1&e&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-title"),a._uU(3,"login"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(4,"ion-content"),a.TgZ(5,"form",0),a.NdJ("ngSubmit",function(){return t.logForm()}),a.TgZ(6,"ion-item"),a.TgZ(7,"ion-label"),a._uU(8,"Name"),a.qZA(),a.TgZ(9,"ion-input",1),a.NdJ("ngModelChange",function(e){return t.name=e}),a.qZA(),a.qZA(),a.TgZ(10,"ion-item"),a.TgZ(11,"ion-label"),a._uU(12,"Password"),a.qZA(),a.TgZ(13,"ion-input",2),a.NdJ("ngModelChange",function(e){return t.password=e}),a.qZA(),a.qZA(),a.TgZ(14,"ion-button",3),a._uU(15,"Login"),a.qZA(),a.qZA(),a.TgZ(16,"ion-text"),a._uU(17,"name:Arthur, password: arthur"),a.qZA(),a.qZA()),2&e&&(a.xp6(9),a.Q6J("ngModel",t.name),a.xp6(4),a.Q6J("ngModel",t.password))},directives:[o.Gu,o.sr,o.wd,o.W2,n._Y,n.JL,n.F,o.Ie,o.Q$,o.pK,o.j9,n.JJ,n.On,o.YG,o.yW],styles:[""]}),e})()}];let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[i.Bz.forChild(d)],i.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[r.ez,n.u5,o.Pc,p]]}),e})()}}]);