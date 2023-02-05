import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLinks.module.scss';

export enum AppLinksTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinksProps extends LinkProps {
    className?: string;
    theme: AppLinksTheme;
}

export const AppLinks: FC<AppLinksProps> = ({
    className, children, to, theme = AppLinksTheme.PRIMARY, ...otherProps
}) => (
    <Link to={to} className={classNames(cls.AppLinks, {}, [className, cls[theme]])} {...otherProps}>
        {children}
    </Link>
);
