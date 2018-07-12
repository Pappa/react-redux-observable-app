
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { ajax } from 'rxjs/ajax';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import * as reducers from './reducers';
import * as epics from './epics';

const composeMiddleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware({
    dependencies: {
        ajax: ajax
    }
});

export default function initStore() {
    const store = createStore(
        combineReducers(reducers),
        composeMiddleware(applyMiddleware(epicMiddleware))
    );

    epicMiddleware.run(combineEpics(...Object.values(epics)));

  return store;
}