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
let UserModuleConfigComponent = class UserModuleConfigComponent {
    constructor(injector) {
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
    set configFormGroup(configFormGroup) {
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
], UserModuleConfigComponent.prototype, "configFormGroup", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UserModuleConfigComponent.prototype, "configChanged", void 0);
UserModuleConfigComponent = __decorate([
    core_1.Component({
        selector: "config-user-module-config",
        templateUrl: "./user-module-config.component.html"
    }),
    __metadata("design:paramtypes", [core_1.Injector])
], UserModuleConfigComponent);
exports.UserModuleConfigComponent = UserModuleConfigComponent;
//# sourceMappingURL=user-module-config.component.js.map