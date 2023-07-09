import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import ArticlePage from 'pages/ArticlePage';
import ArticleDetailPage from 'pages/ArticalDetailPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    OWNER_PROFILE = 'profile',
    USERP_ROFILE = 'user-profile',
    ARTICLE = 'article',
    ARTICLE_DEATILS = 'article-details',
    // last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.OWNER_PROFILE]: '/profile',
    [AppRoutes.USERP_ROFILE]: '/profile/',
    [AppRoutes.ARTICLE]: '/article',
    [AppRoutes.ARTICLE_DEATILS]: '/article/',
    // последний
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.OWNER_PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
    },
    [AppRoutes.USERP_ROFILE]: {
        path: `${RoutePath['user-profile']}:id`,
        element: <ProfilePage />,
    },
    [AppRoutes.ARTICLE]: {
        path: RoutePath.article,
        element: <ArticlePage />,
    },
    [AppRoutes.ARTICLE_DEATILS]: {
        path: `${RoutePath['article-details']}:id`,
        element: <ArticleDetailPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
