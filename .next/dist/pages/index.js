'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _user = require('../backend/contractInstances/user');

var _user2 = _interopRequireDefault(_user);

var _web = require('../backend/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\hp\\Desktop\\SupCube\\pages\\index.js?entry';


var User = function (_React$Component) {
  (0, _inherits3.default)(User, _React$Component);

  function User() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = User.__proto__ || (0, _getPrototypeOf2.default)(User)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      Useradd: '',
      Userpass: '',
      errorMsg: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, hh, hk, g, pass, pr;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMsg: 'Creating...' });

                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _user2.default.methods.checkArray(_this.state.Useradd).call();

              case 8:
                hh = _context.sent;

                console.log(hh);
                _context.next = 12;
                return _user2.default.methods.index(_this.state.Useradd).call();

              case 12:
                hk = _context.sent;

                console.log(hk, _this.state.Useradd, _this.state.Userpass);
                _context.next = 16;
                return _user2.default.methods.sdet(0).call();

              case 16:
                g = _context.sent;

                console.log(g);
                _context.next = 20;
                return _user2.default.methods.userLogin(_this.state.Userpass, _this.state.Useradd).call();

              case 20:
                pass = _context.sent;

                console.log(pass);
                pr = pass[1];

                console.log(pr);
                if (pass[0] == "True") {
                  pr == "Producer" ? _routes.Router.pushRoute('/Producer/' + _this.state.Useradd) : pr == "Purchaser" ? _routes.Router.pushRoute('/Purchaser/' + _this.state.Useradd) : _routes.Router.pushRoute('/Provider/' + _this.state.Useradd);
                } else {
                  console.log("No");
                };
                _context.next = 31;
                break;

              case 28:
                _context.prev = 28;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMsg: _context.t0.message });

              case 31:
                if (_this.state.errorMsg === "Creating...") {
                  _this.setState({ errorMsg: "success", loading: true });
                } else _this.setState({ loading: false });

              case 32:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 28]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(User, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('h5', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, " "), _react2.default.createElement('h2', { style: { color: 'white', textAlign: "center" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Welcome to Supcube!'), _react2.default.createElement('h3', { style: { color: 'white', textAlign: "center" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'A blockchain solution for supply chain management!'), _react2.default.createElement(_semanticUiReact.Grid, { textAlign: 'center', style: { height: '70vh' }, verticalAlign: 'middle', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', color: 'teal', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'Log-in to your account'), _react2.default.createElement(_semanticUiReact.Form, { size: 'large', onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { stacked: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Input, { fluid: true,
        icon: 'user',
        iconPosition: 'left',
        placeholder: 'Ethereum address',
        value: this.state.Useradd,
        onChange: function onChange(event) {
          return _this3.setState({ Useradd: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Input, {
        fluid: true,
        icon: 'lock',
        iconPosition: 'left',
        placeholder: 'Password',
        type: 'password',
        value: this.state.Userpass,
        onChange: function onChange(event) {
          return _this3.setState({ Userpass: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), this.state.errorMsg === "success" ? _react2.default.createElement(_semanticUiReact.Message, { positive: true, header: 'Hi!', content: 'We are logging you in!', __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }) : this.state.errorMsg === 'Creating...' ? _react2.default.createElement(_semanticUiReact.Message, { positive: true, header: 'Hi!', content: 'Logging in...!', __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }) : _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Incorrect address or password.'
        //content={this.state.errorMsg}
        , __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', fluid: true, size: 'large', loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, 'Login'))), _react2.default.createElement(_semanticUiReact.Message, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, 'New to us?', _react2.default.createElement(_routes.Link, { route: '/signup', __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, 'Sign Up'))))));
    }
  }]);

  return User;
}(_react2.default.Component);

exports.default = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIkZvcm0iLCJHcmlkIiwiSGVhZGVyIiwiSW1hZ2UiLCJNZXNzYWdlIiwiU2VnbWVudCIsIkxheW91dCIsInVzZXIiLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIlVzZXIiLCJzdGF0ZSIsIlVzZXJhZGQiLCJVc2VycGFzcyIsImVycm9yTXNnIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjaGVja0FycmF5IiwiY2FsbCIsImhoIiwiY29uc29sZSIsImxvZyIsImluZGV4IiwiaGsiLCJzZGV0IiwiZyIsInVzZXJMb2dpbiIsInBhc3MiLCJwciIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJjb2xvciIsInRleHRBbGlnbiIsImhlaWdodCIsIm1heFdpZHRoIiwidGFyZ2V0IiwidmFsdWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFRLEFBQU0sQUFBTSxBQUFRLEFBQU8sQUFBUzs7QUFDckQsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFZLEFBQ3JCLEFBQVMsQUFBYzs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7Ozs7d01BRUosQTtlQUFRLEFBQ0ksQUFDVjtnQkFGTSxBQUVJLEFBQ1Y7Z0JBSE0sQUFHSSxBQUNWO2VBSk0sQUFJRyxBO0FBSkgsQUFDTixhQU1GLEE7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO3VDQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUVQO3NCQUFBLEFBQU0sQUFDTjtzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsTUFBTSxVQUh2QixBQUdQ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QUE7U0FERixBQUNFLEFBR0EsMkNBQUEsQUFBQyx1Q0FBSyxNQUFOLEFBQVcsU0FBUSxVQUFZLEtBQS9CLEFBQW9DO29CQUFwQztzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQywwQ0FBUSxTQUFUO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt1Q0FDRSxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQ0M7Y0FERCxBQUNNLEFBQ0w7c0JBRkQsQUFFYyxBQUNiO3FCQUhELEFBR2EsQUFDWjtlQUFRLEtBQUEsQUFBSyxNQUpkLEFBSW9CLEFBQ25CO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFVLEVBQUUsU0FBUyxNQUFBLEFBQU0sT0FBekMsQUFBUyxBQUFlLEFBQXdCO0FBTDNEO29CQUFBO3NCQURGLEFBQ0UsQUFNQTtBQU5BO3dDQU1BLEFBQUMsc0JBQUQsQUFBTTtlQUFOLEFBRUU7Y0FGRixBQUVPLEFBQ0w7c0JBSEYsQUFHZSxBQUNiO3FCQUpGLEFBSWMsQUFDWjtjQUxGLEFBS08sQUFDTDtlQUFRLEtBQUEsQUFBSyxNQU5mLEFBTXFCLEFBQ25CO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFVLEVBQUUsVUFBVSxNQUFBLEFBQU0sT0FBMUMsQUFBUyxBQUFlLEFBQXlCO0FBUDdEOztvQkFBQTtzQkFQRixBQU9FLEFBU0M7QUFURDtBQUNFLGVBUUQsQUFBSyxNQUFMLEFBQVcsYUFBWCxBQUFzQiw0QkFBWSxBQUFDLDBDQUFRLFVBQVQsTUFBa0IsUUFBbEIsQUFBeUIsT0FBTSxTQUEvQixBQUF1QztvQkFBdkM7c0JBQWxDLEFBQWtDO0FBQUE7T0FBQSxTQUM1QixBQUFLLE1BQUwsQUFBVyxhQUFaLEFBQXVCLGdDQUFpQixBQUFDLDBDQUFRLFVBQVQsTUFBa0IsUUFBbEIsQUFBeUIsT0FBTSxTQUEvQixBQUF1QztvQkFBdkM7c0JBQXhDLEFBQXdDO0FBQUE7T0FBQSxDQUF2QyxtQkFDRCxBQUFDO2VBQUQsQUFFQTtnQkFBTyxBQUNQO0FBSEE7QUFDQTtvQkFEQTtzQkFsQlIsQUFrQlEsQUFNTjtBQU5NO09BQUEsbUJBTU4sQUFBQyx5Q0FBTyxPQUFSLEFBQWMsUUFBTyxPQUFyQixNQUEyQixNQUEzQixBQUFnQyxTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQXRELEFBQTREO29CQUE1RDtzQkFBQTtBQUFBO1NBN0JOLEFBSUUsQUFDRSxBQXdCRSxBQUtKLDRCQUFBLEFBQUM7O29CQUFEO3NCQUFBO0FBQUE7QUFBQSxTQUVFLDhCQUFBLEFBQUMsOEJBQUssT0FBTjtvQkFBQTtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBN0NKLEFBQ0YsQUFNQSxBQUNFLEFBa0NFLEFBRUUsQUFDQSxBQVVQOzs7OztFQTFHa0IsZ0JBQU0sQSxBQTRHekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvaHAvRGVza3RvcC9TdXBDdWJlIn0=