(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cb35ddc"],{"0ef3":function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"d",(function(){return r})),a.d(e,"e",(function(){return o})),a.d(e,"b",(function(){return s})),a.d(e,"f",(function(){return c})),a.d(e,"y",(function(){return u})),a.d(e,"r",(function(){return l})),a.d(e,"p",(function(){return d})),a.d(e,"q",(function(){return m})),a.d(e,"o",(function(){return f})),a.d(e,"n",(function(){return h})),a.d(e,"h",(function(){return p})),a.d(e,"m",(function(){return b})),a.d(e,"t",(function(){return g})),a.d(e,"v",(function(){return v})),a.d(e,"x",(function(){return _})),a.d(e,"s",(function(){return y})),a.d(e,"w",(function(){return O})),a.d(e,"l",(function(){return j})),a.d(e,"g",(function(){return T})),a.d(e,"A",(function(){return k})),a.d(e,"u",(function(){return M})),a.d(e,"i",(function(){return C})),a.d(e,"z",(function(){return A})),a.d(e,"k",(function(){return D})),a.d(e,"a",(function(){return S})),a.d(e,"j",(function(){return q}));var i=a("b775");function n(t){return Object(i["a"])({url:"/turma/acessoTurmaTarefa",method:"get",params:t})}function r(t){return Object(i["a"])({url:"/turma/acessoTurmaAberta",method:"get",params:t})}function o(t){return Object(i["a"])({url:"/turma/acessoPeriodoTurmaTarefa",method:"get",params:t})}function s(t){return Object(i["a"])({url:"/turma/acessoChildrenTurmaTarefa",method:"get",params:t})}function c(t){return Object(i["a"])({url:"/turma/acessoProfessorTurma/".concat(t),method:"get"})}function u(t,e){return Object(i["a"])({url:"/turma/turmaPeriodoTurno/".concat(t,"/").concat(e),method:"get"})}function l(t,e){return Object(i["a"])({url:"/matricula/verificarTrocarTurma/".concat(t,"/").concat(e),method:"get"})}function d(t,e,a){return Object(i["a"])({url:"/turma/getByMatricula/".concat(t,"/").concat(e,"/").concat(a),method:"get"})}function m(t,e){return Object(i["a"])({url:"/turma/getByRemanejarMatricula/".concat(t,"/").concat(e),method:"get"})}function f(t){return Object(i["a"])({url:"/turma/getByDetalhamento/".concat(t),method:"get"})}function h(t){return Object(i["a"])({url:"/turma/inforTurma/".concat(t),method:"get"})}function p(t){return Object(i["a"])({url:"/turma/alunosTransferidoCursandoTrimestreTurma/".concat(t),method:"get"})}function b(t){return Object(i["a"])({url:"/turma/infor/".concat(t),method:"get"})}function g(t){return Object(i["a"])({url:"/turma/inforMmm/".concat(t),method:"get"})}function v(t){return Object(i["a"])({url:"/turma/serieTurmaPeriodo/".concat(t),method:"get"})}function _(t){return Object(i["a"])({url:"/turma/turmaPeriodo/".concat(t),method:"get"})}function y(t){return Object(i["a"])({url:"/turma/getTurma/".concat(t),method:"get"})}function O(t){return Object(i["a"])({url:"/turma/turmaChildrenDisciplina/".concat(t),method:"get"})}function j(t){return Object(i["a"])({url:"/turma/getByDetalhe/".concat(t),method:"get"})}function T(t){return Object(i["a"])({url:"/turma/adicionar",method:"post",data:t})}function k(t){return Object(i["a"])({url:"/turma/vincular",method:"post",data:t})}function M(t){return Object(i["a"])({url:"/turma/adicionarDecreto",method:"post",data:t})}function C(t){return Object(i["a"])({url:"/turma/base",method:"post",data:t})}function A(t){return Object(i["a"])({url:"/turma/editar/",method:"put",data:t})}function D(t){return Object(i["a"])({url:"/turma/fechar",method:"put",data:t})}function S(t){return Object(i["a"])({url:"/turma/abrir",method:"put",data:t})}function q(t,e){return Object(i["a"])({url:"/turma/excluir/".concat(t),method:"get",data:e})}},1490:function(t,e,a){},"1a22":function(t,e,a){"use strict";a.r(e);var i,n,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{margin:"1em"}},[a("loading",{attrs:{active:t.listLoading,"is-full-page":t.fullPage,loader:t.loader}}),t._v(" "),a("el-radio-group",{staticStyle:{"margin-bottom":"10px"},attrs:{size:"mini"},model:{value:t.tabPosition,callback:function(e){t.tabPosition=e},expression:"tabPosition"}},[a("el-radio-button",{attrs:{label:"right"}},[a("i",{staticClass:"el-icon-right"})]),t._v(" "),a("el-radio-button",{attrs:{label:"top"}},[a("i",{staticClass:"el-icon-top"})]),t._v(" "),a("el-radio-button",{attrs:{label:"bottom"}},[a("i",{staticClass:"el-icon-bottom"})]),t._v(" "),a("el-radio-button",{attrs:{label:"left"}},[a("i",{staticClass:"el-icon-back"})])],1),t._v(" "),a("turma",{attrs:{turma:t.id}}),t._v(" "),"0"===t.activeName?a("menssage",{attrs:{menssagem:"Escolha uma disciplina para continuar."}}):t._e(),t._v(" "),a("el-tabs",{attrs:{"tab-position":t.tabPosition},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.tabMapOptions,(function(e){return a("el-tab-pane",{key:e.idDisciplina,attrs:{label:e.disciplina,name:e.idDisciplina}},[e.idDisciplina===t.idDisciplina?a("div",[a("keep-alive",[a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{card:""},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[a("b-tab",{attrs:{title:"Mensal"}},[t.tabIndex?t._e():a("div",[e.idDisciplina===t.idDisciplina?a("frequencia",{attrs:{idDisciplina:t.idDisciplina,idTurma:t.id},on:{mes:t.mesEscolhido}}):t._e()],1)]),t._v(" "),a("b-tab",{attrs:{title:"Anual",active:""}},[1==t.tabIndex?a("div",[e.idDisciplina===t.idDisciplina?a("frequenciaMesAnual",{attrs:{category:t.category,idDisciplina:t.idDisciplina,idTurma:t.id},on:{mes:t.mesEscolhido}}):t._e()],1):t._e()]),t._v(" "),a("b-tab",{attrs:{title:"Movimentação da Turma"}},[3==t.tabIndex?a("div",[a("el-alert",{attrs:{title:"Alunos transferidos,trocou de turma e série, desistentes e qualquer outra movimentaçao ou situaçao final.",type:"warning"}}),t._v(" "),e.idDisciplina===t.idDisciplina?a("frequenciaMesAnualTransferido",{attrs:{idDisciplina:t.idDisciplina,idTurma:t.id},on:{mes:t.mesEscolhidoRecuperacao}}):t._e()],1):t._e()])],1)],1)],1)],1):t._e()])})),1)],1)},o=[],s=(a("96cf"),a("3b8d")),c=a("db72"),u=a("bd86"),l=a("861ab"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("loading",{attrs:{active:t.listLoading,"is-full-page":t.fullPage,loader:t.loader}}),t._v(" "),a("div",[a("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal"}},[a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{icon:"el-icon-arrow-left"},on:{click:t.decrement}},[t._v("Voltar Mês")])],1),t._v(" "),a("el-col",{attrs:{span:17}},[a("span",[a("div",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.currentMonth)+"-"+t._s(t.listDisciplina)+"-"+t._s(t.listTurma))])])]),t._v(" "),a("el-col",{attrs:{span:1}},[a("div",[a("el-button",{on:{click:t.increment}},[t._v("Próximo Mês"),a("i",{staticClass:"el-icon-arrow-right"})])],1)])],1),t._v(" "),a("div",[a("div",{staticClass:"mb-2"},[a("b-form-checkbox",{attrs:{inline:""},model:{value:t.stickyHeader,callback:function(e){t.stickyHeader=e},expression:"stickyHeader"}},[t._v("Rolagem da lista")]),t._v(" "),a("b-form-checkbox",{attrs:{inline:""},model:{value:t.noCollapse,callback:function(e){t.noCollapse=e},expression:"noCollapse"}},[t._v("Borda")])],1),t._v(" "),a("b-table",{attrs:{"sticky-header":t.stickyHeader,"no-border-collapse":t.noCollapse,responsive:"","no-sort-reset":!0,striped:"",hover:"",items:t.listFrequencias,fields:t.listColunas},scopedSlots:t._u([t._l(t.listColunas,(function(e){return{key:t.toCellName(e),fn:function(i){return["2"===i.item[e.key]||"3"===i.item[e.key]?a("div",[a("div",[a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"A atestado ou J Justificada"+i.item.name+" Dia"+e.label+" A"+e.aula,size:"sm",variant:"primary"}},[t._v("  "+t._s("2"===i.item[e.key]?"A":"J"))])],1)]):a("div",[a("div",[a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:i.item.name+" Dia"+e.label+" A"+e.aula,size:"sm",variant:i.item[e.key]?"danger":"outline-success"},on:{click:function(a){return t.toggleChecked(i,e,i.item[e.key])}}},[t._v(" "+t._s(i.item[e.key]?"F":"P"))])],1)])]}}}))],null,!0)})],1)],1)],1)},m=[],f=a("c1df"),h=a.n(f),p=(a("202f"),a("2f62")),b=a("f6e5"),g="LISTAR_FREQUENCIA",v="EDITAR_FREQUENCIA",_="TOTAL_FREQUENCIA",y="LISTAR_COLUNA",O="LISTAR_MESES",j="LISTAR_MES_ATUAL",T="LISTAR_TURMA",k="LISTAR_DISCIPLINA",M="IS_LOADING",C={lancarFalta:function(t,e){var a=t.commit,i=e.frequencia;return Object(b["d"])(i).then((function(t){return a(v,{frequencia:t.data})})).catch((function(t){reject(t)}))},lancarFaltaDia:function(t,e){var a=t.commit,i=e.frequencia;return Object(b["e"])(i).then((function(t){return a(v,{frequencia:t.data})})).catch((function(t){reject(t)}))},listarFrequencia:function(t,e){var a=t.commit,i=t.dispatch;return a(M,{loading:!0}),i("resetarFrequencia"),new Promise((function(t,i){Object(b["a"])(e).then((function(e){var i=e.data,n=e.dataFrequencia,r=e.disciplina,o=e.turma,s=e.mes,c=e.mesAtual;a(g,{frequencia:n}),a(y,{coluna:i}),a(O,{mes:s}),a(j,{mes:c}),a(T,{turma:o}),a(k,{disciplina:r}),a(M,{loading:!1}),t()})).catch((function(t){a(M,{loading:!1}),i(t)}))}))},listarFrequenciaBotstrap:function(t,e){var a=t.commit,i=t.dispatch;return a(M,{loading:!0}),i("resetarFrequencia"),new Promise((function(t,i){Object(b["b"])(e).then((function(e){var i=e.data,n=e.dataFrequencia,r=e.disciplina,o=e.turma,s=e.mes,c=e.mesAtual;a(g,{frequencia:n}),a(y,{coluna:i}),a(O,{mes:s}),a(j,{mes:c}),a(T,{turma:o}),a(k,{disciplina:r}),a(M,{loading:!1}),t()})).catch((function(t){a(M,{loading:!1}),i(t)}))}))},resetarFrequencia:function(t){var e=t.commit;e(g,{frequencias:[]}),e(y,{colunas:[]}),e(j,{mes:[]}),e(T,{turma:""}),e(k,{disciplina:""})}},A={listFrequencias:function(t){return t.frequencias},listColunas:function(t){return t.colunas},totalDias:function(t,e){return e.listColunas.length},totalAulunos:function(t,e){return e.listFrequencias.length},listTurma:function(t){return t.turma},listDisciplina:function(t){return t.disciplina},listTotal:function(t){return t.total},listMes:function(t){return t.mes},listMesAtual:function(t){return t.mesAtual},listLoading:function(t){return t.loading}},D=(a("20d6"),i={},Object(u["a"])(i,g,(function(t,e){var a=e.frequencia;t.frequencias=a})),Object(u["a"])(i,v,(function(t,e){var a=e.frequencia,i=t.frequencias.findIndex((function(t){return t.id===a.id}));t.frequencias.splice(i,1,a)})),Object(u["a"])(i,y,(function(t,e){var a=e.coluna;t.colunas=a})),Object(u["a"])(i,T,(function(t,e){var a=e.turma;t.turma=a})),Object(u["a"])(i,k,(function(t,e){var a=e.disciplina;t.disciplina=a})),Object(u["a"])(i,O,(function(t,e){var a=e.mes;t.mes=a})),Object(u["a"])(i,j,(function(t,e){var a=e.mes;t.mesAtual=a})),Object(u["a"])(i,_,(function(t,e){var a=e.total;t.total=a})),Object(u["a"])(i,M,(function(t,e){var a=e.loading;t.loading=a})),i),S={frequencias:[],colunas:[],turma:"",disciplina:"",mes:[],mesAtual:[],total:"",loading:!1},q={namespaced:!0,state:S,getters:A,mutations:D,actions:C},x="frequencia",F=function(t){x in t._modules.root._children||t.registerModule(x,q)},P=(a("e40d"),a("9062")),R=a.n(P),w=Object(p["a"])("frequencia"),Y=w.mapActions,I=w.mapGetters,L={name:"ToolbarByMonth",props:{color:String,mes:String,idTurma:String,idDisciplina:String,format:String,columns:Object,dataFrequecia:Array,month:String,showSlot:{type:Boolean,default:!1}},data:function(){return{stickyHeader:!0,noCollapse:!1,date:void 0,fullPage:!1,loader:"spinner"}},computed:Object(c["a"])(Object(c["a"])({},I(["listFrequencias","listColunas","listTurma","listDisciplina","listLoading"])),{},{arrowRightClass:function(){return this.showSlot?"":"offset-xs1"},currentMonth:function(){return this.date.format("MMMM YYYY")}}),created:function(){F(this.$store),this.setCurrentMonth(),this.emit()},methods:Object(c["a"])(Object(c["a"])({},Y(["lancarFaltaDia"])),{},{toCellName:function(t){if("name"!=t.key)return"cell(".concat(t.key,")")},toggleChecked:function(t,e,a){var i=this,n={frequencia:t,idAula:e.dataIndex,aula:e.aula,idTurma:this.idTurma,idDisciplina:this.idDisciplina,situacao:a};this.lancarFaltaDia({frequencia:n}).then((function(){i.$notify({title:"Sucesso",message:"Adicionado Com Sucesso",type:"success",duration:2e3})}))},emit:function(){var t=this.date.format("YYYY-MM-DD");this.mes=t;var e=h()(t).startOf("month").format("YYYY-MM-DD"),a=h()(t).endOf("month").format("YYYY-MM-DD"),i={inicio:e,final:a};this.$emit("mes",i)},decrement:function(){this.date=this.date.clone().subtract(1,"month"),this.emit()},increment:function(){this.date=this.date.clone().add(1,"month"),this.emit()},setCurrentMonth:function(){this.date=this.month?h()(this.month,this.format):h()()}})},N=L,E=(a("68a3"),a("2877")),$=Object(E["a"])(N,d,m,!1,null,null,null),B=$.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("aside",[t._v(" "+t._s(t.listMesAtual.mes)+"-"+t._s(t.listDisciplina)+"-"+t._s(t.listTurma))]),t._v(" "),a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.listMesAtual.data,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:t.handleSelect}},t._l(t.listMes,(function(e){return a("el-menu-item",{key:e.data,attrs:{index:e.data}},[t._v(t._s(e.mes))])})),1),t._v(" "),a("loading",{attrs:{active:t.listLoading,"is-full-page":t.fullPage,loader:t.loader}}),t._v(" "),a("div",[a("div",[a("div",{staticClass:"mb-2"},[a("pronto",{attrs:{tipo:"1",turma:t.idTurma,disciplina:t.idDisciplina,unidade:"0",mes:t.listMesAtual.id,plano:"0",acesso:!0}}),t._v(" "),t.isMobile()?t._e():a("b-form-checkbox",{attrs:{inline:""},model:{value:t.stickyHeader,callback:function(e){t.stickyHeader=e},expression:"stickyHeader"}},[t._v("Rolagem da lista")]),t._v(" "),t.isMobile()?t._e():a("b-form-checkbox",{attrs:{inline:""},model:{value:t.noCollapse,callback:function(e){t.noCollapse=e},expression:"noCollapse"}},[t._v("Borda")]),t._v(" "),a("el-select",{attrs:{clearable:"",placeholder:"Selecione uma data"},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}},t._l(t.listColunas,(function(t){return a("el-option",{key:t.dia,attrs:{label:t.dataMes,value:t.dia}})})),1)],1),t._v(" "),a("b-table",{attrs:{"sticky-header":t.stickyHeader,"no-border-collapse":t.noCollapse,responsive:"","no-sort-reset":!0,striped:"",hover:"",items:t.listFrequencias,fields:t.filterProductsByCategory},scopedSlots:t._u([t._l(t.filterProductsByCategory,(function(e){return{key:t.toCellName(e),fn:function(i){return["2"===i.item[e.key]||"3"===i.item[e.key]?a("div",[a("div",[a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"A atestado ou J Justificada"+i.item.name+" Dia"+e.label+" A"+e.aula,size:"sm",variant:"primary"}},[t._v("  "+t._s("2"===i.item[e.key]?"A":"J"))])],1)]):a("div",[a("div",[a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:i.item.name+" Dia"+e.label+" A"+e.aula,size:"sm",variant:i.item[e.key]?"danger":"outline-success"},on:{click:function(a){return t.toggleChecked(i,e,i.item[e.key])}}},[t._v(" "+t._s(i.item[e.key]?"F":"P"))])],1)])]}}}))],null,!0)})],1)])],1)},H=[],U=a("1c3f"),J=Object(p["a"])("frequencia"),G=J.mapActions,Q=J.mapGetters,K={name:"ToolbarByMonth",components:{pronto:U["a"]},props:{color:String,mes:String,idTurma:String,date:String,idDisciplina:String,format:String,columns:Object,dataFrequecia:Array,month:String,dataEscolhida:{type:String,default:void 0},showSlot:{type:Boolean,default:!1}},data:function(){var t;return t={teste:"",stickyHeader:!1,noCollapse:!1,fullPage:!1,loader:"spinner"},Object(u["a"])(t,"fullPage",!1),Object(u["a"])(t,"loader","spinner"),Object(u["a"])(t,"category",""),Object(u["a"])(t,"products",[{id:0,label:"Nome",data:"name",dataMes:"name",key:"name",dia:"name",aula:"name",sortable:!0,total:"name"}]),t},computed:Object(c["a"])(Object(c["a"])({},Q(["listFrequencias","listColunas","listTurma","listDisciplina","listMes","listMesAtual","listLoading"])),{},{arrowRightClass:function(){return this.showSlot?"":"offset-xs1"},currentMonth:function(){return this.date.format("MMMM YYYY")},filterProductsByCategory:function(){var t=this;if("name"===this.category){var e=this.listColunas;return e}e=this.listColunas.filter((function(e){return!e.dia.indexOf(t.category)}));var a=this.products.concat(e);return a}}),created:function(){this.category="",F(this.$store),this.setCurrentMonth()},methods:Object(c["a"])(Object(c["a"])({},G(["resetarFrequencia","lancarFaltaDia"])),{},{isMobile:function(){return"maxTouchPoints"in navigator?navigator.maxTouchPoints>0:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},handleSelect:function(t,e){this.resetarFrequencia,this.date=t,this.emit()},callback:function(t){this.idMes=t},toCellName:function(t){if("name"!=t.key)return"cell(".concat(t.key,")")},toggleChecked:function(t,e,a){var i=this,n={frequencia:t,idAula:e.dataIndex,aula:e.aula,idTurma:this.idTurma,idDisciplina:this.idDisciplina,situacao:a};this.lancarFaltaDia({frequencia:n}).then((function(){i.$notify({title:"Sucesso",message:"Adicionado Com Sucesso",type:"success",duration:2e3})}))},emit:function(){var t=this.date;this.mes=t;var e=h()(t).startOf("month").format("YYYY-MM-DD"),a=h()(t).endOf("month").format("YYYY-MM-DD"),i={inicio:e,final:a};this.$emit("mes",i)},setCurrentMonth:function(){this.date=h()().format("YYYY-MM-DD")}})},V=K,W=(a("3a96"),a("7516"),Object(E["a"])(V,z,H,!1,null,null,null)),X=W.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("aside",[t._v(" Transferidos "+t._s(t.listMesAtual.mes)+"-"+t._s(t.listDisciplina)+"-"+t._s(t.listTurma))]),t._v(" "),a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.listMesAtual.data,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:t.handleSelect}},t._l(t.listMes,(function(e){return a("el-menu-item",{key:e.data,attrs:{index:e.data}},[t._v(t._s(e.mes))])})),1),t._v(" "),a("loading",{attrs:{active:t.listLoading,"is-full-page":t.fullPage,loader:t.loader}}),t._v(" "),a("div",[a("div",[a("div",{staticClass:"mb-2"},[a("b-form-checkbox",{attrs:{inline:""},model:{value:t.stickyHeader,callback:function(e){t.stickyHeader=e},expression:"stickyHeader"}},[t._v("Rolagem da lista")]),t._v(" "),a("b-form-checkbox",{attrs:{inline:""},model:{value:t.noCollapse,callback:function(e){t.noCollapse=e},expression:"noCollapse"}},[t._v("Borda")])],1),t._v(" "),a("b-table",{attrs:{"sticky-header":t.stickyHeader,"no-border-collapse":t.noCollapse,responsive:"","no-sort-reset":!0,striped:"",hover:"",items:t.listFrequencias,fields:t.listColunas},scopedSlots:t._u([t._l(t.listColunas,(function(e){return{key:t.toCellName(e),fn:function(i){return["2"===i.item[e.key]||"3"===i.item[e.key]||"4"===i.item[e.key]?a("div",["2"===i.item[e.key]||"3"===i.item[e.key]?a("div",[a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"A atestado ou J Justificada"+i.item.name+" Dia"+e.label+" A"+e.aula,size:"sm",variant:"primary"}},[t._v("  "+t._s("2"===i.item[e.key]?"A":"J"))])],1):t._e(),t._v(" "),"4"===i.item[e.key]?a("div",[a("div",[a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Aluno T Transferido "+i.item.name+" Dia"+e.label+" A"+e.aula,size:"sm",variant:"primary"}},[t._v("T")])],1)]):t._e()]):a("div",[a("div",[a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:i.item.name+" Dia"+e.label+" A"+e.aula,size:"sm",variant:i.item[e.key]?"danger":"outline-success"},on:{click:function(a){return t.toggleChecked(i,e,i.item[e.key])}}},[t._v(" "+t._s(i.item[e.key]?"F":"P"))])],1)])]}}}))],null,!0)})],1)])],1)},tt=[],et=Object(p["a"])("frequencia"),at=et.mapActions,it=et.mapGetters,nt={name:"ToolbarByMonth",props:{color:String,mes:String,idTurma:String,date:String,idDisciplina:String,format:String,columns:Object,dataFrequecia:Array,month:String,dataEscolhida:{type:String,default:void 0},showSlot:{type:Boolean,default:!1}},data:function(){var t;return t={stickyHeader:!0,noCollapse:!1,fullPage:!1,loader:"spinner"},Object(u["a"])(t,"fullPage",!1),Object(u["a"])(t,"loader","spinner"),t},computed:Object(c["a"])(Object(c["a"])({},it(["listFrequencias","listColunas","listTurma","listDisciplina","listMes","listMesAtual","listLoading"])),{},{arrowRightClass:function(){return this.showSlot?"":"offset-xs1"},currentMonth:function(){return this.date.format("MMMM YYYY")}}),created:function(){F(this.$store),this.setCurrentMonth(),this.emit()},methods:Object(c["a"])(Object(c["a"])({},at(["resetarFrequencia","lancarFaltaDia"])),{},{handleSelect:function(t,e){this.resetarFrequencia,this.date=t,this.emit()},callback:function(t){this.idMes=t},toCellName:function(t){if("name"!=t.key)return"cell(".concat(t.key,")")},toggleChecked:function(t,e,a){var i=this,n={frequencia:t,idAula:e.dataIndex,aula:e.aula,idTurma:this.idTurma,idDisciplina:this.idDisciplina,situacao:a};this.lancarFaltaDia({frequencia:n}).then((function(){i.$notify({title:"Sucesso",message:"Adicionado Com Sucesso",type:"success",duration:2e3})}))},emit:function(){var t=this.date;this.mes=t;var e=h()(t).startOf("month").format("YYYY-MM-DD"),a=h()(t).endOf("month").format("YYYY-MM-DD"),i={inicio:e,final:a};this.$emit("mes",i)},setCurrentMonth:function(){this.date=h()().format("YYYY-MM-DD")}})},rt=nt,ot=(a("e825"),Object(E["a"])(rt,Z,tt,!1,null,null,null)),st=ot.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.listMinhasTurma,(function(e){return a("router-link",{key:e.key,attrs:{label:e.label,name:e.key,to:"/frequencia/exibir/?tab="+e.id+"&id=0"}},[t.turma===e.id?a("el-button",{attrs:{size:"mini",loading:!0}},[t._v("\n             "+t._s(e.label)+"\n            ")]):a("el-button",{attrs:{size:"mini"}},[t._v("\n             "+t._s(e.label)+"\n            ")])],1)})),1)},ut=[],lt=a("44a2"),dt=Object(p["a"])("turma"),mt=dt.mapActions,ft=dt.mapGetters,ht={name:"planejar",props:{turma:{type:String,default:void 0},unidade:{type:String,default:void 0}},data:function(){return{tableKey:0,list:null,total:0,freq:0,atividade:0,listLoading:!0}},computed:Object(c["a"])({},ft(["listMinhasTurma","totalMinhasTurma"])),created:function(){Object(lt["a"])(this.$store),this.listarMinhasTurma(this.listQuery),this.atividadeAula(id)},methods:Object(c["a"])({},mt(["listarMinhasTurma"]))},pt=ht,bt=Object(E["a"])(pt,ct,ut,!1,null,null,null),gt=bt.exports,vt=a("73bc"),_t=(a("f9e3"),a("2dd8"),Object(p["a"])("frequencia")),yt=_t.mapActions,Ot=_t.mapGetters,jt={name:"Tab",components:{Loading:R.a,frequencia:B,turma:gt,menssage:vt["a"],frequenciaMesAnual:X,frequenciaMesAnualTransferido:st},props:(n={tabMapOptions:{type:Array,default:void 0},mes:{type:Array,default:void 0},idMes:{type:String,default:void 0},link:{type:String,default:void 0},dropDow:{type:Object,default:void 0},titulo:{type:String,default:void 0},id:{type:String,default:void 0}},Object(u["a"])(n,"idMes",{type:String,default:void 0}),Object(u["a"])(n,"idDisciplina",{type:String,default:void 0}),Object(u["a"])(n,"transferido",{type:String,default:"CURSANDO"}),n),data:function(){return{tabIndex:0,turma:null,tabMapOptions:null,tabPosition:"top",activeName:0,fullPage:!1,loader:"spinner",createdTimes:0}},watch:{$route:function(){var t=this.$route.query.id;this.activeName=t,this.idDisciplina=t;var e=this.$route.query.tab;e&&(this.id=e),this.getList()},tabIndex:function(t){this.resetarFrequencia,this.getListaFrequencia,this.category=""},activeName:function(t){this.resetarFrequencia,this.$router.push("".concat(this.$route.path,"?tab=").concat(this.id,"&id=").concat(t)),this.activeName=t,this.idDisciplina=t,this.category=""},mes:function(t){this.getListaFrequencia(),this.category=""},idDisciplina:function(t){this.getListaFrequencia(),this.category=""}},computed:Object(c["a"])({},Ot(["listLoading","listFrequencias","listColunas","listTurma","listDisciplina","listLoading"])),created:function(){F(this.$store);var t=this.$route.query.tab;t&&(this.id=t);var e=this.$route.query.id;e&&(this.idDisciplina=e,this.activeName=e),this.getListaFrequencia(),this.getList()},methods:Object(c["a"])(Object(c["a"])({},yt(["listarFrequenciaBotstrap","resetarFrequencia"])),{},{resetarFrequencia:function(){this.resetarFrequencia},mesEscolhido:function(t){this.mes=t,this.transferido="CURSANDO"},mesEscolhidoRecuperacao:function(t){this.mes=t,this.transferido="TRANSFERIDO"},showCreatedTimes:function(){this.createdTimes=this.createdTimes+1},getList:function(){var t=this;this.loading=!0,Object(l["d"])(this.id).then((function(e){t.tabMapOptions=e.data,t.turma=e.turma.nometurma,t.loading=!1}))},getListaFrequencia:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.resetarFrequencia,e={idTurma:this.id,inicio:this.mes.inicio,final:this.mes.final,idDisciplina:this.idDisciplina,transferido:this.transferido},this.listarFrequenciaBotstrap(e);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()})},Tt=jt,kt=Object(E["a"])(Tt,r,o,!1,null,null,null);e["default"]=kt.exports},"1c0d":function(t,e,a){},"1c3f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t.checkPermission(["Professor","ProfessorInfantil"])?a("span",[!0===t.acesso?a("span",[t.prontoResultado.pronto?t._e():a("el-button",{attrs:{plain:!0,type:"primary",size:"mini"},on:{click:function(e){return t.acessei(1)}}},[t._v("Feito")])],1):t._e(),t._v(" "),!0===t.acesso?a("span",["1"===t.prontoResultado.pronto?a("el-button",{attrs:{plain:!0,type:"warning",size:"mini"}},[t._v("Corrigindo...")]):t._e()],1):t._e(),t._v(" "),!0===t.acesso?a("span",["2"===t.prontoResultado.pronto?a("el-button",{attrs:{plain:!0,type:"primary",size:"mini"},on:{click:function(e){return t.acessei(1)}}},[t._v("Fazer Correção")]):t._e()],1):t._e(),t._v(" "),!0===t.acesso?a("span",["3"===t.prontoResultado.pronto?a("el-button",{attrs:{plain:!0,type:"success",size:"mini"},on:{click:function(e){return t.acessei(1)}}},[t._v("Conferido")]):t._e()],1):t._e()]):t._e(),t._v(" "),t.checkPermission(["admin","Diretor","Secretario","Coordenador"])?a("span",["1"===t.prontoResultado.pronto?a("el-tag",{attrs:{type:"warning"}},[t._v("Situação Corrigindo...")]):t._e(),t._v(" "),"2"===t.prontoResultado.pronto?a("el-tag",{attrs:{type:"danger"}},[t._v("Situação Fazer Correção")]):t._e(),t._v(" "),"3"===t.prontoResultado.pronto?a("el-tag",{attrs:{type:"success"}},[t._v(" Situação Conferido")]):t._e()],1):t._e(),t._v(" "),!0===t.acesso?a("span",[t.checkPermission(["CoordenadorInfantil","Coordenador"])?a("el-button-group",["3"!==t.prontoResultado.pronto?a("el-button",{attrs:{plain:!0,type:"success",size:"mini"},on:{click:function(e){return t.acessei(3)}}},[t._v("Click Conferido")]):t._e(),t._v(" "),"2"!==t.prontoResultado.pronto?a("el-button",{attrs:{plain:!0,type:"danger",size:"mini"},on:{click:function(e){return t.acessei(2)}}},[t._v("Click Fazer Correção")]):t._e()],1):t._e()],1):t._e()])},n=[],r=a("f3ca"),o=a("e350"),s={name:"prontoAtividade",props:{prontoResultado:{type:Array,default:void 0},tipo:{type:String,default:void 0},situacao:{type:String,default:"1"},turma:{type:String,default:void 0},porcentagem:{type:String,default:void 0},total:{type:String,default:void 0},disciplina:{type:String,default:void 0},unidade:{type:String,default:void 0},mes:{type:String,default:void 0},plano:{type:String,default:void 0},acesso:{type:Boolean,default:void 0}},data:function(){return{teste:""}},created:function(){this.acess(),this.getSituacao(),this.corrigir(),this.getPorcentagem(),this.getTotal()},watch:{porcentagem:function(){this.getSituacao(),this.corrigir(),this.acess(),this.getPorcentagem(),this.getTotal()},turma:function(){this.getSituacao(),this.corrigir(),this.acess(),this.getPorcentagem(),this.getTotal()},disciplina:function(){this.getSituacao(),this.corrigir(),this.acess(),this.getPorcentagem(),this.getTotal()},unidade:function(){this.getSituacao(),this.corrigir(),this.acess(),this.getPorcentagem(),this.getTotal()},mes:function(){this.getSituacao(),this.corrigir(),this.acess(),this.getPorcentagem(),this.getTotal()}},methods:{checkPermission:o["a"],getPorcentagem:function(){this.porcentagem>=100?this.acesso=!0:this.acesso=!1},getTotal:function(){this.total>=1&&(this.acesso=!0)},acessei:function(t){var e=this;Object(r["h"])(this.tipo,this.turma,this.disciplina,this.unidade,this.mes,this.plano,t).then((function(t){e.prontoResultado=t.data,e.$notify({title:"Sucesso",message:"Pronto Com Sucesso",type:"success",duration:2e3})}))},acess:function(){Object(r["a"])(this.tipo,this.turma,this.disciplina,this.unidade,this.mes,this.plano)},corrigir:function(){2===this.prontoResultado.pronto&&this.$message({showClose:!0,duration:2e3,message:"Tem Alguma coisa para ser corrigida ou faltando.",type:"warning"})},getSituacao:function(){var t=this;Object(r["e"])(this.tipo,this.turma,this.disciplina,this.unidade,this.mes,this.plano).then((function(e){t.prontoResultado=e.data}))}}},c=s,u=(a("a52d"),a("81c1"),a("2877")),l=Object(u["a"])(c,i,n,!1,null,null,null);e["a"]=l.exports},"1f8e":function(t,e,a){},"354d":function(t,e,a){},"3a96":function(t,e,a){"use strict";a("58f2")},"44a2":function(t,e,a){"use strict";a("96cf");var i,n=a("3b8d"),r=a("0ef3"),o="LISTAR_TURMA",s="EDITAR_TURMA",c="TOTAL_TURMA",u="CRIAR_TURMA",l="DELETAR_TURMA",d="LISTAR_MINHAS_TURMA",m="LISTAR_PERIODO_TURMA",f="IS_LOADING",h={criarTurma:function(t,e){var a=t.commit;return Object(r["g"])(e).then((function(t){return a(u,{turma:t.data}),t.data})).catch((function(t){reject(t)}))},abrirTurma:function(t,e){var a=t.commit,i=e.turma;return Object(r["a"])(i).then((function(t){return a(s,{turma:t.data})})).catch((function(t){reject(t)}))},fecharTurma:function(t,e){var a=t.commit,i=e.turma;return Object(r["k"])(i).then((function(t){return a(s,{turma:t.data})})).catch((function(t){reject(t)}))},editarTurma:function(t,e){var a=t.commit,i=e.turma;return Object(r["z"])(i).then((function(t){return a(s,{turma:t.data})})).catch((function(t){reject(t)}))},deletarTurma:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,a){var i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,n=a.turma,t.next=4,Object(r["j"])(n.id);case 4:t.sent,i(l,{turma:n});case 6:case"end":return t.stop()}}),t)})));function e(e,a){return t.apply(this,arguments)}return e}(),listarMinhasTurma:function(t,e){var a=t.commit;return a(f,{loading:!0}),new Promise((function(t,i){Object(r["c"])(e).then((function(e){var i=e.data;a(d,{turma:i}),a(f,{loading:!1}),t()})).catch((function(t){a(f,{loading:!1}),i(t)}))}))},listarMinhasPeriodoTurma:function(t,e){var a=t.commit;return a(f,{loading:!0}),new Promise((function(t,i){Object(r["e"])(e).then((function(e){var i=e.data;a(m,{turma:i}),a(f,{loading:!1}),t()})).catch((function(t){a(f,{loading:!1}),i(t)}))}))},resetarTurmas:function(t){var e=t.commit;e(d,{turma:[]})}},p={listTurmas:function(t){return t.turmas},listMinhasTurma:function(t){return t.minhasTurma},listPeriodoTurma:function(t){return t.periodoTurma},totalTurma:function(t,e){return e.listMinhasTurma.length},totalMinhasTurma:function(t,e){return e.listMinhasTurma.length},listTotal:function(t){return t.total},listLoading:function(t){return t.loading}},b=a("bd86"),g=(a("20d6"),i={},Object(b["a"])(i,s,(function(t,e){var a=e.turma,i=t.minhasTurma.findIndex((function(t){return t.id===a.id}));t.minhasTurma.splice(i,1,a)})),Object(b["a"])(i,u,(function(t,e){var a=e.turma;t.minhasTurma.push(a)})),Object(b["a"])(i,l,(function(t,e){var a=e.turma,i=t.minhasTurma.findIndex((function(t){return t.id===a.id}));t.minhasTurma.splice(i,1)})),Object(b["a"])(i,d,(function(t,e){var a=e.turma;t.minhasTurma=a})),Object(b["a"])(i,m,(function(t,e){var a=e.turma;t.periodoTurma=a})),Object(b["a"])(i,o,(function(t,e){var a=e.turma;t.turma=a})),Object(b["a"])(i,c,(function(t,e){e.turma;t.total=total})),Object(b["a"])(i,f,(function(t,e){var a=e.loading;t.loading=a})),i),v={turma:"",turmas:[],total:"",minhasTurma:"",periodoTurma:"",loading:!1},_={namespaced:!0,state:v,getters:p,mutations:g,actions:h},y="turma";e["a"]=function(t){y in t._modules.root._children||t.registerModule(y,_)}},"58f2":function(t,e,a){},"68a3":function(t,e,a){"use strict";a("354d")},"73bc":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.menssagem?a("el-alert",{attrs:{title:t.menssagem,type:"error","show-icon":""}}):t._e()],1)},n=[],r={name:"Menssagem",props:{menssagem:{type:String,default:void 0}},data:function(){return{tipo:0}},created:function(){this.open3()},methods:{open1:function(){this.$message({showClose:!0,message:"This is a message."})},open2:function(){this.$message({showClose:!0,message:"Congrats, this is a success message.",type:"success"})},open3:function(){this.$message({showClose:!0,message:this.menssagem,type:"warning"})},open4:function(){this.$message({showClose:!0,message:"Oops, this is a error message.",type:"error"})}}},o=r,s=a("2877"),c=Object(s["a"])(o,i,n,!1,null,null,null);e["a"]=c.exports},7516:function(t,e,a){"use strict";a("9178")},"81c1":function(t,e,a){"use strict";a("1c0d")},"861ab":function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"d",(function(){return r})),a.d(e,"e",(function(){return o})),a.d(e,"f",(function(){return s})),a.d(e,"g",(function(){return c})),a.d(e,"b",(function(){return u})),a.d(e,"a",(function(){return l}));var i=a("b775");function n(t){return Object(i["a"])({url:"/disciplina/getByTurmaDisciplina/".concat(t),method:"get"})}function r(t){return Object(i["a"])({url:"/disciplina/getByTurmaTodasDisciplina/".concat(t),method:"get"})}function o(t){return Object(i["a"])({url:"/disciplina/getTurmaDisciplina/".concat(t),method:"get"})}function s(){return Object(i["a"])({url:"/disciplina/getDisicplinaAtiva",method:"get"})}function c(){return Object(i["a"])({url:"/disciplina/exibirHistoricoDisciplina",method:"get"})}function u(t){return Object(i["a"])({url:"/disciplina/getById/".concat(t),method:"get"})}function l(t){return Object(i["a"])({url:"/disciplina/adicionar",method:"post",data:t})}},9178:function(t,e,a){},a52d:function(t,e,a){"use strict";a("1490")},e350:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("6762"),a("2fdb");var i=a("4360");function n(t){if(t&&t instanceof Array&&t.length>0){var e=i["a"].getters&&i["a"].getters.roles,a=t,n=e.some((function(t){return a.includes(t)}));return!!n}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}},e825:function(t,e,a){"use strict";a("1f8e")},f3ca:function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"a",(function(){return r})),a.d(e,"h",(function(){return o})),a.d(e,"e",(function(){return s})),a.d(e,"b",(function(){return c})),a.d(e,"f",(function(){return u})),a.d(e,"g",(function(){return l})),a.d(e,"c",(function(){return d}));var i=a("b775");function n(){return Object(i["a"])({url:"/alerta/alertaEscola",method:"get"})}function r(t,e,a,n,r,o){return Object(i["a"])({url:"/alerta/acesso/".concat(t,"/").concat(e,"/").concat(a,"/").concat(n,"/").concat(r,"/").concat(o),method:"get"})}function o(t,e,a,n,r,o,s){return Object(i["a"])({url:"/alerta/pronto/".concat(t,"/").concat(e,"/").concat(a,"/").concat(n,"/").concat(r,"/").concat(o,"/").concat(s),method:"get"})}function s(t,e,a,n,r,o){return Object(i["a"])({url:"/alerta/getPronto/".concat(t,"/").concat(e,"/").concat(a,"/").concat(n,"/").concat(r,"/").concat(o),method:"get"})}function c(t,e){return Object(i["a"])({url:"/alerta/getAcesso/".concat(t,"/").concat(e),method:"get"})}function u(t,e){return Object(i["a"])({url:"/alerta/getProntoAcesso/".concat(t,"/").concat(e),method:"get"})}function l(){return Object(i["a"])({url:"/alerta/alertaTurma",method:"get"})}function d(){return Object(i["a"])({url:"/alerta/alertaDisciplina",method:"get"})}},f6e5:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"d",(function(){return o})),a.d(e,"e",(function(){return s})),a.d(e,"c",(function(){return c}));var i=a("b775");function n(t){return Object(i["a"])({url:"/frequencia/dataLetiva",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/frequencia/dataLetivaBotstrap",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/frequencia/lancarFalta",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/frequencia/lancarFaltaDia",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/frequencia/getFrequenciaAluno",method:"post",data:t})}}}]);