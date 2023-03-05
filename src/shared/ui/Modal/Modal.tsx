/* eslint-disable max-len */
import React, { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children: ReactNode;
    open: boolean;
    onClose: () => void;
}

const Modal: FC<ModalProps> = (props) => {
    const {
        className, children, open, onClose,
    } = props;
    const mods: Record<string, boolean> = {
        [cls.opened]: open,
    };
    const onCloseHandler = () => {
        if (open) {
            onClose();
        }
    };
    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={onCloseHandler}>
                <div className={cls.content} onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
