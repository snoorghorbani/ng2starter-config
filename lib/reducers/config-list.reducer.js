"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("../actions/config.action");
const initialState = {
    data: []
};
function Reducer(state = initialState, action) {
    switch (action.type) {
        case config.ConfigActionTypes.CONFIG_LOADED_SUCCEED:
            return Object.assign({}, state, { data: action.payload });
        default:
            return state;
    }
}
exports.Reducer = Reducer;
exports.getConfigs = (state) => state.data;
exports.getAppConfig = (state) => state.data.find((config) => config.Name == "app_config");
exports.getAuthenticationModuleConfig = (state) => state.data.find((config) => config.Name == "authentication_module_config");
exports.getUserModuleConfig = (state) => state.data.find((config) => config.Name == "user_module_config");
exports.getlayoutModuleConfig = (state) => state.data.find((config) => config.Name == "layout_config");
//# sourceMappingURL=config-list.reducer.js.map