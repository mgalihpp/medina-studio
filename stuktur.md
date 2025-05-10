# Medina Studio Project Structure

## Overview

Project ini menggunakan React dengan TypeScript sebagai framework utama. Berikut adalah penjelasan struktur folder dan file-file penting dalam direktori app.

## Directory Structure

### 📁 Components

Berisi komponen-komponen reusable yang digunakan di berbagai halaman.

```
components/
├── blog-card.tsx         # Komponen untuk menampilkan card blog
├── course-tab.tsx        # Komponen tab untuk halaman kursus
├── faq.tsx              # Komponen FAQ
├── list-course-card.tsx # Komponen list kursus
├── pengajar.tsx         # Komponen untuk menampilkan info pengajar
├── promo.tsx            # Komponen untuk konten promosi
├── ripple-button.tsx    # Custom button dengan efek ripple
├── layout/              # Komponen-komponen layout (header, footer, dll)
└── ui/                  # Basic UI components
```

### 📁 Constants

Berisi file-file konstanta dan data statis.

```
constant/
├── blog.ts        # Data untuk blog
├── carousel.ts    # Data untuk slider/carousel
├── course.ts      # Data kursus-kursus
├── discount.ts    # Data diskon/promo
├── faq.ts         # Data FAQ
├── footer.ts      # Data footer
├── galeri.ts      # Data galeri
├── mentor.ts      # Data mentor/pengajar
├── navigation.ts  # Data navigasi
└── site.ts        # Konfigurasi umum website
```

### 📁 Features

Berisi implementasi fitur-fitur utama website.

```
features/
├── berita/           # Fitur berita
├── detail-program/   # Halaman detail program kursus
├── galeri/          # Fitur galeri
├── home/            # Halaman utama
├── hubungi-kami/    # Halaman kontak
├── program-kursus/  # Halaman program kursus
└── tentang-kami/    # Halaman tentang kami
```

### 📁 Hooks

Custom React hooks untuk fungsi-fungsi yang reusable.

```
hooks/
├── useMobile.ts   # Hook untuk deteksi device mobile
└── useScroll.ts   # Hook untuk menghandle scroll
```

### 📁 Lib

Berisi utility functions dan helpers.

```
lib/
└── utils.ts       # Fungsi-fungsi utility umum
```

### 📁 Routes

Berisi komponen-komponen untuk routing.

```
routes/
├── berita.tsx           # Route untuk halaman berita
├── detail-program.tsx   # Route untuk detail program
├── galeri.tsx          # Route untuk galeri
└── ...                 # Route lainnya
```

### 📁 Types

Berisi definisi TypeScript types yang digunakan di project.

```
types/
└── ...           # File-file definisi type
```

### 🗄️ Root Files

```
├── app.css       # Global CSS styles
├── root.tsx      # Root component
└── routes.ts     # Route definitions
```

## Key Features

1. **Program Kursus**

   - Tata Rias Pengantin
   - Desain Busana
   - Henna Art
   - Menjahit

2. **Informasi**

   - Berita & Blog
   - Galeri
   - FAQ
   - Tentang Kami

3. **Contact Information**
   - Email: cs@medinastudio.id
   - Phone: +62-851-2104-5083

## Important Notes

- Project menggunakan TypeScript untuk type safety
- Menggunakan component-based architecture
- Responsive design dengan mobile-first approach
- Menggunakan modern React features (hooks, context, dll)

## Tech Stack

- React
- TypeScript
- Framer Motion (untuk animasi)
- Tailwind CSS (untuk styling)
