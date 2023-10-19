import React from "react";
import styles from '@/styles/basindabiz.module.scss'

const BasindaBiz = () => {
  return (
    <div className={styles.saghaber}>
      <div className={styles.haberbaslik}>BASINDA BİZ</div>
      <div className={styles.haberbaslikbottom}></div>
      <div className={styles.fotograflar}>
        <img className={styles.fotograf} src="https://istibhaber.com/kitap/2.jpg" alt="" />
        <img className={styles.fotograf} src="https://istibhaber.com/kitap/2.jpg" alt="" />
        <img className={styles.fotograf} src="https://istibhaber.com/kitap/2.jpg" alt="" />
        <img className={styles.fotograf} src="https://istibhaber.com/kitap/2.jpg" alt="" />
      </div>
    </div>
  );
};

export default BasindaBiz;
