(this.webpackJsonpassignment2=this.webpackJsonpassignment2||[]).push([[0],{24:function(e,t,a){e.exports=a(40)},29:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(10),l=a.n(c),o=(a(29),a(20)),i=a(21),s=a(23),u=a(22),m=a(9),p=a(11),d=a(7),b=a(3),E=a.n(b),j=a(41),g=a(42),f=a(43),v=a(44),h=a(45),O=a(46),y=a(47),k=function(e){var t=Object(n.useState)(e.noteObject.text),a=Object(d.a)(t,2),c=a[0],l=a[1],o=e.noteObject.url,i=e.noteObject.title,s=e.noteObject.type;return r.a.createElement(j.a,{sm:"6"},r.a.createElement(g.a,{body:!0},r.a.createElement(f.a,null,r.a.createElement("b",null,s.includes("text")?i:function(e){try{new URL(e)}catch(t){return!1}return!0}(o)?function(e){return""!==e}(e.noteObject.text)?r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"url"},e.noteObject.text.replace('"',"")):r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"url"},i.replace('"',"")):r.a.createElement("p",{style:{color:"red"}},"ALERT: Invalid Link => ",o))),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(O.a,null,r.a.createElement(y.a,{type:"textarea",name:"text",id:"notes",placeholder:"Enter your notes",value:c,onChange:function(e){return l(e.target.value)},form:!0,"aria-label":"notes"}))))))},N=a(48),x=a(60),w=a(49),T=a(50),C=a(51),S=a(52),L=a(53),P=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=a[0],l=a[1],o=function(){return l(!c)},i=Object(n.useState)(""),s=Object(d.a)(i,2),u=s[0],m=s[1],p=Object(n.useState)(""),b=Object(d.a)(p,2),E=b[0],j=b[1],g=Object(n.useState)(""),f=Object(d.a)(g,2),v=f[0],k=f[1],P=Object(n.useState)(""),q=Object(d.a)(P,2),R=q[0],U=q[1],D=function(){"has-success"===R&&e.setNewNoteData(u,E,e.currentProject,v)};return r.a.createElement("div",{"aria-label":"newNoteForm"},r.a.createElement(N.a,{className:"primary",onClick:o},"New Note"),r.a.createElement(x.a,{isOpen:c,toggle:o},r.a.createElement(w.a,{toggle:o},"New Note Details:"),r.a.createElement(T.a,null,r.a.createElement(h.a,{onSubmit:D},r.a.createElement(O.a,{tag:"fieldset"},r.a.createElement(C.a,null,"What type of a note is it?"),r.a.createElement(O.a,{check:!0},r.a.createElement(C.a,{for:"noteTypeText",check:!0},r.a.createElement(y.a,{type:"radio",id:"noteTypeText",name:"noteType",onClick:function(){return m("text")}}),"Text")),r.a.createElement(O.a,{check:!0},r.a.createElement(C.a,{for:"noteTypeLink",check:!0},r.a.createElement(y.a,{type:"radio",id:"noteTypeLink",name:"noteType",onClick:function(){return m("link")}}),"Link"))),r.a.createElement(O.a,null,r.a.createElement(C.a,{for:"noteTitle"},"Note Title:"),r.a.createElement(y.a,{type:"text",name:"noteTitle",id:"noteTitle",onChange:function(e){var t;j(e.target.value),t=e.target.value,U(t===""?"has-danger":"has-success")},valid:"has-success"===R,invalid:"has-danger"===R}),r.a.createElement(S.a,{valid:!0},"Great!"),r.a.createElement(S.a,{invalid:!0},"Please provide a title!")),r.a.createElement(O.a,null,r.a.createElement(C.a,{for:"noteURL"},"URL (for link note)"),r.a.createElement(y.a,{type:"text",name:"noteURL",id:"noteURL",onChange:function(e){return k(e.target.value)}})))),r.a.createElement(L.a,null,r.a.createElement(N.a,{type:"submit",color:"primary",onClick:function(){o(),D()}},"Create"),r.a.createElement(N.a,{color:"secondary",onClick:o},"Cancel"))))},q=a(54),R=a(55),U=a(56),D=a(57),A=a(58),I=a(59),J=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=a[0],l=a[1],o=function(){return l(!c)},i=Object(n.useState)(""),s=Object(d.a)(i,2),u=s[0],m=s[1],p=Object(n.useState)(""),b=Object(d.a)(p,2),E=b[0],j=b[1];return r.a.createElement("div",{"aria-label":"newProjectForm"},r.a.createElement(N.a,{className:"primary",onClick:o},"New Project"),r.a.createElement(x.a,{isOpen:c,toggle:o},r.a.createElement(w.a,{toggle:o},"New Project Details:"),r.a.createElement(T.a,null,r.a.createElement(h.a,null,r.a.createElement(O.a,null,r.a.createElement(C.a,{for:"projectName"},"Project Name:"),r.a.createElement(y.a,{type:"text",name:"projectName",id:"projectName",onChange:function(t){m(t.target.value),function(t){e.projectNames.includes(t)?j("has-danger"):j("has-success")}(t.target.value)},valid:"has-success"===E,invalid:"has-danger"===E}),r.a.createElement(S.a,{valid:!0},"That's a good project name!"),r.a.createElement(S.a,{invalid:!0},"Uh oh! This project name is taken, sorry!")))),r.a.createElement(L.a,null,r.a.createElement(N.a,{type:"submit",color:"primary",onClick:function(){o(),"has-success"===E&&e.setNewProjectData(u),j(""),m("")}},"Create"),r.a.createElement(N.a,{color:"secondary",onClick:o},"Cancel"))))},W="text",B="link",F=Object(m.a)({"Learn React":[{type:W,title:"Create a new project",text:"cd to the project directory\nnpx create-react-app project-name\ncd project-name\nnpm start"},{type:B,url:"https://reactjs.org/docs/getting-started.html",text:"React docs"},{type:B,url:"https://reactstrap.github.io/",text:"Reactstrap docs"}]},"no project",[{type:W,title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Justo nec ultrices dui sapien eget mi proin sed libero. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Nisi quis eleifend quam adipiscing. Sit amet tellus cras adipiscing enim eu. Tincidunt tortor aliquam nulla facilisi cras fermentum. Orci phasellus egestas tellus rutrum. Tortor dignissim convallis aenean et. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Purus semper eget duis at tellus. Ut consequat semper viverra nam libero justo laoreet sit amet. Sed enim ut sem viverra aliquet eget. Amet volutpat consequat mauris nunc congue nisi. Aliquet nibh praesent tristique magna."},{type:B,url:"https://loremipsum.io/generator/",text:"Lorem Ipsum generator"}]),_=function(){var e=Object(n.useState)(F),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("0"),o=Object(d.a)(l,2),i=o[0],s=o[1],u=Object(n.useState)(Object.keys(F)),b=Object(d.a)(u,2),j=b[0],g=b[1];return r.a.createElement("div",{"aria-label":"myTabPane"},r.a.createElement("main",null,r.a.createElement(q.a,{tabs:!0},j.map((function(e,t){return r.a.createElement(R.a,{key:t,className:"font-weight-bold"},r.a.createElement(U.a,{className:E()({active:i===String(j.indexOf(e))}),onClick:function(){var t;t=String(j.indexOf(e)),i!==t&&s(t)}},e))}))),r.a.createElement(D.a,{activeTab:i},r.a.createElement(A.a,{tabId:String(i)},r.a.createElement(I.a,null,a[j[i]].map((function(e,t){return r.a.createElement(k,{key:t,noteObject:e})})))),r.a.createElement(P,{currentProject:j[i],setNewNoteData:function(e,t,n,r){var l={type:e,title:t,text:"",url:r};c(Object(p.a)(Object(p.a)({},a),{},Object(m.a)({},n,a[n].concat(l))))}}),r.a.createElement(J,{setNewProjectData:function(e){c(Object(p.a)(Object(p.a)({},a),{},Object(m.a)({},e,[]))),g(j.concat(e))},projectNames:j}))))},G=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container","aria-label":"noteApp"},r.a.createElement(_,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(39);l.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.cddc6654.chunk.js.map