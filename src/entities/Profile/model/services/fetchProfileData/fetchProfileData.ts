import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData, User } from 'entities/User';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    string | undefined,
    ThunkConfig<string>
    >(
        'profile/fetchProfileData',
        async (userProfileId, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;

            try {
                const { id: ownerId } = getUserAuthData(getState()) as User;
                if (!ownerId && !userProfileId) {
                    return rejectWithValue('error');
                }
                const response = await extra
                    .api
                    .get<Profile>(`/profile/${userProfileId || ownerId}`);
                if (!response.data) {
                    return rejectWithValue('error');
                }
                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
