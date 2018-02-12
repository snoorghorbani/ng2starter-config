import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
import { ConfigState } from "../reducers";

declare var c3: any;

import { EditConfigApiModel, GetConfigsApiModel, ConfigModel, LayoutConfigModel } from "../models";
import { Store } from '@ngrx/store';

import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { GetConfigAction } from '../actions';
declare var _: any;

@Injectable()
export class ConfigService {
    responseCache: any;

    constructor(
        private http: HttpClient,
        private store: Store<ConfigState>,
    ) {
        setTimeout(() => {
            this.store.dispatch(new GetConfigAction());
        }, 999);
    }

    getConfigs(): Observable<ConfigModel<any>[]> {
        return this.http.get('http://localhost:3000/api/config')
            .map((response: GetConfigsApiModel.Response) => response.Result)
            .catch(err => {
                return Observable.throw(err);
            })
    }
    getConfigByName(name: string): Observable<any> {
        return this.http.get(`http://localhost:3000/api/config/${name}`)
            .map(response => response)
            .catch(err => {
                return Observable.throw(err);
            })
    }
    editConfig(body: EditConfigApiModel.Request): Observable<any> {
        var model = new EditConfigApiModel.Request(body);

        return this.http.put(`http://localhost:3000/api/config/${model.Name}`, model.getRequestBody(), { withCredentials: false })
            .map(response => response)
            .catch(err => {
                return Observable.throw(err)
            });
    }

    getLayoutConfigs(): Observable<LayoutConfigModel[]> {
        return this.http.get('http://localhost:3000/api/layout-config')
            .map((response: LayoutConfigModel) => response)
            .catch(err => {
                return Observable.throw(err);
            })
    }
}