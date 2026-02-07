import { ContentRepository } from '@domain/ports/ContentRepository';
import { IconProvider } from '@domain/ports/IconProvider';
import { StorageProvider } from '@domain/ports/StorageProvider';
import { BrowserProvider } from '@domain/ports/BrowserProvider';
import {
  JsonContentRepository,
  UniconIconProvider,
  LocalStorageProvider,
  NavigatorBrowserProvider,
} from '@infrastructure/adapters';

export interface AppDependencies {
  contentRepo: ContentRepository;
  iconProvider: IconProvider;
  storageProvider: StorageProvider;
  browserProvider: BrowserProvider;
}

export function createDependencies(): AppDependencies {
  return {
    contentRepo: new JsonContentRepository(),
    iconProvider: new UniconIconProvider(),
    storageProvider: new LocalStorageProvider(),
    browserProvider: new NavigatorBrowserProvider(),
  };
}
