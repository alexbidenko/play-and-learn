(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],u=0,m=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},r=[],s=n["a"].extend({name:"App",components:{},data:function(){return{}}}),o=s,l=a("2877"),c=Object(l["a"])(o,i,r,!1,null,null,null),d=c.exports,u=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{staticStyle:{"z-index":"1000"},attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-btn",{staticClass:"mr-2",attrs:{to:"/",icon:""}},[a("v-img",{staticClass:"shrink",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}})],1),a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer"),t.isAuthenticated?t._e():a("v-btn",{attrs:{to:"/registration",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Регистрация")])]),t.isAuthenticated?t._e():a("v-btn",{attrs:{to:"/login",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Вход")]),a("v-icon",[t._v("mdi-open-in-new")])],1),t.isAuthenticated?a("v-btn",{attrs:{to:"/cabinet",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Кабинет")])]):t._e(),t.isAuthenticated?a("v-btn",{attrs:{to:"/redaction",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Редактировать")])]):t._e()],1),a("v-content",[a("router-view")],1)],1)},v=[],p=a("9ab4"),f=a("2f62"),b="checkAuth",h="login",x="logout",g="register",_="updateUser",I="getItems",w="addItem",k="updateItem",y="deleteItem",V=n["a"].extend({name:"Home",created:function(){this.$store.dispatch(b).then((function(){}))},computed:Object(p["a"])(Object(p["a"])({},Object(f["b"])({user:function(t){return t.auth.user}})),{isAuthenticated:function(){return this.user&&JSON.stringify(this.user).length>2}})}),j=V,C=a("6544"),S=a.n(C),O=a("7496"),T=a("40dc"),$=a("8336"),A=a("a75b"),P=a("132d"),R=a("adda"),E=a("2fa4"),D=Object(l["a"])(j,m,v,!1,null,"3e1063dc",null),L=D.exports;S()(D,{VApp:O["a"],VAppBar:T["a"],VBtn:$["a"],VContent:A["a"],VIcon:P["a"],VImg:R["a"],VSpacer:E["a"]});var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h1",[t._v("Let's start your game")]),a("v-stepper",{model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[[a("v-stepper-header",[t._l([t.minSteps,t.minSteps+1,t.minSteps+2],(function(e){return[a("v-stepper-step",{key:e+"-step",attrs:{complete:t.e1>e,step:e,editable:!1}},[t._v(" Step "+t._s(e)+" ")]),a("v-divider",{key:e})]}))],2),a("v-stepper-items",t._l([t.minSteps,t.minSteps+1,t.minSteps+2],(function(e){return a("v-stepper-content",{key:e+"-content",attrs:{step:e}},[a("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}}),a("v-btn",{attrs:{color:"primary"},on:{click:function(a){return t.nextStep(e)}}},[t._v(" Continue ")]),a("v-btn",{attrs:{text:""}},[t._v("Cancel")])],1)})),1)]],2)],1)},F=[],z=n["a"].extend({name:"Game",data:function(){return{e1:1,minSteps:1}},methods:{nextStep:function(t){this.e1=t+1,this.e1>2&&(this.minSteps=this.minSteps+1)}}}),U=z,N=a("b0af"),q=a("a523"),H=a("ce7e"),J=a("7e85"),M=a("e516"),W=a("9c54"),Z=a("56a4"),G=Object(l["a"])(U,B,F,!1,null,"20e1dcc6",null),K=G.exports;S()(G,{VBtn:$["a"],VCard:N["a"],VContainer:q["a"],VDivider:H["a"],VStepper:J["a"],VStepperContent:M["a"],VStepperHeader:W["a"],VStepperItems:W["b"],VStepperStep:Z["a"]});var Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"mt-5"},[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.submit(t.email,t.password)}}},[a("v-card-title",{staticClass:"text-center"},[t._v("Вход в Play-and-Learn")]),a("v-card-text",[a("v-text-field",{attrs:{label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{label:"Пароль"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t.errors?a("v-list",{staticClass:"error-messages"},t._l(t.errors,(function(e,n){return a("v-item",{key:n},[t._v(t._s(n)+" "+t._s(t._f("error")(e)))])})),1):t._e()],1),a("v-card-actions",{staticClass:"p-3"},[a("v-btn",{staticClass:"ml-auto d-block",attrs:{type:"submit"}},[t._v("Войти")])],1)],1)],1)],1)},X=[],Y=n["a"].extend({name:"Login",data:function(){return{email:"",password:""}},methods:{submit:function(t,e){var a=this;this.$store.dispatch(h,{email:t,password:e}).then((function(){return a.$router.push({name:"cabinet"})}))}},computed:Object(p["a"])({},Object(f["b"])({errors:function(t){return t.auth.errors}}))}),tt=Y,et=a("99d9"),at=a("4bd4"),nt=a("d903"),it=a("8860"),rt=a("8654"),st=Object(l["a"])(tt,Q,X,!1,null,"57e77ae0",null),ot=st.exports;S()(st,{VBtn:$["a"],VCard:N["a"],VCardActions:et["a"],VCardText:et["b"],VCardTitle:et["c"],VContainer:q["a"],VForm:at["a"],VItem:nt["a"],VList:it["a"],VTextField:rt["a"]});var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-title",[t._v("Регистрация в Play-and-Learn")]),a("v-card-text",[a("v-text-field",{attrs:{label:"Email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{label:"Имя",rules:t.nameRules},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{label:"Пароль",rules:t.passwordRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("v-card-actions",{staticClass:"p-3"},[a("v-btn",{staticClass:"ml-auto d-block",attrs:{type:"submit",disabled:!t.valid}},[t._v("Зарегистрироваться")])],1)],1)],1)],1)},ct=[],dt=(a("b0c0"),/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),ut=n["a"].extend({name:"Registration",data:function(){return{email:"",password:"",name:"",valid:!1,emailRules:[function(t){return!!t||"Обязательно"},function(t){return dt.test(t)||"Некоррекный email"}],nameRules:[function(t){return!!t||"Обязательно"}],passwordRules:[function(t){return!!t||"Обязательно"},function(t){return t.length>=8||"Слишком короткий"}]}},methods:{submit:function(){var t=this;this.$store.dispatch(g,{email:this.email,password:this.password,name:this.name}).then((function(){return t.$router.push({name:"cabinet"})}))}},computed:Object(p["a"])({},Object(f["b"])({errors:function(t){return t.auth.errors}}))}),mt=ut,vt=Object(l["a"])(mt,lt,ct,!1,null,"1bfa2010",null),pt=vt.exports;S()(vt,{VBtn:$["a"],VCard:N["a"],VCardActions:et["a"],VCardText:et["b"],VCardTitle:et["c"],VContainer:q["a"],VForm:at["a"],VTextField:rt["a"]});var ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" "+t._s(JSON.stringify(t.user))+" "),a("v-btn",{attrs:{to:"/"}},[t._v("Начать игру")])],1)},bt=[],ht={name:"Cabinet",computed:Object(p["a"])({},Object(f["b"])({user:function(t){return t.auth.user}}))},xt=ht,gt=Object(l["a"])(xt,ft,bt,!1,null,"f996e796",null),_t=gt.exports;S()(gt,{VBtn:$["a"]});var It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"padding-left":"56px"}},[a("v-navigation-drawer",{staticStyle:{"padding-top":"64px"},attrs:{"expand-on-hover":!0,"mini-variant":!0,right:!1,fixed:"",dark:"",permanent:""}},[a("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[a("v-list-item",{class:"px-0",attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:"https://randomuser.me/api/portraits/men/81.jpg",alt:"Avatar"}})]),a("v-list-item-content",[a("v-list-item-title",[t._v("Application")]),a("v-list-item-subtitle",[t._v("Subtext")])],1)],1),a("v-divider"),t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:""},on:{click:function(a){t.activePage=e.page}}},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)}))],2)],1),a("RedactionTable",{attrs:{"active-page":t.activePage}})],1)},wt=[],kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers[t.activePage],items:t.items,"sort-by":"calories"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("Редактирование")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},n),[t._v("Добавить элемент")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",["examinations"===t.activePage?a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Название"},model:{value:t.editedItem.title,callback:function(e){t.$set(t.editedItem,"title",e)},expression:"editedItem.title"}})],1)],1):"subjects"===t.activePage?a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Название"},model:{value:t.editedItem.title,callback:function(e){t.$set(t.editedItem,"title",e)},expression:"editedItem.title"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{attrs:{items:t.subItems,label:"Экзамен","item-text":"title","item-value":"id"},model:{value:t.editedItem.examination_id,callback:function(e){t.$set(t.editedItem,"examination_id",e)},expression:"editedItem.examination_id"}})],1)],1):"levels"===t.activePage?a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Название"},model:{value:t.editedItem.title,callback:function(e){t.$set(t.editedItem,"title",e)},expression:"editedItem.title"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{attrs:{items:t.subItems,label:"Предмет","item-text":"title","item-value":"id"},model:{value:t.editedItem.subject_id,callback:function(e){t.$set(t.editedItem,"subject_id",e)},expression:"editedItem.subject_id"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{type:"number",min:"1",step:"1",label:"Уровень"},model:{value:t.editedItem.number,callback:function(e){t.$set(t.editedItem,"number",e)},expression:"editedItem.number"}})],1)],1):"tasks"===t.activePage?a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Название"},model:{value:t.editedItem.title,callback:function(e){t.$set(t.editedItem,"title",e)},expression:"editedItem.title"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{attrs:{items:t.subItems,label:"Уровень","item-text":"title","item-value":"id"},model:{value:t.editedItem.level_id,callback:function(e){t.$set(t.editedItem,"level_id",e)},expression:"editedItem.level_id"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-textarea",{attrs:{rows:"1","auto-grow":!0,label:"Содержание"},model:{value:t.editedItem.text,callback:function(e){t.$set(t.editedItem,"text",e)},expression:"editedItem.text"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-file-input",{attrs:{label:"Изображение"},model:{value:t.editedItem.image,callback:function(e){t.$set(t.editedItem,"image",e)},expression:"editedItem.image"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Ответ"},model:{value:t.editedItem.answer,callback:function(e){t.$set(t.editedItem,"answer",e)},expression:"editedItem.answer"}})],1),"string"===typeof t.editedItem.image&&t.editedItem.image?a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("img",{staticStyle:{width:"100%"},attrs:{src:t.baseUrl+"storage/tasks/"+t.editedItem.image,alt:t.editedItem.title}})]):t._e()],1):t._e()],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var n=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(n)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(n)}}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Reset")])]},proxy:!0}])})},yt=[],Vt=(a("c975"),a("a434"),a("b64b"),a("53ca")),jt="https://play-and-learn.admire.social/api",Ct="https://play-and-learn.admire.social/",St=n["a"].extend({name:"RedactionTable",props:["active-page"],data:function(){return{baseUrl:Ct,dialog:!1,headers:{examinations:[{text:"ID",align:"left",value:"id"},{text:"Название",value:"title"},{text:"Действия",value:"action",sortable:!1}],subjects:[{text:"ID",align:"left",value:"id"},{text:"Экзамен",value:"examination_id"},{text:"Название",value:"title"},{text:"Действия",value:"action",sortable:!1}],levels:[{text:"ID",align:"left",value:"id"},{text:"Предмет",value:"subject_id"},{text:"Название",value:"title"},{text:"Номер",value:"number"},{text:"Действия",value:"action",sortable:!1}],tasks:[{text:"ID",align:"left",value:"id"},{text:"Предмет",value:"level_id"},{text:"Название",value:"title"},{text:"Текст",value:"text"},{text:"Действия",value:"action",sortable:!1}]},items:[],subItems:[],editedIndex:-1,editedItem:{title:"",examination_id:0,subject_id:0,level_id:0,text:"",number:"",image:null,answer:""},defaultItem:{title:"",examination_id:0,subject_id:0,level_id:0,text:"",number:"",image:null,answer:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Добавить":"Изменить"}},watch:{dialog:function(t){t||this.close()},activePage:function(){this.initialize()}},created:function(){this.initialize()},methods:{initialize:function(){var t=this;this.items=[],this.subItems=[],this.$store.dispatch(I,{url:this.activePage}).then((function(e){return t.items=e}));var e="";switch(this.activePage){case"subjects":e="examinations";break;case"levels":e="subjects";break;case"tasks":e="levels";break}e&&this.$store.dispatch(I,{url:e}).then((function(e){return t.subItems=e}))},editItem:function(t){this.editedIndex=this.items.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this,a=this.items.indexOf(t);confirm("Вы действительно хотите удалить этот элемент?")&&this.$store.dispatch(y,{url:this.activePage,id:t.id}).then((function(){return e.items.splice(a,1)}))},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},save:function(){for(var t=this,e=new FormData,a=0,n=Object.keys(this.editedItem);a<n.length;a++){var i=n[a];"image"===i?"object"===Object(Vt["a"])(this.editedItem[i])&&this.editedItem[i]&&e.append(i,this.editedItem[i]):e.append(i,this.editedItem[i])}this.editedIndex>-1?this.$store.dispatch(k,{url:this.activePage,id:this.editedItem.id,body:e}).then((function(e){Object.assign(t.items[t.editedIndex],e),t.close()})):this.$store.dispatch(w,{url:this.activePage,body:e}).then((function(e){t.items.push(e),t.close()}))}}}),Ot=St,Tt=a("62ad"),$t=a("8fea"),At=a("169a"),Pt=a("23a7"),Rt=a("0fd9"),Et=a("b974"),Dt=a("a844"),Lt=a("71d9"),Bt=a("2a7f"),Ft=Object(l["a"])(Ot,kt,yt,!1,null,"06d7ca05",null),zt=Ft.exports;S()(Ft,{VBtn:$["a"],VCard:N["a"],VCardActions:et["a"],VCardText:et["b"],VCardTitle:et["c"],VCol:Tt["a"],VContainer:q["a"],VDataTable:$t["a"],VDialog:At["a"],VDivider:H["a"],VFileInput:Pt["a"],VIcon:P["a"],VRow:Rt["a"],VSelect:Et["a"],VSpacer:E["a"],VTextField:rt["a"],VTextarea:Dt["a"],VToolbar:Lt["a"],VToolbarTitle:Bt["a"]});var Ut={name:"Redaction",components:{RedactionTable:zt},data:function(){return{items:[{title:"Экзамены",page:"examinations"},{title:"Предметы",page:"subjects"},{title:"Уровни",page:"levels"},{title:"Задания",page:"tasks"}],activePage:"examinations"}}},Nt=Ut,qt=a("da13"),Ht=a("8270"),Jt=a("5d23"),Mt=a("f774"),Wt=Object(l["a"])(Nt,It,wt,!1,null,"431ffc58",null),Zt=Wt.exports;S()(Wt,{VDivider:H["a"],VList:it["a"],VListItem:qt["a"],VListItemAvatar:Ht["a"],VListItemContent:Jt["a"],VListItemSubtitle:Jt["b"],VListItemTitle:Jt["c"],VNavigationDrawer:Mt["a"]}),n["a"].use(u["a"]);var Gt,Kt,Qt,Xt=new u["a"]({mode:"history",routes:[{path:"/",component:L,children:[{path:"",name:"home",component:K},{path:"login",name:"login",component:ot},{path:"registration",name:"registration",component:pt},{path:"cabinet",name:"cabinet",component:_t},{path:"redaction",name:"redaction",component:Zt}]}]}),Yt=(a("d3b7"),a("bc3a")),te=a.n(Yt),ee=a("a7fe"),ae=a.n(ee),ne="id_token",ie=function(){return window.localStorage.getItem(ne)},re=function(t){window.localStorage.setItem(ne,t)},se=function(){window.localStorage.removeItem(ne)},oe={getToken:ie,saveToken:re,destroyToken:se},le={init:function(){n["a"].use(ae.a,te.a),n["a"].axios.defaults.baseURL=jt},setHeader:function(){n["a"].axios.defaults.headers.common["Authorization"]="Bearer "+oe.getToken()},query:function(t,e){return n["a"].axios.get(t,e).catch((function(t){throw new Error("[RWV] ApiService "+t)}))},get:function(t,e){return void 0===e&&(e=""),n["a"].axios.get(t+"/"+e).catch((function(t){throw new Error("[RWV] ApiService "+t)}))},post:function(t,e){return n["a"].axios.post(""+t,e)},update:function(t,e,a){return n["a"].axios.put(t+"/"+e,a)},postUpdate:function(t,e,a){return n["a"].axios.post(t+"/"+e,a)},put:function(t,e){return n["a"].axios.put(""+t,e)},delete:function(t){return n["a"].axios.delete(t).catch((function(t){throw new Error("[RWV] ApiService "+t)}))}},ce=le,de="logOut",ue="setUser",me="setError",ve={errors:null,user:{},isAuthenticated:!!oe.getToken()},pe={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}},fe=(Gt={},Gt[h]=function(t,e){return new Promise((function(a){ce.post("sign-in",e).then((function(e){var n=e.data;t.commit(ue,n.user),oe.saveToken(n.token),a(n)})).catch((function(e){var a=e.response;t.commit(me,a.data.errors)}))}))},Gt[x]=function(t){t.commit(de)},Gt[g]=function(t,e){return new Promise((function(a,n){ce.post("sign-up",e).then((function(e){var n=e.data;t.commit(ue,n.user),oe.saveToken(n.token),a(n)})).catch((function(e){var a=e.response;t.commit(me,a.data.errors),n(a)}))}))},Gt[b]=function(t){oe.getToken()?(ce.setHeader(),ce.query("user",{}).then((function(e){var a=e.data;t.commit(ue,a.user)})).catch((function(e){var a=e.response;t.commit(me,a.data.errors)}))):t.commit(de)},Gt[_]=function(t,e){var a=e.email,n=e.username,i=e.password,r=e.image,s=e.bio,o={email:a,username:n,bio:s,image:r};return i&&(o.password=i),ce.put("user",o).then((function(e){var a=e.data;return t.commit(ue,a.user),a}))},Gt),be=(Kt={},Kt[me]=function(t,e){t.errors=e},Kt[ue]=function(t,e){t.isAuthenticated=!0,t.user=e,t.errors={}},Kt[de]=function(t){t.isAuthenticated=!1,t.user={},t.errors={},oe.destroyToken()},Kt),he={state:ve,actions:fe,mutations:be,getters:pe},xe=(a("25f0"),Qt={},Qt[I]=function(t,e){return new Promise((function(t){ce.query(e.url,{}).then((function(e){var a=e.data;t(a)}))}))},Qt[w]=function(t,e){return new Promise((function(t){ce.post(e.url,e.body).then((function(e){var a=e.data;t(a)}))}))},Qt[k]=function(t,e){return new Promise((function(t){ce.postUpdate(e.url,e.id.toString(),e.body).then((function(e){var a=e.data;t(a)}))}))},Qt[y]=function(t,e){return new Promise((function(t){ce.delete(e.url+"/"+e.id).then((function(e){var a=e.data;t(a)}))}))},Qt),ge={actions:xe};n["a"].use(f["a"]);var _e=new f["a"].Store({modules:{auth:he,redaction:ge}}),Ie=a("9483");Object(Ie["a"])("/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var we=a("f309");n["a"].use(we["a"]);var ke=new we["a"]({});n["a"].config.productionTip=!1,ce.init(),new n["a"]({router:Xt,vuetify:ke,store:_e,render:function(t){return t(d)}}).$mount("#app")}});
//# sourceMappingURL=app.1f068676.js.map