"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Rx_1 = require("rxjs/Rx");
var models_1 = require("../models");
var store_1 = require("@ngrx/store");
var actions_1 = require("../actions");
var ConfigService = /** @class */ (function () {
    function ConfigService(http, store) {
        var _this = this;
        this.http = http;
        this.store = store;
        setTimeout(function () {
            _this.store.dispatch(new actions_1.GetConfigAction());
        }, 999);
    }
    ConfigService.prototype.getConfigs = function () {
        return this.http.get('http://localhost:3000/api/config')
            .map(function (response) { return response.Result; })
            .catch(function (err) {
            return Rx_1.Observable.throw(err);
        });
    };
    ConfigService.prototype.getConfigByName = function (name) {
        return this.http.get("http://localhost:3000/api/config/" + name)
            .map(function (response) { return response; })
            .catch(function (err) {
            return Rx_1.Observable.throw(err);
        });
    };
    ConfigService.prototype.editConfig = function (body) {
        var model = new models_1.EditConfigApiModel.Request(body);
        return this.http.put("http://localhost:3000/api/config/" + model.Name, model.getRequestBody(), { withCredentials: false })
            .map(function (response) { return response; })
            .catch(function (err) {
            return Rx_1.Observable.throw(err);
        });
    };
    ConfigService.prototype.getLayoutConfigs = function () {
        return this.http.get('http://localhost:3000/api/layout-config')
            .map(function (response) { return response; })
            .catch(function (err) {
            return Rx_1.Observable.throw(err);
        });
    };
    ConfigService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return [
        { type: http_1.HttpClient, },
        { type: store_1.Store, },
    ]; };
    return ConfigService;
}());
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map