import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export type TextAlign = 'right' | 'center' | 'left';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    textAlign?: TextAlign;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        textAlign = 'left',
        theme = TextTheme.PRIMARY,
    } = props;

    return (
        <div
            className={classNames(cls.Text, {
                [cls[theme]]: true,
                [cls[textAlign]]: true,
            }, [className])}
        >
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
