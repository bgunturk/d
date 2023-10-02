import Image from 'next/image'
import search from '../../assets/images/searchButton.png'

const Arama = () => {
  return (
    <div className='arama'>
      <input placeholder='arama...'></input>
      <Image src={search} alt=''/>    
    </div>
  )
}

export default Arama