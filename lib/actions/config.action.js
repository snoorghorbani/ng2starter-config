"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigActionTypes;
(function (ConfigActionTypes) {
    ConfigActionTypes["GET_CONFIGS"] = "[CONFIG] get config";
    ConfigActionTypes["CONFIG_LOADED_SUCCEED"] = "[CONFIG] load config succeed";
    ConfigActionTypes["CONFIG_LOADED_FAILED"] = "[CONFIG] load config failed";
})(ConfigActionTypes = exports.ConfigActionTypes || (exports.ConfigActionTypes = {}));
var GetConfigAction = /** @class */ (function () {
    function GetConfigAction() {
        this.type = ConfigActionTypes.GET_CONFIGS;
    }
    return GetConfigAction;
}());
exports.GetConfigAction = GetConfigAction;
var ConfigLoadedSucceedAction = /** @class */ (function () {
    function ConfigLoadedSucceedAction(payload) {
        this.payload = payload;
        this.type = ConfigActionTypes.CONFIG_LOADED_SUCCEED;
    }
    return ConfigLoadedSucceedAction;
}());
exports.ConfigLoadedSucceedAction = ConfigLoadedSucceedAction;
var ConfigLoadedFailedAction = /** @class */ (function () {
    function ConfigLoadedFailedAction() {
        this.type = ConfigActionTypes.CONFIG_LOADED_FAILED;
    }
    return ConfigLoadedFailedAction;
}());
exports.ConfigLoadedFailedAction = ConfigLoadedFailedAction;
//# sourceMappingURL=config.action.js.map