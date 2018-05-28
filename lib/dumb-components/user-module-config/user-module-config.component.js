"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UserModuleConfigComponent = /** @class */ (function () {
    function UserModuleConfigComponent(injector) {
        this.injector = injector;
        this.formGroup = new forms_1.FormGroup({
            endpoints: new forms_1.FormGroup({
                changePassword: new forms_1.FormControl("", [forms_1.Validators.required]),
                editProfile: new forms_1.FormControl("", [forms_1.Validators.required]),
                getUserInfo: new forms_1.FormControl("", [forms_1.Validators.required]),
                profileInformation: new forms_1.FormControl("", [forms_1.Validators.required])
            }),
            forms: new forms_1.FormGroup({
                profile_edit: new forms_1.FormControl("", [forms_1.Validators.required])
            }),
            dashboardLinks: new forms_1.FormArray([])
        });
        this.configChanged = new core_1.EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    Object.defineProperty(UserModuleConfigComponent.prototype, "configFormGroup", {
        get: function () {
            return this._configFormGroup;
        },
        set: function (configFormGroup) {
            var _this = this;
            this._configFormGroup = configFormGroup;
            configFormGroup.controls.dashboardLinks.controls.forEach(function (control) {
                _this.formGroup.controls.dashboardLinks.push(new forms_1.FormGroup({
                    route: new forms_1.FormControl("", [forms_1.Validators.required]),
                    icon: new forms_1.FormControl("", [forms_1.Validators.required]),
                    title: new forms_1.FormControl("", [forms_1.Validators.required])
                }));
            });
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe(function (data) {
                _this.formGroup.patchValue(data);
            });
        },
        enumerable: true,
        configurable: true
    });
    UserModuleConfigComponent.prototype.addMenu = function () {
        var menuItem = new forms_1.FormGroup({
            route: new forms_1.FormControl("", [forms_1.Validators.required]),
            icon: new forms_1.FormControl("", [forms_1.Validators.required]),
            title: new forms_1.FormControl("", [forms_1.Validators.required])
        });
        this.formGroup.get("dashboardLinks").push(menuItem);
        this.configFormGroup.get("dashboardLinks").push(menuItem);
    };
    UserModuleConfigComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "config-user-module-config",
                    template: "<h2>Endpoints</h2> <div [formGroup]=\"formGroup.get('endpoints')\" fxLayout=\"column\">         <mat-form-field>             <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"change password\" formControlName=\"changePassword\">         </mat-form-field>         <mat-form-field>             <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"edit profile\" formControlName=\"editProfile\">         </mat-form-field>         <mat-form-field>             <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"get user info\" formControlName=\"getUserInfo\">         </mat-form-field>         <mat-form-field>             <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"Profile Information Endpoint\" formControlName=\"profileInformation\">         </mat-form-field> </div> <h2>Forms</h2> <div [formGroup]=\"formGroup.get('forms')\" fxLayout=\"column\">     <mat-form-field>         <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"profile edit\" formControlName=\"profile_edit\">     </mat-form-field>             <!-- <ngs-form-selector (select)=\"setFormId($event,'signIn')\"></ngs-form-selector> --> </div>   <h2 fxFlex=\"100\">     Dashobard Links     <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">         <mat-icon aria-label=\"icon-button icon\">add</mat-icon>     </button> </h2> <div fxFlex=\"100\" *ngFor=\"let item of $any(formGroup.get('dashboardLinks')).controls\">     <div [formGroup]=\"item\">         <mat-form-field>             <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"route\" formControlName=\"route\">         </mat-form-field>         <mat-form-field>             <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"icon\" formControlName=\"icon\">         </mat-form-field>         <mat-form-field>             <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"title\" formControlName=\"title\">         </mat-form-field>     </div> </div>"
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