"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/Componentes/Registros.tsx":
/*!*******************************************!*\
  !*** ./src/app/Componentes/Registros.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Registros: function() { return /* binding */ Registros; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Firebase_Promesas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Firebase/Promesas */ \"(app-pages-browser)/./src/app/Firebase/Promesas.tsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"(app-pages-browser)/./node_modules/react-router-dom/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Registros = ()=>{\n    _s();\n    const [personas, setPersonas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_Firebase_Promesas__WEBPACK_IMPORTED_MODULE_2__.obtenerPersonas)().then((listado)=>{\n            console.log(\"Ya estoy listo\");\n            console.log(listado[0]);\n            setPersonas(listado);\n        });\n    }, []);\n    const renderizarDatos = ()=>{\n        var r = personas.map((p)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: p.nombre\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: p.Correo\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: p.Contrasena\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: p.edad\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: p.Telefono\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: p.Fecha\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: p.Genero\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: p.Aceptar\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                            to: \"/actualizar/\" + p.idPersona,\n                            children: \"Actualizar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                            to: \"/eliminar/\" + p.idPersona,\n                            children: \"Eliminar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                lineNumber: 21,\n                columnNumber: 20\n            }, undefined);\n        });\n        return r;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                        children: \"Nombre\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                        children: \"Correo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                        children: \"Contrasena\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                        children: \"Edad\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                        children: \"Telefono\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                        children: \"Fecha\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                        children: \"Aceptar notificaciones de ofertas\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                        children: \"Aceptar terminos y condiciones\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                        children: \"Editar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                        children: \"Eliminar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined),\n            renderizarDatos()\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Registros.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Registros, \"zVkHl+QRKNfbkEF9ZpGD5LDhP0I=\");\n_c = Registros;\nvar _c;\n$RefreshReg$(_c, \"Registros\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29tcG9uZW50ZXMvUmVnaXN0cm9zLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFrRDtBQUNJO0FBRWY7QUFJaEMsTUFBTUssWUFBWTs7SUFDckIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFZLEVBQUU7SUFDdERELGdEQUFTQSxDQUFDO1FBQ05FLG1FQUFlQSxHQUFHSyxJQUFJLENBQUMsQ0FBQ0M7WUFDcEJDLFFBQVFDLEdBQUcsQ0FBQztZQUNaRCxRQUFRQyxHQUFHLENBQUNGLE9BQU8sQ0FBQyxFQUFFO1lBQ3RCRixZQUFZRTtRQUNoQjtJQUVKLEdBQUUsRUFBRTtJQUVKLE1BQU1HLGtCQUFrQjtRQUNwQixJQUFJQyxJQUFJUCxTQUFTUSxHQUFHLENBQUMsQ0FBQ0M7WUFDbEIscUJBQU8sOERBQUNDOztrQ0FDQSw4REFBQ0M7a0NBQUlGLEVBQUVHLE1BQU07Ozs7OztrQ0FDYiw4REFBQ0Q7a0NBQUlGLEVBQUVJLE1BQU07Ozs7OztrQ0FDYiw4REFBQ0Y7a0NBQUlGLEVBQUVLLFVBQVU7Ozs7OztrQ0FDakIsOERBQUNIO2tDQUFJRixFQUFFTSxJQUFJOzs7Ozs7a0NBQ1gsOERBQUNKO2tDQUFJRixFQUFFTyxRQUFROzs7Ozs7a0NBQ2YsOERBQUNMO2tDQUFJRixFQUFFUSxLQUFLOzs7Ozs7a0NBQ1osOERBQUNOO2tDQUFJRixFQUFFUyxNQUFNOzs7Ozs7a0NBQ2IsOERBQUNQO2tDQUFJRixFQUFFVSxPQUFPOzs7Ozs7a0NBQ2QsOERBQUNSO2tDQUFHLDRFQUFDYixrREFBSUE7NEJBQUNzQixJQUFJLGlCQUFlWCxFQUFFWSxTQUFTO3NDQUFFOzs7Ozs7Ozs7OztrQ0FDMUMsOERBQUNWO2tDQUFHLDRFQUFDYixrREFBSUE7NEJBQUNzQixJQUFJLGVBQWFYLEVBQUVZLFNBQVM7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRXBEO1FBQ0EsT0FBT2Q7SUFDWDtJQUVBLHFCQUNBLDhEQUFDZTs7MEJBQ0csOERBQUNaOztrQ0FDRyw4REFBQ2E7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0E7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0E7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0E7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0E7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0E7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0E7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0E7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0E7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0E7a0NBQUc7Ozs7Ozs7Ozs7OztZQUdKakI7Ozs7Ozs7QUFJWixFQUFDO0dBaERZUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0NvbXBvbmVudGVzL1JlZ2lzdHJvcy50c3g/YjIzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBvYnRlbmVyUGVyc29uYXMgfSBmcm9tICcuLi9GaXJlYmFzZS9Qcm9tZXNhcydcclxuaW1wb3J0IHsgUGVyc29uYSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSUZvcm11bGFyaW8nXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgUmVnaXN0cm9zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3BlcnNvbmFzLCBzZXRQZXJzb25hc10gPSB1c2VTdGF0ZTxQZXJzb25hW10+KFtdKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgb2J0ZW5lclBlcnNvbmFzKCkudGhlbigobGlzdGFkbyk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJZYSBlc3RveSBsaXN0b1wiKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0YWRvWzBdKVxyXG4gICAgICAgICAgICBzZXRQZXJzb25hcyhsaXN0YWRvKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICBcclxuICAgIH0sW10pXHJcblxyXG4gICAgY29uc3QgcmVuZGVyaXphckRhdG9zID0gKCk9PntcclxuICAgICAgICB2YXIgciA9IHBlcnNvbmFzLm1hcCgocCk9PntcclxuICAgICAgICAgICAgcmV0dXJuIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3Aubm9tYnJlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntwLkNvcnJlb308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57cC5Db250cmFzZW5hfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntwLmVkYWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3AuVGVsZWZvbm99PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3AuRmVjaGF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3AuR2VuZXJvfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntwLkFjZXB0YXJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PExpbmsgdG89e1wiL2FjdHVhbGl6YXIvXCIrcC5pZFBlcnNvbmF9PkFjdHVhbGl6YXI8L0xpbms+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PExpbmsgdG89e1wiL2VsaW1pbmFyL1wiK3AuaWRQZXJzb25hfT5FbGltaW5hcjwvTGluaz48L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiByXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDx0YWJsZT5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5Ob21icmU8L3RoPlxyXG4gICAgICAgICAgICA8dGg+Q29ycmVvPC90aD5cclxuICAgICAgICAgICAgPHRoPkNvbnRyYXNlbmE8L3RoPlxyXG4gICAgICAgICAgICA8dGg+RWRhZDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5UZWxlZm9ubzwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5GZWNoYTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5BY2VwdGFyIG5vdGlmaWNhY2lvbmVzIGRlIG9mZXJ0YXM8L3RoPlxyXG4gICAgICAgICAgICA8dGg+QWNlcHRhciB0ZXJtaW5vcyB5IGNvbmRpY2lvbmVzPC90aD5cclxuICAgICAgICAgICAgPHRoPkVkaXRhcjwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5FbGltaW5hcjwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcml6YXJEYXRvcygpXHJcbiAgICAgICAgfVxyXG4gICAgPC90YWJsZT5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm9idGVuZXJQZXJzb25hcyIsIkxpbmsiLCJSZWdpc3Ryb3MiLCJwZXJzb25hcyIsInNldFBlcnNvbmFzIiwidGhlbiIsImxpc3RhZG8iLCJjb25zb2xlIiwibG9nIiwicmVuZGVyaXphckRhdG9zIiwiciIsIm1hcCIsInAiLCJ0ciIsInRkIiwibm9tYnJlIiwiQ29ycmVvIiwiQ29udHJhc2VuYSIsImVkYWQiLCJUZWxlZm9ubyIsIkZlY2hhIiwiR2VuZXJvIiwiQWNlcHRhciIsInRvIiwiaWRQZXJzb25hIiwidGFibGUiLCJ0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Componentes/Registros.tsx\n"));

/***/ })

});