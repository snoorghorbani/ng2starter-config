"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetConfigsApiModel;
(function (GetConfigsApiModel) {
    class Request {
        constructor(initValue = {}) {
            Object.keys(initValue).forEach(key => this[key] = initValue[key]);
        }
        getRequestBody() {
            return {};
        }
    }
    GetConfigsApiModel.Request = Request;
    class Response {
        constructor() {
        }
    }
    GetConfigsApiModel.Response = Response;
})(GetConfigsApiModel = exports.GetConfigsApiModel || (exports.GetConfigsApiModel = {}));
//# sourceMappingURL=get-configs-api.model.js.map