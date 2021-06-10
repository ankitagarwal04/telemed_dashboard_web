(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/web/components/landing/Service.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/web/components/landing/Service.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Service',\n  data: function data() {\n    return {\n      modal: {\n        title: '',\n        text: ''\n      },\n      services: [{\n        title: 'TELEMEDICINE',\n        text: 'As defined by WHO The delivery of health care services, where distance is a critical factor, by all health care professionals using information and communication',\n        icon: __webpack_require__(/*! @/assets/images/services/telemed.png */ \"./src/assets/images/services/telemed.png\")\n      }, {\n        title: 'DIAGNOSTIC',\n        text: \"A diagnostic test is an examination to identify an individual's specific areas of weakness and strength in order determine a condition, disease or illness.\",\n        icon: __webpack_require__(/*! @/assets/images/services/diagnostic.png */ \"./src/assets/images/services/diagnostic.png\")\n      }, {\n        title: 'MEDICINES',\n        text: 'PRADHAN MANTRI BHARTIYA JAN AUSHADHI PARIYOJANA - It is a scheme to provide quality medicines at affordable prices to the masses through JAN AUSHADHI KENDRA.',\n        icon: __webpack_require__(/*! @/assets/images/services/medicines.png */ \"./src/assets/images/services/medicines.png\")\n      }, {\n        title: 'PRODUCTS',\n        text: 'CSC-SPV is also into selling products of reputed brands like PATANJALI AYURVEDA, Jiva Ayurveda and ESSILOR PVT LTD. CSC offers distributorship and retailership of various products.',\n        icon: __webpack_require__(/*! @/assets/images/services/products.png */ \"./src/assets/images/services/products.png\")\n      }, {\n        title: 'HEALTH PACKAGES',\n        text: 'This service is a cost effective homeopathy treatment for rural masses. It has various duration plans which include Tele-consultation and doorstep delivery of medicines.',\n        icon: __webpack_require__(/*! @/assets/images/services/health_packages.jpg */ \"./src/assets/images/services/health_packages.jpg\")\n      }, {\n        title: 'CSC WELLNESS CENTER',\n        text: 'A wellness centre is a well organized set up for providing all the health services under one roof. CSC Wellness Centre endeavours to provide preventive and curative primary health care services.',\n        icon: __webpack_require__(/*! @/assets/images/services/wellness_center.png */ \"./src/assets/images/services/wellness_center.png\")\n      }, {\n        title: 'DIGIGAON',\n        text: 'CSC SPV is implementing the Digi Gaon initiative in rural and remote villages of the country, with the mandate of the Ministry of Electronics & IT.',\n        icon: __webpack_require__(/*! @/assets/images/services/digigaon.jpg */ \"./src/assets/images/services/digigaon.jpg\")\n      }, {\n        title: 'TRAINING',\n        text: 'Phlebotomy is a process of making an incision in a vein with a needle. It is an act of drawing or removing blood from the circulatory system through a cut (incision) or puncture in order to obtain a sample for analysis and diagnosis.',\n        icon: __webpack_require__(/*! @/assets/images/services/training.png */ \"./src/assets/images/services/training.png\")\n      }]\n    };\n  },\n  methods: {\n    showModal: function showModal(service) {\n      this.modal.title = service.title;\n      this.modal.text = service.text;\n      this.$bvModal.show('bv-modal-service');\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/web/components/landing/Service.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"6cf10444-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/web/components/landing/Service.vue?vue&type=template&id=30a5e34e&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6cf10444-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/web/components/landing/Service.vue?vue&type=template&id=30a5e34e&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"section\", { staticClass: \"service-section\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"container\" },\n      [\n        _c(\"h2\", { staticClass: \"section-header\" }, [\n          _vm._v(\"Health Services\")\n        ]),\n        _c(\"p\", { staticClass: \"text-center mb-3\" }, [\n          _vm._v(\n            \"CSC Health Services serve thousands of people from their earliest years to retirement. Our mission is to help rural masses live healthier lives and make the health system work better and the vision is to play our best part in creating a more sustainable health care system: one that works for the betterment for everyone.\"\n          )\n        ]),\n        _c(\n          \"div\",\n          { staticClass: \"card-deck flex-wrap justify-content-between\" },\n          _vm._l(_vm.services, function(service) {\n            return _c(\n              \"div\",\n              {\n                key: service.title,\n                staticClass:\n                  \"card service-card-holder pb-0 pt-3 pl-2 pr-2 mb-3 ml-0 mr-0\",\n                on: {\n                  click: function($event) {\n                    return _vm.showModal(service)\n                  }\n                }\n              },\n              [\n                _c(\"div\", { staticClass: \"service-card-header\" }, [\n                  _c(\"img\", {\n                    staticClass: \"card-img-top center service-icon mb-3\",\n                    attrs: { src: service.icon, alt: \"service.title\" }\n                  }),\n                  _c(\"h5\", { staticClass: \"card-title\" }, [\n                    _vm._v(_vm._s(service.title))\n                  ])\n                ])\n              ]\n            )\n          }),\n          0\n        ),\n        _c(\n          \"b-modal\",\n          {\n            attrs: { id: \"bv-modal-service\", centered: \"\", \"hide-footer\": \"\" },\n            scopedSlots: _vm._u([\n              {\n                key: \"modal-title\",\n                fn: function() {\n                  return [_vm._v(\" \" + _vm._s(_vm.modal.title) + \" \")]\n                },\n                proxy: true\n              }\n            ])\n          },\n          [\n            _c(\"div\", { staticClass: \"d-block text-center\" }, [\n              _c(\"p\", [_vm._v(_vm._s(_vm.modal.text))])\n            ])\n          ]\n        )\n      ],\n      1\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/web/components/landing/Service.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%226cf10444-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/web/components/landing/Service.vue?vue&type=style&index=0&id=30a5e34e&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/web/components/landing/Service.vue?vue&type=style&index=0&id=30a5e34e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".service-section .service-header[data-v-30a5e34e] {\\n  text-align: center;\\n}\\n.service-section .service-card-holder[data-v-30a5e34e] {\\n  text-align: center;\\n  -ms-flex-preferred-size: 25%;\\n      flex-basis: 25%;\\n  border-radius: 5%;\\n}\\n@media only screen and (max-width: 600px) {\\n.service-section .service-card-holder[data-v-30a5e34e] {\\n    -ms-flex-preferred-size: 100%;\\n        flex-basis: 100%;\\n}\\n}\\n@media (max-width: 768px) and (min-width: 600px) {\\n.service-section .service-card-holder[data-v-30a5e34e] {\\n    -ms-flex-preferred-size: 50%;\\n        flex-basis: 50%;\\n}\\n}\\n@media (max-width: 992px) and (min-width: 768px) {\\n.service-section .service-card-holder[data-v-30a5e34e] {\\n    -ms-flex-preferred-size: 33%;\\n        flex-basis: 33%;\\n}\\n}\\n.service-section .service-card-holder .service-icon[data-v-30a5e34e] {\\n  width: 64px;\\n}\\n.section-header[data-v-30a5e34e] {\\n  text-align: center;\\n  margin: 1.5rem 0 1.5rem 0;\\n  color: #285d7b;\\n}\\n.border-radius-50[data-v-30a5e34e] {\\n  border-radius: 50px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/views/web/components/landing/Service.vue?./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/web/components/landing/Service.vue?vue&type=style&index=0&id=30a5e34e&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/web/components/landing/Service.vue?vue&type=style&index=0&id=30a5e34e&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Service.vue?vue&type=style&index=0&id=30a5e34e&lang=scss&scoped=true& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/web/components/landing/Service.vue?vue&type=style&index=0&id=30a5e34e&lang=scss&scoped=true&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"3ceaea4a\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/views/web/components/landing/Service.vue?./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/assets/images/services/diagnostic.png":
/*!***************************************************!*\
  !*** ./src/assets/images/services/diagnostic.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/diagnostic.31653502.png\";\n\n//# sourceURL=webpack:///./src/assets/images/services/diagnostic.png?");

/***/ }),

/***/ "./src/assets/images/services/digigaon.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/services/digigaon.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/digigaon.8564f89a.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/services/digigaon.jpg?");

/***/ }),

/***/ "./src/assets/images/services/health_packages.jpg":
/*!********************************************************!*\
  !*** ./src/assets/images/services/health_packages.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/health_packages.e3573eec.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/services/health_packages.jpg?");

/***/ }),

/***/ "./src/assets/images/services/medicines.png":
/*!**************************************************!*\
  !*** ./src/assets/images/services/medicines.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/medicines.1b51ab1d.png\";\n\n//# sourceURL=webpack:///./src/assets/images/services/medicines.png?");

/***/ }),

/***/ "./src/assets/images/services/products.png":
/*!*************************************************!*\
  !*** ./src/assets/images/services/products.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/products.0e8f2899.png\";\n\n//# sourceURL=webpack:///./src/assets/images/services/products.png?");

/***/ }),

/***/ "./src/assets/images/services/telemed.png":
/*!************************************************!*\
  !*** ./src/assets/images/services/telemed.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/telemed.907cc817.png\";\n\n//# sourceURL=webpack:///./src/assets/images/services/telemed.png?");

/***/ }),

/***/ "./src/assets/images/services/training.png":
/*!*************************************************!*\
  !*** ./src/assets/images/services/training.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/training.207af25a.png\";\n\n//# sourceURL=webpack:///./src/assets/images/services/training.png?");

/***/ }),

/***/ "./src/assets/images/services/wellness_center.png":
/*!********************************************************!*\
  !*** ./src/assets/images/services/wellness_center.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/wellness_center.0b9288b3.png\";\n\n//# sourceURL=webpack:///./src/assets/images/services/wellness_center.png?");

/***/ }),

/***/ "./src/views/web/components/landing/Service.vue":
/*!******************************************************!*\
  !*** ./src/views/web/components/landing/Service.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Service_vue_vue_type_template_id_30a5e34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service.vue?vue&type=template&id=30a5e34e&scoped=true& */ \"./src/views/web/components/landing/Service.vue?vue&type=template&id=30a5e34e&scoped=true&\");\n/* harmony import */ var _Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Service.vue?vue&type=script&lang=js& */ \"./src/views/web/components/landing/Service.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Service_vue_vue_type_style_index_0_id_30a5e34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Service.vue?vue&type=style&index=0&id=30a5e34e&lang=scss&scoped=true& */ \"./src/views/web/components/landing/Service.vue?vue&type=style&index=0&id=30a5e34e&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Service_vue_vue_type_template_id_30a5e34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Service_vue_vue_type_template_id_30a5e34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"30a5e34e\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/web/components/landing/Service.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/web/components/landing/Service.vue?");

/***/ }),

/***/ "./src/views/web/components/landing/Service.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/views/web/components/landing/Service.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Service.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/web/components/landing/Service.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/web/components/landing/Service.vue?");

/***/ }),

/***/ "./src/views/web/components/landing/Service.vue?vue&type=style&index=0&id=30a5e34e&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./src/views/web/components/landing/Service.vue?vue&type=style&index=0&id=30a5e34e&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_style_index_0_id_30a5e34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Service.vue?vue&type=style&index=0&id=30a5e34e&lang=scss&scoped=true& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/web/components/landing/Service.vue?vue&type=style&index=0&id=30a5e34e&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_style_index_0_id_30a5e34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_style_index_0_id_30a5e34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_style_index_0_id_30a5e34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_style_index_0_id_30a5e34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/views/web/components/landing/Service.vue?");

/***/ }),

/***/ "./src/views/web/components/landing/Service.vue?vue&type=template&id=30a5e34e&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/views/web/components/landing/Service.vue?vue&type=template&id=30a5e34e&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_6cf10444_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_template_id_30a5e34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"6cf10444-vue-loader-template\"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Service.vue?vue&type=template&id=30a5e34e&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"6cf10444-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/web/components/landing/Service.vue?vue&type=template&id=30a5e34e&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_6cf10444_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_template_id_30a5e34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_6cf10444_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_template_id_30a5e34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/web/components/landing/Service.vue?");

/***/ })

}]);