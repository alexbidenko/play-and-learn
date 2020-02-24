(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},s=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},s=[],r=i["a"].extend({name:"App",components:{},data:function(){return{}}}),o=r,l=a("2877"),c=Object(l["a"])(o,n,s,!1,null,null,null),u=c.exports,d=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{staticStyle:{"z-index":"1000"},attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-btn",{staticClass:"mr-2",attrs:{to:"/",icon:""}},[a("v-img",{staticClass:"shrink",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}})],1),a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer"),t.isAuthenticated?t._e():a("v-btn",{attrs:{to:"/registration",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Регистрация")])]),t.isAuthenticated?t._e():a("v-btn",{attrs:{to:"/login",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Вход")]),a("v-icon",[t._v("mdi-open-in-new")])],1),t.isAuthenticated?a("v-btn",{attrs:{to:"/cabinet",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Кабинет")])]):t._e(),t.isAuthenticated?a("v-btn",{attrs:{to:"/redaction",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Редактировать")])]):t._e()],1),a("v-content",[a("router-view")],1)],1)},v=[],f=a("9ab4"),p=a("2f62"),h="checkAuth",b="login",x="logout",g="register",_="updateUser",k="getItems",I="addItem",w="updateItem",j="deleteItem",y="getSubjectsByExamination",S="getLevelsBySubject",V=i["a"].extend({name:"Home",created:function(){this.$store.dispatch(h).then((function(){}))},computed:Object(f["a"])(Object(f["a"])({},Object(p["b"])({user:function(t){return t.auth.user}})),{isAuthenticated:function(){return this.user&&JSON.stringify(this.user).length>2}})}),C=V,T=a("6544"),O=a.n(T),$=a("7496"),E=a("40dc"),P=a("8336"),A=a("a75b"),L=a("132d"),R=a("adda"),F=a("2fa4"),D=Object(l["a"])(C,m,v,!1,null,"3e1063dc",null),U=D.exports;O()(D,{VApp:$["a"],VAppBar:E["a"],VBtn:P["a"],VContent:A["a"],VIcon:L["a"],VImg:R["a"],VSpacer:F["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h1",[t._v("Let's start your game")]),t.isGameStarted?t._e():a("v-card",[a("v-card-text",[a("v-select",{attrs:{items:t.examinations,label:"Экзамен","item-text":"title","item-value":"id"},on:{change:function(e){return t.changeActualExamination(e)}},model:{value:t.actualExamination,callback:function(e){t.actualExamination=e},expression:"actualExamination"}}),t.actualExamination>0?a("v-select",{attrs:{items:t.subjects,label:"Предмет","item-text":"title","item-value":"id"},model:{value:t.actualSubject,callback:function(e){t.actualSubject=e},expression:"actualSubject"}}):t._e(),t.actualExamination>0&&t.actualSubject>0?a("v-btn",{staticClass:"d-block mx-auto",on:{click:t.start}},[t._v("Начать игру")]):t._e()],1)],1),t.isGameStarted?a("v-stepper",{model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[[a("v-stepper-header",[t._l(t.visibleSteps,(function(e){return[a("v-stepper-step",{key:e+"-step",attrs:{complete:t.getIsComplete(e),step:e,editable:!1,rules:[function(){return t.getIsSuccess(e)}]}},[t._v(" Задание "+t._s(e)+" ")]),a("v-divider",{key:e})]}))],2),a("v-stepper-items",t._l([t.e1,t.e1+1],(function(e){return a("v-stepper-content",{key:e+"-content",attrs:{step:e}},[a("h4",[t._v(t._s(t.currentTask.title))]),a("p",[t._v(t._s(t.currentTask.text))]),t.currentTask.image?a("img",{staticStyle:{width:"100%"},attrs:{src:t.baseUrl+"storage/tasks/"+t.currentTask.image,alt:t.currentTask.title}}):t._e(),a("p",[t._v(t._s(t.currentTask.answer))]),a("v-text-field",{attrs:{label:"Ответ",type:"text"},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}}),a("v-btn",{attrs:{color:"primary",disabled:t.isGameFinished},on:{click:function(a){return t.nextStep(e,!0)}}},[t._v(" Ответить ")]),a("v-btn",{attrs:{text:"",disabled:t.isGameFinished},on:{click:function(a){return t.nextStep(e,!1)}}},[t._v("Не знаю")]),t.isGameFinished?a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.reset()}}},[t._v(" Еще раз ")]):t._e()],1)})),1)]],2):t._e()],1)},z=[],B=(a("4de4"),a("7db0"),a("498a"),"https://play-and-learn.admire.social/api"),M="https://play-and-learn.admire.social/",N=i["a"].extend({name:"Game",data:function(){return{baseUrl:M,examinations:[],subjects:[],actualExamination:0,actualSubject:0,e1:1,isGameStarted:!1,isGameFinished:!1,levels:[],currentTask:{},answer:"",results:[]}},created:function(){var t=this;this.$store.dispatch(k,{url:"examinations"}).then((function(e){t.examinations=e}))},methods:{changeActualExamination:function(t){var e=this;this.actualSubject=0,this.$store.dispatch(y,{examinationId:t}).then((function(t){e.subjects=t}))},nextStep:function(t,e){var a={task:Object.assign({},this.currentTask),step:t,success:!!e&&this.answer.trim().toUpperCase()===this.currentTask.answer.trim().toUpperCase()};if(this.results.push(a),a.success||this.levels.push(this.levels.find((function(t){return t.id===a.task.level_id}))),this.e1===this.levels.length)console.log(this.results),this.isGameFinished=!0,alert("Поздравляю, вы выиграли!");else{this.e1=t+1;var i=this.levels[this.e1-1].tasks;this.currentTask=i[Math.floor(Math.random()*i.length)],this.answer=""}},start:function(){var t=this;this.$store.dispatch(S,{subjectId:this.actualSubject}).then((function(e){t.isGameStarted=!0,t.levels=e.filter((function(t){return t.tasks.length>0}));var a=t.levels[t.e1-1].tasks;t.currentTask=a[Math.floor(Math.random()*a.length)]}))},getIsSuccess:function(t){var e,a=null===(e=this.results.find((function(e){return e.step===t})))||void 0===e?void 0:e.success;return void 0===a||a},getIsComplete:function(t){return!!this.results.find((function(e){return e.step===t}))},reset:function(){this.actualExamination=0,this.actualSubject=0,this.e1=1,this.isGameStarted=!1,this.isGameFinished=!1,this.levels=[],this.currentTask={},this.answer="",this.results=[]}},computed:{visibleSteps:function(){var t=this;if(this.levels.length<4){for(var e=[],a=0;a<this.levels.length;a++)e.push(a+1);return e}return this.levels.length===this.e1?[t.levels.length-2,t.levels.length-1,t.levels.length]:1===this.e1?[1,2,3]:[t.e1-1,t.e1,t.e1+1]}}}),H=N,q=a("b0af"),J=a("99d9"),W=a("a523"),Z=a("ce7e"),K=a("b974"),Q=a("7e85"),X=a("e516"),Y=a("9c54"),tt=a("56a4"),et=a("8654"),at=Object(l["a"])(H,G,z,!1,null,"600ea194",null),it=at.exports;O()(at,{VBtn:P["a"],VCard:q["a"],VCardText:J["b"],VContainer:W["a"],VDivider:Z["a"],VSelect:K["a"],VStepper:Q["a"],VStepperContent:X["a"],VStepperHeader:Y["a"],VStepperItems:Y["b"],VStepperStep:tt["a"],VTextField:et["a"]});var nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"mt-5"},[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.submit(t.email,t.password)}}},[a("v-card-title",{staticClass:"text-center"},[t._v("Вход в Play-and-Learn")]),a("v-card-text",[a("v-text-field",{attrs:{label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{label:"Пароль",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t.errors?a("v-list",{staticClass:"error-messages"},t._l(t.errors,(function(e,i){return a("v-item",{key:i},[t._v(t._s(i)+" "+t._s(t._f("error")(e)))])})),1):t._e()],1),a("v-card-actions",{staticClass:"p-3"},[a("v-btn",{staticClass:"ml-auto d-block",attrs:{type:"submit"}},[t._v("Войти")])],1)],1)],1)],1)},st=[],rt=i["a"].extend({name:"Login",data:function(){return{email:"",password:""}},methods:{submit:function(t,e){var a=this;this.$store.dispatch(b,{email:t,password:e}).then((function(){return a.$router.push({name:"cabinet"})}))}},computed:Object(f["a"])({},Object(p["b"])({errors:function(t){return t.auth.errors}}))}),ot=rt,lt=a("4bd4"),ct=a("d903"),ut=a("8860"),dt=Object(l["a"])(ot,nt,st,!1,null,"69b047f8",null),mt=dt.exports;O()(dt,{VBtn:P["a"],VCard:q["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VContainer:W["a"],VForm:lt["a"],VItem:ct["a"],VList:ut["a"],VTextField:et["a"]});var vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-title",[t._v("Регистрация в Play-and-Learn")]),a("v-card-text",[a("v-text-field",{attrs:{label:"Email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{label:"Имя",rules:t.nameRules},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{label:"Пароль",type:"password",rules:t.passwordRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("v-card-actions",{staticClass:"p-3"},[a("v-btn",{staticClass:"ml-auto d-block",attrs:{type:"submit",disabled:!t.valid}},[t._v("Зарегистрироваться")])],1)],1)],1)],1)},ft=[],pt=(a("b0c0"),/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),ht=i["a"].extend({name:"Registration",data:function(){return{email:"",password:"",name:"",valid:!1,emailRules:[function(t){return!!t||"Обязательно"},function(t){return pt.test(t)||"Некоррекный email"}],nameRules:[function(t){return!!t||"Обязательно"}],passwordRules:[function(t){return!!t||"Обязательно"},function(t){return t.length>=8||"Слишком короткий"}]}},methods:{submit:function(){var t=this;this.$store.dispatch(g,{email:this.email,password:this.password,name:this.name}).then((function(){return t.$router.push({name:"cabinet"})}))}},computed:Object(f["a"])({},Object(p["b"])({errors:function(t){return t.auth.errors}}))}),bt=ht,xt=Object(l["a"])(bt,vt,ft,!1,null,"a559f140",null),gt=xt.exports;O()(xt,{VBtn:P["a"],VCard:q["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VContainer:W["a"],VForm:lt["a"],VTextField:et["a"]});var _t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" "+t._s(JSON.stringify(t.user))+" "),a("v-btn",{attrs:{to:"/"}},[t._v("Начать игру")])],1)},kt=[],It={name:"Cabinet",computed:Object(f["a"])({},Object(p["b"])({user:function(t){return t.auth.user}}))},wt=It,jt=Object(l["a"])(wt,_t,kt,!1,null,"f996e796",null),yt=jt.exports;O()(jt,{VBtn:P["a"]});var St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"padding-left":"56px"}},[a("v-navigation-drawer",{staticStyle:{"padding-top":"64px"},attrs:{"expand-on-hover":!0,"mini-variant":!0,right:!1,fixed:"",dark:"",permanent:""}},[a("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[a("v-list-item",{class:"px-0",attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:"https://randomuser.me/api/portraits/men/81.jpg",alt:"Avatar"}})]),a("v-list-item-content",[a("v-list-item-title",[t._v("Application")]),a("v-list-item-subtitle",[t._v("Subtext")])],1)],1),a("v-divider"),t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:""},on:{click:function(a){t.activePage=e.page}}},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)}))],2)],1),a("v-card",[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-select",{attrs:{items:t.examinations,label:"Экзамен","item-text":"title","item-value":"id"},on:{change:function(e){return t.changeActualExamination(e)}},model:{value:t.actualExamination,callback:function(e){t.actualExamination=e},expression:"actualExamination"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[t.actualExamination>0?a("v-select",{attrs:{items:t.subjects,label:"Предмет","item-text":"title","item-value":"id"},on:{change:function(e){return t.changeActualSubject(e)}},model:{value:t.actualSubject,callback:function(e){t.actualSubject=e},expression:"actualSubject"}}):t._e()],1),a("v-col",{attrs:{cols:"12",md:"4"}},[t.actualSubject>0?a("v-select",{attrs:{items:t.levels,label:"Уровень","item-text":"title","item-value":"id"},model:{value:t.actualLevel,callback:function(e){t.actualLevel=e},expression:"actualLevel"}}):t._e()],1)],1)],1)],1),a("RedactionTable",{attrs:{"active-page":t.activePage,"actual-examination":t.actualExamination,"actual-subject":t.actualSubject,"actual-level":t.actualLevel}})],1)},Vt=[],Ct=(a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers[t.activePage],items:t.items,"sort-by":"calories"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("Редактирование")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{scrollable:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},i),[t._v("Добавить элемент")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",["examinations"===t.activePage?a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Название"},model:{value:t.editedItem.title,callback:function(e){t.$set(t.editedItem,"title",e)},expression:"editedItem.title"}})],1)],1):"subjects"===t.activePage?a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Название"},model:{value:t.editedItem.title,callback:function(e){t.$set(t.editedItem,"title",e)},expression:"editedItem.title"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{attrs:{items:t.subItems,label:"Экзамен","item-text":"title","item-value":"id"},model:{value:t.editedItem.examination_id,callback:function(e){t.$set(t.editedItem,"examination_id",e)},expression:"editedItem.examination_id"}})],1)],1):"levels"===t.activePage?a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Название"},model:{value:t.editedItem.title,callback:function(e){t.$set(t.editedItem,"title",e)},expression:"editedItem.title"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{attrs:{items:t.subItems,label:"Предмет","item-text":"title","item-value":"id"},model:{value:t.editedItem.subject_id,callback:function(e){t.$set(t.editedItem,"subject_id",e)},expression:"editedItem.subject_id"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{type:"number",min:"1",step:"1",label:"Уровень"},model:{value:t.editedItem.number,callback:function(e){t.$set(t.editedItem,"number",e)},expression:"editedItem.number"}})],1)],1):"tasks"===t.activePage?a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Название"},model:{value:t.editedItem.title,callback:function(e){t.$set(t.editedItem,"title",e)},expression:"editedItem.title"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{attrs:{items:t.subItems,label:"Уровень","item-text":"title","item-value":"id"},model:{value:t.editedItem.level_id,callback:function(e){t.$set(t.editedItem,"level_id",e)},expression:"editedItem.level_id"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-textarea",{attrs:{rows:"1","auto-grow":!0,label:"Содержание"},model:{value:t.editedItem.text,callback:function(e){t.$set(t.editedItem,"text",e)},expression:"editedItem.text"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Ответ"},model:{value:t.editedItem.answer,callback:function(e){t.$set(t.editedItem,"answer",e)},expression:"editedItem.answer"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-file-input",{attrs:{label:"Изображение"},model:{value:t.editedItem.image,callback:function(e){t.$set(t.editedItem,"image",e)},expression:"editedItem.image"}})],1),"string"===typeof t.editedItem.image&&t.editedItem.image?a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("img",{staticStyle:{width:"100%"},attrs:{src:t.baseUrl+"storage/tasks/"+t.editedItem.image,alt:t.editedItem.title}})]):t._e(),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-textarea",{attrs:{rows:"1","auto-grow":!0,label:"Содержание решения"},model:{value:t.editedItem.solution_text,callback:function(e){t.$set(t.editedItem,"solution_text",e)},expression:"editedItem.solution_text"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-file-input",{attrs:{label:"Изображение решения"},model:{value:t.editedItem.solution_image,callback:function(e){t.$set(t.editedItem,"solution_image",e)},expression:"editedItem.solution_image"}})],1),"string"===typeof t.editedItem.solution_image&&t.editedItem.solution_image?a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("img",{staticStyle:{width:"100%"},attrs:{src:t.baseUrl+"storage/tasks/"+t.editedItem.solution_image,alt:t.editedItem.solution_title}})]):t._e()],1):t._e()],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Отмена")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Сохранить")])],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(i)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(i)}}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Reset")])]},proxy:!0}])})}),Tt=[],Ot=(a("c975"),a("a434"),a("b64b"),a("53ca")),$t=i["a"].extend({name:"RedactionTable",props:["active-page","actual-examination","actual-subject","actual-level"],data:function(){return{baseUrl:M,dialog:!1,headers:{examinations:[{text:"ID",align:"left",value:"id"},{text:"Название",value:"title"},{text:"Действия",value:"action",sortable:!1}],subjects:[{text:"ID",align:"left",value:"id"},{text:"Экзамен",value:"examination_id"},{text:"Название",value:"title"},{text:"Действия",value:"action",sortable:!1}],levels:[{text:"ID",align:"left",value:"id"},{text:"Предмет",value:"subject_id"},{text:"Название",value:"title"},{text:"Номер",value:"number"},{text:"Действия",value:"action",sortable:!1}],tasks:[{text:"ID",align:"left",value:"id"},{text:"Уровень",value:"level_id"},{text:"Название",value:"title"},{text:"Текст",value:"text"},{text:"Действия",value:"action",sortable:!1}]},items:[],subItems:[],editedIndex:-1,editedItem:{title:localStorage.lastTitle,examination_id:0,subject_id:0,level_id:0,text:"",solution_text:"",number:"",image:null,solution_image:null,answer:""},defaultItem:{title:"",examination_id:0,subject_id:0,level_id:0,text:"",solution_text:"",number:"",image:null,solution_image:null,answer:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Добавить":"Изменить"}},watch:{dialog:function(t){t||this.close()},activePage:function(){this.initialize()},actualExamination:function(){this.initialize()},actualSubject:function(){this.initialize()},actualLevel:function(){this.initialize()}},created:function(){this.initialize()},methods:{initialize:function(){var t=this;this.items=[],this.subItems=[];var e="";this.actualExamination>0&&-1===["examinations"].indexOf(this.activePage)&&(e="-by-examination/"+this.actualExamination),this.actualSubject>0&&-1===["examinations","subjects"].indexOf(this.activePage)&&(e="-by-subject/"+this.actualSubject),this.actualLevel>0&&-1===["examinations","subjects","levels"].indexOf(this.activePage)&&(e="-by-level/"+this.actualLevel),this.$store.dispatch(k,{url:this.activePage+e}).then((function(e){return t.items=e}));var a="";switch(this.activePage){case"subjects":a="examinations";break;case"levels":a="subjects";break;case"tasks":a="levels";break}if(a){var i="";this.actualExamination>0&&-1===["examinations"].indexOf(this.activePage)&&(i="-by-examination/"+this.actualExamination),this.actualSubject>0&&-1===["examinations","subjects"].indexOf(this.activePage)&&(i="-by-subject/"+this.actualSubject),this.$store.dispatch(k,{url:a+i}).then((function(e){return t.subItems=e}))}},editItem:function(t){this.editedIndex=this.items.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this,a=this.items.indexOf(t);confirm("Вы действительно хотите удалить этот элемент?")&&this.$store.dispatch(j,{url:this.activePage,id:t.id}).then((function(){return e.items.splice(a,1)}))},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedItem.title=localStorage.lastTitle,t.editedIndex=-1}),300)},save:function(){var t=this;localStorage.setItem("lastTitle",this.editedItem.title);for(var e=new FormData,a=0,i=Object.keys(this.editedItem);a<i.length;a++){var n=i[a];"image"===n||"solution_image"===n?"object"===Object(Ot["a"])(this.editedItem[n])&&this.editedItem[n]&&e.append(n,this.editedItem[n]):e.append(n,this.editedItem[n])}this.editedIndex>-1?this.$store.dispatch(w,{url:this.activePage,id:this.editedItem.id,body:e}).then((function(e){Object.assign(t.items[t.editedIndex],e),t.close()})):this.$store.dispatch(I,{url:this.activePage,body:e}).then((function(e){t.items.push(e),console.log(t.items),t.close()}))}}}),Et=$t,Pt=a("62ad"),At=a("8fea"),Lt=a("169a"),Rt=a("23a7"),Ft=a("0fd9"),Dt=a("a844"),Ut=a("71d9"),Gt=a("2a7f"),zt=Object(l["a"])(Et,Ct,Tt,!1,null,"34f3665e",null),Bt=zt.exports;O()(zt,{VBtn:P["a"],VCard:q["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VCol:Pt["a"],VContainer:W["a"],VDataTable:At["a"],VDialog:Lt["a"],VDivider:Z["a"],VFileInput:Rt["a"],VIcon:L["a"],VRow:Ft["a"],VSelect:K["a"],VSpacer:F["a"],VTextField:et["a"],VTextarea:Dt["a"],VToolbar:Ut["a"],VToolbarTitle:Gt["a"]});var Mt=i["a"].extend({name:"Redaction",components:{RedactionTable:Bt},data:function(){return{items:[{title:"Экзамены",page:"examinations"},{title:"Предметы",page:"subjects"},{title:"Уровни",page:"levels"},{title:"Задания",page:"tasks"}],activePage:"examinations",examinations:[],subjects:[],levels:[],actualExamination:0,actualSubject:0,actualLevel:0}},created:function(){var t=this;this.$store.dispatch(k,{url:"examinations"}).then((function(e){return t.examinations=[{title:"Не выбрано",id:0}].concat(e)}))},methods:{changeActualExamination:function(t){var e=this;this.subjects=[],this.actualSubject=0,this.actualLevel=0,this.$store.dispatch(k,{url:"subjects-by-examination/"+t}).then((function(t){return e.subjects=[{title:"Не выбрано",id:0}].concat(t)}))},changeActualSubject:function(t){var e=this;this.levels=[],this.actualLevel=0,this.$store.dispatch(k,{url:"levels-by-subject/"+t}).then((function(t){return e.levels=[{title:"Не выбрано",id:0}].concat(t)}))}}}),Nt=Mt,Ht=a("da13"),qt=a("8270"),Jt=a("5d23"),Wt=a("f774"),Zt=Object(l["a"])(Nt,St,Vt,!1,null,"dce1537e",null),Kt=Zt.exports;O()(Zt,{VCard:q["a"],VCol:Pt["a"],VContainer:W["a"],VDivider:Z["a"],VList:ut["a"],VListItem:Ht["a"],VListItemAvatar:qt["a"],VListItemContent:Jt["a"],VListItemSubtitle:Jt["b"],VListItemTitle:Jt["c"],VNavigationDrawer:Wt["a"],VRow:Ft["a"],VSelect:K["a"]}),i["a"].use(d["a"]);var Qt,Xt,Yt,te,ee=new d["a"]({mode:"history",routes:[{path:"/",component:U,children:[{path:"",name:"home",component:it},{path:"login",name:"login",component:mt},{path:"registration",name:"registration",component:gt},{path:"cabinet",name:"cabinet",component:yt},{path:"redaction",name:"redaction",component:Kt}]}]}),ae=(a("d3b7"),a("bc3a")),ie=a.n(ae),ne=a("a7fe"),se=a.n(ne),re="id_token",oe=function(){return window.localStorage.getItem(re)},le=function(t){window.localStorage.setItem(re,t)},ce=function(){window.localStorage.removeItem(re)},ue={getToken:oe,saveToken:le,destroyToken:ce},de={init:function(){i["a"].use(se.a,ie.a),i["a"].axios.defaults.baseURL=B},setHeader:function(){i["a"].axios.defaults.headers.common["Authorization"]="Bearer "+ue.getToken()},query:function(t,e){return i["a"].axios.get(t,e).catch((function(t){throw new Error("[RWV] ApiService "+t)}))},get:function(t,e){return void 0===e&&(e=""),i["a"].axios.get(t+"/"+e).catch((function(t){throw new Error("[RWV] ApiService "+t)}))},post:function(t,e){return i["a"].axios.post(""+t,e)},update:function(t,e,a){return i["a"].axios.put(t+"/"+e,a)},postUpdate:function(t,e,a){return i["a"].axios.post(t+"/"+e,a)},put:function(t,e){return i["a"].axios.put(""+t,e)},delete:function(t){return i["a"].axios.delete(t).catch((function(t){throw new Error("[RWV] ApiService "+t)}))}},me=de,ve="logOut",fe="setUser",pe="setError",he={errors:null,user:{},isAuthenticated:!!ue.getToken()},be={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}},xe=(Qt={},Qt[b]=function(t,e){return new Promise((function(a){me.post("sign-in",e).then((function(e){var i=e.data;t.commit(fe,i.user),ue.saveToken(i.token),me.setHeader(),a(i)})).catch((function(e){var a=e.response;t.commit(pe,a.data.errors)}))}))},Qt[x]=function(t){t.commit(ve)},Qt[g]=function(t,e){return new Promise((function(a,i){me.post("sign-up",e).then((function(e){var i=e.data;t.commit(fe,i.user),ue.saveToken(i.token),me.setHeader(),a(i)})).catch((function(e){var a=e.response;t.commit(pe,a.data.errors),i(a)}))}))},Qt[h]=function(t){ue.getToken()?(me.setHeader(),me.query("user",{}).then((function(e){var a=e.data;t.commit(fe,a.user)})).catch((function(e){var a=e.response;t.commit(pe,a.data.errors)}))):t.commit(ve)},Qt[_]=function(t,e){var a=e.email,i=e.password,n={email:a,name:name};return i&&(n.password=i),me.put("user",n).then((function(e){var a=e.data;return t.commit(fe,a.user),a}))},Qt),ge=(Xt={},Xt[pe]=function(t,e){t.errors=e},Xt[fe]=function(t,e){t.isAuthenticated=!0,t.user=e,t.errors={}},Xt[ve]=function(t){t.isAuthenticated=!1,t.user={},t.errors={},ue.destroyToken()},Xt),_e={state:he,actions:xe,mutations:ge,getters:be},ke=(a("25f0"),Yt={},Yt[k]=function(t,e){return new Promise((function(t){me.query(e.url,{}).then((function(e){var a=e.data;t(a)}))}))},Yt[I]=function(t,e){return new Promise((function(t){me.post(e.url,e.body).then((function(e){var a=e.data;t(a)}))}))},Yt[w]=function(t,e){return new Promise((function(t){me.postUpdate(e.url,e.id.toString(),e.body).then((function(e){var a=e.data;t(a)}))}))},Yt[j]=function(t,e){return new Promise((function(t){me.delete(e.url+"/"+e.id).then((function(e){var a=e.data;t(a)}))}))},Yt),Ie={actions:ke},we=(te={},te[y]=function(t,e){return new Promise((function(t){me.get("game/subjects-by-examination",e.examinationId.toString()).then((function(e){var a=e.data;t(a)}))}))},te[S]=function(t,e){return new Promise((function(t){me.get("game/levels-by-subject",e.subjectId.toString()).then((function(e){var a=e.data;t(a)}))}))},te),je={actions:we};i["a"].use(p["a"]);var ye=new p["a"].Store({modules:{auth:_e,redaction:Ie,game:je}}),Se=a("9483");Object(Se["a"])("/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Ve=a("f309");i["a"].use(Ve["a"]);var Ce=new Ve["a"]({});i["a"].config.productionTip=!1,me.init(),new i["a"]({router:ee,vuetify:Ce,store:ye,render:function(t){return t(u)}}).$mount("#app")}});
//# sourceMappingURL=app.240d981e.js.map