import Image from 'next/image'
import type { Plugin } from '@/data/plugins'

interface PluginCardProps {
  plugin: Plugin
}

export default function PluginCard({ plugin }: PluginCardProps) {
  const { name, tagline, description, formats, platforms, free, image } = plugin

  return (
    <article className="plugin-card">
      {/* Görsel alanı — her kart için eşit yükseklikte.
          Görsel varsa gösterir, yoksa koyu placeholder kalır. */}
      <div className="plugin-card__image-wrap">
        {image ? (
          <Image
            src={image}
            alt={`${name} plugin screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={90}
            className="plugin-card__image"
            priority={false}
          />
        ) : (
          /* Placeholder — görseli olmayan kartlarda boş alan */
          <div className="plugin-card__image-placeholder" aria-hidden="true" />
        )}
      </div>

      {/* Head */}
      <div className="plugin-card__head">
        <h3 className="plugin-card__name">{name}</h3>
        <p className="plugin-card__tagline">{tagline}</p>
      </div>

      {/* Description */}
      <p className="plugin-card__description">{description}</p>

      {/* Format tags */}
      <div className="plugin-card__tags">
        {formats.map((fmt) => (
          <span key={fmt} className="tag">
            {fmt}
          </span>
        ))}
        {platforms.map((plt) => (
          <span key={plt} className="tag tag--platform">
            {plt}
          </span>
        ))}
      </div>

      {/* Footer: fiyat + durum (şimdilik hepsi yakında) */}
      <div className="plugin-card__footer">
        <span className={`plugin-card__price ${free ? 'plugin-card__price--free' : ''}`}>
          {free ? 'Free' : 'Paid'}
        </span>
        <span className="plugin-card__soon">Coming Soon</span>
      </div>
    </article>
  )
}
