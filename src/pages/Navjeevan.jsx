import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const ArrowLeftToRight = () => (
  <div className="hidden md:flex justify-center w-full h-24 z-10 relative pointer-events-none my-4">
    <svg width="600" height="96" viewBox="0 0 600 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50 overflow-visible">
      <path d="M 120,0 C 120,60 480,30 480,86" stroke="#4a5d23" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
      <path d="M 474,78 L 480,86 L 486,78" stroke="#4a5d23" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  </div>
);

const ArrowRightToLeft = () => (
  <div className="hidden md:flex justify-center w-full h-24 z-10 relative pointer-events-none my-4">
    <svg width="600" height="96" viewBox="0 0 600 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50 overflow-visible">
      <path d="M 480,0 C 480,60 120,30 120,86" stroke="#4a5d23" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
      <path d="M 114,78 L 120,86 L 126,78" stroke="#4a5d23" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  </div>
);

const Navjeevan = () => {
  return (
    <>
      <SEO
        title="Project Navjeevan"
        description="Learn about Project Navjeevan, our initiative to support formerly incarcerated and undertrial rural women."
        keywords="Neev Ventures, Project Navjeevan, women empowerment, India Vision Foundation"
      />
      <div className="min-h-screen bg-[#fdfdfd] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 pt-8"
          >
            <div className="text-center space-y-4 max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Urbanist'] font-bold text-black">
                Project Navjeevan - Our Next Step
              </h2>
              <div className="w-24 h-1 bg-[#4a5d23] mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-col relative w-full mb-16 px-4 md:px-0">
              {/* What is Project Navjeevan */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-['Urbanist'] font-bold text-black border-l-4 border-[#4a5d23] pl-4">What is Project Navjeevan</h3>
                  <div className="space-y-4 font-['Urbanist'] font-normal text-black/80 text-lg leading-relaxed">
                    <p>‘Nav' means new, and ‘Jeevan’ means life. Project Navjeevan is an initiative in collaboration with India Vision Foundation that supports formerly incarcerated and undertrial rural women in rebuilding their lives through self-employment.</p>
                    <p>Reintegration is not just about finding work. It is about being seen again. Being trusted again. Being able to stand on their own with dignity. Navjeevan works closely with them to build financial understanding, create livelihoods, and restore a sense of independence and dignity.</p>
                    <p className="font-medium text-black">At its core, it is about second chances.</p>
                  </div>
                </div>
                <div className="rounded-3xl overflow-hidden relative group h-[300px] md:h-[400px]">
                  <img src="/ventures/whatisnavjeevan.jpeg" alt="Project Navjeevan" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>

              <ArrowLeftToRight />

              {/* The Core Problem */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="rounded-3xl overflow-hidden relative group h-[300px] md:h-[400px] order-2 md:order-1">
                  <img src="/ventures/coreproblem.jpeg" alt="The Core Problem" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="space-y-6 order-1 md:order-2">
                  <h3 className="text-2xl font-['Urbanist'] font-bold text-black border-l-4 border-[#4a5d23] pl-4">The Core Problem</h3>
                  <div className="space-y-4 font-['Urbanist'] font-normal text-black/80 text-lg leading-relaxed">
                    <p>For many women, release from incarceration is not the end of hardship, but the beginning of a different kind of struggle.</p>
                    <p>They return to communities where stigma runs deep, trust is fragile, opportunities are limited, and even basic steps like finding work or rebuilding social relationships can feel uncertain.</p>
                    <p>Without access to guidance, financial knowledge, or support systems, the path to stability becomes difficult. Many are left navigating reintegration alone, despite having the willingness to rebuild their lives.</p>
                  </div>
                </div>
              </div>

              <ArrowRightToLeft />

              {/* Our Solution */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-['Urbanist'] font-bold text-black border-l-4 border-[#4a5d23] pl-4">Our Solution</h3>
                  <div className="space-y-4 font-['Urbanist'] font-normal text-black/80 text-lg leading-relaxed">
                    <p>Project Navjeevan takes an individualized approach to reintegration through livelihood. It begins by understanding each woman’s circumstances, skills, and needs, so that the path forward is practical and achievable.</p>
                    <p>Women are then introduced to financial literacy and entrepreneurship through simple, hands-on workshops that build confidence and clarity around their finances and business.</p>
                    <p>This leads to enterprise creation, where women are supported in starting their own businesses through funding, materials, and branding. Ongoing guidance ensures these efforts translate into stable, sustainable livelihoods.</p>
                  </div>
                </div>
                <div className="rounded-3xl overflow-hidden relative group h-[300px] md:h-[400px]">
                  <img src="/ventures/our%20solution.jpeg" alt="Our Solution" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>

              <ArrowLeftToRight />

              {/* Documentary */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="rounded-3xl overflow-hidden relative group h-[300px] md:h-[400px] order-2 md:order-1">
                  <img src="/ventures/documentarypic.jpeg" alt="Documentary" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="space-y-6 order-1 md:order-2">
                  <h3 className="text-2xl font-['Urbanist'] font-bold text-black border-l-4 border-[#4a5d23] pl-4">Documentary</h3>
                  <div className="space-y-4 font-['Urbanist'] font-normal text-black/80 text-lg leading-relaxed">
                    <p><span className="font-bold"></span> We also produced the award-winning documentary film <span className="font-bold">Rebuilding Freedom</span> in collaboration with India Vision Foundation. The film was adopted as one of the organization’s flagship awareness pieces and showcased through multiple screenings to spark conversations around incarceration, rehabilitation, and the stigma faced by formerly incarcerated women.</p>
                    <p>The documentary follows the journeys of five women rebuilding their lives under Project Navajeevan — moving from incarceration to independence through entrepreneurship. It captures their transition from uncertainty and social stigma to confidence, ownership, and economic independence as they begin building sustainable livelihoods.</p>
                    <p>At its core, <span className="font-bold">Rebuilding Freedom</span> is a story of dignity, second chances, and what becomes possible when women are given access to trust, opportunity, and support.</p>
                  </div>
                </div>
              </div>
            </div>

          </motion.section>
        </div>
      </div>
    </>
  )
}

export default Navjeevan
