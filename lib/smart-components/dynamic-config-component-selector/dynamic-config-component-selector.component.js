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
const authentication_module_config_1 = require("../../dumb-components/authentication-module-config");
const app_config_1 = require("../../dumb-components/app-config");
const user_module_config_1 = require("../../dumb-components/user-module-config");
const dumb_components_1 = require("../../dumb-components");
let DynamicConfigComponentSelectorComponent = class DynamicConfigComponentSelectorComponent {
    constructor(resolver) {
        this.resolver = resolver;
        this.typeMapToDiagram = {
            authentication_module_config: authentication_module_config_1.AuthenticationModuleConfigComponent,
            app_config: app_config_1.ConfigAppConfigComponent,
            user_module_config: user_module_config_1.UserModuleConfigComponent,
            layout_config: dumb_components_1.LayoutModuleConfigComponent
        };
        this.configChanged = new core_1.EventEmitter();
        this.currentComponent = null;
    }
    set data(data) {
        if (!data || Object.keys(data).length == 0)
            return;
        if (!(data.type in this.typeMapToDiagram)) {
            if (this.currentComponent)
                this.currentComponent.destroy();
            return;
        }
        let _component = this.typeMapToDiagram[data.type];
        let inputProviders = Object.keys(data.inputs).map((inputName) => {
            return { provide: inputName, useValue: data.inputs[inputName] };
        });
        let resolvedInputs = core_1.ReflectiveInjector.resolve(inputProviders);
        let injector = core_1.ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
        let factory = this.resolver.resolveComponentFactory(_component);
        let component = factory.create(injector);
        component.instance.configChanged.subscribe((data) => {
            this.configChanged.emit(data);
        });
        this.dynamicComponentContainer.insert(component.hostView);
        if (this.currentComponent) {
            this.currentComponent.destroy();
        }
        this.currentComponent = component;
    }
    ngAfterViewInit() { }
};
__decorate([
    core_1.ViewChild('dynamicComponentContainer', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], DynamicConfigComponentSelectorComponent.prototype, "dynamicComponentContainer", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DynamicConfigComponentSelectorComponent.prototype, "configChanged", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DynamicConfigComponentSelectorComponent.prototype, "data", null);
DynamicConfigComponentSelectorComponent = __decorate([
    core_1.Component({
        selector: 'dynamic-config-component-selector',
        templateUrl: './dynamic-config-component-selector.component.html',
        styleUrls: ['./dynamic-config-component-selector.component.scss'],
        entryComponents: [
            authentication_module_config_1.AuthenticationModuleConfigComponent,
            app_config_1.ConfigAppConfigComponent,
            user_module_config_1.UserModuleConfigComponent,
            dumb_components_1.LayoutModuleConfigComponent
        ]
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
], DynamicConfigComponentSelectorComponent);
exports.DynamicConfigComponentSelectorComponent = DynamicConfigComponentSelectorComponent;
//# sourceMappingURL=dynamic-config-component-selector.component.js.map