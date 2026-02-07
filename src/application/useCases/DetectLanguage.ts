import { Language, isValidLanguage, DEFAULT_LANGUAGE } from '@domain/models/Language';
import { StorageProvider } from '@domain/ports/StorageProvider';
import { BrowserProvider } from '@domain/ports/BrowserProvider';

const STORAGE_KEY = 'selected-lang';

export function detectLanguage(
  storage: StorageProvider,
  browser: BrowserProvider
): Language {
  const stored = storage.get(STORAGE_KEY);
  if (stored && isValidLanguage(stored)) {
    return stored;
  }

  const browserPrefix = browser.getLanguagePrefix();
  if (isValidLanguage(browserPrefix)) {
    return browserPrefix;
  }

  return DEFAULT_LANGUAGE;
}
