import { Link } from "react-router-dom"

function Footer(){
    return(
    <div className="p-5 bg-[#06273A] text-slate-400 flex flex-col md:flex-row justify-between gap-10">
  <div>
    <p className="font-extrabold text-2xl text-slate-200">Loïcia Tirel</p>
    <ul>
      <li>Coach et préparatrice physique</li>
      <li>Méthode SR - HM</li>
    </ul>
  </div>

  <div className="p-5 flex-1">
    <p className="text-center font-bold text-slate-200 pb-4">NAVIGATION</p>
    <div className="flex flex-col md:flex-row md:justify-center md:gap-10 items-stretch">
      
      {/* Colonne gauche */}
      <ul className="text-slate-400 flex flex-col gap-4 text-right md:w-1/2 min-h-0">
        <li><Link to="/" className="hover:text-[#956E46] transition-colors">Home Page</Link></li>
        <li><Link to="/mon-histoire" className="hover:text-[#956E46] transition-colors">Mon Histoire</Link></li>
        <li><Link to="/methode-sr-hm" className="hover:text-indigo-400 transition-colors">La méthode SR - HM</Link></li>
        <li><Link to="/prestations" className="hover:text-indigo-400 transition-colors">Prestations</Link></li>
        <li><Link to="/ils-en-parlent" className="hover:text-indigo-400 transition-colors">Ils en parlent</Link></li>
      </ul>

      {/* Séparateur */}
      <div className="hidden md:block w-px bg-slate-500"></div>

      {/* Colonne droite */}
      <ul className="md:w-1/2 text-slate-400 flex flex-col gap-4 text-left min-h-0">
        <li><Link to="/equipe" className="hover:text-indigo-400 transition-colors">L'équipe</Link></li>
        <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
        <li><Link to="/sponsors" className="hover:text-indigo-400 transition-colors">Sponsors & Partenaires</Link></li>
        <li><Link to="/galerie" className="hover:text-indigo-400 transition-colors">Galerie</Link></li>
        <li><Link to="/reserver" className="hover:text-indigo-400 transition-colors">Réserver en ligne</Link></li>
      </ul>

    </div>
  </div>


            <div>
                <p className=" font-bold text-slate-200 pb-4">CONTACT</p>
                <p>loicia.tirel@gmail.com</p>
            <p>0678919470</p>
            </div>
        </div>
    )
}

export default Footer