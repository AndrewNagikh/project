import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { State } from 'shared/config/redux/stateType';
import { createReduxStore } from 'shared/config/redux/store';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: State;
}

const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialState,
    } = props;
    const store = createReduxStore(initialState);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
