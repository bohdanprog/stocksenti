import {instrumentsAPI} from "../api/Api";
import {EntityConfigListType} from "../type/types";

const SET_STOCKS = 'SET_STOCKS'

let initialState = {
  entityConfigList: [] as Array <EntityConfigListType>
};

export type InitialStateType = typeof initialState;

const instrumentsReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
      case SET_STOCKS: {
        return {
          //take old users and will add new users who come with action
          ...state,
          entityConfigList: action.entityConfigListAPI,
        }
      }
      default:
        return state;
    }
  }
;

//action creator
export const setStocks = (entityConfigListAPI:any) => (
  {type: SET_STOCKS, entityConfigListAPI});

// thunk creator

export const requestStocks = () => {
  return (dispatch:any) => {
    instrumentsAPI.entitiesConfigurationController()
      .then(response => dispatch(setStocks(response.data))
    )
  };
};

export default instrumentsReducer;
