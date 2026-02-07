import { createContext } from 'react';
import { ReactElement } from 'react';
import { Language } from '@domain/models/Language';
import { IconRegistry } from '@domain/models/Icon';
import { ContentRepository } from '@domain/ports/ContentRepository';

export interface AppContextValue {
  icons: IconRegistry;
  iconsArray: ReactElement[];
  loading: boolean;
  language: Language;
  isSetupLang: boolean;
  contentRepo: ContentRepository;
  getIcons: (iconsArr: import('@domain/models/Icon').IconConfig[]) => void;
  getIconsArr: (iconsArr: import('@domain/models/Icon').IconConfig[]) => void;
  loadingFinish: () => void;
  setDefaultLang: () => void;
  changeLanguage: (lang: string) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export default AppContext;
