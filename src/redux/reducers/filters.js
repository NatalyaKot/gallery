
const initialState = {
    sortyAuthor: 'author',
    listAuthor: 0,
};


const filters = (state = initialState, action) => {
        if(action.type === 'SET_SORT_AUTHOR') {
            return {
                ...state,
                sortyAuthor: action.payload,
            };
        }
            if(action.type === 'SET_SORT_GALLERY') {
            return {
                ...state,
                listAuthor: action.payload,
            };
        }

        return state;
};

export default filters;