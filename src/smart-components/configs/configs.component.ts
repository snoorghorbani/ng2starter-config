import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services';
import { Observable } from 'rxjs/Observable';
import { GetConfigsApiModel, ConfigModel } from '../../models';
import { Store } from '@ngrx/store';

import * as FeatureReducer from '../../reducers';
import { getConfigs } from '../../reducers';

@Component({
        selector: 'configs',
        templateUrl: './configs.component.html',
        styleUrls: ['./configs.component.scss']
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
