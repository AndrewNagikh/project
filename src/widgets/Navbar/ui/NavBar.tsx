import React, { FC } from 'react'
import cls from './NavBar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import { AppLinks, AppLinksTheme } from 'shared/ui/AppLinks/AppLinks';
import { useTranslation } from 'react-i18next';

interface NavBarProps {
    className?: string;
}

export const NavBar: FC<NavBarProps> = ({className}) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
        <div className={cls.links}>
            <AppLinks to='/' className={cls.mainLink} theme={AppLinksTheme.SECONDARY}>{t('Links.Main')}</AppLinks>
            <AppLinks to='/about' theme={AppLinksTheme.SECONDARY} >{t('Links.About')}</AppLinks>
        </div>
    </div>
  )
}