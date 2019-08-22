(window.webpackJsonpchat=window.webpackJsonpchat||[]).push([[0],{60:function(e,t,n){e.exports=n(74)},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),i=n(17),s=(n(70),n(30)),u=n(16),l={appState:!0,messages:[],userName:""},m=Object(s.b)({appState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.appState,t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;return"SET_APP_STATE"===a?n:e},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.messages,t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;return"GET_NEW_MESSAGES"===a?[].concat(Object(u.a)(e),Object(u.a)(n)):"SET_APP_STATE"===a&&"online"===n?l.messages:"LOAD_MESSAGES_HISTORY"===a?n:e},userName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.userName,t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;return"SET_USERNAME"===a?n:e}}),f=Object(s.c)(m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),d=n(6),p=n(9),b=(n(71),function(e){return"string"===typeof e?e.replace(/^\s\s*/gm,"").replace(/\s\s*$/gm,"").replace(/[^\S\n\r]+/gm," "):e}),g=(n(72),function(e){var t=e.messages,n=e.userName,c=e.firstUnreadMessageId,o=e.updateInterlocutor,i=r.a.createRef(),s=r.a.createRef(),u=new Date,l=Object(a.useRef)(!0);Object(a.useEffect)(function(){!c&&l&&i.current.scrollTo(0,i.current.scrollHeight)},[c,i,t]),Object(a.useEffect)(function(){var e=i.current.scrollHeight-i.current.scrollTop===i.current.clientHeight;e||(i.current.scrollTo(0,i.current.scrollHeight-i.current.clientHeight),l.current=e)},[i]),Object(a.useEffect)(function(){c&&s.current&&i.current.scrollTo(0,s.current.offsetTop-100)},[c,s,i]);var m=function(e){var t=e.target.textContent;t!==n&&o(t)};return r.a.createElement("ul",{ref:i,className:"messages-list"},t.map(function(e){var t=function(e){var t=new Date;return e.getDate()===t.getDate()?"today":e.getDate()===t.getDate()-1?"yesterday":e.getDate()}(new Date(e.time));return u!==t?(u=t,r.a.createElement("li",{key:e.id,className:"message-date"},t)):r.a.createElement(a.Fragment,{key:e.id},e.id===c&&r.a.createElement("li",{ref:s,className:"messages-list__new-message"}," new messages "),r.a.createElement("li",{className:"messages-list__item"},r.a.createElement("p",{className:"message-description"},r.a.createElement("span",{className:"message-author ".concat(n===e.from?"message-author--highlighted":""),onClick:m},e.from),r.a.createElement("span",{className:"message-time"},function(e){var t=e.getHours();t<10&&(t="0".concat(t));var n=e.getMinutes();return n<10&&(n="0".concat(n)),"".concat(t,":").concat(n)}(new Date(e.time)))),r.a.createElement("p",{className:"message-text"},e.message)))}))}),E=n(108),O=n(115),y=n(106),v=n(119),S=(n(73),Object(y.a)(function(e){return Object(v.a)({container:Object(p.a)({display:"flex",alignItems:"center",paddingTop:30,paddingBottom:30,justifyContent:"center",boxSizing:"border-box",width:"100%"},e.breakpoints.down("md"),{flexDirection:"column"}),button:{margin:e.spacing(1),backgroundColor:"#472D74"},input:Object(p.a)({width:"80%"},e.breakpoints.down("md"),{width:"90%"})})})),j=function(e){var t=e.onSubmit,n=e.userName,c=e.interlocutor,o=e.onClearInterlocutor,i=S(),s=Object(a.useRef)(null),u=Object(a.useRef)(null),l=Object(a.useCallback)(function(e){13!==e.keyCode||e.shiftKey||(e.preventDefault(),s.current.dispatchEvent(new Event("submit")))},[]);return r.a.createElement("div",{className:"submit-form__wrapper"},c&&r.a.createElement("span",{className:"interlocutor",onClick:o},c,", "),r.a.createElement("form",{name:"form",ref:s,onSubmit:t,className:i.container},r.a.createElement(E.a,{disabled:!n,type:"text",ref:u,multiline:!0,name:"message",placeholder:"".concat(n?"Type your message...":"Login to type your message"),rowsMax:4,className:i.input,onKeyDown:l,autoFocus:!0}),r.a.createElement(O.a,{disabled:!n,type:"submit",variant:"contained",className:i.button,color:"secondary"},"Submit")))},w=n(114),h=n(117),N=n(112),k=n(111),D=n(110),_=Object(y.a)(function(e){return Object(v.a)({button:Object(p.a)({right:2,marginTop:2,position:"absolute",backgroundColor:"#472D74"},e.breakpoints.down("md"),{wordWrap:"break-word",width:"15%",fontSize:11,margin:0})})});function C(e){var t=e.updateData,n=e.userName,c=_(),o=r.a.useState(!1),i=Object(d.a)(o,2),s=i[0],u=i[1],l=Object(a.useRef)(null),m=function(){u(!1)},f=Object(a.useCallback)(function(){t(document.querySelector("#name").value),u(!1)},[t]),p=Object(a.useCallback)(function(e){13===e.keyCode&&(e.preventDefault(),f())},[f]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{variant:"contained",color:"secondary",onClick:function(){u(!0)},className:c.button},"".concat(n?"Change nickname":"Enter nickname")),r.a.createElement(h.a,{open:s,onClose:m,"aria-labelledby":"form-dialog-title"},r.a.createElement(D.a,{id:"form-dialog-title"},"Type your name"),r.a.createElement(k.a,null,r.a.createElement(w.a,{autoFocus:!0,margin:"dense",id:"name",type:"text",fullWidth:!0,autoComplete:"off",ref:l,onKeyDown:p})),r.a.createElement(N.a,null,r.a.createElement(O.a,{onClick:f,color:"primary"},"OK"),r.a.createElement(O.a,{onClick:m,color:"primary"},"Cancel"))))}var T=n(113),I=Object(y.a)(function(e){return Object(v.a)(Object(p.a)({dialog:{width:"25%",marginRight:"auto",marginLeft:"auto"}},e.breakpoints.down("md"),{wordWrap:"break-word",width:"15%",fontSize:11,margin:0}))});function P(e){var t=e.updateShowDisconnectionDialog,n=I(),a=r.a.useState(!0),c=Object(d.a)(a,2),o=c[0],i=c[1],s=function(){i(!1),t(!1)};return r.a.createElement("div",null,r.a.createElement(h.a,{open:o,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),s())},className:n.dialog},r.a.createElement(k.a,null,r.a.createElement(T.a,{id:"alert-dialog-description"},"Sorry, there are some problems with the connection. Try it later :)")),r.a.createElement(N.a,null,r.a.createElement(O.a,{onClick:s,color:"primary"},"OK"))))}var A=function(e){return e.messages},M=function(e){return e.userName},R=function(e){return e.appState},x=function(){var e=Object(i.b)(),t=Object(i.c)(A),n=Object(a.useCallback)(function(t){return e(function(e){return{type:"LOAD_MESSAGES_HISTORY",payload:e}}(t))},[e]);return{addMessages:Object(a.useCallback)(function(t){return e(function(e){return{type:"GET_NEW_MESSAGES",payload:e}}(t))},[e]),initMessages:n,messages:t}},L=function(){var e=Object(i.b)(),t=Object(i.c)(M);return{setUserName:Object(a.useCallback)(function(t){return e(function(e){return{type:"SET_USERNAME",payload:e}}(t))},[e]),userName:t}},U=function(){var e=Object(i.b)(),t=Object(i.c)(R);return{setState:Object(a.useCallback)(function(t){return e(function(e){return{type:"SET_APP_STATE",payload:e}}(t))},[e]),appState:t}};function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var F=function(e,t){try{return JSON.parse(localStorage.getItem(e))||t}catch(n){return t}},G=function(e,t){var n=F(e,{});n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach(function(t){Object(p.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n,{},t),localStorage.setItem(e,JSON.stringify(n))},J=function(){var e=x(),t=e.addMessages,n=e.messages,c=e.initMessages,o=L(),i=o.setUserName,s=o.userName,u=U(),l=u.setState,m=u.appState,f=Object(a.useState)(!1),p=Object(d.a)(f,2),E=p[0],O=p[1],y=Object(a.useState)(null),v=Object(d.a)(y,2),S=v[0],w=v[1],h=Object(a.useRef)(null),N=Object(a.useState)(""),k=Object(d.a)(N,2),D=k[0],_=k[1],T=Object(a.useCallback)(function(e){return i(e)},[i]),I=Object(a.useCallback)(function(){return _(null)},[]),A=Object(a.useCallback)(function(e){e.userName&&i(e.userName)},[i]);Object(a.useEffect)(function(){var e=F("appstate",{});A(e)},[A]);var M=Object(a.useCallback)(function(){G("appstate",{userName:s})},[s]);Object(a.useEffect)(function(){return window.addEventListener("beforeunload",M),function(){return window.removeEventListener("beforeunload",M)}},[M]),Object(a.useEffect)(function(){var e=function e(){h.current=new WebSocket("wss://wssproxy.herokuapp.com"),h.current.onopen=function(){c([]),l(!0),O(!1)},h.current.onclose=function(){navigator.onLine&&e(),l(!1)}},t=function(){!function t(){h.current.onclose=Function.prototype,h.current.close(),e();var n=setInterval(function(){1===h.current.readyState&&clearInterval(n),2!==h.current.readyState&&3!==h.current.readyState||(clearInterval(n),t())},3e3)}(),l(!1),O(!0)};return e(),window.addEventListener("offline",t),function(){window.removeEventListener("offline",t)}},[l]),Object(a.useEffect)(function(){return h.current.onmessage=function(e){var a=JSON.parse(e.data);a.forEach(function(e){return b(e)}),a.sort(function(e,t){return e.time-t.time}),0!==n.length?(document.hidden&&(!function(){if("granted"===Notification.permission){var e=new Notification("\u0423 \u0432\u0430\u0441 \u043d\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",{tag:"message"});setTimeout(e.close.bind(e),4e3)}else"denied"!==Notification.permission&&Notification.requestPermission()}(),S||w(a[0].id)),t(a)):c(a)},function(){h.current.onmessage=null}},[S,h.current,n]),Object(a.useEffect)(function(){document.addEventListener("visibilitychange",function(){document.hidden&&S&&w(null)})},[S]);var R=Object(a.useCallback)(function(e){e.preventDefault();var t=new FormData(e.target),n=b(t.get("message")),a={from:s,message:n};D&&(a.message=D.concat(", ",a.message)),m?h.current.send(JSON.stringify(a)):O(!0),document.querySelector("textarea").value=""},[D,m,s]);return r.a.createElement(r.a.Fragment,null,E&&r.a.createElement(P,{updateShowDisconnectionDialog:function(e){return O(e)}}),r.a.createElement(C,{updateData:T,userName:s}),r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",{className:"wrapper__title"},"".concat("".concat(s,m?", welcome to the chat!":"! Unfortunately, you are offline!"))),r.a.createElement(g,{userName:s,messages:n,firstUnreadMessageId:S,updateInterlocutor:_}),r.a.createElement(j,{interlocutor:D,online:m,onClearInterlocutor:I,onSubmit:R,userName:s})))};o.a.render(r.a.createElement(i.a,{store:f},r.a.createElement(J,null)),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.85c28092.chunk.js.map