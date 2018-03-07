"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var models_1 = require("../../models");
var services_1 = require("../../services");
var ConfigEditComponent = /** @class */ (function () {
    function ConfigEditComponent(configService, formBuilder, route) {
        var _this = this;
        this.configService = configService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.formGroup = models_1.EditConfigApiModel.Request.formGroup;
        this.route.params.subscribe(function (params) {
            var configName = params["name"];
            _this.configService.getConfigByName(configName).subscribe(function (data) {
                _this.partialConfigModel = {
                    type: data.Result.Name,
                    inputs: {
                        configFormGroup: _this.formGroup.controls.Config
                    }
                };
                _this.formGroup.patchValue({
                    _id: data.Result._id,
                    Name: data.Result.Name
                });
                Object.keys(data.Result.Config).forEach(function (key) {
                    _this.addControl(_this.formGroup.controls.Config, key, data.Result.Config[key]);
                });
            });
        });
    }
    ConfigEditComponent.prototype.addControl = function (formGroup, key, value) {
        if (value instanceof Array) {
            formGroup.addControl(key, this.formBuilder.array(value));
        }
        else if (value instanceof Object) {
            formGroup.addControl(key, this.formBuilder.group(value));
        }
        else {
            formGroup.addControl(key, new forms_1.FormControl(value));
        }
    };
    ConfigEditComponent.prototype.ngOnInit = function () { };
    ConfigEditComponent.prototype.configChanged = function (event) {
        debugger;
        this.formGroup.controls.Config.patchValue(event);
    };
    ConfigEditComponent.prototype.edit = function () {
        debugger;
        if (!this.formGroup.valid)
            return;
        this.configService.editConfig(this.formGroup.value).subscribe(function (config) {
            debugger;
        });
    };
    ConfigEditComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "config-config-edit",
                    template: "<div >   <form [formGroup]=\"formGroup\" (ngSubmit)=\"edit()\" fxLayout=\"column\">     <mat-card>       <mat-card-content>           <dynamic-config-component-selector (configChanged)=\"configChanged($event)\" [data]=\"partialConfigModel\"></dynamic-config-component-selector>       </mat-card-content>       <mat-card-actions fxLayoutAlign=\"center center\">         <button fxFlex=\"nogrow\" type=\"submit\" mat-raised-button color=\"primary\" (click)=\"edit\">\u0648\u06CC\u0631\u0627\u06CC\u0634</button>         <button fxFlex=\"nogrow\" type=\"button\" routerLink=\"/configs\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button>       </mat-card-actions>     </mat-card>   </form> </div>"
                },] },
    ];
    /** @nocollapse */
    ConfigEditComponent.ctorParameters = function () { return [
        { type: services_1.ConfigService, },
        { type: forms_1.FormBuilder, },
        { type: router_1.ActivatedRoute, },
    ]; };
    return ConfigEditComponent;
}());
exports.ConfigEditComponent = ConfigEditComponent;
//# sourceMappingURL=config-edit.component.js.map