'use client'
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Bülten = () => {
  const [bulten, setBulten] = useState([]);
  const [isLoading, setLoading] = useState(true);



  return (
    <div className="bulten">
      <Marquee>
        <div className="marque">
          {bulten.map((item, i) => (
            <div key={i} className="kayanyazi">
              {item.urunAdi}
              <img
                height="7"
                src={`https://istib.org.tr/resim/marq${
                  item.durum == 1 ? 1 : item.durum == -1 ? 3 : 2
                }.png`}
                alt=""
              />
              {item.ortFiyat}
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Bülten;
