import { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/RouterProvider';
import { NavBar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';

export default function App() {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="...">
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
