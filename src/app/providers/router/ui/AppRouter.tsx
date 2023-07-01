import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from 'shared/config/routeConfig/ProtectedRoute';
import { routeConfig, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => {
            const isAuthRutes = path === RoutePath.profile
            || path === RoutePath.article
            || path === RoutePath['article-details'];
            if (isAuthRutes) {
                return (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <ProtectedRoute />
                        )}
                    >
                        <Route
                            key={path}
                            path={path}
                            element={(
                                <Suspense fallback={<PageLoader />}>
                                    <div className="page-wrapper">
                                        {element}
                                    </div>
                                </Suspense>
                            )}
                        />
                    </Route>
                );
            }
            return (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">
                                {element}
                            </div>
                        </Suspense>
                    )}
                />
            );
        })}
    </Routes>
);

export default AppRouter;
