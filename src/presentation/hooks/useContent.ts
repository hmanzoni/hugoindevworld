import { Language } from '@domain/models/Language';

export function useContent<T>(data: Record<string, T>, language: Language): T {
  return data[language] || data['en'];
}
