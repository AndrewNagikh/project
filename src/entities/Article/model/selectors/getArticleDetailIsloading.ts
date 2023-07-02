import { StateSchema } from 'app/providers/StoreProvider';

const getArticleDetailIsloading = (state: StateSchema) => state.articleDetail?.isLoading;
export default getArticleDetailIsloading;
