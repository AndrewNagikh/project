import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { FC, ReactNode, useState } from 'react';
import Modal from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                onClick={() => setOpen(true)}
                theme={ThemeButton.CLEAR_INVERTED}
            >
                {t('Войти')}
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                {t('Войти')}
            </Modal>
        </div>
    );
};
