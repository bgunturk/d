import React from "react";
import HaberSlider from "./HaberSlider";
import Duyurular from "./(sag)/Duyurular";
import SonHaberler from "./(sag)/SonHaberler";
import BolumBir from "./BolumBir";
import Gida from "./Gida";
import Teknoloji from "./Teknoloji";
import Yayinlar from "./(orta)/Yayinlar";
const Content = () => {
  return (
    <div className="content">
      <div className="sol">
        <div>
          <HaberSlider />
          <BolumBir />
        </div>
        <div>
          <Gida />
          <Teknoloji />
        </div>
      </div>
      <div className="orta">
        <Yayinlar/>
      </div>
      <div className="sag">
        <div>
          <Duyurular />
        </div>
        <div>
          <SonHaberler />
        </div>
      </div>
    </div>
  );
};

export default Content;
