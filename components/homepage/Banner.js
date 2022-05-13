import React from 'react'

const Banner = ({bannerImage, bannerText}) => {
  return (
    <div className="container mx-auto my-6 items-center">
      <h1 className="font-extrabold text-7xl sm:text-8xl md:text-9xl italic tracking-widest text-center my-4">{bannerText}</h1>
        <div className="border-2 border-black p-4">
          <img src={bannerImage} className="object-cover w-full h-96"></img>
        </div>
    </div>
  )
}

export default Banner