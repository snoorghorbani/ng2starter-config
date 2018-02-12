import { NgModule, Component, OnInit, Output, EventEmitter, Input, Injector } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";

import { EditConfigApiModel } from "../../models";
import { ConfigService } from "../../services";
import { UtilityService } from "@ng2-starter/infra";

@Component({
	selector: "config-user-module-config",
	templateUrl: "./user-module-config.component.html"
})
export class UserModuleConfigComponent {
	formGroup: FormGroup = new FormGroup({
		changePassword: new FormControl("", [ Validators.required ]),
		editProfile: new FormControl("", [ Validators.required ]),
		getUserInfo: new FormControl("", [ Validators.required ]),
		profileInformation: new FormControl("", [ Validators.required ])
	});
	@Input()
	set configFormGroup(configFormGroup: FormGroup) {
		this.formGroup.patchValue(configFormGroup.value);
		configFormGroup.valueChanges.subscribe((data) => {
			this.formGroup.patchValue(data);
		});
	}
	@Output() configChanged = new EventEmitter();
	constructor(private injector: Injector) {
		this.configFormGroup = this.injector.get("configFormGroup");
	}
}
