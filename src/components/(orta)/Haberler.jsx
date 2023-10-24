import React from "react";
import styles from '../../styles/haberler.module.scss';



const Haberler = () => {
  return (
    <div className={styles.haberler}>
      <div className={styles.haber}>
        <img src="https://www.istib.org.tr/resim/haberler/318_Hediye%202.JPG" placeholder="" className={styles.resim}/>
        <div className={styles.baslik}>İSTANBUL VALİSİ DAVUT GÜL’DEN İSTİB’E İADE-İ ZİYARET</div>
        <div className={styles.tarih}>04 EYL 2023 </div>
        {/* <div className={styles.devam}>Devam</div> */}
      </div>
      <div className={styles.haber}>
        <img src="https://www.istib.org.tr/resim/haberler/318_Hediye%202.JPG" placeholder="" className={styles.resim}/>
        <div className={styles.baslik}>İSTANBUL VALİSİ DAVUT GÜL’DEN İSTİB’E İADE-İ ZİYARET</div>
        <div className={styles.tarih}>04 EYL 2023 </div>
        {/* <div className={styles.devam}>Devam</div> */}
      </div>
      <div className={styles.haber}>
        <img src="https://www.istib.org.tr/resim/haberler/318_Hediye%202.JPG" placeholder="" className={styles.resim}/>
        <div className={styles.baslik}>İSTANBUL VALİSİ DAVUT GÜL’DEN İSTİB’E İADE-İ ZİYARET</div>
        <div className={styles.tarih}>04 EYL 2023 </div>
     
      </div>
    </div>
  );
};

export default Haberler;
