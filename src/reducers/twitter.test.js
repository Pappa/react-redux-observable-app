import { twitter } from './twitter';

it('sets tweets on the state', () => {
    const action = {
        type: 'SEARCH_TWITTER_SUCCESS',
        payload: [{ id: 123, text: 'abc' }]
    };
    const expected = {
        tweets: [{ id: 123, text: 'abc' }],
        error: null
    };
    const result = twitter(null, action);

    expect(result).toEqual(expected);
});