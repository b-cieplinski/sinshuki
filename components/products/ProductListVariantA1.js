import React from 'react'
import Link from 'next/link'

const ProductListVariantA1 = ({id, name, image, price}) => {
  return (
    <div>
      <Link href="/product" passHref>
        <div className="self-start mx-auto flex flex-col">
            <img className="w-96 h-96 md:w-64 md:h-64 object-fill border border-black top-0" src={image}/>
            <div className="flex justify-between">
              <h2 className="tracking-wider">{name}</h2>
              <p className="italic font-bold">{price} usd</p>
            </div>
        </div>
        </Link>
 {/* <div className="mx-auto flex flex-col">
            <img className="w-96 h-96 object-cover border border-black" src={image}/>
            <div className="flex justify-between">
              <h2 className="tracking-wider">{name}</h2>
              <p className="italic font-bold">{price} usd</p>
            </div>
        </div>
        <div className="mx-auto self-start flex flex-col">
            <img className="w-96 h-96 md:w-64 md:h-48 object-fill border border-black" src={image}/>
            <div className="flex justify-between">
              <h2 className="tracking-wider">{name}</h2>
              <p className="italic font-bold">{price} usd</p>
            </div>
        </div>  */}
    </div>
  )
}

export default ProductListVariantA1