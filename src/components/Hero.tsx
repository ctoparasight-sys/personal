export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      {/* SVG filter for calligraphy pen effect */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter
            id="calligraphy-pen"
            x="-5%"
            y="-5%"
            width="110%"
            height="110%"
          >
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
              scale="2"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feMorphology
              operator="erode"
              radius="0.6"
              in="displaced"
              result="thinned"
            />
            <feGaussianBlur
              stdDeviation="0.15"
              in="thinned"
              result="softened"
            />
            <feComponentTransfer in="softened">
              <feFuncA type="discrete" tableValues="0 1" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      <div className="max-w-2xl text-center">
        <h1
          className="font-heading text-5xl sm:text-6xl font-light tracking-tight mb-6"
          style={{ filter: "url(#calligraphy-pen)" }}
        >
          Ido Bachelet
        </h1>
        <p className="text-lg sm:text-xl text-muted leading-relaxed mb-8">
          Welcome to my personal website. I build things and share what I learn
          along the way.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border rounded-lg text-sm font-medium hover:bg-bg-alt transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
