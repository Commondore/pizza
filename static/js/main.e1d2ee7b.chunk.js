(this.webpackJsonppizza=this.webpackJsonppizza||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,c){e.exports={logo:"Logo_logo__2wRbL",logo__img:"Logo_logo__img__2D1Pp"}},,,,,,,,,,,,,function(e,t,c){},,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(19),a=c.n(s),r=c(3),i=c.p+"static/media/logo.b8118123.png",l=c(17),o=c.n(l),j=c(1);var d=function(){return Object(j.jsx)("div",{className:o.a.logo,children:Object(j.jsx)("img",{className:o.a.logo__img,src:i,alt:"My pizza"})})},u=c(10),b=c(22),h=c(23);c(30);var O=function(){return Object(j.jsxs)("nav",{className:"toolbar-nav",children:[Object(j.jsxs)(u.b,{to:"/",exact:!0,className:"toolbar-nav__link",children:[Object(j.jsx)(b.a,{}),Object(j.jsx)("span",{children:"Pizza Builder"})]}),Object(j.jsxs)(u.b,{to:"/orders",className:"toolbar-nav__link",children:[Object(j.jsx)(h.a,{}),Object(j.jsx)("span",{children:"Orders"})]})]})},m={display:"flex",justifyContent:"space-between",background:"#f2f2f2",borderBottom:"4px solid #ccc"};var p=function(){return Object(j.jsxs)("header",{className:"toolbar",style:m,children:[Object(j.jsx)(d,{}),Object(j.jsx)(O,{})]})};var x=function(e){var t=e.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{}),Object(j.jsx)("main",{className:"main-wrapper",children:t})]})},f=c(24),_=c(9),v=c(5),g=c(13),N=(c(39),function(e){var t=e.type,c=e.clicked,n=e.children;return Object(j.jsx)("button",{onClick:c,className:t?["btn",t].join(" "):"btn",children:n})}),y=(c(40),function(e){var t=e.ingredients,c=Object(n.useState)({name:"",email:"",address:"",phone:""}),s=Object(_.a)(c,2),a=s[0],i=s[1],l=Object(r.f)(),o=function(e){i((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(g.a)({},e.target.name,e.target.value))}))};return Object(j.jsxs)("div",{className:"contact-data",children:[Object(j.jsx)("h3",{className:"contact-data__title",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0438 \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(j.jsxs)("form",{className:"contact-data__form",onSubmit:function(e){e.preventDefault();var c={ingredients:Object(v.a)({},t),customer:Object(v.a)({},a)};fetch("https://pizza-red-default-rtdb.europe-west1.firebasedatabase.app/order.json",{method:"POST",body:JSON.stringify(c)}).then((function(e){e.ok&&l.push("/")}))},children:[Object(j.jsx)("div",{className:"contact-data__group",children:Object(j.jsx)("input",{className:"contact-data__input",name:"name",type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",onChange:o})}),Object(j.jsx)("div",{className:"contact-data__group",children:Object(j.jsx)("input",{className:"contact-data__input",name:"email",type:"email",placeholder:"\u0412\u0430\u0448 email",onChange:o})}),Object(j.jsx)("div",{className:"contact-data__group",children:Object(j.jsx)("input",{className:"contact-data__input",name:"address",type:"text",placeholder:"\u0412\u0430\u0448 \u0430\u0434\u0440\u0435\u0441",onChange:o})}),Object(j.jsx)("div",{className:"contact-data__group",children:Object(j.jsx)("input",{className:"contact-data__input",name:"phone",type:"tel",placeholder:"\u0412\u0430\u0448 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",onChange:o})}),Object(j.jsx)("div",{className:"contact-data__group",children:Object(j.jsx)(N,{type:"btn-warning",children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"})})]})]})});var z=function(e){var t=e.type;return Object(j.jsx)("img",{src:"img/".concat(t,".png"),alt:t})},k=(c(41),function(e){var t=e.ingredients,c=[];for(var n in t)0!==t[n]&&c.push(Object(j.jsx)(z,{type:n},n));return 0===c.length&&(c=Object(j.jsx)("h3",{className:"title-empty",children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0438\u043d\u0433\u0440\u0435\u0434\u0438\u043d\u0435\u0442\u044b"})),Object(j.jsx)("div",{className:"Pizza",children:c})}),w=function(e){var t=e.ingredients,c=e.cancel,n=e.history;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(k,{ingredients:t}),Object(j.jsxs)("div",{className:"checkout__wrap",children:[Object(j.jsx)("h1",{className:"checkout__title",style:{textAlign:"center"},children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0437\u0430\u043a\u0430\u0437"}),Object(j.jsxs)("div",{className:"order-info__actions",style:{textAlign:"center"},children:[Object(j.jsx)(N,{type:"btn-danger",clicked:c,children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(j.jsx)(N,{type:"btn-success",clicked:function(){n.replace("/checkout/contact-data")},children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"})]}),Object(j.jsx)(r.a,{path:"/checkout/contact-data",render:function(e){return Object(j.jsx)(y,Object(v.a)({ingredients:t},e))}})]})]})};c(42);var C=function(e){var t=Object(n.useState)({cheese:0,olives:0,sausage:0,mushrooms:0}),c=Object(_.a)(t,2),s=c[0],a=c[1];return Object(n.useEffect)((function(){var e,t=new URLSearchParams(window.location.search),c={},n=Object(f.a)(t.entries());try{for(n.s();!(e=n.n()).done;){var s=Object(_.a)(e.value,2),r=s[0],i=s[1];c[r]=parseInt(i)}}catch(l){n.e(l)}finally{n.f()}a(c)}),[]),Object(j.jsx)("div",{className:"checkout",children:Object(j.jsx)(w,{ingredients:s,cancel:function(){e.history.push("/")},history:e.history})})};c(43);var S=function(e){var t=e.customer,c=t.name,n=t.email,s=t.address,a=t.phone;return Object(j.jsxs)("li",{className:"orders__item",children:[Object(j.jsxs)("h3",{className:"orders__title",children:["\u0417\u0430\u043a\u0430\u0437 ",Object(j.jsx)("strong",{children:"#1"})]}),Object(j.jsxs)("div",{className:"orders__body",children:[Object(j.jsxs)("div",{className:"customer",children:[Object(j.jsx)("h4",{className:"customer__title",children:"\u0418\u043d\u0444\u043e \u043e \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0435:"}),Object(j.jsxs)("ul",{className:"customer__list",children:[Object(j.jsxs)("li",{className:"customer__item",children:["\u0418\u043c\u044f: ",Object(j.jsx)("span",{children:c})]}),Object(j.jsxs)("li",{className:"customer__item",children:["Email: ",Object(j.jsx)("span",{children:n})]}),Object(j.jsxs)("li",{className:"customer__item",children:["\u0410\u0434\u0440\u0435\u0441: ",Object(j.jsx)("span",{children:s})]}),Object(j.jsxs)("li",{className:"customer__item",children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d: ",Object(j.jsx)("span",{children:a})]})]})]}),Object(j.jsxs)("div",{className:"ingredients",children:[Object(j.jsx)("h4",{className:"ingredients__title",children:"\u0418\u043d\u0433\u0440\u0435\u0434\u0438\u0435\u043d\u0442\u044b"}),Object(j.jsxs)("ul",{className:"ingredients__list",children:[Object(j.jsxs)("li",{className:"ingredients__item",children:["cheese: ",Object(j.jsx)("span",{children:"1"})]}),Object(j.jsxs)("li",{className:"ingredients__item",children:["cheese: ",Object(j.jsx)("span",{children:"1"})]}),Object(j.jsxs)("li",{className:"ingredients__item",children:["cheese: ",Object(j.jsx)("span",{children:"1"})]}),Object(j.jsxs)("li",{className:"ingredients__item",children:["cheese: ",Object(j.jsx)("span",{children:"1"})]})]})]})]})]})};var P=function(){var e=Object(n.useState)([]),t=Object(_.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("https://pizza-red-default-rtdb.europe-west1.firebasedatabase.app/order.json").then((function(e){if(e.ok)return e.json()})).then((function(e){var t=Object.keys(e).map((function(t){return Object(v.a)(Object(v.a)({},e[t]),{},{id:t})}));s(t)}))}),[]),Object(j.jsx)("div",{children:c.map((function(e,t){return Object(j.jsx)(S,Object(v.a)({},e),e.id)}))})},F=(c(44),function(e){var t=e.type,c=e.title,n=e.count,s=e.add,a=e.remove;return Object(j.jsxs)("div",{className:"pizza-control__item",onClick:s,children:[Object(j.jsx)("img",{src:"img/".concat(t,"-icon.png"),alt:"",className:"pizza-control__img"}),Object(j.jsx)("h4",{className:"pizza-control__title",children:c}),n>0?Object(j.jsx)("div",{className:"ingredient-count",onClick:a,children:n}):null]})}),L=(c(45),{cheese:"\u0441\u044b\u0440",olives:"\u043e\u043b\u0438\u0432\u043a\u0438",sausage:"\u043a\u043e\u043b\u0431\u0430\u0441\u0430",mushrooms:"\u0433\u0440\u0438\u0431\u044b"}),B=function(e){var t=e.ingredients,c=e.price,n=e.add,s=e.remove,a=e.purchasable,r=e.purchase;return Object(j.jsxs)("div",{className:"pizza-controls",children:[Object(j.jsx)("h3",{className:"pizza-controls__title",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u043d\u0433\u0440\u0435\u0434\u0438\u0435\u043d\u0442\u044b"}),Object(j.jsx)("div",{className:"pizza-control__list",children:Object.keys(L).map((function(e){return Object(j.jsx)(F,{type:e,title:L[e],count:t[e],add:function(){return n(e)},remove:function(t){return s(t,e)}},e)}))}),Object(j.jsxs)("h3",{children:["\u0426\u0435\u043d\u0430: ",c," \u0441\u043e\u043c"]}),Object(j.jsx)("div",{className:"pizza-order",children:Object(j.jsx)("button",{className:"pizza-order__btn",disabled:!a,onClick:r,children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})})]})},E=(c(46),function(e){var t=e.ingredients,c=e.price,n=e.purchaseContinued,s=e.purchaseCancelled,a=Object.keys(t).map((function(e){return Object(j.jsxs)("li",{className:"order-info__item",children:[Object(j.jsxs)("span",{style:{textTransform:"capitalize"},children:[e,":"]}),Object(j.jsx)("span",{style:{color:"#e74c3c",fontWeight:"bold"},children:t[e]})]},e)}));return Object(j.jsxs)("div",{className:"order-info",children:[Object(j.jsx)("h3",{className:"order-info__title",children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437"}),Object(j.jsx)("p",{className:"order-info__desc",children:"\u0412\u0430\u0448\u0430 \u043f\u0438\u0446\u0446\u0430 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0438\u043d\u0433\u0440\u0438\u0434\u0438\u0435\u043d\u0442\u043e\u0432:"}),Object(j.jsx)("ul",{className:"order-info__list",children:a}),Object(j.jsxs)("div",{className:"order-info__price",children:["\u0426\u0435\u043d\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",Object(j.jsx)("strong",{children:c})," \u0441\u043e\u043c"]}),Object(j.jsxs)("div",{className:"order-info__actions",children:[Object(j.jsx)(N,{clicked:s,type:"btn-danger",children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(j.jsx)(N,{clicked:n,type:"btn-success",children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"})]})]})}),T=(c(47),function(e){var t=e.show,c=e.children,n=e.clicked;return t?Object(j.jsx)("div",{className:"back-drop",onClick:n,children:c}):null});c(48);var D=function(e){var t=e.children,c=e.show,n=e.closed;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(T,{show:c,clicked:n}),Object(j.jsx)("div",{className:"modal ".concat(c?" show":""),children:t})]})},I=(c(49),{cheese:40,olives:60,sausage:70,mushrooms:65});var J=function(e){var t=Object(n.useState)({cheese:0,olives:0,sausage:0,mushrooms:0}),c=Object(_.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(100),i=Object(_.a)(r,2),l=i[0],o=i[1],d=Object(n.useState)(!1),u=Object(_.a)(d,2),b=u[0],h=u[1],O=Object(n.useState)(!1),m=Object(_.a)(O,2),p=m[0],x=m[1],f=function(e){var t=Object.values(e).reduce((function(e,t){return e+t}),0);h((function(){return t>0}))},g=function(){return x(!1)};return Object(j.jsxs)("div",{className:"pizza-wrap",children:[Object(j.jsx)(D,{show:p,closed:g,children:Object(j.jsx)(E,{ingredients:s,price:l,purchaseCancelled:g,purchaseContinued:function(){var t=Object.keys(s).map((function(e){return"".concat(e,"=").concat(s[e])})).join("&");e.history.push({pathname:"/checkout",search:"?"+t})}})}),Object(j.jsx)(k,{ingredients:s}),Object(j.jsx)(B,{ingredients:s,price:l,add:function(e){var t=Object(v.a)({},s);t[e]++,o((function(t){return t+I[e]})),a(t),f(t)},remove:function(e,t){e.stopPropagation();var c=Object(v.a)({},s);0!==c[t]&&(c[t]--,o((function(e){return e-I[t]})),a(c),f(c))},purchasable:b,purchase:function(){return x(!0)}})]})};var A=function(){return Object(j.jsx)(x,{children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/orders",component:P}),Object(j.jsx)(r.a,{exact:!0,path:"/checkout",component:C}),Object(j.jsx)(r.a,{exact:!0,path:"/",component:J}),Object(j.jsx)(r.a,{render:function(){return Object(j.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})}})]})})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};a.a.render(Object(j.jsx)(u.a,{children:Object(j.jsx)(A,{})}),document.getElementById("root")),R()}],[[50,1,2]]]);
//# sourceMappingURL=main.e1d2ee7b.chunk.js.map