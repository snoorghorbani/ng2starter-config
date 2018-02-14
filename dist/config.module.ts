import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatSnackBarModule,
	MatSidenavModule,
	MatExpansionModule,
	MatSelectModule,
	MatFormFieldModule,
	MatListModule,
	MatMenuModule,
	MatRadioModule,
	MatInputModule,
	MatToolbarModule,
	MatDatepickerModule,
	MatProgressBarModule
} from "@angular/material";

import { ConfigReducers } from "./reducers";
import {
	ConfigAppConfigComponent,
	AuthenticationModuleConfigComponent,
	UserModuleConfigComponent,
	LayoutModuleConfigComponent
} from "./dumb-components";
import { ConfigService } from "./services";
import {
	ConfigModuleContainerComponent,
	ConfigsComponent,
	ConfigEditComponent,
	DynamicConfigComponentSelectorComponent
} from "./smart-components";
import { RoutingModule } from "./config.routing-module";
import { GetConfigsApiModel } from "./models";
import { Observable } from "rxjs/Observable";
import * as FeatureReducer from "./reducers";
import { EffectsModule } from "@ngrx/effects";

import { LoadConfigEffects } from "./effects";

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		FlexLayoutModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatSnackBarModule,
		MatSidenavModule,
		MatExpansionModule,
		MatSelectModule,
		MatFormFieldModule,
		MatListModule,
		MatMenuModule,
		MatRadioModule,
		MatInputModule,
		MatToolbarModule,
		MatDatepickerModule,
		MatProgressBarModule,
		StoreModule.forFeature("config", ConfigReducers),
		BrowserAnimationsModule,
		RoutingModule,
		EffectsModule.forFeature([ LoadConfigEffects ])
	],
	declarations: [
		ConfigsComponent,
		ConfigEditComponent,
		ConfigAppConfigComponent,
		UserModuleConfigComponent,
		LayoutModuleConfigComponent,
		ConfigModuleContainerComponent,
		AuthenticationModuleConfigComponent,
		DynamicConfigComponentSelectorComponent
	],
	providers: [ ConfigService ],
	exports: [
		ConfigsComponent,
		ConfigEditComponent,
		ConfigAppConfigComponent,
		UserModuleConfigComponent,
		LayoutModuleConfigComponent,
		ConfigModuleContainerComponent,
		AuthenticationModuleConfigComponent,
		DynamicConfigComponentSelectorComponent
	]
})
export class ConfigModule {}
