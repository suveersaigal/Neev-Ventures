import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

const isModifiedClick = (event) =>
  event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0

const shouldIgnoreTarget = (target) => {
  if (!(target instanceof HTMLImageElement)) return true
  if (target.dataset.noLightbox != null) return true
  if (target.closest('[data-no-lightbox]')) return true
  if (target.closest('nav')) return true
  if (target.closest('button')) return true
  if (target.closest('[role="button"]')) return true
  return false
}

const resolveImageSrc = (img) => img.currentSrc || img.src

const ImageLightbox = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [src, setSrc] = useState('')
  const [alt, setAlt] = useState('')
  const [scale, setScale] = useState(1)
  const [origin, setOrigin] = useState({ x: 50, y: 50 })
  const lastFocused = useRef(null)

  const close = () => {
    setIsOpen(false)
    setScale(1)
    setOrigin({ x: 50, y: 50 })
  }

  useEffect(() => {
    const onClick = (event) => {
      if (isModifiedClick(event)) return
      const target = event.target
      if (shouldIgnoreTarget(target)) return

      const img = target
      const imageSrc = resolveImageSrc(img)
      if (!imageSrc) return

      // Don’t intercept images that are clearly interactive/navigation targets.
      const link = img.closest('a[href]')
      if (link && link.getAttribute('href') && link.getAttribute('href') !== '#') return

      event.preventDefault()
      event.stopPropagation()

      lastFocused.current = document.activeElement
      setSrc(imageSrc)
      setAlt(img.alt || '')
      setIsOpen(true)
      setScale(1)
      setOrigin({ x: 50, y: 50 })
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === '+' || e.key === '=') setScale((s) => clamp(s + 0.2, 1, 4))
      if (e.key === '-') setScale((s) => clamp(s - 0.2, 1, 4))
      if (e.key === '0') setScale(1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    return () => {
      if (lastFocused.current && lastFocused.current.focus) lastFocused.current.focus()
    }
  }, [isOpen])

  const portalTarget = useMemo(() => (typeof document === 'undefined' ? null : document.body), [])
  if (!portalTarget || !isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      onClick={(e) => {
        if (e.target.closest('[data-lightbox-content]')) return
        close()
      }}
    >
      <div data-lightbox-content className="absolute top-4 right-4 flex items-center gap-2">
        <button
          type="button"
          className="h-10 w-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center"
          onClick={() => setScale((s) => clamp(s - 0.2, 1, 4))}
          aria-label="Zoom out"
        >
          <span className="text-xl leading-none">−</span>
        </button>
        <button
          type="button"
          className="h-10 w-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center"
          onClick={() => setScale((s) => clamp(s + 0.2, 1, 4))}
          aria-label="Zoom in"
        >
          <span className="text-xl leading-none">+</span>
        </button>
        <button
          type="button"
          className="h-10 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-sm font-semibold"
          onClick={() => {
            setScale(1)
            setOrigin({ x: 50, y: 50 })
          }}
          aria-label="Reset zoom"
        >
          Reset
        </button>
        <button
          type="button"
          className="h-10 w-10 rounded-xl bg-white text-ink hover:bg-white/90 border border-white/30 flex items-center justify-center"
          onClick={close}
          aria-label="Close"
        >
          <span className="text-2xl leading-none">×</span>
        </button>
      </div>

      <div className="w-full h-full flex items-center justify-center p-6 md:p-10">
        <div
          data-lightbox-content
          className="max-w-[min(1100px,95vw)] max-h-[85vh] w-full flex items-center justify-center"
        >
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[85vh] object-contain select-none shadow-elev-3 rounded-2xl"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: `${origin.x}% ${origin.y}%`,
              transition: 'transform 120ms ease-out',
              cursor: scale > 1 ? 'zoom-out' : 'zoom-in',
            }}
            draggable={false}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = ((e.clientX - rect.left) / rect.width) * 100
              const y = ((e.clientY - rect.top) / rect.height) * 100
              setOrigin({ x, y })
              setScale((s) => (s > 1 ? 1 : 2))
            }}
            onWheel={(e) => {
              e.preventDefault()
              const rect = e.currentTarget.getBoundingClientRect()
              const x = ((e.clientX - rect.left) / rect.width) * 100
              const y = ((e.clientY - rect.top) / rect.height) * 100
              setOrigin({ x, y })
              setScale((s) => clamp(s + (e.deltaY > 0 ? -0.15 : 0.15), 1, 4))
            }}
          />
        </div>
      </div>
    </div>,
    portalTarget
  )
}

export default ImageLightbox
