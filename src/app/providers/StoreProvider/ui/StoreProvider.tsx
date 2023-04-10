import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore, store } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
