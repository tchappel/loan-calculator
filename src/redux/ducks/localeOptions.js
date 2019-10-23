import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { path } from 'ramda';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { combineReducers } from 'redux';

export const FETCH_LOCALE_OPTIONS_REQUEST = 'FETCH_LOCALE_OPTIONS_REQUEST';
export const FETCH_LOCALE_OPTIONS_SUCCESS = 'FETCH_LOCALE_OPTIONS_SUCCESS';
export const FETCH_LOCALE_OPTIONS_FAILURE = 'FETCH_LOCALE_OPTIONS_FAILURE';

// actions
export const fetchLocaleOptionsRequest = () => ({
    type: FETCH_LOCALE_OPTIONS_REQUEST,
});

export const fetchLocaleOptionsSuccess = localeOptions => ({
    type: FETCH_LOCALE_OPTIONS_SUCCESS,
    payload: localeOptions
});

export const fetchLocaleOptionsFailure = error => ({
    type: FETCH_LOCALE_OPTIONS_FAILURE,
    payload: error
});

export const fetchLocaleOptionsEpic = (action$) => action$.pipe(
    ofType(FETCH_LOCALE_OPTIONS_REQUEST),
    switchMap(() => {
        return ajax.getJSON('http://localhost:8080/api/locale-options')
            .pipe(
                map(response => {
                    const {localeOptions} = response.payload;
                    return fetchLocaleOptionsSuccess(localeOptions);
                }),
                catchError(error => of(fetchLocaleOptionsFailure(error)))
            );
    })
);

// reducers to be combined
export const isLoadingReducer = (state = false, action) => {
    if (action.type === FETCH_LOCALE_OPTIONS_REQUEST) return true;
    if (action.type === FETCH_LOCALE_OPTIONS_SUCCESS) return false;
    return state;
};

export const errorReducer = (state = null, action) => {
    if (action.type === FETCH_LOCALE_OPTIONS_FAILURE) return action.payload;
    return state;
};

export const dataReducer = (state = [], action) => {
    if (action.type === FETCH_LOCALE_OPTIONS_SUCCESS) return action.payload;
    return state;
};

// selectors
export const selectLocaleOptions = path(['localeOptions']);

// reducer
export default combineReducers({
    isLoading: isLoadingReducer,
    error: errorReducer,
    data: dataReducer,
});
