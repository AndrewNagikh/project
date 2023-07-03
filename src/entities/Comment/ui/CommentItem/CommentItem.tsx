import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Avatar from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Sceleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentItem.module.scss';

interface CommentItemProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

const CommentItem: FC<CommentItemProps> = memo((props: CommentItemProps) => {
    const { className, comment, isLoading } = props;
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentItem, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width="10%" height={30} className={cls.username} />
                </div>
                <Skeleton width="100%" height={50} className={cls.text} />
            </div>
        );
    }
    return (
        <div className={classNames(cls.CommentItem, {}, [className])}>
            <div className={cls.header}>
                {comment?.user?.avatar && <Avatar size={30} src={comment?.user?.avatar} />}
                <Text title={comment?.user?.username} className={cls.username} />
            </div>
            <Text text={comment?.text} className={cls.text} />
        </div>
    );
});

export default CommentItem;
