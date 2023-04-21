import React, {
    FC, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import ModuleLoader, { ReducesList } from 'shared/lib/ModuleLoader/ModuleLoader';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { fetchByLogin } from '../../model/services/loginByUsername/loginByUserName';
import {
    getUserName,
    getUserPassword,
    getUserIsLoading,
    getUserError,
} from '../../model/selectors/selectors';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}
const initialReducers: ReducesList = {
    username: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
    const {
        className,
        onSuccess,
    } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const username = useAppSelector(getUserName);
    const password = useAppSelector(getUserPassword);
    const error = useAppSelector(getUserError);
    const isLoading = useAppSelector(getUserIsLoading);

    const onLoginChange = useCallback((value: string) => {
        dispatch(loginActions.setLogin(value));
    }, [dispatch]);

    const onPassChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onSignInClick = useCallback(async () => {
        const result = await dispatch(fetchByLogin({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, username, password]);

    return (
        <ModuleLoader
            reducers={initialReducers}
            removeAfterUnmount
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Авторизация')} />
                {error && (
                    <Text text={error} theme={TextTheme.ERROR} />
                )}
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Логин')}
                    autoFocus
                    onChange={onLoginChange}
                    value={username}
                />
                <Input
                    type="password"
                    className={cls.input}
                    placeholder={t('Пароль')}
                    onChange={onPassChange}
                    value={password}
                />
                <Button
                    className={cls.loginBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSignInClick}
                    loading={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </ModuleLoader>
    );
});

export default LoginForm;
