import React from 'react'
import styles from '../../styles/yayinlar.module.scss';


const Yayinlar = () => {
  return (
    <div className={styles.yayinlar}>
      <div className={styles.yayinlarbaslik}>YAYİNLAR</div>
      <div className={styles.yayinlarbaslikbottom}></div>
      <img className={styles.img} src='https://www.istib.org.tr/resim/siteici/Kurumsal%20Yay%C4%B1n.png'/>
    </div>
  )
}

export default Yayinlar