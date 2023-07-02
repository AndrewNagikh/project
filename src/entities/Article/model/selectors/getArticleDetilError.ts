import { StateSchema } from 'app/providers/StoreProvider';

const getArticleDetailError = (state: StateSchema) => state.articleDetail?.error;
export default getArticleDetailError;
