import React from 'react'

const ProductListHeader = () => {
  return (
      <div>
    <div className="container mx-auto my-8">
        <div className="text-6xl">Hister Collection</div>
        <div className="my-10">
            <p className="font-thin">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
            <div className="text-left text-3xl uppercase font-bold">Results<p className="text-sm inline  ml-2 font-light italic">63</p></div>
            <div className="border-b-2 border-black w-60 text-center text-sm italic">Sort By</div>
            <div className="border-b-2 border-black w-60 text-right text-sm italic">Filter</div>
        </div>
    </div>
    <div className="border-b-2 border-black w-full"/>
    </div>
  )
}

export default ProductListHeader