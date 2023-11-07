import { combineReducers } from 'redux';
import bookmarkReducer from '../slices/bookmarkSlice';


const rootReducer = combineReducers({
    bookmark: bookmarkReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;