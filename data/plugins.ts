/* ============================================================
   Plugin Data
   ↳ Buraya kendi pluginlerini ekle/düzenle
   ↳ downloadUrl: '/downloads/pluginname-v1.0.zip' şeklinde
     veya harici bir URL kullanabilirsin.
   ============================================================ */

export interface Plugin {
  id: string
  name: string
  version: string
  tagline: string
  description: string
  formats: string[]       // VST3, AU, AAX, CLAP, ...
  platforms: string[]     // macOS, Windows, Linux
  free: boolean
  status: 'available' | 'beta' | 'coming-soon'
  downloadUrl?: string    // undefined ise "Coming Soon" gösterilir
  releaseDate?: string
  image?: string          // '/images/transient.png' gibi — opsiyonel
}

export const plugins: Plugin[] = [
  {
    id: 'audio-gainer-01',
    name: 'Audio Gainer',
    version: '1.0.0',
    tagline: 'Clean Utility Gain Plugin',
    description:
      'A precision gain utility built for producers who need clean, transparent level control. No coloration, no character — just gain.',
    formats: ['VST3', 'AU'],
    platforms: ['macOS', 'Windows'],
    free: true,
    status: 'available',
    downloadUrl: '#',
    releaseDate: '2025',
    image: '/images/img_gainer.png',
  },
  {
    id: 'saturate-01',
    name: 'Saturate',
    version: '0.9.1',
    tagline: 'Harmonic Saturation',
    description:
      'Add warmth, character, and harmonic density to any source. From subtle tape-style coloration to heavy distortion — fully oversampled for alias-free processing.',
    formats: ['VST3', 'AU'],
    platforms: ['macOS', 'Windows'],
    free: true,
    status: 'beta',
    downloadUrl: '#',
    releaseDate: '2024',
  },
  {
    id: 'compress-01',
    name: 'Compress',
    version: '—',
    tagline: 'Transparent Broadband Compressor',
    description:
      'A clean, no-frills compressor built for precise dynamic range management. Zero coloration, full transparency — control without character.',
    formats: ['VST3', 'AU', 'AAX'],
    platforms: ['macOS', 'Windows'],
    free: false,
    status: 'coming-soon',
    releaseDate: '2025',
    image: '/images/img_compressor.png',
  },
  {
    id: 'lorem-01',
    name: 'Lorem Plugin',
    version: '—',
    tagline: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    formats: ['VST3', 'AU'],
    platforms: ['macOS', 'Windows'],
    free: false,
    status: 'coming-soon',
    releaseDate: '2025',
  },
]
