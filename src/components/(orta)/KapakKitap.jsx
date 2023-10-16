import React from 'react'
import styles from '../../styles/kapakkitap.module.scss'

const KapakKitap = () => {
  return (
    <div className={styles.KapakKitap}>
        <img className={styles.kitap} src='https://istibhaber.com/kitap/BaharatKapak.png'/>
        <span className={styles.yazi}>Türkiye'nin Baharatları</span>
    </div>
  )
}

export default KapakKitap