import { getReadOnly, profileActions, updateProfileData } from 'entities/Profile';
import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';

const ProfilePageHeader: FC = () => {
    const { t } = useTranslation('profile');
    const readOnly = useSelector(getReadOnly);
    const dispatch = useAppDispatch();
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);
    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    const onSaveProfile = useCallback(() => {
        dispatch(updateProfileData());
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    return (
        <div className={classNames(cls.ProfilePageHeader)}>
            <Text title={t('Профиль')} />
            {readOnly ? (
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                >
                    {t('Редактировать')}
                </Button>
            ) : (
                <>
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onCancelEdit}
                    >
                        {t('Отменить')}
                    </Button>
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                        onClick={onSaveProfile}
                    >
                        {t('Сохранить')}
                    </Button>
                </>
            )}
        </div>
    );
};

export default ProfilePageHeader;
