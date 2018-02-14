import { NgModule, Component, OnInit, Output, EventEmitter, Input, Injector } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";

import { EditConfigApiModel } from "../../models";
import { ConfigService } from "../../services";
import { UtilityService } from "@soushians/infra";

@Component({
	selector: "config-user-module-config",
	template: `<div [formGroup]="formGroup">         <mat-form-field>             <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="change password" formControlName="changePassword">         </mat-form-field>         <mat-form-field>             <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="edit profile" formControlName="editProfile">         </mat-form-field>         <mat-form-field>             <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="get user info" formControlName="getUserInfo">         </mat-form-field>         <mat-form-field>             <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="Profile Information Endpoint" formControlName="profileInformation">         </mat-form-field> </div>`
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
