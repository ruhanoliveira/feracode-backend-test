(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22d66a62"],{4705:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"justify-center":"","align-center":""}},[r("v-flex",[r("v-card",{attrs:{color:"white",width:"100%"}},[r("v-card-text",[r("v-form",{ref:"form",on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md12:""}},[r("v-text-field",{attrs:{rules:[e.formRules.default.required],label:"Model",required:""},model:{value:e.formFields.model,callback:function(t){e.$set(e.formFields,"model",t)},expression:"formFields.model"}})],1),r("v-flex",{attrs:{xs12:"",md12:""}},[r("v-textarea",{attrs:{label:"Description",required:"",rules:[e.formRules.default.required]},model:{value:e.formFields.description,callback:function(t){e.$set(e.formFields,"description",t)},expression:"formFields.description"}})],1)],1),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-subheader",[e._v("\n                   SIZES\n                 ")])],1),e._l(e.formFields.sizes,function(t,a){return r("v-layout",{key:a,staticStyle:{"background-color":"#eee","margin-bottom":"10px"},attrs:{row:"",wrap:"","align-center":""}},[r("v-flex",{attrs:{xs12:"",md11:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"subitem",attrs:{xs12:"",md10:""}},[r("v-text-field",{attrs:{label:"Description",rules:[e.formRules.default.required],required:""},model:{value:t.description,callback:function(r){e.$set(t,"description",r)},expression:"size.description"}})],1),r("v-flex",{staticClass:"subitem",attrs:{xs12:"",md2:""}},[r("v-text-field",{attrs:{label:"Stock",type:"number"},model:{value:t.stock,callback:function(r){e.$set(t,"stock",r)},expression:"size.stock"}})],1)],1)],1),r("v-flex",{attrs:{xs12:"",md1:""}},[r("v-btn",{attrs:{color:"error",fab:"",small:"",dark:"",title:"Delete size"},on:{click:function(t){return e.removeSize(a)}}},[r("v-icon",[e._v("delete")])],1)],1)],1)}),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md2:""}},[r("v-btn",{attrs:{color:"primary",large:"",dark:"",title:"Add new size"},on:{click:e.addSize}},[r("v-icon",[e._v("mdi-library-plus")]),e._v("\n                   Add Size\n                ")],1)],1)],1)],2)],1)],1),r("v-divider"),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",flat:"",large:"",loading:e.loading},on:{click:e.save}},[e._v("\n            Save\n          ")])],1)],1)],1)],1)],1)},i=[],s=(r("96cf"),r("3b8d")),l=r("cebc"),n=r("2494"),o=r("2f62"),d={data:function(){return{loading:!1,valid:!1,formFields:{},formRules:{default:{required:function(e){return!!e||"Required field"}}}}},methods:Object(l["a"])({},Object(o["c"])(["SHOW_ALERT","SET_TOOLBAR_BACK_URL"]),{save:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.valid){e.next=11;break}return this.loading=!0,t=new n["a"],e.next=5,t.create(this.formFields);case 5:r=e.sent,this.SHOW_ALERT({type:r.error?"error":"success",message:r.message}),r.error||this.$router.push({path:"/products"}),this.loading=!1,e.next=12;break;case 11:this.$refs.form.validate();case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),pickFile:function(){this.$refs.file.click()},handleFileUpload:function(){this.file=this.$refs.file.files[0]},addSize:function(){this.formFields.sizes.push(n["a"].getSizeModel())},removeSize:function(e){this.formFields.sizes.splice(e,1)}}),created:function(){this.SET_TOOLBAR_BACK_URL("/products"),this.formFields=n["a"].getModel()}},c=d,u=(r("ed6a"),r("2877")),f=r("6544"),v=r.n(f),m=r("8336"),p=r("b0af"),b=r("99d9"),x=r("a523"),h=r("ce7e6"),k=r("0e8f"),w=r("4bd4"),g=r("132d"),F=r("a722"),S=r("9910"),y=r("e0c7"),_=r("2677"),V=r("a844"),z=Object(u["a"])(c,a,i,!1,null,null,null);t["default"]=z.exports;v()(z,{VBtn:m["a"],VCard:p["a"],VCardActions:b["a"],VCardText:b["b"],VContainer:x["a"],VDivider:h["a"],VFlex:k["a"],VForm:w["a"],VIcon:g["a"],VLayout:F["a"],VSpacer:S["a"],VSubheader:y["a"],VTextField:_["a"],VTextarea:V["a"]})},ed6a:function(e,t,r){"use strict";var a=r("fd20"),i=r.n(a);i.a},fd20:function(e,t,r){}}]);
//# sourceMappingURL=chunk-22d66a62.2df176f7.js.map