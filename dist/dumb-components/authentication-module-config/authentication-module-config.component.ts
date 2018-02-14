import { NgModule, Component, OnInit, Output, EventEmitter, Input, Injector } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { EditConfigApiModel } from "../../models";
import { ConfigService } from '../../services';
import { UtilityService } from "@soushians/infra";

@Component({
    selector: 'config-authentication-module-config',
    template: `<div [formGroup]="formGroup.controls.endpoints">     <mat-form-field>         <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="sign in" formControlName="signIn">     </mat-form-field>     <mat-form-field>         <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="sign out" formControlName="signOut">     </mat-form-field>     <mat-form-field>         <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="user information" formControlName="userInformation">     </mat-form-field> </div>`
})
export class AuthenticationModuleConfigComponent {
    formGroup: FormGroup = new FormGroup({
        endpoints: new FormGroup({
            signIn: new FormControl('', [Validators.required]),
            signOut: new FormControl('', [Validators.required]),
            userInformation: new FormControl('', [Validators.required])
        })
    });
    @Input()
    set configFormGroup(configFormGroup: FormGroup) {
        debugger;
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