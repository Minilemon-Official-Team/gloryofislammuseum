import translate from 'translate';

// Configure the translate library
translate.engine = 'google';
// Free tier - uses Google Translate's free API
translate.key = '';

// Simple in-memory cache for translations
const translationCache: Map<string, Map<string, string>> = new Map();

// Language code mapping to Google Translate format
const languageMap: Record<string, string> = {
    'ID': 'id',
    'EN': 'en',
    'JP': 'ja',
    'KR': 'ko',
    'CN': 'zh-CN',
    'ES': 'es',
    'FR': 'fr',
    'DE': 'de',
    'IT': 'it',
    'NL': 'nl',
    'RU': 'ru',
    'AR': 'ar',
};

/**
 * Translate a single text string
 */
export async function translateText(
    text: string,
    targetLang: string,
    sourceLang: string = 'id'
): Promise<string> {
    if (!text || text.trim() === '') return '';
    if (targetLang === sourceLang) return text;

    const cacheKey = `${sourceLang}-${targetLang}`;

    // Check cache first
    if (!translationCache.has(cacheKey)) {
        translationCache.set(cacheKey, new Map());
    }

    const cache = translationCache.get(cacheKey)!;
    if (cache.has(text)) {
        return cache.get(text)!;
    }

    try {
        const targetLangCode = languageMap[targetLang] || targetLang.toLowerCase();
        const sourceLangCode = languageMap[sourceLang] || sourceLang.toLowerCase();

        const translated = await translate(text, {
            from: sourceLangCode,
            to: targetLangCode
        });

        // Cache the result
        cache.set(text, translated);

        return translated;
    } catch (error) {
        console.error('Translation error:', error);
        return text; // Return original text if translation fails
    }
}

/**
 * Translate multiple texts in batch
 */
export async function translateBatch(
    texts: string[],
    targetLang: string,
    sourceLang: string = 'id'
): Promise<string[]> {
    if (targetLang === sourceLang) return texts;

    const translations = await Promise.all(
        texts.map(text => translateText(text, targetLang, sourceLang))
    );

    return translations;
}

/**
 * Clear translation cache
 */
export function clearTranslationCache(): void {
    translationCache.clear();
}

/**
 * Preload translations for a list of texts
 */
export async function preloadTranslations(
    texts: string[],
    targetLang: string,
    sourceLang: string = 'id'
): Promise<void> {
    if (targetLang === sourceLang) return;

    // Translate and cache all texts
    await translateBatch(texts, targetLang, sourceLang);
}

