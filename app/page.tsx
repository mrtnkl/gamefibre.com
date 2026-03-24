export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Header / Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-[#0a0a0f]/80 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            <GameFibreLogoIcon size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight">
            GameFibre
          </span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#platforms" className="hover:text-white transition-colors">
            Platforms
          </a>
          <a href="#discover" className="hover:text-white transition-colors">
            Discover
          </a>
        </nav>
        <a
          href="#get-app"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-500 transition-colors text-sm font-medium text-white"
        >
          Get the App
        </a>
      </header>

      <main className="flex flex-col flex-1">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-28 hero-glow overflow-hidden">
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Now available for Android
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6 max-w-4xl">
            <span className="gradient-text">Rediscover</span>
            <br />
            your games
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12">
            We hoard games, stare at our libraries and can&apos;t decide what to
            play. GameFibre brings your{" "}
            <span className="text-zinc-200">Steam, GOG, and Epic</span> games
            together in one beautifully designed space — making choosing your
            next game{" "}
            <span className="text-zinc-200">fun again&nbsp;😊</span>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              id="get-app"
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all text-white font-semibold text-base shadow-lg shadow-violet-900/40"
            >
              <GooglePlayIcon />
              Get it on Google Play
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all text-zinc-300 font-medium text-base"
            >
              Learn more
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Platform badges */}
          <div className="flex items-center gap-3 mt-14 text-sm text-zinc-500">
            <span>Works with</span>
            <div className="flex items-center gap-2">
              <PlatformBadge label="Steam" color="bg-[#1b2838]" icon={<SteamIcon />} />
              <PlatformBadge label="GOG" color="bg-[#2a1a6e]" icon={<GOGIcon />} />
              <PlatformBadge label="Epic" color="bg-[#1a1a1a]" icon={<EpicIcon />} />
            </div>
          </div>
        </section>

        {/* Problem → Solution */}
        <section
          id="features"
          className="px-6 py-24 max-w-6xl mx-auto w-full"
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-violet-400 font-medium text-sm uppercase tracking-widest mb-4">
                The problem we solve
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-6">
                Your games are scattered.
                <br />
                <span className="text-zinc-400">Your time isn&apos;t.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                The average gamer owns games across three or more platforms. Switching between launchers, trying to remember what you own, ending up watching Netflix instead — we&apos;ve all been there.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                GameFibre gives you one beautiful home for all your libraries, so you can spend less time choosing and more time playing.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard
                icon={<LibraryIcon />}
                title="Unified Library"
                description="All your games from every platform in one scrollable, searchable collection."
              />
              <FeatureCard
                icon={<SparkleIcon />}
                title="Smart Discovery"
                description="Surface games you&apos;ve forgotten you own with personalized recommendations."
              />
              <FeatureCard
                icon={<SortIcon />}
                title="Filter & Sort"
                description="By genre, playtime, rating, or platform — find exactly what you&apos;re in the mood for."
              />
              <FeatureCard
                icon={<HeartIcon />}
                title="Beautiful Design"
                description="Artwork-first layouts and smooth animations that make browsing a joy."
              />
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section
          id="platforms"
          className="px-6 py-24 bg-white/[0.02] border-y border-white/[0.05]"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-violet-400 font-medium text-sm uppercase tracking-widest mb-4">
                Platform support
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Your entire collection, finally together
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                Connect your accounts once. GameFibre syncs your libraries automatically so you always have a complete, up-to-date view.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <PlatformCard
                name="Steam"
                description="Access your full Steam library including free-to-play titles, DLC, and everything in your wishlist."
                icon={<SteamIcon size={40} />}
                accentColor="from-[#1b2838] to-[#2a475e]"
                games="Thousands of games"
              />
              <PlatformCard
                name="GOG"
                description="Your DRM-free GOG collection in full, with playtime tracking and classic game support."
                icon={<GOGIcon size={40} />}
                accentColor="from-[#2a1a6e] to-[#4a2a9e]"
                games="Growing library"
              />
              <PlatformCard
                name="Epic Games"
                description="All your Epic titles — including the free games you've collected over the years."
                icon={<EpicIcon size={40} />}
                accentColor="from-[#1a1a1a] to-[#2a2a2a]"
                games="Free & purchased"
              />
            </div>
            <p className="text-center text-zinc-500 text-sm mt-8">
              More platforms coming soon — Xbox, PlayStation, Nintendo, and more.
            </p>
          </div>
        </section>

        {/* Discovery Section */}
        <section
          id="discover"
          className="px-6 py-24 max-w-6xl mx-auto w-full"
        >
          <div className="text-center mb-16">
            <p className="text-violet-400 font-medium text-sm uppercase tracking-widest mb-4">
              Built for exploration
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Designed to make you{" "}
              <span className="gradient-text">want to play</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Beautiful game artwork, meaningful metadata, and an interface designed to spark that feeling of wanting to dive into something new.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DiscoveryCard
              title="Artwork-first browsing"
              description="Large, vibrant game covers and hero art make your library feel like a curated gallery."
              emoji="🎨"
            />
            <DiscoveryCard
              title="'What should I play?'"
              description="The one question GameFibre answers. Get suggestions based on your mood, available time, and what you actually enjoy."
              emoji="🎯"
            />
            <DiscoveryCard
              title="Backlog surfacing"
              description="Rediscover forgotten gems you bought years ago. Your backlog is a goldmine — we help you mine it."
              emoji="💎"
            />
            <DiscoveryCard
              title="Rich game details"
              description="Playtime, achievements, descriptions, and screenshots at a glance without leaving the app."
              emoji="📋"
            />
            <DiscoveryCard
              title="Collections & tags"
              description="Create your own collections — RPGs to binge, games to play with friends, short games for busy weeks."
              emoji="📁"
            />
            <DiscoveryCard
              title="Lightning fast"
              description="Native Android performance. Your entire library loads instantly, scrolls smoothly, and never stutters."
              emoji="⚡"
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-24 text-center bg-gradient-to-b from-transparent to-violet-950/20">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mx-auto mb-8">
              <GameFibreLogoIcon size={32} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Stop hoarding.
              <br />
              <span className="gradient-text">Start playing.</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10">
              Download GameFibre for free and rediscover the joy of your game collection.
            </p>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all text-white font-semibold text-lg shadow-xl shadow-violet-900/40"
            >
              <GooglePlayIcon />
              Get it on Google Play
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-indigo-600" />
            <span className="font-medium text-zinc-400">GameFibre</span>
          </div>
          <p>© {new Date().getFullYear()} GameFibre. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─── Small reusable components ─── */

function PlatformBadge({
  label,
  color,
  icon,
}: {
  label: string;
  color: string;
  icon: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${color} border border-white/[0.08] text-zinc-300 text-xs font-medium`}
    >
      {icon}
      {label}
    </span>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="card-glow p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex flex-col gap-3 transition-all">
      <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center text-violet-400">
        {icon}
      </div>
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function PlatformCard({
  name,
  description,
  icon,
  accentColor,
  games,
}: {
  name: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  games: string;
}) {
  return (
    <div className="card-glow rounded-2xl overflow-hidden border border-white/[0.08] transition-all">
      <div
        className={`bg-gradient-to-br ${accentColor} p-8 flex items-center justify-center`}
      >
        {icon}
      </div>
      <div className="p-6 bg-white/[0.03]">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg text-white">{name}</h3>
          <span className="text-xs text-violet-400 bg-violet-400/10 px-2 py-0.5 rounded-full">
            {games}
          </span>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function DiscoveryCard({
  title,
  description,
  emoji,
}: {
  title: string;
  description: string;
  emoji: string;
}) {
  return (
    <div className="card-glow p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] flex flex-col gap-4 transition-all">
      <span className="text-3xl">{emoji}</span>
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

/* ─── Icons ─── */

function GameFibreLogoIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="text-white"
    >
      <path
        d="M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 8h6M9 12h6M9 16h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.37.21.8.24 1.21.07l11.34-6.54-2.76-2.77L3.18 23.76zM.42 1.82C.16 2.16 0 2.63 0 3.22v17.56c0 .59.16 1.06.43 1.39l.07.07 9.84-9.84v-.22L.49 1.75l-.07.07zM21.8 10.56l-2.8-1.62-3.09 3.09 3.09 3.09 2.82-1.63c.81-.46.81-1.21-.02-1.93zM4.39.17L15.73 6.71 12.97 9.47 1.62.24C2.02.07 2.46.1 4.39.17z" />
    </svg>
  );
}

function SteamIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.187.008l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.029 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.497 1.009 2.455-.397.957-1.494 1.409-2.455 1.012zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
    </svg>
  );
}

function GOGIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.371 0 0 5.372 0 12s5.371 12 12 12c6.628 0 12-5.372 12-12S18.628 0 12 0zm0 4.258c4.274 0 7.742 3.468 7.742 7.742 0 4.275-3.468 7.742-7.742 7.742-4.274 0-7.742-3.467-7.742-7.742 0-4.274 3.468-7.742 7.742-7.742zm0 2.581a5.157 5.157 0 0 0-5.161 5.161A5.158 5.158 0 0 0 12 17.161a5.16 5.16 0 0 0 5.161-5.161A5.159 5.159 0 0 0 12 6.839zm0 1.937a3.22 3.22 0 0 1 3.226 3.224A3.22 3.22 0 0 1 12 15.226a3.22 3.22 0 0 1-3.226-3.226A3.22 3.22 0 0 1 12 8.776z" />
    </svg>
  );
}

function EpicIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.278 0v18.788l2.302.978V2.285h12.71v17.48l2.302.98V0zm2.302 21.002v2.998L12 24l7.418-2.998v-2.283L12 21.717z" />
    </svg>
  );
}

function LibraryIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SortIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 6h18M7 12h10M11 18h2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

