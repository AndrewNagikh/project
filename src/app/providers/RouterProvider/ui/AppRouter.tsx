import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/RouterConfig/routerConfig';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Load...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => (
                    <Route path={path} element={<div className='page-wrapper'>{element}</div>} key={path}/>
                ))}
            </Routes>
        </Suspense>
  )
}

export default AppRouter;