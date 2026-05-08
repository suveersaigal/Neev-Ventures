import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SEO from '../components/SEO'
import { FaUsers, FaLightbulb, FaGlobeAsia, FaHandsHelping } from 'react-icons/fa'
import { GiVillage } from 'react-icons/gi'
import { MdGroups, MdOutlineVerified } from 'react-icons/md'
import teamMembers from '../data/teamMembers'
import WhyNeev from '../components/home/WhyNeev'

const About = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 })
  const isSmallTeam = teamMembers.length <= 2

	  const values = [
	    {
	      icon: <FaUsers className="text-5xl" />,
	      title: 'Empathy Rooted in Dignity',
	      description: 'We listen first, act with compassion, and honor every woman\'s journey.',
	      color: 'from-neev-pink to-neev-coral',
	    },
	    {
	      icon: <MdGroups className="text-5xl" />,
	      title: 'Collective Empowerment',
	      description: 'We believe in the power of collective action and shared prosperity.',
	      color: 'from-bronze-light to-bronze-dark',
	    },
	    {
	      icon: <FaLightbulb className="text-5xl" />,
	      title: 'Purpose-Driven Innovation',
	      description: 'We blend traditional wisdom with modern tools to create lasting impact.',
	      color: 'from-neev-gold to-neev-orange',
	    },
	    {
	      icon: <MdOutlineVerified className="text-5xl" />,
	      title: 'Integrity & Accountability',
	      description: 'We operate with complete honesty and accountability to our communities.',
	      color: 'from-neev-orange to-neev-pink',
	    },
  ]
  return (
    <>
      <SEO 
        title="About Us"
        description="Learn how Neev Ventures builds financial visibility, entrepreneurial support, and real market access so overlooked women can create sustainable livelihoods."
        keywords="about Neev Ventures, women empowerment, financial literacy, enterprise development, livelihoods, India"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#fdfdfd] overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-96 h-96 bg-neev-blue/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-96 h-96 bg-neev-pink/10 rounded-full blur-3xl"
            />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                  <div className="p-6 bg-gradient-to-br from-neev-gold to-neev-orange rounded-full shadow-lg">
                    <FaHandsHelping className="text-6xl text-white" />
                  </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Urbanist'] font-bold mb-6 text-black">
                About Neev Ventures
              </h1>
              <p className="font-['Urbanist'] text-lg md:text-xl text-black/80 max-w-4xl mx-auto leading-relaxed">
                Building foundations so overlooked women can rise, thrive, and lead their communities towards prosperity
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section ref={ref1} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center mb-8">
                <GiVillage className="text-5xl text-neev-gold mr-4" />
                <h2 className="text-4xl md:text-5xl font-['Urbanist'] font-bold text-black">
                  Our Story
                </h2>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="space-y-6 text-center">
                  <p className="text-lg text-gray-700 leading-relaxed font-['Urbanist']">
                    In one of our early introduction meetings, we asked the women a simple question:<br/>
                    “How much do you earn, and what is your current bank balance?”<br/>
                    Most women hesitated to, or couldn’t answer.<br/>
                    Not because they didn’t work hard, but because they had never been taught to track, manage, or control their own money.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-['Urbanist']">
                    Neev Ventures was born here, with a simple realization. We met women who were working tirelessly every day running small businesses, managing households, contributing economically — yet remained financially invisible. There was no ready-made solution to this, so we started by listening.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-['Urbanist']">
                    We sat with women across communities — understanding their realities, their constraints, and their aspirations. Instead of imposing systems, we co-created them. Step by step, women began to take control of their earnings, structure their work, and make independent financial decisions.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-['Urbanist']">
                    What started as conversations has now evolved into a growing ecosystem.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-['Urbanist']">
                    Today, Neev Ventures works across 6 Indian states, impacting ~20,000 women from diverse and underserved communities, supporting them in building sustainable livelihoods through financial literacy, enterprise development, and access to real markets. We assist women in building and scaling businesses end-to-end — from product development and branding to legal onboarding, marketing, sales, and revenue generation. Neev Ventures has also launched its own community-driven product lines in collaboration with women entrepreneurs, enabling them to access larger markets and build sustainable income streams.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-['Urbanist']">
                    Our goal is not simply to teach women how to earn. It is to help them build ownership, visibility, and long-term economic independence.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-['Urbanist']">
                    But at its core, the mission remains unchanged: to ensure that no woman’s potential goes unrealized simply because she was never given the chance to see it.
                  </p>
                </div>

                {/* Space for two images */}
                <div className="mt-12 grid md:grid-cols-2 gap-8">
                  <div className="w-full h-80 bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
                    <img src="/our-model/ourstory1.jpg" alt="Local women training in skills" className="w-full h-full object-cover object-top origin-center hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="w-full h-80 bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
                    <img src="/home/workshop-3.jpg" alt="Community gathering for entrepreneurship" className="w-full h-full object-cover origin-center hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <WhyNeev />

        {/* Our Values */}
        <section ref={ref2} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fdfdfd]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
	              <h2 className="text-4xl md:text-5xl font-['Urbanist'] font-bold mb-4 text-black">
	                Our Core Values
	              </h2>
	              <p className="font-['Urbanist'] text-xl text-black/80">The core principles that inform all our initiatives</p>
	            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-[#f0f2f5] rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105"
                >
                  <div className={`inline-flex p-6 rounded-full bg-gradient-to-br ${value.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    {value.icon}
                  </div>
                  <h3 className="font-['Urbanist'] text-xl font-bold mb-3 text-black">{value.title}</h3>
                  <p className="font-['Urbanist'] text-black/80">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-6">
                <FaUsers className="text-5xl text-neev-gold mr-4" />
                <h2 className="text-4xl md:text-5xl font-['Urbanist'] font-bold text-black">
                  Our Team
                </h2>
              </div>
              <p className="font-['Urbanist'] text-xl text-black/80">
                People behind the mission
              </p>
            </motion.div>

            {(() => {
              const leader = {
                name: 'Suveer Saigal',
                role: 'Founder',
                imageSrc: '/about/Suveer Saigal Founder.jpeg',
                imageAlt: 'Suveer Saigal',
              }

              const renderMemberCard = (member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  className="bg-[#fcfdfc] border border-gray-100 shadow-lg rounded-3xl p-8 text-center group hover:-translate-y-2 transition-transform duration-300 w-full max-w-sm"
                >
                  <div className="mx-auto w-24 h-24 rounded-full overflow-hidden border border-gray-200 shadow-sm bg-white">
                    <img
                      src={member.imageSrc}
                      alt={member.imageAlt || member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null
                        e.currentTarget.src = '/team/placeholder.svg'
                      }}
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-['Urbanist'] font-bold text-black">
                    {member.name}
                  </h3>
                  {member.role ? (
                    <p className="mt-2 font-['Urbanist'] text-sm font-semibold text-gray-500 uppercase tracking-[0.18em]">
                      {member.role}
                    </p>
                  ) : null}
                </motion.div>
              )

              return (
                <div className="max-w-5xl mx-auto">
                  {/* Leader */}
                  <div className="flex justify-center">
                    {renderMemberCard(leader, 0)}
                  </div>

                  {/* Connector lines */}
                  <div className="hidden lg:block w-full relative my-10">
                    <div className="w-[1.5px] h-10 bg-gray-300 mx-auto"></div>
                    <div className="relative h-[1.5px] max-w-3xl mx-auto">
                      <div className="absolute left-[20%] right-[20%] top-0 h-full bg-gray-300"></div>
                    </div>
                    <div className="grid grid-cols-2 max-w-3xl mx-auto">
                      <div className="flex justify-center">
                        <div className="w-[1.5px] h-10 bg-gray-300"></div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-[1.5px] h-10 bg-gray-300"></div>
                      </div>
                    </div>
                  </div>

                  {/* Team members */}
                  <div className="mt-8 grid gap-8 sm:grid-cols-2 justify-items-center max-w-3xl mx-auto">
                    {teamMembers.map((member, index) => renderMemberCard(member, index + 1))}
                  </div>
                </div>
              )
            })()}
          </div>
        </section>

        {/* Call to Action */}

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-['Urbanist'] font-bold mb-6 text-black">
                Join Us in Making a Difference
              </h2>
              <p className="font-['Urbanist'] text-xl text-black/80 mb-8 leading-relaxed">
                Whether you want to partner with us, support our artisans, or learn more about our work, 
                we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-black text-white rounded-full font-['Urbanist'] font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
