import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_KEY } from 'shared/const/localStorage';
import { User, UserShema } from '../types/user';

const initialState: UserShema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const authData = localStorage.getItem(USER_KEY);
            if (authData) {
                state.authData = JSON.parse(authData);
            }
        },
        logout: (state) => {
            localStorage.removeItem(USER_KEY);
            state.authData = undefined;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
