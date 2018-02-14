"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var authentication_module_config_1 = require("../../dumb-components/authentication-module-config");
var app_config_1 = require("../../dumb-components/app-config");
var user_module_config_1 = require("../../dumb-components/user-module-config");
var dumb_components_1 = require("../../dumb-components");
var DynamicConfigComponentSelectorComponent = /** @class */ (function () {
    function DynamicConfigComponentSelectorComponent(resolver) {
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
    Object.defineProperty(DynamicConfigComponentSelectorComponent.prototype, "data", {
        set: function (data) {
            var _this = this;
            if (!data || Object.keys(data).length == 0)
                return;
            if (!(data.type in this.typeMapToDiagram)) {
                if (this.currentComponent)
                    this.currentComponent.destroy();
                return;
            }
            var _component = this.typeMapToDiagram[data.type];
            var inputProviders = Object.keys(data.inputs).map(function (inputName) {
                return { provide: inputName, useValue: data.inputs[inputName] };
            });
            var resolvedInputs = core_1.ReflectiveInjector.resolve(inputProviders);
            var injector = core_1.ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
            var factory = this.resolver.resolveComponentFactory(_component);
            var component = factory.create(injector);
            component.instance.configChanged.subscribe(function (data) {
                _this.configChanged.emit(data);
            });
            this.dynamicComponentContainer.insert(component.hostView);
            if (this.currentComponent) {
                this.currentComponent.destroy();
            }
            this.currentComponent = component;
        },
        enumerable: true,
        configurable: true
    });
    DynamicConfigComponentSelectorComponent.prototype.ngAfterViewInit = function () { };
    DynamicConfigComponentSelectorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dynamic-config-component-selector',
                    template: "<div #dynamicComponentContainer></div>",
                    styles: [":host{     width: 100%; }  .diagram-box{     margin : 15px; }  .diagram-box .c3 {   direction: ltr; }"],
                    entryComponents: [
                        authentication_module_config_1.AuthenticationModuleConfigComponent,
                        app_config_1.ConfigAppConfigComponent,
                        user_module_config_1.UserModuleConfigComponent,
                        dumb_components_1.LayoutModuleConfigComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    DynamicConfigComponentSelectorComponent.ctorParameters = function () { return [
        { type: core_1.ComponentFactoryResolver, },
    ]; };
    DynamicConfigComponentSelectorComponent.propDecorators = {
        "dynamicComponentContainer": [{ type: core_1.ViewChild, args: ['dynamicComponentContainer', { read: core_1.ViewContainerRef },] },],
        "configChanged": [{ type: core_1.Output },],
        "data": [{ type: core_1.Input },],
    };
    return DynamicConfigComponentSelectorComponent;
}());
exports.DynamicConfigComponentSelectorComponent = DynamicConfigComponentSelectorComponent;
//# sourceMappingURL=dynamic-config-component-selector.component.js.map