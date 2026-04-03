// Nav.jsx
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Nav() {
  const [isOpaque, setIsOpaque] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about')
      if (!section) return

      const top = section.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (top > windowHeight * 0.5) {
        setIsOpaque(true)
      } else {
        setIsOpaque(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav className={`fixed top-0 left-0 w-full z-30  backdrop-blur-xl border-b border-white/5  ${isOpaque ? 'bg-transparent' : 'bg-[#06273A]' }  transition-all duration-2000`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 w-12 rounded-full object-cover shadow-md" />
          <p  className="font-play text-white font-semibold text-lg hidden sm:block drop-shadow-md">
            Loïcia Tirel
          </p>
        </div>

        {/* Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-white text-sm font-medium">
          {["Accueil", "Histoire", "Méthode", "Prestations", "Contact"].map((item, idx) => (
            <li key={idx}>
              <Link
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="hover:bg-linear-to-b hover:from-[#8A6B4A] hover:to-[#8A6B4A] hover:text-transparent hover:bg-clip-text transition-all duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/reserver"
          className="hidden lg:block bg-linear-to-r  from-[#1b395b] to-[#28425F] text-slate-200  px-4 py-2 rounded-full font-semibold hover:brightness-110 transition"
        >
          Réserver
        </Link>

      </div>
    </nav>
  )
}

export default Nav
