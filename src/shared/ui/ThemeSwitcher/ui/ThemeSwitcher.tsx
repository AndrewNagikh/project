import React, { FC } from 'react'
import cls from './ThemeSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import LightTheme from 'shared/assets/icons/theme-light.svg';
import { AppButtons, ThemeButton } from 'shared/ui/AppButtons/AppButtons';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButtons className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme} theme={ThemeButton.CLEAR}>
      {theme === Theme.DARK ? <DarkTheme /> : <LightTheme />}
    </AppButtons>
  )
}