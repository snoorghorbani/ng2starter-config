import { ConfigService } from '../../services';
import { Observable } from 'rxjs/Observable';
import { ConfigModel } from '../../models';
import { Store } from '@ngrx/store';
import * as FeatureReducer from '../../reducers';
export declare class ConfigsComponent {
    private configService;
    private store;
    configs: Observable<ConfigModel<any>[]>;
    constructor(configService: ConfigService, store: Store<FeatureReducer.FeatureState>);
}
