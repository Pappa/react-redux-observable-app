export const SEARCH_TWITTER = 'SEARCH_TWITTER';
export const SEARCH_TWITTER_SUCCESS = 'SEARCH_TWITTER_SUCCESS';
export const SEARCH_TWITTER_ERROR = 'SEARCH_TWITTER_ERROR';
export const SEARCH_TWITTER_CANCELLED = 'SEARCH_TWITTER_CANCELLED';

export const searchTwitterAction = (query) => ({
    type: SEARCH_TWITTER,
    payload: query
});

export const searchTwitterSuccessAction = (response) => ({
    type: SEARCH_TWITTER_SUCCESS,
    payload: response
});

export const searchTwitterErrorAction = (error) => ({
    type: SEARCH_TWITTER_ERROR,
    payload: error
});

export const searchTwitterCancelledAction = () => ({
    type: SEARCH_TWITTER_CANCELLED
});