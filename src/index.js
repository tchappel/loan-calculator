import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App, IntlProviderConfigurer } from './containers';
import { store } from './redux/configureStore';

ReactDOM.render(
    <Provider store={store}>
        <IntlProviderConfigurer>
            <App />
        </IntlProviderConfigurer>
    </Provider>
    , document.getElementById('root')
);
