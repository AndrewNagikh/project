import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getValidateProfileErrors } from './getValidateProfileErrors';

describe('getValidateProfileErrors.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: '123',
                isLoading: false,
                readonly: false,
            },
        };
        expect(getValidateProfileErrors(state as StateSchema)).toEqual('123');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getValidateProfileErrors(state as StateSchema)).toEqual(undefined);
    });
});
