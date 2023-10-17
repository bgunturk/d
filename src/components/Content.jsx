import React from "react";
import HaberSlider from "./HaberSlider";
import Tab from "./(sag)/Tab";
import SonHaberler from "./(sag)/SonHaberler";
import BolumBir from "./(sol)/BolumBir";
import Gida from "./Gida";
import Teknoloji from "./Teknoloji";
import Yayinlar from "./(orta)/Yayinlar";
import KapakKitap from "./(orta)/KapakKitap";
import Haberler from "./(orta)/Haberler";
import Yazarlar from "./(sag)/Yazarlar";

const Content = () => {
  return (
    <div className="content">
      <div className="sol">
        <div>
          <HaberSlider />
          <BolumBir />
        </div>
        <div className="solalt">
          <Gida />
          <Teknoloji />
        </div>
      </div>
      <div className="orta">
        <Yayinlar/>
        <KapakKitap/>
        <Haberler/>
      </div>
      <div className="sag">
        <div>
          <Tab />
        </div>
        <div>
          <SonHaberler />
        </div>
        <div>
          <Yazarlar />
        </div>
      </div>
    </div>
  );
};

export default Content;
