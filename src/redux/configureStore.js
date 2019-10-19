import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import instalmentReducer, { fetchInstalmentEpic } from './ducks/instalment';
import interestRateReducer, { fetchInterestRateEpic } from './ducks/interestRate';

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(
    fetchInstalmentEpic,
    fetchInterestRateEpic
);

const rootReducer = combineReducers({
    // ...your other reducers here
    form: formReducer,
    instalment: instalmentReducer,
    interestRate: interestRateReducer,
});

export default function configureStore() {
    const store = createStore(rootReducer, composeWithDevTools(
        applyMiddleware(epicMiddleware),
        // other store enhancers if any
    ));

    epicMiddleware.run(rootEpic);

    return store;
}
