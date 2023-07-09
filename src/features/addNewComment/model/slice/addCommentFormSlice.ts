import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addNewComment } from '../services/addNewComment';
import AddCommentFormSchema from '../types/types';

const initialState: AddCommentFormSchema = {
    text: '',
    error: undefined,
    isLoading: false,
};

const addCommentSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setCommentText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addNewComment.fulfilled, (state) => {
            state.text = '';
            state.isLoading = false;
            state.error = undefined;
        });
        builder.addCase(addNewComment.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(addNewComment.rejected, (state, action) => {
            state.text = '';
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: addCommentFormActions } = addCommentSlice;
export const { reducer: addCommentFormReducer } = addCommentSlice;
