import React from 'react'
import { useRouter } from 'next/router'

const ProductListVariantA3 = ({id, name, image, price}) => {
const router = useRouter()
  return (
        <div className="mx-auto self-start flex flex-col cursor-pointer" onClick={() => router.push(`${id}`)}>
            <img className="w-96 h-96 md:w-64 md:h-48 object-fill border border-black" src={image}/>
            <div className="flex justify-between">
              <h2 className="tracking-wider">{name}</h2>
              <p className="italic font-bold">{price} usd</p>
            </div>
        </div> 
  )
}

export default ProductListVariantA3