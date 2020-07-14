'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('../web3');

var _web2 = _interopRequireDefault(_web);

var _User = require('../build/User.json');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(_User2.default.abi, '0xeD2e921815ea4a29b0607569Bcc880f428019606');
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2tlbmRcXGNvbnRyYWN0SW5zdGFuY2VzXFx1c2VyLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJVc2VyIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsImFiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7Ozs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2IsZUFBSyxBQURRLEtBRWIsQUFGYSxBQUFqQixBQUlBO2tCQUFlLEFBQWYiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ocC9EZXNrdG9wL1N1cEN1YmUifQ==