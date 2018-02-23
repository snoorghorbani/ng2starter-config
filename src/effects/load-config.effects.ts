import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect, toPayload } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";

import { ConfigActionTypes, ConfigLoadedSucceedAction, ConfigLoadedFailedAction } from "../actions";
import { ConfigService } from "../services";
import { GetConfigsApiModel } from "../models";

@Injectable()
export class LoadConfigEffects {
	constructor(private actions$: Actions<any>, private router: Router, private configService: ConfigService) {}

	@Effect()
	getConfigs$ = this.actions$
		.ofType("sdfsdf")
		.map(toPayload)
		.switchMap((data: GetConfigsApiModel.Request) => this.configService.getConfigs())
		.map((configs) => new ConfigLoadedSucceedAction(configs))
		.catch(() => Observable.of(new ConfigLoadedFailedAction()));
}
