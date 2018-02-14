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
                    templateUrl: "./layout-module-config.component.html"
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