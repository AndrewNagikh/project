import { TextBlock as TextBlockType } from 'entities/Article/model/types/article';
import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './TextBlock.module.scss';

interface TextBlockProps {
    className?: string;
    block: TextBlockType;
}

const TextBlock: FC<TextBlockProps> = memo((props: TextBlockProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(cls.TextBlock, {}, [className])}>
            {block.title && <Text title={block.title} className={cls.title} />}
            {block.paragraphs.map((paragraph) => (
                <Text
                    key={block.id}
                    text={paragraph}
                    className={cls.paragraph}
                />
            ))}
        </div>
    );
});

export default TextBlock;
