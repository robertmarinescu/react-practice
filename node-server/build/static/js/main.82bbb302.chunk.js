(this.webpackJsonpnotesapp=this.webpackJsonpnotesapp||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(15),o=n.n(c),r=n(6),i=n(3),a=n(2),u=n(0),s=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[e.content,Object(u.jsx)("button",{onClick:n,children:c})]})},l=n(4),j=n.n(l),f="https://sleepy-sierra-13926.herokuapp.com/api/notes",b=function(){var t=j.a.get(f),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},d=function(t){return j.a.post(f,t).then((function(t){return t.data}))},p=function(t,e){return j.a.put("".concat(f,"/").concat(t),e).then((function(t){return t.data}))},m=function(t){var e=t.message;return null==e?null:Object(u.jsx)("div",{className:"error",children:e})},h=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},O=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)("a new note..."),l=Object(i.a)(o,2),j=l[0],f=l[1],O=Object(a.useState)(!0),v=Object(i.a)(O,2),x=v[0],g=v[1],S=Object(a.useState)(null),k=Object(i.a)(S,2),y=k[0],w=k[1];Object(a.useEffect)((function(){console.log("effect"),b().then((function(t){return c(t)}))}),[]);var N=x?n:n.filter((function(t){return!0===t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(m,{message:y}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return g(!x)},children:["show ",x?"important":"all"]})}),Object(u.jsx)("ul",{children:N.map((function(t){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),o=Object(r.a)(Object(r.a)({},e),{},{important:!e.important});p(t,o).then((function(e){c(n.map((function(n){return n.id!==t?n:e})))})).catch((function(o){w("Note '".concat(e.content,"' was already removed from server ")),setTimeout((function(){w(null)}),5e3),c(n.filter((function(e){return e.id!==t})))}))}(t.id)}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log("button clicked",t.target);var e={id:n.length+1,content:j,date:(new Date).toISOString(),important:Math.random()<.5};d(e).then((function(t){c(n.concat(t)),f("")}))},children:[Object(u.jsx)("input",{value:j,onChange:function(t){f(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]}),Object(u.jsx)(h,{})]})};n(39);o.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.82bbb302.chunk.js.map