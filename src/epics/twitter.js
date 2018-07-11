import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, takeUntil, catchError } from 'rxjs/operators';
import { SEARCH_TWITTER, searchTwitterSuccessAction, SEARCH_TWITTER_CANCELLED, searchTwitterErrorAction } from '../actions';

const TWITTER_SEARCH_URL = 'http://localhost:5000/tweets/';

export const searchTwitterEpic = action$ => action$.pipe(
    ofType(SEARCH_TWITTER),
    switchMap(({ payload }) => ajax.getJSON(TWITTER_SEARCH_URL + payload)
        .pipe(
            map(response => searchTwitterSuccessAction(response)),
            takeUntil(action$.ofType(SEARCH_TWITTER_CANCELLED)),
            catchError(error => searchTwitterErrorAction(error))
        )
    )
);