import { StateSchema } from 'app/providers/StoreProvider';

export const getUserName = (state: StateSchema) => state?.username?.username || '';
export const getUserPassword = (state: StateSchema) => state?.username?.password || '';
export const getUserIsLoading = (state: StateSchema) => state?.username?.isLoading || false;
export const getUserError = (state: StateSchema) => state?.username?.error || '';
