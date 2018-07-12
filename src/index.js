import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import initStore from './store';
import { ajax } from 'rxjs/ajax';

const store = initStore({ 
    ajax
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();

store.subscribe(() => {
    console.log('store changed', store.getState());
});