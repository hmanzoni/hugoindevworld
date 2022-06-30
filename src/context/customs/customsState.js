import React, { useReducer } from 'react';
import * as ico from '@iconscout/react-unicons';
import customsContext from './customsContext';
import customsReducer from './customsReducer';
import { GET_ICON, GET_ICON_ARR, LOADING_FINISH, CHANGE_LANG } from '../types';

const CustomsState = (props) => {

  const initialState = {
    icons: {},
    iconsArray: [],
    loading: true,
    isSetupLang: false,
    language: 'en'
  };
  const localStorageLangWord = 'selected-lang';

  const [state, dispatch] = useReducer(customsReducer, initialState);

  const getIcons = (iconsArr) => {
    try {
      const elementObj = {};
      iconsArr.forEach(iconInfo => {
        const nameIcon = iconInfo.iconName;
        if (nameIcon) {
          const classIcon = iconInfo?.propsIcon?.className || '';
          const keyObj = `${nameIcon}.${classIcon}`;
          const iconElement = ico[nameIcon];
          const iProps = iconInfo.propsIcon || {};
          if (iconInfo.iconSize) iconElement.defaultProps.size = iconInfo.iconSize;
          if (iconInfo.iconColor) iconElement.defaultProps.color = iconInfo.iconColor;
          const iconToAdd = { [keyObj] : React.createElement(iconElement, iProps) };
          Object.assign(elementObj, iconToAdd);
        }
      });
      dispatch({
        type: GET_ICON,
        payload: elementObj,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getIconsArr = (iconsArr) => {
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
        type: GET_ICON_ARR,
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

  const setDefaultLang = () => {
    let defaultLang = localStorage.getItem(localStorageLangWord);
    if (!defaultLang) {
      switch (navigator?.language?.split('-')[0]) {
        case 'it':
          defaultLang = 'it';
          break;
        case 'es':
          defaultLang = 'es';
          break;
        default:
          defaultLang = 'en';
          break;
      }
      // localStorage.setItem(localStorageLangWord, defaultLang);
    }
    changeLanguage(defaultLang);
  }

  const changeLanguage = (lang) => {
    // localStorage.setItem(localStorageLangWord, lang);
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
    <customsContext.Provider
      value={{
        icons: state.icons,
        iconsArray: state.iconsArray,
        loading: state.loading,
        language: state.language,
        isSetupLang: state.isSetupLang,
        getIcons,
        getIconsArr,
        loadingFinish,
        setDefaultLang,
        changeLanguage
      }}
    >
      {props.children}
    </customsContext.Provider>
  );
};

export default CustomsState;