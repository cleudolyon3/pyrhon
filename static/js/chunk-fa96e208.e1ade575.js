(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa96e208"],{"0ef3":function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"f",(function(){return c})),n.d(e,"y",(function(){return d})),n.d(e,"r",(function(){return s})),n.d(e,"p",(function(){return l})),n.d(e,"q",(function(){return f})),n.d(e,"o",(function(){return m})),n.d(e,"n",(function(){return h})),n.d(e,"h",(function(){return b})),n.d(e,"m",(function(){return p})),n.d(e,"t",(function(){return v})),n.d(e,"v",(function(){return g})),n.d(e,"x",(function(){return X})),n.d(e,"s",(function(){return y})),n.d(e,"w",(function(){return A})),n.d(e,"l",(function(){return j})),n.d(e,"g",(function(){return O})),n.d(e,"A",(function(){return T})),n.d(e,"u",(function(){return x})),n.d(e,"i",(function(){return _})),n.d(e,"z",(function(){return S})),n.d(e,"k",(function(){return U})),n.d(e,"a",(function(){return k})),n.d(e,"j",(function(){return w}));var r=n("b775");function a(t){return Object(r["a"])({url:"/turma/acessoTurmaTarefa",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/turma/acessoTurmaAberta",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/turma/acessoPeriodoTurmaTarefa",method:"get",params:t})}function u(t){return Object(r["a"])({url:"/turma/acessoChildrenTurmaTarefa",method:"get",params:t})}function c(t){return Object(r["a"])({url:"/turma/acessoProfessorTurma/".concat(t),method:"get"})}function d(t,e){return Object(r["a"])({url:"/turma/turmaPeriodoTurno/".concat(t,"/").concat(e),method:"get"})}function s(t,e){return Object(r["a"])({url:"/matricula/verificarTrocarTurma/".concat(t,"/").concat(e),method:"get"})}function l(t,e,n){return Object(r["a"])({url:"/turma/getByMatricula/".concat(t,"/").concat(e,"/").concat(n),method:"get"})}function f(t,e){return Object(r["a"])({url:"/turma/getByRemanejarMatricula/".concat(t,"/").concat(e),method:"get"})}function m(t){return Object(r["a"])({url:"/turma/getByDetalhamento/".concat(t),method:"get"})}function h(t){return Object(r["a"])({url:"/turma/inforTurma/".concat(t),method:"get"})}function b(t){return Object(r["a"])({url:"/turma/alunosTransferidoCursandoTrimestreTurma/".concat(t),method:"get"})}function p(t){return Object(r["a"])({url:"/turma/infor/".concat(t),method:"get"})}function v(t){return Object(r["a"])({url:"/turma/inforMmm/".concat(t),method:"get"})}function g(t){return Object(r["a"])({url:"/turma/serieTurmaPeriodo/".concat(t),method:"get"})}function X(t){return Object(r["a"])({url:"/turma/turmaPeriodo/".concat(t),method:"get"})}function y(t){return Object(r["a"])({url:"/turma/getTurma/".concat(t),method:"get"})}function A(t){return Object(r["a"])({url:"/turma/turmaChildrenDisciplina/".concat(t),method:"get"})}function j(t){return Object(r["a"])({url:"/turma/getByDetalhe/".concat(t),method:"get"})}function O(t){return Object(r["a"])({url:"/turma/adicionar",method:"post",data:t})}function T(t){return Object(r["a"])({url:"/turma/vincular",method:"post",data:t})}function x(t){return Object(r["a"])({url:"/turma/adicionarDecreto",method:"post",data:t})}function _(t){return Object(r["a"])({url:"/turma/base",method:"post",data:t})}function S(t){return Object(r["a"])({url:"/turma/editar/",method:"put",data:t})}function U(t){return Object(r["a"])({url:"/turma/fechar",method:"put",data:t})}function k(t){return Object(r["a"])({url:"/turma/abrir",method:"put",data:t})}function w(t,e){return Object(r["a"])({url:"/turma/excluir/".concat(t),method:"get",data:e})}},"477e":function(t,e,n){"use strict";n.d(e,"l",(function(){return a})),n.d(e,"m",(function(){return o})),n.d(e,"k",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"o",(function(){return c})),n.d(e,"p",(function(){return d})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return l})),n.d(e,"h",(function(){return f})),n.d(e,"g",(function(){return m})),n.d(e,"u",(function(){return h})),n.d(e,"j",(function(){return b})),n.d(e,"i",(function(){return p})),n.d(e,"n",(function(){return v})),n.d(e,"t",(function(){return g})),n.d(e,"r",(function(){return X})),n.d(e,"v",(function(){return y})),n.d(e,"s",(function(){return A})),n.d(e,"q",(function(){return j})),n.d(e,"b",(function(){return O})),n.d(e,"a",(function(){return T})),n.d(e,"f",(function(){return x}));var r=n("b775");function a(t,e,n,a){return Object(r["a"])({url:"/conselho/quesitoPreConselho/".concat(t,"/").concat(e,"/").concat(n,"/").concat(a),method:"get"})}function o(t,e,n,a){return Object(r["a"])({url:"/conselho/quesitoTipo/".concat(t,"/").concat(e,"/").concat(n,"/").concat(a),method:"get"})}function i(t,e){return Object(r["a"])({url:"/conselho/preconselho/".concat(t,"/").concat(e),method:"get"})}function u(t,e){return Object(r["a"])({url:"/conselho/exibirResultado/".concat(t,"/").concat(e),method:"get"})}function c(t,e){return Object(r["a"])({url:"/conselho/resultUnidade/".concat(t,"/").concat(e),method:"get"})}function d(t){return Object(r["a"])({url:"/conselho/salvarAta",method:"post",data:t})}function s(t,e){return Object(r["a"])({url:"/conselho/gerarAta/".concat(t,"/").concat(e),method:"get"})}function l(t,e){return Object(r["a"])({url:"/conselho/gerarAta/".concat(t,"/").concat(e),method:"get"})}function f(t,e,n){return Object(r["a"])({url:"/conselho/observacaoConselho/".concat(t,"/").concat(e,"/").concat(n),method:"get"})}function m(t,e,n){return Object(r["a"])({url:"/conselho/imprimirPreconselhoEtapaHtml/".concat(t,"/").concat(e,"/").concat(n),method:"get"})}function h(t){return Object(r["a"])({url:"/conselho/salvarRecuperacao",method:"post",data:t})}function b(t){return Object(r["a"])({url:"/conselho/observacaoUnidadesConselho",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/conselho/observacaoUnidades",method:"post",data:t})}function v(t){return Object(r["a"])({url:"/conselho/recuperacaoDisciplina",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/conselho/salvarQuesito",method:"post",data:t})}function X(t){return Object(r["a"])({url:"/conselho/salvarConselhoAluno",method:"post",data:t})}function y(t){return Object(r["a"])({url:"/conselho/salvarRelatorioTurma",method:"post",data:t})}function A(t){return Object(r["a"])({url:"/conselho/salvarFrequenciaTrimestre",method:"post",data:t})}function j(t){return Object(r["a"])({url:"/conselho/salvarAtividadeFrequencia",method:"post",data:t})}function O(t,e,n){return Object(r["a"])({url:"/conselho/exibirRelatorioTurma/".concat(t,"/").concat(e,"/").concat(n),method:"get"})}function T(t,e,n){return Object(r["a"])({url:"/conselho/exibirAtividade/".concat(t,"/").concat(e,"/").concat(n),method:"get"})}function x(t){return Object(r["a"])({url:"/conselho/getRelatorioTurma",method:"post",data:t})}},"871a":function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return i})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return c}));var r=n("b775");function a(){return Object(r["a"])({url:"/periodo/getPeriodo",method:"get"})}function o(){return Object(r["a"])({url:"/periodo/getTodosPeriodo",method:"get"})}function i(t){return Object(r["a"])({url:"/periodo/getRenovarPeriodo/".concat(t),method:"get"})}function u(){return Object(r["a"])({url:"/periodo/acessPeriodo",method:"get"})}function c(t){return Object(r["a"])({url:"/periodo/getByIdPeriodo/".concat(t),method:"get"})}},8751:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("b775");function a(){return Object(r["a"])({url:"/turno/exibirTurno",method:"get"})}},8827:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("Ata Conselho de Classe")])]),t._v(" "),n("el-tabs",{attrs:{type:"border-card"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.ano,(function(e){return n("el-tab-pane",{key:e.id,attrs:{label:e.tipo}},[n("div",{staticClass:"demo-input-suffix"},[n("span",{staticClass:"demo-input-label"},[t._v("Escolha Turno")]),t._v(" "),n("el-select",{attrs:{placeholder:"Escolha o Turno"},model:{value:t.idTurno,callback:function(e){t.idTurno=e},expression:"idTurno"}},t._l(t.turno,(function(t){return n("el-option",{key:t.id,attrs:{label:t.turno,value:t.id}})})),1)],1),t._v(" "),t.idTurno?n("ata",{attrs:{idTurno:t.idTurno,active:e.id,idAno:e.id}}):t._e()],1)})),1)],1)],1)},a=[],o=n("871a"),i=n("8751"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-divider"),t._v(" "),n("div",{staticClass:"demo-input-suffix"},[n("span",{staticClass:"demo-input-label"},[t._v("Escolha Trimestre")]),t._v(" "),n("el-select",{attrs:{placeholder:"Escolha o Trimestre"},model:{value:t.idUnidade,callback:function(e){t.idUnidade=e},expression:"idUnidade"}},t._l(t.unidade,(function(t){return n("el-option",{key:t.id,attrs:{label:t.unidade,value:t.id}})})),1)],1),t._v(" "),n("el-divider"),t._v(" "),t.idUnidade?n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"Abertura"}},[n("el-input",{attrs:{type:"textarea",rows:6},model:{value:t.form.abertura,callback:function(e){t.$set(t.form,"abertura",e)},expression:"form.abertura"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"Fechamento"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.form.fechamento,callback:function(e){t.$set(t.form,"fechamento",e)},expression:"form.fechamento"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("Salvar")]),t._v(" "),n("el-button",{attrs:{type:"success"},on:{click:t.getLinkAta}},[t._v("Imprimir")])],1)],1):t._e(),t._v(" "),t.gerarAta?n("el-alert",{attrs:{title:"A sequência gerada vai sera sequência da ata.",type:"success"}}):t._e(),t._v(" "),t.gerarAta?n("el-table",{ref:"filterTable",staticStyle:{width:"100%"},attrs:{data:t.turmas}},[n("el-table-column",{attrs:{prop:"nometurma",label:"Turma",sortable:"","min-width":"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"turno",label:"Turno",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"tipo",label:"Período",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{label:"Gerar Ata","filter-placement":"bottom-end"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("gerarAta",{attrs:{conselho:t.conselho,idUnidade:t.idUnidade,turma:e.row},on:{imprimir:t.imprimirAta}})]}}],null,!1,477007280)})],1):t._e()],1)},c=[],d=n("db72"),s=n("2f62"),l=n("eb2d"),f=n("477e"),m=n("0ef3"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["warning"===t.botao?n("el-button",{attrs:{type:t.botao,loading:t.gerarAta},on:{click:t.getLink}},[t._v("Gerar ata")]):t._e(),t._v(" "),"success"===t.botao?n("el-button",{attrs:{type:t.botao,loading:t.gerarAta},on:{click:t.getLink}},[t._v("Ata Gerada")]):t._e()],1)},b=[],p={props:{pessoa:{type:String,default:void 0},id:{type:String,default:void 0},idUnidade:{type:String,default:void 0},idTurno:{type:String,default:void 0},conselho:{type:String,default:void 0},longitude:{type:String,default:void 0},idAno:{type:String,default:void 0},limite:{type:String,default:""},endereco:{type:Array,default:void 0},tableData:{type:Array,default:void 0},turma:{type:Array,default:void 0},table:{type:Array,default:void 0},dataAno:{type:Array,default:void 0},unidade:{type:Array,default:void 0}},data:function(){return{active:0,botao:"warning",dialogFormVisible:!1}},created:function(){this.exibirUnidade()},methods:{exibirUnidade:function(){var t=this;resultUnidadePeriodo(this.idAno).then((function(e){t.unidade=e.data}))},getLink:function(t){this.gerarAta=!0,this.onSubmit()},onSubmit:function(){var t=this;"trimestre"===this.conselho?Object(f["d"])(this.turma.idt,this.idUnidade).then((function(e){t.gerarAta=e.data,t.botao="success",t.$emit("imprimir",!0),t.$message({message:"Gerada com sucesso",type:"success"})})):Object(f["e"])(this.turma.idt,this.idUnidade).then((function(e){t.gerarAta=e.data,t.botao="success",t.$message({message:"Gerada com sucesso",type:"success"})}))},exibirAta:function(){var t=this;resultUnidade(this.idTurno,this.idUnidade).then((function(e){t.form.abertura=e.data.abertura,t.form.fechamento=e.data.fechamento}))},exibirTurma:function(){var t=this;this.idTurno&&turmaPeriodoTurno(this.idTurno,this.idAno).then((function(e){t.turmas=e.data}))}}},v=p,g=n("2877"),X=Object(g["a"])(v,h,b,!1,null,null,null),y=X.exports,A={components:{gerarAta:y},props:{pessoa:{type:String,default:void 0},gerarAta:{type:String,default:void 0},id:{type:String,default:void 0},idUnidade:{type:String,default:void 0},idTurno:{type:String,default:void 0},conselho:{type:String,default:void 0},imprimir:{type:String,default:void 0},idAno:{type:String,default:void 0},limite:{type:String,default:""},endereco:{type:Array,default:void 0},tableData:{type:Array,default:void 0},turmas:{type:Array,default:void 0},table:{type:Array,default:void 0},dataAno:{type:Array,default:void 0},unidade:{type:Array,default:void 0}},data:function(){return{active:0,dialogFormVisible:!1,form:{turno:"",unidade:"",periodo:"",abertura:"Aos XXXXXXXX dias do mês de XXXXXXXX do ano de dois mil e XXXXXXXX, as  XXXXXXXX:00 horas (XXXXXXXX), na Escola XXXXXXXX, situada na Rua XXXXXXXX, XXXXXXXX, XXXXXXXX - Bahia, deu se Início  Reunião do Conselho de Classe do XXXXXXXX ano do  Ensino  XXXXXXXX  . Essa reunião contou com a presença da Coordenador XXXXXXXX, Diretor XXXXXXXX, Vice XXXXXXXX, secretaria XXXXXXXX e dos professores do turno matutino. Teve como assunto principal o  rendimento dos alunos no período letivo  de XXXXXXXX, em sequência as turmas,",fechamento:"Nada mais havendo a tratar, segue a assinatura quem de direitos,"}}},computed:Object(d["a"])({},Object(s["c"])(["rede","token","idEscola"])),created:function(){this.exibirUnidade()},watch:{idAno:function(){this.gerarAta="",this.imprimir="",this.exibirUnidade()},idUnidade:function(){this.gerarAta="",this.imprimir="",this.exibirTurma(),this.exibirAta()}},methods:{exibirUnidade:function(){var t=this;Object(l["c"])(this.idAno).then((function(e){t.unidade=e.data}))},imprimirAta:function(){this.imprimir=!0},getLink:function(t){var e="https://fontedeluz.mgestor.com/crud/api/conselho/ataConselho/"+this.idTurno+"/"+this.idUnidade+"/"+this.idAno+"/"+this.token;window.open(e)},getLinkAta:function(t){var e="https://fontedeluz.mgestor.com/crud/api/conselho/imprimirAta/"+this.idTurno+"/"+this.idUnidade+"/"+this.token;window.open(e)},onSubmit:function(){var t=this,e={abertura:this.form.abertura,fechamento:this.form.fechamento,turno:this.idTurno,trimestre:this.idUnidade};Object(f["p"])(e).then((function(e){t.gerarAta=!0,t.$message({message:"Alterado com sucesso",type:"success"})}))},exibirAta:function(){var t=this;Object(f["o"])(this.idTurno,this.idUnidade).then((function(e){t.form.abertura=e.data.abertura,t.form.fechamento=e.data.fechamento,t.conselho=e.conselho}))},exibirTurma:function(){var t=this;this.idTurno&&Object(m["y"])(this.idTurno,this.idAno).then((function(e){t.turmas=e.data}))}}},j=A,O=Object(g["a"])(j,u,c,!1,null,null,null),T=O.exports,x={components:{ata:T},props:{pessoa:{type:String,default:void 0},idPessoa:{type:String,default:void 0},id:{type:String,default:void 0},search:{type:String,default:void 0},idTurno:{type:String,default:void 0},acesso:{type:String,default:void 0},longitude:{type:String,default:void 0},linkArquivo:{type:String,default:void 0},limite:{type:String,default:""},turno:{type:Array,default:void 0},tableData:{type:Array,default:void 0},localizacao:{type:Array,default:void 0},table:{type:Array,default:void 0},dataAno:{type:Array,default:void 0},ano:{type:Array,default:void 0}},data:function(){return{active:0,dialogFormVisible:!1}},created:function(){this.exibirAno(),this.exibirTuno()},watch:{active:function(t){t.ano&&(this.agendamento(t),this.dataAno=t)}},methods:{buscarAgenda:function(t){this.localizacao=t},fecharAgendamento:function(t){var e=this;fecharAgenda(t).then((function(t){e.$notify({title:"Sucesso",message:"Fechado com sucesso",type:"success",duration:2e3})})),this.exibirArquivo(this.dataAno)},agendamento:function(t){this.exibirArquivo(t)},exibirAno:function(){var t=this;Object(o["a"])().then((function(e){t.ano=e.data}))},exibirTuno:function(){var t=this;Object(i["a"])().then((function(e){t.turno=e.data}))},exibirArquivo:function(t){var e=this;exibirAgenda(t).then((function(t){e.tableData=t.data}))},estiloCor:function(t){return"font-size: 12px;  color:"+t+"; "}}},_=x,S=Object(g["a"])(_,r,a,!1,null,null,null);e["default"]=S.exports},eb2d:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return c}));var r=n("b775");function a(t){return Object(r["a"])({url:"/unidade/getUnidade/".concat(t),method:"get"})}function o(){return Object(r["a"])({url:"/unidade/getAlunoUnidade",method:"get"})}function i(t){return Object(r["a"])({url:"/unidade/getUnidadePeriodo/".concat(t),method:"get"})}function u(t){return Object(r["a"])({url:"/unidade/getUnidadeTurmaPeriodo/".concat(t),method:"get"})}function c(t){return Object(r["a"])({url:"/unidade/rowUnidade/".concat(t),method:"get"})}}}]);