(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-103962c8"],{"0ef3":function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"d",(function(){return i})),a.d(e,"e",(function(){return o})),a.d(e,"b",(function(){return c})),a.d(e,"f",(function(){return u})),a.d(e,"y",(function(){return d})),a.d(e,"r",(function(){return s})),a.d(e,"p",(function(){return l})),a.d(e,"q",(function(){return f})),a.d(e,"o",(function(){return m})),a.d(e,"n",(function(){return p})),a.d(e,"h",(function(){return v})),a.d(e,"m",(function(){return b})),a.d(e,"t",(function(){return g})),a.d(e,"v",(function(){return h})),a.d(e,"x",(function(){return y})),a.d(e,"s",(function(){return j})),a.d(e,"w",(function(){return O})),a.d(e,"l",(function(){return _})),a.d(e,"g",(function(){return T})),a.d(e,"A",(function(){return A})),a.d(e,"u",(function(){return S})),a.d(e,"i",(function(){return N})),a.d(e,"z",(function(){return E})),a.d(e,"k",(function(){return P})),a.d(e,"a",(function(){return D})),a.d(e,"j",(function(){return w}));var n=a("b775");function r(t){return Object(n["a"])({url:"/turma/acessoTurmaTarefa",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/turma/acessoTurmaAberta",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/turma/acessoPeriodoTurmaTarefa",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/turma/acessoChildrenTurmaTarefa",method:"get",params:t})}function u(t){return Object(n["a"])({url:"/turma/acessoProfessorTurma/".concat(t),method:"get"})}function d(t,e){return Object(n["a"])({url:"/turma/turmaPeriodoTurno/".concat(t,"/").concat(e),method:"get"})}function s(t,e){return Object(n["a"])({url:"/matricula/verificarTrocarTurma/".concat(t,"/").concat(e),method:"get"})}function l(t,e,a){return Object(n["a"])({url:"/turma/getByMatricula/".concat(t,"/").concat(e,"/").concat(a),method:"get"})}function f(t,e){return Object(n["a"])({url:"/turma/getByRemanejarMatricula/".concat(t,"/").concat(e),method:"get"})}function m(t){return Object(n["a"])({url:"/turma/getByDetalhamento/".concat(t),method:"get"})}function p(t){return Object(n["a"])({url:"/turma/inforTurma/".concat(t),method:"get"})}function v(t){return Object(n["a"])({url:"/turma/alunosTransferidoCursandoTrimestreTurma/".concat(t),method:"get"})}function b(t){return Object(n["a"])({url:"/turma/infor/".concat(t),method:"get"})}function g(t){return Object(n["a"])({url:"/turma/inforMmm/".concat(t),method:"get"})}function h(t){return Object(n["a"])({url:"/turma/serieTurmaPeriodo/".concat(t),method:"get"})}function y(t){return Object(n["a"])({url:"/turma/turmaPeriodo/".concat(t),method:"get"})}function j(t){return Object(n["a"])({url:"/turma/getTurma/".concat(t),method:"get"})}function O(t){return Object(n["a"])({url:"/turma/turmaChildrenDisciplina/".concat(t),method:"get"})}function _(t){return Object(n["a"])({url:"/turma/getByDetalhe/".concat(t),method:"get"})}function T(t){return Object(n["a"])({url:"/turma/adicionar",method:"post",data:t})}function A(t){return Object(n["a"])({url:"/turma/vincular",method:"post",data:t})}function S(t){return Object(n["a"])({url:"/turma/adicionarDecreto",method:"post",data:t})}function N(t){return Object(n["a"])({url:"/turma/base",method:"post",data:t})}function E(t){return Object(n["a"])({url:"/turma/editar/",method:"put",data:t})}function P(t){return Object(n["a"])({url:"/turma/fechar",method:"put",data:t})}function D(t){return Object(n["a"])({url:"/turma/abrir",method:"put",data:t})}function w(t,e){return Object(n["a"])({url:"/turma/excluir/".concat(t),method:"get",data:e})}},2819:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.geral,border:""}},[a("el-table-column",{attrs:{prop:"disciplina",label:"Disciplina",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"total",label:"Média"}})],1),t._v(" "),t.dados?a("charty",{attrs:{dados:t.dados,titulo:t.titulo}}):t._e()],1)},r=[],i=a("dac6"),o=a("f264"),c={name:"RelatorioDisciplina",components:{charty:i["a"]},props:{periodos:{type:Array,default:void 0},unidades:{type:Array,default:void 0},dados:{type:Array,default:void 0},geral:{type:Array,default:void 0},turma:{type:String,default:void 0},ensino:{type:String,default:void 0},periodo:{type:String,default:void 0},unidade:{type:String,default:0}},data:function(){return{activeName:0,active:"first",listLoading:!1,downloadLoading:!1,fullPage:!1,loader:"dots",titulo:"",isLoading:!1}},created:function(){this.getDiagnosticoGeral(this.turma,this.unidade,this.periodo)},methods:{getDiagnosticoGeral:function(t,e,a){var n=this;Object(o["g"])(t,e,a).then((function(t){n.geral=t.data,n.dados=t.dados,n.titulo=t.titulo}))}}},u=c,d=a("2877"),s=Object(d["a"])(u,n,r,!1,null,null,null);e["a"]=s.exports},"4dac":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.geral,border:""}},[a("el-table-column",{attrs:{prop:"disciplina",label:"Disciplina",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"total",label:"Média"}})],1),t._v(" "),t.dados?a("chart",{attrs:{dados:t.dados,titulo:t.titulo}}):t._e()],1)},r=[],i=a("dac6"),o=a("f264"),c={name:"RelatorioDisciplina",components:{chart:i["a"]},props:{periodos:{type:Array,default:void 0},unidades:{type:Array,default:void 0},dados:{type:Array,default:void 0},geral:{type:Array,default:void 0},turma:{type:Array,default:void 0},ensino:{type:String,default:void 0},periodo:{type:String,default:void 0},unidade:{type:String,default:0}},data:function(){return{activeName:0,active:"first",listLoading:!1,downloadLoading:!1,fullPage:!1,loader:"dots",titulo:"",isLoading:!1}},created:function(){this.getDiagnosticoGeral(this.ensino,this.unidade,this.periodo)},methods:{getDiagnosticoGeral:function(t,e,a){var n=this;Object(o["a"])(t,e,a).then((function(t){n.geral=t.data,n.dados=t.dados,n.titulo=t.titulo}))}}},u=c,d=a("2877"),s=Object(d["a"])(u,n,r,!1,null,null,null);e["a"]=s.exports},9082:function(t,e,a){"use strict";a("a54a")},"9a3c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading,"is-full-page":t.fullPage,loader:t.loader}}),t._v(" "),a("el-card",{staticClass:"box-card"},[a("el-tabs",{attrs:{type:"border-card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.periodos,(function(e){return a("el-tab-pane",{key:e.id,attrs:{label:e.tipo,name:e.id}},[e.id===t.activeName?a("div",[a("el-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.unidades,(function(n){return a("el-tab-pane",{key:n.id,attrs:{label:n.unidade,name:n.id}},[t.active===n.id?a("div",[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeNameTab,callback:function(e){t.activeNameTab=e},expression:"activeNameTab"}},[a("el-tab-pane",{attrs:{label:"Tipo de Ensino",name:"first"}},["first"===t.activeNameTab?a("div",[a("el-alert",{attrs:{title:"Série Ano",type:"success"}},[t._v("\n    Soma todas as médias do trimestre (unidade)   por disciplina, e divide pela quantidade médias somadas e exibido por TIPO DE ENSINO.\n  ")]),t._v(" "),t._l(t.ensino,(function(n){return a("div",{key:n.id},[t._v("\n"+t._s(n.tipo)+"\n\n\n"),a("disciplina",{attrs:{ensino:n.id,periodo:e.id,unidade:t.active}})],1)}))],2):t._e()]),t._v(" "),a("el-tab-pane",{attrs:{label:"Série/Ano",name:"serie"}},["serie"===t.activeNameTab?a("div",[a("el-alert",{attrs:{title:"Série Ano",type:"success"}},[t._v("\n    Soma todas as médias do trimestre (unidade)   por disciplina, e divide pela quantidade médias somadas e exibido por SÉRIE/ANO.\n  ")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("Exibir Tela toda")]),t._v(" "),a("el-dialog",{attrs:{title:"Média Por Serie",width:"100%",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-collapse",{attrs:{accordion:""},on:{change:t.handleChange},model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},t._l(t.serieEscola,(function(n){return a("el-collapse-item",{key:n.ano,attrs:{name:n.ano}},[a("template",{slot:"title"},[t._v(t._s(n.ano)+" // "+t._s(n.serie)+"\n    ")]),t._v(t._s(n.sequencia)+"//"+t._s(t.activeNames)+"\n"),t.activeNames===n.ano?a("div",[a("serie",{attrs:{serie:n.id,periodo:e.id,unidade:t.active}})],1):t._e()],2)})),1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("Cancel")])],1)],1),t._v(" "),t._l(t.serieEscola,(function(n){return a("div",{key:n.id},[t._v("\n"+t._s(n.ano)+" // "+t._s(n.serie)+"\n\n\n"),a("serie",{attrs:{serie:n.id,periodo:e.id}})],1)}))],2):t._e()]),t._v(" "),a("el-tab-pane",{attrs:{label:"Turma",name:"turma"}},["turma"===t.activeNameTab?a("div",[a("el-alert",{attrs:{title:"Turma ",type:"success"}},[t._v("\n    Soma todas as médias do trimestre (unidade)   por disciplina, e divide pela quantidade médias somadas e exibido por TURMA.\n  ")]),t._v(" "),t._l(t.turmaEscola,(function(n){return a("div",{key:n.idt},[t._v("\n"+t._s(n.nometurma)+"\n\n\n"),a("turma",{attrs:{turma:n.idt,unidade:t.active,periodo:e.id}})],1)}))],2):t._e()])],1)],1):t._e()])})),1)],1):t._e()])})),1)],1)],1)},r=[],i=a("871a"),o=a("eb2d"),c=a("db40"),u=a("0ef3"),d=a("4dac"),s=a("cad9"),l=a("2819"),f=(a("e40d"),a("9062")),m=a.n(f),p=a("7fbc"),v={name:"RelatorioMedia",components:{Loading:m.a,disciplina:d["a"],serie:s["a"],turma:l["a"]},props:{periodos:{type:Array,default:void 0},turmas:{type:Array,default:void 0},unidades:{type:Array,default:void 0},geral:{type:Array,default:void 0},turma:{type:Array,default:void 0},turmaEscola:{type:Array,default:void 0},serieEscola:{type:Array,default:void 0},ensino:{type:Array,default:void 0},idPeriodo:{type:String,default:void 0}},data:function(){return{activeName:0,activeNames:0,activeNameTab:1,dialogFormVisible:!1,active:"first",listLoading:!1,downloadLoading:!1,fullPage:!1,loader:"dots",isLoading:!1}},created:function(){this.getPeriodos(),this.getEnsino()},watch:{activeName:function(t){this.activeName=t,this.idPeriodo=t,"0"!==t&&(this.getUnidades(t),this.getDiagnosticoGeral(t),this.getSerie(),this.getTurmas())}},methods:{handleCurrentChange:function(t){this.pagina=t},getPeriodos:function(){var t=this;Object(i["a"])().then((function(e){t.periodos=e.data}))},getEnsino:function(){var t=this;Object(c["b"])().then((function(e){t.ensino=e.data}))},getTurmas:function(){var t=this;Object(u["x"])(this.idPeriodo).then((function(e){t.turmaEscola=e.data}))},getSerie:function(){var t=this;Object(u["v"])(this.idPeriodo).then((function(e){t.serieEscola=e.data}))},getDiagnosticoGeral:function(t){var e=this;Object(p["z"])(t).then((function(t){e.geral=t.data}))},getUnidades:function(t){var e=this;Object(o["c"])(t).then((function(t){e.unidades=t.data}))}}},b=v,g=(a("9082"),a("2877")),h=Object(g["a"])(b,n,r,!1,null,null,null);e["default"]=h.exports},a54a:function(t,e,a){},cad9:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.geral,border:""}},[a("el-table-column",{attrs:{prop:"disciplina",label:"Disciplina",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"total",label:"Média"}})],1),t._v(" "),t.dados?a("char",{attrs:{dados:t.dados,titulo:t.titulo}}):t._e()],1)},r=[],i=a("dac6"),o=a("f264"),c={name:"RelatorioDisciplina",components:{char:i["a"]},props:{periodos:{type:Array,default:void 0},unidades:{type:Array,default:void 0},dados:{type:Array,default:void 0},geral:{type:Array,default:void 0},turma:{type:Array,default:void 0},serie:{type:String,default:void 0},periodo:{type:String,default:void 0},unidade:{type:String,default:0}},data:function(){return{activeName:0,active:"first",listLoading:!1,downloadLoading:!1,fullPage:!1,loader:"dots",titulo:"",isLoading:!1}},created:function(){this.getDiagnosticoGeral(this.serie,this.unidade,this.periodo)},methods:{getDiagnosticoGeral:function(t,e,a){var n=this;Object(o["c"])(t,e,a).then((function(t){n.geral=t.data,n.dados=t.dados,n.titulo=t.titulo}))}}},u=c,d=a("2877"),s=Object(d["a"])(u,n,r,!1,null,null,null);e["a"]=s.exports},db40:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"e",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return c})),a.d(e,"d",(function(){return u}));var n=a("b775");function r(){return Object(n["a"])({url:"/ensino/acessoEnsino",method:"get"})}function i(){return Object(n["a"])({url:"/ensino/acessoEnsino",method:"get"})}function o(){return Object(n["a"])({url:"/ensino/getAberto",method:"get"})}function c(){return Object(n["a"])({url:"/ensino/acessoEnsinoSerie",method:"get"})}function u(t){return Object(n["a"])({url:"/ensino/getEnsino/".concat(t),method:"get"})}},f264:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return i})),a.d(e,"d",(function(){return o})),a.d(e,"g",(function(){return c})),a.d(e,"h",(function(){return u})),a.d(e,"j",(function(){return d})),a.d(e,"e",(function(){return s})),a.d(e,"f",(function(){return l})),a.d(e,"i",(function(){return f})),a.d(e,"c",(function(){return m}));var n=a("b775");function r(t,e,a){return Object(n["a"])({url:"/avaliacao/respostaMediaGeral/".concat(t,"/").concat(e,"/").concat(a),method:"get"})}function i(t,e,a){return Object(n["a"])({url:"/avaliacao/respostaPontosGeral/".concat(t,"/").concat(e,"/").concat(a),method:"get"})}function o(t,e,a){return Object(n["a"])({url:"/avaliacao/respostaSeriePontosGeral/".concat(t,"/").concat(e,"/").concat(a),method:"get"})}function c(t,e,a){return Object(n["a"])({url:"/avaliacao/respostaMediaTurmaGeral/".concat(t,"/").concat(e,"/").concat(a),method:"get"})}function u(t,e,a){return Object(n["a"])({url:"/avaliacao/respostaPontosTurmaGeral/".concat(t,"/").concat(e,"/").concat(a),method:"get"})}function d(t,e,a,r){return Object(n["a"])({url:"/avaliacao/respostaPontosTrimestreTurmaGeral/".concat(t,"/").concat(e,"/").concat(a,"/").concat(r),method:"get"})}function s(t,e,a){return Object(n["a"])({url:"/avaliacao/respostaAbaixoTrimestreTurmaGeral/".concat(t,"/").concat(e,"/").concat(a),method:"get"})}function l(t,e,a){return Object(n["a"])({url:"/avaliacao/respostaAbaixoTrimestreTurmaAlunoGeral/".concat(t,"/").concat(e,"/").concat(a),method:"get"})}function f(t,e,a,r){return Object(n["a"])({url:"/avaliacao/respostaDisciplinaTrimestreTurmaGeral/".concat(t,"/").concat(e,"/").concat(a,"/").concat(r),method:"get"})}function m(t,e,a){return Object(n["a"])({url:"/avaliacao/respostaMediaSerieGeral/".concat(t,"/").concat(e,"/").concat(a),method:"get"})}}}]);