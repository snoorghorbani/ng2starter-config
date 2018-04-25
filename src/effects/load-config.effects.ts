import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { Store } from '@ngrx/store';

import { ConfigActionTypes, ConfigLoadedSucceedAction, ConfigLoadedFailedAction } from '../actions';
import { ConfigService } from '../services';
import { GetConfigsApiModel } from '../models';
import { map, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class LoadConfigEffects {
	constructor(private actions$: Actions<any>, private router: Router, private configService: ConfigService) { }

	@Effect()
	getConfigs$ = this.actions$
		.ofType(ConfigActionTypes.GET_CONFIGS)
		.pipe(
			map(action => action.payload),
			switchMap((data: GetConfigsApiModel.Request) => this.configService.getConfigs()),
			map((configs) => new ConfigLoadedSucceedAction(configs)),
			catchError(() => Observable.of(new ConfigLoadedFailedAction()))
		);
}
