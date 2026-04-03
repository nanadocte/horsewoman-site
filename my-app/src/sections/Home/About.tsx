import portrait from '../../assets/profil.jpg'

function About() {
  return (
    <section className="relative bg-[#fbf7ff] text-[#06273A] py-32 px-6 md:px-12 lg:px-24 min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center w-full">

        {/* TEXTE */}
        <div className="flex flex-col justify-center gap-8">

          {/* TITRE */}
          <div className="flex flex-col max-w-sm gap-4">
            <div className='flex items-center gap-4'>
                <div className="w-24 h-1 bg-[#907F9F]"></div>
                <p className='text-[#907F9F] text-center'>A PROPOS</p>
            </div>
            <h2 className="tracking-widest font-play text-5xl md:text-6xl font-extrabold leading-tight">
              Qui suis-je ?
            </h2>

            <div className="self-end w-24 h-1 bg-[#907F9F]"></div>
          </div>

          {/* CITATION FLOTTANTE */}
          <div className="relative bg-gradient-to-r from-[#8B5CF6]/5 via-[#1E2A78]/5 to-[#8B5CF6]/5 rounded-xl p-6 md:p-8">
            <span className="absolute -top-8 -left-8 text-[5rem] font-extrabold text-[#907F9F]/20 select-none">“</span>
            <p className="text-lg md:text-xl leading-relaxed text-[#06273A] border-l-4 border-[#907F9F] pl-6">
              Je ne forme pas seulement des cavaliers : je construis des athlètes pensants, capables de ressentir, comprendre et décider. Mon approche relie corps, technique et mental, tout en respectant l’individu.
            </p>
          </div>

          {/* TEXTE ADDITIONNEL */}
          <div className="space-y-4 text-lg md:text-xl text-gray-700 mt-6">
            <p>
              Je suis une professionnelle exigeante et profondément humaine, issue du haut niveau. J’ai construit mon approche en transformant l’expérience de la performance en méthode complète et durable.
            </p>
            <p>
              Mon travail relie le corps, la technique, le mental et la relation au cheval, en respectant les étapes et le rythme de chacun.
            </p>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative flex justify-center lg:justify-end items-start lg:items-center">
          <img
            src={portrait}
            alt="Portrait"
            className="
              relative z-10
              w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px]
              h-[420px] md:h-[450px]
              object-cover
              object-[50%_15%]
              rounded-2xl
              shadow-[0_25px_60px_rgba(0,0,0,0.15)]
              transition-transform
              hover:scale-[1.03] hover:shadow-[0_35px_70px_rgba(0,0,0,0.2)]
            "
          />
        </div>

      </div>
    </section>
  )
}

export default About
