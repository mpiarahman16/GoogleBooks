(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,n){e.exports=n(29)},22:function(e,t,n){},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(14),i=n.n(l),c=(n(22),n(15)),r=n(1),u=n(8);var s=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)([]),c=Object(u.a)(i,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){""!==n&&fetch("https://www.googleapis.com/books/v1/volumes?q="+n+"&key=AIzaSyBnAhH98CH6DznQGjpCLWA3x-dY757Eu4I").then((function(e){return e.json()})).then((function(e){s(e.items)}))}),[n]),o.a.createElement("div",null,o.a.createElement("input",{type:"search",value:n,onChange:function(e){return l(e.target.value)}}),r.map((function(e){var t,n,a,l,i,c;return o.a.createElement("div",{key:e.id},o.a.createElement("p",null,"Title: ",o.a.createElement("a",{href:null===(t=e.saleInfo)||void 0===t?void 0:t.buyLink},null===(n=e.volumeInfo)||void 0===n?void 0:n.title)),o.a.createElement("p",null,"Description: ",null===(a=e.volumeInfo)||void 0===a?void 0:a.description),o.a.createElement("p",null,"Authors: ",null===(l=e.volumeInfo)||void 0===l?void 0:l.authors),o.a.createElement("p",null,"Image: ",o.a.createElement("img",{src:null===(i=e.volumeInfo)||void 0===i||null===(c=i.imageLinks)||void 0===c?void 0:c.thumbnail})),o.a.createElement("button",{onClick:function(){return function(e){fetch("/api/books",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.saleInfo.buyLink})}).catch((function(e){console.log(e)}))}(e)}},"Save"))})))};var m=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(){fetch("/api/books").then((function(e){return e.json()})).then((function(e){console.log(e),l(e)}))}),[]),o.a.createElement("div",null,o.a.createElement("h1",null,"Your Saved Books"),n.map((function(e){var t;return o.a.createElement("div",{key:e._id},o.a.createElement("p",null,"Title: ",o.a.createElement("a",{href:null===(t=e.saleInfo)||void 0===t?void 0:t.buyLink},e.title)),o.a.createElement("p",null,"Description: ",e.description),o.a.createElement("p",null,"Authors: ",e.authors),o.a.createElement("p",null,"Image: ",o.a.createElement("img",{src:e.image})))})))};n(23);var p=function(){return o.a.createElement(c.a,null,o.a.createElement(r.d,null,o.a.createElement(r.a,{to:"/search",path:"/",exact:!0}),o.a.createElement(r.b,{path:"/search",component:s}),o.a.createElement(r.b,{path:"/saved",component:m})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.2b2c177d.chunk.js.map