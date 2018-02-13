"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetConfigsApiModel;
(function (GetConfigsApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = {}; }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return _this[key] = initValue[key]; });
        }
        Request.prototype.getRequestBody = function () {
            return {};
        };
        return Request;
    }());
    GetConfigsApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    GetConfigsApiModel.Response = Response;
})(GetConfigsApiModel = exports.GetConfigsApiModel || (exports.GetConfigsApiModel = {}));
//# sourceMappingURL=get-configs-api.model.js.map