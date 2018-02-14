"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ConfigAppConfigComponent = /** @class */ (function () {
    function ConfigAppConfigComponent(injector) {
        this.injector = injector;
        this.formGroup = new forms_1.FormGroup({ AppTitle: new forms_1.FormControl('', [forms_1.Validators.required]) });
        this.configChanged = new core_1.EventEmitter();
        this.configFormGroup = this.injector.get('configFormGroup');
    }
    Object.defineProperty(ConfigAppConfigComponent.prototype, "configFormGroup", {
        set: function (configFormGroup) {
            var _this = this;
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe(function (data) {
                _this.formGroup.patchValue(data);
            });
        },
        enumerable: true,
        configurable: true
    });
    ConfigAppConfigComponent.decorators = [
        { type: core_1.Component, args: [{
                    moduleId: module.id,
                    selector: 'config-app-config',
                    template: "<div [formGroup]=\"formGroup\">     <mat-form-field>         <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"\u0646\u0627\u0645 \u067E\u0631\u0648\u0698\u0647\" formControlName=\"AppTitle\">     </mat-form-field> </div>"
                },] },
    ];
    /** @nocollapse */
    ConfigAppConfigComponent.ctorParameters = function () { return [
        { type: core_1.Injector, },
    ]; };
    ConfigAppConfigComponent.propDecorators = {
        "configFormGroup": [{ type: core_1.Input },],
        "configChanged": [{ type: core_1.Output },],
    };
    return ConfigAppConfigComponent;
}());
exports.ConfigAppConfigComponent = ConfigAppConfigComponent;
//# sourceMappingURL=app-config.component.js.map