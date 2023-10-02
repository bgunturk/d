import React from "react";
import {IoCalendarOutline}  from 'react-icons/io5'

const SonHaberler = () => {
  return (
    <div className="sag-haber">
      <div className="haber-baslik">SON HABERLER</div>
      <div className="haber-baslik-bottom"></div>
      <div className="haber-item">
        <img src="A272-kapakgörsel.jpg" alt="" width={80} />
        <div className="haber-item-1">
          <a>Devlet Destekleri Eğitimi</a>
          <div className="haber-item-1-1">
            <IoCalendarOutline/>
            <div>27 MAY 2022 </div>
          </div>
          <div>Türkiye Odalar ve Borsalar Birliği'nden...</div>
        </div>
      </div>
      <div className="haber-item">
        <img src="A272-kapakgörsel.jpg" alt="" width={80} />
        <div className="haber-item-1">
          <a>Devlet Destekleri Eğitimi</a>
          <div className="haber-item-1-1">
            <IoCalendarOutline/>
            <div>27 MAY 2022 </div>
          </div>
          <div>Türkiye Odalar ve Borsalar Birliği'nden...</div>
        </div>
      </div>
      <div className="haber-item">
        <img src="A272-kapakgörsel.jpg" alt="" width={80} />
        <div className="haber-item-1">
          <a>Devlet Destekleri Eğitimi</a>
          <div className="haber-item-1-1">
            <IoCalendarOutline/>
            <div>27 MAY 2022 </div>
          </div>
          <div>Türkiye Odalar ve Borsalar Birliği'nden...</div>
        </div>
      </div>
    </div>
  );
};

export default SonHaberler;
