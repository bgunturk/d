"use client"
import React, { useEffect } from "react";
import ImageGallery from "react-image-gallery";

const HaberSlider  = ({props}) => {
  props = {
    showIndex: true,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: false,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: false,
      isRTL: false,
      slideDuration: 1,
      slideInterval: 1,
      slideOnThumbnailOver: false,
      thumbnailPosition: "bottom",
      showVideo: false,
     
    }


  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    
 
  ];

  return (
    <div className="haber-slider">
      <ImageGallery
       useWindowKeyDown={false}
       showFullscreenButton={false}
       showBullets= {false}
       showPlayButton= {false}
       autoPlay={true} 
       showNav= {false}
     
       items={images}   />
    </div>
  );
};

export default HaberSlider;
