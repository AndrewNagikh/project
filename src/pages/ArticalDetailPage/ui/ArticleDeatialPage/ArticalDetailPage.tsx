import { ArticleDetails } from 'entities/Article';
import getArticleDetailData from 'entities/Article/model/selectors/getArticleDetailData';
import getArticleDetailIsloading from 'entities/Article/model/selectors/getArticleDetailIsloading';
import getArticleDetailError from 'entities/Article/model/selectors/getArticleDetilError';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById';
import { articleDetailSliceReducers } from 'entities/Article/model/slice/articleDetailSlice';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList }
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ArticalDetailPage.module.scss';

interface ArticalDetailPageProps {
    className?: string
}
const reducers: ReducersList = {
    articleDetail: articleDetailSliceReducers,
};

const ArticalDetailPage: FC<ArticalDetailPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams();
    const isLoading = useSelector(getArticleDetailIsloading);
    const error = useSelector(getArticleDetailError);
    const data = useSelector(getArticleDetailData);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id as string));
        }
    }, [id]);
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticalDetailPage, {}, [className])}>
                <ArticleDetails isLoading={isLoading} error={error} data={data} />
            </div>
        </DynamicModuleLoader>
    );
};

export default ArticalDetailPage;
