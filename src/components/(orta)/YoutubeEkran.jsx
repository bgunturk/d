'use client'
import React from 'react'
import YouTube from "react-youtube"; 
import styles from '@/styles/youtubeekran.module.scss'


const YoutubeEkran = () => {

    const videoId = "068_VUzQrQE"

    const opts = { 
        height: "140", 
        width: "200", 
        playerVars: { 
          autoplay: 0, 
        }, 
      }; 
     const onReady = (event) => { 
        event.target.pauseVideo(); 
      }              

  return (
    <div className={styles.video}>
            <div className={styles.youtubebaslik}>Tanıtım Filmi</div>
      <div className={styles.youtubebaslikbottom}></div>
       <YouTube className={styles.ekran}  videoId={videoId} 
            opts={opts} onReady={onReady} /> 
       
    </div>
  )
}

export default YoutubeEkran