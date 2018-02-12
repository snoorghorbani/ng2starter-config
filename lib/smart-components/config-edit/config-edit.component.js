"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
const models_1 = require("../../models");
const services_1 = require("../../services");
let ConfigEditComponent = class ConfigEditComponent {
    constructor(configService, formBuilder, route) {
        this.configService = configService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.formGroup = models_1.EditConfigApiModel.Request.formGroup;
        this.route.params.subscribe((params) => {
            const configName = params['name'];
            this.configService.getConfigByName(configName).subscribe((data) => {
                this.partialConfigModel = {
                    type: data.Result.Name,
                    inputs: {
                        configFormGroup: this.formGroup.controls.Config
                    }
                };
                this.formGroup.patchValue({
                    _id: data.Result._id,
                    Name: data.Result.Name
                });
                debugger;
                Object.keys(data.Result.Config).forEach((key) => {
                    this.addControl(this.formGroup.controls.Config, key, data.Result.Config[key]);
                });
            });
        });
    }
    addControl(formGroup, key, value) {
        if (value instanceof Array) {
            formGroup.addControl(key, this.formBuilder.array(value));
        }
        else if (value instanceof Object) {
            formGroup.addControl(key, this.formBuilder.group(value));
        }
        else {
            formGroup.addControl(key, new forms_1.FormControl(value));
        }
    }
    ngOnInit() { }
    configChanged(event) {
        debugger;
        this.formGroup.controls.Config.patchValue(event);
    }
    edit() {
        debugger;
        if (!this.formGroup.valid)
            return;
        this.configService.editConfig(this.formGroup.value);
    }
};
ConfigEditComponent = __decorate([
    core_1.Component({
        selector: 'config-config-edit',
        templateUrl: './config-edit.component.html'
    }),
    __metadata("design:paramtypes", [services_1.ConfigService, forms_1.FormBuilder, router_1.ActivatedRoute])
], ConfigEditComponent);
exports.ConfigEditComponent = ConfigEditComponent;
//# sourceMappingURL=config-edit.component.js.map