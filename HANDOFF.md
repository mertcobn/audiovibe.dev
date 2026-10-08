# HANDOFF — audiovibe.dev

Bir sonraki oturum için durum notu. En yeni oturum en üstte.

## Site yapısı (şu an)

- `/` — ana sayfa: Hero (Plugins / Yamaha CL5 butonları), Work (iki proje kartı), About, Contact, Footer.
- `/plugins` — plugin kataloğu (`app/plugins/page.tsx`). Hepsi "Coming Soon", indirme linki yok.
- `/cl5` — ayrı proje (github.com/mertcobn/CL5_Web, Vercel: cl5web.vercel.app), `next.config.ts` rewrite'larıyla geçiriliyor. Rewrite'lara ve `/cl5` adresine dokunma.
- Menü linkleri tek listede: `components/Navbar.tsx` içindeki `links` (masaüstü + mobil aynı liste).
- İletişim bilgileri tek yerde: `data/contact.ts` (isim, e-posta, Instagram).
- Plugin verisi: `data/plugins.ts`. `version`, `status`, `downloadUrl` alanları kaldırıldı; indirme geri gelecekse kart ve arayüz yeniden genişletilmeli.

## Vercel

- `vercel.json` → `ignoreCommand`: sadece `main` dalı build alır; diğer dalların push'ları Vercel'de "Canceled" görünür, depolama harcamaz. PR'da Vercel status'ü "canceled/skipped" görünmesi normaldir.
- `CL5_ORIGIN` sadece yerel test için; Vercel'de tanımlama.

## Yerel test (bulut ortamı)

- CL5: `git clone https://github.com/mertcobn/cl5_web`, `npm ci && npm run build`, `dist`'i hem kökte hem `/cl5/` altında sunan statik sunucu; sonra `CL5_ORIGIN=http://localhost:<port> npx next build && npx next start`.
- Playwright: playwright-core scratchpad'de, `executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'`. Chromium m4a çözemediği için CL5'te "audio failed to load" görünmesi beklenen bir durum.
- Süreç öldürürken aynı komutta `next start` geçen bir `pgrep -f` kullanma; kendi kabuğunu öldürür. PID'i ayrı komutla bul.

## Oturum geçmişi

### 2026-10-08 — dönüşüm 1
- Tüm plugin'ler "Coming Soon" yapıldı, indirme linkleri silindi.
- Ana sayfa artık plugin listesi değil: kişisel giriş sayfası; plugin'ler `/plugins`'e taşındı.
- About: Mert Çoban, AI ile (vibe coding) müzik teknolojisi; site adının kaynağı.
- Patreon/Support linkleri tamamen kaldırıldı; yerine e-posta + Instagram (@mertcobnn).
- `vercel.json` ile önizleme build'leri kapatıldı.
- Bekleyen: Mert "ileride değineceğim" dediği daha büyük tasarım değişiklikleri.
