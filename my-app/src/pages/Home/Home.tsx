import Hero from '../../sections/Home/Hero'
import About from '../../sections/Home/About'
import Vision from '../../sections/Home/Vision'
import Who from '../../sections/Home/Who'

function Home() {
  return (
    <main className="">
        <Hero/>
<section>
<div className="absolute left-0 top-0 h-full w-1/3 bg-linear-to-r from-[#06273A]/80 to-transparent">
</div>
    <About/>
    <Vision/>
    <Who/>
</section>
    </main>
  )
}

export default Home
