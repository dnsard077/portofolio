(function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);g&&g(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about",project:"project",project2:"project2"}[t]||t)+"."+{about:"868a3793",project:"91147745",project2:"8fa5dfde"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1,project:1,project2:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about",project:"project",project2:"project2"}[t]||t)+"."+{about:"aa967cdf",project:"9bb1415b",project2:"4fa3de44"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){l=p[s],u=l.getAttribute("data-href");if(u===r||u===o)return e()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=e,g.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],g.parentNode.removeChild(g),n(i)},g.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(g)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(g);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[t]=void 0}};var g=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/portofolio/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var g=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"046b":function(t,e,n){},"104f":function(t,e,n){"use strict";n("046b")},1195:function(t,e,n){t.exports=n.p+"img/avatar.ac16cb5d.png"},"4fe8":function(t,e,n){t.exports=n.p+"img/plant.7aa0824b.png"},5080:function(t,e,n){t.exports=n.p+"img/coding.7f2e92a0.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-right",attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("a",{attrs:{href:"/#intro"}},[t._v("Intro")]),t._v(" | "),n("a",{attrs:{href:"/#skill"}},[t._v("Skills")]),t._v(" | "),n("a",{attrs:{href:"/#project"}},[t._v("Projects")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("Contact")])],1),n("router-view")],1)},o=[],i=(n("5c0b"),n("2877")),s={},c=Object(i["a"])(s,a,o,!1,null,null,null),l=c.exports,u=n("9483");Object(u["a"])("".concat("/portofolio/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7"),n("3ca3"),n("ddb0");var p=n("8c4f"),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[t._m(0),r("div",{staticClass:"bg-tengah text-center",attrs:{id:"intro"}},[t._m(1),r("hr"),t._m(2),r("hr"),r("h2",{attrs:{id:"project"}},[t._v("My Works.")]),r("div",{staticClass:"row project"},[r("div",{staticClass:"col-md-6 p-5"},[r("img",{staticClass:"rounded text-right img-fluid pb-4",attrs:{alt:"project1-img",src:n("5945")}}),r("h5",[t._v("Heart Disease Prediction")]),r("p",[t._v("Heart Disease Prediction menggunakan machine learning SVM model")]),r("router-link",{staticClass:"tombol",attrs:{to:"/project"}},[t._v("More")])],1),r("div",{staticClass:"col-md-6 p-5"},[r("img",{staticClass:"rounded text-right img-fluid pb-4",attrs:{alt:"project1-img",src:n("6601")}}),r("h5",[t._v("Youniverse")]),r("p",[t._v("Sebuah E-Commerce yang berbasis website secara onlines")]),r("router-link",{staticClass:"tombol",attrs:{to:"/project2"}},[t._v("More")])],1)]),r("hr"),r("div",{staticClass:"text-center"},[r("h2",[t._v("Get In Touch")]),r("p",{staticClass:"message"},[t._v("Tertarik untuk mempekerjakan saya? klik tombol dibawah dan mari kita bicarakan")]),r("router-link",{staticClass:"tombol",attrs:{to:"/about"}},[t._v("Contact Me")])],1)]),t._m(3)])},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-atas"},[r("img",{staticClass:"awan1",attrs:{src:n("9c2f"),alt:"awan"}}),r("div",{staticClass:"title-text text-center"},[r("h1",[r("strong",[t._v("I'm Danis.")])]),r("h2",[t._v("a web designer.")])]),r("img",{staticClass:"awan2",attrs:{src:n("9c2f"),alt:"awan"}}),r("img",{staticClass:"rounded mx-auto d-block",attrs:{src:n("4fe8"),alt:"plant"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{staticClass:"p-3",attrs:{src:n("1195"),alt:"avatar"}}),r("h2",{staticClass:"pt-3"},[t._v("Hello.")]),r("p",{staticClass:"intro"},[t._v("Saya adalah seorang web developer. Saya terlah bekerja dalam bidang ini lebih dari 12 tahun dengan berbaggai perusahaan maupun freelancer. Saya dapat membuat front-end, email design, marketing pages, app UI/UX.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"skills",attrs:{id:"skill"}},[r("h2",[t._v("My Skills.")]),r("div",{staticClass:"bg-skill"},[r("img",{staticClass:"skill",attrs:{src:n("6a6c"),alt:"code-img"}}),r("h3",[t._v("Design")]),r("p",[t._v("Saya menguasai berbagai tool design seperti photoshop, coreldraw, figma dan masih banyak lagi.")])]),r("div",{staticClass:"bg-skill"},[r("img",{staticClass:"skill2",attrs:{src:n("5080"),alt:"coding-img"}}),r("h3",[t._v("Development")]),r("p",[t._v("Saya menguasai HTML, CSS dan Javascript serta dapat membuat aplikasi menggunakan java maupun kotlin")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-bawah text-center"},[n("a",{attrs:{href:"https://www.linkedin.com"}},[t._v("LinkedIn")]),n("a",{attrs:{href:"https://twitter.com"}},[t._v("Twitter")]),n("a",{attrs:{href:"https://www.youtube.com/"}},[t._v("Youtube")])])}],m=(n("104f"),{}),f=Object(i["a"])(m,g,d,!1,null,"327e0f20",null),b=f.exports;r["a"].use(p["a"]);var v=[{path:"/",name:"Home",component:b},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}},{path:"/project",name:"Project",component:function(){return n.e("project").then(n.bind(null,"07bd"))}},{path:"/project2",name:"Project2",component:function(){return n.e("project2").then(n.bind(null,"8f7c"))}}],h=new p["a"]({mode:"history",base:"/portofolio/",routes:v}),A=h,C=n("2f62");r["a"].use(C["a"]);var w=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("7b17"),n("f9e3");r["a"].config.productionTip=!1,new r["a"]({router:A,store:w,render:function(t){return t(l)}}).$mount("#app")},5945:function(t,e,n){t.exports=n.p+"img/project1.59dfbb92.jpg"},"5c0b":function(t,e,n){"use strict";n("9c0c")},6601:function(t,e,n){t.exports=n.p+"img/project2.3eaef003.png"},"6a6c":function(t,e,n){t.exports=n.p+"img/code.f41b010b.png"},"9c0c":function(t,e,n){},"9c2f":function(t,e){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.f14ab70f.js.map