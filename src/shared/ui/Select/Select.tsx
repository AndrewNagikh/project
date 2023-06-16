import React, {
    ChangeEvent, FC, ReactNode, useMemo,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
}

const Select: FC<SelectProps> = (props) => {
    const {
        className, label, options, value, onChange, placeholder, disabled,
    } = props;
    const selectOptions = useMemo<ReactNode[] | undefined>(() => options?.map((item) => (
        <option
            value={item.value}
            className={cls.option}
            key={item.value}
        >
            {item.label}
        </option>
    )), [options]);
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };
    const mods: Mods = {
        [cls.disabled]: disabled,
    };
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label} >`}</span>}
            <select
                className={cls.select}
                onChange={onChangeHandler}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
            >
                {selectOptions}
            </select>
        </div>
    );
};

export default Select;
