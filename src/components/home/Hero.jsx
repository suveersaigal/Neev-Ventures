import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-[32vh] flex flex-col items-center justify-center bg-champagne-200 px-4 overflow-hidden pt-20 pb-8">
      {/* Huge text with background clip */}
      <motion.div
        className="flex flex-col items-center justify-center w-full max-w-[1400px] mx-auto z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1
          className="text-center w-full uppercase tracking-[0.1em] leading-[1.9] text-transparent bg-clip-text bg-cover bg-center pb-6 pt-2 transform scale-x-[1.06]"
          style={{
            backgroundImage: "url('/home/top%20bar%20image.webp')",
            fontSize: 'clamp(2.4rem, 10vw, 10rem)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '2px rgba(42,42,42,0.95)',
            backgroundPosition: 'center 40%',
            fontFamily: "'Gondens DEMO', sans-serif"
          }}
        >
          NEEV<br />VENTURES
        </h1>
      </motion.div>

    </section>
  )
}

export default Hero
