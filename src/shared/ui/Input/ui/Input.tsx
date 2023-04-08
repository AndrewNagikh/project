import React, {
    FC, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string;
    onChange?: (value: string) => void
    autoFocus?: boolean;
}

const Input: FC<InputProps> = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type,
        placeholder,
        autoFocus,
        ...otherProps
    } = props;
    const [focused, setFocuded] = useState<boolean>(false);
    const [caretPosition, setCaretPosition] = useState<number>(0);
    const ref = useRef<HTMLInputElement>();
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
        setCaretPosition(event.target.value.length);
    };
    const onBlur = () => {
        setFocuded(false);
    };
    const onFocus = () => {
        setFocuded(true);
    };
    const onSelect = (event: any) => {
        setCaretPosition(event?.target?.selectionStart);
    };
    useEffect(() => {
        if (autoFocus) {
            setFocuded(true);
            ref.current?.focus();
        }
    }, [autoFocus]);
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeolder}>
                    {`${placeholder} >`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    className={cls.input}
                    ref={ref}
                    type={type}
                    value={value}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    {...otherProps}
                    onChange={onChangeHandler}
                />
                {focused && (
                    <span
                        className={cls.caret}
                        style={{
                            left: `${caretPosition * 9}px`,
                        }}
                    />
                )}
            </div>
        </div>
    );
});

export default Input;
