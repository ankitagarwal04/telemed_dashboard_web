(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a338bbc"],{5630:function(t,s,e){"use strict";e("b775")},a751:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"auth-forgot-password"},[e("div",[e("form",{staticClass:"p-4",on:{submit:function(s){return s.preventDefault(),t.onSubmit()}}},[e("h3",{staticClass:"text-center"},[t._v("Forgot Password")]),e("div",{staticClass:"form-group pt-2"},[e("label",{staticClass:"font-weight-bold"},[t._v("Email address")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.emailAddress,expression:"emailAddress"}],staticClass:"form-control form-control-lg",attrs:{type:"email",required:""},domProps:{value:t.emailAddress},on:{input:function(s){s.target.composing||(t.emailAddress=s.target.value)}}})]),e("button",{staticClass:"btn btn-dark btn-lg btn-block",attrs:{type:"submit"}},[t._v(" Reset Password ")]),e("p",{staticClass:"text-right mt-2"},[e("router-link",{attrs:{to:"/auth/login"}},[t._v("Go back to login")])],1)])])])},a=[],r={name:"ForgotPassword",data:function(){return{emailAddress:""}},methods:{onSubmit:function(){this.triggerResetPassword()},triggerResetPassword:function(){var t=this;this.$http.post("/password/reset",{email:this.emailAddress}).then((function(s){console.log(s),t.$router.push({name:"root"}),t.$alertify.success(s.message)})).catch((function(t){console.log(t)}))}}},n=r,i=(e("5630"),e("2877")),l=Object(i["a"])(n,o,a,!1,null,"b2b4e60a",null);s["default"]=l.exports},b775:function(t,s,e){}}]);
//# sourceMappingURL=chunk-4a338bbc.cf3fac8c.js.map