import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            username: {
                isLoading: false,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});