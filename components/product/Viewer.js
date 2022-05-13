import React from 'react'
import Gallery from './Gallery'
import GalleryScroll from './GalleryScroll'
import ProductSpecs from './ProductSpecs'

const Viewer = () => {
  return (

    <main className="grid grid-cols-1 md:grid-cols-2 mx-auto ">
      <section className="sm:col-span-1 col-span-2">
      <div className="object-contain w-full h-full p-6 hidden md:inline-grid">
      <GalleryScroll />
      </div>
 <div className="md:hidden grid border-2 hover:border-black bg-white p-6 aspect-square my-5 mx-4">
  <Gallery />
      </div>
      </section>

      <section className="md:inline-grid md:col-span-1 mx-4">
        <div className="hidden md:inline-grid fixed top-24 ">
        <ProductSpecs />
        </div>
        <div className="md:hidden">
        <ProductSpecs />
        </div>
      </section>
  </main>




  //   <div className="grid grid-cols-1 md:grid-cols-2 my-2 gap-4">
  //             <div className="hidden md:inline">
  //         {/*<img className="object-contain w-full h-full p-6" src="images/products/item-1.jpg"/>*/}
  //         <GalleryScroll />
  //       </div>
  //     <h1 className="text-6xl font-bold italic my-2 text-center md:hidden">Emmelina <br/>Crew</h1>
  //       <div className="md:hidden grid border-2 hover:border-black bg-white p-6 aspect-square">
  //         {/*<img className="object-contain w-full h-full p-6" src="images/products/item-1.jpg"/>*/}
  //         <Gallery />
  //       </div>

  //     <ProductSpecs />
  //   </div>
  )
}

export default Viewer