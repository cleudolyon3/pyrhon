(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-506c2558"],{"000e":function(t,e,o){},"22e5":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container"},[o("div",[o("el-dialog",{attrs:{width:"95%",title:"Imprimir Boletim",visible:t.exibirBotao},on:{"update:visible":function(e){t.exibirBotao=e}}},[o("div",[o("el-form",{ref:"form",attrs:{"label-width":"180px"}},[o("el-form-item",{attrs:{label:"Arrendondamento"}},[o("el-select",{attrs:{placeholder:"Arrendondamento médias"},on:{click:t.carregar,change:t.carregar},model:{value:t.arrendondamento,callback:function(e){t.arrendondamento=e},expression:"arrendondamento"}},[o("el-option",{attrs:{label:"Sem Arrendondamento",value:"1"}}),t._v(" "),o("el-option",{attrs:{label:"Com Arrendondamento",value:"2"}}),t._v(" "),o("el-option",{attrs:{label:"Com Arrendondamento na Méida  Final do périodo",value:"3"}})],1)],1)],1)],1),t._v(" "),t.botoes?t._e():o("el-alert",{attrs:{title:"Não tem modelo mude a seleção.",type:"info"}}),t._v(" "),o("el-radio-group",{attrs:{size:"small"},on:{change:function(e){return t.getDeclaracao(t.modelo)}},model:{value:t.modelo,callback:function(e){t.modelo=e},expression:"modelo"}},t._l(t.botoes,(function(e,n){return o("el-radio",{key:n,attrs:{label:e.value,border:""}},[t._v(t._s(e.name))])})),1),t._v(" "),t.modelo?o("div",["false"!==t.baixarPdf?o("el-button",{staticStyle:{"margin-top":"5px"},attrs:{type:"warning"},on:{click:function(e){return t.fetchDataHtml(t.html)}}},[t._v("PDF"),o("i",{staticClass:"el-icon-download el-icon-right"})]):t._e(),t._v(" "),o("el-button",{staticStyle:{"margin-top":"5px"},attrs:{type:"danger"},on:{click:function(e){return t.getLink()}}},[t._v("PDF ABERTO"),o("i",{staticClass:"el-icon-position el-icon-right"})]),t._v(" "),"false"!==t.baixarWord?o("word",{staticStyle:{"margin-top":"5px"},attrs:{arquivo:t.titulo,htmlString:t.html}}):t._e(),t._v(" "),"false"!==t.baixarEditor?o("el-button",{staticStyle:{"margin-top":"5px"},attrs:{type:"success",icon:"el-icon-edit"},on:{click:t.editor}},[t._v("Editor")]):t._e()],1):t._e(),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.exibirBotao=!1}}},[t._v("Cancelar")])],1)],1),t._v(" "),o("el-dialog",{attrs:{width:"95%",title:"Imprimir Boletim com Recuperação",visible:t.exibirBotaoRecuperacao},on:{"update:visible":function(e){t.exibirBotaoRecuperacao=e}}},[o("div",[o("el-form",{ref:"form",attrs:{"label-width":"180px"}},[o("el-form-item",{attrs:{label:"Arrendondamento"}},[o("el-select",{attrs:{placeholder:"Arrendondamento médias"},on:{click:t.carregar,change:t.carregar},model:{value:t.arrendondamento,callback:function(e){t.arrendondamento=e},expression:"arrendondamento"}},[o("el-option",{attrs:{label:"Sem Arrendondamento",value:"1"}}),t._v(" "),o("el-option",{attrs:{label:"Com Arrendondamento",value:"2"}}),t._v(" "),o("el-option",{attrs:{label:"Com Arrendondamento na Méida  Final do périodo",value:"3"}})],1)],1)],1)],1),t._v(" "),t.botoes?t._e():o("el-alert",{attrs:{title:"Não tem modelo mude a seleção.",type:"info"}}),t._v(" "),o("el-radio-group",{attrs:{size:"small"},on:{change:function(e){return t.getDeclaracao(t.modelo)}},model:{value:t.modelo,callback:function(e){t.modelo=e},expression:"modelo"}},t._l(t.botoes,(function(e,n){return o("el-radio",{key:n,attrs:{label:e.value,border:""}},[t._v(t._s(e.name))])})),1),t._v(" "),t.modelo?o("div",["false"!==t.baixarPdf?o("el-button",{staticStyle:{"margin-top":"5px"},attrs:{type:"warning"},on:{click:function(e){return t.fetchDataHtml(t.html)}}},[t._v("PDF"),o("i",{staticClass:"el-icon-download el-icon-right"})]):t._e(),t._v(" "),o("el-button",{staticStyle:{"margin-top":"5px"},attrs:{type:"danger"},on:{click:function(e){return t.getLink()}}},[t._v("PDF ABERTO"),o("i",{staticClass:"el-icon-position el-icon-right"})]),t._v(" "),"false"!==t.baixarWord?o("word",{staticStyle:{"margin-top":"5px"},attrs:{arquivo:t.titulo,htmlString:t.html}}):t._e(),t._v(" "),"false"!==t.baixarEditor?o("el-button",{staticStyle:{"margin-top":"5px"},attrs:{type:"success",icon:"el-icon-edit"},on:{click:t.editor}},[t._v("Editor")]):t._e()],1):t._e(),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.exibirBotaoRecuperacao=!1}}},[t._v("Cancelar")])],1)],1)],1),t._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading...",border:"",fit:"","highlight-current-row":""}},[o("el-table-column",{attrs:{label:t.titulo,align:"center"}},[o("el-table-column",{attrs:{align:"center",label:"Id",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.Id)+"\n        ")]}}])}),t._v(" "),o("el-table-column",{attrs:{"min-width":"215",label:"Alunos"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.Alunos)+"\n        ")]}}])}),t._v(" "),o("el-table-column",{attrs:{width:"200",label:"Boletim Notas",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-download",plain:""},on:{click:function(o){return t.exibirDeclaracao(e.row,"nota")}}},[t._v(" Boletim Nota ")])]}}])}),t._v(" "),o("el-table-column",{attrs:{width:"200",label:"Boletim Recuperação",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"warning",size:"mini",icon:"el-icon-download",plain:""},on:{click:function(o){return t.exibirDeclaracaoRecuperacao(e.row,"recuperacao")}}},[t._v(" Boletim Recuperação")])]}}])}),t._v(" "),o("el-table-column",{attrs:{width:"200",label:"Boletim Conceito",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-download",plain:""},on:{click:function(o){return t.exibirDeclaracao(e.row,"conceito")}}},[t._v(" Boletim Conceito")])]}}])})],1)],1)],1)},a=[],r=(o("96cf"),o("3b8d")),i=(o("b54a"),o("6762"),o("2fdb"),o("db72")),l=o("b1cf"),d=(o("ed08"),o("50ce")),c=o("8ad2"),u=o("ebe1"),s=o("2f62"),m=o("8b25"),p=o("04d4"),f=o("90ba"),h=o("094c"),b=o("4199"),g=Object(s["a"])("print"),v=(g.mapActions,g.mapGetters),y={name:"ExportExcel",components:{FilenameOption:d["a"],word:h["a"],pdf:b["a"],baixar:f["a"],AutoWidthOption:c["a"],BookTypeOption:u["a"]},props:{id:{type:String,default:void 0},titulo:{type:String,default:void 0},html:{type:String,default:void 0},html1:{type:String,default:void 0},link1:{type:String,default:void 0},idTurma:{type:String,default:void 0},tipo:{type:String,default:void 0},tituloExcel:{type:Array,default:void 0},cabecalho:{type:Array,default:void 0},botoes:{type:Array,default:void 0}},data:function(){return{items:[{arrendondamento:"3",value:"1",name:"1 Modelo Arredondado Final do Período "},{arrendondamento:"3",value:"2",name:" 1 Mod Frequência Arredondado Final do Período 1"},{arrendondamento:"3",value:"3",name:"1 Mod Tudo Arredondado Final do Período 1"},{arrendondamento:"3",value:"4",name:" 2 Modelo Arredondado Final do Período"},{arrendondamento:"3",value:"5",name:" 2 Mod Frequência Arredondado Final do Período "},{arrendondamento:"3",value:"6",name:"2 Mod Tudo Arredondado Final do Período"},{arrendondamento:"3",value:"7",name:" 3 Modelo Arredondado Final do Período"},{arrendondamento:"3",value:"8",name:" 3 Mod Frequência Arredondado Final do Período "},{arrendondamento:"3",value:"9",name:"3 Mod Tudo Arredondado Final do Período"},{arrendondamento:"1",value:"10",name:"1 Modelo Sem Arredondamento "},{arrendondamento:"1",value:"11",name:" 1 Mod Frequência Sem Arredondamento"},{arrendondamento:"1",value:"12",name:"1 Mod Tudo Sem Arredondamento"},{arrendondamento:"1",value:"13",name:" 2 Modelo Sem Arredondamento"},{arrendondamento:"1",value:"14",name:" 2 Mod Frequência Sem Arredondamento"},{arrendondamento:"1",value:"15",name:"2 Mod Tudo Sem Arredondamento"},{arrendondamento:"1",value:"16",name:" 3 Modelo Sem Arredondamento"},{arrendondamento:"1",value:"17",name:" 3 Mod Frequência Sem Arredondamento "},{arrendondamento:"1",value:"18",name:"3 Mod Tudo Sem Arredondamento"},{arrendondamento:"2",value:"19",name:"1 Modelo com Arredondamento "},{arrendondamento:"2",value:"20",name:" 1 Mod Frequência  com Arredondamento"},{arrendondamento:"2",value:"21",name:"1 Mod Tudo  com Arredondamento"},{arrendondamento:"2",value:"22",name:" 2 Modelo  com Arredondamento"},{arrendondamento:"2",value:"23",name:" 2 Mod Frequência  com Arredondamento"},{arrendondamento:"2",value:"24",name:"2 Mod Tudo  com Arredondamento"},{arrendondamento:"2",value:"25",name:" 3 Modelo  com Arredondamento"},{arrendondamento:"2",value:"26",name:" 3 Mod Frequência  com Arredondamento "},{arrendondamento:"2",value:"27",name:"3 Mod Tudo  com Arredondamento"}],list:null,arrendondamento:"",unidades:null,modelo:"",link:"",listLoading:!0,downloadLoading:!1,filename:"",exibirBotao:!1,exibirBotaoRecuperacao:!1,exibirBotao1:!1,autoWidth:!0,bookType:"xlsx"}},computed:Object(i["a"])(Object(i["a"])({},v(["listHtml","listLink","resetarPrint"])),Object(s["c"])(["rede","token","idEscola"])),created:function(){var t=this.$route.query.tab;t&&(this.idTurma=t),this.fetchData(this.idTurma),Object(p["a"])(this.$store)},watch:{dialogFormVisible:function(t){!1===t&&(this.modelo="",this.$emit("fechar"))},exibirBotao:function(t){!1===t&&(this.modelo="",this.$emit("fechar"))},exibirBotaoRecuperacao:function(t){!1===t&&(this.modelo="",this.$emit("fechar"))}},methods:{carregar:function(){this.filteredItem()},filteredItem:function(){var t=this;this.botoes=this.arrendondamento.length?this.items.filter((function(e){return e.arrendondamento.includes(t.arrendondamento)})):this.items},dialogFechar:function(t){this.exibirBotao=!1,this.id=0},getLink:function(){if("nota"===this.tipo)var t="https://fontedeluz.mgestor.com/crud/api/notas/imprimirBoletimNotasHtmlAberta/"+this.id+"/"+this.idTurma+"/"+this.modelo+"/"+this.token;if("recuperacao"===this.tipo)t="https://fontedeluz.mgestor.com/crud/api/notas/imprimirBoletimNotasRecuperacaoHtmlAberta/"+this.id+"/"+this.idTurma+"/"+this.modelo+"/"+this.token;window.open(t)},fetchData:function(t,e){var o=this;this.listLoading=!0,Object(l["b"])(t).then((function(t){o.list=t.data,o.listLoading=!1}))},fetchDataHtmlR:function(t,e,o){var n=this;Object(l["e"])(t,e,o).then((function(t){n.html=t.data}))},fetchDataHtml1:function(t,e,o){var n=this;Object(l["d"])(t,e,o).then((function(t){n.html=t.data}))},fetchDataConceitoHtml:function(t,e,o){var n=this;Object(l["c"])(t,e,o).then((function(t){n.html=t.data}))},exibirDeclaracao:function(t,e){this.id=t.idPessoa,this.tipo=e,this.exibirBotao=!0},exibirDeclaracaoRecuperacao:function(t,e){this.id=t.idPessoa,this.tipo=e,this.exibirBotaoRecuperacao=!0},getDeclaracao:function(t){this.modelo=t,"recuperacao"===this.tipo&&this.fetchDataHtmlR(this.id,this.idTurma,t),"nota"===this.tipo&&this.fetchDataHtml1(this.id,this.idTurma,t),"conceito"===this.tipo&&this.fetchDataConceitoHtml(this.id,this.idTurma,t)},editor:function(){this.resetarPrint(),this.listarHtml(this.html),this.listarLink(this.link),this.$router.push("/print/impressoesEditar"),this.$emit("fechar")},fetchDataHtml:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var o,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,o={html:e},t.next=4,Object(m["v"])(o).then((function(t){n.link=t.link,n.isLoading=!1,n.downloadContract()}));case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),downloadContract:function(){var t=this;this.$http.get(this.link,{responseType:"arraybuffer"}).then((function(e){var o=new Blob([e.data],{type:"application/pdf"}),n=document.createElement("a");n.href=window.URL.createObjectURL(o),n.download=t.titulo+t.currentData+".pdf",n.click()}))},handleBaixar:function(t){this.exibirBotao=!0,this.id=t.idPessoa,this.fetchDataHtml(t.idPessoa,this.idTurma)},handleBaixarR:function(t){this.exibirBotao=!0,this.id=t.idPessoa,this.fetchDataHtmlR(t.idPessoa,this.idTurma)},handleBaixar1:function(t){this.exibirBotao=!0,this.id=t.idPessoa,this.fetchDataConceitoHtml(t.idPessoa,this.idTurma)}}},x=y,w=(o("25a9"),o("2877")),_=Object(w["a"])(x,n,a,!1,null,null,null);e["default"]=_.exports},"25a9":function(t,e,o){"use strict";o("54f5")},4199:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("vue-html2pdf",{ref:"html2Pdf",attrs:{"show-layout":t.controlValue.showLayout,"float-layout":t.controlValue.floatLayout,"enable-download":t.controlValue.enableDownload,"preview-modal":t.controlValue.previewModal,filename:t.controlValue.filename,"paginate-elements-by-height":t.controlValue.paginateElementsByHeight,"pdf-quality":t.controlValue.pdfQuality,"pdf-format":t.controlValue.pdfFormat,"pdf-orientation":t.controlValue.pdfOrientation,"pdf-content-width":t.controlValue.pdfContentWidth,"manual-pagination":t.controlValue.manualPagination,"html-to-pdf-options":t.htmlToPdfOptions},on:{progress:function(e){return t.onProgress(e)},startPagination:function(e){return t.startPagination()},hasPaginated:function(e){return t.hasPaginated()},beforeDownload:function(e){return t.beforeDownload(e)},hasDownloaded:function(e){return t.hasDownloaded(e)}}},[o("pdf-content",{attrs:{slot:"pdf-content",html:t.html},on:{domRendered:function(e){return t.domRendered()}},slot:"pdf-content"})],1),t._v(" "),o("controls-container",{attrs:{progress:t.progress},on:{generateReport:function(e){return t.downloadPdf()}}})],1)},a=[],r=(o("6762"),o("96cf"),o("3b8d")),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"pdf-content"},[o("div",{domProps:{innerHTML:t._s(t.html)}})])},l=[],d={props:{html:{type:String,default:void 0}},data:function(){return{chartOptions:{dataLabels:{enabled:!1,style:{colors:["#fff"]}},stroke:{curve:"smooth"},chart:{toolbar:{show:!1,tools:{download:!1}},animations:{enabled:!1,animateGradually:{enabled:!1},dynamicAnimation:{enabled:!1}}},tooltip:{enabled:!0,x:{show:!0,format:"MMM dd, yyyy HH:mm"}},legend:{show:!0,labels:{useSeriesColors:!1},onItemClick:{toggleDataSeries:!1},onItemHover:{highlightDataSeries:!0}},xaxis:{labels:{style:{}},type:"datetime"},yaxis:{labels:{style:{},formatter:function(t){return t}},type:"text"}}}},mounted:function(){var t=this;this.$nextTick((function(){setTimeout((function(){t.$emit("domRendered")}),1e3)}))}},c=d,u=(o("71ad"),o("762c"),o("2877")),s=Object(u["a"])(c,i,l,!1,null,"73a76268",null),m=s.exports,p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-col",{attrs:{span:4}},[o("el-button",{staticClass:"generate-btn",attrs:{type:"warning",disabled:t.isGenerating,loading:t.situacao},on:{click:function(e){return t.$emit("generateReport")}}},[o("svg-icon",{attrs:{"icon-class":"pdf"}}),t._v(" \n   "+t._s(t.isGenerating?"Loading...":"Baixar Pdf")+"\n    ")],1),t._v(" "),o("div",{staticClass:"progress",style:"width: "+t.progress+"%;"}),t._v(" "),o("el-progress",{attrs:{percentage:t.progress}})],1)},f=[],h=(o("c5f6"),{props:{progress:{type:Number,default:0}},data:function(){return{situacao:!1,controlValue:{showLayout:!1,floatLayout:!0,enableDownload:!0,previewModal:!0,paginateElementsByHeight:1100,manualPagination:!1,filename:"Hee Hee",pdfQuality:2,pdfFormat:"a4",pdfOrientation:"landscape",pdfContentWidth:"900px"},controls:[{label:"show-layout:",type:"Boolean",options:"true, false",inputType:"checkbox",vModel:"showLayout"},{label:"float-layout:",type:"Boolean",options:"true, false",inputType:"checkbox",vModel:"floatLayout"},{label:"enable-download:",type:"Boolean",options:"true, false",inputType:"checkbox",vModel:"enableDownload"},{label:"preview-modal:",type:"Boolean",options:"true, false",inputType:"checkbox",vModel:"previewModal"},{label:"manual-pagination:",type:"Boolean",options:"true, false",inputType:"checkbox",vModel:"manualPagination"},{label:"paginate-elements-by-height:",type:"Number",options:"Any Number",inputType:"number",vModel:"paginateElementsByHeight"},{label:"filename:",type:"String",options:"Any String",inputType:"text",vModel:"filename"},{label:"pdf-quality:",type:"Number",options:"0 - 2 (Can Have Decimal)",inputType:"number",vModel:"pdfQuality"},{label:"pdf-format:",type:"String",options:"a0, a1, a2, a3, a4, letter, legal, a5, a6, a7, a8, a9, a10",inputType:"text",vModel:"pdfFormat"},{label:"pdf-orientation:",type:"String",options:"portrait, landscape",inputType:"text",vModel:"pdfOrientation"},{label:"pdf-content-width:",type:"String",options:'Any css sizes (e.g. "800px", "65vw", "70%")',inputType:"text",vModel:"pdfContentWidth"}]}},computed:{isGenerating:function(){return 0!==this.progress&&(this.situacao=!0),100===this.progress&&(this.situacao=!1),0!==this.progress&&100!==this.progress}},methods:{setInput:function(t,e,o){var n=t.target.value;"checkbox"===o&&(n=t.target.checked),"number"===o&&(n=t.target.value?parseFloat(t.target.value):0),this.$set(this.controlValue,e,n)}}}),b=h,g=Object(u["a"])(b,p,f,!1,null,null,null),v=g.exports,y=o("6480"),x={name:"app",props:{html:{type:String,default:void 0}},data:function(){return{contentRendered:!1,progress:0,controlValue:{showLayout:!1,floatLayout:!0,enableDownload:!0,previewModal:!0,paginateElementsByHeight:1100,manualPagination:!1,filename:"mgestor",pdfQuality:1,pdfFormat:"a3",pdfOrientation:"portrait",pdfContentWidth:"900px"},generatingPdf:!1,pdfDownloaded:!1}},computed:{htmlToPdfOptions:function(){return{margin:0,filename:"mgestor.pdf",image:{type:"jpeg",quality:.98},enableLinks:!0,html2canvas:{scale:this.controlValue.pdfQuality,useCORS:!0},jsPDF:{unit:"pt",format:this.controlValue.pdfFormat,orientation:this.controlValue.pdfOrientation}}}},methods:{downloadPdf:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.validateControlValue();case 2:if(t.sent){t.next=4;break}return t.abrupt("return");case 4:this.$refs.html2Pdf.generatePdf();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),validateControlValue:function(){if(this.controlValue.pdfQuality>2)return alert("pdf-quality value should only be 0 - 2"),this.controlValue.pdfQuality=2,!1;if(!this.controlValue.paginateElementsByHeight)return alert("paginate-elements-by-height value cannot be empty"),this.controlValue.paginateElementsByHeight=1400,!1;var t=["a0","a1","a2","a3","a4","letter","legal","a5","a6","a7","a8","a9","a10"];return t.includes(this.controlValue.pdfFormat)?this.controlValue.pdfOrientation?!!this.controlValue.pdfContentWidth||(alert("pdf-content-width value cannot be empty"),this.controlValue.pdfContentWidth="900px",!1):(alert("pdf-orientation value cannot be empty"),this.controlValue.pdfOrientation="portrait",!1):(alert("pdf-format value should only be ".concat(t)),this.controlValue.pdfFormat="a4",!1)},onProgress:function(t){this.progress=t,console.log("PDF generation progress: ".concat(t,"%"))},startPagination:function(){console.log("PDF has started pagination")},hasPaginated:function(){console.log("PDF has been paginated")},beforeDownload:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.html2pdf,e.options,e.pdfContent,console.log("On Before PDF Generation");case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),hasDownloaded:function(t){console.log("PDF has downloaded yehey"),this.pdfDownloaded=!0,console.log(t)},domRendered:function(){console.log("Dom Has Rendered"),this.contentRendered=!0},onBlobGenerate:function(t){console.log(t)}},components:{VueHtml2pdf:y["a"],PdfContent:m,ControlsContainer:v}},w=x,_=Object(u["a"])(w,n,a,!1,null,null,null);e["a"]=_.exports},"4f97":function(t,e,o){},"54f5":function(t,e,o){},"71ad":function(t,e,o){"use strict";o("000e")},"762c":function(t,e,o){"use strict";o("4f97")},"8b25":function(t,e,o){"use strict";o.d(e,"m",(function(){return a})),o.d(e,"u",(function(){return r})),o.d(e,"c",(function(){return i})),o.d(e,"v",(function(){return l})),o.d(e,"s",(function(){return d})),o.d(e,"i",(function(){return c})),o.d(e,"o",(function(){return u})),o.d(e,"e",(function(){return s})),o.d(e,"l",(function(){return m})),o.d(e,"b",(function(){return p})),o.d(e,"n",(function(){return f})),o.d(e,"d",(function(){return h})),o.d(e,"g",(function(){return b})),o.d(e,"q",(function(){return g})),o.d(e,"h",(function(){return v})),o.d(e,"r",(function(){return y})),o.d(e,"f",(function(){return x})),o.d(e,"p",(function(){return w})),o.d(e,"j",(function(){return _})),o.d(e,"a",(function(){return k})),o.d(e,"t",(function(){return O})),o.d(e,"k",(function(){return P}));var n=o("b775");function a(t){return Object(n["a"])({url:"/documentos/exibirCpf/".concat(t),method:"get"})}function r(t){return Object(n["a"])({url:"/documentos/fichaIndividualHtml/".concat(t),method:"get"})}function i(t){return Object(n["a"])({url:"/documentos/adicionarCpf",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/documentos/pdf",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/documentos/exibirSus/".concat(t),method:"get"})}function c(t){return Object(n["a"])({url:"/documentos/adicionarSus",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/documentos/exibirNis/".concat(t),method:"get"})}function s(t){return Object(n["a"])({url:"/documentos/adicionarNis",method:"post",data:t})}function m(t){return Object(n["a"])({url:"/documentos/exibirBolsa/".concat(t),method:"get"})}function p(t){return Object(n["a"])({url:"/documentos/adicionarBolsa",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/documentos/exibirInep/".concat(t),method:"get"})}function h(t){return Object(n["a"])({url:"/documentos/adicionarInep",method:"post",data:t})}function b(t){return Object(n["a"])({url:"/documentos/adicionarRg",method:"post",data:t})}function g(t){return Object(n["a"])({url:"/documentos/exibirRg/".concat(t),method:"get"})}function v(t){return Object(n["a"])({url:"/documentos/adicionarRnovo",method:"post",data:t})}function y(t){return Object(n["a"])({url:"/documentos/exibirRnovo/".concat(t),method:"get"})}function x(t){return Object(n["a"])({url:"/documentos/adicionarRantigo",method:"post",data:t})}function w(t){return Object(n["a"])({url:"/documentos/exibirRantigo/".concat(t),method:"get"})}function _(t){return Object(n["a"])({url:"/documentos/editarLink",method:"post",data:t})}function k(t){return Object(n["a"])({url:"/documentos/baixarLink/".concat(t),method:"get"})}function O(t){return Object(n["a"])({url:"/documentos/fecharLink/".concat(t),method:"get"})}function P(t){return Object(n["a"])({url:"/documentos/exibirLink/".concat(t),method:"get"})}}}]);