import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState, store } from './Store';
import { categoryReducer } from './Reducer';
import Constants from '../utils/Constants';
import { randomReducer } from './RandomReducer';
import { searchReducer } from './SearchReducer';

/**
 * 
 * @param toggleLoading 
 * @returns 
 */
export const getCategories =
  (toggleLoading: any) => async (dispatch: any) => {
    toggleLoading();
    fetch(`https://api.chucknorris.io/jokes/categories`)
      .then((response) => {
        toggleLoading();
        if (response.status === 200) {
          response.json().then((data) => {
            store.dispatch(categoryReducer(data));
          });
        }
        return;
      })
      .catch((e) => {
        console.log(e.response.data)
        toggleLoading();
      });
  };

/**
 * 
 * @param toggleLoading 
 * @param category 
 * @returns 
 */
 export const selectJoke =
 (data:any) => async (dispatch: any) => {
    store.dispatch(randomReducer(data));
 };

 export const clearSuggestion =
 () => async (dispatch: any) => {
    store.dispatch(searchReducer([]));
 };


  export const getRandomJoke =
  (toggleLoading: any, category) => async (dispatch: any) => {
    toggleLoading();
    fetch(!category ? `https://api.chucknorris.io/jokes/random` : `https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => {
        toggleLoading();
        if (response.status === 200) {
          response.json().then((data) => {
            store.dispatch(randomReducer(data));
          });
        }
        return;
      })
      .catch((e) => {
        toggleLoading()
        console.log(e.response.data)
      });
  };

  export const searchJoke =
  (toggleLoading: any,query) => async (dispatch: any) => {
    toggleLoading();
    fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
      .then((response) => {
        toggleLoading();
        if (response.status === 200) {
          response.json().then((data) => {
            store.dispatch(searchReducer(data.result));
          });
        }
        return;
      })
      .catch((e) => {
        console.log(e.response.data)
        toggleLoading();
      });
  };