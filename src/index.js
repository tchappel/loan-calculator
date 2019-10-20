import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from "react-intl";
import configureStore from './redux/configureStore';
import { messages } from './translations/configureMessages';
import { App } from './containers';

const store = configureStore();

const language = navigator.language.split(/[-_]/)[0];  // language without region code

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale={language} messages={messages[language]}>
            <App />
        </IntlProvider>
    </Provider>
    , document.getElementById('root')
);
