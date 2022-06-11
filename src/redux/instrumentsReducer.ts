import {instrumentsAPI} from "../api/Api";
import {EntityConfigListType} from "../type/types";
import {AppStateType, InferActionsTypes} from "./ReduxStore";
import {ThunkAction} from "redux-thunk";

let initialState = {
  entityConfigList: [] as Array <EntityConfigListType>
};

type InitialState = typeof initialState;

const instrumentsReducer = (state = initialState, action:ActionsTypes) => {
    switch (action.type) {
      case 'SET_STOCKS': {
        return {
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
type ActionsTypes = InferActionsTypes<typeof actions>
const actions = {
  setInstruments:(entityConfigListAPI:InitialState) => ({type: 'SET_STOCKS', entityConfigListAPI} as const)
}
// thunk creator

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestInstruments = (): ThunkType => {
  return async (dispatch) => {
    let response = await instrumentsAPI.entitiesConfigurationController()
      dispatch(actions.setInstruments(response.data));
  };
};

export default instrumentsReducer;
