import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

const clampIndex = (index, length) => {
  if (length <= 0) return 0
  return (index % length + length) % length
}

const FeaturedStory = () => {
  const visibleCount = 3
  const transitionMs = 650
  const images = useMemo(
    () => [
      '/gallery/image-2.jpg',
      '/gallery/image-3.jpg',
      '/gallery/image-5.jpg',
      '/gallery/image-17.jpg',
      '/gallery/image-24.jpg',
      '/gallery/image-25.jpg',
      '/gallery/image-26.jpg',
      '/gallery/image-30.jpg',
      '/gallery/image-34.jpg',
      '/home/workshop-women-1.jpg',
      '/home/carousel/carousel-1.jpg',
      '/home/carousel/carousel-2.jpg',
      '/home/carousel/carousel-3.jpg',
      '/home/carousel/carousel-4.jpg',
      '/home/carousel/carousel-5.jpg',
      '/home/carousel/carousel-6.jpg',
      '/home/carousel/carousel-7.jpg',
    ],
    []
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isInstant, setIsInstant] = useState(false)

  const trackImages = useMemo(() => [...images, ...images], [images])

  useEffect(() => {
    if (isPaused) return
    const id = window.setInterval(() => {
      setActiveIndex((i) => clampIndex(i + 1, images.length))
    }, 2800)
    return () => window.clearInterval(id)
  }, [images.length, isPaused])

  useEffect(() => {
    if (images.length === 0) return
    if (activeIndex !== images.length) return

    const id = window.setTimeout(() => {
      setIsInstant(true)
      setActiveIndex(0)
      requestAnimationFrame(() => setIsInstant(false))
    }, transitionMs)

    return () => window.clearTimeout(id)
  }, [activeIndex, images.length])

  const goPrev = () => setActiveIndex((i) => clampIndex(i - 1, images.length))
  const goNext = () => setActiveIndex((i) => clampIndex(i + 1, images.length))

  return (
    <section className="bg-champagne-100 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="absolute -inset-4 bg-bronze/10 rounded-[2rem] -z-10" />
          <div
            className="relative w-full h-[260px] md:h-[320px] rounded-3xl shadow-elev-2 overflow-hidden bg-black/5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className={[
                'absolute inset-0 flex',
                isInstant ? '' : 'transition-transform ease-out',
              ].join(' ')}
              style={{
                transform: `translateX(-${(activeIndex * 100) / visibleCount}%)`,
                transitionDuration: isInstant ? '0ms' : `${transitionMs}ms`,
              }}
            >
              {trackImages.map((src, i) => (
                <div
                  key={`${src}-${i}`}
                  className="w-1/3 h-full shrink-0 p-3 md:p-4"
                >
                  <div className="h-full rounded-2xl overflow-hidden bg-black/5 border border-bronze/10">
                    <img
                      src={src}
                      alt="Neev workshop moment"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              aria-label="Previous image"
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-cream/90 hover:bg-cream border border-bronze/20 shadow-elev-1 flex items-center justify-center text-ink"
            >
              <span className="text-2xl leading-none">‹</span>
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-cream/90 hover:bg-cream border border-bronze/20 shadow-elev-1 flex items-center justify-center text-ink"
            >
              <span className="text-2xl leading-none">›</span>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-cream/85 backdrop-blur px-3 py-2 rounded-full border border-bronze/15">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to image ${i + 1}`}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    i === (activeIndex % images.length) ? 'bg-bronze w-6' : 'bg-ink/25 hover:bg-ink/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedStory
