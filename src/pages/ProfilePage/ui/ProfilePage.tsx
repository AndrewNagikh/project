import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import ModuleLoader from 'shared/lib/ModuleLoader/ModuleLoader';
import { profileRedcer } from '../model/slice/profileSlice';

interface ProfilePageProps {
    className?: string
}

const reducer: ReducersList = {
    profile: profileRedcer,
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <ModuleLoader reducers={reducer} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('ProfilePage')}
            </div>
        </ModuleLoader>
    );
};

export default ProfilePage;
