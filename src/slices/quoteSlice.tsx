import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface quoteState {
  quote: any;
  bookmarks: any[];
  loading: boolean;
  tags: any[];
}

const initialQuote = localStorage.getItem('quote');
const initialBookmarks = localStorage.getItem('quote_bookmarks');
const initialTags = localStorage.getItem('quote_tags');

const initialState: quoteState = {
  quote: initialQuote ? JSON.parse(initialQuote) : {},
  bookmarks: initialBookmarks ? JSON.parse(initialBookmarks) : [],
  tags: initialTags ? JSON.parse(initialTags) : [],
  loading: initialQuote !== null ? true : false,
};

const quoteSlice = createSlice({
  name: 'quote',
  initialState: initialState,
  reducers: {
    setQuote(state: any, action: PayloadAction<any>) {
      state.quote = action.payload;
      localStorage.setItem('quote', JSON.stringify(action.payload));
    },
    setBookmark(state: any, action: PayloadAction<any[]>) {
      state.bookmarks = action.payload;
      localStorage.setItem('quote_bookmarks', JSON.stringify(action.payload));
    },
    setTags(state: any, action: PayloadAction<any[]>) {
      state.tags = action.payload;
      localStorage.setItem('quote_tags', JSON.stringify(action.payload));
    },
    setLoading(state: any, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setQuote, setBookmark, setTags, setLoading } = quoteSlice.actions;

export default quoteSlice.reducer;
