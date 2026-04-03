// Nav.jsx
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-transparent backdrop-blur-xl border-b border-white/10">
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
                className="hover:bg-linear-to-b hover:from-[#FF9F1C] hover:to-[#F77F00] hover:text-transparent hover:bg-clip-text transition-all duration-300"
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
