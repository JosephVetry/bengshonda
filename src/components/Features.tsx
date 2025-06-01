'use client'

export default function Features() {
  const features = [
    {
      title: 'Dealer Resmi Honda',
      description: 'Menjual motor dan sparepart Honda asli dengan garansi resmi.',
      icon: '🏍️',
    },
    {
      title: 'Layanan Servis Terbaik',
      description: 'Mekanik berpengalaman dan layanan purna jual terpercaya.',
      icon: '🛠️',
    },
    {
      title: 'Pembelian Mudah',
      description: 'Bisa pesan online dan bayar di tempat (COD).',
      icon: '💳',
    },
    {
      title: 'Support Konsumen 24/7',
      description: 'Siap membantu kebutuhan Anda kapan saja.',
      icon: '📞',
    },
  ]

  return (
    <section className="bg-gray-100 py-16" id="features">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Kenapa Pilih <span className="text-red-600">BengsHonda?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Kami berkomitmen untuk memberikan layanan terbaik dan produk berkualitas untuk pelanggan kami.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
