import { StateSchema } from 'app/providers/StoreProvider';

const getArticleDetailData = (state: StateSchema) => state.articleDetail?.data;
export default getArticleDetailData;
