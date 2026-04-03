// import { motion } from "framer-motion"
// import img1 from "../../assets/t2.jpg"
// import img2 from "../../assets/t3.jpg"
// import img3 from "../../assets/t22.jpg"

// function Vision() {
//   const principes = [
//     {
//       numero: "01",
//       titre: "Le cavalier stable & autonome",
//       texte: "Former un cavalier stable, conscient et autonome dans sa lecture du cheval et de l'action.",
//       img: img1,
//     },
//     {
//       numero: "02",
//       titre: "L'intégrité du cheval",
//       texte: "Construire le cheval dans le respect de son intégrité physique et mentale, sans précipitation.",
//       img: img2,
//     },
//     {
//       numero: "03",
//       titre: "La relation durable",
//       texte: "Créer une relation claire, cohérente et durable entre le cavalier et son cheval.",
//       img: img3,
//     },
//   ]

//   return (
//     <motion.section
//       className="w-full bg-[#06273A] text-white py-28 px-6 md:px-12 lg:px-24"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Titre section */}
//       <div className="text-left max-w-3xl mb-16">
//         <p className="text-[#C7B9A5] uppercase tracking-widest mb-2 font-light">Ma vision</p>
//         <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl italic leading-snug text-white">
//           Trois principes <span className="text-[#C7B9A5]">fondamentaux</span>
//         </h2>
//         <p className="mt-4 text-lg md:text-xl font-light leading-relaxed text-slate-400 max-w-2xl">
//           Une équitation réfléchie, progressive — où l'on ne brûle pas les étapes et où chaque choix a du sens.
//         </p>
//       </div>

//       {/* Les principes en row */}
//       <div className="max-w-7xl mx-auto flex flex-col gap-16">
//         {principes.map((p, idx) => (
//           <motion.div
//             key={p.numero}
//             className="flex flex-col md:flex-row items-start gap-8 md:gap-16 border-t border-[#0C3B5D]/50 pt-12 first:border-t-0"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: idx * 0.2 }}
//           >
//             {/* Texte */}
//             <div className="flex-1 flex flex-col gap-3 text-left">
//               <span className="text-5xl md:text-6xl font-['Playfair_Display'] text-[#C7B9A5]/40 drop-shadow-md">
//                 {p.numero}
//               </span>
//               <h3 className="text-2xl md:text-3xl font-sans font-light text-white">{p.titre}</h3>
//               <p className="text-[#C7B9A5] font-light leading-relaxed">{p.texte}</p>
//             </div>

//             {/* Image */}
//             <div className="flex-1 flex justify-start md:justify-end mt-4 md:mt-0">
//               <img
//                 src={p.img}
//                 alt={p.titre}
//                 className="w-full max-w-md h-56 md:h-64 object-cover rounded-lg shadow-lg hover:scale-[1.03] transition-transform duration-500"
//               />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   )
// }

// export default Vision

import { motion } from "framer-motion"
import img1 from "../../assets/t2.jpg"
import img2 from "../../assets/t3.jpg"
import img3 from "../../assets/t22.jpg"

function Vision() {
  const principes = [
    {
      numero: "01",
      titre: "Le cavalier stable & autonome",
      texte: "Un cavalier stable, conscient et autonome dans sa lecture du cheval.",
      img: img1,
    },
    {
      numero: "02",
      titre: "L'intégrité du cheval",
      texte: "Construire le cheval dans le respect de son intégrité physique et mentale.",
      img: img2,
    },
    {
      numero: "03",
      titre: "La relation durable",
      texte: "Créer une relation claire, cohérente et durable entre le cavalier et son cheval.",
      img: img3,
    },
  ]

  return (
    <>
      <section className="bg-white text-[#12243A] py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto flex flex-col gap-8 text-center">

          <p className="text-[#5a6e7a] font-light leading-relaxed">
            Pendant longtemps, l’équitation s’est construite en se concentrant presque exclusivement sur le cheval.
          </p>

          <p className="text-[#12243A] font-light leading-relaxed">
            Un autre regard est aujourd’hui en train d’émerger :
          </p>

          <p className="text-xl md:text-2xl font-light text-[#12243A] leading-relaxed">
            Celui d’un sport où le cavalier assume pleinement sa responsabilité, corporelle, mentale et technique.
          </p>

          <div className="w-10 h-[1px] bg-[#C7B9A5] mx-auto my-4" />

          <p className=" text-lg text-[#12243A]">
            Ma vision repose sur trois principes fondamentaux :
          </p>

        </div>
      </section>

      <motion.section
        className="w-full bg-[#06273A] text-white py-28 px-6 md:px-12 lg:px-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Titre */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl italic leading-snug text-white">
            Trois principes <span className="text-[#C7B9A5]">fondamentaux</span>
          </h2>

          <p className="mt-4 text-lg font-light text-slate-400 max-w-2xl mx-auto">
            Une équitation réfléchie, progressive — où chaque choix a du sens.
          </p>
        </div>

        {/* Principes */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#0C3B5D]/40">
          {principes.map((p, idx) => (
            <motion.div
              key={p.numero}
              className="flex-1 flex flex-col items-center text-center px-6 py-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              {/* Numéro */}
              <span className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#C7B9A5]/50">
                {p.numero}
              </span>

              {/* Texte */}
              <h3 className="text-xl md:text-2xl font-light text-white mt-3">
                {p.titre}
              </h3>

              <p className="text-[#C7B9A5]/90 font-light leading-relaxed mt-2 max-w-xs">
                {p.texte}
              </p>

              {/* Image */}
              <div className="mt-auto flex justify-center w-full pt-6">
                <img
                  src={p.img}
                  alt={p.titre}
                  className="object-[50%_40%] w-40 h-36 md:w-48 md:h-40 object-cover rounded-lg shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  )
}

export default Vision
