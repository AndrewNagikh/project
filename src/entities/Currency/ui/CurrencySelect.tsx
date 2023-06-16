import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'shared/ui/Select/Select';
import { Currency } from '../model/types';

interface CurrencySelectProps {
    value?: string;
    className?: string;
    disabled?: boolean;
    onChange: ((value: string) => void)
}

const CurrencySelect: FC<CurrencySelectProps> = (props) => {
    const {
        value, className, disabled, onChange,
    } = props;
    const { t } = useTranslation('profile');
    const options = [
        {
            value: Currency.RUB,
            label: Currency.RUB,
        },
        {
            value: Currency.EUR,
            label: Currency.EUR,
        },
        {
            value: Currency.USD,
            label: Currency.USD,
        },
    ];
    return (
        <Select
            value={value}
            label={t('Валюта')}
            placeholder={t('Валюта')}
            className={className}
            disabled={disabled}
            options={options}
            onChange={onChange}
        />
    );
};

export default CurrencySelect;
