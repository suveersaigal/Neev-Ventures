import { motion } from 'framer-motion'

const partners = [
  {
    name: 'Frontier Markets',
    logo: '/partners/frontier-markets.png',
    href: 'https://www.frontiermkts.com/',
  },
  {
    name: 'Nisarg Agripreneurship Foundation',
    logo: '/partners/nisarg.png',
    href: 'https://nisarg.org.in/',
  },
  {
    name: 'India Vision Foundation',
    logo: '/mission/indiavisionlogo.png',
    href: 'https://indiavisionfoundation.org/',
  },
  {
    name: 'Navjyoti India Foundation',
    logo: '/mission/navjyotilogo.jpeg',
    href: 'https://navjyoti.org.in/',
  },
]

const RecognitionsStrip = () => {
  return (
    <section
      id="partnerships"
      className="relative bg-gradient-to-b from-cream via-champagne-100 to-champagne-200 py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-y border-bronze/15 overflow-hidden"
    >
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
            Partnerships
          </p>
          <h2 className="text-3xl md:text-5xl font-['Urbanist'] font-extrabold text-ink leading-tight">
            Trusted partners, <span className="text-bronze">shared outcomes</span>.
          </h2>
          <div className="mt-4 mx-auto h-[3px] w-24 rounded-full bg-gradient-to-r from-transparent via-bronze to-transparent" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {partners.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl border border-gray-200 shadow-elev-1 hover:shadow-elev-2 hover:border-bronze/40 transition-all p-5 md:p-6 flex items-center justify-center"
              aria-label={`Open ${p.name}`}
            >
              <img
                src={p.logo}
                alt={p.name}
                className="max-h-12 md:max-h-14 w-auto object-contain"
                loading="lazy"
              />
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/partnerships"
            className="inline-flex items-center gap-2 bg-black text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-800 transition-colors"
          >
            View all partnerships →
          </a>
        </div>
      </div>
    </section>
  )
}

export default RecognitionsStrip
