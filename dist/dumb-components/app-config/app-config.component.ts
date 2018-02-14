import { NgModule, Component, OnInit, Output, EventEmitter, Input, Injector } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EditConfigApiModel } from '../../models';
import { ConfigService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from '@soushians/infra';
import { Store } from '@ngrx/store';

@Component({
	moduleId: module.id,
	selector: 'config-app-config',
	template: `<div [formGroup]="formGroup">     <mat-form-field>         <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="نام پروژه" formControlName="AppTitle">     </mat-form-field> </div>`
})
export class ConfigAppConfigComponent {
	formGroup: FormGroup = new FormGroup({ AppTitle: new FormControl('', [ Validators.required ]) });
	@Input()
	set configFormGroup(configFormGroup: FormGroup) {
		this.formGroup.patchValue(configFormGroup.value);
		configFormGroup.valueChanges.subscribe((data) => {
			this.formGroup.patchValue(data);
		});
	}
	@Output() configChanged = new EventEmitter();
	constructor(private injector: Injector) {
		this.configFormGroup = this.injector.get('configFormGroup');
	}
}
