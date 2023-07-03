import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from '../types/comment';

export const fetchCommetById = createAsyncThunk<
    Comment[],
    string,
    ThunkConfig<string>
    >(
        'comment/fetchCommetById',
        async (articleId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<Comment[]>('/comments', {
                    params: {
                        articleId,
                        _expand: 'user',
                    },
                });
                if (!response.data) {
                    return rejectWithValue('error');
                }
                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue((e as {message: string}).message as string);
            }
        },
    );
