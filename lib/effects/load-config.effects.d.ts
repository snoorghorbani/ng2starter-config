import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Actions } from '@ngrx/effects';
import { ConfigLoadedSucceedAction, ConfigLoadedFailedAction } from '../actions';
import { ConfigService } from '../services';
export declare class LoadConfigEffects {
    private actions$;
    private router;
    private configService;
    constructor(actions$: Actions<any>, router: Router, configService: ConfigService);
    getConfigs$: Observable<ConfigLoadedSucceedAction | ConfigLoadedFailedAction>;
}
