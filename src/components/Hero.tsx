// src/components/Hero.tsx
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-red-600 leading-tight">
            BengsHonda
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Dealer resmi mobil Honda dengan pelayanan terbaik dan pilihan lengkap untuk Anda.
          </p>
          <button className="mt-8 px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Lihat Produk
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/hero-car.webp"
            alt="Mobil Honda"
            width={600}
            height={400}
            className="rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  )
}
