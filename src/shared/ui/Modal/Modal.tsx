/* eslint-disable max-len */
import React, {
    FC, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Portal from '../Portal/Portal';
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
    const [closed, setClosed] = useState<boolean>(false);
    const mods: Record<string, boolean> = {
        [cls.opened]: open,
        [cls.closed]: closed,
    };
    const timeRef = useRef<ReturnType<typeof setTimeout>>();
    const onCloseHandler = useCallback(() => {
        setClosed(true);
        if (onClose) {
            timeRef.current = setTimeout(() => {
                onClose();
                setClosed(false);
            }, 300);
        }
    }, [onClose]);
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseHandler();
        }
    }, [onCloseHandler]);
    useEffect(() => {
        if (open) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [open, onKeyDown]);
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={onCloseHandler}>
                    <div className={cls.content} onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
