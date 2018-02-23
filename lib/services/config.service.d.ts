import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { ConfigState } from "../reducers";
import { EditConfigApiModel, ConfigModel, LayoutConfigModel } from "../models";
import { Store } from "@ngrx/store";
import { ConfigurationService } from "./module-configuration";
export declare class ConfigService {
    private http;
    private store;
    private configurationService;
    responseCache: any;
    constructor(http: HttpClient, store: Store<ConfigState>, configurationService: ConfigurationService);
    getConfigs(): Observable<ConfigModel<any>[]>;
    getConfigByName(name: string): Observable<any>;
    editConfig(body: EditConfigApiModel.Request): Observable<any>;
    getLayoutConfigs(): Observable<LayoutConfigModel[]>;
}
