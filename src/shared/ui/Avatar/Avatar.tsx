import React, { CSSProperties, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    src?: string;
    className?: string;
    size?: number;
}

const Avatar: FC<AvatarProps> = (props) => {
    const { src, className, size } = props;
    const styles: CSSProperties = {
        width: size,
        height: size,
    };
    return (
        <img
            src={src}
            alt="avatar"
            className={classNames(cls.Avatar, {}, [className])}
            style={{ ...styles }}
        />
    );
};

export default Avatar;
