"use strict";
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
    ConfigsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'configs',
                    templateUrl: './configs.component.html',
                    styleUrls: ['./configs.component.scss']
                },] },
    ];
    /** @nocollapse */
    ConfigsComponent.ctorParameters = function () { return [
        { type: services_1.ConfigService, },
        { type: store_1.Store, },
    ]; };
    return ConfigsComponent;
}());
exports.ConfigsComponent = ConfigsComponent;
//# sourceMappingURL=configs.component.js.map