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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AuthenticationModuleConfigComponent = /** @class */ (function () {
    function AuthenticationModuleConfigComponent(injector) {
        this.injector = injector;
        this.formGroup = new forms_1.FormGroup({
            endpoints: new forms_1.FormGroup({
                signIn: new forms_1.FormControl('', [forms_1.Validators.required]),
                signOut: new forms_1.FormControl('', [forms_1.Validators.required]),
                userInformation: new forms_1.FormControl('', [forms_1.Validators.required])
            })
        });
        this.configChanged = new core_1.EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    Object.defineProperty(AuthenticationModuleConfigComponent.prototype, "configFormGroup", {
        set: function (configFormGroup) {
            var _this = this;
            debugger;
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe(function (data) {
                _this.formGroup.patchValue(data);
            });
        },
        enumerable: true,
        configurable: true
    });
    ;
    __decorate([
        core_1.Input(),
        __metadata("design:type", forms_1.FormGroup),
        __metadata("design:paramtypes", [forms_1.FormGroup])
    ], AuthenticationModuleConfigComponent.prototype, "configFormGroup", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AuthenticationModuleConfigComponent.prototype, "configChanged", void 0);
    AuthenticationModuleConfigComponent = __decorate([
        core_1.Component({
            selector: 'config-authentication-module-config',
            templateUrl: './authentication-module-config.component.html'
        }),
        __metadata("design:paramtypes", [core_1.Injector])
    ], AuthenticationModuleConfigComponent);
    return AuthenticationModuleConfigComponent;
}());
exports.AuthenticationModuleConfigComponent = AuthenticationModuleConfigComponent;
//# sourceMappingURL=authentication-module-config.component.js.map