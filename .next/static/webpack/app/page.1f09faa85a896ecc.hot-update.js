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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Formulario: function() { return /* binding */ Formulario; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Firebase_Promesas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Firebase/Promesas */ \"(app-pages-browser)/./src/app/Firebase/Promesas.tsx\");\n/* __next_internal_client_entry_do_not_use__ Formulario auto */ \nvar _s = $RefreshSig$();\n\n\nconst Formulario = ()=>{\n    _s();\n    const [nombre, setNombre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [Correo, setCorreo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [Contrasena, setContrasena] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [edad, setEdad] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [Telefono, setTelefono] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [Fecha, setFecha] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [Mensaje, setMensaje] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [Aceptar, setAceptar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errorNombre, setErrorNombre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [idPersona, setIdPersona] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const registrar = ()=>{\n        if (nombre.trim() == \"\") {\n            setErrorNombre(\"No valen espacios en blanco\");\n        } else {\n            setNombre(nombre.trim());\n        }\n        //Asuman que se valido todo\n        const p = {\n            nombre,\n            Correo,\n            Contrasena,\n            edad: parseInt(edad),\n            Telefono: parseInt(Telefono),\n            Fecha,\n            Mensaje,\n            Aceptar: Aceptar ? \"Aceptado\" : \"No Acepta\"\n        };\n        (0,_Firebase_Promesas__WEBPACK_IMPORTED_MODULE_2__.registrarPersona)(p);\n        console.log(nombre);\n        console.log(Correo);\n        console.log(Contrasena);\n        console.log(edad);\n        console.log(Telefono);\n        console.log(Fecha);\n        console.log(Mensaje);\n        console.log(Aceptar);\n        alert(\"Bienvenido \" + nombre + \" \" + Correo);\n    };\n    const validarNombre = (valor)=>{\n        setNombre(valor);\n        if (valor.length < 3) {\n            setErrorNombre(\"Debe tener mas de 3 letras\");\n        } else {\n            setErrorNombre(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Nombre: \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 63,\n                columnNumber: 32\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                onChange: (e)=>validarNombre(e.target.value),\n                value: nombre\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 64,\n                columnNumber: 91\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: errorNombre\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 65,\n                columnNumber: 35\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Correo: \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 66,\n                columnNumber: 32\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                onChange: (e)=>setCorreo(e.target.value),\n                value: Correo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 67,\n                columnNumber: 87\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Contrase\\xf1a: \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 68,\n                columnNumber: 36\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                onChange: (e)=>setContrasena(e.target.value),\n                value: Contrasena\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 69,\n                columnNumber: 97\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Edad: \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 70,\n                columnNumber: 30\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                onChange: (e)=>setEdad(e.target.value),\n                value: edad\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 71,\n                columnNumber: 82\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Telefono: \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 72,\n                columnNumber: 34\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"tel\",\n                onChange: (e)=>setTelefono(e.target.value),\n                value: Telefono\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 73,\n                columnNumber: 87\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Fecha: \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 74,\n                columnNumber: 31\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"date\",\n                onChange: (e)=>setFecha(e.target.value),\n                value: Fecha\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 75,\n                columnNumber: 82\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Escriba un Mensaje: \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 76,\n                columnNumber: 44\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                onChange: (e)=>setMensaje(e.target.value),\n                value: Mensaje\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Aceptar terminos y condiciones: \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 78,\n                columnNumber: 56\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                onChange: (e)=>setAceptar(e.target.checked),\n                checked: Aceptar\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 79,\n                columnNumber: 94\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: registrar,\n                children: \"Registrar\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gajar\\\\OneDrive\\\\Escritorio\\\\Eva 4 Luciano\\\\my-app\\\\src\\\\app\\\\Componentes\\\\Formulario.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Formulario, \"eh3sR6QjRz2Mi3iKufGQy5OGIuY=\");\n_c = Formulario;\nvar _c;\n$RefreshReg$(_c, \"Formulario\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29tcG9uZW50ZXMvRm9ybXVsYXJpby50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNrRDtBQUVLO0FBRWhELE1BQU1HLGFBQWE7O0lBQzFCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNLLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDTyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2UsU0FBU0MsV0FBVyxHQUFHaEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDaUIsU0FBU0MsV0FBVyxHQUFHbEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDbUIsYUFBYUMsZUFBZSxHQUFHcEIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDcUIsV0FBVUMsYUFBYSxHQUFHdEIsK0NBQVFBLENBQUM7SUFHeEMsTUFBTXVCLFlBQVk7UUFFaEIsSUFBR3BCLE9BQU9xQixJQUFJLE1BQUksSUFBRztZQUNuQkosZUFBZTtRQUNqQixPQUFLO1lBQ0hoQixVQUFVRCxPQUFPcUIsSUFBSTtRQUN2QjtRQUVBLDJCQUEyQjtRQUMzQixNQUFNQyxJQUFZO1lBQ2R0QjtZQUNBRTtZQUNBRTtZQUNBRSxNQUFLaUIsU0FBU2pCO1lBQ2RFLFVBQVNlLFNBQVNmO1lBQ2xCRTtZQUNBRTtZQUNBRSxTQUFTQSxVQUFVLGFBQWE7UUFFcEM7UUFDQWhCLG9FQUFnQkEsQ0FBQ3dCO1FBQ2pCRSxRQUFRQyxHQUFHLENBQUN6QjtRQUNad0IsUUFBUUMsR0FBRyxDQUFDdkI7UUFDWnNCLFFBQVFDLEdBQUcsQ0FBQ3JCO1FBQ1pvQixRQUFRQyxHQUFHLENBQUNuQjtRQUNaa0IsUUFBUUMsR0FBRyxDQUFDakI7UUFDWmdCLFFBQVFDLEdBQUcsQ0FBQ2Y7UUFDWmMsUUFBUUMsR0FBRyxDQUFDYjtRQUNaWSxRQUFRQyxHQUFHLENBQUNYO1FBQ1pZLE1BQU0sZ0JBQWMxQixTQUFPLE1BQUlFO0lBQ2pDO0lBQ0EsTUFBTXlCLGdCQUFnQixDQUFDQztRQUNyQjNCLFVBQVUyQjtRQUNWLElBQUdBLE1BQU1DLE1BQU0sR0FBQyxHQUFFO1lBQ2hCWixlQUFlO1FBQ2pCLE9BQ0k7WUFDRkEsZUFBZTtRQUNqQjtJQUdGO0lBQ0EscUJBQ0UsOERBQUNhOzswQkFDRyw4REFBQ0M7MEJBQU07Ozs7OzswQkFBZ0IsOERBQUNDOzs7OzswQkFDeEIsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFPQyxVQUFVLENBQUNDLElBQUlULGNBQWNTLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztnQkFBR0EsT0FBT3RDOzs7Ozs7MEJBQVUsOERBQUNnQzs7Ozs7MEJBQ25GLDhEQUFDTzswQkFBTXZCOzs7Ozs7MEJBQW1CLDhEQUFDZ0I7Ozs7OzBCQUMzQiw4REFBQ0Q7MEJBQU07Ozs7OzswQkFBZ0IsOERBQUNDOzs7OzswQkFDeEIsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFRQyxVQUFVLENBQUNDLElBQUlqQyxVQUFVaUMsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO2dCQUFHQSxPQUFPcEM7Ozs7OzswQkFBUyw4REFBQzhCOzs7OzswQkFDL0UsOERBQUNEOzBCQUFNOzs7Ozs7MEJBQW9CLDhEQUFDQzs7Ozs7MEJBQzVCLDhEQUFDQztnQkFBTUMsTUFBSztnQkFBV0MsVUFBVSxDQUFDQyxJQUFJL0IsY0FBYytCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztnQkFBRUEsT0FBT2xDOzs7Ozs7MEJBQWEsOERBQUM0Qjs7Ozs7MEJBQ3pGLDhEQUFDRDswQkFBTTs7Ozs7OzBCQUFjLDhEQUFDQzs7Ozs7MEJBQ3RCLDhEQUFDQztnQkFBTUMsTUFBSztnQkFBUUMsVUFBVSxDQUFDQyxJQUFJN0IsUUFBUTZCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztnQkFBRUEsT0FBT2hDOzs7Ozs7MEJBQU8sOERBQUMwQjs7Ozs7MEJBQzFFLDhEQUFDRDswQkFBTTs7Ozs7OzBCQUFrQiw4REFBQ0M7Ozs7OzBCQUMxQiw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQUtDLFVBQVUsQ0FBQ0MsSUFBSTNCLFlBQVkyQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0JBQUVBLE9BQU85Qjs7Ozs7OzBCQUFXLDhEQUFDd0I7Ozs7OzBCQUMvRSw4REFBQ0Q7MEJBQU07Ozs7OzswQkFBZSw4REFBQ0M7Ozs7OzBCQUN2Qiw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQU1DLFVBQVUsQ0FBQ0MsSUFBSXpCLFNBQVN5QixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0JBQUVBLE9BQU81Qjs7Ozs7OzBCQUFRLDhEQUFDc0I7Ozs7OzBCQUMxRSw4REFBQ0Q7MEJBQU07Ozs7OzswQkFBNEIsOERBQUNDOzs7OzswQkFDcEMsOERBQUNRO2dCQUFTTCxVQUFVLENBQUNDLElBQU12QixXQUFXdUIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO2dCQUFHQSxPQUFPMUI7Ozs7OzswQkFDOUQsOERBQUNtQjswQkFBTTs7Ozs7OzBCQUF3Qyw4REFBQ0M7Ozs7OzBCQUNoRCw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQVVDLFVBQVUsQ0FBQ0MsSUFBSXJCLFdBQVdxQixFQUFFQyxNQUFNLENBQUNJLE9BQU87Z0JBQUVBLFNBQVMzQjs7Ozs7OzBCQUFVLDhEQUFDa0I7Ozs7OzBCQUN0Riw4REFBQ1U7Z0JBQU9SLE1BQUs7Z0JBQVNTLFNBQVN2QjswQkFBVzs7Ozs7Ozs7Ozs7O0FBR2xELEVBQUM7R0E3RVlyQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0NvbXBvbmVudGVzL0Zvcm11bGFyaW8udHN4PzE4YjQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBlcnNvbmEgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lGb3JtdWxhcmlvJ1xyXG5pbXBvcnQgeyByZWdpc3RyYXJQZXJzb25hIH0gZnJvbSAnLi4vRmlyZWJhc2UvUHJvbWVzYXMnXHJcblxyXG5leHBvcnQgY29uc3QgRm9ybXVsYXJpbyA9ICgpID0+IHtcclxuY29uc3QgW25vbWJyZSwgc2V0Tm9tYnJlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbmNvbnN0IFtDb3JyZW8sIHNldENvcnJlb10gPSB1c2VTdGF0ZShcIlwiKVxyXG5jb25zdCBbQ29udHJhc2VuYSwgc2V0Q29udHJhc2VuYV0gPSB1c2VTdGF0ZShcIlwiKVxyXG5jb25zdCBbZWRhZCwgc2V0RWRhZF0gPSB1c2VTdGF0ZShcIlwiKVxyXG5jb25zdCBbVGVsZWZvbm8sIHNldFRlbGVmb25vXSA9IHVzZVN0YXRlKFwiXCIpXHJcbmNvbnN0IFtGZWNoYSwgc2V0RmVjaGFdID0gdXNlU3RhdGUoXCJcIilcclxuY29uc3QgW01lbnNhamUsIHNldE1lbnNhamVdID0gdXNlU3RhdGUoXCJcIilcclxuY29uc3QgW0FjZXB0YXIsIHNldEFjZXB0YXJdID0gdXNlU3RhdGUoXCJcIilcclxuY29uc3QgW2Vycm9yTm9tYnJlLCBzZXRFcnJvck5vbWJyZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG5jb25zdCBbaWRQZXJzb25hLHNldElkUGVyc29uYV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIFxyXG4gIFxyXG4gIGNvbnN0IHJlZ2lzdHJhciA9ICgpPT57XHJcblxyXG4gICAgaWYobm9tYnJlLnRyaW0oKT09XCJcIil7XHJcbiAgICAgIHNldEVycm9yTm9tYnJlKFwiTm8gdmFsZW4gZXNwYWNpb3MgZW4gYmxhbmNvXCIpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgc2V0Tm9tYnJlKG5vbWJyZS50cmltKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy9Bc3VtYW4gcXVlIHNlIHZhbGlkbyB0b2RvXHJcbiAgICBjb25zdCBwOlBlcnNvbmEgPSB7XHJcbiAgICAgICAgbm9tYnJlLFxyXG4gICAgICAgIENvcnJlbyxcclxuICAgICAgICBDb250cmFzZW5hLFxyXG4gICAgICAgIGVkYWQ6cGFyc2VJbnQoZWRhZCksXHJcbiAgICAgICAgVGVsZWZvbm86cGFyc2VJbnQoVGVsZWZvbm8pLFxyXG4gICAgICAgIEZlY2hhLFxyXG4gICAgICAgIE1lbnNhamUsXHJcbiAgICAgICAgQWNlcHRhcjogQWNlcHRhciA/IFwiQWNlcHRhZG9cIiA6IFwiTm8gQWNlcHRhXCIsXHJcblxyXG4gICAgfVxyXG4gICAgcmVnaXN0cmFyUGVyc29uYShwKVxyXG4gICAgY29uc29sZS5sb2cobm9tYnJlKTtcclxuICAgIGNvbnNvbGUubG9nKENvcnJlbylcclxuICAgIGNvbnNvbGUubG9nKENvbnRyYXNlbmEpO1xyXG4gICAgY29uc29sZS5sb2coZWRhZCk7XHJcbiAgICBjb25zb2xlLmxvZyhUZWxlZm9ubyk7XHJcbiAgICBjb25zb2xlLmxvZyhGZWNoYSk7XHJcbiAgICBjb25zb2xlLmxvZyhNZW5zYWplKTtcclxuICAgIGNvbnNvbGUubG9nKEFjZXB0YXIpXHJcbiAgICBhbGVydChcIkJpZW52ZW5pZG8gXCIrbm9tYnJlK1wiIFwiK0NvcnJlbyk7XHJcbiAgfVxyXG4gIGNvbnN0IHZhbGlkYXJOb21icmUgPSAodmFsb3I6c3RyaW5nKT0+e1xyXG4gICAgc2V0Tm9tYnJlKHZhbG9yKTtcclxuICAgIGlmKHZhbG9yLmxlbmd0aDwzKXtcclxuICAgICAgc2V0RXJyb3JOb21icmUoXCJEZWJlIHRlbmVyIG1hcyBkZSAzIGxldHJhc1wiKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc2V0RXJyb3JOb21icmUoXCJcIilcclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0+XHJcbiAgICAgICAgPGxhYmVsPk5vbWJyZTogPC9sYWJlbD48YnIvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSk9PnZhbGlkYXJOb21icmUoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17bm9tYnJlfSAvPjxici8+XHJcbiAgICAgICAgPHNwYW4+e2Vycm9yTm9tYnJlfTwvc3Bhbj48YnIvPlxyXG4gICAgICAgIDxsYWJlbD5Db3JyZW86IDwvbGFiZWw+PGJyLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgb25DaGFuZ2U9eyhlKT0+c2V0Q29ycmVvKGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e0NvcnJlb30vPjxici8+ICAgXHJcbiAgICAgICAgPGxhYmVsPkNvbnRyYXNlw7FhOiA8L2xhYmVsPjxici8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXsoZSk9PnNldENvbnRyYXNlbmEoZS50YXJnZXQudmFsdWUpfXZhbHVlPXtDb250cmFzZW5hfS8+PGJyLz4gICAgIFxyXG4gICAgICAgIDxsYWJlbD5FZGFkOiA8L2xhYmVsPjxici8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIm9uQ2hhbmdlPXsoZSk9PnNldEVkYWQoZS50YXJnZXQudmFsdWUpfXZhbHVlPXtlZGFkfS8+PGJyLz5cclxuICAgICAgICA8bGFiZWw+VGVsZWZvbm86IDwvbGFiZWw+PGJyLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwib25DaGFuZ2U9eyhlKT0+c2V0VGVsZWZvbm8oZS50YXJnZXQudmFsdWUpfXZhbHVlPXtUZWxlZm9ub30vPjxici8+XHJcbiAgICAgICAgPGxhYmVsPkZlY2hhOiA8L2xhYmVsPjxici8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCJvbkNoYW5nZT17KGUpPT5zZXRGZWNoYShlLnRhcmdldC52YWx1ZSl9dmFsdWU9e0ZlY2hhfS8+PGJyLz4gXHJcbiAgICAgICAgPGxhYmVsPkVzY3JpYmEgdW4gTWVuc2FqZTogPC9sYWJlbD48YnIvPlxyXG4gICAgICAgIDx0ZXh0YXJlYSBvbkNoYW5nZT17KGUpID0+IHNldE1lbnNhamUoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17TWVuc2FqZX0gLz5cclxuICAgICAgICA8bGFiZWw+QWNlcHRhciB0ZXJtaW5vcyB5IGNvbmRpY2lvbmVzOiA8L2xhYmVsPjxici8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwib25DaGFuZ2U9eyhlKT0+c2V0QWNlcHRhcihlLnRhcmdldC5jaGVja2VkKX1jaGVja2VkPXtBY2VwdGFyfS8+PGJyLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17cmVnaXN0cmFyfT5SZWdpc3RyYXI8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJyZWdpc3RyYXJQZXJzb25hIiwiRm9ybXVsYXJpbyIsIm5vbWJyZSIsInNldE5vbWJyZSIsIkNvcnJlbyIsInNldENvcnJlbyIsIkNvbnRyYXNlbmEiLCJzZXRDb250cmFzZW5hIiwiZWRhZCIsInNldEVkYWQiLCJUZWxlZm9ubyIsInNldFRlbGVmb25vIiwiRmVjaGEiLCJzZXRGZWNoYSIsIk1lbnNhamUiLCJzZXRNZW5zYWplIiwiQWNlcHRhciIsInNldEFjZXB0YXIiLCJlcnJvck5vbWJyZSIsInNldEVycm9yTm9tYnJlIiwiaWRQZXJzb25hIiwic2V0SWRQZXJzb25hIiwicmVnaXN0cmFyIiwidHJpbSIsInAiLCJwYXJzZUludCIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsInZhbGlkYXJOb21icmUiLCJ2YWxvciIsImxlbmd0aCIsImZvcm0iLCJsYWJlbCIsImJyIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzcGFuIiwidGV4dGFyZWEiLCJjaGVja2VkIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Componentes/Formulario.tsx\n"));

/***/ })

});