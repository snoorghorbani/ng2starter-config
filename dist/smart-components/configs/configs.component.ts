import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services';
import { Observable } from 'rxjs/Observable';
import { GetConfigsApiModel, ConfigModel } from '../../models';
import { Store } from '@ngrx/store';

import * as FeatureReducer from '../../reducers';
import { getConfigs } from '../../reducers';

@Component({
        selector: 'configs',
        template: `<div fxFlexLayout="row" fxLayoutWrap fxLayoutAlign="center center">   <mat-card class="config-box" *ngFor="let config of (configs | async)" [fxFlex]="30">     <mat-card-header>       <mat-card-title>         <a [routerLink]="['edit' ,  config.Name]">           <mat-icon aria-label="edit config">edit</mat-icon>         </a>         {{config.Name}}       </mat-card-title>     </mat-card-header>     <mat-card-content>       <div [id]="'config_' + config.Name"></div>     </mat-card-content>   </mat-card> </div>`,
        styles: [`:host{     width: 100%; }  .config-box{     margin : 15px; }`]
})
export class ConfigsComponent {
        configs: Observable<ConfigModel<any>[]>;
        constructor(
                private configService: ConfigService,
                private store: Store<FeatureReducer.FeatureState>
        ) {
                this.configs = this.store.select(getConfigs);
        }

}
