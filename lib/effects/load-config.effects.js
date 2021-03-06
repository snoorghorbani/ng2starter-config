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
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var effects_1 = require("@ngrx/effects");
var actions_1 = require("../actions");
var services_1 = require("../services");
var operators_1 = require("rxjs/operators");
var LoadConfigEffects = /** @class */ (function () {
    function LoadConfigEffects(actions$, router, configService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.configService = configService;
        this.getConfigs$ = this.actions$
            .ofType(actions_1.ConfigActionTypes.GET_CONFIGS)
            .pipe(operators_1.map(function (action) { return action.payload; }), operators_1.switchMap(function (data) { return _this.configService.getConfigs(); }), operators_1.map(function (configs) { return new actions_1.ConfigLoadedSucceedAction(configs); }), operators_1.catchError(function () { return Observable_1.Observable.of(new actions_1.ConfigLoadedFailedAction()); }));
    }
    LoadConfigEffects.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    LoadConfigEffects.ctorParameters = function () { return [
        { type: effects_1.Actions, },
        { type: router_1.Router, },
        { type: services_1.ConfigService, },
    ]; };
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], LoadConfigEffects.prototype, "getConfigs$", void 0);
    return LoadConfigEffects;
}());
exports.LoadConfigEffects = LoadConfigEffects;
//# sourceMappingURL=load-config.effects.js.map