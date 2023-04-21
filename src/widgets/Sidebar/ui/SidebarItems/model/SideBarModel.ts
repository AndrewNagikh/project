import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/Profile.svg';
import React from 'react';

export interface SideBarItemType {
    path: string;
    text: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const ItemsList: SideBarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        icon: ProfileIcon,
    },
];
