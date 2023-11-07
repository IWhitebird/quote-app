import { combineReducers } from 'redux';
import quoteReducer from '../slices/quoteSlice';


const rootReducer = combineReducers({
    quote: quoteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;