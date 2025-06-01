'use client'

export default function CTA() {
  // Nomor WhatsApp (format internasional tanpa tanda + atau spasi)
  const whatsappNumber = '6287774401602'

  // Pesan pre-filled yang muncul ketika klik tombol
  const preFilledMessage = encodeURIComponent(
    'Halo BengsHonda, saya ingin menanyakan informasi lebih lanjut.'
  )

  return (
    <section className="bg-red-600 text-white py-16" id="contact">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Hubungi <span className="underline">BengsHonda</span> Sekarang!
        </h2>
        <p className="mb-8 text-lg md:text-xl max-w-xl mx-auto">
          Dapatkan konsultasi gratis dan info lengkap tentang motor dan servis kami.
        </p>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${preFilledMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-red-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          aria-label="Hubungi BengsHonda via WhatsApp"
        >
          Chat WhatsApp Sekarang
        </a>
      </div>
    </section>
  )
}
