import React, { FC, memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    children: ReactNode;
}

const Code: FC<CodeProps> = memo((props: CodeProps) => {
    const { className, children } = props;
    const { t } = useTranslation('article');
    const copy = () => {
        navigator.clipboard.writeText(children as string).then(() => alert(t('Скопировано')));
    };
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button className={cls.copyBtn} onClick={copy}>
                {t('Копировать')}
            </Button>
            <code>
                {children}
            </code>
        </pre>
    );
});

export default Code;
