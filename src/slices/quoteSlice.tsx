import { createSlice , PayloadAction } from '@reduxjs/toolkit';


interface quoteState {
    quote : any;
    bookmarks : any[];
    loading : boolean;
}
const initialQuote = localStorage.getItem('quote');
const initialBookmarks = localStorage.getItem('quote_bookmarks');

const initialState : quoteState = {
    quote : initialQuote ? JSON.parse(initialQuote) : {},
    bookmarks : initialBookmarks ? JSON.parse(initialBookmarks)  : [],
    loading : true,
}

const quoteSlice = createSlice({
    name : 'quote',
    initialState: initialState,
    reducers : {
        setQuote(state : any , action : PayloadAction<any>) {
            state.quote = action.payload;
        },
        setBookmark(state : any , action : PayloadAction<any[]>) {
            state.bookmarks = action.payload;
            localStorage.setItem('quote_bookmarks', JSON.stringify(action.payload));
        },
        setLoading(state : any , action : PayloadAction<boolean>) {
            state.loading = action.payload;
        }
    },
});

export const { setQuote , setBookmark , setLoading } = quoteSlice.actions;

export default quoteSlice.reducer;