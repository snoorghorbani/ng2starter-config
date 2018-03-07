"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var config = require("../actions/config.action");
var ɵ0 = [];
exports.ɵ0 = ɵ0;
var initialState = {
    data: ɵ0
};
function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case config.ConfigActionTypes.CONFIG_LOADED_SUCCEED:
            return __assign({}, state, { data: action.payload });
        default:
            return state;
    }
}
exports.Reducer = Reducer;
exports.getConfigs = function (state) { return state.data; };
exports.getAppConfig = function (state) { return state.data.find(function (config) { return config.Name == "app_config"; }); };
exports.getAuthenticationModuleConfig = function (state) {
    return state.data.find(function (config) { return config.Name == "authentication_module_config"; });
};
exports.getUserModuleConfig = function (state) { return state.data.find(function (config) { return config.Name == "user_module_config"; }); };
exports.getlayoutModuleConfig = function (state) {
    return state.data.find(function (config) { return config.Name == "layout_config"; });
};
exports.getConfigModuleConfig = function (state) {
    return state.data.find(function (config) { return config.Name == "config_module_config"; });
};
exports.getFormModuleConfig = function (state) {
    return state.data.find(function (config) { return config.Name == "form_module_config"; });
};
exports.getSocketModuleConfig = function (state) {
    return state.data.find(function (config) { return config.Name == "socket_module_config"; });
};
//# sourceMappingURL=config-list.reducer.js.map