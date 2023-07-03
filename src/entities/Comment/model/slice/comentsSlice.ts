import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { fetchCommetById } from '../services/fetchCommetById';
import { Comment, CommentsSliceSchema } from '../types/comment';

  type Book = { bookId: string; title: string }

const commentsAdapter = createEntityAdapter<Comment>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (comment: Comment) => comment.id,
});

export const getComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.comments || commentsAdapter.getInitialState(),
);

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState: commentsAdapter.getInitialState<CommentsSliceSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCommetById.fulfilled, (state, action: PayloadAction<Comment[]>) => {
            state.isLoading = false;
            commentsAdapter.setAll(state, action.payload);
        });
        builder.addCase(fetchCommetById.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCommetById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: commentReducers } = commentsSlice;
export const { actions: commentActions } = commentsSlice;

//   type RootState = ReturnType<typeof store.getState>

// console.log(store.getState().books);
// // { ids: [], entities: {} }

// // Can create a set of memoized selectors based on the location of this entity state
// const booksSelectors = booksAdapter.getSelectors<RootState>(
//     (state) => state.books,
// );

// // And then use the selectors to retrieve values
// const allBooks = booksSelectors.selectAll(store.getState());
