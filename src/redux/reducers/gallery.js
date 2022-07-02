
const initialState = {
    items: [],
    isLoaded: false,
};


const gallery = (state = initialState, action) => {
        if(action.type === 'SET_GALLERY') {
            return {
                ...state,
                items: action.payload,
            };
        }
        return state;
};

export default gallery;