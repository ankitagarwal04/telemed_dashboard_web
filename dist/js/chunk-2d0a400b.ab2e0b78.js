(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a400b"],{"051a":function(e,n,s){"use strict";s.r(n);var t=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{staticClass:"container"},[s("b-table",{attrs:{striped:"",hover:"",items:e.users,fields:e.fields},scopedSlots:e._u([{key:"cell(index)",fn:function(n){return[e._v(" "+e._s(n.index+1)+" ")]}}])})],1)},a=[],r=(s("4160"),s("159b"),{name:"Users",data:function(){return{fields:["index","id","username","email","merchantName"],users:[]}},created:function(){this.getDashboardUsers()},methods:{getDashboardUsers:function(){var e=this;this.$http.get("/dashboard_users").then((function(n){n.length>0&&n.forEach((function(n,s){e.users.push({id:n.id,username:n.username,email:n.email,merchantName:n.csc_merchant_name})}))})).catch((function(e){console.log(e)}))}}}),i=r,c=s("2877"),u=Object(c["a"])(i,t,a,!1,null,null,null);n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0a400b.ab2e0b78.js.map