import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import CommentItem from '../CommentItem/CommentItem';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
    error?: string;
}

const CommentList: FC<CommentListProps> = memo((props: CommentListProps) => {
    const {
        className, comments, isLoading, error,
    } = props;
    const { t } = useTranslation();
    if (error) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <Text text={error} textAlign="center" />
            </div>
        );
    }
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments ? comments.length > 0
            && comments
                .map((comment) => (
                    <CommentItem
                        key={comment.id}
                        className={cls.commentItem}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
                : <Text text={t('Нет комментариев')} />}
        </div>
    );
});

export default CommentList;
