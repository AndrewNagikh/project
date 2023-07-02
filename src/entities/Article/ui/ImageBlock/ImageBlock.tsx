import { ImageBlock as ImageBlockType } from 'entities/Article/model/types/article';
import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ImageBlock.module.scss';

interface ImageBlockProps {
    className?: string;
    block: ImageBlockType;
}

const ImageBlock: FC<ImageBlockProps> = memo((props: ImageBlockProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(cls.ImageBlock, {}, [className])}>
            <img src={block.src} alt={block.title} />
            {block.title && <Text text={block.title} textAlign="center" />}
        </div>
    );
});

export default ImageBlock;
