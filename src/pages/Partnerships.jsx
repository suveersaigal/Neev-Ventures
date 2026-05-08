import SEO from '../components/SEO'
import { motion } from 'framer-motion'

const partners = [
  {
    name: 'Frontier Markets',
    logo: '/partners/frontier-markets.png',
    sub: 'Rural commerce · 15K+ women',
    href: 'https://www.frontiermkts.com/',
    featured: true,
  },
  {
    name: 'Nisarg Foundation',
    logo: '/partners/nisarg.png',
    sub: 'Agripreneurship Partner',
    href: 'https://nisarg.org.in/',
  },
  {
    name: 'India Vision Foundation',
    logo: '/mission/indiavisionlogo.png',
    sub: 'Founded by Dr. Kiran Bedi',
    href: 'https://indiavisionfoundation.org/',
  },
  {
    name: 'Navjyoti India Foundation',
    logo: '/mission/navjyotilogo.jpeg',
    sub: 'Community Partner',
    href: 'https://navjyoti.org.in/',
  },
]

const Partnerships = () => {
  return (
    <>
      <SEO
        title="Partnerships"
        description="Trusted partners, recognitions, and affiliations that strengthen Neev Ventures’ work across communities."
        keywords="Neev Ventures partnerships, Frontier Markets, Nisarg Foundation, India Vision Foundation, Navjyoti India Foundation, Outlook India"
      />

      <section className="relative bg-gradient-to-b from-cream via-champagne-100 to-champagne-200 py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-y border-bronze/15 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-end justify-center pb-6 md:pb-10 opacity-[0.16]"
        >
          <div className="w-full max-w-[1400px] mx-auto px-4">
            <h1
              className="text-center w-full uppercase tracking-[0.1em] leading-[2.0] text-transparent bg-clip-text bg-cover bg-center transform scale-x-[1.15]"
              style={{
                backgroundImage: "url('/home/top%20bar%20image.webp')",
                fontSize: 'clamp(3rem, 12vw, 12rem)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitTextStroke: '2px rgba(42,42,42,0.25)',
                backgroundPosition: 'center 40%',
                fontFamily: "'Gondens DEMO', sans-serif",
              }}
            >
              NEEV
              <br />
              VENTURES
            </h1>
          </div>
        </div>
        <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-bronze/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-neev-gold/10 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-14"
          >
            <p className="uppercase tracking-[0.3em] text-bronze text-xs md:text-sm font-bold mb-3">
              Trusted · Backed · Recognised
            </p>
            <h2 className="text-3xl md:text-5xl font-['Urbanist'] font-extrabold text-ink leading-tight">Partnerships</h2>
            <div className="mt-4 mx-auto h-[3px] w-24 rounded-full bg-gradient-to-r from-transparent via-bronze to-transparent" />
          </motion.div>

          {partners
            .filter((p) => p.featured)
            .map((p) => (
              <motion.a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="block mb-6 md:mb-8 rounded-3xl bg-[#f3e6d2] border border-bronze/30 shadow-elev-2 hover:shadow-elev-3 transition-all overflow-hidden group"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1.1fr,1fr] items-stretch">
                  <div className="bg-gradient-to-br from-[#9ca3af] to-[#6b7280] flex items-center justify-center p-10 md:p-14">
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="max-h-32 md:max-h-44 w-auto object-contain drop-shadow-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="uppercase text-[11px] tracking-[0.25em] font-semibold text-bronze-dark mb-2">Lead Partner</span>
                    <h3 className="text-2xl md:text-3xl font-['Urbanist'] font-bold text-ink mb-3">{p.name}</h3>
                    <p className="text-ink-soft leading-relaxed">
                      India’s largest rural assisted-commerce platform — our last-mile market access, reaching 15,000+ women across 3 states.
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-bronze-dark font-semibold group-hover:gap-3 transition-all">
                      Visit frontiermkts.com →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {partners
              .filter((p) => !p.featured)
              .map((p, i) => (
                <motion.a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group bg-gradient-to-br from-[#f3e6d2] to-[#e9d5b3] rounded-2xl border border-bronze/25 shadow-elev-1 hover:shadow-elev-2 hover:border-bronze/50 transition-all p-6 md:p-7 flex flex-col items-center text-center"
                >
                  <div className="h-20 w-full flex items-center justify-center mb-4 bg-cream/70 rounded-xl border border-bronze/15 px-3">
                    <img src={p.logo} alt={p.name} className="max-h-14 w-auto object-contain" loading="lazy" />
                  </div>
                  <h4 className="font-['Urbanist'] font-bold text-ink text-sm md:text-base leading-tight">{p.name}</h4>
                  <p className="text-[11px] md:text-xs text-bronze-dark font-medium mt-1">{p.sub}</p>
                  <span className="mt-4 text-[11px] font-semibold text-bronze">
                    Visit website →
                  </span>
                </motion.a>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Partnerships
