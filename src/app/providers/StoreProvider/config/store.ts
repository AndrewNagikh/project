import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUserName';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
            user: userReducer,
            username: loginReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

export const store = createReduxStore({} as StateSchema);

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
