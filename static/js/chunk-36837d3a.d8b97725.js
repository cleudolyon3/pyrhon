(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36837d3a","chunk-93a01390","chunk-93a01390"],{"1a13":function(t,a,e){},"386b":function(t,a,e){var n=e("5ca1"),r=e("79e5"),u=e("be13"),o=/"/g,i=function(t,a,e,n){var r=String(u(t)),i="<"+a;return""!==e&&(i+=" "+e+'="'+String(n).replace(o,"&quot;")+'"'),i+">"+r+"</"+a+">"};t.exports=function(t,a){var e={};e[t]=a(i),n(n.P+n.F*r((function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3})),"String",e)}},"53c6":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{margin:"1em"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"toggle",on:{click:t.toggle}},[t._v("Grave seu Áudio")]),t._v(" "),t.showRecorder?e("audio-recorder",{attrs:{"upload-url":t.tarefa,filename:"mgestor",format:"mp3",attempts:3,time:2,headers:t.headers,"before-recording":t.callback,"pause-recording":t.callback,"after-recording":t.callback,"select-record":t.callback,"before-upload":t.callback,"successful-upload":t.callback,"failed-upload":t.callback,"bit-rate":192}}):t._e(),t._v(" "),t.showRecorder?t._e():e("audio-player",{attrs:{src:t.tarefa}})],1)])},r=[],u={name:"Audio",props:{isEdit:{type:Boolean,default:!1},status:{type:String,default:void 0},tarefa:{type:String,default:void 0},link:{type:Object,default:void 0}},data:function(){return{showRecorder:!0,headers:{"X-Custom-Header":"some data"}}},methods:{callback:function(t){console.debug("Event: ",t)},toggle:function(){this.showRecorder=!this.showRecorder}}},o=u,i=(e("85c2"),e("2877")),c=Object(i["a"])(o,n,r,!1,null,null,null);a["a"]=c.exports},"85c2":function(t,a,e){"use strict";e("b3b5f")},b3b5f:function(t,a,e){},b54a:function(t,a,e){"use strict";e("386b")("link",(function(t){return function(a){return t(this,"a","href",a)}}))},e992:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Audio")},r=[],u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"createPost-container"},[e("div",{staticStyle:{margin:"1em"}},[e("Menu",{attrs:{"id-aula":t.postForm.id,identificador:t.item,"id-turma":t.idTurma,"id-disciplina":t.idDisciplina}}),t._v(" "),e("el-col",{attrs:{span:24}},[e("h2",[t._v(t._s(t.postForm.titulo))])]),t._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer",span:24},slot:"footer"})],1),t._v(" "),e("md-card",{staticClass:"md-accent"},[e("md-card-header",[e("md-card-header-text",[e("div",{staticClass:"md-title"},[t._v(" ÁUDIO")]),t._v(" "),e("div",{staticClass:"md-subhead"},[t._v("Áudio enviado pelo professor(a)")])])],1)],1),t._v(" "),t._l(t.link,(function(a){return e("div",{key:a.id},[6==a.tipo?e("div",{staticStyle:{margin:"1em"}},[6==a.tipo?e("span",{staticClass:"md-headline",domProps:{innerHTML:t._s(a.titulo)}}):t._e(),t._v(" "),e("vue-audio",{attrs:{"audio-source":a.link}})],1):t._e()])})),t._v(" "),e("md-card",{staticClass:"md-accent"},[e("md-card-header",[e("md-card-header-text",[e("div",{staticClass:"md-title"},[t._v("ENVIAR ARQUIVOS E ÁUDIO")]),t._v(" "),e("div",{staticClass:"md-subhead"},[t._v("Envie fotos do caderno ou arquivos")])])],1)],1),t._v(" "),0===t.status?e("div",[e("Audio",{attrs:{tarefa:t.linkAudio,link:t.linkDataArquivo}})],1):t._e(),t._v(" "),t._l(t.linkDataArquivo,(function(a){return e("div",{key:a.id},[6==a.tipo?e("div",{staticStyle:{margin:"1em"}},[6==a.tipo?e("span",{staticClass:"md-headline",domProps:{innerHTML:t._s(a.name)}}):t._e(),t._v(" "),e("vue-audio",{attrs:{"audio-source":a.url}})],1):t._e()])}))],2)},o=[],i=(e("b54a"),e("7f7f"),e("db72")),c=e("bd86"),l=e("ed72"),d=e("ea9a"),s=e("53c6"),f=e("2f62"),p={status:"draft",title:"",content:"",content_short:"",source_uri:"",image_uri:"",display_time:void 0,id:"",idTurma:void 0,idDisciplina:void 0,platforms:["a-platform"],comment_disabled:!1,importance:0},m={name:"MyAudioAluno",components:{Audio:s["a"],Menu:d["a"]},props:{isEdit:{type:Boolean,default:!0}},data:function(){var t;return t={linkData:{},linkDataArquivo:{},linkAudio:{},user:{},linkImage:null,linkArquivo:null,list:null,link:null,respostaPergunta:null,situacaoAula:null,temp:{id:void 0,resposta:"",tipo:"",situacao:"0"},rules:{resposta:[{required:!0,message:"Digite",trigger:"blur"}]},postForm:Object.assign({},p),tempRoute:{}},Object(c["a"])(t,"list",null),Object(c["a"])(t,"status",null),Object(c["a"])(t,"loading",!1),Object(c["a"])(t,"userListOptions",[]),Object(c["a"])(t,"temp",{id:void 0,resposta:"",tipo:"",situacao:"0"}),Object(c["a"])(t,"rules",{resposta:[{required:!0,message:"Digite",trigger:"blur"}]}),t},computed:Object(i["a"])(Object(i["a"])({},Object(f["c"])(["name","avatar","idPessoa"])),{},{contentShortLength:function(){return this.postForm.descricao.length},displayTime:{get:function(){return+new Date(this.postForm.display_time)},set:function(t){this.postForm.display_time=new Date(t)}}}),created:function(){if(this.isEdit){var t=this.$route.params&&this.$route.params.id;this.idTurma=this.$route.params&&this.$route.params.idTurma,this.idDisciplina=this.$route.params&&this.$route.params.idDisciplina,this.linkAudio="https://fontedeluz.mgestor.com/crud/api/saladeaula/envioAudioAluno/"+t+"/"+this.idPessoa+"/"+this.idTurma+"/"+this.idDisciplina+"/2",this.fetchData(t),this.fetchDataLink(t,9),this.fetchDataArquivoLink(t,"")}this.tempRoute=Object.assign({},this.$route),this.getUser()},methods:{getUser:function(){this.user={name:this.name,idPessoa:this.idPessoa,avatar:this.avatar}},fetchDataLink:function(t,a){var e=this;Object(l["J"])(t,a).then((function(t){e.linkData=t.link})).catch((function(t){console.log(t)}))},fetchDataArquivoLink:function(t,a){var e=this;Object(l["J"])(t,a).then((function(t){e.linkDataArquivo=t.link})).catch((function(t){console.log(t)}))},fetchData:function(t){var a=this;Object(l["A"])(t).then((function(t){a.postForm=t.data,a.list=t.pergunta,a.link=t.link,a.status=t.status,a.situacaoAula=t.resposta})).catch((function(t){console.log(t)}))}}},h=m,b=(e("ebc9"),e("2877")),v=Object(b["a"])(h,u,o,!1,null,"06719b8c",null),g=v.exports,O={name:"AudioAluno",components:{Audio:g}},j=O,_=Object(b["a"])(j,n,r,!1,null,null,null);a["default"]=_.exports},ea9a:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-row",[e("el-card",{staticClass:"box-card"},[e("div",{staticStyle:{"margin-bottom":"50px"}},[e("el-col",{staticClass:"text-center",attrs:{span:4}},[e("router-link",{attrs:{to:"/saladeaula/saladeaula"}},[e("el-button",{attrs:{type:"success",plain:""}},[t._v("Aulas")])],1)],1),t._v(" "),e("el-col",{staticClass:"text-center",attrs:{span:4}},[e("router-link",{attrs:{to:{path:"/saladeaula/recado/"+t.idAula+"/"+t.idTurma+"/"+t.idDisciplina}}},[e("el-button",{attrs:{type:"primary",plain:""}},[t._v("Recados")])],1)],1),t._v(" "),e("el-col",{staticClass:"text-center",attrs:{span:4}},[e("router-link",{attrs:{to:{path:"/saladeaula/atividade/"+t.idAula+"/"+t.idTurma+"/"+t.idDisciplina}}},[e("el-button",{attrs:{type:"info",plain:""}},[t._v("  Avaliações")])],1)],1),t._v(" "),e("el-col",{staticClass:"text-center",attrs:{span:4}},[e("router-link",{attrs:{to:{path:"/saladeaula/audio/"+t.idAula+"/"+t.idTurma+"/"+t.idDisciplina}}},[e("el-button",{attrs:{type:"warning",plain:""}},[t._v(" Áudio")])],1)],1),t._v(" "),e("el-col",{staticClass:"text-center",attrs:{span:4}},[e("router-link",{attrs:{to:{path:"/saladeaula/Video/"+t.idAula+"/"+t.idTurma+"/"+t.idDisciplina}}},[e("el-button",{attrs:{type:"danger",plain:""}},[t._v(" Vídeos")])],1)],1),t._v(" "),e("el-col",{staticClass:"text-center",attrs:{span:4}},[e("router-link",{attrs:{to:{path:"/saladeaula/link/"+t.idAula+"/"+t.idTurma+"/"+t.idDisciplina}}},[e("el-button",{attrs:{type:"info",plain:""}},[t._v("Enviar")])],1)],1)],1)])],1)},r=[],u={name:"Menu",props:{isEdit:{type:Boolean,default:!1},resposta:{type:String,default:void 0},tarefaResposta:{type:String,default:void 0},tarefa:{type:String,default:void 0},status:{type:String,default:void 0},identificador:{type:Object,default:void 0},idAula:{type:String,default:void 0},idTurma:{type:String,default:void 0},idDisciplina:{type:String,default:void 0},list:{type:Object,default:void 0}}},o=u,i=e("2877"),c=Object(i["a"])(o,n,r,!1,null,null,null);a["a"]=c.exports},ebc9:function(t,a,e){"use strict";e("1a13")},ed72:function(t,a,e){"use strict";e.d(a,"G",(function(){return r})),e.d(a,"H",(function(){return u})),e.d(a,"B",(function(){return o})),e.d(a,"y",(function(){return i})),e.d(a,"A",(function(){return c})),e.d(a,"T",(function(){return l})),e.d(a,"U",(function(){return d})),e.d(a,"J",(function(){return s})),e.d(a,"C",(function(){return f})),e.d(a,"O",(function(){return p})),e.d(a,"D",(function(){return m})),e.d(a,"K",(function(){return h})),e.d(a,"z",(function(){return b})),e.d(a,"M",(function(){return v})),e.d(a,"L",(function(){return g})),e.d(a,"N",(function(){return O})),e.d(a,"F",(function(){return j})),e.d(a,"E",(function(){return _})),e.d(a,"P",(function(){return k})),e.d(a,"R",(function(){return A})),e.d(a,"Y",(function(){return y})),e.d(a,"c",(function(){return C})),e.d(a,"g",(function(){return D})),e.d(a,"d",(function(){return R})),e.d(a,"f",(function(){return I})),e.d(a,"h",(function(){return S})),e.d(a,"e",(function(){return B})),e.d(a,"Z",(function(){return T})),e.d(a,"bb",(function(){return w})),e.d(a,"db",(function(){return x})),e.d(a,"ab",(function(){return E})),e.d(a,"cb",(function(){return q})),e.d(a,"eb",(function(){return L})),e.d(a,"k",(function(){return Q})),e.d(a,"t",(function(){return P})),e.d(a,"gb",(function(){return V})),e.d(a,"u",(function(){return $})),e.d(a,"a",(function(){return F})),e.d(a,"I",(function(){return M})),e.d(a,"Q",(function(){return U})),e.d(a,"S",(function(){return J})),e.d(a,"l",(function(){return H})),e.d(a,"m",(function(){return z})),e.d(a,"hb",(function(){return G})),e.d(a,"w",(function(){return N})),e.d(a,"b",(function(){return X})),e.d(a,"j",(function(){return K})),e.d(a,"V",(function(){return W})),e.d(a,"ib",(function(){return Y})),e.d(a,"X",(function(){return Z})),e.d(a,"n",(function(){return tt})),e.d(a,"v",(function(){return at})),e.d(a,"x",(function(){return et})),e.d(a,"W",(function(){return nt})),e.d(a,"fb",(function(){return rt})),e.d(a,"r",(function(){return ut})),e.d(a,"i",(function(){return ot})),e.d(a,"s",(function(){return it})),e.d(a,"p",(function(){return ct})),e.d(a,"q",(function(){return lt})),e.d(a,"o",(function(){return dt}));var n=e("b775");function r(t){return Object(n["a"])({url:"/saladeaula/minhaAulaAluno",method:"get",params:t})}function u(t){return Object(n["a"])({url:"/saladeaula/minhasAula",method:"get",params:t})}function o(t,a){return Object(n["a"])({url:"/saladeaula/getAulaTurma/".concat(t,"/").concat(a),method:"get"})}function i(t,a){return Object(n["a"])({url:"/saladeaula/getByIdAluno/".concat(t,"/").concat(a),method:"get"})}function c(t){return Object(n["a"])({url:"/saladeaula/getById/".concat(t),method:"get"})}function l(t){return Object(n["a"])({url:"/saladeaula/getByIdAula/".concat(t),method:"get"})}function d(){return Object(n["a"])({url:"/saladeaula/getBySequencia",method:"get"})}function s(t,a){return Object(n["a"])({url:"/saladeaula/getByIdMeuLink/".concat(t,"/").concat(a),method:"get"})}function f(t,a,e){return Object(n["a"])({url:"/saladeaula/getByIdCorrecaoLink/".concat(t,"/").concat(a,"/").concat(e),method:"get"})}function p(t,a,e,r){return Object(n["a"])({url:"/saladeaula/getByIdResposta/".concat(t,"/").concat(a,"/").concat(e,"/").concat(r),method:"get"})}function m(t,a,e){return Object(n["a"])({url:"/saladeaula/getByIdCorrecaoResposta/".concat(t,"/").concat(a,"/").concat(e),method:"get"})}function h(t){return Object(n["a"])({url:"/saladeaula/getByIdQuesito/".concat(t),method:"get"})}function b(t,a){return Object(n["a"])({url:"/saladeaula/getByIdAlunoQuesito/".concat(t,"/").concat(a),method:"get"})}function v(t){return Object(n["a"])({url:"/saladeaula/getByIdRelacioneQuesito/".concat(t),method:"get"})}function g(t,a){return Object(n["a"])({url:"/saladeaula/getByIdRelacioneAlunoQuesito/".concat(t,"/").concat(a),method:"get"})}function O(t){return Object(n["a"])({url:"/saladeaula/getByIdRelacioneQuesitoAtividade/".concat(t),method:"get"})}function j(t){return Object(n["a"])({url:"/saladeaula/getByIdCorrecaoQuesito/".concat(t),method:"get"})}function _(t,a){return Object(n["a"])({url:"/saladeaula/getByIdCorrecaoAlunoQuesito/".concat(t,"/").concat(a),method:"get"})}function k(t,a,e,r,u){return Object(n["a"])({url:"/saladeaula/getByIdRespostaQuesito/".concat(t,"/").concat(a,"/").concat(e,"/").concat(r,"/").concat(u),method:"get"})}function A(t){return Object(n["a"])({url:"/saladeaula/frequenciaAula/".concat(t),method:"get"})}function y(t){return Object(n["a"])({url:"/saladeaula/recadoTurma/".concat(t),method:"get"})}function C(t){return Object(n["a"])({url:"/saladeaula/adicionar",method:"post",data:t})}function D(t){return Object(n["a"])({url:"/saladeaula/perguntas",method:"post",data:t})}function R(t){return Object(n["a"])({url:"/saladeaula/aulaTurma",method:"post",data:t})}function I(t){return Object(n["a"])({url:"/saladeaula/link",method:"post",data:t})}function S(t){return Object(n["a"])({url:"/saladeaula/adicionarResp",method:"post",data:t})}function B(t){return Object(n["a"])({url:"/saladeaula/adicionarCorrecaoResp",method:"post",data:t})}function T(t){return Object(n["a"])({url:"/saladeaula/salvarAberta",method:"post",data:t})}function w(t){return Object(n["a"])({url:"/saladeaula/salvarCorrecaoAberta",method:"post",data:t})}function x(t){return Object(n["a"])({url:"/saladeaula/salvarMultipla",method:"post",data:t})}function E(t){return Object(n["a"])({url:"/saladeaula/salvarCompleteAberta",method:"post",data:t})}function q(t){return Object(n["a"])({url:"/saladeaula/salvarFalsoVerdadeiro",method:"post",data:t})}function L(t){return Object(n["a"])({url:"/saladeaula/salvarRelacione",method:"post",data:t})}function Q(t){return Object(n["a"])({url:"/saladeaula/aulaEditar",method:"put",data:t})}function P(t){return Object(n["a"])({url:"/saladeaula/editarQuesito",method:"put",data:t})}function V(t,a){return Object(n["a"])({url:"/saladeaula/editar/".concat(t),method:"put",data:a})}function $(t){return Object(n["a"])({url:"/saladeaula/fechar",method:"put",data:t})}function F(t){return Object(n["a"])({url:"/saladeaula/abrir",method:"put",data:t})}function M(t){return Object(n["a"])({url:"/saladeaula/meusViculos/".concat(t),method:"get"})}function U(t){return Object(n["a"])({url:"/saladeaula/frequencia/".concat(t),method:"get"})}function J(t,a){return Object(n["a"])({url:"/saladeaula/frequenciaTurma/".concat(t,"/").concat(a),method:"get"})}function H(t){return Object(n["a"])({url:"/saladeaula/correcao/".concat(t),method:"get"})}function z(t,a){return Object(n["a"])({url:"/saladeaula/correcaoTurma/".concat(t,"/").concat(a),method:"get"})}function G(t){return Object(n["a"])({url:"/saladeaula/vincular",method:"post",data:t})}function N(t){return Object(n["a"])({url:"/saladeaula/fecharVinculo",method:"put",data:t})}function X(t){return Object(n["a"])({url:"/saladeaula/abrirVinculo",method:"put",data:t})}function K(t,a){return Object(n["a"])({url:"/saladeaula/apagarVinculo/".concat(t),method:"delete",data:a})}function W(t){return Object(n["a"])({url:"/saladeaula/liberarCorrecaoAtividade",method:"put",data:t})}function Y(t){return Object(n["a"])({url:"/saladeaula/vinculoEditar",method:"put",data:t})}function Z(t){return Object(n["a"])({url:"/saladeaula/linkEditar",method:"post",data:t})}function tt(t){return Object(n["a"])({url:"/saladeaula/avisar",method:"post",data:t})}function at(t){return Object(n["a"])({url:"/saladeaula/fecharAviso ",method:"post",data:t})}function et(t){return Object(n["a"])({url:"/saladeaula/fecharVinculoResposta",method:"put",data:t})}function nt(t){return Object(n["a"])({url:"/saladeaula/liberarCorrecaoAula",method:"put",data:t})}function rt(t,a,e){return Object(n["a"])({url:"/saladeaula/situacao/".concat(t,"/").concat(a),method:"get",data:e})}function ut(t,a){return Object(n["a"])({url:"/saladeaula/apagarPergunta/".concat(t),method:"delete",data:a})}function ot(t,a){return Object(n["a"])({url:"/saladeaula/apagarAula/".concat(t),method:"delete",data:a})}function it(t,a){return Object(n["a"])({url:"/saladeaula/apagarQuesito/".concat(t),method:"delete",data:a})}function ct(t){return Object(n["a"])({url:"/saladeaula/fecharLink/".concat(t),method:"get"})}function lt(t,a){return Object(n["a"])({url:"/saladeaula/apagarLinkAula/".concat(t),method:"delete",data:a})}function dt(t,a){return Object(n["a"])({url:"/saladeaula/excluir/".concat(t),method:"delete",data:a})}}}]);