import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import initStore from './store';

const store = initStore();

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root')
    );
}

store.subscribe(render);
render();

registerServiceWorker();

store.subscribe(() => {
    console.log(store.getState());
});