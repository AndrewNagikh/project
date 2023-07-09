import { EntityState } from '@reduxjs/toolkit';
import { User } from 'entities/User';

export interface Comment {
    id: string;
    user?: User;
    text: string;
    entityId: string;
}

export interface CommentsSliceSchema extends EntityState<Comment> {
    isLoading?: boolean;
    error?: string;
    ids: string[];
}
