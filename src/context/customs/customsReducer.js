import { GET_ICON, LOADING_FINISH, CHANGE_LANG } from '../types';

const reducerFn = (state, action) => {
  switch (action.type) {
    case GET_ICON:
      return {
        ...state,
        icons: action.payload
      };
    case LOADING_FINISH:
      return {
        ...state,
        loading: action.payload
      };
    case CHANGE_LANG:
      return {
        ...state,
        isSetupLang: true,
        language: action.payload
      };
    default:
      return state;
  }
};

export default reducerFn;