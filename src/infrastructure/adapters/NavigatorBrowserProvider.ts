import { BrowserProvider } from '@domain/ports/BrowserProvider';

export class NavigatorBrowserProvider implements BrowserProvider {
  getLanguagePrefix(): string {
    return navigator?.language?.split('-')[0] || '';
  }
}
