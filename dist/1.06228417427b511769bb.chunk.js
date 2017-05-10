webpackJsonp([1],{52:function(t,e,s){s(58);var i=s(6)(s(56),s(61),"data-v-6d8f3a6c",null);i.options.__file="D:\\www\\iview-project\\src\\views\\pmlist.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] pmlist.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},56:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0_qs__=__webpack_require__(18),__WEBPACK_IMPORTED_MODULE_0_qs___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_qs__);__webpack_exports__.default={data:function(){return{self:this,isEditshow:!1,pmaddModal:!1,pmNumber:"",pmuser:"",editedPmlist:[],state_name:{ready:"待反馈",feedback:"待接入",access:"开发中",online:"已验收"},columns:[{title:"PM号",key:"pmid",render:function(t,e,s){return"<strong>"+t.pmid+"</strong>"}},{title:"项目名称",width:300,key:"name"},{title:"对接人",width:80,key:"puser"},{title:"实施人",width:120,render:function(t,e,s){return'<i-select size="small" v-model="pmlist['+s+'].t_uid" filterable @on-change="dataEdit('+s+')">\n                                        <i-option v-for="item in huser" :value="item.value" :key="item">{{ item.label }}</i-option>\n                                    </i-select>'}},{title:"开始时间",width:160,key:"start_time",render:function(t,e,s){return t.start_time?t.start_time:"未开始"}},{title:"完成时间",width:160,key:"end_time",render:function(t,e,s){return t.end_time?t.end_time:"未完成"}},{title:"预估工时",width:90,key:"workhour",render:function(t,e,s){return'<i-input v-model="pmlist['+s+'].workhour" size="small" @input="dataEdit('+s+')"></i-input>'}},{title:"完成进度",width:200,key:"schedule",render:function(t,e,s){return'<i-progress :percent="'+t.schedule+'" status="active"></i-progress>\n                                <i-button shape="circle" size="small" icon="ios-plus-empty" @click="scheduleAdd('+s+')"></i-button>\n                                <i-button shape="circle" size="small" icon="ios-minus-empty" @click="scheduleMinus('+s+')"></i-button>\n                            '}},{title:"状态",key:"state",render:function(t,e,s){return"<strong>{{this.state_name[row.state]}}</strong>"}},{title:"信息反馈",key:"action",align:"center",render:function(t,e,s){return'<i-button type="primary" size="small" @click="showEmail('+s+",'feedback')\">查看</i-button>"}},{title:"信息接入",key:"action",align:"center",render:function(t,e,s){return'<i-button type="primary" size="small" @click="showEmail('+s+",'access')\">查看</i-button>"}},{title:"上线反馈",key:"action",align:"center",render:function(t,e,s){return'<i-button type="primary" size="small" @click="showEmail('+s+",'online')\">查看</i-button>"}},{title:"操作",key:"action",width:100,align:"center",render:function(t,e,s){return'<i-button type="error" size="small" @click="remove('+s+')">删除</i-button>'}}],pmlist:[],huser:[]}},methods:{showEmail:function(t,e){this.$router.push("/pmemail/"+t+"/"+e)},ok:function(){this.$Message.success("保存成功")},pmadd:function pmadd(){var vobj=this;this.$http.get(this.apihost+"/pms/add/"+this.pmNumber).then(function(response){var res=eval("("+response.data+")");200==res.status?(vobj.$Notice.success({title:"同步成功"}),vobj.pmlist=eval("("+res.message+")"),sessionStorage.setItem("pmlist",res.message)):400==res.status?vobj.$Notice.error({title:"保存失败",desc:res.message,duration:0}):vobj.$Notice.error({title:"非法请求"})}).catch(function(t){vobj.$Notice.error({title:t})})},remove:function(t){var e=this,s=this;this.$Modal.confirm({content:"<p>确认删除？</p>",loading:!0,onOk:function(){s.$http.get(e.apihost+"/pms/remove/"+e.pmlist[t].id).then(function(e){s.$Modal.remove(),"Success"==e.data?(s.$Message.success("删除成功!"),s.pmlist.splice(t,1)):s.$Notice.error({title:"抛出了一个异常",desc:e.data,duration:0})}).catch(function(t){console.warn(t)})}})},scheduleAdd:function(t){if(this.pmlist[t].schedule>=100)return!1;this.pmlist[t].schedule+=10,this.isEditshow=!0,-1==this.editedPmlist.indexOf(t)&&this.editedPmlist.push(t)},scheduleMinus:function(t){if(this.pmlist[t].schedule<=0)return!1;this.pmlist[t].schedule-=10,this.isEditshow=!0,-1==this.editedPmlist.indexOf(t)&&this.editedPmlist.push(t)},dataEdit:function(t){this.isEditshow=!0,-1==this.editedPmlist.indexOf(t)&&this.editedPmlist.push(t)},dataSubmit:function dataSubmit(){var postdata=[],vobj=this;if(this.editedPmlist.length>0)for(var i in this.editedPmlist)postdata.push(this.pmlist[this.editedPmlist[i]]);this.$http.post(this.apihost+"/pms/edit",__WEBPACK_IMPORTED_MODULE_0_qs___default.a.stringify(postdata)).then(function(response){200==response.status&&(vobj.$Notice.success({title:"修改成功"}),vobj.pmlist=eval(response.data),sessionStorage.setItem("pmlist",response.data))}).catch(function(t){console.warn(t)})}},mounted:function mounted(){var vobj=this;this.$http.get(this.apihost+"/pms/lists").then(function(response){200==response.status&&(vobj.pmlist=eval(response.data),sessionStorage.setItem("pmlist",response.data))}).catch(function(t){console.warn(t)}),this.$http.get(this.apihost+"/husers/lists").then(function(response){200==response.status&&(vobj.huser=eval(response.data))}).catch(function(t){console.warn(t)})}}},58:function(t,e){},61:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"layout-breadcrumb"},[s("Breadcrumb",[s("Breadcrumb-item",[s("Icon",{attrs:{type:"ios-home-outline"}}),t._v(" PM首页")],1),t._v(" "),s("Breadcrumb-item",[t._v("PM清单")])],1)],1),t._v(" "),s("div",{staticClass:"layout-content"},[s("div",{staticClass:"layout-content-main"},[s("Button",{staticClass:"mybutton",attrs:{type:"info",size:"small"},on:{click:function(e){t.pmaddModal=!0}}},[t._v("新增PM单")]),t._v(" "),s("Button",{directives:[{name:"show",rawName:"v-show",value:t.isEditshow,expression:"isEditshow"}],staticClass:"mybutton",attrs:{type:"warning",size:"small"},on:{click:t.dataSubmit}},[t._v("保存修改")]),t._v(" "),s("Modal",{attrs:{title:"同步PM单号"},on:{"on-ok":t.pmadd},model:{value:t.pmaddModal,callback:function(e){t.pmaddModal=e},expression:"pmaddModal"}},[s("Input",{attrs:{placeholder:"请输入pm单号..."},model:{value:t.pmNumber,callback:function(e){t.pmNumber=e},expression:"pmNumber"}}),t._v(" "),s("Select",{staticClass:"modalselect",attrs:{filterable:"",placeholder:"请选择需求对接人"},model:{value:t.pmuser,callback:function(e){t.pmuser=e},expression:"pmuser"}},t._l(t.huser,function(e){return s("Option",{key:e,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1),t._v(" "),s("Table",{staticStyle:{clear:"both"},attrs:{border:"",context:t.self,columns:t.columns,data:t.pmlist}})],1)])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});