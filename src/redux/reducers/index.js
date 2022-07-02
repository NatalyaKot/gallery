import { combineReducers } from 'redux';
import filtersReduser from './filters';
import galleryReduser from './gallery';

const rootReducer = combineReducers ({
    filters: filtersReduser,
    gallery: galleryReduser,
});

export default rootReducer;