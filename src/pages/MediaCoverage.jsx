import SEO from '../components/SEO'

const MediaCoverage = () => {
  return (
    <>
      <SEO
        title="Media Coverage"
        description="Stories that spotlight the work — featured coverage highlighting Neev Ventures and women-led work across communities."
        keywords="Neev Ventures media coverage, Outlook India, press, featured stories"
      />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#fdfdfd] overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <p className="uppercase tracking-[0.3em] text-bronze text-xs md:text-sm font-bold mb-3">
              Media Coverage
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Urbanist'] font-bold mb-6 text-black">
              Stories that spotlight the work.
            </h1>
            <p className="font-['Urbanist'] text-lg md:text-xl text-black/80 max-w-4xl mx-auto leading-relaxed">
              Featured coverage highlighting Neev Ventures and the women-led work across communities.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 text-center">
              <p className="uppercase tracking-[0.3em] text-bronze text-xs md:text-sm font-bold">Featured Publications</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <a
                href="https://share.google/x2WKqtAO2V6OURRe5"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#fcfdfc] border border-gray-100 shadow-lg rounded-3xl p-8 md:p-10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                aria-label="Open media coverage story: Neev Ventures: How Suveer Saigal Built A Bridge For 20,000 Women"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-14 h-10 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-center overflow-hidden shrink-0">
                    <span className="text-xl font-extrabold text-[#dc2626]" style={{ fontFamily: 'Georgia, serif' }}>
                      O
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-bronze">Outlook India</p>
                    <p className="text-xs text-black/60">Media coverage</p>
                  </div>
                </div>
                <h2 className="text-2xl font-['Urbanist'] font-bold text-black mb-3">
                  Neev Ventures: How Suveer Saigal Built A Bridge For 20,000 Women
                </h2>
                <span className="mt-4 inline-block text-xs font-semibold text-bronze">
                  Read story →
                </span>
              </a>

              <a
                href="https://share.google/uqWWqUJqM9uREVZgf"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#fcfdfc] border border-gray-100 shadow-lg rounded-3xl p-8 md:p-10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                aria-label="Open media coverage story: When No One Else Would, He Did. Suveer Saigal is rebuilding lives one woman at a time."
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-14 h-10 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-center overflow-hidden shrink-0">
                    <span className="text-lg font-extrabold text-ink" style={{ fontFamily: 'Georgia, serif' }}>
                      IT
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-bronze">Impressive Times</p>
                    <p className="text-xs text-black/60">Media coverage</p>
                  </div>
                </div>
                <h2 className="text-2xl font-['Urbanist'] font-bold text-black mb-3">
                  When No One Else Would, He Did. Suveer Saigal, a student at The Shri Ram School, Moulsari, is rebuilding lives one woman at a time.
                </h2>
                <span className="mt-4 inline-block text-xs font-semibold text-bronze">
                  Read story →
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default MediaCoverage
