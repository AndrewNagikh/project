import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return error', () => {
        const data = {
            first: 'Name',
            lastname: 'Name',
            age: 22,
            city: 'City',
            country: Country.ARMENIA,
            // eslint-disable-next-line max-len
            avatar: 'https://www.discordavatars.com/wp-content/uploads/2020/07/the-witcher-game-avatar-074.jpg',
            currency: Currency.EUR,
            username: 'User',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
                isLoading: false,
                readonly: false,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
