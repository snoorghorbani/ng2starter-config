import { Component, Output, EventEmitter, Input, Injector } from "@angular/core";
import { FormGroup, Validators, FormControl, FormArray } from "@angular/forms";

@Component({
	template: `<div fxFlexLayout="row" fxLayoutWrap fxLayoutAlign="center center"> <mat-card [fxFlex]="30">         <mat-card-content fxFlexLayout="row"> <div [formGroup]="formGroup">     <mat-form-field>         <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="layout mode" formControlName="layoutMode">     </mat-form-field>     <mat-form-field>         <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="show left navbar" formControlName="showLeftNavBar">     </mat-form-field>     <mat-form-field>         <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="main side nav mode" formControlName="mainSideNavMode">     </mat-form-field>     <mat-form-field>         <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="show main side nav" formControlName="showMainSidenav">     </mat-form-field>     <mat-form-field>         <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="sticky left navbar" formControlName="stickyLeftNavBar">     </mat-form-field>     <mat-form-field>         <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="show second side nav" formControlName="showSecondSideNav">     </mat-form-field>     <mat-form-field>         <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="second side nav mode" formControlName="secondSideNavMode">     </mat-form-field> </div> </mat-card-content> </mat-card> <mat-card *ngFor="let item of formGroup.get('mainSideNavItems').controls" [fxFlex]="30">         <mat-card-content fxFlexLayout="row">                 <div [formGroup]="item">                         <mat-form-field>                             <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="route" formControlName="route">                         </mat-form-field>                         <mat-form-field>                             <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="icon" formControlName="icon">                         </mat-form-field>                         <mat-form-field>                         <mat-select placeholder="roles" formControlName="roles" multiple>                             <mat-option *ngFor="let role of roleItems" [value]="role">{{role}}</mat-option>                         </mat-select>                     </mat-form-field>                         <mat-form-field>                             <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="title" formControlName="title">                         </mat-form-field>                     </div>         </mat-card-content>       </mat-card>     </div>`
})
export class LayoutModuleConfigComponent {
	formGroup: FormGroup = new FormGroup({
		layoutMode: new FormControl("", [ Validators.required ]),
		showLeftNavBar: new FormControl("", [ Validators.required ]),
		mainSideNavMode: new FormControl("", [ Validators.required ]),
		showMainSidenav: new FormControl("", [ Validators.required ]),
		stickyLeftNavBar: new FormControl("", [ Validators.required ]),
		showSecondSideNav: new FormControl("", [ Validators.required ]),
		secondSideNavMode: new FormControl("", [ Validators.required ]),
		mainSideNavItems: new FormArray([])
	});
	@Input()
	set configFormGroup(configFormGroup: FormGroup) {
		(configFormGroup.controls.mainSideNavItems as FormArray).controls.forEach((control) => {
			debugger;
			(this.formGroup.controls.mainSideNavItems as FormArray).push(
				new FormGroup({
					route: new FormControl("", [ Validators.required ]),
					icon: new FormControl("", [ Validators.required ]),
					// roles: new FormArray(control.value.roles.map((i) => new FormControl("Admin"))),
					roles: new FormArray([ new FormControl("Admin") ]),
					title: new FormControl("", [ Validators.required ])
				})
			);
		});
		debugger;
		this.formGroup.patchValue(configFormGroup.value);
		configFormGroup.valueChanges.subscribe((data) => {
			this.formGroup.patchValue(data);
		});
	}

	@Output() configChanged = new EventEmitter();

	roleItems: string[] = [ "Admin", "User" ];

	constructor(private injector: Injector) {
		this.configFormGroup = this.injector.get("configFormGroup");
	}
}
