import { ReactElement } from 'react';
import { Language } from '@domain/models/Language';
import { IconRegistry } from '@domain/models/Icon';

export type AppAction =
  | { type: 'SET_ICONS'; payload: IconRegistry }
  | { type: 'SET_ICONS_ARRAY'; payload: ReactElement[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_LANGUAGE'; payload: Language };
