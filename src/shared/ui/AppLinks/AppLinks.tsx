import React, { FC } from 'react'
import cls from './AppLinks.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import { LinkProps } from 'react-router-dom';

export enum AppLinksTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinksProps extends LinkProps {
    className?: string;
    theme: AppLinksTheme;
}

export const AppLinks: FC<AppLinksProps> = ({className, children, to, theme=AppLinksTheme.PRIMARY, ...otherProps}) => {
  return (
    <Link to={to} className={classNames(cls.AppLinks, {}, [className, cls[theme]])} {...otherProps}>
        {children}
    </Link>
  )
}