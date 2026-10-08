/* ============================================================
   Plugin Data
   ↳ Buraya kendi pluginlerini ekle/düzenle
   ↳ Şu an hiçbir plugin indirilemiyor; hepsi "Coming Soon".
   ============================================================ */

export interface Plugin {
  id: string
  name: string
  tagline: string
  description: string
  formats: string[]       // VST3, AU, AAX, CLAP, ...
  platforms: string[]     // macOS, Windows, Linux
  free: boolean
  releaseDate?: string
  image?: string          // '/images/transient.png' gibi — opsiyonel
}

export const plugins: Plugin[] = [
  {
    id: 'audio-gainer-01',
    name: 'Gainer',
    tagline: 'Clean Utility Gain Plugin',
    description:
      'A precision gain utility built for producers who need clean, transparent level control. No coloration, no character, just gain.',
    formats: ['VST3', 'AU'],
    platforms: ['macOS', 'Windows'],
    free: true,
    releaseDate: '2025',
    image: '/images/img_gainer.png',
  },
  {
    id: 'formant-01',
    name: 'Formant',
    tagline: 'Vocal Formant Shifter',
    description:
      'Shape and shift vocal character with precision formant control. Reshape timbre without altering pitch, from subtle tonal adjustments to dramatic vocal transformations.',
    formats: ['VST3', 'AU'],
    platforms: ['macOS', 'Windows'],
    free: true,
    releaseDate: '2025',
    image: '/images/img_formant.png',
  },
  {
    id: 'saturate-01',
    name: 'Saturate',
    tagline: 'Harmonic Saturation',
    description:
      'Add warmth, character, and harmonic density to any source. From subtle tape-style coloration to heavy distortion, fully oversampled for alias-free processing.',
    formats: ['VST3', 'AU'],
    platforms: ['macOS', 'Windows'],
    free: true,
    releaseDate: '2025',
    image: '/images/img_saturation.png',
  },
  {
    id: 'compress-01',
    name: 'Compress',
    tagline: 'Transparent Broadband Compressor',
    description:
      'A clean, no-frills compressor built for precise dynamic range management. Zero coloration, full transparency, control without character.',
    formats: ['VST3', 'AU'],
    platforms: ['macOS', 'Windows'],
    free: true,
    releaseDate: '2025',
    image: '/images/img_compressor.png',
  },
]
