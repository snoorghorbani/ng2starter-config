"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("@ngrx/store");
const configList = require("./config-list.reducer");
exports.ConfigReducers = {
    list: configList.Reducer
};
//#region selectors
exports.selectConfigState = store_1.createFeatureSelector('config');
//#endregion
exports.getConfigListState = store_1.createSelector(exports.selectConfigState, (state) => state.list);
exports.getConfigs = store_1.createSelector(exports.getConfigListState, configList.getConfigs);
exports.getAppConfig = store_1.createSelector(exports.getConfigListState, configList.getAppConfig);
exports.getAuthenticationModuleConfig = store_1.createSelector(exports.getConfigListState, configList.getAuthenticationModuleConfig);
exports.getUserModuleConfig = store_1.createSelector(exports.getConfigListState, configList.getUserModuleConfig);
exports.getlayoutModuleConfig = store_1.createSelector(exports.getConfigListState, configList.getlayoutModuleConfig);
//# sourceMappingURL=index.js.map