import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { loginReducer } from 'features/loginByUserName/model/slice/loginSlice';
import React, { FC, useEffect } from 'react';
import { useStore } from 'react-redux';

export type ReducesList = {
    [name in StateSchemaKeys]?: Reducer
}
type ReducerListEnries = [StateSchemaKeys, Reducer]

interface ModuleLoaderProps {
    reducers: ReducesList;
    removeAfterUnmount?: boolean;
}

const ModuleLoader: FC<ModuleLoaderProps> = (props) => {
    const {
        children, reducers, removeAfterUnmount,
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEnries) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducerListEnries) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@REMOVE ${name} reducer` });
                });
            }
        };
    }, []);
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};

export default ModuleLoader;
