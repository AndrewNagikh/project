/* eslint-disable no-restricted-globals */
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButtons } from 'shared/ui/AppButtons/AppButtons';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

const ErrorPage: FC<ErrorPageProps> = ({ className }) => {
    const { t } = useTranslation();
    const reload = () => {
        location.reload();
    };
    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>
                {t('SomeError')}
            </p>
            <AppButtons onClick={reload}>
                {t('ReloadPage')}
            </AppButtons>
        </div>
    );
};

export default ErrorPage;
