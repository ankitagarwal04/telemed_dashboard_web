(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5be80142"],{"83c9":function(s,t,e){"use strict";e.r(t);var r=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"auth-login"},[e("div",[e("form",{staticClass:"p-4",on:{submit:function(t){return t.preventDefault(),s.onSubmit()}}},[e("h3",{staticClass:"text-center"},[s._v("Sign In")]),e("div",{staticClass:"form-group pt-2"},[e("label",{staticClass:"font-weight-bold"},[s._v("Email address")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.userCredentials.emailAddress,expression:"userCredentials.emailAddress"}],staticClass:"form-control form-control-lg",attrs:{type:"email",required:""},domProps:{value:s.userCredentials.emailAddress},on:{input:function(t){t.target.composing||s.$set(s.userCredentials,"emailAddress",t.target.value)}}})]),e("div",{staticClass:"form-group pt-2"},[e("label",{staticClass:"font-weight-bold"},[s._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.userCredentials.password,expression:"userCredentials.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",required:""},domProps:{value:s.userCredentials.password},on:{input:function(t){t.target.composing||s.$set(s.userCredentials,"password",t.target.value)}}})]),e("button",{staticClass:"btn btn-dark btn-lg btn-block",attrs:{type:"submit"}},[s._v("Sign In")]),e("p",{staticClass:"forgot-password text-right mt-2"},[e("router-link",{attrs:{to:"/auth/forgot_password"}},[s._v("Forgot password ?")])],1)])])])},a=[],o={name:"Login",data:function(){return{userCredentials:{emailAddress:"",password:""}}},methods:{loginUser:function(){var s=this;this.$store.dispatch("retrieveToken",{email:this.userCredentials.emailAddress,password:this.userCredentials.password}).then((function(t){s.$router.push({name:"Dashboard"})}))},onSubmit:function(){this.loginUser()}}},i=o,n=(e("8e18"),e("2877")),l=Object(n["a"])(i,r,a,!1,null,"292c16bd",null);t["default"]=l.exports},"8e18":function(s,t,e){"use strict";e("f561")},f561:function(s,t,e){}}]);
//# sourceMappingURL=chunk-5be80142.0c52f597.js.map