(function(t){function e(e){for(var s,i,o=e[0],u=e[1],c=e[2],l=0,m=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);d&&d(e);while(m.length)m.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},r={app:0},a=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ca8eae07"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,s){n=r[t]=[e,s]}));e.push(n[2]=s);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=i(t);var c=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",c.name="ChunkLoadError",c.type=s,c.request=a,n[1](c)}r[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"097c":function(t,e,n){},"150b":function(t,e,n){},"1e98":function(t,e,n){},"420f":function(t,e,n){},5211:function(t,e,n){"use strict";var s=n("fc62"),r=n.n(s);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=(n("d3b7"),n("bc3a")),a=n.n(r),i={apiUrl:"http://localhost:8000/api/",clientId:100,clientSecret:"YoxyoZsYF7wuPUDVbgtCrr7uIXkQN3hMkH4DusCc"},o={baseURL:i.apiUrl},u=a.a.create(o);u.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),u.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=u,window.axios=u,Object.defineProperties(t.prototype,{axios:{get:function(){return u}},$axios:{get:function(){return u}}})},s["a"].use(Plugin);Plugin;var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},l=[],d=(n("6aaf"),n("2877")),m={},p=Object(d["a"])(m,c,l,!1,null,"134e0b3a",null),v=p.exports,f=(n("a4d3"),n("4de4"),n("4160"),n("caad"),n("b0c0"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),h=n("8c4f"),g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])}],_={name:"home"},y=_,w=Object(d["a"])(y,g,b,!1,null,null,null),j=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("body",[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-9 col-md-7 col-lg-5 mx-auto"},[n("div",{staticClass:"card card-signin my-5"},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title text-center"},[t._v("Sign In")]),n("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("div",{staticClass:"form-label-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("label",{attrs:{for:"inputEmail"}},[t._v("Email address")])]),n("div",{staticClass:"form-label-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("label",{attrs:{for:"inputPassword"}},[t._v("Password")])]),t._m(0),n("button",{staticClass:"btn btn-lg btn-primary btn-block text-uppercase",attrs:{type:"submit"}},[t._v("Sign in")])])])])])])])])])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-control custom-checkbox mb-3"},[n("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheck1"}}),n("label",{staticClass:"custom-control-label",attrs:{for:"customCheck1"}},[t._v("Remember password")])])}],x=(n("96cf"),n("89ba")),S={name:"Login",created:function(){console.log(this.$store.getters.isLoggedIn)},methods:{login:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.post("/oauth/token",{grant_type:"password",client_id:i.clientId,client_secret:i.clientSecret,username:this.email,password:this.password,scope:"*"});case 2:return e=t.sent,t.next=5,this.$axios.get("/me",{headers:{Authorization:"Bearer "+e.data.access_token}});case 5:return n=t.sent.data,t.next=8,this.$store.commit("saveSession",{session:e.data,user:n});case 8:n.admin?this.$router.push({name:"admin-manage-courses"}):this.$router.push({name:"student-view-profile"});case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},data:function(){return{email:"",password:""}}},O=S,$=Object(d["a"])(O,k,C,!1,null,null,null),P=$.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},E=[],A={name:"BackendPage"},N=A,I=Object(d["a"])(N,R,E,!1,null,null,null),M=I.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.user?n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"profile-row profile-name"},[n("label",[t._v("Name")]),n("div",[t._v(t._s(t.user.full_name))])]),n("div",{staticClass:"profile-row"},[n("label",[t._v("Email")]),n("div",[t._v(t._s(t.user.email))])]),n("div",{staticClass:"profile-row"},[n("label",[t._v("Gender")]),n("div",[t._v(t._s(t.user.gender))])]),n("div",{staticClass:"profile-row"},[n("label",[t._v("Birth Date")]),n("div",[t._v(t._s(t.user.birth_date))])])])])]):t._e()},J=[],L={name:"ViewProfile",created:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.user=this.$store.getters.user,console.log(this.user);case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),data:function(){return{user:null}}},T=L,B=(n("cff4"),Object(d["a"])(T,D,J,!1,null,null,null)),F=B.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.course?n("div",[n("div",{staticClass:"content-header"},[n("div",{staticClass:"content-title"},[n("div",[t._v("Currently enrolled in")]),n("h2",[t._v(t._s(t.course.name))])])]),n("div",{staticClass:"content-body"},[t.semester?n("div",{staticClass:"content-semester"},[n("div",[n("ul",t._l(t.semesters,(function(e){return n("li",{key:e.id,class:{active:e.id==t.semester.id},on:{click:function(n){return t.selectSemester(e)}}},[e.id==t.semester.id?n("span",[t._v("Semester ")]):t._e(),t._v(" "+t._s(e.no)+" ")])})),0)]),n("div",[t._v(t._s(t.monthNames[t.semester.month])+" "+t._s(t.semester.year))])]):t._e(),t.markings.length>0?n("div",{staticClass:"content-markings"},[n("ul",t._l(t.markings,(function(e){return n("li",{key:e.id},[n("span",[t._v(t._s(e.subject.name))]),n("span",{staticClass:"marking-score"},[e.is_marked?n("span",[t._v(t._s(e.score))]):t._e(),e.is_marked?t._e():n("span",[t._v("Unmarked")])])])})),0)]):t._e()])]):t._e()},H=[],U={created:function(){this.init()},name:"ViewHome",data:function(){return{course:null,semester:null,semesters:[],markings:[],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"]}},methods:{init:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){var e,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("student/course");case 2:return e=t.sent.data,t.next=5,this.$axios.get("student/course/semesters");case 5:return n=t.sent.data,t.next=8,this.$axios.get("student/marking/subjects/"+n[0].id);case 8:s=t.sent.data,this.course=e,this.semesters=n,this.semester=n[0],this.markings=s;case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),selectSemester:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.semester=e,t.next=3,this.$axios.get("student/marking/subjects/"+e.id);case 3:this.markings=t.sent.data;case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},q=U,z=(n("d9b0"),Object(d["a"])(q,V,H,!1,null,"48ed3fa4",null)),G=z.exports,Y=[{name:"student-view-home",path:"home",component:G},{name:"student-view-profile",path:"profile",component:F}],Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-3 course-nav"},[n("ul",{attrs:{id:"course-list"}},t._l(t.courses,(function(e){return n("li",{key:e.id,class:{active:t.selectedCourse&&e.id==t.selectedCourse.id}},[n("div",{on:{click:function(n){return t.selectCourse(e)}}},[t._v(t._s(e.name))])])})),0),n("div",{staticStyle:{"text-align":"right","margin-top":"15px"}},[n("a",{staticStyle:{"text-decoration":"underline"},attrs:{href:"javascript:;"},on:{click:t.addCourse}},[t._v("Add new course")])])]),t.component?t._e():n("div",[t.courses.length>0?n("div",{staticClass:"col-sm-9"}):t._e(),0==t.courses.length?n("div",{staticClass:"col-sm-9"},[n("div",[t._v("Ooops you have not set up any courses yet.")])]):t._e()]),t.component?n(t.component,{tag:"component",staticClass:"col-sm-9",attrs:{props:t.props},on:{listener:t.emitter}}):t._e()],1)])},X=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Add New Course")]),n("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.submit()}}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"course_name"}},[t._v("Course Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.course.name,expression:"course.name"}],staticClass:"form-control",attrs:{type:"text",id:"course_name",placeholder:"Enter course name"},domProps:{value:t.course.name},on:{input:function(e){e.target.composing||t.$set(t.course,"name",e.target.value)}}})]),n("div",{staticStyle:{"margin-bottom":"10px",display:"block"}},[t._v("Intake")]),n("div",{staticClass:"form-group form-inline"},[n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.course.intake_month,expression:"course.intake_month"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.course,"intake_month",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:""}},[t._v("-- Select Month --")]),n("option",{attrs:{value:"1"}},[t._v("January")]),n("option",{attrs:{value:"2"}},[t._v("February")]),n("option",{attrs:{value:"3"}},[t._v("March")]),n("option",{attrs:{value:"4"}},[t._v("April")]),n("option",{attrs:{value:"5"}},[t._v("May")]),n("option",{attrs:{value:"6"}},[t._v("June")]),n("option",{attrs:{value:"7"}},[t._v("July")]),n("option",{attrs:{value:"8"}},[t._v("August")]),n("option",{attrs:{value:"9"}},[t._v("September")]),n("option",{attrs:{value:"10"}},[t._v("October")]),n("option",{attrs:{value:"11"}},[t._v("November")]),n("option",{attrs:{value:"12"}},[t._v("December")])]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.course.intake_year,expression:"course.intake_year"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.course,"intake_year",e.target.multiple?n:n[0])}}},[t._v("> "),n("option",{attrs:{value:""}},[t._v("-- Select Year --")]),n("option",{attrs:{value:"2019"}},[t._v("2019")]),n("option",{attrs:{value:"2020"}},[t._v("2020")]),n("option",{attrs:{value:"2021"}},[t._v("2021")]),n("option",{attrs:{value:"2022"}},[t._v("2022")])])])]),n("div",{staticClass:"form-group"},[n("label",[t._v("Total Semesters")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.course.total_semesters,expression:"course.total_semesters"}],staticClass:"form-control",staticStyle:{width:"120px"},attrs:{type:"number",placeholder:"Total Semesters"},domProps:{value:t.course.total_semesters},on:{input:function(e){e.target.composing||t.$set(t.course,"total_semesters",e.target.value)}}})]),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])},K=[],W={name:"AddCourse",methods:{submit:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.post("admin/courses",this.course);case 2:this.$emit("listener",["submitted",[this.course]]);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},data:function(){return{course:{name:"",intake_month:"",intake_year:"",total_semesters:0}}}},tt=W,et=Object(d["a"])(tt,Z,K,!1,null,null,null),nt=et.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"course-header",staticStyle:{height:"125px"}},[n("div",{staticStyle:{float:"left"}},[n("div",{staticStyle:{"font-size":"0.8em"}},[t._v("Manage Course")]),n("h2",[0==t.semesters.length?n("span",[t._v("Set up semesters for ")]):t._e(),t._v(" "+t._s(t.props.course.name)+" ")])]),t.semesters.length>0?n("div",{staticStyle:{float:"right"},attrs:{id:"course-semester"}},[n("div",[t._v("Semester "+t._s(t.semester.no))]),n("div",[n("ul",t._l(t.semesters,(function(e){return n("li",{key:e.id,class:{active:e.id==t.semester.id},on:{click:function(n){return t.viewSubjects(e)}}},[t._v(" "+t._s(e.no)+" ")])})),0)]),n("div",[t._v(t._s(t.monthNames[t.semester.month-1])+" "+t._s(t.semester.year))])]):t._e()]),t.subjects.length>0&&!t.hasStudents?n("div",{staticClass:"alert alert-danger"},[t._v(" This course has no student enrolled yet. ")]):t._e(),t.isAddingSubject?t._e():n("div",{staticClass:"course-body"},[t.semester&&0==t.subjects.length&&t.loaded?n("div",{staticClass:"no-entries-error"},[t._v("Oops, you might want to "),n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return e.stopPropagation(),t.addSubject(e)}}},[t._v("add")]),t._v(" some subjects for semester "+t._s(t.semester.no)+".")]):t._e(),n("div",{staticClass:"list-subjects"},t._l(t.subjects,(function(e){return n("div",{key:e.id},[t.markingCheck(e)?n("div",{class:{isMarking:!!t.markingSubject,"mark-container":!0}},[n("label",{staticClass:"subject-name"},[t._v(t._s(e.name))]),n("span",{staticStyle:{float:"right"}},[t.hasStudents?n("a",{staticClass:"button-ready-mark",attrs:{href:"javascript:;"},on:{click:function(n){return n.stopPropagation(),t.mark(e)}}},[t._v("Ready to mark")]):t._e()]),n("span",{staticStyle:{float:"right"}},[n("a",{staticClass:"button-cancel-mark",attrs:{href:"javascript:;"},on:{click:function(n){return n.stopPropagation(),t.cancelMark(e)}}},[t._v("Cancel")])]),t.markingSubject&&t.markingSubject.id==e.id?n("SubjectMarking",{attrs:{subjectId:e.id},on:{submitted:function(e){t.markingSubject=null}}}):t._e()],1):t._e()])})),0),t.subjects.length>0?n("div",{staticStyle:{"padding-left":"5px","padding-top":"10px"}},[n("a",{attrs:{href:"javascript:;"},on:{click:t.addSubject}},[t._v("Add new subject")])]):t._e()]),t.isAddingSubject?n("div",{staticClass:"course-body"},[n("AddSubject",{attrs:{semesterId:t.addingSubject.semesterId,courseId:t.addingSubject.courseId},on:{submitted:t.refreshSubjects,cancelled:function(e){t.isAddingSubject=!1}}})],1):t._e()])},rt=[],at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"50%","margin-left":"auto","margin-right":"auto","text-align":"center","margin-top":"50px"}},[t._m(0),n("div",{staticClass:"input-group mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.subject.name,expression:"subject.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Subject's name"},domProps:{value:t.subject.name},on:{input:function(e){e.target.composing||t.$set(t.subject,"name",e.target.value)}}}),n("div",{staticClass:"input-group-append"})]),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.subject.description,expression:"subject.description"}],staticClass:"form-control",staticStyle:{height:"150px"},attrs:{placeholder:"Describe the detail of this subject"},domProps:{value:t.subject.description},on:{input:function(e){e.target.composing||t.$set(t.subject,"description",e.target.value)}}})]),n("div",{staticStyle:{"margin-top":"10px"}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.submit}},[t._v("Add")]),n("button",{staticClass:"btn btn-outline-secondary",staticStyle:{"margin-left":"10px"},attrs:{type:"button"},on:{click:t.cancel}},[t._v("Cancel")])])])},it=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",[t._v("Add New Subject")])])}],ot={name:"AddSubject",props:["courseId","semesterId"],data:function(){return{subject:{name:"",description:""}}},methods:{submit:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.post("admin/courses/"+this.courseId+"/semesters/"+this.semesterId+"/subjects",this.subject);case 2:this.$emit("submitted");case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),cancel:function(){this.$emit("cancelled")}}},ut=ot,ct=Object(d["a"])(ut,at,it,!1,null,null,null),lt=ct.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-striped"},[t._m(0),t._l(t.markings,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.student.user.full_name))]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.updated[e.student_id].score,expression:"updated[marking.student_id].score"}],staticClass:"form-control",staticStyle:{border:"0px"},attrs:{placeholder:"0.00",type:"number"},domProps:{value:t.updated[e.student_id].score},on:{input:function(n){n.target.composing||t.$set(t.updated[e.student_id],"score",n.target.value)}}})])])}))],2)]),n("div",{staticStyle:{"text-align":"right"}},[n("input",{staticClass:"btn btn-primary",attrs:{type:"button",value:"Mark"},on:{click:t.mark}})])])},mt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Student")]),n("th",{staticStyle:{width:"15%"}},[t._v("Score")])])}],pt={created:function(){this.init()},name:"SubjectMarking",props:["subjectId"],data:function(){return{updated:{},markings:[]}},methods:{init:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("admin/marking/"+this.subjectId);case 2:for(e in this.markings=t.sent.data,this.markings)n=this.markings[e].score,n="0.00"===n?"":n,this.updated[this.markings[e].student_id]={id:this.markings[e].id,student_id:this.markings[e].student_id,score:n};case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mark:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(confirm("Are you sure?")){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.$axios.post("admin/marking/"+this.subjectId,{markings:this.updated});case 4:this.$emit("submitted");case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},vt=pt,ft=Object(d["a"])(vt,dt,mt,!1,null,null,null),ht=ft.exports,gt={created:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.init();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),name:"ListSemesters",props:["props"],components:{AddSubject:lt,SubjectMarking:ht},watch:{props:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.init();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},data:function(){return{monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],setup:{total:1},semesters:[],subjects:[],semester:null,isAddingSubject:!1,addingSubject:{courseId:null,semesterId:null},loaded:!1,markingSubject:null}},computed:{hasStudents:function(){return this.subjects.length>0&&this.props.course.total_students>0}},methods:{init:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.markingSubject=null,this.loaded=!1,this.isAddingSubject=!1,this.subjects=[],t.next=6,this.$axios.get("admin/courses/"+this.props.course.id+"/semesters");case 6:this.semesters=t.sent.data,this.setup.total=1,this.semesters.length>0&&this.viewSubjects(this.semesters[0]);case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),addSubject:function(){this.isAddingSubject=!0,this.addingSubject={courseId:this.props.course.id,semesterId:this.semester.id}},refreshSubjects:function(){this.viewSubjects(this.semester)},viewSubjects:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.markingSubject=null,this.loaded=!1,this.isAddingSubject=!1,this.semester=e,t.next=6,this.$axios.get("admin/courses/"+this.props.course.id+"/semesters/"+e.id+"/subjects");case 6:this.subjects=t.sent.data,this.loaded=!0;case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),mark:function(t){this.markingSubject=t},cancelMark:function(){this.markingSubject=null},markingCheck:function(t){return!this.markingSubject||this.markingSubject&&this.markingSubject.id===t.id}}},bt=gt,_t=(n("7e2f"),Object(d["a"])(bt,st,rt,!1,null,null,null)),yt=_t.exports,wt=n("9f12"),jt=n("53fe"),kt=function(){function t(){Object(wt["a"])(this,t),Object(f["a"])(this,"_registries",{})}return Object(jt["a"])(t,[{key:"register",value:function(t){return this._registries[t]={events:{},on:function(t,e){this.events[t]=e},call:function(t,e){console.log(t),this.events[t]&&this.events[t].apply(null,e)}},this._registries[t]}},{key:"emit",value:function(t,e){this._registries[t]&&this._registries[t].call(e[0],e[1])}},{key:"on",value:function(t,e){return this._registries[t]=e,this}},{key:"call",value:function(t,e){}}]),t}(),Ct=new kt,xt={created:function(){this.loadCourses()},data:function(){return{courses:[],component:null,props:{},selectedCourse:null}},components:{AddCourse:nt,ViewCourse:yt},methods:{loadCourses:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("admin/courses");case 2:this.courses=t.sent.data;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),emitter:function(t){Ct.emit(this.component,t)},addCourse:function(){var t=this;this.useComponent("AddCourse").on("submitted",(function(){t.component=null}))},selectCourse:function(t){this.selectedCourse=t,this.useComponent("ViewCourse",{course:t})},useComponent:function(t,e){return this.component=t,this.props=e||{},Ct.register(t)}}},St=xt,Ot=(n("5211"),Object(d["a"])(St,Q,X,!1,null,null,null)),$t=Ot.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-3 course-nav"},[n("ul",{attrs:{id:"course-list"}},t._l(t.courses,(function(e){return n("li",{key:e.id,class:{active:t.course&&e.id==t.course.id}},[n("div",{on:{click:function(n){return t.selectCourse(e)}}},[t._v(t._s(e.name))])])})),0)]),t.course&&t.addStudent?n("div",{staticClass:"col-sm-9"},[n("AddStudent",{attrs:{course:t.addStudent},on:{submitted:t.addStudentSubmitted,cancelled:function(e){t.addStudent=null}}})],1):t._e(),t.course&&!t.addStudent?n("div",{staticClass:"col-sm-9"},[n("div",{staticClass:"header-manage-student"},[n("div",{staticStyle:{float:"left"}},[n("div",[t._v(t._s(t.course.name))]),n("h2",[t._v("All Students")])]),n("div",{staticStyle:{float:"right"}},[n("input",{staticClass:"btn btn-primary",staticStyle:{position:"relative",top:"6px"},attrs:{type:"button",value:"Register"},on:{click:t.register}})])]),n("div",{staticClass:"content-body"},[0==t.students.length?n("div",{staticClass:"no-entries-error",staticStyle:{"margin-top":"150px"}},[t._v(" No student's is yet enrolled for this course. ")]):t._e(),t.students.length>0?n("div",{staticClass:"table-responsive",staticStyle:{"padding-top":"30px"}},[n("table",{staticClass:"table"},t._l(t.students,(function(e){return n("tr",{key:e.id},[n("td",[n("div",[n("strong",[t._v(t._s(e.user.full_name))])]),n("div",[n("span",{staticStyle:{opacity:"0.7"}},[t._v(t._s(e.user.email))])])])])})),0)]):t._e()])]):t._e()])])},Rt=[],Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header-manage-student",staticStyle:{height:"75px"}},[n("div",{staticStyle:{float:"left"}},[n("div",[t._v(t._s(t.course.name))]),n("h2",[t._v("Add New Student")])])]),n("div",{staticClass:"content-body"},[n("form",{staticClass:"row",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("div",{staticClass:"form-group col-sm-6"},[n("label",[t._v("Full Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.full_name,expression:"student.full_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Student's full name"},domProps:{value:t.student.full_name},on:{keyup:function(e){return t.generateEmail()},input:function(e){e.target.composing||t.$set(t.student,"full_name",e.target.value)}}})]),n("div",{staticClass:"form-group col-sm-6"},[n("label",[t._v("Gender")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.student.gender,expression:"student.gender"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.student,"gender",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:""}},[t._v("-- Select Gender --")]),n("option",{attrs:{value:"male"}},[t._v("Male")]),n("option",{attrs:{value:"female"}},[t._v("Female")]),n("option",{attrs:{value:"non_binary"}},[t._v("Non-Binary")])])]),n("div",{staticClass:"form-group col-sm-6"},[n("label",[t._v("Email address")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.email,expression:"student.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email address","aria-describedby":"emailHelp"},domProps:{value:t.student.email},on:{input:function(e){e.target.composing||t.$set(t.student,"email",e.target.value)}}})]),n("div",{staticClass:"form-group col-sm-6"},[n("label",[t._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.password,expression:"student.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Default is 12345"},domProps:{value:t.student.password},on:{input:function(e){e.target.composing||t.$set(t.student,"password",e.target.value)}}})]),n("div",{staticClass:"form-group col-sm-6"},[n("label",[t._v("Birthdate")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.birth_date,expression:"student.birth_date"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.student.birth_date},on:{input:function(e){e.target.composing||t.$set(t.student,"birth_date",e.target.value)}}})]),n("div",{staticClass:"col-sm-12",staticStyle:{"text-align":"center","margin-top":"20px"}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")]),n("button",{staticClass:"btn btn-default",staticStyle:{"margin-left":"10px"},attrs:{type:"button"},on:{click:function(e){return t.$emit("cancelled")}}},[t._v("Cancel")])])])])])},At=[],Nt=(n("ac1f"),n("1276"),{name:"AddStudent",props:["course"],data:function(){return{student:{full_name:null,email:null,password:null,birth_date:null,gender:""}}},methods:{generateEmail:function(){this.student.email=this.student.full_name.split(" ")[0].toLowerCase()+"_"+Math.round(100*Math.random())+"@limkokwing.net"},submit:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.post("admin/courses/"+this.course.id+"/students",this.student);case 2:this.$emit("submitted");case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}}),It=Nt,Mt=Object(d["a"])(It,Et,At,!1,null,null,null),Dt=Mt.exports,Jt={created:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.init();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),name:"ManageStudents",components:{AddStudent:Dt},data:function(){return{courses:[],students:[],course:null,addStudent:null}},methods:{init:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("admin/courses");case 2:this.courses=t.sent.data;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),selectCourse:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.course=e,this.addStudent=null,t.next=4,this.$axios.get("admin/courses/"+this.course.id+"/students");case 4:this.students=t.sent.data;case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),register:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.addStudent=this.course;case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),addStudentSubmitted:function(){this.addStudent=null,this.selectCourse(this.course)}}},Lt=Jt,Tt=Object(d["a"])(Lt,Pt,Rt,!1,null,"7d22df5a",null),Bt=Tt.exports,Ft=[{name:"admin-manage-courses",path:"courses",component:$t},{name:"admin-manage-students",path:"students",component:Bt}];function Vt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function Ht(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Vt(n,!0).forEach((function(e){Object(f["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Ut(t,e,n){var s=e[n];return s?function(){var r=Ut(t,e,n+1);s(Ht({},t,{next:r}))}:t.next}var qt=n("2f62"),zt=n("bfa9");s["a"].use(qt["a"]);var Gt=new zt["a"]({key:"my-app",storage:window.localStorage}),Yt=new qt["a"].Store({plugins:[Gt.plugin],state:{session:{access_token:null},user:null},getters:{isLoggedIn:function(t){return!!t.session.access_token},apiHeaders:function(t){return{Authorization:"Bearer "+t.session.access_token}},token:function(t){return t.session.access_token},user:function(t){return t.user}},mutations:{saveSession:function(t,e){t.session=e.session,t.user=e.user}},actions:{},modules:{}}),Qt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Xt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("404 Not Found")])])}],Zt={},Kt=Object(d["a"])(Zt,Qt,Xt,!1,null,null,null),Wt=Kt.exports,te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container",attrs:{id:"main-container"}},[n("div",{staticClass:"top-nav"},[n("ul",[n("li",[n("i",{staticClass:"fas fa-book-open"}),n("router-link",{attrs:{to:{name:"student-view-home"}}},[t._v("Home")])],1),n("li",[n("i",{staticClass:"fas fa-user"}),n("router-link",{attrs:{to:{name:"student-view-profile"}}},[t._v("Profile")])],1),n("li",{staticStyle:{float:"right"}},[n("a",{attrs:{href:"javascript:;"},on:{click:t.logout}},[n("i",{staticClass:"fas fa-power-off"}),t._v(" Logout ")])])])]),n("div",{staticClass:"card",attrs:{id:"content-body"}},[n("div",{staticClass:"card-body"},[n("router-view")],1)])])])},ee=[],ne={name:"StudentPage",methods:{logout:function(){this.$router.push({name:"login"})},isRoute:function(t){this.$router.currentRoute.name}}},se=ne,re=Object(d["a"])(se,te,ee,!1,null,null,null),ae=re.exports,ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container",attrs:{id:"main-container"}},[n("div",{staticClass:"top-nav"},[n("ul",[n("li",[n("router-link",{class:{active:t.isRoute("admin-manage-courses")},attrs:{to:{name:"admin-manage-courses"}}},[n("i",{staticClass:"fas fa-book"}),t._v(" Courses")])],1),n("li",[n("router-link",{class:{active:t.isRoute("admin-manage-students")},attrs:{to:{name:"admin-manage-students"}}},[n("i",{staticClass:"fas fa-users"}),t._v(" Students")])],1),n("li",{staticStyle:{float:"right"}},[n("a",{attrs:{href:"javascript:;"},on:{click:t.logout}},[n("i",{staticClass:"fas fa-power-off"}),t._v(" Logout ")])])])]),n("div",{staticClass:"card",attrs:{id:"content-body"}},[n("div",{staticClass:"card-body"},[n("router-view")],1)])])])},oe=[],ue={name:"StudentPage",methods:{logout:function(){this.$router.push({name:"login"})},isRoute:function(t){this.$router.currentRoute.name}}},ce=ue,le=(n("692b"),Object(d["a"])(ce,ie,oe,!1,null,null,null)),de=le.exports;function me(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function pe(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?me(n,!0).forEach((function(e){Object(f["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):me(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}s["a"].use(h["a"]);var ve=[{path:"/",name:"home",redirect:"/auth/login",component:j},{path:"/auth/login",name:"login",component:P},{path:"/dashboard",name:"backend",component:M,children:[{name:"student",path:"student",component:ae,children:Y},{name:"admin",path:"admin",component:de,children:Ft}]},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{name:"error",path:"*",component:Wt}],fe=new h["a"]({routes:ve});fe.beforeEach((function(t,e,n){if(!["login"].includes(t.name)){if(!Yt.getters.isLoggedIn)return n({name:"login"});fe.app.$axios.defaults.headers.common["Authorization"]="Bearer "+Yt.getters.token}if(!t.meta.middleware)return n();var s=t.meta.middleware,r={to:t,from:e,next:n,store:Yt};return s[0](pe({},r,{next:Ut(r,s,1)}))}));var he=fe,ge=n("415c"),be=n.n(ge);n("150b");s["a"].config.productionTip=!1,s["a"].use(be.a),s["a"].prototype.$config=i,new s["a"]({router:he,store:Yt,render:function(t){return t(v)}}).$mount("#app")},"692b":function(t,e,n){"use strict";var s=n("f1aa"),r=n.n(s);r.a},"6aaf":function(t,e,n){"use strict";var s=n("1e98"),r=n.n(s);r.a},"7e2f":function(t,e,n){"use strict";var s=n("097c"),r=n.n(s);r.a},"7f5b":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},cff4:function(t,e,n){"use strict";var s=n("420f"),r=n.n(s);r.a},d9b0:function(t,e,n){"use strict";var s=n("7f5b"),r=n.n(s);r.a},f1aa:function(t,e,n){},fc62:function(t,e,n){}});
//# sourceMappingURL=app.1f53dc3d.js.map