(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-520099fa"],{"68bc":function(t,o,e){"use strict";e.r(o);var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticStyle:{padding:"50px 0px 0px"}},[e("el-card",{staticClass:"box-card"},[e("router-link",{attrs:{to:"/resultados/diagnostico"}},[t.checkPermission(["admin","Professor","Diretor","Secretario","Coordenador"])?e("el-button",{attrs:{type:"info",plain:""}},[e("svg-icon",{staticStyle:{width:"48px",height:"48px"},attrs:{viewBox:"0 0 30 30","icon-class":"officeicons"}}),e("div",[t._v("Diagnóstico")])],1):t._e()],1),t._v(" "),e("router-link",{attrs:{to:"/resultados/mediasEscola"}},[t.checkPermission(["admin","Professor","Diretor","Secretario","Coordenador"])?e("el-button",{attrs:{type:"info",plain:""}},[e("svg-icon",{staticStyle:{width:"48px",height:"48px"},attrs:{viewBox:"0 0 30 30","icon-class":"grap"}}),e("div",[t._v("Média da Escola Todos (Trimestres)")])],1):t._e()],1),t._v(" "),e("router-link",{attrs:{to:"/resultados/mediasTrimestre"}},[t.checkPermission(["admin","Professor","Diretor","Secretario","Coordenador"])?e("el-button",{attrs:{type:"info",plain:""}},[e("svg-icon",{staticStyle:{width:"48px",height:"48px"},attrs:{viewBox:"0 0 30 30","icon-class":"graficorelatorio"}}),e("div",[t._v("Média por (Trimestre)")])],1):t._e()],1),t._v(" "),e("router-link",{attrs:{to:"/resultados/pontosEscola"}},[t.checkPermission(["admin","Professor","Diretor","Secretario","Coordenador"])?e("el-button",{attrs:{type:"info",plain:""}},[e("svg-icon",{staticStyle:{width:"48px",height:"48px"},attrs:{viewBox:"0 0 30 30","icon-class":"chart-growt"}}),e("div",[t._v("Turma Pontos por Trimestres")])],1):t._e()],1),t._v(" "),e("router-link",{attrs:{to:"/resultados/pontosTurmaDisciplina"}},[t.checkPermission(["admin","Professor","Diretor","Secretario","Coordenador"])?e("el-button",{attrs:{type:"info",plain:""}},[e("svg-icon",{staticStyle:{width:"48px",height:"48px"},attrs:{viewBox:"0 0 30 30","icon-class":"web_analytics"}}),e("div",[t._v("Turma Disciplina por Trimestre")])],1):t._e()],1),t._v(" "),e("router-link",{attrs:{to:"/resultados/pontosAbaixoTurma"}},[t.checkPermission(["admin","Professor","Diretor","Secretario","Coordenador"])?e("el-button",{attrs:{type:"info",plain:""}},[e("svg-icon",{staticStyle:{width:"48px",height:"48px"},attrs:{viewBox:"0 0 30 30","icon-class":"20_122657"}}),e("div",[t._v("Turma  Porcentagem Abaixo da Média")])],1):t._e()],1),t._v(" "),e("router-link",{attrs:{to:"/resultados/alunosAbaixoTurma"}},[t.checkPermission(["admin","Professor","Diretor","Secretario","Coordenador"])?e("el-button",{attrs:{type:"info",plain:""}},[e("svg-icon",{staticStyle:{width:"48px",height:"48px"},attrs:{viewBox:"0 0 30 30","icon-class":"graph_progress_chart_charts_analyti"}}),e("div",[t._v("Turma  total alunos Abaixo da Média")])],1):t._e()],1),t._v(" "),e("router-link",{attrs:{to:"/resultados/pontosTrimestre"}},[t.checkPermission(["admin","Professor","Diretor","Secretario","Coordenador"])?e("el-button",{attrs:{type:"info",plain:""}},[e("svg-icon",{staticStyle:{width:"48px",height:"48px"},attrs:{viewBox:"0 0 30 30","icon-class":"Icon_Business_Set"}}),e("div",[t._v("Pontos por (Trimestre)")])],1):t._e()],1),t._v(" "),e("router-link",{attrs:{to:"/resultados/diagnosticoRede"}},[t.checkPermission(["admin","Rede"])?e("el-button",{attrs:{type:"info",plain:""}},[e("svg-icon",{staticStyle:{width:"48px",height:"48px"},attrs:{viewBox:"0 0 30 30","icon-class":"officeicons"}}),e("div",[t._v("Diagnóstico")])],1):t._e()],1)],1)],1)},r=[],s=e("e350"),a={name:"Tab",props:{tabMapOptions:{type:Object,default:void 0},horario:{type:Array,default:void 0}},data:function(){return{tabPosition:"top",activeName:0,createdTimes:0}},methods:{checkPermission:s["a"]}},n=a,c=(e("b9b2"),e("2877")),d=Object(c["a"])(n,i,r,!1,null,null,null);o["default"]=d.exports},b9b2:function(t,o,e){"use strict";e("e204")},e204:function(t,o,e){},e350:function(t,o,e){"use strict";e.d(o,"a",(function(){return r}));e("6762"),e("2fdb");var i=e("4360");function r(t){if(t&&t instanceof Array&&t.length>0){var o=i["a"].getters&&i["a"].getters.roles,e=t,r=o.some((function(t){return e.includes(t)}));return!!r}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}}}]);