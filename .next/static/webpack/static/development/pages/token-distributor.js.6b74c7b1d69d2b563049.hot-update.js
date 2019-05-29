webpackHotUpdate("static/development/pages/token-distributor.js",{

/***/ "./pages/token-distributor.js":
/*!************************************!*\
  !*** ./pages/token-distributor.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../layouts/Main */ "./layouts/Main.js");
/* harmony import */ var _components_FormElements__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/FormElements */ "./components/FormElements.js");
/* harmony import */ var _components_Web3Status__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Web3Status */ "./components/Web3Status.js");
/* harmony import */ var _components_Contract__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Contract */ "./components/Contract.js");
/* harmony import */ var _components_TransactionMonitor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/TransactionMonitor */ "./components/TransactionMonitor.js");
/* harmony import */ var _components_SubHeader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/SubHeader */ "./components/SubHeader.js");
/* harmony import */ var _components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/LoadingIndicator */ "./components/LoadingIndicator.js");
/* harmony import */ var _components_Warning__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/Warning */ "./components/Warning.js");
/* harmony import */ var _utils_fileHelpers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/fileHelpers */ "./utils/fileHelpers.js");
/* harmony import */ var _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../utils/web3-connect */ "./utils/web3-connect.js");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../utils/misc */ "./utils/misc.js");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_utils_misc__WEBPACK_IMPORTED_MODULE_23__);












var _jsxFileName = "/home/abdulhakeem/Express/exsender/pages/token-distributor.js";












var xplAddress = "0x51f43d0c05eEfdEB70eEAf973e0b8286E494902D";

var TokenDistributor =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__["default"])(TokenDistributor, _React$Component);

  function TokenDistributor(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, TokenDistributor);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__["default"])(TokenDistributor).call(this, props));
    _this.contractProps = {
      contractName: "",
      contractDecimals: "",
      contractSymbol: "",
      addressBalance: "",
      distributorContractAllowance: ""
    };
    _this.newDistribution = {
      selectedFileName: "No file selected",
      textAreaWithAddresses: "",
      tokenAmount: "",
      totalAmount: "",
      totalAddresses: "",
      showTransactionMonitor: false,
      transactionBatch: "",
      transferPerBatch: 150,
      //recommeded
      transactionInProgress: false
    };
    _this.state = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({
      isUnifiedAmount: true,
      isWeb3Browser: false,
      web3BrowserConnected: false,
      isProcessing: false,
      contractAddress: ""
    }, _this.contractProps, _this.newDistribution);
    _this.toggleAmount = _this.toggleAmount.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this));
    _this.toggleTransactionMonitor = _this.toggleTransactionMonitor.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this));
    _this.restartDistribution = _this.restartDistribution.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this));
    _this.unlockBrowser = _this.unlockBrowser.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this));
    _this.handleBlur = _this.handleBlur.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this));
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this));
    _this.handleReset = _this.handleReset.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)); // this.fileInput = React.createRef();

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(TokenDistributor, [{
    key: "unlockBrowser",
    value: function unlockBrowser() {
      var self = this;
      _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].enableWeb3Browser().then(function () {
        self.setState({
          web3BrowserConnected: true
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "toggleAmount",
    value: function toggleAmount() {
      this.setState({
        isUnifiedAmount: !this.state.isUnifiedAmount
      });
    }
  }, {
    key: "toggleTransactionMonitor",
    value: function toggleTransactionMonitor() {
      this.setState({
        showTransactionMonitor: !this.state.showTransactionMonitor
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, name, value));

      if (name == "contractAddress") {
        this.handleContractAddress(value);
      } else if (name == "textAreaWithAddresses") {
        this.handleAddresses(value);
      } else if (name == "tokenAmount") {
        this.handleAmount(value);
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var _e$target2 = e.target,
          name = _e$target2.name,
          value = _e$target2.value;
      var self = this;

      if (name == "uploadFileInput") {
        var uploadElement = document.getElementById(name);
        var files = uploadElement.files;

        if (files.length > 0) {
          self.setState({
            selectedFileName: files[0].name,
            isProcessing: true
          });
          _utils_fileHelpers__WEBPACK_IMPORTED_MODULE_21__["SpreadsheetHelper"].readFile(files[0]).then(function (json) {
            return _utils_fileHelpers__WEBPACK_IMPORTED_MODULE_21__["SpreadsheetHelper"].readObjectProperty(json);
          }).then(function (columnsObject) {
            console.log(columnsObject);

            if (columnsObject["amounts"]) {
              /*self.setState({
              	tokenAmount: columnsObject["amounts"],
              	textAreaWithAddresses: columnsObject["addresses"]
              })*/
              self.handleAmount(columnsObject["amounts"].join());
              self.handleAddresses(columnsObject["addresses"].join());
            } else {
              /*self.setState({
              	textAreaWithAddresses: columnsObject["addresses"]
              })*/
              self.handleAddresses(columnsObject["addresses"].join());
            }
          }).catch(function (err) {
            window.alert("Invalid file.");
          }).finally(function () {
            self.setState({
              isProcessing: false
            });
            uploadElement.value = "";
          });
        }
      } else {
        self.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, name, value));
      }
    }
  }, {
    key: "handleContractAddress",
    value: function () {
      var _handleContractAddress = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(value) {
        var validAddress, contractName, contractSymbol, contractDecimals, addressBalance, distributorContractAllowance;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                validAddress = _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].validateAddress(value);

                if (!validAddress) {
                  _context.next = 34;
                  break;
                }

                this.setState({
                  isProcessing: true
                });
                _context.prev = 3;
                _context.next = 6;
                return _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].getContractProp(value, 'name');

              case 6:
                contractName = _context.sent;
                _context.next = 9;
                return _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].getContractProp(value, 'symbol');

              case 9:
                contractSymbol = _context.sent;
                _context.next = 12;
                return _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].getContractProp(value, 'decimals');

              case 12:
                contractDecimals = _context.sent.toNumber();
                _context.next = 15;
                return _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].getContractProp(value, 'balanceOf', _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].checkBrowserCompatibility().selectedAddress);

              case 15:
                _context.t0 = _context.sent.toNumber();
                _context.t1 = Math.pow(10, contractDecimals);
                addressBalance = (_context.t0 / _context.t1).toString();
                _context.next = 20;
                return _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].getContractProp(value, 'allowance', _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].checkBrowserCompatibility().selectedAddress, xplAddress);

              case 20:
                _context.t2 = _context.sent;
                _context.t3 = Math.pow(10, contractDecimals);
                distributorContractAllowance = _context.t2 / _context.t3;
                // update state
                this.setState({
                  contractName: contractName,
                  contractSymbol: contractSymbol,
                  contractDecimals: contractDecimals,
                  addressBalance: addressBalance,
                  distributorContractAllowance: distributorContractAllowance,
                  contractInputCssClass: "is-success"
                });
                _context.next = 29;
                break;

              case 26:
                _context.prev = 26;
                _context.t4 = _context["catch"](3);
                // console.log("Invalid contract Address / Check network");
                this.emptyContractProps();

              case 29:
                _context.prev = 29;
                this.setState({
                  isProcessing: false
                });
                return _context.finish(29);

              case 32:
                _context.next = 35;
                break;

              case 34:
                this.emptyContractProps();

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 26, 29, 32]]);
      }));

      function handleContractAddress(_x) {
        return _handleContractAddress.apply(this, arguments);
      }

      return handleContractAddress;
    }()
  }, {
    key: "handleAmount",
    value: function handleAmount(amountValue) {
      var totalAmount;

      if (!this.state.isUnifiedAmount) {
        var amountsArray = amountValue.replace(/\s+/g, "").split(',');
        amountsArray = _utils_misc__WEBPACK_IMPORTED_MODULE_23___default.a.removeFalsey(amountsArray);
        var validateAmounts = !amountsArray.some(function (amt) {
          return !Number(amt);
        });

        if (validateAmounts && amountsArray.length) {
          var amountCount = amountsArray.length;
          totalAmount = amountCount + " (" + amountsArray.reduce(_utils_misc__WEBPACK_IMPORTED_MODULE_23___default.a.numberReducer) + ")";
          this.setState({
            totalAmount: totalAmount,
            tokenAmount: amountsArray,
            tokenAmountInputCssClass: "is-success"
          });
        } else {
          this.setState({
            tokenAmountInputCssClass: "is-danger"
          });
        }
      } else if (this.state.isUnifiedAmount) {
        var amounts = Number(amountValue);

        if (amounts) {
          totalAmount = "Unified";
          this.setState({
            totalAmount: totalAmount,
            tokenAmount: amounts,
            tokenAmountInputCssClass: "is-success"
          });
        } else {
          this.setState({
            tokenAmountInputCssClass: "is-danger"
          });
        }
      }
    }
  }, {
    key: "handleAddresses",
    value: function handleAddresses(addressesValue) {
      var totalAddresses,
          addressesArray = addressesValue.replace(/\s+/g, "").split(',');
      addressesArray = _utils_misc__WEBPACK_IMPORTED_MODULE_23___default.a.removeFalsey(addressesArray);
      addressesArray = _utils_misc__WEBPACK_IMPORTED_MODULE_23___default.a.removeSpecialChars(addressesArray); // let validAddresses = Web3ConnectionHandler.validateAddress(addressesArray);

      if (
      /*validAddresses*/
      addressesArray.length) {
        totalAddresses = addressesArray.length;
        this.setState({
          totalAddresses: totalAddresses,
          textAreaWithAddresses: addressesArray,
          textAreaWithAddressesInputCssClass: "is-success"
        });
      } else {
        this.setState({
          textAreaWithAddressesInputCssClass: "is-danger"
        });
      }
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var self = this; //handle addresses

      if (!(self.state.textAreaWithAddresses instanceof Array) || !(self.state.textAreaWithAddresses.length > 0)) {
        return window.alert("ETH Addresses must be comma separated and not empty.");
      } // handle amount


      var sumAmount;

      if (self.state.isUnifiedAmount) {
        if (!Number(this.state.tokenAmount)) {
          return window.alert("Invalid amount of token.");
        }

        sumAmount = this.state.tokenAmount * this.state.textAreaWithAddresses.length;
      } else {
        if (!(self.state.tokenAmount instanceof Array) || !(self.state.tokenAmount.length > 0)) {
          return window.alert("Amount is splitted and amount must be comma separated.");
        }

        if (self.state.tokenAmount.length != self.state.textAreaWithAddresses.length) {
          return window.alert("Amount is splitted and addresses count must be the same with amount count.");
        }

        sumAmount = self.state.tokenAmount.reduce(_utils_misc__WEBPACK_IMPORTED_MODULE_23___default.a.numberReducer);
      } //handle contract address


      var contractReady = self.state.contractAddress && self.state.contractDecimals !== "";
      var hasEnoughBalance = self.state.addressBalance >= sumAmount;

      if (!contractReady) {
        var message = "Contract address is invalid";
        return window.alert(message);
      } else if (!hasEnoughBalance) {
        var _message = "You do not have enough balance.";
        return window.alert(_message);
      } // window.alert("Contract is ready to be sent");


      self.handleDistribution();
    }
  }, {
    key: "handleDistribution",
    value: function handleDistribution() {
      var self = this;

      var init = function init() {
        if (self.state.isUnifiedAmount) {
          self.handleDistributionWithUnifiedAmount();
        } else {
          self.handleDistributionWithSplittedAmount();
        } // update transactionBatch


        var batches = [],
            length = Math.ceil(self.state.textAreaWithAddresses.length / self.state.transferPerBatch);

        for (var i = 0; i < length; i++) {
          var temp = {
            status: "pending",
            hash: "waiting for broadcast"
          };
          batches[i] = temp;
        }

        self.setState({
          transactionBatch: batches,
          showTransactionMonitor: true
        });
      };

      if (self.state.distributorContractAllowance < 1) {
        _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].approveSpender(self.state.contractAddress, self.state.addressBalance * Math.pow(10, self.state.contractDecimals)).then(function (txHash) {
          self.setState({
            isProcessing: true,
            transactionInProgress: true
          });
          return _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].getMinedTransactionReceipt(txHash);
        }).then(function (txReceipt) {
          if (txReceipt.status == "0x0") {
            //transaction failed!
            return window.alert("Approval transaction failed.");
          }

          self.setState({
            distributorContractAllowance: self.state.addressBalance
          });
          init();
        }).catch(function (err) {
          window.alert("Error occurred in approval.");
        }).finally(function () {
          self.setState({
            isProcessing: false,
            transactionInProgress: false
          });
        });
      } else {
        init();
      }
    }
  }, {
    key: "handleDistributionWithSplittedAmount",
    value: function handleDistributionWithSplittedAmount() {
      var iterator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.transferPerBatch;
      iterator = Number(iterator);
      size = Number(size);
      var self = this;
      var chunkAddresses = self.state.textAreaWithAddresses.slice(iterator * size, (iterator + 1) * size);
      var chunkAmount = self.state.tokenAmount.slice(iterator * size, (iterator + 1) * size);
      chunkAmount = chunkAmount.map(function (amt) {
        return amt * Math.pow(10, self.state.contractDecimals);
      });

      if (!chunkAddresses.length) {
        return window.alert("Distribution completed!");
      }

      self.setState({
        isProcessing: true,
        transactionInProgress: true
      });
      _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].distributeToken("distributeForeignTokenWithSplittedAmount", self.state.contractAddress, chunkAddresses, chunkAmount).then(function (txHash) {
        self.updateMonitor(iterator, {
          status: "processing",
          hash: txHash
        });
        return _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].getMinedTransactionReceipt(txHash);
      }).then(function (txReceipt) {
        if (txReceipt.status == "0x0") {
          //transaction failed!
          self.updateMonitor(iterator, {
            hash: txReceipt.transactionHash,
            onClick: self.restartDistribution
          });
          return window.alert("Transaction at index " + iterator + " failed.");
        }

        self.updateMonitor(iterator, {
          status: "success",
          hash: txReceipt.transactionHash
        }); //call the next transaction

        self.handleDistributionWithSplittedAmount(iterator + 1);
      }).catch(function (err) {
        self.updateMonitor(iterator, {
          hash: "txhash unknown",
          onClick: self.restartDistribution
        });
        window.alert("Error occurred at transaction index " + iterator);
      }).finally(function () {
        self.setState({
          isProcessing: false,
          transactionInProgress: false
        });
      });
    }
  }, {
    key: "handleDistributionWithUnifiedAmount",
    value: function handleDistributionWithUnifiedAmount() {
      var iterator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.transferPerBatch;
      iterator = Number(iterator);
      size = Number(size);
      var self = this;
      var chunkAddresses = self.state.textAreaWithAddresses.slice(iterator * size, (iterator + 1) * size);
      var amount = self.state.tokenAmount * Math.pow(10, self.state.contractDecimals);

      if (!chunkAddresses.length) {
        return window.alert("Distribution completed!");
      }

      self.setState({
        isProcessing: true,
        transactionInProgress: true
      });
      _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].distributeToken("distributeForeignTokenWithUnifiedAmount", self.state.contractAddress, chunkAddresses, amount).then(function (txHash) {
        self.updateMonitor(iterator, {
          status: "processing",
          hash: txHash
        });
        return _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].getMinedTransactionReceipt(txHash);
      }).then(function (txReceipt) {
        if (txReceipt.status == "0x0") {
          //transaction failed!
          self.updateMonitor(iterator, {
            hash: txReceipt.transactionHash,
            onClick: self.restartDistribution
          });
          return window.alert("Transaction at index " + iterator + " failed.");
        }

        self.updateMonitor(iterator, {
          status: "success",
          hash: txReceipt.transactionHash
        }); //call the next transaction

        self.handleDistributionWithUnifiedAmount(iterator + 1);
      }).catch(function (err) {
        self.updateMonitor(iterator, {
          hash: "txhash unknown",
          onClick: self.restartDistribution
        });
        window.alert("Error occurred at transaction index " + iterator);
        console.log(err);
      }).finally(function () {
        self.setState({
          isProcessing: false,
          transactionInProgress: false
        });
      });
    }
  }, {
    key: "updateMonitor",
    value: function updateMonitor(index, properties) {
      this.setState(function (state, props) {
        var newBatch = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.transactionBatch);

        newBatch[index] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, properties);
        return {
          transactionBatch: newBatch
        };
      });
    }
  }, {
    key: "restartDistribution",
    value: function restartDistribution(e) {
      var iterator = e.target.getAttribute("data-index");

      if (this.state.isUnifiedAmount) {
        this.handleDistributionWithUnifiedAmount(iterator);
      } else {
        this.handleDistributionWithSplittedAmount(iterator);
      }
    }
  }, {
    key: "emptyContractProps",
    value: function emptyContractProps() {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({
        contractInputCssClass: "is-danger"
      }, this.contractProps));
    }
  }, {
    key: "handleReset",
    value: function handleReset() {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({
        contractAddress: "",
        contractInputCssClass: "",
        tokenAmountInputCssClass: "",
        textAreaWithAddressesInputCssClass: ""
      }, this.newDistribution, this.contractProps));
    }
  }, {
    key: "formFields",
    value: function formFields() {
      return {
        contractAddress: {
          type: "text",
          name: "contractAddress",
          placeholder: "Contract Address",
          className: this.state.contractInputCssClass + " is-large",
          value: this.state.contractAddress,
          onBlur: this.handleBlur,
          onChange: this.handleChange
        },
        contractDecimals: {
          type: "text",
          name: "contractDecimals",
          placeholder: "Decimals",
          className: "is-medium",
          readOnly: true,
          value: this.state.contractDecimals
        },
        addressBalance: {
          type: "text",
          name: "addressBalance",
          placeholder: "Balance",
          className: "input is-medium",
          readOnly: true,
          value: this.state.addressBalance
        },
        distributorContractAllowance: {
          type: "text",
          name: "distributorContractAllowance",
          placeholder: "Allowance",
          className: "input is-medium",
          readOnly: true,
          value: this.state.distributorContractAllowance
        },
        amountController: [{
          type: "radio",
          name: "amountController",
          placeholder: "Unified amount",
          defaultChecked: true,
          onChange: this.toggleAmount
        }, {
          type: "radio",
          name: "amountController",
          placeholder: "Split amount",
          onChange: this.toggleAmount
        }],
        uploadFileInput: {
          name: "uploadFileInput",
          onChange: this.handleChange,
          label: "Import data (optional)",
          fileName: this.state.selectedFileName
        },
        tokenAmountInput: {
          type: "text",
          name: "tokenAmount",
          className: this.state.tokenAmountInputCssClass + " is-large",
          value: this.state.tokenAmount,
          placeholder: "Amount of token",
          onBlur: this.handleBlur,
          onChange: this.handleChange
        },
        tokenAmountTextArea: {
          name: "tokenAmount",
          className: this.state.tokenAmountInputCssClass,
          value: this.state.tokenAmount,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          placeholder: "Unlimited comma separated amount in order of addresses \n240, 50, 100, 10, 75, 13, 5",
          tokenAmountType: "textarea"
        },
        textAreaWithAddresses: {
          name: "textAreaWithAddresses",
          className: this.state.textAreaWithAddressesInputCssClass,
          value: this.state.textAreaWithAddresses,
          placeholder: "Unlimited comma separated addresses\n0x138e326c28114f65202b4ed82a1eecdf81451e09, 0xca353c48ab32b8baba846477d28254309be5e7c6",
          onBlur: this.handleBlur,
          onChange: this.handleChange
        },
        submitButton: {
          type: "submit",
          text: "Send Transaction",
          className: "button is-large is-link",
          disabled: this.state.transactionInProgress ? true : null
        },
        resetButton: {
          type: "button",
          text: "Reset",
          className: "button is-medium is-danger",
          onClick: this.handleReset
        },
        monitorButton: {
          type: "button",
          text: "Show monitor",
          className: "button is-warning is-small",
          onClick: this.toggleTransactionMonitor
        },
        transferPerBatch: {
          name: "transferPerBatch",
          value: this.state.transferPerBatch,
          onChange: this.handleChange,
          className: "is-small",
          options: [{
            value: "100"
          }, {
            value: "150"
          }, {
            value: "175"
          }, {
            value: "200"
          }, {
            value: "250"
          }, {
            value: "300"
          }]
        }
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (_utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].checkBrowserCompatibility()) {
        this.setState({
          isWeb3Browser: true
        });
        this.unlockBrowser();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.web3BrowserConnected && this.state.isWeb3Browser) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_layouts_Main__WEBPACK_IMPORTED_MODULE_13__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 594
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_SubHeader__WEBPACK_IMPORTED_MODULE_18__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 595
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("section", {
          className: "halfpage-height mb-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 596
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 597
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "columns",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 598
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "column is-8",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 599
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Contract__WEBPACK_IMPORTED_MODULE_16__["ConnectedContractProps"], {
          contractAddress: this.state.contractAddress,
          contractName: this.state.contractName,
          contractSymbol: this.state.contractSymbol,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 600
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 606
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "is-size-6 has-background-white border-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 607
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["Button"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().monitorButton, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 608
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 610
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 611
          },
          __self: this
        }, "Transfer per transaction"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 611
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["Select"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().transferPerBatch, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 612
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "columns",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 618
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("form", {
          className: "column is-8",
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 619
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["Input"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().contractAddress, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 620
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "columns",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 622
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 623
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["Input"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().contractDecimals, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 624
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 626
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["Input"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().addressBalance, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 627
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 629
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["Input"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().distributorContractAllowance, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 630
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["MultipleCheckBoxes"], {
          inputArray: this.formFields().amountController,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 634
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["FileInput"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().uploadFileInput, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 637
          },
          __self: this
        })), this.state.isUnifiedAmount && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["Input"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().tokenAmountInput, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 643
          },
          __self: this
        })), !this.state.isUnifiedAmount && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["TextArea"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().tokenAmountTextArea, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 647
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["TextArea"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().textAreaWithAddresses, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 652
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 656
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "control buttons",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 657
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["Button"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().submitButton, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 658
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["Button"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().resetButton, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 661
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 668
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(DistributionStat, {
          totalAmount: this.state.totalAmount,
          totalAddresses: this.state.totalAddresses,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 669
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 673
          },
          __self: this
        }), this.state.isProcessing && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_19__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 676
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 678
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Warning__WEBPACK_IMPORTED_MODULE_20__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 679
          },
          __self: this
        }))))), this.state.showTransactionMonitor && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_TransactionMonitor__WEBPACK_IMPORTED_MODULE_17__["TransactionMonitor"], {
          onClick: this.toggleTransactionMonitor,
          monitorArray: this.state.transactionBatch,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 686
          },
          __self: this
        }));
      } else if (this.state.isWeb3Browser) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_layouts_Main__WEBPACK_IMPORTED_MODULE_13__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 695
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_SubHeader__WEBPACK_IMPORTED_MODULE_18__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 696
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Web3Status__WEBPACK_IMPORTED_MODULE_15__["LockedWeb3Browser"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 697
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
          className: "button is-warning is-large",
          onClick: this.unlockBrowser,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 698
          },
          __self: this
        }, "Unlock Metamask")));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_layouts_Main__WEBPACK_IMPORTED_MODULE_13__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 709
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_SubHeader__WEBPACK_IMPORTED_MODULE_18__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 710
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Web3Status__WEBPACK_IMPORTED_MODULE_15__["NoWeb3Browser"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 711
          },
          __self: this
        }));
      }
    }
  }]);

  return TokenDistributor;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

function DistributionStat(props) {
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "is-size-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h3", {
    className: "is-size-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722
    },
    __self: this
  }, "Statistics"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723
    },
    __self: this
  }, "Amount count: ", props.totalAmount || 0, " ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724
    },
    __self: this
  }), "Address count: ", props.totalAddresses || 0));
}

/* harmony default export */ __webpack_exports__["default"] = (TokenDistributor);

/***/ })

})
//# sourceMappingURL=token-distributor.js.6b74c7b1d69d2b563049.hot-update.js.map