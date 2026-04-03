import hero3 from '../../assets/hero9.png'
import logo from '../../assets/logob.jpg'
function Hero(){
    return(
        <header className='w-full flex flex-col lg:flex-row'>
      {/* Section Texte */}
      <div className="min-h-screen lg:w-1/2 flex flex-col justify-center relative px-6 md:px-12 lg:px-24 py-16 bg-[#06273A] overflow-hidden">

        {/* Logo filigrane */}
        <img 
          src={logo} 
          alt="Logo background" 
          className="rounded-full absolute top-1/2 left-1/2 w-64 opacity-5 -translate-x-1/2 -translate-y-1/2"
        />

        {/* Ligne + titre secondaire */}
        <div className="flex items-center gap-4 mb-4 relative z-10">
          <div className="w-16 h-1 bg-[#28425F]"></div>
          <p className="leading-relaxed text-lg md:text-xl font-semibold text-[#28425F]" >
            Coach & Préparatrice équestre
          </p>
        </div>

        {/* Titre principal */}
        <h1 className="font-play text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-6 relative z-10" style={{ fontFamily: '"Playwrite IE", cursive' }}>
          Former des cavaliers, <br />
          <span className="text-[#C7B9A5]">construire des athlètes</span>
        </h1>

        {/* Texte descriptif */}
        <p className="leading-relaxed text-md md:text-md text-slate-200 max-w-lg mb-8 relative z-10 font-light">
          Une approche qui relie technique, corps et mental, pour former des cavaliers capables de comprendre, ressentir et décider.
        </p>

        {/* CTA Glass / 3D effect */}
        <button className="leading-relaxed relative z-10 bg-linear-to-r  from-[#1b395b] via-[#113054] to-[#092a51] text-slate-200  px-6 py-3 rounded-xl font-semibold backdrop-blur-sm shadow-lg hover:scale-105 hover:brightness-110 transition transform">
          Découvrir la méthode
        </button>

      </div>

      {/* Section Image */}
      <div className="lg:w-1/2 h-96 lg:h-auto relative">
        <img
          src={hero3}
          alt="Hero"
          className="w-full h-full object-cover"
        />

        {/* Dégradé subtil à gauche pour lisibilité */}
        <div className="absolute left-0 top-0 h-full w-1/3 bg-linear-to-r from-[#06273A]/80 to-transparent"></div>
      </div>
</header>
    )
}

export default Hero