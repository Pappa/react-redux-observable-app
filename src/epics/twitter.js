import { ofType } from 'redux-observable';
import { map, switchMap, takeUntil, catchError } from 'rxjs/operators';
import { SEARCH_TWITTER, searchTwitterSuccessAction, SEARCH_TWITTER_CANCELLED, searchTwitterErrorAction } from '../actions';

const TWITTER_SEARCH_URL = 'http://localhost:5000/tweets/';

export const searchTwitterEpic = (action$, store, { ajax }) => action$.pipe(
    ofType(SEARCH_TWITTER),
    switchMap(({ payload }) => ajax.getJSON(TWITTER_SEARCH_URL + payload)
        .pipe(
            takeUntil(action$.ofType(SEARCH_TWITTER_CANCELLED)),
            map(response => searchTwitterSuccessAction(response)),
            catchError(error => searchTwitterErrorAction(error))
        )
    )
);