import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { UserShema } from 'entities/User';
import { LoginSchema } from 'features/authbyusername';
import { ProfileSchema } from 'pages/ProfilePage/model/types/ProfileTypes';

export interface StateSchema {
    user: UserShema;
    username?: LoginSchema;
    profile?: ProfileSchema;
}
export type StateSchemaKeys = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKeys, reducer: Reducer) => void;
    remove: (key: StateSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
