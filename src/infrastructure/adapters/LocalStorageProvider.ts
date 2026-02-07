import { StorageProvider } from '@domain/ports/StorageProvider';

export class LocalStorageProvider implements StorageProvider {
  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}
