import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as configList from './config-list.reducer';
export interface ConfigState {
	list: configList.State;
}

export const ConfigReducers = {
	list: configList.Reducer
};

export interface FeatureState {
	'configs': ConfigState;
}

//#region selectors

export const selectConfigState = createFeatureSelector<ConfigState>('config');

//#endregion

export const getConfigListState = createSelector(selectConfigState, (state: ConfigState) => state.list);
export const getConfigs = createSelector(getConfigListState, configList.getConfigs);
export const getAppConfig = createSelector(getConfigListState, configList.getAppConfig);
export const getAuthenticationModuleConfig = createSelector(
	getConfigListState,
	configList.getAuthenticationModuleConfig
);
export const getUserModuleConfig = createSelector(getConfigListState, configList.getUserModuleConfig);
export const getlayoutModuleConfig = createSelector(getConfigListState, configList.getlayoutModuleConfig);
