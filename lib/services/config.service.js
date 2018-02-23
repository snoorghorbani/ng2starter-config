"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Rx_1 = require("rxjs/Rx");
var models_1 = require("../models");
var store_1 = require("@ngrx/store");
var actions_1 = require("../actions");
var module_configuration_1 = require("./module-configuration");
var ConfigService = /** @class */ (function () {
    function ConfigService(http, store, configurationService) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        setTimeout(function () {
            _this.store.dispatch(new actions_1.GetConfigAction());
        }, 999);
    }
    ConfigService.prototype.getConfigs = function () {
        var _this = this;
        return (this.http
            .get(this.configurationService.config.prod_api_host + "/api/config")
            .take(1)
            .map(function (response) {
            debugger;
            if (_this.configurationService.config.env.production) {
                var dev_api_host = _this.configurationService.config.dev_api_host;
                var prod_api_host = _this.configurationService.config.prod_api_host;
                return JSON.parse(JSON.stringify(response).replace(new RegExp(dev_api_host, "g"), prod_api_host)).Result;
            }
            else {
                return response.Result;
            }
        })
            .catch(function (err) {
            return Rx_1.Observable.throw(err);
        }));
    };
    ConfigService.prototype.getConfigByName = function (name) {
        return this.http.get("http://localhost:3000/api/config/" + name).map(function (response) { return response; }).catch(function (err) {
            return Rx_1.Observable.throw(err);
        });
    };
    ConfigService.prototype.editConfig = function (body) {
        var model = new models_1.EditConfigApiModel.Request(body);
        return this.http
            .put("http://localhost:3000/api/config/" + model.Name, model.getRequestBody(), { withCredentials: false })
            .map(function (response) { return response; })
            .catch(function (err) {
            return Rx_1.Observable.throw(err);
        });
    };
    ConfigService.prototype.getLayoutConfigs = function () {
        return this.http
            .get("http://localhost:3000/api/layout-config")
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
        { type: module_configuration_1.ConfigurationService, },
    ]; };
    return ConfigService;
}());
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map