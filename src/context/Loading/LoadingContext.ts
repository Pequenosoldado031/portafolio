
import {createContext} from 'react';
import {LoadingInterface} from "../interfaces/Loading";

export interface LoadingContextProps {
  loadingState: LoadingInterface;
  setLoading: (state: boolean) => void;
}


export const LoadingContext = createContext<LoadingContextProps>({} as LoadingContextProps);

