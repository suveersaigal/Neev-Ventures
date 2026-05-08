import { motion } from 'framer-motion'
import { useState } from 'react'
import SEO from '../components/SEO'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:neev.ventures.india@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact from Website')}&body=${encodeURIComponent('From: ' + formData.name + '\nEmail: ' + formData.email + '\n\n' + formData.message)}`
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl text-black" />,
      title: 'Email',
      value: 'neev.ventures.india@gmail.com',
      link: 'mailto:neev.ventures.india@gmail.com',
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-black" />,
      title: 'Location',
      value: 'India',
      link: null,
    },
  ]

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with Neev Ventures. We'd love to hear from you about partnerships, products, or our mission."
        keywords="contact Neev Ventures, partnership, collaboration, rural women empowerment"
      />
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#fdfdfd]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-['Urbanist'] font-bold text-black mb-6">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl font-['Urbanist'] font-normal text-black max-w-3xl mx-auto">
              Have questions? Want to collaborate? We'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
            >
              <h2 className="text-3xl font-['Urbanist'] font-bold text-black mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-['Urbanist'] font-bold text-black mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 bg-gray-50 focus:bg-white font-['Urbanist']"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-['Urbanist'] font-bold text-black mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 bg-gray-50 focus:bg-white font-['Urbanist']"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-['Urbanist'] font-bold text-black mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 bg-gray-50 focus:bg-white font-['Urbanist']"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-['Urbanist'] font-bold text-black mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 bg-gray-50 focus:bg-white resize-none font-['Urbanist']"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-black text-white rounded-full font-['Urbanist'] font-bold text-lg shadow-md hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 bg-gray-50">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-['Urbanist'] font-bold text-black mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="font-['Urbanist'] font-normal text-black hover:text-gray-600 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-['Urbanist'] font-normal text-black">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="bg-white rounded-3xl p-8 shadow-md border border-gray-200"
              >
                <h3 className="text-2xl font-['Urbanist'] font-bold text-black mb-4">
                  Let's Collaborate
                </h3>
                <p className="font-['Urbanist'] font-normal text-black text-base leading-relaxed mb-4">
                  Whether you're interested in partnering with us, purchasing our products, 
                  or learning more about our mission, we'd love to connect.
                </p>
                <p className="font-['Urbanist'] font-normal text-gray-700 italic">
                  Together, we can empower more women and build stronger communities.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

