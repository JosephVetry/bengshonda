// 'use client'

// import { useState, useEffect } from 'react'

// export default function WhatsappButton() {
//   const whatsappNumber = '6281234567890' // ganti dengan nomor WhatsApp kamu
//   const preFilledMessage = encodeURIComponent(
//     'Halo BengsHonda, saya ingin menanyakan informasi lebih lanjut.'
//   )

//   // State untuk trigger animasi
//   const [isJumping, setIsJumping] = useState(false)

//   useEffect(() => {
//     // Animasi jump tiap 3 detik sekali
//     const interval = setInterval(() => {
//       setIsJumping(true)
//       setTimeout(() => setIsJumping(false), 600) // animasi 600ms
//     }, 3000)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <a
//       href={`https://wa.me/${whatsappNumber}?text=${preFilledMessage}`}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="Chat via WhatsApp"
//       className={`fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform ${
//         isJumping ? 'animate-jump' : ''
//       }`}
//     >
//       {/* Logo WhatsApp (SVG official) */}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         viewBox="0 0 24 24"
//         className="w-8 h-8"
//       >
//         <path d="M20.52 3.48A11.82 11.82 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.13 1.6 5.91L0 24l6.22-1.59A11.92 11.92 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.8a9.69 9.69 0 01-4.92-1.38l-.35-.21-3.7.94.98-3.6-.23-.37a9.73 9.73 0 1118.1 3.55 9.59 9.59 0 01-9.88 1.07z" />
//         <path d="M17.12 14.09c-.25-.12-1.46-.72-1.69-.8-.23-.08-.4-.12-.57.12s-.65.8-.8.96-.3.18-.55.06a7.8 7.8 0 01-2.3-1.4 8.68 8.68 0 01-1.6-2c-.17-.29.17-.43.5-1.42s.53-1.31.7-1.41c.17-.1.38-.11.57-.03.18.07.56.21.85.52s1.12 1.1 1.28 1.18.27.12.41.04.53-.2.8-.42c.24-.17.4-.38.56-.32.17.06.56.22.85.54s.5.6.57.88c.07.28.07.51 0 .72-.06.22-.52.81-.74 1.02z" />
//       </svg>
//     </a>
//   )
// }
'use client'

import { useState, useEffect } from 'react'

export default function WhatsappButton() {
  const whatsappNumber = '6287774401602'
  const preFilledMessage = encodeURIComponent(
    'Halo BengsHonda, saya ingin menanyakan informasi lebih lanjut.'
  )

  // State untuk trigger animasi
  const [isJumping, setIsJumping] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsJumping(true)
      setTimeout(() => setIsJumping(false), 600)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${preFilledMessage}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Chat via WhatsApp"
      className={`fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform ${
        isJumping ? 'animate-jump' : ''
      }`}
      type="button"
    >
      {/* Logo WhatsApp (SVG official) */}
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
  )
}
