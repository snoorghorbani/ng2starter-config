"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AuthenticationModuleConfigComponent = /** @class */ (function () {
    function AuthenticationModuleConfigComponent(injector) {
        this.injector = injector;
        this.formGroup = new forms_1.FormGroup({
            endpoints: new forms_1.FormGroup({
                signIn: new forms_1.FormControl("", [forms_1.Validators.required]),
                signOut: new forms_1.FormControl("", [forms_1.Validators.required]),
                userInformation: new forms_1.FormControl("", [forms_1.Validators.required])
            }),
            forms: new forms_1.FormGroup({
                signIn: new forms_1.FormControl("", [forms_1.Validators.required])
            })
        });
        this.configChanged = new core_1.EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    Object.defineProperty(AuthenticationModuleConfigComponent.prototype, "configFormGroup", {
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
    AuthenticationModuleConfigComponent.prototype.setFormId = function (formId, formName) {
        debugger;
        this.formGroup.patchValue((_a = {}, _a[formName] = formId, _a));
        var _a;
    };
    AuthenticationModuleConfigComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "config-authentication-module-config",
                    template: "<h2>Endpoints</h2> <div [formGroup]=\"formGroup.controls.endpoints\" fxLayout=\"column\">     <mat-form-field>         <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"sign in\" formControlName=\"signIn\">     </mat-form-field>     <mat-form-field>         <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"sign out\" formControlName=\"signOut\">     </mat-form-field>     <mat-form-field>         <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"user information\" formControlName=\"userInformation\">     </mat-form-field> </div> <h2>Forms</h2> <div [formGroup]=\"formGroup.controls.forms\" fxLayout=\"column\">     <mat-form-field>         <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"SignIn Forms\" formControlName=\"signIn\">     </mat-form-field>             <!-- <ngs-form-selector (select)=\"setFormId($event,'signIn')\"></ngs-form-selector> --> </div>"
                },] },
    ];
    /** @nocollapse */
    AuthenticationModuleConfigComponent.ctorParameters = function () { return [
        { type: core_1.Injector, },
    ]; };
    AuthenticationModuleConfigComponent.propDecorators = {
        "configFormGroup": [{ type: core_1.Input },],
        "configChanged": [{ type: core_1.Output },],
    };
    return AuthenticationModuleConfigComponent;
}());
exports.AuthenticationModuleConfigComponent = AuthenticationModuleConfigComponent;
//# sourceMappingURL=authentication-module-config.component.js.map