import styles from '../styles/gida.module.scss';

const Gida = () => {
  return (
    
        <div className={styles.Gida}>
            
            <h1 className={styles.baslik}>Gıda </h1>
            <img className={styles.resim} src='https://www.istib.org.tr/resim/haberler/215_Ba%C5%9Fkan%20(Lansman)%20Tw.jpg'/>
            <div className={styles.header}>İSTİB BAŞKANI ALİ KOPUZ: “OVP TARIM İÇİN UMUT VADEDİYOR” </div>
            <div className={styles.description}>“OVP, Türkiye’nin tarımsal hasılasının artması, katma değerli ürünlerimizin geliştirilmesi ve ihracat hacmimizin yükseltilmesi için önemli adımlar barındırıyor"</div>
        </div>
  
  )
}

export default Gida