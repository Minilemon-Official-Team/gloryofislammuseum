import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { LANGUAGES, LangCode, buildAudioUrl, buildTranslationUrl } from '../utils/translationConfig';

interface TranslationContextType {
    currentLang: LangCode;
    setLanguage: (lang: LangCode) => void;
    languages: typeof LANGUAGES;
    isLoading: boolean;
    audioStatus: Record<string, 'loading' | 'ready' | 'error'>;
    setAudioStatus: (key: string, status: 'loading' | 'ready' | 'error') => void;
    getDescription: (zoneName: string, indonesianText: string) => string;
    getAudio: (zoneName: string) => string;
    prefetchTranslation: (zoneName: string, indonesianText: string) => void;
}

const TranslationContext = createContext<TranslationContextType | null>(null);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
    const [currentLang, setCurrentLang] = useState<LangCode>('id');
    const [isLoading, setIsLoading] = useState(false);
    const [audioStatus, setAudioStatusMap] = useState<Record<string, 'loading' | 'ready' | 'error'>>({});
    const cache = useRef<Record<string, string>>({});

    const setLanguage = useCallback((lang: LangCode) => setCurrentLang(lang), []);

    const setAudioStatus = useCallback((key: string, status: 'loading' | 'ready' | 'error') => {
        setAudioStatusMap(prev => ({ ...prev, [key]: status }));
    }, []);

    const prefetchTranslation = useCallback(async (zoneName: string, indonesianText: string) => {
        if (currentLang === 'id') return;
        const cacheKey = `${currentLang}_${zoneName}`;
        if (cache.current[cacheKey]) return;

        try {
            setIsLoading(true);
            const url = buildTranslationUrl(currentLang, zoneName);
            const res = await fetch(url, { signal: AbortSignal.timeout(3000) });
            if (!res.ok) throw new Error('not found');
            const data = await res.json();
            cache.current[cacheKey] = data.translated;
        } catch {
            cache.current[cacheKey] = indonesianText; // fallback
        } finally {
            setIsLoading(false);
        }
    }, [currentLang]);

    const getDescription = useCallback((zoneName: string, indonesianText: string): string => {
        if (currentLang === 'id') return indonesianText;
        const cacheKey = `${currentLang}_${zoneName}`;
        return cache.current[cacheKey] ?? indonesianText;
    }, [currentLang]);

    // All 12 languages get audio from R2 — no special case for Indonesian
    const getAudio = useCallback((zoneName: string): string => {
        return buildAudioUrl(currentLang, zoneName);
    }, [currentLang]);

    return (
        <TranslationContext.Provider value={{
            currentLang, setLanguage, languages: LANGUAGES,
            isLoading, audioStatus, setAudioStatus, getDescription, getAudio, prefetchTranslation,
        }}>
            {children}
        </TranslationContext.Provider>
    );
}

export function useTranslationContext() {
    const ctx = useContext(TranslationContext);
    if (!ctx) throw new Error('Must be inside TranslationProvider');
    return ctx;
}

