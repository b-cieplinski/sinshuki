import React from 'react'
import Link from 'next/link'

const ProductListVariantA2 = ({id, name, image, price}) => {
  return (
    <div>
 <div className="mx-auto flex flex-col">
            <img className="w-96 h-96 object-cover border border-black" src={image}/>
            <div className="flex justify-between">
              <h2 className="tracking-wider">{name}</h2>
              <p className="italic font-bold">{price} usd</p>
            </div>
        </div>
    </div>
  )
}

export default ProductListVariantA2