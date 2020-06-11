(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/logo.f5b9b160.png"},37:function(e,t,a){e.exports=a(68)},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),o=a(9),s=a(13),i=a(32),u=a.n(i),m=Object(n.createContext)(),p=Object(n.createContext)(),d=function(e){var t=e.iconHome,a=e.iconSkills,c=e.iconProjects,l=e.iconAbout,s=e.iconContact,i=e.iconGithub,d=e.iconInfo,E=e.iconLogout,f=Object(n.useContext)(m),b=Object(n.useContext)(p),g=f.isAuthenticated,v=f.logout,j=b.clearProjects,h=r.a.createElement("a",{onClick:function(){v(),j()},href:"#!"},r.a.createElement("span",{className:"iconify","data-icon":E,"data-inline":"false"}),r.a.createElement("b",null,"Logout"));return r.a.createElement("div",{className:"navbar"},r.a.createElement(o.b,{to:"/",alt:"logo",className:"logo"},r.a.createElement("img",{src:u.a,className:"app-logo",alt:"AJ"}),r.a.createElement("div",{className:"border-bottom"})),r.a.createElement("nav",null,r.a.createElement(o.b,{exact:!0,to:"/",activeClassName:"active"},r.a.createElement("span",{className:"iconify home","data-icon":t,"data-inline":"false"}),r.a.createElement("b",null,"Home")),r.a.createElement(o.b,{to:"/work",activeClassName:"active"},r.a.createElement("span",{className:"iconify projects","data-icon":c,"data-inline":"false"}),r.a.createElement("b",null,"Work")),r.a.createElement(o.b,{to:"/skills",activeClassName:"active"},r.a.createElement("span",{className:"iconify skills","data-icon":a,"data-inline":"false"}),r.a.createElement("b",null,"Skills")),r.a.createElement(o.b,{to:"/contact",activeClassName:"active"},r.a.createElement("span",{className:"iconify mail","data-icon":s,"data-inline":"false"}),r.a.createElement("b",null,"Contact")),r.a.createElement(o.b,{to:"/about",activeClassName:"active"},r.a.createElement("span",{className:"iconify about","data-icon":l,"data-inline":"false"}),r.a.createElement("b",null,"About")),g?h:""),r.a.createElement("div",{className:"social"},r.a.createElement("a",{href:"https://github.com/alexandrujeman",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"iconify github","data-icon":i,"data-inline":"false"})),r.a.createElement(o.b,{to:"/info",alt:"logo"},r.a.createElement("span",{className:"iconify siteinfo","data-icon":d,"data-inline":"false"}))))};d.defaultProps={iconGithub:"il:github",iconAbout:"fa-solid:user-circle",iconHome:"mdi:home",iconProjects:"bx:bx-code-alt",iconContact:"entypo:mail",iconSkills:"fa-solid:cogs",iconInfo:"uil:info-circle",iconLogout:"bx:bx-lock"};var E=d,f=function(){return r.a.createElement("div",{className:"page-content-container"},r.a.createElement("div",{className:"welcome"},r.a.createElement("h1",{className:"font-secondary"},r.a.createElement("span",{className:"font-bigger"},"A"),"LEX"," ",r.a.createElement("span",{className:"font-bigger"},"J"),"EMAN"),r.a.createElement("h1",null," ","{"," FRONT-END ENGINEER | BACK-END ENGINEER ","}")," ",r.a.createElement("h1",null,"{"," > work in progress",r.a.createElement("span",{className:"console-toogle"},"_")," ","}")))},b=function(){return r.a.createElement("div",{className:"page-content-container"},r.a.createElement("div",{className:"about"},r.a.createElement("h1",null,"About ","{"),r.a.createElement("h2",null,"web developer"),r.a.createElement("h1",null,"}")))},g=function(){return r.a.createElement("div",{className:"scene"},r.a.createElement("div",{className:"cube rotate"},r.a.createElement("div",{className:"cube-face cube-face-front animated-bg"}),r.a.createElement("div",{className:"cube-face cube-face-back animated-bg"}),r.a.createElement("div",{className:"cube-face cube-face-right animated-bg"}),r.a.createElement("div",{className:"cube-face cube-face-left animated-bg"}),r.a.createElement("div",{className:"cube-face cube-face-top animated-bg"}),r.a.createElement("div",{className:"cube-face cube-face-bottom animated-bg"})))},v=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement(g,null),r.a.createElement("h2",{className:"loading-text"},"Loading..."))},j=function(e){var t=e.project,a=t.id,n=t.title,c=t.description,l=t.sample_url,o=t.project_url,s=t.project_img,i=t.pages_img;return r.a.createElement("div",{className:"project-card"},r.a.createElement("div",{className:"card"},r.a.createElement("a",{href:"#popup"+a,className:"popup-link"},r.a.createElement("div",{className:"card-side card-side-front"},r.a.createElement("h3",{className:"project-name"},n),r.a.createElement("img",{src:s,alt:""})))),r.a.createElement("div",{className:"popup",id:"popup"+a},r.a.createElement("a",{href:"#project-page",className:"popup-close-main"}," "),r.a.createElement("div",{className:"popup-content"},r.a.createElement("div",{className:"popup-left"},r.a.createElement("img",{src:s,alt:"",className:"popup-img"}),r.a.createElement("img",{src:i,alt:"",className:"popup-img"})),r.a.createElement("div",{className:"popup-right"},r.a.createElement("a",{href:"#project-page",className:"popup-close"},r.a.createElement("span",{className:"iconify","data-icon":"ion:close-sharp","data-inline":"false"})),r.a.createElement("h2",{className:"project-name"},n),r.a.createElement("p",{className:"popup-text"},c),r.a.createElement("div",{className:"btn-container"},r.a.createElement("a",{href:l,target:"_blank",className:"btn btn-animated",rel:"noopener noreferrer"},"Code Sample"),r.a.createElement("a",{href:o,target:"_blank",className:"btn btn-animated",rel:"noopener noreferrer"},"View Live"))))))},h=function(){var e=Object(n.useContext)(p),t=e.projects,a=e.getProjects,c=e.loading;return Object(n.useEffect)((function(){a()}),[]),r.a.createElement(n.Fragment,null,null===t||c?r.a.createElement(v,null):t.map((function(e){return r.a.createElement(j,{key:e.id,project:e})})))},N=function(){return r.a.createElement("div",{className:"project-container",id:"project-page"},r.a.createElement(h,null))},y=function(){return r.a.createElement("div",{className:"page-content-container"},r.a.createElement("div",{className:"skills"},r.a.createElement("h1",null,"Skills ","{"),r.a.createElement("h2",null,"React, SASS, JavaScript, Node.js, Python, Django"),r.a.createElement("h2",null,"SQL, MongoDB"),r.a.createElement("h1",null,"}"),r.a.createElement(g,null)))},O=function(){return r.a.createElement("div",{className:"page-content-container"},r.a.createElement("div",{className:"contact"},r.a.createElement("h1",null,"Contact ","{"),r.a.createElement("h2",null,"alexandrujeman.ja@gmail.com"),r.a.createElement("h2",null,"+373 62 126 036"),r.a.createElement("h1",null,"}")))},C=function(){return r.a.createElement("div",{className:"page-content-container"},r.a.createElement("div",{className:"info"},r.a.createElement("h1",null,"Info ","{"),r.a.createElement("h2",null,"Full stack app built with React, Sass, SQL, Python/Django"),r.a.createElement("h1",null,"}")))},R=function(e){var t=e.project,a=Object(n.useContext)(p),c=a.deleteProject,l=a.setCurrent,o=a.clearCurrent,s=t.id,i=t.title,u=t.sample_url,m=t.project_url;return r.a.createElement("div",{className:"card-preview"},r.a.createElement("h3",null,i),r.a.createElement("ul",{className:"list"},r.a.createElement("li",null,u),r.a.createElement("li",null,m)),r.a.createElement("p",null,r.a.createElement("button",{className:"btn btn-animated",onClick:function(){return l(t)}},"Edit"),r.a.createElement("button",{className:"btn btn-animated",onClick:function(){c(s),o()}},"Delete")))},_=function(){var e=Object(n.useContext)(p),t=e.projects,a=e.filtered,c=e.getProjects,l=e.loading;return Object(n.useEffect)((function(){c()}),[]),null===t||0!==t.length||l?r.a.createElement(n.Fragment,null,null===t||l?r.a.createElement(v,null):null!==a?a.map((function(e){return r.a.createElement(R,{key:e.id,project:e})})):t.map((function(e){return r.a.createElement(R,{key:e.id,project:e})}))):r.a.createElement("h4",null,"No projects")},x=a(12),T=a(1),P=a(6),S=function(){var e=Object(n.useContext)(p),t=e.addProject,a=e.updateProject,c=e.clearCurrent,l=e.current;Object(n.useEffect)((function(){u(null!=l?l:{title:"",description:"",sample_url:"",project_url:"",project_img:"",pages_img:""})}),[e,l]);var o=Object(n.useState)({title:"",description:"",sample_url:"",project_url:"",project_img:"",pages_img:""}),s=Object(P.a)(o,2),i=s[0],u=s[1],m=i.title,d=i.description,E=i.sample_url,f=i.project_url,b=i.project_img,g=i.pages_img,v=function(e){return u(Object(T.a)({},i,Object(x.a)({},e.target.name,e.target.value)))},j=function(){c()};return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),null===l?t(i):a(i),j()}},r.a.createElement("h2",null,l?"Edit Project":"Add Project"),r.a.createElement("input",{type:"text",placeholder:"Project Name",name:"title",value:m,onChange:v}),r.a.createElement("textarea",{placeholder:"Project Description",name:"description",value:d,onChange:v}),r.a.createElement("input",{type:"text",placeholder:"Project link to source code",name:"sample_url",value:E,onChange:v}),r.a.createElement("input",{type:"text",placeholder:"Project URL",name:"project_url",value:f,onChange:v}),r.a.createElement("input",{type:"text",placeholder:"Project Image URL",name:"project_img",value:b,onChange:v}),r.a.createElement("input",{type:"text",placeholder:"Project Image URL secondary",name:"pages_img",value:g,onChange:v}),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",value:l?"Save":"Add Project",className:"btn btn-animated"})),l&&r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-animated",onClick:j},"Clear")))},w=function(){var e=Object(n.useContext)(p),t=Object(n.useRef)(""),a=e.filterProjects,c=e.clearFilter,l=e.filtered;Object(n.useEffect)((function(){null===l&&(t.current.value="")}));return r.a.createElement("form",null,r.a.createElement("input",{ref:t,type:"text",placeholder:"Search...",onChange:function(e){""!==t.current.value?a(e.target.value):c()}}))},k=function(){var e=Object(n.useContext)(m);return Object(n.useEffect)((function(){e.loadUser()}),[]),r.a.createElement("div",{className:"admin-page-container"},r.a.createElement("div",{className:"edit-form"},r.a.createElement(S,null)),r.a.createElement("div",{className:"project-list"},r.a.createElement(w,null),r.a.createElement(_,null)))},A=Object(n.createContext)(),I=function(e){var t=Object(n.useContext)(A),a=Object(n.useContext)(m),c=t.setNotification,l=a.register,o=a.error,s=a.clearErrors,i=a.isAuthenticated;Object(n.useEffect)((function(){i&&e.history.push("/admin"),"User already exists"===o&&(c(o,"danger"),s())}),[o,i,e.history]);var u=Object(n.useState)({name:"",email:"",password:"",password2:""}),p=Object(P.a)(u,2),d=p[0],E=p[1],f=d.name,b=d.email,g=d.password,v=d.password2,j=function(e){E(Object(T.a)({},d,Object(x.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"register-form"},r.a.createElement("h1",null,"Register user"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===f||""===b||""===g?c("Please enter all fields","danger"):g!==v?c("Passwords do not match","danger"):l({name:f,email:b,password:g})}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",value:f,onChange:j,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",value:b,onChange:j,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",value:g,onChange:j,required:!0,minLength:"6"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),r.a.createElement("input",{type:"password",name:"password2",value:v,onChange:j,required:!0,minLength:"6"})),r.a.createElement("input",{type:"submit",value:"Register",className:"btn btn-animated"})))},L=function(e){var t=Object(n.useContext)(A),a=Object(n.useContext)(m),c=t.setNotification,l=a.login,o=a.error,s=a.clearErrors,i=a.isAuthenticated;Object(n.useEffect)((function(){i&&e.history.push("/admin"),"Invalid credentials"!==o&&"Invalid password"!==o||(c(o,"danger"),s())}),[o,i,e.history]);var u=Object(n.useState)({email:"",password:""}),p=Object(P.a)(u,2),d=p[0],E=p[1],f=d.email,b=d.password,g=function(e){E(Object(T.a)({},d,Object(x.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"register-form"},r.a.createElement("h1",null,"Login user"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===f||""===b?c("Please fill in all fields"):l({email:f,password:b})}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",value:f,onChange:g,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",value:b,onChange:g,required:!0})),r.a.createElement("input",{type:"submit",value:"Login",className:"btn btn-animated"})))},F=function(){var e=Object(n.useContext)(A);return e.notifications.length>0&&e.notifications.map((function(e){return r.a.createElement("div",{key:e._id,className:"notification notification-".concat(e.type)},r.a.createElement("i",{className:"fas fa-info-circle"})," ",e.msg)}))},D=a(35),J=function(e){var t=e.component,a=Object(D.a)(e,["component"]),c=Object(n.useContext)(m),l=c.isAuthenticated,o=c.loading;return r.a.createElement("div",null,r.a.createElement(s.b,Object.assign({},a,{render:function(e){return l||o?r.a.createElement(t,e):r.a.createElement(s.a,{to:"/admin/login"})}})))},U=a(3),G=a.n(U),q=a(7),H=a.n(q),M=a(15),B=function(e,t){switch(t.type){case"GET_PROJECTS":return Object(T.a)({},e,{projects:t.payload,loading:!1});case"ADD_PROJECT":return Object(T.a)({},e,{projects:[].concat(Object(M.a)(e.projects),[t.payload]),loading:!1});case"UPDATE_PROJECT":return Object(T.a)({},e,{projects:e.projects.map((function(e){return e.id===t.payload.id?t.payload:e})),loading:!1});case"DELETE_PROJECT":return Object(T.a)({},e,{projects:e.projects.filter((function(e){return e.id!==t.payload})),loading:!1});case"SET_CURRENT":return Object(T.a)({},e,{current:t.payload});case"CLEAR_CURRENT":return Object(T.a)({},e,{current:null});case"FILTER_PROJECTS":return Object(T.a)({},e,{filtered:e.projects.filter((function(e){var a=new RegExp("".concat(t.payload),"gi");return e.project_name.match(a)||e.project_description.match(a)}))});case"CLEAR_FILTER":return Object(T.a)({},e,{filtered:null});case"CLEAR_PROJECTS":return Object(T.a)({},e,{projects:null,filtered:null,error:null,current:null});case"PROJECT_ERROR":return Object(T.a)({},e,{error:t.payload});default:return e}},V=function(e){var t=Object(n.useReducer)(B,{projects:null,current:null,filtered:null,error:null}),a=Object(P.a)(t,2),c=a[0],l=a[1];return r.a.createElement(p.Provider,{value:{projects:c.projects,current:c.current,filtered:c.filtered,error:c.error,getProjects:function(){var e;return G.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.a.awrap(H.a.get("/api/projects/v1/"));case 3:e=t.sent,l({type:"GET_PROJECTS",payload:e.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),l({type:"PROJECT_ERROR",payload:t.t0.response.msg});case 10:case"end":return t.stop()}}),null,null,[[0,7]])},addProject:function(e){var t,a;return G.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={headers:{"Contents-Type":"application/json"}},n.prev=1,n.next=4,G.a.awrap(H.a.post("/api/projects/v1/",e,t));case 4:a=n.sent,l({type:"ADD_PROJECT",payload:a.data}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),l({type:"PROJECT_ERROR",payload:n.t0.response.msg});case 11:case"end":return n.stop()}}),null,null,[[1,8]])},updateProject:function(e){var t,a;return G.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={headers:{"Contents-Type":"application/json"}},n.prev=1,n.next=4,G.a.awrap(H.a.put("/api/projects/v1/".concat(e.id),e,t));case 4:a=n.sent,l({type:"UPDATE_PROJECT",payload:a.data}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),l({type:"PROJECT_ERROR",payload:n.t0.response.msg});case 11:case"end":return n.stop()}}),null,null,[[1,8]])},deleteProject:function(e){return G.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.a.awrap(H.a.delete("/api/projects/v1/".concat(e)));case 3:l({type:"DELETE_PROJECT",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),l({type:"PROJECT_ERROR",payload:t.t0.response.msg});case 9:case"end":return t.stop()}}),null,null,[[0,6]])},setCurrent:function(e){l({type:"SET_CURRENT",payload:e})},clearCurrent:function(){l({type:"CLEAR_CURRENT"})},filterProjects:function(e){l({type:"FILTER_PROJECTS",payload:e})},clearFilter:function(){l({type:"CLEAR_FILTER"})},clearProjects:function(){l({type:"CLEAR_PROJECTS"})}}},e.children)},Q=function(e,t){switch(t.type){case"USER_LOADED":return Object(T.a)({},e,{isAuthenticated:!0,loading:!1,user:t.payload});case"REGISTER_SUCCESS":case"LOGIN_SUCCESS":return localStorage.setItem("token",t.payload.token),Object(T.a)({},e,{},t.payload,{isAuthenticated:!0,loading:!1});case"REGISTER_FAIL":case"AUTH_ERROR":case"LOGIN_FAIL":case"LOGOUT":return localStorage.removeItem("token"),Object(T.a)({},e,{token:null,isAuthenticated:!1,loading:!1,user:null,error:t.payload});case"CLEAR_ERRORS":return Object(T.a)({},e,{error:null});default:return e}},K=function(e){e?H.a.defaults.headers.common["x-auth-token"]=e:delete H.a.defaults.headers.common["x-auth-token"]},W=function(e){var t={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null,error:null},a=Object(n.useReducer)(Q,t),c=Object(P.a)(a,2),l=c[0],o=c[1],s=function(){var e;return G.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return K(localStorage.token),t.prev=1,t.next=4,G.a.awrap(H.a.get("/api/auth"));case 4:e=t.sent,o({type:"USER_LOADED",payload:e.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),o({type:"AUTH_ERROR"});case 11:case"end":return t.stop()}}),null,null,[[1,8]])};return r.a.createElement(m.Provider,{value:{token:l.token,isAuthenticated:l.isAuthenticated,loading:l.loading,user:l.user,error:l.error,register:function(e){var t,a;return G.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={headers:{"Content-Type":"application/json"}},n.prev=1,n.next=4,G.a.awrap(H.a.post("/api/users",e,t));case 4:a=n.sent,o({type:"REGISTER_SUCCESS",payload:a.data}),s(),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),o({type:"REGISTER_FAIL",payload:n.t0.response.data.msg});case 12:case"end":return n.stop()}}),null,null,[[1,9]])},loadUser:s,login:function(e){var t,a;return G.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={headers:{"Content-Type":"application/json"}},n.prev=1,n.next=4,G.a.awrap(H.a.post("/api/auth",e,t));case 4:a=n.sent,o({type:"LOGIN_SUCCESS",payload:a.data}),s(),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),o({type:"LOGIN_FAIL",payload:n.t0.response.data.msg});case 12:case"end":return n.stop()}}),null,null,[[1,9]])},logout:function(){return o({type:"LOGOUT"})},clearErrors:function(){return o({type:"CLEAR_ERRORS"})}}},e.children)},X=a(36),z=a.n(X),Y=function(e,t){switch(t.type){case"SET_NOTIFICATION":return[].concat(Object(M.a)(e),[t.payload]);case"REMOVE_NOTIFICATION":return e.filter((function(e){return e._id!==t.payload}));default:return e}},Z=function(e){var t=Object(n.useReducer)(Y,[]),a=Object(P.a)(t,2),c=a[0],l=a[1];return r.a.createElement(A.Provider,{value:{notifications:c,setNotification:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3,n=z.a.v4();l({type:"SET_NOTIFICATION",payload:{msg:e,type:t,_id:n}}),setTimeout((function(){return l({type:"REMOVE_NOTIFICATION",payload:n})}),a)}}},e.children)};a(67);K(localStorage.token);var $=function(){return r.a.createElement(W,null,r.a.createElement(V,null,r.a.createElement(Z,null,r.a.createElement(o.a,null,r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(E,null),r.a.createElement(F,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:f}),r.a.createElement(s.b,{exact:!0,path:"/work",component:N}),r.a.createElement(s.b,{exact:!0,path:"/skills",component:y}),r.a.createElement(s.b,{exact:!0,path:"/contact",component:O}),r.a.createElement(s.b,{exact:!0,path:"/about",component:b}),r.a.createElement(s.b,{exact:!0,path:"/info",component:C}),r.a.createElement(J,{exact:!0,path:"/admin",component:k}),r.a.createElement(J,{exact:!0,path:"/admin/register",component:I}),r.a.createElement(s.b,{exact:!0,path:"/admin/login",component:L}))))))))};l.a.render(r.a.createElement($,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.7f560857.chunk.js.map