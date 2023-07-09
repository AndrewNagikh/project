import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCommentText = (state: StateSchema) => state.addCommentForm?.text;
export const getAddCommentError = (state: StateSchema) => state.addCommentForm?.error;
export const getAddCommentIsLoading = (state: StateSchema) => state.addCommentForm?.isLoading;
