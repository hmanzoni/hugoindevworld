import { ReactElement } from 'react';
import { IconConfig, IconRegistry } from '../models/Icon';

export interface IconProvider {
  createIconRegistry(configs: IconConfig[]): IconRegistry;
  createIconArray(configs: IconConfig[]): ReactElement[];
}
