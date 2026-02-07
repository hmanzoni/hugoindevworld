import { ReactElement } from 'react';
import { IconConfig, IconRegistry } from '@domain/models/Icon';
import { IconProvider } from '@domain/ports/IconProvider';

export function getIconRegistry(
  provider: IconProvider,
  configs: IconConfig[]
): IconRegistry {
  return provider.createIconRegistry(configs);
}

export function getIconArray(
  provider: IconProvider,
  configs: IconConfig[]
): ReactElement[] {
  return provider.createIconArray(configs);
}
