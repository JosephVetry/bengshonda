'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-600">
          BengsHonda
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className={`md:flex gap-6 text-gray-700 font-medium hidden`}>
          <li><Link href="/">Beranda</Link></li>
          <li><Link href="#features">Keunggulan</Link></li>
          <li><Link href="#testimonials">Testimoni</Link></li>
          <li><Link href="/product">Produk</Link></li>
          <li><Link href="/tentang">Tentang</Link></li>
          <li><Link href="/kontak">Kontak</Link></li>
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <ul className="space-y-4">
            <li><Link href="/" onClick={toggleMenu}>Beranda</Link></li>
            <li><Link href="#features" onClick={toggleMenu}>Keunggulan</Link></li>
            <li><Link href="#testimonials" onClick={toggleMenu}>Testimoni</Link></li>
            <li><Link href="/product" onClick={toggleMenu}>Produk</Link></li>
            <li><Link href="/tentang" onClick={toggleMenu}>Tentang</Link></li>
            <li><Link href="/kontak" onClick={toggleMenu}>Kontak</Link></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
