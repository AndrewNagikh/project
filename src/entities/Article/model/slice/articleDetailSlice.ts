import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleById } from '../services/fetchArticleById';
import { Article } from '../types/article';
import { ArticleDetailStateSchema } from '../types/articleDetailStateSchema';

const initialState: ArticleDetailStateSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleDetailSlice = createSlice({
    name: 'articleDetail',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchArticleById.pending, (state, action) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchArticleById.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});

export const { actions: articleDetailSliceActions } = articleDetailSlice;
export const { reducer: articleDetailSliceReducers } = articleDetailSlice;
