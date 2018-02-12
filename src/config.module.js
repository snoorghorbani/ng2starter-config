"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const store_1 = require("@ngrx/store");
const common_1 = require("@angular/common");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/common/http");
const flex_layout_1 = require("@angular/flex-layout");
const material_1 = require("@angular/material");
const platform_browser_1 = require("@angular/platform-browser");
const animations_1 = require("@angular/platform-browser/animations");
const reducers_1 = require("./reducers");
const dumb_components_1 = require("./dumb-components");
const services_1 = require("./services");
const smart_components_1 = require("./smart-components");
const config_routing_module_1 = require("./config.routing-module");
const effects_1 = require("@ngrx/effects");
const effects_2 = require("./effects");
let ConfigModule = class ConfigModule {
};
ConfigModule = __decorate([
    core_1.NgModule({
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
            platform_browser_1.BrowserModule,
            store_1.StoreModule.forFeature("config", reducers_1.ConfigReducers),
            animations_1.BrowserAnimationsModule,
            config_routing_module_1.RoutingModule,
            effects_1.EffectsModule.forFeature([effects_2.LoadConfigEffects])
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
        providers: [services_1.ConfigService],
        exports: []
    })
], ConfigModule);
exports.ConfigModule = ConfigModule;
//# sourceMappingURL=config.module.js.map