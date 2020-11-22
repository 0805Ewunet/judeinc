webpackHotUpdate("main",{

/***/ "./src/components/Product.js":
/*!***********************************!*\
  !*** ./src/components/Product.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ "./src/context.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/ewunetkassa/Desktop/muancollections-lancaster,PA/maun/src/components/Product.js";





class Product extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      id,
      title,
      img,
      price,
      inCart
    } = this.props.product;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProductWrapper, {
      className: "col-9 mx-auto col-md-6 col-lg-3 my-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_3__["ProductConsumer"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, value => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "img-container p-5",
      onClick: () => value.handleDetail(id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: img,
      alt: "product",
      className: "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "cart-btn",
      disabled: inCart ? true : false,
      onClick: () => {
        value.addToCart(id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, inCart ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-capitalize mb-0",
      disabled: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "", "in Cart") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-cart-plus",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-footer d-flex justify-content-between",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "align-self-center mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "text-blue font-italic mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mr-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "$"), price))));
  }

}
const ProductWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .cart-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;

/***/ })

})
//# sourceMappingURL=main.44f6e9b0309626a7f1b1.hot-update.js.map