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

/***/ "(app-pages-browser)/./src/app/Componentes/Formulario.tsx":
/*!********************************************!*\
  !*** ./src/app/Componentes/Formulario.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Formulario: function() { return /* binding */ Formulario; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Firebase_Promesas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Firebase/Promesas */ \"(app-pages-browser)/./src/app/Firebase/Promesas.tsx\");\n/* __next_internal_client_entry_do_not_use__ Formulario auto */ \nvar _s = $RefreshSig$();\n\n\nconst Formulario = ()=>{\n    _s();\n    const [nombre, setNombre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [apellido, setApellido] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [edad, setEdad] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [correo, setCorreo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [contraseña, setContraseña] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [telefono, setTelefono] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [aceptaTerminos, setAceptarTerminos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [mensaje, setMensaje] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [genero, setGenero] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errorNombre, setErrorNombre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const registrar = ()=>{\n        if (nombre.trim() == \"\") {\n            setErrorNombre(\"No valen espacios en blanco\");\n        } else {\n            setNombre(nombre.trim());\n        }\n        //Asuman que se valido todo\n        const p = {\n            nombre,\n            apellido,\n            edad: parseInt(edad)\n        };\n        (0,_Firebase_Promesas__WEBPACK_IMPORTED_MODULE_2__.registrarPersona)(p);\n        console.log(nombre);\n        console.log(apellido);\n        console.log(edad);\n        console.log(correo);\n        console.log(contraseña);\n        console.log(telefono);\n        console.log(aceptaTerminos);\n        console.log(mensaje);\n        console.log(genero);\n        alert(\"Bienvenido \" + nombre + \" \" + apellido);\n    };\n    const validarNombre = (valor)=>{\n        setNombre(valor);\n        if (valor.length < 3) {\n            setErrorNombre(\"Debe tener mas de 3 letras\");\n        } else {\n            setErrorNombre(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Nombre: \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 62,\n                columnNumber: 32\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                onChange: (e)=>validarNombre(e.target.value),\n                value: nombre\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: errorNombre\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 67,\n                columnNumber: 35\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Apellido: \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 68,\n                columnNumber: 34\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                onChange: (e)=>setApellido(e.target.value),\n                value: apellido\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 72,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Edad: \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 74,\n                columnNumber: 30\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                onChange: (e)=>setEdad(e.target.value),\n                value: edad\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: registrar,\n                children: \"Registrar\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Formulario, \"FGDraDPzWJdtXad79g7Dc1wb6WM=\");\n_c = Formulario;\nvar _c;\n$RefreshReg$(_c, \"Formulario\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29tcG9uZW50ZXMvRm9ybXVsYXJpby50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNrRDtBQUVLO0FBRWhELE1BQU1HLGFBQWE7O0lBQ3hCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1MsUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDYSxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2UsZ0JBQWdCQyxtQkFBbUIsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3RELE1BQU0sQ0FBQ2lCLFNBQVNDLFdBQVcsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ21CLFFBQVFDLFVBQVUsR0FBR3BCLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU0sQ0FBQ3FCLGFBQWFDLGVBQWUsR0FBR3RCLCtDQUFRQSxDQUFDO0lBSy9DLE1BQU11QixZQUFZO1FBRWhCLElBQUdwQixPQUFPcUIsSUFBSSxNQUFJLElBQUc7WUFDbkJGLGVBQWU7UUFDakIsT0FBSztZQUNIbEIsVUFBVUQsT0FBT3FCLElBQUk7UUFDdkI7UUFFQSwyQkFBMkI7UUFDM0IsTUFBTUMsSUFBWTtZQUNkdEI7WUFDQUU7WUFDQUUsTUFBS21CLFNBQVNuQjtRQUNsQjtRQUNBTixvRUFBZ0JBLENBQUN3QjtRQUNqQkUsUUFBUUMsR0FBRyxDQUFDekI7UUFDWndCLFFBQVFDLEdBQUcsQ0FBQ3ZCO1FBQ1pzQixRQUFRQyxHQUFHLENBQUNyQjtRQUNab0IsUUFBUUMsR0FBRyxDQUFDbkI7UUFDWmtCLFFBQVFDLEdBQUcsQ0FBQ2pCO1FBQ1pnQixRQUFRQyxHQUFHLENBQUNmO1FBQ1pjLFFBQVFDLEdBQUcsQ0FBQ2I7UUFDWlksUUFBUUMsR0FBRyxDQUFDWDtRQUNaVSxRQUFRQyxHQUFHLENBQUNUO1FBRVpVLE1BQU0sZ0JBQWMxQixTQUFPLE1BQUlFO0lBQ2pDO0lBQ0EsTUFBTXlCLGdCQUFnQixDQUFDQztRQUNyQjNCLFVBQVUyQjtRQUNWLElBQUdBLE1BQU1DLE1BQU0sR0FBQyxHQUFFO1lBQ2hCVixlQUFlO1FBQ2pCLE9BQ0k7WUFDRkEsZUFBZTtRQUNqQjtJQUdGO0lBQ0EscUJBQ0UsOERBQUNXOzswQkFDRyw4REFBQ0M7MEJBQU07Ozs7OzswQkFBZ0IsOERBQUNDOzs7OzswQkFDeEIsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUNWQyxVQUFVLENBQUNDLElBQUlULGNBQWNTLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztnQkFDM0NBLE9BQU90Qzs7Ozs7OzBCQUNMLDhEQUFDZ0M7Ozs7OzBCQUNMLDhEQUFDTzswQkFBTXJCOzs7Ozs7MEJBQW1CLDhEQUFDYzs7Ozs7MEJBQzNCLDhEQUFDRDswQkFBTTs7Ozs7OzBCQUFrQiw4REFBQ0M7Ozs7OzBCQUMxQiw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQ1ZDLFVBQVUsQ0FBQ0MsSUFBSWpDLFlBQVlpQyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0JBQ3pDQSxPQUFPcEM7Ozs7OzswQkFDUCw4REFBQzhCOzs7OzswQkFFSCw4REFBQ0Q7MEJBQU07Ozs7OzswQkFBYyw4REFBQ0M7Ozs7OzBCQUN0Qiw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQ1ZDLFVBQVUsQ0FBQ0MsSUFBSS9CLFFBQVErQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0JBQ3JDQSxPQUFPbEM7Ozs7OzswQkFDTCw4REFBQzRCOzs7OzswQkFFTCw4REFBQ1E7Z0JBQU9OLE1BQUs7Z0JBQVNPLFNBQVNyQjswQkFBVzs7Ozs7Ozs7Ozs7O0FBR2xELEVBQUM7R0E3RVlyQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0NvbXBvbmVudGVzL0Zvcm11bGFyaW8udHN4PzE4YjQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBlcnNvbmEgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lGb3JtdWxhcmlvJ1xyXG5pbXBvcnQgeyByZWdpc3RyYXJQZXJzb25hIH0gZnJvbSAnLi4vRmlyZWJhc2UvUHJvbWVzYXMnXHJcblxyXG5leHBvcnQgY29uc3QgRm9ybXVsYXJpbyA9ICgpID0+IHtcclxuICBjb25zdCBbbm9tYnJlLCBzZXROb21icmVdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbYXBlbGxpZG8sIHNldEFwZWxsaWRvXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2VkYWQsIHNldEVkYWRdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbY29ycmVvLCBzZXRDb3JyZW9dID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbY29udHJhc2XDsWEsIHNldENvbnRyYXNlw7FhXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW3RlbGVmb25vLCBzZXRUZWxlZm9ub10gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFthY2VwdGFUZXJtaW5vcywgc2V0QWNlcHRhclRlcm1pbm9zXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW21lbnNhamUsIHNldE1lbnNhamVdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbZ2VuZXJvLCBzZXRHZW5lcm9dID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgY29uc3QgW2Vycm9yTm9tYnJlLCBzZXRFcnJvck5vbWJyZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICBcclxuXHJcbiAgXHJcbiAgY29uc3QgcmVnaXN0cmFyID0gKCk9PntcclxuXHJcbiAgICBpZihub21icmUudHJpbSgpPT1cIlwiKXtcclxuICAgICAgc2V0RXJyb3JOb21icmUoXCJObyB2YWxlbiBlc3BhY2lvcyBlbiBibGFuY29cIilcclxuICAgIH1lbHNle1xyXG4gICAgICBzZXROb21icmUobm9tYnJlLnRyaW0oKSlcclxuICAgIH1cclxuXHJcbiAgICAvL0FzdW1hbiBxdWUgc2UgdmFsaWRvIHRvZG9cclxuICAgIGNvbnN0IHA6UGVyc29uYSA9IHtcclxuICAgICAgICBub21icmUsXHJcbiAgICAgICAgYXBlbGxpZG8sXHJcbiAgICAgICAgZWRhZDpwYXJzZUludChlZGFkKVxyXG4gICAgfVxyXG4gICAgcmVnaXN0cmFyUGVyc29uYShwKVxyXG4gICAgY29uc29sZS5sb2cobm9tYnJlKTtcclxuICAgIGNvbnNvbGUubG9nKGFwZWxsaWRvKTtcclxuICAgIGNvbnNvbGUubG9nKGVkYWQpO1xyXG4gICAgY29uc29sZS5sb2coY29ycmVvKTtcclxuICAgIGNvbnNvbGUubG9nKGNvbnRyYXNlw7FhKTtcclxuICAgIGNvbnNvbGUubG9nKHRlbGVmb25vKTtcclxuICAgIGNvbnNvbGUubG9nKGFjZXB0YVRlcm1pbm9zKTtcclxuICAgIGNvbnNvbGUubG9nKG1lbnNhamUpO1xyXG4gICAgY29uc29sZS5sb2coZ2VuZXJvKTtcclxuICAgIFxyXG4gICAgYWxlcnQoXCJCaWVudmVuaWRvIFwiK25vbWJyZStcIiBcIithcGVsbGlkbyk7XHJcbiAgfVxyXG4gIGNvbnN0IHZhbGlkYXJOb21icmUgPSAodmFsb3I6c3RyaW5nKT0+e1xyXG4gICAgc2V0Tm9tYnJlKHZhbG9yKTtcclxuICAgIGlmKHZhbG9yLmxlbmd0aDwzKXtcclxuICAgICAgc2V0RXJyb3JOb21icmUoXCJEZWJlIHRlbmVyIG1hcyBkZSAzIGxldHJhc1wiKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc2V0RXJyb3JOb21icmUoXCJcIilcclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0+XHJcbiAgICAgICAgPGxhYmVsPk5vbWJyZTogPC9sYWJlbD48YnIvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKT0+dmFsaWRhck5vbWJyZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICB2YWx1ZT17bm9tYnJlfVxyXG4gICAgICAgICAgLz48YnIvPlxyXG4gICAgICAgIDxzcGFuPntlcnJvck5vbWJyZX08L3NwYW4+PGJyLz5cclxuICAgICAgICA8bGFiZWw+QXBlbGxpZG86IDwvbGFiZWw+PGJyLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0QXBlbGxpZG8oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdmFsdWU9e2FwZWxsaWRvfVxyXG4gICAgICAgIC8+PGJyLz5cclxuICAgICAgICBcclxuICAgICAgICA8bGFiZWw+RWRhZDogPC9sYWJlbD48YnIvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldEVkYWQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdmFsdWU9e2VkYWR9XHJcbiAgICAgICAgICAvPjxici8+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXtyZWdpc3RyYXJ9PlJlZ2lzdHJhcjwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInJlZ2lzdHJhclBlcnNvbmEiLCJGb3JtdWxhcmlvIiwibm9tYnJlIiwic2V0Tm9tYnJlIiwiYXBlbGxpZG8iLCJzZXRBcGVsbGlkbyIsImVkYWQiLCJzZXRFZGFkIiwiY29ycmVvIiwic2V0Q29ycmVvIiwiY29udHJhc2XDsWEiLCJzZXRDb250cmFzZcOxYSIsInRlbGVmb25vIiwic2V0VGVsZWZvbm8iLCJhY2VwdGFUZXJtaW5vcyIsInNldEFjZXB0YXJUZXJtaW5vcyIsIm1lbnNhamUiLCJzZXRNZW5zYWplIiwiZ2VuZXJvIiwic2V0R2VuZXJvIiwiZXJyb3JOb21icmUiLCJzZXRFcnJvck5vbWJyZSIsInJlZ2lzdHJhciIsInRyaW0iLCJwIiwicGFyc2VJbnQiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJ2YWxpZGFyTm9tYnJlIiwidmFsb3IiLCJsZW5ndGgiLCJmb3JtIiwibGFiZWwiLCJiciIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Componentes/Formulario.tsx\n"));

/***/ })

});