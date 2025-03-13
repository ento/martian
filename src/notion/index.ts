import {supportedCodeLang} from './common.js';
import lm from './languageMap.json' with { type: 'json' };

export * from './blocks.js';
export * from './common.js';

export function parseCodeLanguage(
  lang?: string
): supportedCodeLang | undefined {
  return lang
    ? (lm as Record<string, supportedCodeLang>)[lang.toLowerCase()]
    : undefined;
}
