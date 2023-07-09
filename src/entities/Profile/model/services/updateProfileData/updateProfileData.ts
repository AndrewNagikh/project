import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData, User } from 'entities/User';
import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import validateProfile from '../validateProfile/validateProfile';
import { profileActions } from '../../slice/profileSlice';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
    >(
        'profile/updateProfileData',
        async (_, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;
            const formData = getProfileForm(getState());

            try {
                const { id } = getUserAuthData(getState()) as User;
                if (!id) {
                    return rejectWithValue('error');
                }
                const validate = validateProfile(formData);
                if (validate) {
                    return rejectWithValue(validate);
                }
                const response = await extra.api.put<Profile>(`/profile/${id}`, formData);
                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
