'use client'

import { useState } from 'react'

export default function WhatsappChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const whatsappNumber = '6287774401602' // Ganti dengan nomor WA-mu
  const encodedMessage = encodeURIComponent(message || 'Halo BengsHonda, saya ingin menanyakan informasi lebih lanjut.')

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

  return (
    <>
      {/* Tombol Floating WhatsApp */}
      <button
        aria-label="Open WhatsApp chat"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 flex items-center justify-center animate-jump"
      >
        {/* Icon WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-8 h-8"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.13 1.6 5.91L0 24l6.22-1.59A11.92 11.92 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.8a9.69 9.69 0 01-4.92-1.38l-.35-.21-3.7.94.98-3.6-.23-.37a9.73 9.73 0 1118.1 3.55 9.59 9.59 0 01-9.88 1.07z" />
          <path d="M17.12 14.09c-.25-.12-1.46-.72-1.69-.8-.23-.08-.4-.12-.57.12s-.65.8-.8.96-.3.18-.55.06a7.8 7.8 0 01-2.3-1.4 8.68 8.68 0 01-1.6-2c-.17-.29.17-.43.5-1.42s.53-1.31.7-1.41c.17-.1.38-.11.57-.03.18.07.56.21.85.52s1.12 1.1 1.28 1.18.27.12.41.04.53-.2.8-.42c.24-.17.4-.38.56-.32.17.06.56.22.85.54s.5.6.57.88c.07.28.07.51 0 .72-.06.22-.52.81-.74 1.02z" />
        </svg>
      </button>

      {/* Popup Chat */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-72 bg-white rounded-lg shadow-lg p-4 flex flex-col z-50">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-lg text-green-600">Chat WhatsApp</h2>
            <button
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              &#10005;
            </button>
          </div>

          <textarea
            rows={4}
            placeholder="Tulis pesan kamu..."
            className="w-full border border-gray-300 rounded-md p-2 resize-none focus:outline-green-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 bg-green-500 hover:bg-green-600 text-white text-center rounded-md py-2 font-semibold transition"
            onClick={() => setIsOpen(false)}
          >
            Kirim ke WhatsApp
          </a>
        </div>
      )}
    </>
  )
}
