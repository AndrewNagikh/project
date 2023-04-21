import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_KEY } from 'shared/const/localStorage';

export interface LoginProps {
    username: string;
    password: string;
}

export const fetchByLogin = createAsyncThunk<User, LoginProps, {rejectValue: string}>(
    'login/fetchByLogin',
    async (authData, api) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_KEY, JSON.stringify(response.data));
            api.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            console.log(error);
            return api.rejectWithValue('error');
        }
    },
);
