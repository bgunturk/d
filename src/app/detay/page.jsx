import Image from 'next/image'
import React from 'react'

import styles from '@/styles/detay.module.scss'
import Navbar from '@/components/(header)/Navbar'
import Footer from '@/components/Footer'

const page = () => {
  return (

    <div className={styles.container}>
        <Navbar />
        <div className={styles.detay}>Detay</div>
        
        <Footer/>
    </div>
  )
}

export default page