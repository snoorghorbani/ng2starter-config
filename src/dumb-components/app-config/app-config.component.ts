import { NgModule, Component, OnInit, Output, EventEmitter, Input, Injector } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { EditConfigApiModel } from "../../models";
import { ConfigService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from "@ng2-starter/infra";
import { Store } from '@ngrx/store';

@Component({
    selector: 'config-app-config',
    templateUrl: './app-config.component.html'
})
export class ConfigAppConfigComponent {
    formGroup: FormGroup = new FormGroup({ AppTitle: new FormControl('', [Validators.required]) });
    @Input()
    set configFormGroup(configFormGroup: FormGroup) {
        this.formGroup.patchValue(configFormGroup.value);
        configFormGroup.valueChanges.subscribe(data => {
            this.formGroup.patchValue(data);
        });
    };
    @Output() configChanged = new EventEmitter();
    constructor(
        private injector: Injector
    ) {
        this.configFormGroup = this.injector.get("configFormGroup");
    }
}
