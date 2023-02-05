import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButtons, ThemeButton } from 'shared/ui/AppButtons/AppButtons';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <div className={classNames(cls.LangSwitcher, {}, [className])}>
            <AppButtons onClick={toggle} theme={ThemeButton.CLEAR}>
                {t('Lang')}
            </AppButtons>
        </div>
    );
};
