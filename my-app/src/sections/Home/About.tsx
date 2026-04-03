import { motion } from 'framer-motion'
import portrait from '../../assets/profil.jpg'

function About() {
  return (
    <>
    <section id="about" className=" bg-white text-[#31455D] py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start w-full">

        {/* ── COLONNE GAUCHE : texte ── */}
        <motion.div
          className="flex flex-col gap-8 justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#C7B9A5]" />
            <span className="text-[10px] tracking-[4px] uppercase text-[#C7B9A5] font-thin">
              À Propos
            </span>
          </div>

          {/* Titre */}
          <div>
            <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-normal italic leading-tight text-[#12243A]">
              Qui suis-je ?
            </h2>
            <div className="w-12 h-0.5 bg-[#C7B9A5] mt-5" />
          </div>

          {/* Premier paragraphe — mis en valeur */}
          <p className="text-[15px] leading-relaxed text-[#12243A] border-l-2 border-[#C7B9A5] pl-5 font-normal">
            Je suis une professionnelle exigeante et profondément humaine, issue du haut niveau.
            J'ai construit mon approche en transformant l'expérience de la performance en une méthode
            d'accompagnement complète, cohérente et durable.
          </p>

          {/* Deuxième paragraphe */}
          <p className="text-[14px] leading-relaxed text-[#5a6e7a] font-light">
            Je ne forme pas seulement des cavaliers : je cherche à construire des athlètes pensants,
            capables de ressentir, comprendre, analyser et décider. Mon travail relie le corps,
            la technique, le mental et la relation au cheval, en respectant les étapes, le rythme
            et l'individu.
          </p>

          
          <p className="text-[14px] leading-relaxed text-[#5a6e7a] font-light">
            Mon approche est née du réel, du terrain, et du sens profond que je donne à mon métier.
          </p>

        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-5 lg:pt-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-full border border-[#C7B9A5]/20" />
            <img
              src={portrait}
              alt="Loïcia Tirel"
              className="
                w-[300px] sm:w-[350px] md:w-[390px]
                h-[300px] sm:h-[350px] md:h-[390px]
                object-cover object-[50%_15%]
                rounded-full
                border-[3px] border-white
                shadow-[0_20px_60px_rgba(18,36,58,0.15)]
                transition-transform duration-500
                hover:scale-[1.02]
              "
            />
          </div>

          {/* Badge verre dépoli */}
          <div className="bg-white/70 backdrop-blur-sm border border-[#e8e2d8]/50 shadow-md px-8 py-4 text-center w-full max-w-[300px] rounded-lg">
            <p className="font-play text-lg font-medium text-[#12243A]">
              Loïcia Tirel
            </p>
            <p className="text-[10px] tracking-[2.5px] uppercase text-[#C7B9A5] mt-1">
              Coach & Préparatrice équestre
            </p>
          </div>

        </motion.div>

      </div>
    </section>
    <motion.section
  className="w-full bg-[#C7B9A5] text-white py-20 px-6 flex flex-col items-center text-center"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <p className="font-['Playfair_Display'] text-xl md:text-2xl lg:text-3xl italic leading-relaxed max-w-3xl relative">
    <span className="absolute -left-6 -top-8 text-[4rem] md:text-[5rem] opacity-20 select-none">“</span>
    Mettre de la structure sans rigidité, viser la performance sans brutalité,
    et maintenir une exigence sincère, toujours portée par la bienveillance.
    <span className="absolute -right-6 -bottom-8 text-[4rem] md:text-[5rem] opacity-20 select-none">”</span>
  </p>
</motion.section>

    </>
  )
}

export default About
