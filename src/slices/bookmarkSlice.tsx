import { createSlice , PayloadAction } from '@reduxjs/toolkit';


interface bookmarkState {
    bookmarks : string[];
}

const initialBookmarks = localStorage.getItem('quote_bookmarks');

const initialState : bookmarkState = {
    bookmarks : initialBookmarks ? JSON.parse(initialBookmarks)  : [],
}

const bookmarkSlice = createSlice({
    name : 'bookmark',
    initialState: initialState,
    reducers : {
        setBookmark(state : any , action : PayloadAction<string[]>) {
            state.bookmarks = action.payload;
            localStorage.setItem('quote_bookmarks', JSON.stringify(action.payload));
        },
    },
});

export const {  } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;