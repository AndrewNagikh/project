import { CodeBlock as CodeBlockType } from 'entities/Article/model/types/article';
import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Code from 'shared/ui/Code/Code';
import cls from './CodeBlock.module.scss';

interface CodeBlockProps {
    className?: string;
    block: CodeBlockType;
}

const CodeBlock: FC<CodeBlockProps> = memo((props: CodeBlockProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(cls.CodeBlock, {}, [className])}>
            <Code>
                {block.code}
            </Code>
        </div>
    );
});

export default CodeBlock;
