import React from 'react'
import styles from '@/styles/bolumbir.module.scss'

const BolumBir = () => {
    return (
      <div className={styles.bolumBir}>
          <div className={styles.items}>
              <div className={styles.fotograf}>
                  <img src="https://www.istib.org.tr/resim/haberler/916_IMG_1640.JPG" alt="" className={styles.resim} />
                  <div className={styles.date}>07-EYL-2023</div>
              </div>
              <div className={styles.aciklama}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eos sint maiores velit, aspernatur esse eveniet reprehenderit maxime dignissimos omnis nam, repudiandae architecto dicta. Consectetur quia ullam quisquam. Iste, ab?</div>
          </div>
          <div className={styles.items2}>
              <div className={styles.yanHaber}>
                  <span className={styles.header}>İSTİB’DEN WORLDFOOD ZİYARETLERİ</span>
                  <div className={styles.description}>Istanbul Ticaret Borsası Yönetim Kurulu...…</div>
                  <div className={styles.date}>06-EYL-2023</div>
              </div>
              <div className={styles.yanHaber}>
                  <div className={styles.header}>İSTİB’DEN WORLDFOOD ZİYARETLERİ</div>
                  <div className={styles.description}>Istanbul Ticaret Borsası Yönetim Kurulu...…</div>
                  <div className={styles.date}>06-EYL-2023</div>
              </div>    
              <div className={styles.yanHaber}>
                  <div className={styles.header}>İSTİB’DEN WORLDFOOD ZİYARETLERİ</div>
                  <div className={styles.description}>Istanbul Ticaret Borsası Yönetim Kurulu...…</div>
                  <div className={styles.date}>06-EYL-2023vv</div>
              </div>
              
          </div>
          
      </div>
    )
  }
  
  export default BolumBir
// const BolumBir = () => {
//   return (
//     <div className='bolumBir'>
//         <div className="items">
//             <div className="fotograf">
//                 <img src="https://www.istib.org.tr/resim/haberler/916_IMG_1640.JPG" alt="" className="resim" />
//                 <div className="date">07-EYL-2023</div>
//             </div>
//             <div className="aciklama">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eos sint maiores velit, aspernatur esse eveniet reprehenderit maxime dignissimos omnis nam, repudiandae architecto dicta. Consectetur quia ullam quisquam. Iste, ab?</div>
//         </div>
//         <div className="items2">
//             <div className="yanHaber">
//                 <span className="header">İSTİB’DEN WORLDFOOD ZİYARETLERİ</span>
//                 <div className="description">Istanbul Ticaret Borsası Yönetim Kurulu...…</div>
//                 <div className="date">06-EYL-2023</div>
//             </div>
//             <div className="yanHaber">
//                 <div className="header">İSTİB’DEN WORLDFOOD ZİYARETLERİ</div>
//                 <div className="description">Istanbul Ticaret Borsası Yönetim Kurulu...…</div>
//                 <div className="date">06-EYL-2023</div>
//             </div>    
//             <div className="yanHaber">
//                 <div className="header">İSTİB’DEN WORLDFOOD ZİYARETLERİ</div>
//                 <div className="description">Istanbul Ticaret Borsası Yönetim Kurulu...…</div>
//                 <div className="date">06-EYL-2023vv</div>
//             </div>
            
//         </div>
        
//     </div>
//   )
// }

// export default BolumBir