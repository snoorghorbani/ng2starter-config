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
                    template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\">   <mat-card class=\"config-box\" *ngFor=\"let config of (configs | async)\" [fxFlex]=\"30\">     <mat-card-header>       <mat-card-title>         <a [routerLink]=\"['edit' ,  config.Name]\">           <mat-icon aria-label=\"edit config\">edit</mat-icon>         </a>         {{config.Name}}       </mat-card-title>     </mat-card-header>     <mat-card-content>       <div [id]=\"'config_' + config.Name\"></div>     </mat-card-content>   </mat-card> </div>",
                    styles: [":host{     width: 100%; }  .config-box{     margin : 15px; }"]
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