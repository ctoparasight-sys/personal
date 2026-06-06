"use client";

import { useState } from "react";

const heroText = "Hi, I'm Ido Bachelet";

export default function FontDemo() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <h2 className="font-heading text-xl text-muted mb-2">
        Hand-drawn ink font variations
      </h2>
      <p className="text-sm text-muted mb-12">
        Based on Space Grotesk — click one to select it
      </p>

      {/* SVG Filters */}
      <svg width="0" height="0" className="absolute">
        <defs>
          {/* Version 1: Rough Ink — subtle wobble, ink bleed edges */}
          <filter id="rough-ink" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.04"
              numOctaves="4"
              seed="1"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="3"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feMorphology
              operator="dilate"
              radius="0.4"
              in="displaced"
              result="thickened"
            />
            <feGaussianBlur stdDeviation="0.3" in="thickened" result="blurred" />
            <feComponentTransfer in="blurred" result="sharpened">
              <feFuncA type="discrete" tableValues="0 1" />
            </feComponentTransfer>
          </filter>

          {/* Version 2: Brush Stroke — more displacement, organic feel */}
          <filter id="brush-stroke" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.03 0.06"
              numOctaves="5"
              seed="7"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="5"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feMorphology
              operator="dilate"
              radius="0.6"
              in="displaced"
              result="thick"
            />
            <feGaussianBlur stdDeviation="0.4" in="thick" result="softened" />
            <feComponentTransfer in="softened">
              <feFuncA type="discrete" tableValues="0 1" />
            </feComponentTransfer>
          </filter>

          {/* Version 3: Scratchy Pen — high frequency jitter, thin feel */}
          <filter id="scratchy-pen" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.065"
              numOctaves="3"
              seed="15"
              result="scratch"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="scratch"
              scale="2.5"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feGaussianBlur stdDeviation="0.2" in="displaced" result="softened" />
            <feComponentTransfer in="softened">
              <feFuncA type="discrete" tableValues="0 1" />
            </feComponentTransfer>
          </filter>

          {/* Version 4: Ink Blot — heavier ink with slight spread */}
          <filter id="ink-blot" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.025"
              numOctaves="6"
              seed="42"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="4"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feMorphology
              operator="dilate"
              radius="0.8"
              in="displaced"
              result="thick"
            />
            <feGaussianBlur stdDeviation="0.5" in="thick" result="blurred" />
            <feComponentTransfer in="blurred">
              <feFuncA type="discrete" tableValues="0 0.9 1" />
            </feComponentTransfer>
            <feMorphology operator="erode" radius="0.2" />
          </filter>
        </defs>
      </svg>

      <div className="space-y-16">
        {/* Original for reference */}
        <div className="border-b border-border pb-8">
          <span className="text-xs uppercase tracking-widest text-muted mb-4 block">
            Original Space Grotesk (reference)
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-primary">
            {heroText}
          </h1>
        </div>

        {/* Version 1: Rough Ink */}
        <div
          className={`border-b pb-8 cursor-pointer transition-all ${
            selected === 1
              ? "border-accent bg-blue-50/50 -mx-4 px-4 rounded-lg"
              : "border-border"
          }`}
          onClick={() => setSelected(1)}
        >
          <span className="text-xs uppercase tracking-widest text-muted mb-4 block">
            Version 1 — Rough Ink
            {selected === 1 && (
              <span className="ml-2 text-accent font-semibold">SELECTED</span>
            )}
          </span>
          <p className="text-xs text-muted mb-4">
            Subtle wobble with ink-bleed edges. Closest to the original but with
            hand-drawn character.
          </p>
          <h1
            className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-primary"
            style={{ filter: "url(#rough-ink)" }}
          >
            {heroText}
          </h1>
        </div>

        {/* Version 2: Brush Stroke */}
        <div
          className={`border-b pb-8 cursor-pointer transition-all ${
            selected === 2
              ? "border-accent bg-blue-50/50 -mx-4 px-4 rounded-lg"
              : "border-border"
          }`}
          onClick={() => setSelected(2)}
        >
          <span className="text-xs uppercase tracking-widest text-muted mb-4 block">
            Version 2 — Brush Stroke
            {selected === 2 && (
              <span className="ml-2 text-accent font-semibold">SELECTED</span>
            )}
          </span>
          <p className="text-xs text-muted mb-4">
            Organic, uneven strokes like a thick brush dipped in India ink. More
            expressive.
          </p>
          <h1
            className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-primary"
            style={{ filter: "url(#brush-stroke)" }}
          >
            {heroText}
          </h1>
        </div>

        {/* Version 3: Scratchy Pen */}
        <div
          className={`border-b pb-8 cursor-pointer transition-all ${
            selected === 3
              ? "border-accent bg-blue-50/50 -mx-4 px-4 rounded-lg"
              : "border-border"
          }`}
          onClick={() => setSelected(3)}
        >
          <span className="text-xs uppercase tracking-widest text-muted mb-4 block">
            Version 3 — Scratchy Pen
            {selected === 3 && (
              <span className="ml-2 text-accent font-semibold">SELECTED</span>
            )}
          </span>
          <p className="text-xs text-muted mb-4">
            Fine-tipped pen with high-frequency jitter. Tighter, sketchbook
            feel.
          </p>
          <h1
            className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-primary"
            style={{ filter: "url(#scratchy-pen)" }}
          >
            {heroText}
          </h1>
        </div>

        {/* Version 4: Ink Blot */}
        <div
          className={`border-b pb-8 cursor-pointer transition-all ${
            selected === 4
              ? "border-accent bg-blue-50/50 -mx-4 px-4 rounded-lg"
              : "border-border"
          }`}
          onClick={() => setSelected(4)}
        >
          <span className="text-xs uppercase tracking-widest text-muted mb-4 block">
            Version 4 — Ink Blot
            {selected === 4 && (
              <span className="ml-2 text-accent font-semibold">SELECTED</span>
            )}
          </span>
          <p className="text-xs text-muted mb-4">
            Heavy ink with blot spread — like pressing a loaded nib hard on
            paper. Bold and imperfect.
          </p>
          <h1
            className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-primary"
            style={{ filter: "url(#ink-blot)" }}
          >
            {heroText}
          </h1>
        </div>
      </div>

      {selected && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-lg shadow-lg text-sm">
          Version {selected} selected — tell Claude to apply it!
        </div>
      )}
    </div>
  );
}
