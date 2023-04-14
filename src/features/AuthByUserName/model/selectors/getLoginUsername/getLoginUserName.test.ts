import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUserName';

describe('getLoginUserName test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            username: {
                username: '123',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('123');
    });
});
