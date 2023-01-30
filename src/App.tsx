import React, { Suspense, useContext, useState } from 'react'
import { Counter } from './components/Counter'
import { Routes, Route, Link } from 'react-router-dom';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classnames';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
        <button onClick={toggleTheme}>Theme</button>
        <Suspense fallback={<div>Load...</div>}>
            <Routes>
                <Route path='/about' element={<AboutPageLazy />} />
                <Route path='/' element={<MainPageLazy />} />
            </Routes>
        </Suspense>
    </div>
  )
}
