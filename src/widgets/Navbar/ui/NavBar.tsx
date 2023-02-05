import React, { FC } from 'react'
import cls from './NavBar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import { AppLinks, AppLinksTheme } from 'shared/ui/AppLinks/AppLinks';

interface NavBarProps {
    className?: string;
}

export const NavBar: FC<NavBarProps> = ({className}) => {
  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
        <div className={cls.links}>
            <AppLinks to='/' className={cls.mainLink} theme={AppLinksTheme.SECONDARY}>Главная</AppLinks>
            <AppLinks to='/about' theme={AppLinksTheme.SECONDARY} >О сайте</AppLinks>
        </div>
    </div>
  )
}