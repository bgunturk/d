import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import youtube from '../../public/youtube.svg'
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
      <Link className={styles.link} href="https://www.youtube.com/channel/UCLgS_FDR538H02ckD25FgmA"><Image src={youtube} alt=""/></Link>     

      </div>
    </div>
  )
}

export default Footer