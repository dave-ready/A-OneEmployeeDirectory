(this.webpackJsonpemployeedirect=this.webpackJsonpemployeedirect||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(13),s=n.n(a),i=n(3),o=(n(19),n(0));var l=function(e){return Object(o.jsx)(o.Fragment,{children:e.employees.filter((function(t){return e.searchTerm?t.name.first.toLowerCase().includes(e.searchTerm.toLowerCase())?t:void 0:t})).map((function(e){return Object(o.jsx)("div",{className:"dataTable",children:Object(o.jsxs)("div",{className:"img-container",children:[Object(o.jsx)("img",{id:"pic",alt:e.name.first,src:e.picture.large}),Object(o.jsxs)("p",{id:"info",children:[" ",e.name.first," ",e.name.last," "]}),Object(o.jsx)("p",{id:"email",children:e.email})]})})}))})};var u=function(e){return Object(o.jsx)("div",{className:"container",children:e.children})};n(21);var j=function(){return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{children:"Employee Directory"}),Object(o.jsx)("p",{children:"Search for an employee!"})]})};n(22);var d=function(e,t){var n=e.handleSearchTerm,c=e.searchTerm,r=e.handleSortByName;return Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsx)("form",{children:Object(o.jsx)("input",{value:c,onChange:n,className:"form",type:"text",placeholder:"employee search"})}),Object(o.jsx)("div",{className:"buttons",children:Object(o.jsx)("button",{onClick:r,className:"namebtn",children:"Sort Alphabetically!"})})]})},m=n(14),h=n.n(m),b={employeeSearch:function(){return console.log("Queried the API!"),h.a.get("https://randomuser.me/api/?exc=gender,dob,cell,nat&results=30")}};var f=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){b.search().then((function(e){console.log(e.data.results),r(e.data.results),console.log(n)}))}),[]);var a=Object(c.useState)(""),s=Object(i.a)(a,2),m=s[0],h=s[1],f=Object(c.useState)(!1),O=Object(i.a)(f,2),p=O[0],x=O[1],v=Object(c.useState)([]),g=Object(i.a)(v,2),y=(g[0],g[1]);return Object(o.jsxs)(u,{children:[Object(o.jsx)(d,{handleSearchTerm:function(e){h(e.target.value)},searchTerm:m,handleSortByName:function(){p?(y(n.sort((function(e,t){return e.name.first>t.name.first?-1:1}))),x(!1)):(y(n.sort((function(e,t){return e.name.first>t.name.first?1:-1}))),x(!0))}}),Object(o.jsx)(j,{}),Object(o.jsx)(l,{searchTerm:m,employees:n})]})},O=(n(41),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))});s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),O()}},[[42,1,2]]]);
//# sourceMappingURL=main.525d7cfb.chunk.js.map