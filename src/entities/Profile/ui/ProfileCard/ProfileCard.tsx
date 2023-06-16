import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import Avatar from 'shared/ui/Avatar/Avatar';
import Select from 'shared/ui/Select/Select';
import { CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onFieldChange: (field: keyof Profile) => (value: any) => void;
}

export const ProfileCard = ({
    className, data, isLoading, error, onFieldChange, readonly,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.error]: true }, [className])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={error}
                    text="Попробуйте перезагрузить страницу"
                    textAlign="center"
                />
            </div>
        );
    }
    const mods: Mods = {
        [cls.editing]: !readonly,
    };
    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                <div className={cls.avatar}>
                    <Avatar src={data?.avatar} />
                </div>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onFieldChange('first')}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onFieldChange('lastname')}
                    readonly={readonly}
                />
                <Input
                    value={String(data?.age)}
                    placeholder={t('Возраст')}
                    className={cls.input}
                    onChange={onFieldChange('age')}
                    readonly={readonly}
                    type="number"
                />
                <CurrencySelect
                    value={data?.currency}
                    className={cls.input}
                    disabled={readonly}
                    onChange={onFieldChange('currency')}
                />
                <CountrySelect
                    value={data?.country}
                    className={cls.input}
                    onChange={onFieldChange('country')}
                    disabled={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Город')}
                    className={cls.input}
                    onChange={onFieldChange('city')}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Аватар')}
                    className={cls.input}
                    onChange={onFieldChange('avatar')}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Никнейм')}
                    className={cls.input}
                    onChange={onFieldChange('username')}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
