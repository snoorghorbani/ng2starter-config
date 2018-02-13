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
var core_1 = require("@angular/core");
var services_1 = require("../../services");
var store_1 = require("@ngrx/store");
var reducers_1 = require("../../reducers");
var ConfigsComponent = /** @class */ (function () {
    function ConfigsComponent(configService, store) {
        this.configService = configService;
        this.store = store;
        this.configs = this.store.select(reducers_1.getConfigs);
    }
    ConfigsComponent = __decorate([
        core_1.Component({
            selector: 'configs',
            templateUrl: './configs.component.html',
            styleUrls: ['./configs.component.scss']
        }),
        __metadata("design:paramtypes", [services_1.ConfigService,
            store_1.Store])
    ], ConfigsComponent);
    return ConfigsComponent;
}());
exports.ConfigsComponent = ConfigsComponent;
//# sourceMappingURL=configs.component.js.map