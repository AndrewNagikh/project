import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticalDetailPage.module.scss';

interface ArticalDetailPageProps {
    className?: string
}

const ArticalDetailPage: FC<ArticalDetailPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article');
    return (
        <div className={classNames(cls.ArticalDetailPage, {}, [className])}>
            ArticalDetailPage
        </div>
    );
};

export default ArticalDetailPage;
