import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

const ventureSpotlight = [
  {
    title: 'Kali',
    description:
      'Our journey began with Kali, a women-led enterprise in Sehjawas Gaon, Haryana, created in collaboration with Navjyoti India Foundation. Kali brings together rural women artisans who transform flowers and floral waste into sustainable products such as holi colors, dhoop batti, and candles. Rooted in tradition, sustainability, and empowerment, Kali promotes environmentally conscious alternatives to chemical-based products.',
    logo: '/ventures/kali.png',
    href: '/ventures/kali',
  },
  {
    title: 'Tana Bana',
    description:
      'Tana Bana is a women-led venture based in Mewla Maharajpur, Faridabad, developed in collaboration with Nisarg Agripreneurship Foundation. The women of Tana Bana breathe new life into discarded fabrics by transforming textile waste into beautifully handcrafted patchwork products including cushion covers, tote bags, laptop bags, and more. Driven by creativity, sustainability, and skill, Tana Bana turns waste into functional products, reducing textile pollution while creating meaningful livelihoods for local women artisans.',
    logo: '/ventures/tanabana.png',
    href: '/ventures/tana-bana',
  },
  {
    title: 'Project Navjeevan',
    description:
      'Project Navjeevan is an initiative in collaboration with India Vision Foundation that supports formerly incarcerated and undertrial rural women in rebuilding their lives through self-employment. Through hands-on financial literacy, entrepreneurship training, and enterprise support, the program focuses on dignity, independence, and second chances.',
    logo: '/ventures/whatisnavjeevan.jpeg',
    href: '/navjeevan',
  },
]


const OurVentures = () => {
  return (
    <>
      <SEO
        title="Our Ventures"
        description="Explore the ventures and initiatives powering Neev Ventures' work with rural women across India."
        keywords="Neev Ventures, ventures, initiatives, rural women, empowerment, impact"
      />
      <div className="min-h-screen bg-[#fdfdfd] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Urbanist'] font-bold text-black mb-4">Our Ventures</h1>
            <p className="font-['Urbanist'] font-normal text-black text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              These ventures combine our values of finance, entrepreneurship, and design to unlock sustainable income for rural women.
            </p>
          </motion.div>

	          <motion.section
	            initial={{ opacity: 0, y: 30 }}
	            animate={{ opacity: 1, y: 0 }}
	            transition={{ duration: 0.8, delay: 0.2 }}
	            className="space-y-6"
	          >
	            <p className="font-['Urbanist'] text-xl font-bold text-black border-b border-gray-200 pb-2">Our ventures</p>
	            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
	              {ventureSpotlight.map((venture) => (
	                venture.href ? (
	                  <Link
	                    key={venture.title}
	                    to={venture.href}
	                    className="bg-[#f0f2f5] border border-gray-100 rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-neev-pink/60 flex flex-col h-full gap-3"
	                    aria-label={`Open ${venture.title}`}
	                  >
	                    {venture.logo ? (
	                      <div className="w-full">
	                        <img
	                          src={venture.logo}
	                          alt={`${venture.title} logo`}
	                          className="w-full h-[120px] object-contain"
	                        />
	                      </div>
	                    ) : venture.logoText ? (
	                      <div className="w-full h-[120px] flex items-center justify-center bg-[#f5efe3] rounded-2xl">
	                        <span className="text-3xl font-semibold tracking-wide text-[#7C4A10]">{venture.logoText}</span>
	                      </div>
	                    ) : null}
	                    <p className="font-['Urbanist'] text-sm uppercase tracking-[0.2em] font-bold text-black">{venture.title}</p>
	                    <p className="font-['Urbanist'] font-normal text-black/80 text-sm leading-relaxed">{venture.description}</p>
	                    <div className="mt-auto pt-4 flex justify-end">
	                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-neev-gold to-neev-orange shadow-sm border border-white/60">
	                        <svg
	                          className="w-6 h-6 text-white"
	                          viewBox="0 0 24 24"
	                          fill="none"
	                          xmlns="http://www.w3.org/2000/svg"
	                          aria-hidden="true"
	                        >
	                          <path
	                            d="M5 12h12m0 0-5-5m5 5-5 5"
	                            stroke="currentColor"
	                            strokeWidth="2.5"
	                            strokeLinecap="round"
	                            strokeLinejoin="round"
	                          />
	                        </svg>
	                      </span>
	                    </div>
	                  </Link>
	                ) : (
	                  <div
	                    key={venture.title}
	                    className="bg-[#f0f2f5] border border-gray-100 rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-300 space-y-3"
	                  >
	                    {venture.logo ? (
	                      <div className="w-full">
	                        <img
	                          src={venture.logo}
	                          alt={`${venture.title} logo`}
	                          className="w-full h-[120px] object-contain"
	                        />
	                      </div>
	                    ) : venture.logoText ? (
	                      <div className="w-full h-[120px] flex items-center justify-center bg-[#f5efe3] rounded-2xl">
	                        <span className="text-3xl font-semibold tracking-wide text-[#7C4A10]">{venture.logoText}</span>
	                      </div>
	                    ) : null}
	                    <p className="font-['Urbanist'] text-sm uppercase tracking-[0.2em] font-bold text-black">{venture.title}</p>
	                    <p className="font-['Urbanist'] font-normal text-black/80 text-sm leading-relaxed">{venture.description}</p>
	                  </div>
	                )
	              ))}
	            </div>
	          </motion.section>


        </div>
      </div>
    </>
  )
}

export default OurVentures
