import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Twitter from '../../public/twitter.svg'
import Instagram from '../../public/instagram.svg'
import Linkedin from '../../public/linkedin.svg'
import Facebook from '../../public/facebook.svg'
import Youtube from '../../public/youtube.svg'


import styles from '@/styles/footer.module.scss'
//"../../public/youtube.svg"
const Footer = () => {

  const data = [
    {
      name: "Anasayfa",
      url: "/"
    },
    {
      name: "Tarım",
      url: "/"
    },
    {
      name: "Teknoloji",
      url: "/"
    },
    {
      name: "Gıda",
      url: "/"
    },
    {
      name: "İstib",
      url: "/"
    },
    {
      name: "Basinda Biz",
      url: "https://istib.org.tr/bilgilendirme/basinda-istib/22"
    },
  ]


  const icons = [
    {
      icon:"../../public/youtube.svg",
      url:""
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {
          data.map((link) => (
            <Link className={styles.a} href={link.url}><div className={styles.link}>{link.name}</div></Link>
          ))
        }
        
      </div>
      <div className={styles.icons}>
        {/* {
          icons.map((icon) => (
            <Link href={icon.url}><Image width={48} height={48} src={icon.icon} alt=""/></Link>
          ))
        } */}
      <Link className={styles.link} href="https://www.youtube.com/channel/UCLgS_FDR538H02ckD25FgmA"><Image width={38} height={38} src={Youtube} alt=""/></Link>     
      <Link className={styles.link} href="https://twitter.com/istib1924?lang=en"><Image width={38} height={38} src={Twitter} alt=""/></Link>     
      <Link className={styles.link} href="https://www.instagram.com/istanbulticaretborsasi/?hl=en"><Image width={38} height={38} src={Instagram} alt=""/></Link>     
      <Link className={styles.link} href="https://www.facebook.com/istib1924/?locale=tr_TR"><Image width={38} height={38} src={Facebook} alt=""/></Link>     
      <Link className={styles.link} href="https://www.linkedin.com/company/istib1924/?originalSubdomain=tr"><Image width={38} height={38} src={Linkedin} alt=""/></Link>     

      </div>
    </div>
  )
}

export default Footer