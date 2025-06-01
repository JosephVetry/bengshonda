import Image from "next/image"
// import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Produk BengsHonda - Motor & Sparepart Terbaik",
  description: "Temukan berbagai produk unggulan dari BengsHonda, mulai dari motor Honda terbaru hingga sparepart resmi dengan harga terbaik.",
}

const products = [
  {
    name: "Honda Beat Street",
    price: "Rp 18.500.000",
    image: "/images/beat-street.webp",
  },
  {
    name: "Honda Vario 160",
    price: "Rp 26.000.000",
    image: "/images/vario160hitam.png",
  },
  {
    name: "Oli AHM MPX 2",
    price: "Rp 45.000",
    image: "/images/mpx2.png",
  },
]

export default function ProdukPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Produk Unggulan Kami</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
              <p className="text-red-600 font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
