import React, { useReducer, ReactElement, ReactNode } from 'react';
import AppContext from './AppContext';
import appReducer from '@application/state/appReducer';
import { initialAppState } from '@application/state/AppState';
import { IconConfig } from '@domain/models/Icon';
import { isValidLanguage } from '@domain/models/Language';
import { ContentRepository } from '@domain/ports/ContentRepository';
import { IconProvider } from '@domain/ports/IconProvider';
import { StorageProvider } from '@domain/ports/StorageProvider';
import { BrowserProvider } from '@domain/ports/BrowserProvider';
import { detectLanguage } from '@application/useCases/DetectLanguage';

export interface AppProviderProps {
  children: ReactNode;
  contentRepo: ContentRepository;
  iconProvider: IconProvider;
  storageProvider: StorageProvider;
  browserProvider: BrowserProvider;
}

const AppProvider = ({
  children,
  contentRepo,
  iconProvider,
  storageProvider,
  browserProvider,
}: AppProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  const getIcons = (iconsArr: IconConfig[]) => {
    try {
      const registry = iconProvider.createIconRegistry(iconsArr);
      dispatch({ type: 'SET_ICONS', payload: registry });
    } catch (error) {
      console.log(error);
    }
  };

  const getIconsArr = (iconsArr: IconConfig[]) => {
    try {
      const elements = iconProvider.createIconArray(iconsArr);
      dispatch({ type: 'SET_ICONS_ARRAY', payload: elements });
    } catch (error) {
      console.log(error);
    }
  };

  const loadingFinish = () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: false });
    } catch (error) {
      console.log(error);
    }
  };

  const setDefaultLang = () => {
    const lang = detectLanguage(storageProvider, browserProvider);
    changeLanguage(lang);
  };

  const changeLanguage = (lang: string) => {
    try {
      const normalized = lang.toLowerCase();
      if (isValidLanguage(normalized)) {
        dispatch({ type: 'SET_LANGUAGE', payload: normalized });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        icons: state.icons,
        iconsArray: state.iconsArray as ReactElement[],
        loading: state.loading,
        language: state.language,
        isSetupLang: state.isSetupLang,
        contentRepo,
        getIcons,
        getIconsArr,
        loadingFinish,
        setDefaultLang,
        changeLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
