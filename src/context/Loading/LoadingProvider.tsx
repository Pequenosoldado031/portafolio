import { LoadingContext } from './LoadingContext';
import {useReducer} from "react";
import {LoadingReducer} from "./LoadingReducer";
import {LoadingInterface} from "../interfaces/Loading";
import ReactLoading from 'react-loading';

interface TabProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const LoadingProvider = ({children}: TabProviderProps) => {

  const initialState: LoadingInterface = {
    isLoading: false
  }

  const [loadingState, dispatch] = useReducer(LoadingReducer, initialState);


  const setLoading = (state: boolean) => {
    dispatch({
      type: 'SET_LOADING',
      payload: state
    });
  }

  return (
    <LoadingContext.Provider value={{loadingState, setLoading}}>
      {children}
      {loadingState.isLoading ? <div className={'loading-container'}>
        <div className={'loading-backdrop'}></div>
        <ReactLoading type={'spin'} color={'#56ccff'}/>
      </div> : null}
    </LoadingContext.Provider>
  )
}
