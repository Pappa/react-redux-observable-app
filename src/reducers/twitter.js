const initialState = {
    tweets: [],
    error: null
};

export const twitter = (state = initialState, action) => {
    console.log('reducer', action);
    switch (action.type) {
        case 'SEARCH_TWITTER_SUCCESS':
            return {
                ...state,
                tweets: action.payload,
                error: null
            }
        case 'SEARCH_TWITTER_ERROR':
            return {
                ...state,
                tweets: null,
                error: action.payload
            }
        default:
            return state;
    }
};