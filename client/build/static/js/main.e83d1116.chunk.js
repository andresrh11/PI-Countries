(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(A,e,t){},45:function(A,e,t){},46:function(A,e,t){},73:function(A,e,t){},75:function(A,e,t){},76:function(A,e,t){},82:function(A,e,t){},83:function(A,e,t){},84:function(A,e,t){},85:function(A,e,t){},86:function(A,e,t){},87:function(A,e,t){},88:function(A,e,t){},89:function(A,e,t){},90:function(A,e,t){},91:function(A,e,t){"use strict";t.r(e);var c=t(1),a=t.n(c),n=t(21),s=t.n(n),r=(t(45),t(46),t(4)),i=t(9),o=t(5),l=t(7),j=t(13),u=t(16),g=t(17),d=t.n(g),b="GET_ALL_COUNTRIES",O="SEARCH_COUNTRY",h="GET_COUNTRY_BY_ID",C="FILTER_STATUS",x="FILTER_ALFABETIC",m="FILTER_POPULATION",B="GET_ACTIVITIES",v="FILTRO_ACT",p=function(){return function(){var A=Object(u.a)(Object(j.a)().mark((function A(e){var t;return Object(j.a)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,d.a.get("http://localhost:3001/countries");case 3:t=A.sent,e({type:b,payload:t.data}),A.next=10;break;case 7:A.prev=7,A.t0=A.catch(0),console.log(A.t0);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(e){return A.apply(this,arguments)}}()},f=function(A){return function(){var e=Object(u.a)(Object(j.a)().mark((function e(t){var c;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("http://localhost:3001/countries/".concat(A));case 3:c=e.sent,t({type:h,payload:c.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(A){return e.apply(this,arguments)}}()},I=(t(73),t(0));var Q=function(A){var e=A.props;return Object(I.jsxs)("div",{className:"cardContainer",children:[Object(I.jsx)("h1",{children:e.name}),Object(I.jsx)("h2",{children:e.continents}),Object(I.jsx)("img",{className:"bandera",src:e.flags,alt:""})]})};t(75);function E(A){for(var e=A.paginitas,t=A.paisesPorPagina,a=A.paginacion,n=A.setPaginaActual,s=A.paginaActual,r=A.setPaisesPorPagina,o=Object(c.useState)(6),l=Object(i.a)(o,2),j=l[0],u=l[1],g=Object(c.useState)(6),d=Object(i.a)(g,1)[0],b=Object(c.useState)(0),O=Object(i.a)(b,2),h=O[0],C=O[1],x=[],m=0;m<=Math.ceil(e/t)-1;m++)x.push(m+1);return Object(c.useEffect)((function(){1===s?r(9):1!==s&&r(10)}),[s]),Object(I.jsx)("nav",{children:Object(I.jsxs)("ul",{className:"paginado",children:[Object(I.jsx)("button",{className:1===s?"boton__off":"boton__on",onClick:function(){1!==s&&n(s-1),(s-1)%d===0&&(u(j-d),C(h-d))},children:Object(I.jsx)("h1",{children:"\u2039"})}),x&&x.map((function(A){return A<j+1&&A>h?Object(I.jsx)("li",{className:"paginado__numeros",children:Object(I.jsx)("span",{className:s===A?"numeros":"num__off",onClick:function(){return a(A)},children:A})},A):null})),Object(I.jsx)("button",{className:s===x.length?"boton__off":"boton__on",onClick:function(){s!==x.length&&n(s+1),s+1>j&&(u(j+d),C(h+d))},children:"\u203a"})]})})}t(76);var N=function(A){var e=A.paginaActual,t=A.setPaginaActual,a=Object(o.c)((function(A){return A.countriesAll})),n=Object(o.b)(),s=Object(c.useState)(9),r=Object(i.a)(s,2),j=r[0],u=r[1],g=e*j,d=g-j,b=a.slice(d,g);return Object(c.useEffect)((function(){n(p())}),[n]),a.length?Object(I.jsxs)("div",{className:"espacio",children:[Object(I.jsx)("div",{children:Object(I.jsx)(E,{paisesPorPagina:j,paginitas:a.length,paginacion:function(A){t(A),u(1!==A?10:9)},setPaginaActual:t,paginaActual:e,setPaisesPorPagina:u})}),Object(I.jsx)("div",{className:"cards",children:b.map((function(A){return Object(I.jsx)(l.b,{className:"link__card",to:"/countries/"+A.id,children:Object(I.jsx)(Q,{props:A},A.id)},A.id)}))})]}):Object(I.jsx)("div",{children:"Loading ..."})};t(82),t(83);function D(){var A=Object(o.c)((function(A){return A.buscarCountry})),e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(o.b)();return Object(I.jsxs)("div",{className:"search__bar",children:[Object(I.jsx)("input",{type:"text",name:"name",placeholder:"Pais ",onChange:function(A){var e;n(A.target.value),a&&s((e=a,function(){var A=Object(u.a)(Object(j.a)().mark((function A(t){var c;return Object(j.a)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,d.a.get("http://localhost:3001/countries?name=".concat(e));case 2:c=A.sent,t({type:O,payload:c.data});case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()))},value:a,className:"input"}),Object(I.jsx)("div",{className:"lista",children:a&&A.slice(0,10).map((function(A){return Object(I.jsx)("div",{className:"div__nombre",children:Object(I.jsx)(l.b,{to:"/countries/".concat(A.id),className:"link",children:Object(I.jsxs)("p",{className:"link__text",children:[" ",A.name]})})},A.id)}))})]})}function P(){return Object(I.jsxs)("div",{className:"header",children:[Object(I.jsx)(l.b,{to:"/",children:Object(I.jsx)("img",{src:"data:image/png;base64,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",alt:"",className:"logo"})}),Object(I.jsx)("div",{children:Object(I.jsx)("nav",{children:Object(I.jsx)("ul",{className:"nav__ul",children:Object(I.jsx)("li",{children:Object(I.jsx)(l.b,{to:"/home",className:"link__head",children:Object(I.jsx)("h1",{children:"INICIO"})})})})})}),Object(I.jsx)("div",{children:Object(I.jsx)(D,{})})]})}t(25);function k(A){var e=A.setPaginaActual,t=Object(o.b)();function c(A){var c;e(1),t((c=A.target.value,{type:C,payload:c}))}return Object(I.jsxs)("div",{className:"contenedorFiltroCont",children:[Object(I.jsx)("h2",{children:"Continente: "}),Object(I.jsxs)("select",{className:"select__continente",onChange:function(A){return c(A)},children:[Object(I.jsx)("option",{value:"All",children:"Todos"}),Object(I.jsx)("option",{value:"Africa",children:"Africa"}),Object(I.jsx)("option",{value:"Americas",children:"Americas"}),Object(I.jsx)("option",{value:"Asia",children:"Asia"}),Object(I.jsx)("option",{value:"Europe",children:"Europa"}),Object(I.jsx)("option",{value:"Oceania",children:"Oceania"})]})]})}function w(A){var e=A.setPaginaActual,t=A.setOrder,c=Object(o.b)();return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("div",{className:"contenedor__general",children:[Object(I.jsxs)("div",{className:"contenedor__ordenamiento",children:[Object(I.jsx)("h2",{children:"Orden: "}),Object(I.jsxs)("select",{onChange:function(A){var a;A.preventDefault(),e(1),c((a=A.target.value,{type:x,payload:a})),t(A.target.value)},className:"select__az",children:[Object(I.jsx)("option",{}),Object(I.jsx)("option",{value:"asc",children:"A-Z"}),Object(I.jsx)("option",{value:"desc",children:"Z-A"})]})]}),Object(I.jsxs)("div",{className:"contenedor__pobla",children:[Object(I.jsx)("h2",{children:"Filtro por poblaci\xf3n: "}),Object(I.jsxs)("select",{onChange:function(A){var a;A.preventDefault(),e(1),c((a=A.target.value,{type:m,payload:a})),t(A.target.value)},className:"select__minmax",children:[Object(I.jsx)("option",{}),Object(I.jsx)("option",{value:"max",children:"Ascendente"}),Object(I.jsx)("option",{value:"min",children:"Descendente"})]})]})]})})}t(84);function M(A){var e=A.setPaginaActual,t=A.setOrder;return Object(I.jsxs)("div",{className:"nav",children:[Object(I.jsx)(l.b,{to:"/crear",className:"link",children:Object(I.jsx)("button",{className:"boton__crear",children:Object(I.jsx)("h1",{children:"Crear Actividad"})})}),Object(I.jsxs)("div",{className:"filtros",children:[Object(I.jsx)(k,{setPaginaActual:e}),Object(I.jsx)(w,{setPaginaActual:e,setOrder:t})]})]})}var G=t.p+"static/media/linkedin.793a7600.png";t(85);function y(){return Object(I.jsxs)("div",{className:"footer",children:[Object(I.jsx)("div",{className:"footer__creado",children:"Creado por: Andr\xe9s Romero"}),Object(I.jsxs)("div",{className:"contenedor_iconos",children:[Object(I.jsx)("a",{href:"https://www.linkedin.com/in/andr%C3%A9s-romero-b4a7b51b4/",children:Object(I.jsx)("img",{src:G,alt:"",className:"footer__ig"})}),Object(I.jsxs)("a",{href:"https://www.instagram.com/andresrh29/",children:[Object(I.jsx)("img",{src:"data:image/png;base64,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",alt:"",className:"footer__linked"})," "]})]})]})}t(86);function S(A){var e=A.setPaginaActual,t=Object(o.c)((function(A){return A.getActivities})),a=Object(o.b)();function n(A){var t;e(1),A.target.checked?a((t=A.target.value,console.log(t),{type:v,payload:t})):A.target.checked||a(p())}return t.sort((function(A,e){return A.name>e.name?1:e.name>A.name?-1:0})),Object(c.useEffect)((function(){a(function(){var A=Object(u.a)(Object(j.a)().mark((function A(e){var t;return Object(j.a)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,d.a.get("http://localhost:3001/activities");case 3:t=A.sent,console.log(t),e({type:B,payload:t.data}),A.next=11;break;case 8:A.prev=8,A.t0=A.catch(0),console.log(A.t0);case 11:case"end":return A.stop()}}),A,null,[[0,8]])})));return function(e){return A.apply(this,arguments)}}())}),[a]),t?Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("div",{className:"filtro__actividad",children:[Object(I.jsx)("h1",{children:"Filtro por actividad:"}),t.map((function(A){return Object(I.jsxs)("form",{children:[Object(I.jsx)("input",{className:"check",type:"checkbox",name:A.name,value:A.name,onChange:function(A){return n(A)}})," ",A.name,Object(I.jsx)("br",{})]},A.id)}))]})}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("h1",{children:"Encuentra tu actividad:"}),Object(I.jsx)("h2",{children:"No hay actividades"})]})}var J=function(){var A=Object(c.useState)(1),e=Object(i.a)(A,2),t=e[0],a=e[1],n=Object(c.useState)(""),s=Object(i.a)(n,2)[1];return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(P,{}),Object(I.jsxs)("div",{children:[Object(I.jsx)("div",{children:Object(I.jsx)(M,{setPaginaActual:a,setOrder:s})}),Object(I.jsxs)("div",{className:"home",children:[Object(I.jsx)("div",{className:"activities__home",children:Object(I.jsx)(S,{setPaginaActual:a})}),Object(I.jsx)("div",{className:"div__cards",children:Object(I.jsx)(N,{paginaActual:t,setPaginaActual:a})})]})]}),Object(I.jsx)(y,{})]})};t(87);var z=function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(P,{}),Object(I.jsxs)("div",{className:"landingContainer",children:[Object(I.jsxs)("div",{className:"info",children:[Object(I.jsx)("h1",{className:"h1",children:"E-WORLD"}),Object(I.jsx)("p",{className:"p",children:"\xa1Bienvenido a E-World!"}),Object(I.jsx)("p",{className:"p",children:"Tu pagina de confianza, donde podras consultar todo tipo de informaci\xf3n respecto a tu pa\xeds de residencia y ademas ayudar a quienes visiten la pagina a conocer diferentes tipos de actividades turisticas para realizar durante su estad\xeda en la nacion."}),Object(I.jsx)("p",{className:"p",children:"\xa1Gracias por formar parte de la familia E-World!"})]}),Object(I.jsx)("div",{className:"contenedor",children:Object(I.jsxs)(l.b,{className:"link",to:"/home",children:[Object(I.jsx)("button",{className:"boton",children:Object(I.jsx)("h1",{className:"go",children:"Go!"})})," "]})})]}),Object(I.jsx)("footer",{className:"footers",children:Object(I.jsx)(y,{})})]})},T=t(14),Y=t(2);t(88);function L(A){var e=A.name,t=A.countries,c=A.duracion,a=A.dificultad,n=A.temporada,s={};return e||(s.name="Se requiere un nombre"),e.length>15&&""!==e&&(s.name="Debe tener no mas de 15 caracteres"),e.length<2&&""!==e&&(s.name="Debe tener almenos 2 caracteres"),""===n&&(s.temporada="Se requiere una temporada"),""===c&&(s.duracion="Se requiere un tiempo de duraci\xf3n"),""===a&&(s.dificultad="Se requiere una dificultad"),t.length<1&&(s.countries="debes seleccionar uno"),s}function X(){var A=Object(c.useState)({}),e=Object(i.a)(A,2),t=e[0],a=e[1],n=Object(o.c)((function(A){return A.countriesAll})),s=Object(c.useState)({countries:[],name:"",duracion:"",dificultad:"",temporada:""}),r=Object(i.a)(s,2),l=r[0],g=r[1];n.sort((function(A,e){return A.name>e.name?1:e.name>A.name?-1:0}));var b=Object(o.b)();Object(c.useEffect)((function(){b(p())}),[b,t]);function O(A){var e=A.target.value,t=l.countries.filter((function(A){return A!==e}));g(Object(Y.a)(Object(Y.a)({},l),{},{countries:t})),a(L(Object(Y.a)(Object(Y.a)({},l),{},Object(T.a)({},A.target.name,A.target.value))))}return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(P,{}),Object(I.jsx)("div",{className:"contenedor__total",children:Object(I.jsxs)("form",{onSubmit:function(A){A.preventDefault(),g({countries:[],name:"",duracion:"",dificultad:"",temporada:""})},className:"formulario",children:[Object(I.jsx)("h1",{className:"creacion",children:"CREACION DE ACTIVIDAD"}),Object(I.jsxs)("label",{className:"nombre",children:["Campos con ","(*)"," son obligatorios"]}),Object(I.jsxs)("label",{className:"nombre",children:["(*)","Nombre:"]}),Object(I.jsx)("input",{type:"text",name:"name",value:l.name,onChange:function(A){g(Object(Y.a)(Object(Y.a)({},l),{},Object(T.a)({},A.target.name,A.target.value))),a(L(Object(Y.a)(Object(Y.a)({},l),{},Object(T.a)({},A.target.name,A.target.value))))},placeholder:"Nombre",className:t.name?"input__name__error":"input__name"}),t.name&&Object(I.jsx)("p",{className:"danger",children:t.name}),Object(I.jsxs)("label",{className:"duracion",children:["(*)","Duracion:"]}),Object(I.jsxs)("select",{name:"duracion",onChange:function(A){g(Object(Y.a)(Object(Y.a)({},l),{},{duracion:A.target.value})),a(L(Object(Y.a)(Object(Y.a)({},l),{},Object(T.a)({},A.target.name,A.target.value))))},className:t.duracion?"input__name__error":"input__name",children:[Object(I.jsx)("option",{}),Object(I.jsx)("option",{value:"1",children:"1 Hora"}),Object(I.jsx)("option",{value:"2",children:"2 Horas"}),Object(I.jsx)("option",{value:"3",children:"3 Horas"}),Object(I.jsx)("option",{value:"4",children:"4 Horas"}),Object(I.jsx)("option",{value:"5",children:"5 Horas"}),Object(I.jsx)("option",{value:"6",children:"6 Horas"}),Object(I.jsx)("option",{value:"7",children:"7 Horas"}),Object(I.jsx)("option",{value:"8",children:"8 Horas"}),Object(I.jsx)("option",{value:"9",children:"9 Horas"}),Object(I.jsx)("option",{value:"10",children:"10 Horas"}),Object(I.jsx)("option",{value:"11",children:"11 Horas"}),Object(I.jsx)("option",{value:"12",children:"12 Horas"})]}),t.duracion&&Object(I.jsx)("p",{className:"danger",children:t.duracion}),Object(I.jsxs)("label",{className:"dificultad",children:["(*)","Dificultad:"]}),Object(I.jsx)("input",{type:"range",name:"dificultad",id:"dificultad",min:"1",max:"5",step:"1",onChange:function(A){g(Object(Y.a)(Object(Y.a)({},l),{},{dificultad:A.target.value})),a(L(Object(Y.a)(Object(Y.a)({},l),{},Object(T.a)({},A.target.name,A.target.value))))}}),t.dificultad&&Object(I.jsx)("p",{className:"danger",children:t.dificultad}),Object(I.jsxs)("label",{className:"temporada",children:["(*)","Temporada"]}),Object(I.jsxs)("select",{name:"temporada",onChange:function(A){g(Object(Y.a)(Object(Y.a)({},l),{},{temporada:A.target.value})),a(L(Object(Y.a)(Object(Y.a)({},l),{},Object(T.a)({},A.target.name,A.target.value))))},className:t.temporada?"input__name__error":"input__name",children:[Object(I.jsx)("option",{}),Object(I.jsx)("option",{value:"Verano",children:"Verano"}),Object(I.jsx)("option",{value:"Oto\xf1o",children:"Oto\xf1o"}),Object(I.jsx)("option",{value:"Invierno",children:"Invierno"}),Object(I.jsx)("option",{value:"Primavera",children:"Primavera"})]}),t.temporada&&Object(I.jsx)("p",{className:"danger",children:t.temporada}),Object(I.jsxs)("label",{className:"pais",children:["(*)","Codigo de pais:"]}),Object(I.jsxs)("select",{name:"countries",onChange:function(A){return function(A){var e=l.countries;e.push(A.target.value),g(Object(Y.a)(Object(Y.a)({},l),{},{countries:e})),a(L(Object(Y.a)(Object(Y.a)({},l),{},Object(T.a)({},A.target.name,A.target.value))))}(A)},value:"",className:t.countries?"input__name__error":"input__name",children:[Object(I.jsx)("option",{value:"",children:"Selecciona uno:"}),n.map((function(A){return Object(I.jsx)("option",{value:A.id,children:A.name},A.id)}))]}),t.countries&&Object(I.jsx)("p",{className:"danger",children:t.countries}),Object(I.jsxs)("div",{className:"caja__paises",children:[Object(I.jsx)("h2",{children:"Seleccionados:"}),Object(I.jsx)("div",{children:l.countries?n.map((function(A){return l.countries.includes(A.id.toString())?Object(I.jsxs)("div",{className:"pais__seleccionado",children:[Object(I.jsx)("button",{value:A.id,name:"countries",onClick:O,className:"boton_delete",children:"\xd7"}),Object(I.jsx)("p",{className:"p_nombre",children:A.name})]},A.id):null})):[]})]}),Object(I.jsx)("button",{className:t.name||t.temporada||t.dificultad||t.duracion||t.countries?"deshabilitado":"boton__creacion",onClick:function(){return b((A=l,function(){var e=Object(u.a)(Object(j.a)().mark((function e(t){var c;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.post("http://localhost:3001/activities",A);case 3:return c=e.sent,e.abrupt("return",c);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(A){return e.apply(this,arguments)}}()));var A},children:Object(I.jsx)("h1",{children:"Crear"})})]})}),Object(I.jsx)(y,{})]})}t(89);function H(A){return Object(I.jsx)("div",{children:A.activities&&A.activities.length?A.activities.map((function(A){return Object(I.jsxs)("div",{className:"actividades",children:[Object(I.jsxs)("h1",{children:[" ",A.name," "]}),Object(I.jsxs)("h3",{children:[" Duracion: ",A.duracion," "]}),Object(I.jsxs)("h3",{children:["Temporada: ",A.temporada," "]}),Object(I.jsxs)("h3",{children:[" Dificultad: ",A.dificultad," "]})]},A.id)})):Object(I.jsx)("div",{className:"no__hay",children:" No hay actividades"})})}t(90);function Z(){var A=Object(o.c)((function(A){return A.countryId})),e=A.name,t=A.flags,a=A.continents,n=A.capital,s=A.area,i=A.population,l=A.subregion,j=A.activities,u=Object(r.f)().id,g=Object(o.b)();return console.log(u),Object(c.useEffect)((function(){return g(f(u)),function(){g(f(""))}}),[g,u]),u?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(P,{}),Object(I.jsx)("div",{className:"contenedor__detalle",children:Object(I.jsxs)("div",{className:"detalle",children:[Object(I.jsxs)("h1",{children:["Codigo: ",u]}),Object(I.jsxs)("h1",{children:["Continente: ",a]}),Object(I.jsx)("img",{src:t,alt:"",className:"imagen__detalle"}),Object(I.jsxs)("h1",{children:["Nombre: ",e]}),Object(I.jsxs)("h2",{children:["Capital: ",n]}),Object(I.jsxs)("h3",{children:["Subregion: ",l]}),Object(I.jsxs)("h3",{children:["Area: ",s," KM"]}),Object(I.jsxs)("h3",{children:["Poblaci\xf3n: ",i]}),Object(I.jsx)("h1",{children:" Actividades:"}),Object(I.jsx)("div",{className:"div__act",children:Object(I.jsx)(H,{activities:j})})]})}),Object(I.jsx)(y,{})]}):Object(I.jsx)("div",{children:"Loading ..."})}var F=function(){return Object(I.jsx)("div",{children:Object(I.jsxs)(r.c,{children:[Object(I.jsx)(r.a,{exact:!0,path:"/",children:Object(I.jsx)(z,{})}),Object(I.jsx)(r.a,{exact:!0,path:"/home",children:Object(I.jsx)(J,{})}),Object(I.jsx)(r.a,{path:"/countries/:id",children:Object(I.jsx)(Z,{})}),Object(I.jsx)(r.a,{path:"/crear",children:Object(I.jsx)(X,{})})]})})},U=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,92)).then((function(e){var t=e.getCLS,c=e.getFID,a=e.getFCP,n=e.getLCP,s=e.getTTFB;t(A),c(A),a(A),n(A),s(A)}))},W={countriesAll:[],buscarCountry:[],countryId:[],allCountries:[],getActivities:[],activitiesGet:[]};var K=t(22),R=t(39),V=t(40),q=Object(K.createStore)((function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(Y.a)(Object(Y.a)({},A),{},{countriesAll:e.payload,allCountries:e.payload});case h:return Object(Y.a)(Object(Y.a)({},A),{},{countryId:e.payload});case O:return Object(Y.a)(Object(Y.a)({},A),{},{buscarCountry:e.payload});case C:var t=A.allCountries,c="All"===e.payload?A.allCountries:t.filter((function(A){return A.continents===e.payload}));return Object(Y.a)(Object(Y.a)({},A),{},{countriesAll:c});case x:var a=A.countriesAll,n="asc"===e.payload?a.sort((function(A,e){return A.name>e.name?1:e.name>A.name?-1:0})):"desc"===e.payload?a.sort((function(A,e){return A.name>e.name?-1:e.name>A.name?1:0})):A.allCountries;return Object(Y.a)(Object(Y.a)({},A),{},{countriesAll:n});case m:var s="max"===e.payload?A.countriesAll.sort((function(A,e){return A.population>e.population?1:e.population>A.population?-1:0})):"min"===e.payload?A.countriesAll.sort((function(A,e){return A.population>e.population?-1:e.population>A.population?1:0})):A.allCountries;return Object(Y.a)(Object(Y.a)({},A),{},{countriesAll:s});case B:return Object(Y.a)(Object(Y.a)({},A),{},{getActivities:e.payload,activitiesGet:e.payload});case v:var r=A.allCountries,i=r.filter((function(A){return A.activities.some((function(A){return A.name===e.payload}))}));return console.log("todos paises: "+r),Object(Y.a)(Object(Y.a)({},A),{},{countriesAll:""!==e.payload?i:A.allCountries});default:return A}}),Object(R.composeWithDevTools)(Object(K.applyMiddleware)(V.a))),_=q;s.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(o.a,{store:_,children:Object(I.jsx)(l.a,{children:Object(I.jsx)(F,{})})})}),document.getElementById("root")),U()}},[[91,1,2]]]);
//# sourceMappingURL=main.e83d1116.chunk.js.map