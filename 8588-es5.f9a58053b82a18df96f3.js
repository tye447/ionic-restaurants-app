!function(){function n(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function t(n,t,e,i,a,r,o){try{var s=n[r](o),c=s.value}catch(f){return void e(f)}s.done?t(c):Promise.resolve(c).then(i,a)}function e(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(self.webpackChunkionic_restaurants_app=self.webpackChunkionic_restaurants_app||[]).push([[8588],{8588:function(i,a,r){"use strict";r.r(a),r.d(a,{ion_ripple_effect:function(){return c}});var o=r(2322),s=r(7505),c=function(){function i(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(0,o.r)(this,n),this.type="bounded"}var a,r,c,m,p;return a=i,(r=[{key:"addRipple",value:(m=regeneratorRuntime.mark(function n(t,e){var i=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(n){(0,o.f)(function(){var a=i.el.getBoundingClientRect(),r=a.width,s=a.height,c=Math.sqrt(r*r+s*s),m=Math.max(s,r),p=i.unbounded?m:c+u,d=Math.floor(m*l),b=p/d,v=t-a.left,w=e-a.top;i.unbounded&&(v=.5*r,w=.5*s);var h=v-.5*d,y=w-.5*d,k=.5*r-v,g=.5*s-w;(0,o.c)(function(){var t=document.createElement("div");t.classList.add("ripple-effect");var e=t.style;e.top=y+"px",e.left=h+"px",e.width=e.height=d+"px",e.setProperty("--final-scale","".concat(b)),e.setProperty("--translate-end","".concat(k,"px, ").concat(g,"px")),(i.el.shadowRoot||i.el).appendChild(t),setTimeout(function(){n(function(){f(t)})},325)})})}));case 1:case"end":return n.stop()}},n)}),p=function(){var n=this,e=arguments;return new Promise(function(i,a){var r=m.apply(n,e);function o(n){t(r,i,a,o,s,"next",n)}function s(n){t(r,i,a,o,s,"throw",n)}o(void 0)})},function(n,t){return p.apply(this,arguments)})},{key:"unbounded",get:function(){return"unbounded"===this.type}},{key:"render",value:function(){var t,e=(0,s.b)(this);return(0,o.h)(o.H,{role:"presentation",class:(t={},n(t,e,!0),n(t,"unbounded",this.unbounded),t)})}},{key:"el",get:function(){return(0,o.i)(this)}}])&&e(a.prototype,r),c&&e(a,c),i}(),f=function(n){n.classList.add("fade-out"),setTimeout(function(){n.remove()},200)},u=10,l=.5;c.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}])}();