import React from 'react'
import Link from 'next/link'

const ProductListVariantA1 = ({id, name, image, price}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 items-center p-10">
      <Link href={`${id}`} passHref>
        <div className="self-start mx-auto flex flex-col">
            <img className="w-96 h-96 md:w-64 md:h-64 object-fill border border-black top-0" src={image}/>
            <div className="flex justify-between">
              <h2 className="tracking-wider">Freancess Crew</h2>
              <p className="italic font-bold">12 usd</p>
            </div>
        </div>
        </Link>
 <div className="mx-auto flex flex-col">
            <img className="w-96 h-96 object-cover border border-black" src={image}/>
            <div className="flex justify-between">
              <h2 className="tracking-wider">Freancess Crew</h2>
              <p className="italic font-bold">12 usd</p>
            </div>
        </div>
        <div className="mx-auto self-start flex flex-col">
            <img className="w-96 h-96 md:w-64 md:h-48 object-fill border border-black" src={image}/>
            <div className="flex justify-between">
              <h2 className="tracking-wider">Freancess Crew</h2>
              <p className="italic font-bold">12 usd</p>
            </div>
        </div> 
    </div>
  )
}

export default ProductListVariantA1