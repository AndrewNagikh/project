import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getReadOnly } from './getReadOnly';

describe('getReadOnly.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: '123',
                isLoading: false,
                readonly: false,
            },
        };
        expect(getReadOnly(state as StateSchema)).toEqual(false);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getReadOnly(state as StateSchema)).toEqual(undefined);
    });
});
