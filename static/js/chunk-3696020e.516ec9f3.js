(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3696020e"],{"049b":function(t,n,e){"use strict";e("3b50")},"04d4":function(t,n,e){"use strict";var r,o="LISTAR_HTML",i="LISTAR_LINK",a="IS_LOADING",c={listarHtml:function(t,n){var e=t.commit;e(a,{loading:!0}),e(o,{html:n}),e(a,{loading:!1})},listarLink:function(t,n){var e=t.commit;e(a,{loading:!0}),e(i,{link:n}),e(a,{loading:!1})},resetarPrint:function(t){var n=t.commit;n(o,{html:[]}),n(i,{link:""})}},u=(e("b54a"),{listHtml:function(t){return t.html},listLink:function(t){return t.link},listLoading:function(t){return t.loading}}),l=e("bd86"),d=(r={},Object(l["a"])(r,o,(function(t,n){var e=n.html;t.html=e})),Object(l["a"])(r,i,(function(t,n){var e=n.link;t.link=e})),Object(l["a"])(r,a,(function(t,n){var e=n.loading;t.loading=e})),r),s={html:[],link:"",loading:!1},f={namespaced:!0,state:s,getters:u,mutations:d,actions:c},m="print";n["a"]=function(t){m in t._modules.root._children||t.registerModule(m,f)}},"094c":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-button",{staticStyle:{margin:"0 20px"},attrs:{loading:t.downloadLoading,type:"primary"},on:{click:t.saveDocx}},[e("svg-icon",{attrs:{"icon-class":"word"}}),t._v(" Word\n ")],1)},o=[],i=e("281c"),a=e("21a6"),c={props:{arquivo:{type:String,default:"arquivoWord"},htmlString:{type:String,default:void 0},downloadLoading:{type:Boolean,default:!1}},methods:{saveDocx:function(){var t=this;this.downloadLoading=!0,Object(i["asBlob"])("<center>"+this.htmlString+"</center>").then((function(n){Object(a["saveAs"])(n,t.arquivo+".docx")})),this.downloadLoading=!1}}},u=c,l=(e("049b"),e("2877")),d=Object(l["a"])(u,r,o,!1,null,null,null);n["a"]=d.exports},"0ef3":function(t,n,e){"use strict";e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return i})),e.d(n,"e",(function(){return a})),e.d(n,"b",(function(){return c})),e.d(n,"f",(function(){return u})),e.d(n,"y",(function(){return l})),e.d(n,"r",(function(){return d})),e.d(n,"p",(function(){return s})),e.d(n,"q",(function(){return f})),e.d(n,"o",(function(){return m})),e.d(n,"n",(function(){return h})),e.d(n,"h",(function(){return p})),e.d(n,"m",(function(){return b})),e.d(n,"t",(function(){return g})),e.d(n,"v",(function(){return v})),e.d(n,"x",(function(){return O})),e.d(n,"s",(function(){return j})),e.d(n,"w",(function(){return y})),e.d(n,"l",(function(){return _})),e.d(n,"g",(function(){return S})),e.d(n,"A",(function(){return x})),e.d(n,"u",(function(){return T})),e.d(n,"i",(function(){return w})),e.d(n,"z",(function(){return k})),e.d(n,"k",(function(){return D})),e.d(n,"a",(function(){return C})),e.d(n,"j",(function(){return $}));var r=e("b775");function o(t){return Object(r["a"])({url:"/turma/acessoTurmaTarefa",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/turma/acessoTurmaAberta",method:"get",params:t})}function a(t){return Object(r["a"])({url:"/turma/acessoPeriodoTurmaTarefa",method:"get",params:t})}function c(t){return Object(r["a"])({url:"/turma/acessoChildrenTurmaTarefa",method:"get",params:t})}function u(t){return Object(r["a"])({url:"/turma/acessoProfessorTurma/".concat(t),method:"get"})}function l(t,n){return Object(r["a"])({url:"/turma/turmaPeriodoTurno/".concat(t,"/").concat(n),method:"get"})}function d(t,n){return Object(r["a"])({url:"/matricula/verificarTrocarTurma/".concat(t,"/").concat(n),method:"get"})}function s(t,n,e){return Object(r["a"])({url:"/turma/getByMatricula/".concat(t,"/").concat(n,"/").concat(e),method:"get"})}function f(t,n){return Object(r["a"])({url:"/turma/getByRemanejarMatricula/".concat(t,"/").concat(n),method:"get"})}function m(t){return Object(r["a"])({url:"/turma/getByDetalhamento/".concat(t),method:"get"})}function h(t){return Object(r["a"])({url:"/turma/inforTurma/".concat(t),method:"get"})}function p(t){return Object(r["a"])({url:"/turma/alunosTransferidoCursandoTrimestreTurma/".concat(t),method:"get"})}function b(t){return Object(r["a"])({url:"/turma/infor/".concat(t),method:"get"})}function g(t){return Object(r["a"])({url:"/turma/inforMmm/".concat(t),method:"get"})}function v(t){return Object(r["a"])({url:"/turma/serieTurmaPeriodo/".concat(t),method:"get"})}function O(t){return Object(r["a"])({url:"/turma/turmaPeriodo/".concat(t),method:"get"})}function j(t){return Object(r["a"])({url:"/turma/getTurma/".concat(t),method:"get"})}function y(t){return Object(r["a"])({url:"/turma/turmaChildrenDisciplina/".concat(t),method:"get"})}function _(t){return Object(r["a"])({url:"/turma/getByDetalhe/".concat(t),method:"get"})}function S(t){return Object(r["a"])({url:"/turma/adicionar",method:"post",data:t})}function x(t){return Object(r["a"])({url:"/turma/vincular",method:"post",data:t})}function T(t){return Object(r["a"])({url:"/turma/adicionarDecreto",method:"post",data:t})}function w(t){return Object(r["a"])({url:"/turma/base",method:"post",data:t})}function k(t){return Object(r["a"])({url:"/turma/editar/",method:"put",data:t})}function D(t){return Object(r["a"])({url:"/turma/fechar",method:"put",data:t})}function C(t){return Object(r["a"])({url:"/turma/abrir",method:"put",data:t})}function $(t,n){return Object(r["a"])({url:"/turma/excluir/".concat(t),method:"get",data:n})}},"146a":function(t,n,e){"use strict";e.d(n,"f",(function(){return o})),e.d(n,"g",(function(){return i})),e.d(n,"d",(function(){return a})),e.d(n,"e",(function(){return c})),e.d(n,"c",(function(){return u})),e.d(n,"h",(function(){return l})),e.d(n,"i",(function(){return d})),e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return f}));var r=e("b775");function o(t){return Object(r["a"])({url:"/horario/horario/".concat(t),method:"get"})}function i(t,n){return Object(r["a"])({url:"/horario/horarioProfessor/".concat(t,"/").concat(n),method:"get"})}function a(t,n){return Object(r["a"])({url:"/diario/getProfessorEscolaTurnoDisciplina/".concat(t,"/").concat(n),method:"get"})}function c(t,n){return Object(r["a"])({url:"/diario/getProfessorTurno/".concat(t,"/").concat(n),method:"get"})}function u(t){return Object(r["a"])({url:"/diario/getProfessorEscolaTurno/".concat(t),method:"get"})}function l(t){return Object(r["a"])({url:"/diario/adicionarVinculo",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/diario/adicionarVinculoDisciplina",method:"post",data:t})}function s(t,n){return Object(r["a"])({url:"/documentos/diario/".concat(t,"/").concat(n),method:"get"})}function f(t,n,e){return Object(r["a"])({url:"/documentos/disciplinaDiario/".concat(t,"/").concat(n,"/").concat(e),method:"get"})}},1679:function(t,n,e){},"3b50":function(t,n,e){},"44a2":function(t,n,e){"use strict";e("96cf");var r,o=e("3b8d"),i=e("0ef3"),a="LISTAR_TURMA",c="EDITAR_TURMA",u="TOTAL_TURMA",l="CRIAR_TURMA",d="DELETAR_TURMA",s="LISTAR_MINHAS_TURMA",f="LISTAR_PERIODO_TURMA",m="IS_LOADING",h={criarTurma:function(t,n){var e=t.commit;return Object(i["g"])(n).then((function(t){return e(l,{turma:t.data}),t.data})).catch((function(t){reject(t)}))},abrirTurma:function(t,n){var e=t.commit,r=n.turma;return Object(i["a"])(r).then((function(t){return e(c,{turma:t.data})})).catch((function(t){reject(t)}))},fecharTurma:function(t,n){var e=t.commit,r=n.turma;return Object(i["k"])(r).then((function(t){return e(c,{turma:t.data})})).catch((function(t){reject(t)}))},editarTurma:function(t,n){var e=t.commit,r=n.turma;return Object(i["z"])(r).then((function(t){return e(c,{turma:t.data})})).catch((function(t){reject(t)}))},deletarTurma:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n,e){var r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.commit,o=e.turma,t.next=4,Object(i["j"])(o.id);case 4:t.sent,r(d,{turma:o});case 6:case"end":return t.stop()}}),t)})));function n(n,e){return t.apply(this,arguments)}return n}(),listarMinhasTurma:function(t,n){var e=t.commit;return e(m,{loading:!0}),new Promise((function(t,r){Object(i["c"])(n).then((function(n){var r=n.data;e(s,{turma:r}),e(m,{loading:!1}),t()})).catch((function(t){e(m,{loading:!1}),r(t)}))}))},listarMinhasPeriodoTurma:function(t,n){var e=t.commit;return e(m,{loading:!0}),new Promise((function(t,r){Object(i["e"])(n).then((function(n){var r=n.data;e(f,{turma:r}),e(m,{loading:!1}),t()})).catch((function(t){e(m,{loading:!1}),r(t)}))}))},resetarTurmas:function(t){var n=t.commit;n(s,{turma:[]})}},p={listTurmas:function(t){return t.turmas},listMinhasTurma:function(t){return t.minhasTurma},listPeriodoTurma:function(t){return t.periodoTurma},totalTurma:function(t,n){return n.listMinhasTurma.length},totalMinhasTurma:function(t,n){return n.listMinhasTurma.length},listTotal:function(t){return t.total},listLoading:function(t){return t.loading}},b=e("bd86"),g=(e("20d6"),r={},Object(b["a"])(r,c,(function(t,n){var e=n.turma,r=t.minhasTurma.findIndex((function(t){return t.id===e.id}));t.minhasTurma.splice(r,1,e)})),Object(b["a"])(r,l,(function(t,n){var e=n.turma;t.minhasTurma.push(e)})),Object(b["a"])(r,d,(function(t,n){var e=n.turma,r=t.minhasTurma.findIndex((function(t){return t.id===e.id}));t.minhasTurma.splice(r,1)})),Object(b["a"])(r,s,(function(t,n){var e=n.turma;t.minhasTurma=e})),Object(b["a"])(r,f,(function(t,n){var e=n.turma;t.periodoTurma=e})),Object(b["a"])(r,a,(function(t,n){var e=n.turma;t.turma=e})),Object(b["a"])(r,u,(function(t,n){n.turma;t.total=total})),Object(b["a"])(r,m,(function(t,n){var e=n.loading;t.loading=e})),r),v={turma:"",turmas:[],total:"",minhasTurma:"",periodoTurma:"",loading:!1},O={namespaced:!0,state:v,getters:p,mutations:g,actions:h},j="turma";n["a"]=function(t){j in t._modules.root._children||t.registerModule(j,O)}},"50ce":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{display:"inline-block"}},[e("label",{staticClass:"radio-label",staticStyle:{"padding-left":"0"}},[t._v("Nome do Arquivo: ")]),t._v(" "),e("el-input",{staticStyle:{width:"345px"},attrs:{placeholder:"Por favor, insira o nome do arquivo (lista do excel padrão)","prefix-icon":"el-icon-document"},model:{value:t.filename,callback:function(n){t.filename=n},expression:"filename"}})],1)},o=[],i={props:{value:{type:String,default:""}},computed:{filename:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},a=i,c=e("2877"),u=Object(c["a"])(a,r,o,!1,null,null,null);n["a"]=u.exports},7217:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("el-dialog",{attrs:{title:"Fechar Vínculo",visible:t.centerDialogVisible,width:"90%",center:""},on:{"update:visible":function(n){t.centerDialogVisible=n}}},[e("el-form",{ref:"dataForm",attrs:{rules:t.rules,size:"mini",model:t.dataForm,"label-width":"180px"}},[e("el-form-item",{attrs:{label:"Data",prop:"data",required:""}},[e("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",format:"dd/MM/yyyy",placeholder:"Data Início"},model:{value:t.dataForm.data,callback:function(n){t.$set(t.dataForm,"data",n)},expression:"dataForm.data"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"Observação"}},[e("el-input",{attrs:{type:"textarea"},model:{value:t.dataForm.observacao,callback:function(n){t.$set(t.dataForm,"observacao",n)},expression:"dataForm.observacao"}})],1)],1),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(n){return t.fechar()}}},[t._v("Cancelar")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.createData()}}},[t._v("Fechar Vínculo")])],1)],1)],1)},o=[],i=e("7582"),a={name:"VincularFecharFuncionario",props:{form:{type:Array,requred:void 0},centerDialogVisible:{type:Boolean,requred:void 0},id:{type:String,requred:void 0},idVinculo:{type:String,requred:void 0},teste:{type:String,requred:void 0}},watch:{idVinculo:function(t){this.getVinculo(t)}},data:function(){return{activeName:"",informacao:!1,dataForm:{idpessoa:this.idPessoa,id:this.idVinculo,observacao:"",data:""},rules:{data:[{required:!0,message:"Escolha uma data",trigger:"blur"}]}}},created:function(){this.getVinculo(this.idVinculo)},mounted:function(){this.dataForm.data=this.printDate()},methods:{printDate:function(){return(new Date).toISOString().slice(0,10)},getVinculo:function(t){var n=this;getVinculoFuncionario(t).then((function(t){n.dataForm=t.data}))},fechar:function(){this.$emit("fechado",this.idVinculo)},createData:function(){var t=this;this.$refs["dataForm"].validate((function(n){n&&(t.dataForm.id=t.idVinculo,Object(i["o"])(t.dataForm),t.$emit("fechado",t.idVinculo),t.$notify({title:"Sucesso",message:"Fechado Vínculado com sucesso",type:"success",duration:2e3}),t.centerDialogVisible=!1,t.dataForm.observacao="")}))}}},c=a,u=e("2877"),l=Object(u["a"])(c,r,o,!1,null,null,null);n["a"]=l.exports},7582:function(t,n,e){"use strict";e.d(n,"m",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"s",(function(){return a})),e.d(n,"a",(function(){return c})),e.d(n,"o",(function(){return u})),e.d(n,"B",(function(){return l})),e.d(n,"r",(function(){return d})),e.d(n,"y",(function(){return s})),e.d(n,"z",(function(){return f})),e.d(n,"A",(function(){return m})),e.d(n,"x",(function(){return h})),e.d(n,"n",(function(){return p})),e.d(n,"q",(function(){return b})),e.d(n,"v",(function(){return g})),e.d(n,"k",(function(){return v})),e.d(n,"h",(function(){return O})),e.d(n,"w",(function(){return j})),e.d(n,"u",(function(){return y})),e.d(n,"t",(function(){return _})),e.d(n,"b",(function(){return S})),e.d(n,"g",(function(){return x})),e.d(n,"l",(function(){return T})),e.d(n,"f",(function(){return w})),e.d(n,"e",(function(){return k})),e.d(n,"j",(function(){return D})),e.d(n,"d",(function(){return C}));var r=e("b775");function o(t){return Object(r["a"])({url:"/funcionario/exibirPessoa/".concat(t),method:"get"})}function i(){return Object(r["a"])({url:"/funcionario/buscaPessoa",method:"get"})}function a(t){return Object(r["a"])({url:"/funcionario/getVinculoHistorico/".concat(t),method:"get"})}function c(t){return Object(r["a"])({url:"/funcionario/adicionar",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/funcionario/fechar",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/funcionario/vincular",method:"post",data:t})}function d(t,n){return Object(r["a"])({url:"/funcionario/getVinculoCargoHistorico/".concat(t,"/").concat(n),method:"get"})}function s(t){return Object(r["a"])({url:"/funcionario/editar",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/funcionario/verificar",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/funcionario/verificarMatricula/".concat(t),method:"get"})}function h(t){return Object(r["a"])({url:"/funcionario/trocarSenha",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/funcionario/exibirResponsavel/".concat(t),method:"get"})}function b(t){return Object(r["a"])({url:"/funcionario/getEspecial/".concat(t),method:"get"})}function g(t){return Object(r["a"])({url:"/funcionario/senha/".concat(t),method:"get"})}function v(t,n){return Object(r["a"])({url:"/funcionario/exibirFoto/".concat(t,"/").concat(n),method:"get"})}function O(t){return Object(r["a"])({url:"/funcionario/cadastrarSenha/".concat(t),method:"get"})}function j(t){return Object(r["a"])({url:"/funcionario/cancelarSenha/".concat(t),method:"get"})}function y(t){return Object(r["a"])({url:"/funcionario/ativarSenha/".concat(t),method:"get"})}function _(t){return Object(r["a"])({url:"/funcionario/alterarSenha/".concat(t),method:"get"})}function S(t){return Object(r["a"])({url:"/funcionario/alterarUsuario/".concat(t),method:"get"})}function x(t){return Object(r["a"])({url:"/funcionario/adicionarResponsavel",method:"post",data:t})}function T(t){return Object(r["a"])({url:"/funcionario/exibirMatricula/".concat(t),method:"get"})}function w(t){return Object(r["a"])({url:"/funcionario/adicionarMatricula",method:"post",data:t})}function k(t){return Object(r["a"])({url:"/funcionario/adicionarDataMatricula",method:"post",data:t})}function D(t){return Object(r["a"])({url:"/funcionario/exibirConcluinte/".concat(t),method:"get"})}function C(t){return Object(r["a"])({url:"/funcionario/adicionarConcluinte",method:"post",data:t})}},8751:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e("b775");function o(){return Object(r["a"])({url:"/turno/exibirTurno",method:"get"})}},"8ad2":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{display:"inline-block"}},[e("label",{staticClass:"radio-label"},[t._v("Largura automática da célula: ")]),t._v(" "),e("el-radio-group",{model:{value:t.autoWidth,callback:function(n){t.autoWidth=n},expression:"autoWidth"}},[e("el-radio",{attrs:{label:!0,border:""}},[t._v("\n    Sim\n    ")]),t._v(" "),e("el-radio",{attrs:{label:!1,border:""}},[t._v("\n    Não\n    ")])],1)],1)},o=[],i={props:{value:{type:Boolean,default:!0}},computed:{autoWidth:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},a=i,c=e("2877"),u=Object(c["a"])(a,r,o,!1,null,null,null);n["a"]=u.exports},"8b25":function(t,n,e){"use strict";e.d(n,"m",(function(){return o})),e.d(n,"u",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"v",(function(){return c})),e.d(n,"s",(function(){return u})),e.d(n,"i",(function(){return l})),e.d(n,"o",(function(){return d})),e.d(n,"e",(function(){return s})),e.d(n,"l",(function(){return f})),e.d(n,"b",(function(){return m})),e.d(n,"n",(function(){return h})),e.d(n,"d",(function(){return p})),e.d(n,"g",(function(){return b})),e.d(n,"q",(function(){return g})),e.d(n,"h",(function(){return v})),e.d(n,"r",(function(){return O})),e.d(n,"f",(function(){return j})),e.d(n,"p",(function(){return y})),e.d(n,"j",(function(){return _})),e.d(n,"a",(function(){return S})),e.d(n,"t",(function(){return x})),e.d(n,"k",(function(){return T}));var r=e("b775");function o(t){return Object(r["a"])({url:"/documentos/exibirCpf/".concat(t),method:"get"})}function i(t){return Object(r["a"])({url:"/documentos/fichaIndividualHtml/".concat(t),method:"get"})}function a(t){return Object(r["a"])({url:"/documentos/adicionarCpf",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/documentos/pdf",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/documentos/exibirSus/".concat(t),method:"get"})}function l(t){return Object(r["a"])({url:"/documentos/adicionarSus",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/documentos/exibirNis/".concat(t),method:"get"})}function s(t){return Object(r["a"])({url:"/documentos/adicionarNis",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/documentos/exibirBolsa/".concat(t),method:"get"})}function m(t){return Object(r["a"])({url:"/documentos/adicionarBolsa",method:"post",data:t})}function h(t){return Object(r["a"])({url:"/documentos/exibirInep/".concat(t),method:"get"})}function p(t){return Object(r["a"])({url:"/documentos/adicionarInep",method:"post",data:t})}function b(t){return Object(r["a"])({url:"/documentos/adicionarRg",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/documentos/exibirRg/".concat(t),method:"get"})}function v(t){return Object(r["a"])({url:"/documentos/adicionarRnovo",method:"post",data:t})}function O(t){return Object(r["a"])({url:"/documentos/exibirRnovo/".concat(t),method:"get"})}function j(t){return Object(r["a"])({url:"/documentos/adicionarRantigo",method:"post",data:t})}function y(t){return Object(r["a"])({url:"/documentos/exibirRantigo/".concat(t),method:"get"})}function _(t){return Object(r["a"])({url:"/documentos/editarLink",method:"post",data:t})}function S(t){return Object(r["a"])({url:"/documentos/baixarLink/".concat(t),method:"get"})}function x(t){return Object(r["a"])({url:"/documentos/fecharLink/".concat(t),method:"get"})}function T(t){return Object(r["a"])({url:"/documentos/exibirLink/".concat(t),method:"get"})}},"914d":function(t,n,e){"use strict";var r,o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("el-alert",{attrs:{title:"Fechar o vínculo o funcionário, não vai ter mais acesso ao cargo e turno  ou a instituição  fechada.",type:"error"}}),t._v(" "),e("el-input",{attrs:{placeholder:"Digite o nome"},model:{value:t.search,callback:function(n){t.search=n},expression:"search"}}),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.matricula.filter((function(n){return!t.search||n.nomePessoa.toLowerCase().includes(t.search.toLowerCase())})),size:"mini"}},[e("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("p",[t._v("Turno: "+t._s(n.row.turno))]),t._v(" "),e("p",[t._v("Escola: "+t._s(n.row.escola))]),t._v(" "),e("p",[t._v("CargaHorária: "+t._s(n.row.integrada))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Funcionário",prop:"nomePessoa",width:"200"}}),t._v(" "),e("el-table-column",{attrs:{label:"Inicío",width:"100"},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v("\r\n"+t._s(t._f("moment")(n.row.inicio,"DD/MM/YYYY"))+"\r\n\r\n      ")]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Final",width:"100"},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v("\r\n"+t._s(t._f("moment")(n.row.final,"DD/MM/YYYY"))+"\r\n\r\n      ")]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Turno",prop:"turno",width:"100"}}),t._v(" "),e("el-table-column",{attrs:{label:"Cargo","min.width":"480"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(n.row.cargo))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Vínculo",prop:"vinculo",width:"100"}}),t._v(" "),e("el-table-column",{attrs:{label:"Carga Horária",prop:"cargaHoraria",width:"120"}}),t._v(" "),e("el-table-column",{attrs:{label:"Situação",prop:"situacao",width:"120"}}),t._v(" "),e("el-table-column",{attrs:{label:"Fechar Vínculo",width:"200"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{size:"mini",type:"warning",plain:""},on:{click:function(e){return t.fecharVinculo(n.row.id)}}},[t._v("Fechar Vínculo")])]}}])})],1),t._v(" "),e("el-dialog",{attrs:{width:"95%",title:"Imprimir Declaração Frequência",visible:t.dialogFormVisible},on:{"update:visible":function(n){t.dialogFormVisible=n}}},[e("div",[e("el-radio-group",{attrs:{size:"small"},on:{change:function(n){return t.getDeclaracao(t.modelo)}},model:{value:t.modelo,callback:function(n){t.modelo=n},expression:"modelo"}},[e("el-radio",{attrs:{label:"1",border:""}},[t._v("Frequência 1")]),t._v(" "),e("el-radio",{attrs:{label:"2",border:""}},[t._v("Limpa 2")]),t._v(" "),e("el-radio",{attrs:{label:"3",border:""}},[t._v("Nota 3")]),t._v(" "),e("el-radio",{attrs:{label:"4",border:""}},[t._v("Tudo 4")])],1)],1),t._v(" "),t.modelo?e("div",["false"!==t.baixarPdf?e("el-button",{staticStyle:{"margin-top":"5px"},attrs:{type:"warning"},on:{click:function(n){return t.fetchData(t.html)}}},[t._v("PDF"),e("i",{staticClass:"el-icon-download el-icon-right"})]):t._e(),t._v(" "),e("el-button",{staticStyle:{"margin-top":"5px"},attrs:{type:"danger"},on:{click:function(n){return t.getLink()}}},[t._v("PDF ABERTO"),e("i",{staticClass:"el-icon-position el-icon-right"})]),t._v(" "),"false"!==t.baixarWord?e("word",{staticStyle:{"margin-top":"5px"},attrs:{arquivo:t.titulo,htmlString:t.html}}):t._e(),t._v(" "),"false"!==t.baixarEditor?e("el-button",{staticStyle:{"margin-top":"5px"},attrs:{type:"success",icon:"el-icon-edit"},on:{click:t.editor}},[t._v("Editor")]):t._e()],1):t._e(),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(n){t.dialogFormVisible=!1}}},[t._v("Cancelar")])],1)]),t._v("\r\nLegenda Vínculo:\r\n"),t._l(t.ensino,(function(n){return e("span",{key:n.id},[t._v("("+t._s(n.id)+") "+t._s(n.tipo)+" - ")])})),t._v(" "),t.idVinculo?e("fechar",{attrs:{idVinculo:t.idVinculo,centerDialogVisible:t.centerDialogVisible,idpessoa:t.idPessoa},on:{fechado:t.recarregar}}):t._e()],2)},i=[],a=(e("6b54"),e("96cf"),e("3b8d")),c=(e("b54a"),e("db72")),u=e("bd86"),l=e("2f62"),d=e("50ce"),s=e("8ad2"),f=e("ebe1"),m=e("ca72"),h=e("094c"),p=e("fc46"),b=e("7217"),g=e("8b25"),v=e("04d4"),O=e("d5f3"),j=e("7582"),y=e("db40"),_=Object(l["a"])("print"),S=_.mapActions,x=_.mapGetters,T={components:{tinymce:m["a"],FilenameOption:d["a"],word:h["a"],pdf:p["a"],fechar:b["a"],AutoWidthOption:s["a"],BookTypeOption:f["a"]},props:(r={matricula:{type:Array,default:void 0},idPessoa:{type:String,default:void 0},pessoa:{type:String,default:void 0},user:{type:String,default:void 0},informacao:{type:Array,default:void 0},centerDialogVisible:{type:Boolean,default:void 0},idVinculo:{type:String,default:void 0},ensino:{type:Array,default:void 0},receberHistoricoAluno:{type:String,default:void 0},idTurma:{type:String,default:void 0},recebimentoHistorico:{type:Boolean,default:void 0},declaracaoAluno:{type:Boolean,default:void 0}},Object(u["a"])(r,"centerDialogVisible",{type:Boolean,default:void 0}),Object(u["a"])(r,"listMatricula",{type:Array,default:void 0}),Object(u["a"])(r,"listTransferencia",{type:Array,default:void 0}),Object(u["a"])(r,"contato",{type:Array,default:void 0}),Object(u["a"])(r,"email",{type:Array,default:void 0}),Object(u["a"])(r,"link",{type:String,default:void 0}),Object(u["a"])(r,"html",{type:String,default:void 0}),Object(u["a"])(r,"cargo",{type:String,default:0}),Object(u["a"])(r,"turno",{type:String,default:0}),Object(u["a"])(r,"baixarWord",{type:String,default:void 0}),Object(u["a"])(r,"baixarPdf",{type:String,default:void 0}),Object(u["a"])(r,"baixarEditor",{type:String,default:void 0}),r),data:function(){return{centerDialogVisible:!1,select:"1",search:"",activeName:"first",dialogFormVisible:!1,list:null,listLoading:!0,downloadLoading:!1,filename:"",active:"editar",html:"",autoWidth:!0,currentData:"",bookType:"xlsx",modelo:"",image:""}},computed:Object(c["a"])(Object(c["a"])({},x(["listHtml","listLink"])),Object(l["c"])(["rede","token","idEscola"])),created:function(){Object(v["a"])(this.$store),this.exibirHistorico(this.cargo,this.turno),this.exibirEnsino()},methods:Object(c["a"])(Object(c["a"])({exibirHistorico:function(t,n){var e=this;Object(j["r"])(t,n).then((function(t){e.matricula=t.data}))},exibirEnsino:function(){var t=this;Object(y["c"])().then((function(n){t.ensino=n.data}))},fecharVinculo:function(t){this.centerDialogVisible=!0,this.idVinculo=t},recarregar:function(){this.exibirHistorico(this.cargo,this.turno),this.centerDialogVisible=!1},exibirDeclaracao:function(t,n){this.idPessoa=t,this.idTurma=n,this.dialogFormVisible=!0},acessoEditar:function(){this.activeName="editar"},getLink:function(){var t="https://fontedeluz.mgestor.com/crud/api/declaracoes/frequenciaAnteriorAberta/"+this.idPessoa+"/"+this.idTurma+"/"+this.modelo+"/"+this.token;window.open(t)},getDeclaracao:function(t){var n=this;this.modelo=t,Object(O["i"])(this.idPessoa,this.idTurma,this.modelo).then((function(t){n.html=t.data})).catch((function(t){console.log(t)}))}},S(["listarHtml","listarLink","resetarPrint"])),{},{editor:function(){this.resetarPrint(),this.listarHtml(this.html),this.listarLink(this.link),this.$router.push("/print/impressoesEditar"),this.$emit("fechar")},fetchData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n){var e,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,e={html:n},t.next=4,Object(g["v"])(e).then((function(t){r.link=t.link,r.isLoading=!1,r.downloadContract()}));case 4:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),downloadContract:function(){var t=this;this.$http.get(this.link,{responseType:"arraybuffer"}).then((function(n){var e=new Blob([n.data],{type:"application/pdf"}),r=document.createElement("a");r.href=window.URL.createObjectURL(e),r.download=t.titulo+t.currentData+".pdf",r.click()}))},exibirContato:function(t){function n(n){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t){var n=this;this.contato="",exibirContato(t).then((function(t){n.contato=t.data}))}))})},w=T,k=e("2877"),D=Object(k["a"])(w,o,i,!1,null,null,null);n["a"]=D.exports},c4a9:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return o}));var r=function(){return"undefined"!==typeof window?window:t},o=function(){var t=r();return t&&t.tinymce?t.tinymce:null}}).call(this,e("c8ba"))},ca72:function(t,n,e){"use strict";var r=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],o=function(t){return-1!==r.map((function(t){return t.toLowerCase()})).indexOf(t.toLowerCase())},i=function(t,n,e){Object.keys(n).filter(o).forEach((function(r){var o=n[r];"function"===typeof o&&("onInit"===r?o(t,e):e.on(r.substring(2),(function(t){return o(t,e)})))}))},a=function(t,n){var e=t.$props.modelEvents?t.$props.modelEvents:null,r=Array.isArray(e)?e.join(" "):e;n.on(r||"change input undo redo",(function(){t.$emit("input",n.getContent({format:t.$props.outputFormat}))}))},c=function(t,n,e){var r=n.$props.value?n.$props.value:"",o=n.$props.initialValue?n.$props.initialValue:"";e.setContent(r||(n.initialized?n.cache:o)),n.$watch("value",(function(t,r){e&&"string"===typeof t&&t!==r&&t!==e.getContent({format:n.$props.outputFormat})&&e.setContent(t)})),n.$listeners.input&&a(n,e),i(t,n.$listeners,e),n.initialized=!0},u=0,l=function(t){var n=Date.now(),e=Math.floor(1e9*Math.random());return u++,t+"_"+e+u+String(n)},d=function(t){return null!==t&&"textarea"===t.tagName.toLowerCase()},s=function(t){return"undefined"===typeof t||""===t?[]:Array.isArray(t)?t:t.split(" ")},f=function(t,n){return s(t).concat(s(n))},m=function(t){return null===t||void 0===t},h=function(){return{listeners:[],scriptId:l("tiny-script"),scriptLoaded:!1}},p=function(){var t=h(),n=function(t,n,e,r){var o=n.createElement("script");o.referrerPolicy="origin",o.type="application/javascript",o.id=t,o.src=e;var i=function(){o.removeEventListener("load",i),r()};o.addEventListener("load",i),n.head&&n.head.appendChild(o)},e=function(e,r,o){t.scriptLoaded?o():(t.listeners.push(o),e.getElementById(t.scriptId)||n(t.scriptId,e,r,(function(){t.listeners.forEach((function(t){return t()})),t.scriptLoaded=!0})))},r=function(){t=h()};return{load:e,reinitialize:r}},b=p(),g=e("c4a9"),v={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(t){return"html"===t||"text"===t}}},O=function(){return O=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e],n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},O.apply(this,arguments)},j=function(t,n,e){return t(e||"div",{attrs:{id:n}})},y=function(t,n){return t("textarea",{attrs:{id:n},style:{visibility:"hidden"}})},_=function(t){return function(){var n=O(O({},t.$props.init),{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:f(t.$props.init&&t.$props.init.plugins,t.$props.plugins),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(n){t.editor=n,n.on("init",(function(e){return c(e,t,n)})),t.$props.init&&"function"===typeof t.$props.init.setup&&t.$props.init.setup(n)}});d(t.element)&&(t.element.style.visibility="",t.element.style.display=""),Object(g["a"])().init(n)}},S={props:v,created:function(){this.elementId=this.$props.id||l("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline,this.initialized=!1},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(g["a"])())_(this)();else if(this.element&&this.element.ownerDocument){var t=this.$props.cloudChannel?this.$props.cloudChannel:"5",n=this.$props.apiKey?this.$props.apiKey:"no-api-key",e=m(this.$props.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/"+n+"/tinymce/"+t+"/tinymce.min.js":this.$props.tinymceScriptSrc;b.load(this.element.ownerDocument,e,_(this))}},beforeDestroy:function(){null!==Object(g["a"])()&&Object(g["a"])().remove(this.editor)},deactivated:function(){var t;this.inlineEditor||(this.cache=this.editor.getContent(),null===(t=Object(g["a"])())||void 0===t||t.remove(this.editor))},activated:function(){!this.inlineEditor&&this.initialized&&_(this)()},render:function(t){return this.inlineEditor?j(t,this.elementId,this.$props.tagName):y(t,this.elementId)}};n["a"]=S},d5f3:function(t,n,e){"use strict";e.d(n,"h",(function(){return o})),e.d(n,"i",(function(){return i})),e.d(n,"l",(function(){return a})),e.d(n,"g",(function(){return c})),e.d(n,"j",(function(){return u})),e.d(n,"c",(function(){return l})),e.d(n,"b",(function(){return d})),e.d(n,"a",(function(){return s})),e.d(n,"k",(function(){return f})),e.d(n,"e",(function(){return m})),e.d(n,"d",(function(){return h})),e.d(n,"f",(function(){return p}));var r=e("b775");function o(t,n){return Object(r["a"])({url:"/declaracoes/frequencia/".concat(t,"/").concat(n),method:"get"})}function i(t,n,e){return Object(r["a"])({url:"/declaracoes/frequenciaAnterior/".concat(t,"/").concat(n,"/").concat(e),method:"get"})}function a(t,n){return Object(r["a"])({url:"/declaracoes/transferencia/".concat(t,"/").concat(n),method:"get"})}function c(t,n,e){return Object(r["a"])({url:"/declaracoes/dado/".concat(t,"/").concat(n,"/").concat(e),method:"get"})}function u(t,n,e){return Object(r["a"])({url:"/declaracoes/imagem/".concat(t,"/").concat(n,"/").concat(e),method:"get"})}function l(t){return Object(r["a"])({url:"/declaracoes/confirmarTransferencia",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/declaracoes/confirmarCancelamento",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/declaracoes/abrir",method:"post",data:t})}function f(t,n,e){return Object(r["a"])({url:"/declaracoes/projeto/".concat(t,"/").concat(n,"/").concat(e),method:"get"})}function m(t,n,e){return Object(r["a"])({url:"/declaracoes/fichaMatricula/".concat(t,"/").concat(n,"/").concat(e),method:"get"})}function h(t,n,e){return Object(r["a"])({url:"/declaracoes/fichaMatriculaContrato/".concat(t,"/").concat(n,"/").concat(e),method:"get"})}function p(t,n){return Object(r["a"])({url:"/declaracoes/fichaMatriculaPeriodoContrato/".concat(t,"/").concat(n),method:"get"})}},da3ce:function(t,n,e){"use strict";e("1679")},db40:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"e",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return c})),e.d(n,"d",(function(){return u}));var r=e("b775");function o(){return Object(r["a"])({url:"/ensino/acessoEnsino",method:"get"})}function i(){return Object(r["a"])({url:"/ensino/acessoEnsino",method:"get"})}function a(){return Object(r["a"])({url:"/ensino/getAberto",method:"get"})}function c(){return Object(r["a"])({url:"/ensino/acessoEnsinoSerie",method:"get"})}function u(t){return Object(r["a"])({url:"/ensino/getEnsino/".concat(t),method:"get"})}},ebe1:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{display:"inline-block"}},[e("label",{staticClass:"radio-label"},[t._v("Tipo de Arquivo: ")]),t._v(" "),e("el-select",{staticStyle:{width:"120px"},model:{value:t.bookType,callback:function(n){t.bookType=n},expression:"bookType"}},t._l(t.options,(function(t){return e("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)},o=[],i={props:{value:{type:String,default:"xlsx"}},data:function(){return{options:["xlsx","csv","txt"]}},computed:{bookType:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},a=i,c=e("2877"),u=Object(c["a"])(a,r,o,!1,null,null,null);n["a"]=u.exports},fc46:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return!0===t.pdfFile?e("div",[e("div",{staticClass:"vue-html2pdf"},[e("transition",{attrs:{name:"transition-anim"}},[e("section",{staticClass:"pdf-preview"},[e("button",{on:{click:function(n){return n.target!==n.currentTarget?null:t.closePreview()}}},[t._v("\n\t\t\t\t\t×\n\t\t\t\t")]),t._v(" "),e("iframe",{attrs:{src:t.html,width:"100%",height:"100%"}})])])],1)]):t._e()},o=[],i={name:"Janela Print",props:{html:{type:String,default:void 0},pdfFile:{type:Boolean,default:!1}},methods:{closePreview:function(){this.pdfFile=!1,$emit("exibirDialog")}}},a=i,c=(e("da3ce"),e("2877")),u=Object(c["a"])(a,r,o,!1,null,"20d6fc3d",null);n["a"]=u.exports}}]);