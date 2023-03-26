import { configureStore } from '@reduxjs/toolkit';
import { State } from './stateType';

export const createReduxStore = (initialState?: State) => configureStore<State>({
    reducer: {},
    devTools: __IS_DEV__,
    preloadedState: initialState,
});
