export type Language = 'en' | 'es' | 'it';

export const SUPPORTED_LANGUAGES: Language[] = ['en', 'es', 'it'];
export const DEFAULT_LANGUAGE: Language = 'en';

export function isValidLanguage(lang: string): lang is Language {
  return SUPPORTED_LANGUAGES.includes(lang as Language);
}
