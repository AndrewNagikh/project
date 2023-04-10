import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { loginActions } from '../../model/slice/loginSlice';
import { fetchByLogin } from '../../model/services/loginByUserName';
import { getLoginState } from '../../model/selectors/getLoginState';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const {
        username, password, error, isLoading,
    } = useAppSelector(getLoginState);
    const onLoginChange = useCallback((value: string) => {
        dispatch(loginActions.setLogin(value));
    }, [dispatch]);
    const onPassChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    const onSignInClick = useCallback(() => {
        dispatch(fetchByLogin({ username, password }));
    }, [dispatch, username, password]);
    return (
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
    );
});

export default LoginForm;
