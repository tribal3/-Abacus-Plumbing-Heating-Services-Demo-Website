import { useCallback, useEffect, useMemo, useState } from 'react'
import { galleryItems, type GalleryCategory } from '../data/site'
import { CloseIcon } from './Icons'

type Filter = 'All' | GalleryCategory

const filters: Filter[] = ['All', 'Boilers & Heating', 'Plumbing', 'Bathrooms', 'Kitchens', 'Electrical']

export function Gallery() {
  const [filter, setFilter] = useState<Filter>('All')
  const [activeId, setActiveId] = useState<number | null>(null)

  const visible = useMemo(
    () => (filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter],
  )

  const activeIndex = visible.findIndex((item) => item.id === activeId)
  const activeItem = activeIndex >= 0 ? visible[activeIndex] : null

  const close = useCallback(() => setActiveId(null), [])

  const step = useCallback(
    (direction: number) => {
      setActiveId((current) => {
        const index = visible.findIndex((item) => item.id === current)
        if (index < 0) return current
        const next = (index + direction + visible.length) % visible.length
        return visible[next].id
      })
    },
    [visible],
  )

  useEffect(() => {
    if (!activeItem) return
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [activeItem, close, step])

  return (
    <section id="work" className="section section-alt">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Our work</span>
          <h2>Projects across Stockport &amp; Greater Manchester</h2>
          <p className="lead">
            A look at the kind of plumbing, heating, bathroom and kitchen work we carry out. Tap any image to
            view it larger.
          </p>
        </div>

        <div className="gallery-tabs" role="group" aria-label="Filter gallery">
          {filters.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={filter === option}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {visible.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`gallery-item${item.wide ? ' is-wide' : ''}`}
              onClick={() => setActiveId(item.id)}
              aria-label={`View image: ${item.alt}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span className="gallery-caption">{item.category}</span>
            </button>
          ))}
        </div>

        <p className="section-note">
          Images show examples of the type of work carried out. Ask us for photos and references for a project
          like yours.
        </p>
      </div>

      {activeItem && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeItem.alt}>
          <button className="lightbox-close" type="button" onClick={close} aria-label="Close image viewer">
            <CloseIcon width={20} height={20} />
          </button>
          <button className="lightbox-nav lightbox-prev" type="button" onClick={() => step(-1)} aria-label="Previous image">
            ‹
          </button>
          <figure className="lightbox-figure">
            <img src={activeItem.src} alt={activeItem.alt} />
            <figcaption>
              {activeItem.category} · {activeIndex + 1} / {visible.length}
            </figcaption>
          </figure>
          <button className="lightbox-nav lightbox-next" type="button" onClick={() => step(1)} aria-label="Next image">
            ›
          </button>
        </div>
      )}
    </section>
  )
}
