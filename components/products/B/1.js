import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const ProductListVariantB = ({id, name, image, price}) => {
  const router = useRouter()
  return (
    <div className="self-start mx-auto flex flex-col cursor-pointer" onClick={() => router.push(`${id}`)}>
    <img className="w-96 h-96 md:w-64 md:h-64 object-fill border border-black top-0" src={image}/>
    <div className="flex justify-between">
      <h2 className="tracking-wider">{name}</h2>
      <p className="italic font-bold">{price} usd</p>
    </div>
</div>
  )
}

export default ProductListVariantB