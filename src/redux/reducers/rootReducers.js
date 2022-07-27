import { combineReducers } from "redux";
import { theme } from './theme';
import { color } from './colors';

export const rootReducers = combineReducers({
	theme,
	color
})