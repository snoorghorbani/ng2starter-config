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
            menuItems: new forms_1.FormArray([])
        });
        this.configChanged = new core_1.EventEmitter();
        this.roleItems = ["Admin", "User"];
        this.sideNavModes = ["over", "push", "side"];
        this.layoutModes = ["with-margin", "without-margin", "default"];
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    Object.defineProperty(LayoutModuleConfigComponent.prototype, "configFormGroup", {
        get: function () {
            return this._configFormGroup;
        },
        set: function (configFormGroup) {
            var _this = this;
            this._configFormGroup = configFormGroup;
            configFormGroup.controls.menuItems.controls.forEach(function (control) {
                _this.formGroup.controls.menuItems.push(new forms_1.FormGroup({
                    route: new forms_1.FormControl("", [forms_1.Validators.required]),
                    icon: new forms_1.FormControl("", [forms_1.Validators.required]),
                    // roles: new FormArray(control.value.roles.map((i) => new FormControl("Admin"))),
                    roles: new forms_1.FormControl(),
                    title: new forms_1.FormControl("", [forms_1.Validators.required])
                }));
            });
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe(function (data) { return _this.formGroup.patchValue(data); });
        },
        enumerable: true,
        configurable: true
    });
    LayoutModuleConfigComponent.prototype.addMenu = function () {
        var menuItem = new forms_1.FormGroup({
            route: new forms_1.FormControl("", [forms_1.Validators.required]),
            icon: new forms_1.FormControl("", [forms_1.Validators.required]),
            roles: new forms_1.FormControl(),
            title: new forms_1.FormControl("", [forms_1.Validators.required])
        });
        this.formGroup.get("menuItems").push(menuItem);
        this.configFormGroup.get("menuItems").push(menuItem);
    };
    LayoutModuleConfigComponent.decorators = [
        { type: core_1.Component, args: [{
                    template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\">     <div fxFlex=\"100\" fxFlexLayout=\"row\">         <div [formGroup]=\"formGroup\">             <mat-form-field>                 <mat-select (change)=\"configChanged.emit(formGroup.value)\" placeholder=\"layout mode\" formControlName=\"layoutMode\" >                     <mat-option *ngFor=\"let item of layoutModes\" [value]=\"item\">{{item}}</mat-option>                 </mat-select>              </mat-form-field>             <mat-slide-toggle  (change)=\"configChanged.emit(formGroup.value)\"  formControlName=\"showLeftNavBar\">show left navbar</mat-slide-toggle>             <mat-form-field>                 <mat-select (change)=\"configChanged.emit(formGroup.value)\" placeholder=\"main side nav mode\" formControlName=\"mainSideNavMode\" >                     <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>                 </mat-select>              </mat-form-field>             <mat-slide-toggle  (change)=\"configChanged.emit(formGroup.value)\"  formControlName=\"showMainSidenav\">show main side nav</mat-slide-toggle>             <mat-slide-toggle  (change)=\"configChanged.emit(formGroup.value)\"  formControlName=\"stickyLeftNavBar\">sticky left navbar</mat-slide-toggle>             <mat-slide-toggle  (change)=\"configChanged.emit(formGroup.value)\"  formControlName=\"showSecondSideNav\">show second side nav</mat-slide-toggle>             <mat-form-field>                 <mat-select (change)=\"configChanged.emit(formGroup.value)\" placeholder=\"second side nav mode\" formControlName=\"secondSideNavMode\" >                     <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>                 </mat-select>              </mat-form-field>         </div>     </div>      <h2 fxFlex=\"100\">         Menu Items         <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">             <mat-icon aria-label=\"icon-button icon\">add</mat-icon>         </button>     </h2>     <div fxFlex=\"100\" *ngFor=\"let item of formGroup.controls.menuItems.controls\">         <div [formGroup]=\"item\">             <mat-form-field>                 <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"route\" formControlName=\"route\">             </mat-form-field>             <mat-form-field>                 <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"icon\" formControlName=\"icon\">             </mat-form-field>             <mat-form-field>                 <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"title\" formControlName=\"title\">             </mat-form-field>             <mat-form-field>                  <mat-select (change)=\"configChanged.emit(formGroup.value)\" placeholder=\"roles\" formControlName=\"roles\" multiple>                     <mat-option *ngFor=\"let role of roleItems\" [value]=\"role\">{{role}}</mat-option>                 </mat-select>              </mat-form-field>         </div>     </div> </div>"
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