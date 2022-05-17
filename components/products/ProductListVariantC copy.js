import React from 'react'

const ProductListVariantC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto container">
        <div className="self-start flex flex-col justify-self-center">
    <img className="w-96 h-96 md:w-96 md:h-96  object-fill border border-black top-0" src="images/products/item-1.jpg"/>
    <div className="flex justify-between">
      <h2 className="tracking-wider">Frances Crew</h2>
      <p className="italic font-bold self-center">10.05 usd</p>
    </div>
</div>
    <div className="justify-self-center md:self-center flex flex-row px-10 py-2 my-4 hover:bg-white hover:border-2 hover:border-black justify-self-end">
    <img className="w-48 h-48 md:w-48 md:h-72 object-fill border border-black top-0" src="images/products/item-1.jpg"/>
    <div className="ml-5 justify-between flex flex-col my-5">
      <h2 className="tracking-wider text-4xl ">Francess Crew</h2>
      <p className="italic font-bold ">10.05 usd</p>
    </div>
</div>

</div>
  )
}

export default ProductListVariantC