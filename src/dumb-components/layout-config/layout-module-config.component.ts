import { Component, Output, EventEmitter, Input, Injector } from "@angular/core";
import { FormGroup, Validators, FormControl, FormArray } from "@angular/forms";

@Component({
	templateUrl: "./layout-module-config.component.html"
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
