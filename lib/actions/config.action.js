"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigActionTypes;
(function (ConfigActionTypes) {
    ConfigActionTypes["GET_CONFIGS"] = "[CONFIG] get config";
    ConfigActionTypes["CONFIG_LOADED_SUCCEED"] = "[CONFIG] load config succeed";
    ConfigActionTypes["CONFIG_LOADED_FAILED"] = "[CONFIG] load config failed";
})(ConfigActionTypes = exports.ConfigActionTypes || (exports.ConfigActionTypes = {}));
class GetConfigAction {
    constructor() {
        this.type = ConfigActionTypes.GET_CONFIGS;
    }
}
exports.GetConfigAction = GetConfigAction;
class ConfigLoadedSucceedAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ConfigActionTypes.CONFIG_LOADED_SUCCEED;
    }
}
exports.ConfigLoadedSucceedAction = ConfigLoadedSucceedAction;
class ConfigLoadedFailedAction {
    constructor() {
        this.type = ConfigActionTypes.CONFIG_LOADED_FAILED;
    }
}
exports.ConfigLoadedFailedAction = ConfigLoadedFailedAction;
//# sourceMappingURL=config.action.js.map