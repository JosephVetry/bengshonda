'use client'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmad Yudi',
      role: 'Pembeli Motor',
      comment: 'Pelayanan sangat ramah dan proses kredit cepat. Motor impian saya akhirnya terbeli!',
      image: 'https://i.pravatar.cc/100?img=1',
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Pelanggan Bengkel',
      comment: 'Mekaniknya handal, hasil servis rapi. Harga juga transparan dan terjangkau.',
      image: 'https://i.pravatar.cc/100?img=5',
    },
    {
      name: 'Dodi Pranata',
      role: 'Langganan Sparepart',
      comment: 'Sparepart selalu ready dan ori Honda. Sangat puas belanja di sini!',
      image: 'https://i.pravatar.cc/100?img=9',
    },
  ]

  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Apa Kata <span className="text-red-600">Pelanggan</span> Kami?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Ribuan pelanggan telah mempercayakan kebutuhan motor mereka kepada BengsHonda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition text-left"
            >
              <p className="text-gray-700 mb-4 italic">"{t.comment}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
