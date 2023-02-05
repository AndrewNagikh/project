import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLinks, AppLinksTheme } from 'shared/ui/AppLinks/AppLinks';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <div className={cls.links}>
                <AppLinks to="/" className={cls.mainLink} theme={AppLinksTheme.SECONDARY}>{t('Links.Main')}</AppLinks>
                <AppLinks to="/about" theme={AppLinksTheme.SECONDARY}>{t('Links.About')}</AppLinks>
            </div>
        </div>
    );
};
