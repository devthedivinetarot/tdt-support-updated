'use client';

<<<<<<< HEAD
=======
import { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown, Globe } from 'lucide-react';
>>>>>>> 3f71990febd8e46b0c8d2cc784519dde39bdaa5f
import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';
import { languages } from '@/lib/translations';

<<<<<<< HEAD
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
=======
export default function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const current = languages.find((l) => l.code === language) ?? languages[0];

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent | TouchEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onPointer);
    document.addEventListener('touchstart', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointer);
      document.removeEventListener('touchstart', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn('relative', className ?? 'inline-flex')}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${t('lang.label')}: ${current.label}`}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
      >
        <Globe className="h-4 w-4 text-gold/80" aria-hidden="true" />
        <span>{current.label}</span>
        <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', open && 'rotate-180')} aria-hidden="true" />
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={t('lang.label')}
          className="absolute right-0 top-full z-[70] mt-2 min-w-[10rem] overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-1 shadow-2xl max-xl:left-1/2 max-xl:right-auto max-xl:-translate-x-1/2"
        >
          {languages.map((l) => {
            const selected = l.code === language;
            return (
              <li key={l.code} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => {
                    setLanguage(l.code);
                    setOpen(false);
                  }}
                  className={cn(
                    'flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors',
                    selected ? 'bg-gold/10 text-gold' : 'text-white/75 hover:bg-white/5 hover:text-white'
                  )}
                >
                  {l.label}
                  {selected && <Check className="h-4 w-4" aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
>>>>>>> 3f71990febd8e46b0c8d2cc784519dde39bdaa5f
    </div>
  );
}
