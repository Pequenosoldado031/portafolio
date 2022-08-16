import {LoadingInterface} from "../interfaces/Loading";


type LoadingActions = {type: 'SET_LOADING'; payload: boolean}


export const LoadingReducer = (state: LoadingInterface, action: LoadingActions): LoadingInterface => {

  switch(action.type) {

    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state;
  }

}
