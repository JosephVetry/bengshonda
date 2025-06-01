const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">BengsHonda</h2>
          <p className="text-gray-300">
            Dealer motor Honda terpercaya dengan harga terbaik dan pelayanan profesional.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:underline">Beranda</a></li>
            <li><a href="/produk" className="hover:underline">Produk</a></li>
            <li><a href="/tentang" className="hover:underline">Tentang Kami</a></li>
            <li><a href="/kontak" className="hover:underline">Kontak</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
          <p className="text-gray-300">
            Jl. Motor Honda No. 123, Jakarta<br />
            WhatsApp: 0812-3456-7890<br />
            Email: info@bengshonda.com
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} BengsHonda. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
