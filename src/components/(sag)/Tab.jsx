'use client';
import {useState} from 'react'
import styles from '@/styles/tab.module.scss'
const Tab = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
    <div className={styles.container}>
        <div className={styles.bloctabs}>
            <div onClick={() => {toggleTab(1)}} className={toggleState == 1 ? styles.selectedTab : styles.tabs}>DERGİ</div>
            <div onClick={() => {toggleTab(2)}} className={toggleState == 2 ? styles.selectedTab : styles.tabs}>GAZETE</div>
            <div onClick={() => {toggleTab(3)}} className={toggleState == 3 ? styles.selectedTab : styles.tabs}>KİTAP</div>
        </div>

        <div className={toggleState == 1 ? styles.contenttabsactive : styles.contenttabs}>
            <div className={styles.content}>
                <img className={styles.resim} src='https://istib.org.tr/dosyalar/edergi/temmuz-agustos.jpg'/>
                <div className={styles.icerik}>
                    <h4>Temmuz-Agustos 2023</h4>
                    <div>Istib Temmuz Agustos…</div>
                </div>
            </div>
            <div className={styles.content}>
                <img className={styles.resim} src='https://istib.org.tr/dosyalar/edergi/temmuz-agustos.jpg'/>
                <div className={styles.icerik}>
                    <h4>Mayis-Haziran 2023</h4>
                    <div className={styles.aciklama} >Istib Mayis Haziran…</div>
                </div>
            </div>
        </div>

        <div className={toggleState == 2 ? styles.contenttabsactive : styles.contenttabs}>
            <div className={styles.content}>
                <img className={styles.resim} src='https://istib.org.tr/dosyalar/egazete/istibhaber-temmuz2023.png'/>
                <div className={styles.icerik}>
                    <h4>Temmuz Sayisi Sayısı</h4>
                    <div></div>
                </div>
            </div>
            <div className={styles.content}>
                <img className={styles.resim} src='https://istib.org.tr/dosyalar/egazete/istibhaber-haziran2023.png'/>
                <div className={styles.icerik}>
                    <h4>Haziran Sayısı</h4>
                    <div className={styles.aciklama} ></div>
                </div>
            </div>
           
        </div>
        <div className={toggleState == 3 ? styles.contenttabsactive : styles.contenttabs}>
            <div className={styles.content}>
                <img className={styles.resim} src='https://istibhaber.com/kitap/BMSK%202022%20Kapak.png'/>
                <div className={styles.icerik}>
                    <h4>Borsa Meydanında sektörler konuşuyor.</h4>
                    <div className={styles.aciklama}></div>
                </div>
            </div>
            <div className={styles.content}>
                <img className={styles.resim} src='https://istibhaber.com/kitap/BaharatKapak.png'/>
                <div className={styles.icerik}>
                    <h4>Türkiye'nin Baharatları</h4>
                    <div className={styles.aciklama}></div>
                </div>
            </div>
           
        </div>
    </div>
  )
}




export default Tab

/*
'use client'
import React, { useState } from 'react';

const Tab = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'DERGİ',
            title: 'Title 1',
            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
        },
        {
            id: 2,
            tabTitle: 'GAZETE',
            title: 'Title 2',
            content: 'Contenido de tab 2.'
        },
        {
            id: 3,
            tabTitle: 'KİTAP',
            title: 'Title 3',
            content: 'Contenido de tab 3.'
        },
       
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='container'>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div><p className='title'>{tab.title}</p><p>{tab.content}</p></div>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tab;

*/



/*
 import React from 'react'
import styles from '../../styles/tab.module.scss'
const Tab = () => {
  return (
    <div className={styles.contaimer}>
     <div className={styles.bloc-tabs}>
            <div className={styles.tabs}>Tab 1</div>
            <div className={styles.tabs}>Tab 2</div>
            <div className={styles.tabs}>Tab 3</div>
        </div>

        <div className={styles.content-tabs}></div>
    </div>
  )
}

export default Tab
*/
