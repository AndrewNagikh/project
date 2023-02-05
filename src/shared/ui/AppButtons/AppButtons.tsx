import React, { ButtonHTMLAttributes, FC } from 'react'
import cls from './AppButtons.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
    CLEAR = 'clear'
}

interface AppButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const AppButtons: FC<AppButtonsProps> = ({className, children, theme, ...otherProps}) => {
  return (
    <button className={classNames(cls.AppButtons, {}, [className, cls[theme]])} {...otherProps}>
        {children}
    </button>
  )
}