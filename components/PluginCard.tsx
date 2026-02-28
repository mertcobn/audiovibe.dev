import Image from 'next/image'
import type { Plugin } from '@/data/plugins'

interface PluginCardProps {
  plugin: Plugin
}

export default function PluginCard({ plugin }: PluginCardProps) {
  const { name, version, tagline, description, formats, platforms, free, status, downloadUrl, image } =
    plugin

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
        <div className="plugin-card__name-row">
          <h3 className="plugin-card__name">{name}</h3>
          {version !== '—' && (
            <span className="plugin-card__version">v{version}</span>
          )}
        </div>
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

      {/* Footer: price + action */}
      <div className="plugin-card__footer">
        <div className="plugin-card__meta">
          <span className={`plugin-card__price ${free ? 'plugin-card__price--free' : ''}`}>
            {free ? 'Free' : 'Paid'}
          </span>
          {status === 'beta' && <span className="badge">Beta</span>}
        </div>

        {status === 'coming-soon' ? (
          <span className="plugin-card__soon">Coming Soon</span>
        ) : (
          <a
            href={downloadUrl ?? '#'}
            className="btn btn--sm"
            download={downloadUrl && !downloadUrl.startsWith('http') ? true : undefined}
          >
            Download
          </a>
        )}
      </div>
    </article>
  )
}
