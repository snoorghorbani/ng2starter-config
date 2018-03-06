"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var flex_layout_1 = require("@angular/flex-layout");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var reducers_1 = require("./reducers");
var dumb_components_1 = require("./dumb-components");
var services_1 = require("./services");
var smart_components_1 = require("./smart-components");
var config_routing_module_1 = require("./config.routing-module");
var effects_1 = require("@ngrx/effects");
var effects_2 = require("./effects");
var config_config_1 = require("./config.config");
var NgsConfigModule = /** @class */ (function () {
    function NgsConfigModule() {
    }
    NgsConfigModule.forRoot = function (config) {
        return {
            ngModule: RootNgsConfigModule,
            providers: [{ provide: config_config_1.MODULE_CONFIG_TOKEN, useValue: config }, services_1.ConfigurationService, services_1.ConfigService]
        };
    };
    NgsConfigModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        router_1.RouterModule,
                        forms_1.FormsModule,
                        forms_1.ReactiveFormsModule,
                        http_1.HttpClientModule,
                        flex_layout_1.FlexLayoutModule,
                        material_1.MatIconModule,
                        material_1.MatButtonModule,
                        material_1.MatCardModule,
                        material_1.MatSnackBarModule,
                        material_1.MatSidenavModule,
                        material_1.MatExpansionModule,
                        material_1.MatSelectModule,
                        material_1.MatFormFieldModule,
                        material_1.MatListModule,
                        material_1.MatMenuModule,
                        material_1.MatRadioModule,
                        material_1.MatInputModule,
                        material_1.MatToolbarModule,
                        material_1.MatDatepickerModule,
                        material_1.MatProgressBarModule,
                        animations_1.BrowserAnimationsModule,
                        config_routing_module_1.RoutingModule
                    ],
                    declarations: [
                        smart_components_1.ConfigsComponent,
                        smart_components_1.ConfigEditComponent,
                        dumb_components_1.ConfigAppConfigComponent,
                        dumb_components_1.UserModuleConfigComponent,
                        dumb_components_1.LayoutModuleConfigComponent,
                        smart_components_1.ConfigModuleContainerComponent,
                        dumb_components_1.AuthenticationModuleConfigComponent,
                        smart_components_1.DynamicConfigComponentSelectorComponent
                    ],
                    providers: [],
                    exports: [
                        smart_components_1.ConfigsComponent,
                        smart_components_1.ConfigEditComponent,
                        dumb_components_1.ConfigAppConfigComponent,
                        dumb_components_1.UserModuleConfigComponent,
                        dumb_components_1.LayoutModuleConfigComponent,
                        smart_components_1.ConfigModuleContainerComponent,
                        dumb_components_1.AuthenticationModuleConfigComponent,
                        smart_components_1.DynamicConfigComponentSelectorComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    NgsConfigModule.ctorParameters = function () { return []; };
    return NgsConfigModule;
}());
exports.NgsConfigModule = NgsConfigModule;
var RootNgsConfigModule = /** @class */ (function () {
    function RootNgsConfigModule() {
    }
    RootNgsConfigModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        NgsConfigModule,
                        store_1.StoreModule.forFeature("config", reducers_1.ConfigReducers),
                        effects_1.EffectsModule.forFeature([effects_2.LoadConfigEffects])
                    ],
                    exports: [NgsConfigModule]
                },] },
    ];
    /** @nocollapse */
    RootNgsConfigModule.ctorParameters = function () { return []; };
    return RootNgsConfigModule;
}());
exports.RootNgsConfigModule = RootNgsConfigModule;
//# sourceMappingURL=config.module.js.map