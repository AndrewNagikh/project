import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppButtons.module.scss';

export enum ThemeButton {
    CLEAR = 'clear'
}

interface AppButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const AppButtons: FC<AppButtonsProps> = ({
    className, children, theme, ...otherProps
}) => (
    <button className={classNames(cls.AppButtons, {}, [className, cls[theme]])} type="button" {...otherProps}>
        {children}
    </button>
);
