"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../../services");
// import * as appReducer from 'app/reducers';
var ConfigModuleContainerComponent = /** @class */ (function () {
    function ConfigModuleContainerComponent(service) {
        this.service = service;
    }
    ConfigModuleContainerComponent.prototype.ngOnInit = function () {
    };
    ConfigModuleContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'config-module-container',
                    template: "<div fxLayoutAlign=\"\" fxflex=\"100\" fxLayout=\"column\">     <router-outlet></router-outlet> </div>"
                },] },
    ];
    /** @nocollapse */
    ConfigModuleContainerComponent.ctorParameters = function () { return [
        { type: services_1.ConfigService, },
    ]; };
    return ConfigModuleContainerComponent;
}());
exports.ConfigModuleContainerComponent = ConfigModuleContainerComponent;
//# sourceMappingURL=config-module-container.component.js.map