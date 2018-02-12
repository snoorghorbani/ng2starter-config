"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forms_1 = require("@angular/forms");
var EditConfigApiModel;
(function (EditConfigApiModel) {
    class Request {
        constructor(initValue = {}) {
            Object.keys(initValue).forEach(key => this[key] = initValue[key]);
        }
        getRequestBody() {
            debugger;
            return {
                Name: this.Name,
                Config: this.Config
            };
        }
        static get formGroup() {
            return new forms_1.FormGroup({
                Name: new forms_1.FormControl('', [forms_1.Validators.required]),
                Config: new forms_1.FormGroup({}),
            });
        }
    }
    EditConfigApiModel.Request = Request;
    class Response {
        constructor() {
        }
    }
    EditConfigApiModel.Response = Response;
})(EditConfigApiModel = exports.EditConfigApiModel || (exports.EditConfigApiModel = {}));
//# sourceMappingURL=edit-config-api.model.js.map