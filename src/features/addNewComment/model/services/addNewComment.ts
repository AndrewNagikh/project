import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import getArticleDetailData from 'entities/Article/model/selectors/getArticleDetailData';
import { Comment } from 'entities/Comment/model/types/comment';
import { getUserAuthData } from 'entities/User';
import { getAddCommentText } from '../selectors/addCommentFormSelectors';

export const addNewComment = createAsyncThunk<
    Comment,
    {
        entityId: string | undefined,
        text: string;
    },
    ThunkConfig<string>
>('comment/Addcomment', async (args, thunkApi) => {
    const {
        extra, dispatch, rejectWithValue, getState,
    } = thunkApi;
    const userData = getUserAuthData(getState());

    if (!userData || !args.text || !args.entityId) {
        rejectWithValue('error');
    }

    try {
        const response = await extra.api.post<Comment>('/comments', {
            articleId: args.entityId,
            userId: userData?.id,
            text: args.text,
        });
        if (!response.data) {
            return rejectWithValue('error');
        }
        return response.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});
