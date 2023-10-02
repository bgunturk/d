import React from "react";
import {IoCalendarOutline}  from 'react-icons/io5'

const Duyurular = () => {
  return (
    <div>
      <div className="duyuru-baslik">DUYURULAR</div>
      <div className="duyuru-baslik-bottom"></div>
      <div className="duyuru-item">
        <img src="A272-kapakgörsel.jpg" alt="" width={80} />
        <div className="duyuru-item-1">
          <a>Devlet Destekleri Eğitimi</a>
          <div className="duyuru-item-1-1">
            <IoCalendarOutline/>
            <div>27 MAY 2022 </div>
          </div>
          <div>Türkiye Odalar ve Borsalar Birliği'nden...</div>
        </div>
      </div>
      <div className="duyuru-item">
        <img src="A272-kapakgörsel.jpg" alt="" width={80} />
        <div className="duyuru-item-1">
          <a>Devlet Destekleri Eğitimi</a>
          <div className="duyuru-item-1-1">
            <IoCalendarOutline/>
            <div>27 MAY 2022 </div>
          </div>
          <div>Türkiye Odalar ve Borsalar Birliği'nden...</div>
        </div>
      </div>
      <div className="duyuru-item">
        <img src="A272-kapakgörsel.jpg" alt="" width={80} />
        <div className="duyuru-item-1">
          <a>Devlet Destekleri Eğitimi</a>
          <div className="duyuru-item-1-1">
            <IoCalendarOutline/>
            <div>27 MAY 2022 </div>
          </div>
          <div>Türkiye Odalar ve Borsalar Birliği'nden...</div>
        </div>
      </div>
    </div>
  );
};

export default Duyurular;
