import React, {
    FC, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Avatar from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Sceleton/Skeleton';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    Article,
    Block,
    BlockType,
    CodeBlock as CodeBlockType,
    ImageBlock as ImageBlockType,
    TextBlock as TextBlockType,
} from '../../model/types/article';
import CodeBlock from '../CodeBlock/CodeBlock';
import ImageBlock from '../ImageBlock/ImageBlock';
import TextBlock from '../TextBlock/TextBlock';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    error?: string;
    isLoading?: boolean;
    data?: Article;
}

const ArticleDetails: FC<ArticleDetailsProps> = memo((props: ArticleDetailsProps) => {
    const {
        className, error, isLoading, data,
    } = props;
    const { t } = useTranslation();

    const getArticleBlock = useCallback((blockType: BlockType, block: Block) => {
        switch (blockType) {
        case BlockType.CODE:
            return <CodeBlock block={block as CodeBlockType} />;
        case BlockType.TEXT:
            return <TextBlock block={block as TextBlockType} />;
        case BlockType.IMAGE:
            return <ImageBlock block={block as ImageBlockType} />;
        default:
            return null;
        }
    }, []);

    if (error) {
        return (
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Ошибка загрузки статьи')}
                    text={error}
                    textAlign="center"
                />
            </div>
        );
    }
    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleDetails, {}, [className, 'sceleton'])}>
                <Skeleton border="50%" height={200} width={200} style={{ margin: 'auto' }} />
                <Skeleton height={24} width={300} />
                <Skeleton height={24} width={350} />
                <Skeleton height={200} width="100%" />
                <Skeleton height={200} width="100%" />
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            <div className={cls.avatar}>
                <Avatar size={200} src={data?.img} />
            </div>
            <Text title={data?.title} text={data?.subtitle} />
            <Text text={data?.createdAt} />
            {data?.blocks.map((block) => getArticleBlock(block.type, block))}
        </div>
    );
});

export default ArticleDetails;
