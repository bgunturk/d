import Image from 'next/image'
import logo from '../../assets/images/logo.png'

const Logo = () => {
  return (
    <div className='logo'>
      <Image src={logo} alt=""/>     
    </div>
  )
}

export default Logo