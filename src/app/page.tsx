'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { flowers, type Flower } from '@/lib/flowers';

function getRandomFlower(exclude?: number): Flower {
  const idx = exclude === undefined
    ? Math.floor(Math.random() * flowers.length)
    : (exclude + 1 + Math.floor(Math.random() * (flowers.length - 1))) % flowers.length;
  return flowers[idx];
}

export default function FlowerPage() {
  const [flower, setFlower] = useState<Flower | null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [fading, setFading] = useState(true);
  const prevIdx = useRef<number | undefined>(undefined);
  const currentIdx = useRef<number | undefined>(undefined);

  const showNewFlower = useCallback(() => {
    setFading(false);
    setTimeout(() => {
      const f = getRandomFlower(prevIdx.current);
      currentIdx.current = flowers.indexOf(f);
      prevIdx.current = currentIdx.current;
      setFlower(f);
      setImgLoaded(false);
      setImgError(false);
      setFading(true);
    }, 400);
  }, []);

  // Initial flower on mount
  useEffect(() => {
    const f = getRandomFlower();
    currentIdx.current = flowers.indexOf(f);
    prevIdx.current = currentIdx.current;
    setFlower(f);
  }, []);

  if (!flower) {
    return (
      <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-stone-300 border-t-stone-700 rounded-full animate-spin" />
      </div>
    );
  }

  const poemLines = flower.poem.split('\n');

  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col">
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
        <div
          className={`w-full max-w-lg transition-all duration-500 ease-out ${
            fading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {/* Flower image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 shadow-lg shadow-stone-900/8 mb-8">
            {!imgLoaded && !imgError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-6 h-6 border-2 border-stone-300 border-t-stone-700 rounded-full animate-spin" />
                  <span className="text-xs text-stone-400 tracking-wide">Loading...</span>
                </div>
              </div>
            )}
            {imgError ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-stone-400">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
                <span className="text-sm">Image unavailable</span>
              </div>
            ) : (
              <img
                src={flower.image}
                alt={`${flower.name} (${flower.latin}) — public domain photograph`}
                className={`w-full h-full object-cover transition-opacity duration-700 ${
                  imgLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
              />
            )}
            {/* Source attribution */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/30 to-transparent px-4 py-3">
              <span className="text-[10px] text-white/80 tracking-wide">
                Wikimedia Commons — Public Domain
              </span>
            </div>
          </div>

          {/* Flower names */}
          <div className="text-center mb-6">
            <h1 className="text-3xl sm:text-4xl font-serif text-stone-900 tracking-tight mb-1">
              {flower.name}
            </h1>
            <p className="text-sm sm:text-base text-stone-500 italic tracking-wide">
              {flower.latin}
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-stone-200" />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a8a29e" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
            <div className="flex-1 h-px bg-stone-200" />
          </div>

          {/* Poem */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-stone-100 mb-8">
            <blockquote className="space-y-0">
              {poemLines.map((line, i) => (
                <p
                  key={i}
                  className={`font-serif text-stone-700 leading-relaxed ${
                    i === 0 ? 'text-base sm:text-lg font-medium' : 'text-sm sm:text-base'
                  } ${line.trim() === '' ? 'h-3' : ''}`}
                >
                  {line.trim() === '' ? '\u00A0' : line}
                </p>
              ))}
            </blockquote>
            <div className="mt-5 pt-4 border-t border-stone-100">
              <cite className="not-italic block text-xs sm:text-sm text-stone-500">
                {flower.poet}, {flower.year}
                {flower.work && (
                  <span className="text-stone-400 block mt-0.5 italic">
                    {flower.work}
                  </span>
                )}
              </cite>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button
              onClick={showNewFlower}
              className="group flex items-center gap-2.5 px-6 py-3 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 active:scale-[0.98] transition-all shadow-md shadow-stone-900/15 cursor-pointer"
            >
              <span className="inline-block transition-transform group-hover:rotate-12">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10" />
                  <path d="M12 2v10l6.5 6.5" />
                </svg>
              </span>
              Another Flower
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-[11px] text-stone-400 tracking-wide">
        Flowers &amp; Poetry — {flowers.length} blooms in the collection
      </footer>
    </div>
  );
}
