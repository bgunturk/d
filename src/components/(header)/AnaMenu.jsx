import React from "react";

const AnaMenu = () => {
  return (
    <div className="anamenu">
      <div>
        <ul className="anaul">
          <li className="altli">ANASAYFA</li>
          <li className="altli">TARIM</li>
          <li className="altli">TEKNOLOJİ</li>
          <li className="altli">GIDA</li>
          <li className="altli">İSTİB</li>
          <li className="altli">YAZARLAR</li>
          <li className="altli">BASINDA BİZ</li>
          <li className="altli">SOSYAL MEDYA</li>
          <li className="altli">
            ARŞİV
            <ul>
              <li>GAZETE ARŞİVi</li>
              <li>DERGİ ARŞİVi</li>
            </ul>
          </li>
          <li className="altli">İLETİŞİM</li>
        </ul>
      </div>
    </div>
  );
};

export default AnaMenu;
