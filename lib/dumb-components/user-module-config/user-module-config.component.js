"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UserModuleConfigComponent = /** @class */ (function () {
    function UserModuleConfigComponent(injector) {
        this.injector = injector;
        this.formGroup = new forms_1.FormGroup({
            changePassword: new forms_1.FormControl("", [forms_1.Validators.required]),
            editProfile: new forms_1.FormControl("", [forms_1.Validators.required]),
            getUserInfo: new forms_1.FormControl("", [forms_1.Validators.required]),
            profileInformation: new forms_1.FormControl("", [forms_1.Validators.required])
        });
        this.configChanged = new core_1.EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    Object.defineProperty(UserModuleConfigComponent.prototype, "configFormGroup", {
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
    UserModuleConfigComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "config-user-module-config",
                    template: "<div [formGroup]=\"formGroup\">         <mat-form-field>             <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"change password\" formControlName=\"changePassword\">         </mat-form-field>         <mat-form-field>             <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"edit profile\" formControlName=\"editProfile\">         </mat-form-field>         <mat-form-field>             <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"get user info\" formControlName=\"getUserInfo\">         </mat-form-field>         <mat-form-field>             <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"Profile Information Endpoint\" formControlName=\"profileInformation\">         </mat-form-field> </div>"
                },] },
    ];
    /** @nocollapse */
    UserModuleConfigComponent.ctorParameters = function () { return [
        { type: core_1.Injector, },
    ]; };
    UserModuleConfigComponent.propDecorators = {
        "configFormGroup": [{ type: core_1.Input },],
        "configChanged": [{ type: core_1.Output },],
    };
    return UserModuleConfigComponent;
}());
exports.UserModuleConfigComponent = UserModuleConfigComponent;
//# sourceMappingURL=user-module-config.component.js.map