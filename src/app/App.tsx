import React, { Suspense, useContext, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { MainPageLazy } from 'pages/MainPage/ui/MainPage.lazy';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { AppRouter } from 'app/providers/RouterProvider';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
        <button onClick={toggleTheme}>Theme</button>
        <AppRouter />
    </div>
  )
}
