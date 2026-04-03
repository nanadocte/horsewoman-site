import { motion } from 'framer-motion'

function Who() {

    const profil = [
        {profil : "01",
            type : "Cavaliers amateurs",
            description: "Désireux de structurer leur pratique, d'améliorer leur technique et de mieux comprendre leur fonctionnement corporel et mental."
        },
    {profil : "02",
            type : "Cavaliers professionnels",
            description: "En recherche de performance durable, de précision et d'autonomie dans l'analyse."},
        {
            profil : "03",
            type : "Jeunes chevaux",
            description: "Dans une logique de construction progressive, respectueuse de leur développement physique et mental."
        },
    {
        profil : "04",
            type : "Couples cavalier - cheval",
            description: "En phase de transition ou de réajustement — retrouver cohérence, confiance et fluidité."
    }]
  return (
    <>
    <section id="about" className=" bg-[#C7B9A5] text-[#31455D] py-28 px-6 md:px-12 lg:px-24">
<div className="w-full">

        <motion.div
          className="mx-auto max-w-4xl flex flex-col gap-8 justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#06273A]" />
            <span className="text-[10px] tracking-[4px] uppercase text-[#06273A] font-thin">
              Pour qui ? 
            </span>
          </div>

          {/* Titre */}
          <div>
            <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-normal italic leading-tight text-[#06273A]">
              Un accompagnement sur <span className='text-[#8A6B4A]'> mesure</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#06273A] mt-5" />
          </div>

          <p className="text-[15px] leading-relaxed text-[#12243A] border-l-2 border-[#C7B9A5] pl-5 font-normal">
            Mon accompagnement s'adresse aux cavaliers et cavalières engagés dans une démarche de progression, dès lors qu'ils souhaitent évoluer avec méthode, sens et respect du cheval.
          </p>
          <div>
            <div className="m-auto max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-px bg-[#cbbfb0]/40 mt-8">
  {profil.map((p) => {
    return (
      <article
        key={p.profil}
className="bg-white px-6 py-8 flex flex-col gap-3 group 
hover:bg-[#f7f5f0] transition-all duration-300 shadow-sm hover:shadow-md"        
      >
        <span className="text-[11px] tracking-[3px] uppercase text-[#8A6B4A]">
  {p.profil}
</span>

        {/* Titre */}
        <h3 className="text-lg md:text-xl font-light text-[#12243A] leading-snug">
          {p.type}
        </h3>

        {/* Trait discret */}
        <div className="w-6 h-px bg-[#C7B9A5]/60 group-hover:w-10 transition-all duration-300" />

        {/* Description */}
        <p className="text-sm text-[#5a6e7a] font-light leading-relaxed">
          {p.description}
        </p>
      </article>
    )
  })}
</div>

          </div>

          

          

          

        </motion.div>
       
      </div>
    </section>
   

    </>
  )
}

export default Who
