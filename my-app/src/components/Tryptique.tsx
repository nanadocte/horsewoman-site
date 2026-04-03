import img1 from '../assets/t2.jpg'
import img2 from "../assets/t22.jpg"
import img3 from "../assets/t3.jpg"

function Tryptique(){
    return(
        <div className='flex h-70'>
            <img className='w-1/3 object-cover' src={img1}></img>
            <img className='w-1/3 object-cover' src={img2}></img>
            <img className='w-1/3 object-cover' src={img3}></img>

        </div>
    )
}

export default Tryptique