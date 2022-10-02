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
export const getCategories = (toggleLoading: Function, handleError: Function) => async (dispatch: any) => {
    toggleLoading(true);
    fetch(`https://api.chucknorris.io/jokes/categories`)
      .then((response) => {
        toggleLoading(false);
        if (response.status === 200) {
          response.json().then((data) => {
            store.dispatch(categoryReducer(data));
          });
        }
        return;
      })
      .catch((e) => {
        handleError("Somethin Went wrong while fetchind data")
        toggleLoading(false);
      });
  };

/**
 * 
 * @param toggleLoading 
 * @param category 
 * @returns 
 */
 export const selectJoke = (data:any) => async (dispatch: any) => {
    store.dispatch(randomReducer(data));
 };

 export const clearSuggestion =
 () => async (dispatch: any) => {
    store.dispatch(searchReducer([]));
 };


  export const getRandomJoke =
  (toggleLoading: any, category, handleError) => async (dispatch: any) => {
    toggleLoading(true);
    fetch(!category ? `https://api.chucknorris.io/jokes/random` : `https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => {
        toggleLoading(false);
        if (response.status === 200) {
          response.json().then((data) => {
            store.dispatch(randomReducer(data));
          });
        }else{
            handleError("Something went wrong while fetching data")
        }
        return;
      })
      .catch((e) => {
        handleError("Something went wrong while fetching data")
        toggleLoading(false)
    });
  };

  export const searchJoke = (toggleLoading: any,query, handleError) => async (dispatch: any) => {
    toggleLoading();
    fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
      .then((response) => {
        toggleLoading();
        if (response.status === 200) {
          response.json().then((data) => {
            if(data.result.length > 0)
            store.dispatch(searchReducer(data.result));
            else handleError(`No result was found with the name ${query}`)
          });
        }
        else {
            handleError("Something went wrong while fetching data")
        }
        return;
      })
      .catch((e) => {
        handleError("Something went wrong while fetching data")
        toggleLoading();
      });
  };