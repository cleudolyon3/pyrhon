(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7c715ca"],{"871a":function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"e",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return c}));var o=n("b775");function i(){return Object(o["a"])({url:"/periodo/getPeriodo",method:"get"})}function r(){return Object(o["a"])({url:"/periodo/getTodosPeriodo",method:"get"})}function a(t){return Object(o["a"])({url:"/periodo/getRenovarPeriodo/".concat(t),method:"get"})}function s(){return Object(o["a"])({url:"/periodo/acessPeriodo",method:"get"})}function c(t){return Object(o["a"])({url:"/periodo/getByIdPeriodo/".concat(t),method:"get"})}},bc67:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("Alunos Transferidos ")])]),t._v(" "),n("el-tabs",{attrs:{type:"border-card"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.ano,(function(e){return n("el-tab-pane",{key:e.id,attrs:{label:e.tipo,name:e}},[n("el-select",{attrs:{placeholder:"Escolha o Ensino",filterable:""},model:{value:t.ensino,callback:function(e){t.ensino=e},expression:"ensino"}},t._l(t.ensinos,(function(t){return n("el-option",{key:t.id,attrs:{label:t.tipo,value:t.id}})})),1),t._v(" "),t.ensino?n("editor",{attrs:{periodo:e.id,ensino:t.ensino}}):t._e()],1)})),1)],1)],1)},i=[],r=n("871a"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"createPost-container"},[n("el-form",{ref:"dataForm",attrs:{rules:t.rules,model:t.tarefaLocal}},[n("el-form-item",[n("ckeditor",{attrs:{config:t.editorConfig},model:{value:t.editorData,callback:function(e){t.editorData=e},expression:"editorData"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"success"},on:{click:function(e){return t.createData()}}},[n("i",{staticClass:"el-icon-plus"}),t._v(" Salvar\n    ")])],1)],1)},s=[],c=n("db72"),d=n("b775");function u(t,e){return Object(d["a"])({url:"/contrato/getTermo/".concat(t,"/").concat(e),method:"get"})}function l(t){return Object(d["a"])({url:"/contrato/adicionarTermo",method:"post",data:t})}var f=n("2f62"),b=n("e350"),p={name:"TarefaResposta",props:{tarefa:{type:Object,default:void 0},idPessoa:{type:String,default:void 0},id:{type:String,default:void 0},observacao:{type:String,default:void 0},ensino:{type:Boolean,default:void 0},periodo:{type:String,default:void 0}},data:function(){return{list:null,link:null,editorData:"",editorConfig:{extraPlugins:"colorbutton,colordialog,font",language:"pt",disableNativeSpellChecker:!1}}},watch:{idPeriodo:function(t){this.exibirTermo()},ensino:function(t){this.exibirTermo()}},created:function(){this.exibirTermo()},computed:Object(c["a"])({},Object(f["c"])(["rede","idEscola"])),methods:{checkPermission:b["a"],exibirTermo:function(){var t=this;u(this.ensino,this.periodo).then((function(e){t.editorData=e.data.termo,t.id=e.data.id}))},createData:function(){var t=this,e={periodo:this.periodo,ensino:this.ensino,observacao:this.editorData,id:this.id};l(e).then((function(e){t.$notify({title:"Sucesso",message:"Adicionado com sucesso",type:"success",duration:2e3})}))}}},v=p,h=n("2877"),m=Object(h["a"])(v,a,s,!1,null,null,null),g=m.exports,y=n("db40"),j={components:{editor:g},props:{pessoa:{type:String,default:void 0},idPessoa:{type:String,default:void 0},id:{type:String,default:void 0},ensino:{type:String,default:void 0},ensinos:{type:Array,default:void 0},ano:{type:Array,default:void 0},active:{type:String,default:void 0}},data:function(){return{dialogFormVisible:!1}},created:function(){this.exibirAno(),this.exibirEnsino()},methods:{exibirAno:function(){var t=this;Object(r["d"])().then((function(e){t.ano=e.data}))},exibirEnsino:function(){var t=this;Object(y["c"])().then((function(e){t.ensinos=e.data}))}}},O=j,x=Object(h["a"])(O,o,i,!1,null,null,null);e["default"]=x.exports},db40:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"e",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"d",(function(){return c}));var o=n("b775");function i(){return Object(o["a"])({url:"/ensino/acessoEnsino",method:"get"})}function r(){return Object(o["a"])({url:"/ensino/acessoEnsino",method:"get"})}function a(){return Object(o["a"])({url:"/ensino/getAberto",method:"get"})}function s(){return Object(o["a"])({url:"/ensino/acessoEnsinoSerie",method:"get"})}function c(t){return Object(o["a"])({url:"/ensino/getEnsino/".concat(t),method:"get"})}},e350:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("6762"),n("2fdb");var o=n("4360");function i(t){if(t&&t instanceof Array&&t.length>0){var e=o["a"].getters&&o["a"].getters.roles,n=t,i=e.some((function(t){return n.includes(t)}));return!!i}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}}}]);