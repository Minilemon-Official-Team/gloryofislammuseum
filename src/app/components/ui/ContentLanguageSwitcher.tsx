import { useEffect, useState } from 'react';
import { useTranslationContext } from '../../context/TranslationContext';
import { LangCode } from '../../utils/translationConfig';

export function ContentLanguageSwitcher() {
    const { currentLang, setLanguage, languages, isLoading } = useTranslationContext();
    const current = languages.find(l => l.code === currentLang);
    const [isAnimating, setIsAnimating] = useState(false);
    const [switching, setSwitching] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 260);
        return () => clearTimeout(timer);
    }, [currentLang]);

    const handleChange = (lang: LangCode) => {
        setSwitching(true);
        setLanguage(lang);
        setTimeout(() => setSwitching(false), 1500);
    };

    return (
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow border border-gray-200">
            <span
                className={`text-lg transition-all duration-300 ease-out ${isAnimating ? 'opacity-0 -translate-y-1 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}
            >
                {current?.flag}
            </span>
            <span className="text-sm font-semibold text-gray-600">🔊</span>
            <select
                value={currentLang}
                onChange={(e) => handleChange(e.target.value as LangCode)}
                disabled={isLoading || switching}
                className={`text-sm font-medium text-gray-800 bg-transparent border-none focus:outline-none transition-all duration-300 ${isAnimating ? 'opacity-80' : 'opacity-100'} ${switching ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.flag} {lang.label}
                    </option>
                ))}
            </select>
            {isLoading && <span className="text-xs text-amber-500 animate-pulse">•••</span>}
        </div>
    );
}

