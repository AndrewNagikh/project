import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/testAsyncThunk';
import { fetchByLogin } from './loginByUserName';

jest.mock('axios');
const mokedAxios = jest.mocked(axios, true);
describe('loginByUserName test', () => {
    // test('200', async () => {
    //     mokedAxios.post.mockReturnValue(Promise.resolve({ data: { username: '123', id: '1' } }));
    //     const action = fetchByLogin({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //     expect(dispatch)
    //         .toHaveBeenCalledWith(userActions.setAuthData({ username: '123', id: '1' }));
    //     expect(mokedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    // });
    // test('403', async () => {
    //     mokedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = fetchByLogin({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mokedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     expect(result.payload).toBe('error');
    // });
    test('200', async () => {
        mokedAxios.post.mockReturnValue(Promise.resolve({ data: { username: '123', id: '1' } }));

        const thunk = new TestAsyncThunk(fetchByLogin);
        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.dispatch)
            .toHaveBeenCalledWith(userActions.setAuthData({ username: '123', id: '1' }));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mokedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
    test('403', async () => {
        mokedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const thunk = new TestAsyncThunk(fetchByLogin);
        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mokedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
