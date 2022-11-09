"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[381],{3381:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,a,i,o,c,s,u,l,d=t(184),p=function(n){var e=n.children;return(0,d.jsx)("section",{children:(0,d.jsx)("div",{children:e})})},h=t(885),x=t(2791),m=t(9434),f=t(168),b=t(6444),g=b.ZP.form(r||(r=(0,f.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  margin: 10px;\n"]))),j=b.ZP.label(a||(a=(0,f.Z)(["\n  display: flex;\n  margin: 10px;\n  font-size: 20px;\n"]))),v=b.ZP.input(i||(i=(0,f.Z)(["\n  display: flex;\n  margin: 10px;\n  padding-left: 16px;\n  width: 200px;\n  height: 30px;\n  font-size: 18px;\n  border-radius: 4px;\n"]))),Z=b.ZP.button(o||(o=(0,f.Z)(["\n  &:hover,\n  &:focus {\n    background-color: #2196f3;\n    color: white;\n    cursor: pointer;\n  }\n\n  border-radius: 4px;\n  padding: 5px;\n  font-weight: 500;\n  font-size: 18px;\n  margin: 15px;\n  text-align: center;\n  border: solid 1px black;\n  background-color: white;\n\n  -webkit-transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),k=t(208),w=t(6916),z=function(n){return n.contacts.items},y=(0,w.P1)([z,function(n){return n.filter.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})),C=function(){var n=(0,x.useState)(""),e=(0,h.Z)(n,2),t=e[0],r=e[1],a=(0,x.useState)(""),i=(0,h.Z)(a,2),o=i[0],c=i[1],s=(0,m.v9)(z),u=(0,m.I0)(),l=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"phone":c(a);break;default:return}};return(0,d.jsxs)(g,{onSubmit:function(n){n.preventDefault();var e=t.toLowerCase();s.some((function(n){return n.name.toLowerCase()===e}))?function(n){alert("".concat(n," is already in contacts"))}(t):(u((0,k.cn)({name:t,phone:o})),r(""),c(""))},children:[(0,d.jsxs)(j,{children:["Name",(0,d.jsx)(v,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:l,value:t})]}),(0,d.jsxs)(j,{children:["Number",(0,d.jsx)(v,{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:l,value:o})]}),(0,d.jsx)(Z,{type:"submit",children:"Add contact"})]})},P=b.ZP.label(c||(c=(0,f.Z)(["\n  font-size: 20px;\n  margin: 10px;\n  font-weight: 400;\n"]))),S=b.ZP.input(s||(s=(0,f.Z)(["\n  display: flex;\n  margin: 10px;\n  padding-left: 16px;\n  width: 200px;\n  height: 30px;\n  font-size: 18px;\n  border-radius: 4px;\n"]))),A=t(9644),F=function(){var n=(0,m.I0)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(P,{children:"Find contacts by name"}),(0,d.jsx)(S,{type:"text",onChange:function(e){var t=e.target.value;n((0,A.M)(t.toLowerCase()))}})]})},N=b.ZP.li(u||(u=(0,f.Z)(["\n  font-size: 18px;\n  margin: 10px;\n"]))),I=b.ZP.button(l||(l=(0,f.Z)(["\n  &:hover,\n  &:focus {\n    background-color: #2196f3;\n    color: white;\n    cursor: pointer;\n  }\n\n  border-radius: 4px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.63;\n  text-align: center;\n  border: solid 1px black;\n  background-color: white;\n\n  -webkit-transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),L=t(5455),_=t(1413),q=function(n){var e=n.contact,t=n.closeForm,r=(0,x.useState)(e.name),a=(0,h.Z)(r,2),i=a[0],o=a[1],c=(0,x.useState)(e.phone),s=(0,h.Z)(c,2),u=s[0],l=s[1],p=(0,m.I0)(),f=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":o(r);break;case"email":l(r)}};return(0,d.jsxs)("form",{onSubmit:function(n){n.preventDefault(),p((0,k.Nq)((0,_.Z)((0,_.Z)({},e),{},{name:i,phone:u}))),t()},children:[(0,d.jsxs)("label",{children:["Name:"," ",(0,d.jsx)("input",{type:"text",name:"name",onChange:f,value:i})]}),(0,d.jsxs)("label",{children:["Phone:"," ",(0,d.jsx)("input",{type:"phone",name:"phone",onChange:f,value:u})]}),(0,d.jsx)("button",{children:"Save"})]})},D=function(){var n=(0,x.useState)(null),e=(0,h.Z)(n,2),t=e[0],r=e[1],a=(0,m.v9)(y),i=(0,m.I0)(),o=(0,m.v9)(z),c=function(){r(null)};return(0,d.jsx)("ul",{children:a.map((function(n){var e=n.id,a=n.name,s=n.phone;return(0,d.jsxs)(N,{children:[(0,d.jsx)("span",{children:(0,d.jsx)(L.ZP,{round:!0,size:25,name:a})}),(0,d.jsxs)("span",{children:[a,": ",s]}),(0,d.jsx)(I,{type:"button",onClick:function(){var n;n=e,i((0,k.h8)(n))},children:"Delete"}),(0,d.jsx)(I,{type:"button",onClick:function(){!function(n){var e=o.find((function(e){return e.id===n}));r(e)}(e)},children:"Update"}),t&&t.id===e&&(0,d.jsx)(q,{contact:t,closeForm:c})]},e)}))})},M=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(p,{children:[(0,d.jsx)(C,{}),(0,d.jsxs)("div",{children:[(0,d.jsx)(F,{}),(0,d.jsx)(D,{})]})]})})}}}]);
//# sourceMappingURL=381.df309aef.chunk.js.map