"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const Rx_1 = require("rxjs/Rx");
const models_1 = require("../models");
const store_1 = require("@ngrx/store");
const actions_1 = require("../actions");
let ConfigService = class ConfigService {
    constructor(http, store) {
        this.http = http;
        this.store = store;
        setTimeout(() => {
            this.store.dispatch(new actions_1.GetConfigAction());
        }, 999);
    }
    getConfigs() {
        return this.http.get('http://localhost:3000/api/config')
            .map((response) => response.Result)
            .catch(err => {
            return Rx_1.Observable.throw(err);
        });
    }
    getConfigByName(name) {
        return this.http.get(`http://localhost:3000/api/config/${name}`)
            .map(response => response)
            .catch(err => {
            return Rx_1.Observable.throw(err);
        });
    }
    editConfig(body) {
        var model = new models_1.EditConfigApiModel.Request(body);
        return this.http.put(`http://localhost:3000/api/config/${model.Name}`, model.getRequestBody(), { withCredentials: false })
            .map(response => response)
            .catch(err => {
            return Rx_1.Observable.throw(err);
        });
    }
    getLayoutConfigs() {
        return this.http.get('http://localhost:3000/api/layout-config')
            .map((response) => response)
            .catch(err => {
            return Rx_1.Observable.throw(err);
        });
    }
};
ConfigService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient,
        store_1.Store])
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map