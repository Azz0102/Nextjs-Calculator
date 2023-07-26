'use client'

/* Core */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* Instruments */
import '../styles/globals.css'

export const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className='nav'>
      <Link
        className={`text-purple-700 hover:underline ${pathname === '/' ? 'underline' : ''}`}
        href="/"
      >
        Home
      </Link>
    </nav>
  )
}
