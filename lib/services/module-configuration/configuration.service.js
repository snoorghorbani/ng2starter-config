"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var config_config_1 = require("../../config.config");
var reducers_1 = require("../../reducers");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new BehaviorSubject_1.BehaviorSubject(this._config);
        this._config = Object.assign({}, config_config_1.MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(reducers_1.getConfigModuleConfig).subscribe(function (configConfig) {
            if (!configConfig)
                return;
            _this._config = Object.assign({}, _this._config, configConfig.Config);
            _this.config$.next(_this._config);
        });
    }
    Object.defineProperty(ConfigurationService.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    ConfigurationService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [config_config_1.MODULE_CONFIG_TOKEN,] },] },
        { type: store_1.Store, },
    ]; };
    return ConfigurationService;
}());
exports.ConfigurationService = ConfigurationService;
//# sourceMappingURL=configuration.service.js.map