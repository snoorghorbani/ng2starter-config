import { HttpRequestBaseModel } from "@ng2-starter/shared";
import { ConfigModel } from "./config.model";
export declare module GetConfigsApiModel {
    class Request implements HttpRequestBaseModel<Request> {
        constructor(initValue?: GetConfigsApiModel.Request);
        getRequestBody(): {};
    }
    class Response {
        Result: ConfigModel<any>[];
        constructor();
    }
}
