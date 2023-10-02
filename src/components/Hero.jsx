import React from 'react'

const Hero = (baslik,name, resim, description) => {
  return (
    
        <div className="container">
            <img src={resim}/>
            <h1>{baslik}</h1>
            <div className="header">{name}</div>
            <div className="description">{description}</div>
        </div>
  
  )
}

export default Hero