import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-[#06273A] text-slate-400 px-6 md:px-12 lg:px-24 py-20">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">

        {/* ───── COL 1 : IDENTITÉ ───── */}
        <div className="flex flex-col gap-4 max-w-sm">
          <p className="font-['Playfair_Display'] text-2xl text-white">
            Loïcia Tirel
          </p>

          <div className="w-8 h-px bg-[#C7B9A5]" />

          <p className="text-sm font-light leading-relaxed text-slate-400">
            Coach & préparatrice équestre
          </p>

          <p className="text-sm font-light text-[#C7B9A5]">
            Méthode SR — HM
          </p>
        </div>

        {/* ───── COL 2 : NAVIGATION ───── */}
        <div className="flex-1 flex flex-col gap-6">

          <p className="text-[11px] tracking-[3px] uppercase text-[#C7B9A5]">
            Navigation
          </p>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3 max-w-md">

            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <Link to="/mon-histoire" className="hover:text-white transition-colors">Mon histoire</Link>

            <Link to="/methode-sr-hm" className="hover:text-white transition-colors">La méthode</Link>
            <Link to="/prestations" className="hover:text-white transition-colors">Prestations</Link>

            <Link to="/ils-en-parlent" className="hover:text-white transition-colors">Témoignages</Link>
            <Link to="/equipe" className="hover:text-white transition-colors">L’équipe</Link>

            <Link to="/galerie" className="hover:text-white transition-colors">Galerie</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>

          </div>
        </div>

        {/* ───── COL 3 : CONTACT ───── */}
        <div className="flex flex-col gap-4">

          <p className="text-[11px] tracking-[3px] uppercase text-[#C7B9A5]">
            Contact
          </p>

          <div className="flex flex-col gap-2 text-sm font-light">
            <p className="hover:text-white transition-colors cursor-pointer">
              loicia.tirel@gmail.com
            </p>
            <p className="hover:text-white transition-colors cursor-pointer">
              06 78 91 94 70
            </p>
          </div>

        </div>

      </div>

      {/* ───── BAS FOOTER ───── */}
      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-[#0C3B5D]/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">

        <p>© {new Date().getFullYear()} — Tous droits réservés</p>

        <p className="text-[#C7B9A5] font-light">
          Une approche exigeante, au service du vivant
        </p>

      </div>

    </footer>
  )
}

export default Footer
