import React, { useReducer } from 'react';
import * as ico from '@iconscout/react-unicons';
import iconsContext from './iconsContext';
import iconsReducer from './iconsReducer';
import { GET_ICON, LOADING_FINISH, CHANGE_LANG } from '../types';

const IconsState = (props) => {

  const initialState = {
    icons: [],
    loading: true,
    language: 'en'
  };

  const [state, dispatch] = useReducer(iconsReducer, initialState);

  const getIcons = (iconsArr) => {
    try {
      const elementArray = [];
      iconsArr.forEach(iconInfo => {
        if (iconInfo.iconName) {
          const i = ico[iconInfo.iconName];
          const iProps = iconInfo.propsIcon || {};
          if (iconInfo.iconSize) i.defaultProps.size = iconInfo.iconSize;
          if (iconInfo.iconColor) i.defaultProps.color = iconInfo.iconColor;
          elementArray.push(React.createElement(i, iProps));
        }
      });
      dispatch({
        type: GET_ICON,
        payload: elementArray,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const loadingFinish = () => {
    try {      
      dispatch({
        type: LOADING_FINISH,
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const changeLanguage = (lang) => {
    try {
      dispatch({
        type: CHANGE_LANG,
        payload: lang.toLocaleLowerCase(),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <iconsContext.Provider
      value={{
        icons: state.icons,
        loading: state.loading,
        language: state.language,
        getIcons,
        loadingFinish,
        changeLanguage
      }}
    >
      {props.children}
    </iconsContext.Provider>
  );
};

export default IconsState;