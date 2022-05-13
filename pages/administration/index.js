import Link from 'next/link'
import React from 'react'
import Header from '../../components/Header'

const index = () => {
  return (
    <div>
              <Header />
              <div className="container mx-auto my-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-black p-6 bg-white">
                  <h1 className="flex justify-center">Sales Numbers</h1>
                    <div className="w-full h-full bg-gray-200">

                    </div>
                </div>
                <div className="border-2 border-black p-6 bg-white">
                    <div className=" my-4"/>
                    <div>
                    <Link href="administration/products/add" passHref>
                        <button className="px-4 py-2 border-black border-2 mx-2 my-2">Add New Product</button>
                    </Link>
                        <button className="px-4 py-2 border-black border-2 mx-2 my-2">Edit Existing Product</button>
                        <button className="px-4 py-2 border-black border-2 mx-2 my-2">Delete a Product</button>
                        <div className="border-b-2 my-4"/>
                        <div>HomePage</div>
                        <button className="px-4 py-2 border-black border-2 mx-2 my-2">Change Banner</button>
                        <button className="px-4 py-2 border-black border-2 mx-2 my-2">Change Spliter</button>
                        <button className="px-4 py-2 border-black border-2 mx-2 my-2">Change Lastest Collection</button>
                        <button className="px-4 py-2 border-black border-2 mx-2 my-2">Change Popular Picks</button>
                        <button className="px-4 py-2 border-black border-2 mx-2 my-2">Change Updates</button>
                        <button className="px-4 py-2 border-black border-2 mx-2 my-2"> Change History</button>
                        <div className="border-b-2 my-4"/>
                        <div>Category Page</div>
                        <button className="px-4 py-2 border-black border-2 mx-2 my-2">Title Change</button>
                        <button className="px-4 py-2 border-black border-2 mx-2 my-2">Description Change</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index