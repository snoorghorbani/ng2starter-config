"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
var configList = require("./config-list.reducer");
var actions_1 = require("../actions");
actions_1.ConfigLoadedFailedAction;
exports.ConfigReducers = {
    list: configList.Reducer
};
//#region selectors
exports.selectConfigState = store_1.createFeatureSelector("config");
//#endregion
exports.getConfigListState = store_1.createSelector(exports.selectConfigState, function (state) { return state.list; });
exports.getConfigs = store_1.createSelector(exports.getConfigListState, configList.getConfigs);
exports.getAppConfig = store_1.createSelector(exports.getConfigListState, configList.getAppConfig);
exports.getAuthenticationModuleConfig = store_1.createSelector(exports.getConfigListState, configList.getAuthenticationModuleConfig);
exports.getUserModuleConfig = store_1.createSelector(exports.getConfigListState, configList.getUserModuleConfig);
exports.getlayoutModuleConfig = store_1.createSelector(exports.getConfigListState, configList.getlayoutModuleConfig);
exports.getConfigModuleConfig = store_1.createSelector(exports.getConfigListState, configList.getConfigModuleConfig);
exports.getFormModuleConfig = store_1.createSelector(exports.getConfigListState, configList.getFormModuleConfig);
exports.getSocketModuleConfig = store_1.createSelector(exports.getConfigListState, configList.getSocketModuleConfig);
//# sourceMappingURL=index.js.map