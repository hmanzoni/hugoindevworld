import React, { useReducer } from 'react';
import * as ico from '@iconscout/react-unicons';
import iconsContext from './iconsContext';
import iconsReducer from './iconsReducer';
import { GET_ICON, LOADING_FINISH } from '../types';

const IconsState = (props) => {

  const initialState = {
    icons: [],
    loading: true
  };

  const [state, dispatch] = useReducer(iconsReducer, initialState);

  const getIcons = (iconsArr) => {
    try {
      const elementArray = [];
      iconsArr.forEach(iconInfo => {
        if (iconInfo.iconName) {
          const i = ico[iconInfo.iconName];
          const iProps = iconInfo?.propsIcon || {};
          if (iconInfo.iconSize) i.defaultProps.size = iconInfo.iconSize;
          if (iconInfo.iconColor) i.defaultProps.color = iconInfo.iconColor;
          elementArray.push(React.createElement(i, iProps));
        }
      });
      // console.log(elementArray);
      dispatch({
        type: GET_ICON,
        payload: elementArray,
      });
      // console.log(state.icons);
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
      // console.log(state.loading);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <iconsContext.Provider
      value={{
        icons: state.icons,
        loading: state.loading,
        getIcons,
        loadingFinish
      }}
    >
      {props.children}
    </iconsContext.Provider>
  );
};

export default IconsState;