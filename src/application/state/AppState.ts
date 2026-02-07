import { Language } from '@domain/models/Language';
import { IconRegistry } from '@domain/models/Icon';

export interface AppState {
  icons: IconRegistry;
  iconsArray: unknown[];
  loading: boolean;
  isSetupLang: boolean;
  language: Language;
}

export const initialAppState: AppState = {
  icons: {},
  iconsArray: [],
  loading: true,
  isSetupLang: false,
  language: 'en',
};
