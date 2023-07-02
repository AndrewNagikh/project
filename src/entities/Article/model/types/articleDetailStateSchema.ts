import { Article } from './article';

export interface ArticleDetailStateSchema {
    isLoading: boolean;
    error?: string;
    data?: Article;
}
