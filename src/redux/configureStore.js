import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { fetchInstalmentEpic } from './ducks/instalment';
import instalmentReducer from './ducks/instalment';

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(
    fetchInstalmentEpic
);

const rootReducer = combineReducers({
    // ...your other reducers here
    form: formReducer,
    instalment: instalmentReducer,
});

export default function configureStore() {
    const store = createStore(rootReducer, composeWithDevTools(
        applyMiddleware(epicMiddleware),
        // other store enhancers if any
    ));

    epicMiddleware.run(rootEpic);

    return store;
}
