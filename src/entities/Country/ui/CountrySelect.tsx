import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'shared/ui/Select/Select';
import { Country } from '../model/types';

interface CountrySelectProps {
    value?: string;
    className?: string;
    disabled?: boolean;
    onChange: ((value: string) => void)
}

const CountrySelect: FC<CountrySelectProps> = (props) => {
    const {
        value, className, disabled, onChange,
    } = props;
    const { t } = useTranslation('profile');
    const options = [
        {
            value: Country.ARMENIA,
            label: Country.ARMENIA,
        },
        {
            value: Country.RUSSIA,
            label: Country.RUSSIA,
        },
        {
            value: Country.BELARUS,
            label: Country.BELARUS,
        },
    ];
    return (
        <Select
            value={value}
            label={t('Страна')}
            placeholder={t('Страна')}
            className={className}
            disabled={disabled}
            options={options}
            onChange={onChange}
        />
    );
};

export default CountrySelect;
