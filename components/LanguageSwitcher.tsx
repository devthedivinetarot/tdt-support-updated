'use client';

import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';
import { languages } from '@/lib/translations';

// Segmented EN / हिंदी / Hinglish pill — same markup and styling as thedivinetarotonline.com.
export default function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Select language"
      className={cn(
        'items-center gap-0.5 rounded-full border border-white/15 bg-white/5 p-0.5 backdrop-blur-sm',
        className ?? 'inline-flex'
      )}
    >
      {languages.map((l) => {
        const selected = l.code === language;
        return (
          <button
            key={l.code}
            type="button"
            aria-pressed={selected}
            aria-label={l.label}
            onClick={() => setLanguage(l.code)}
            className={cn(
              'rounded-full px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap',
              selected ? 'bg-[#FFD700] text-black' : 'text-white/70 hover:text-white hover:bg-white/10'
            )}
          >
            {l.short}
          </button>
        );
      })}
    </div>
  );
}
