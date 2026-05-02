import { useEffect, useRef, useState } from 'react';
import { useTranslationContext } from '../../context/TranslationContext';
import { toZoneKey } from '../../utils/translationConfig';

interface AudioPlayerProps {
    zoneName: string;
}

export function AudioPlayer({ zoneName }: AudioPlayerProps) {
    const { currentLang, getAudio, setAudioStatus } = useTranslationContext();
    const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
    const audioRef = useRef<HTMLAudioElement>(null);
    const zoneKey = toZoneKey(zoneName);
    const statusKey = `${zoneKey}-${currentLang}`;
    const audioUrl = getAudio(zoneName);

    useEffect(() => {
        setStatus('loading');
        setAudioStatus(statusKey, 'loading');
    }, [currentLang, zoneName, statusKey, setAudioStatus]);

    useEffect(() => {
        setAudioStatus(statusKey, status);
    }, [status, statusKey, setAudioStatus]);

    useEffect(() => {
        // Indonesian audio preloads immediately (local file)
        // Other languages show loading until R2 responds
        if (currentLang === 'id') {
            const timer = setTimeout(() => {
                setStatus((prev) => (prev === 'loading' ? 'ready' : prev));
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [currentLang, zoneName]);

    return (
        <div className="flex w-full flex-col gap-2">
            <div className="flex items-center gap-2 text-sm">
                {status === 'loading' && (
                    <span className="flex items-center gap-1.5 text-amber-500">
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Memuat audio...
                    </span>
                )}
                {status === 'ready' && (
                    <span className="flex items-center gap-1.5 text-green-500">
                        🎵 Audio siap diputar
                    </span>
                )}
                {status === 'error' && (
                    <span className="flex items-center gap-1.5 text-red-400">
                        ⚠️ Audio tidak tersedia
                    </span>
                )}
            </div>

            <audio
                ref={audioRef}
                key={statusKey}
                controls
                src={audioUrl}
                className={`w-full ${status === 'loading' ? 'pointer-events-none opacity-40' : 'opacity-100'}`}
                onCanPlayThrough={() => setStatus('ready')}
                onError={() => setStatus('error')}
                onWaiting={() => setStatus('loading')}
                preload="metadata"
            >
                Your browser does not support audio.
            </audio>
        </div>
    );
}
