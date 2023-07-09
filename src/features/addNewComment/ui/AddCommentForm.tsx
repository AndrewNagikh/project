import { fetchCommetById } from 'entities/Comment/model/services/fetchCommetById';
import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList }
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import {
    getAddCommentError,
    getAddCommentIsLoading,
    getAddCommentText,
} from '../model/selectors/addCommentFormSelectors';
import { addNewComment } from '../model/services/addNewComment';
import { addCommentFormActions, addCommentFormReducer } from '../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    className?: string;
    entityId?: string;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm: FC<AddCommentFormProps> = (props) => {
    const { className, entityId } = props;
    const { t } = useTranslation('comments');
    const commentText = useSelector(getAddCommentText);
    const error = useSelector(getAddCommentError);
    const isLoading = useSelector(getAddCommentIsLoading);
    const dispatch = useAppDispatch();
    const onAddCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setCommentText(value));
    }, []);
    const onAddComment = () => {
        dispatch(addNewComment({ entityId, text: commentText as string })).then(() => {
            dispatch(fetchCommetById(entityId as string));
        });
    };
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    value={commentText}
                    onChange={onAddCommentTextChange}
                    placeholder={t('Напишите комметарий')}
                    disabled={isLoading}
                />
                <Button onClick={onAddComment} disabled={isLoading}>
                    {t('Добавить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
