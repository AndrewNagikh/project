import { StateSchema } from 'app/providers/StoreProvider';

const getCommentsIsLoading = (state: StateSchema) => state.comments?.isLoading;
const getCommentsError = (state: StateSchema) => state.comments?.error;

export {
    getCommentsIsLoading,
    getCommentsError,
};
