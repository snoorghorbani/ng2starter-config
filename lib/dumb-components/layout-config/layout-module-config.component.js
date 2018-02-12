"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let LayoutModuleConfigComponent = class LayoutModuleConfigComponent {
    constructor(injector) {
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
    set configFormGroup(configFormGroup) {
        configFormGroup.controls.mainSideNavItems.controls.forEach((control) => {
            debugger;
            this.formGroup.controls.mainSideNavItems.push(new forms_1.FormGroup({
                route: new forms_1.FormControl("", [forms_1.Validators.required]),
                icon: new forms_1.FormControl("", [forms_1.Validators.required]),
                // roles: new FormArray(control.value.roles.map((i) => new FormControl("Admin"))),
                roles: new forms_1.FormArray([new forms_1.FormControl("Admin")]),
                title: new forms_1.FormControl("", [forms_1.Validators.required])
            }));
        });
        debugger;
        this.formGroup.patchValue(configFormGroup.value);
        configFormGroup.valueChanges.subscribe((data) => {
            this.formGroup.patchValue(data);
        });
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormGroup),
    __metadata("design:paramtypes", [forms_1.FormGroup])
], LayoutModuleConfigComponent.prototype, "configFormGroup", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LayoutModuleConfigComponent.prototype, "configChanged", void 0);
LayoutModuleConfigComponent = __decorate([
    core_1.Component({
        templateUrl: "./layout-module-config.component.html"
    }),
    __metadata("design:paramtypes", [core_1.Injector])
], LayoutModuleConfigComponent);
exports.LayoutModuleConfigComponent = LayoutModuleConfigComponent;
//# sourceMappingURL=layout-module-config.component.js.map