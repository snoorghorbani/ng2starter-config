"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LayoutModuleConfigComponent = /** @class */ (function () {
    function LayoutModuleConfigComponent(injector) {
        this.injector = injector;
        this.formGroup = new forms_1.FormGroup({
            layoutMode: new forms_1.FormControl("", [forms_1.Validators.required]),
            showLeftNavBar: new forms_1.FormControl("", [forms_1.Validators.required]),
            mainSideNavMode: new forms_1.FormControl("", [forms_1.Validators.required]),
            showMainSidenav: new forms_1.FormControl("", [forms_1.Validators.required]),
            stickyLeftNavBar: new forms_1.FormControl("", [forms_1.Validators.required]),
            showSecondSideNav: new forms_1.FormControl("", [forms_1.Validators.required]),
            secondSideNavMode: new forms_1.FormControl("", [forms_1.Validators.required]),
            mainSideNavItems: new forms_1.FormArray([])
        });
        this.configChanged = new core_1.EventEmitter();
        this.roleItems = ["Admin", "User"];
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    Object.defineProperty(LayoutModuleConfigComponent.prototype, "configFormGroup", {
        set: function (configFormGroup) {
            var _this = this;
            configFormGroup.controls.mainSideNavItems.controls.forEach(function (control) {
                debugger;
                _this.formGroup.controls.mainSideNavItems.push(new forms_1.FormGroup({
                    route: new forms_1.FormControl("", [forms_1.Validators.required]),
                    icon: new forms_1.FormControl("", [forms_1.Validators.required]),
                    // roles: new FormArray(control.value.roles.map((i) => new FormControl("Admin"))),
                    roles: new forms_1.FormArray([new forms_1.FormControl("Admin")]),
                    title: new forms_1.FormControl("", [forms_1.Validators.required])
                }));
            });
            debugger;
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe(function (data) {
                _this.formGroup.patchValue(data);
            });
        },
        enumerable: true,
        configurable: true
    });
    LayoutModuleConfigComponent.decorators = [
        { type: core_1.Component, args: [{
                    template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\"> <mat-card [fxFlex]=\"30\">         <mat-card-content fxFlexLayout=\"row\"> <div [formGroup]=\"formGroup\">     <mat-form-field>         <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"layout mode\" formControlName=\"layoutMode\">     </mat-form-field>     <mat-form-field>         <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"show left navbar\" formControlName=\"showLeftNavBar\">     </mat-form-field>     <mat-form-field>         <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"main side nav mode\" formControlName=\"mainSideNavMode\">     </mat-form-field>     <mat-form-field>         <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"show main side nav\" formControlName=\"showMainSidenav\">     </mat-form-field>     <mat-form-field>         <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"sticky left navbar\" formControlName=\"stickyLeftNavBar\">     </mat-form-field>     <mat-form-field>         <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"show second side nav\" formControlName=\"showSecondSideNav\">     </mat-form-field>     <mat-form-field>         <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"second side nav mode\" formControlName=\"secondSideNavMode\">     </mat-form-field> </div> </mat-card-content> </mat-card> <mat-card *ngFor=\"let item of formGroup.get('mainSideNavItems').controls\" [fxFlex]=\"30\">         <mat-card-content fxFlexLayout=\"row\">                 <div [formGroup]=\"item\">                         <mat-form-field>                             <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"route\" formControlName=\"route\">                         </mat-form-field>                         <mat-form-field>                             <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"icon\" formControlName=\"icon\">                         </mat-form-field>                         <mat-form-field>                         <mat-select placeholder=\"roles\" formControlName=\"roles\" multiple>                             <mat-option *ngFor=\"let role of roleItems\" [value]=\"role\">{{role}}</mat-option>                         </mat-select>                     </mat-form-field>                         <mat-form-field>                             <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"title\" formControlName=\"title\">                         </mat-form-field>                     </div>         </mat-card-content>       </mat-card>     </div>"
                },] },
    ];
    /** @nocollapse */
    LayoutModuleConfigComponent.ctorParameters = function () { return [
        { type: core_1.Injector, },
    ]; };
    LayoutModuleConfigComponent.propDecorators = {
        "configFormGroup": [{ type: core_1.Input },],
        "configChanged": [{ type: core_1.Output },],
    };
    return LayoutModuleConfigComponent;
}());
exports.LayoutModuleConfigComponent = LayoutModuleConfigComponent;
//# sourceMappingURL=layout-module-config.component.js.map