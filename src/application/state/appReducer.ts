import { AppState } from './AppState';
import { AppAction } from './AppActions';

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_ICONS':
      return { ...state, icons: action.payload };
    case 'SET_ICONS_ARRAY':
      return { ...state, iconsArray: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_LANGUAGE':
      return { ...state, isSetupLang: true, language: action.payload };
    default:
      return state;
  }
};

export default appReducer;
