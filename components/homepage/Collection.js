import React from 'react'

const Collection = () => {
  return (
    <div className="container mx-auto my-10">
        <main className="grid grid-cols-1 md:grid-cols-2 relative gap-4">
        <div className="grid mx-auto text-center relative my-10 md:my-0">
                <h1 className="text-7xl font-bold italic">Histeria</h1>
                <h1 className="text-7xl font-bold mb-10">Collection</h1>
                <p className="font-thin text-sm w-80 text-center font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry. text of the printing and typesetting industry. text of the printing and typesetting industry. text of the printing and typesetting industry.</p>
            <div className=" border-2 border-black mt-10 w-72 right-0 relative">
                <img src="images/latest/item-2.jpg" className="object-cover w-72 h-48 -translate-x-4 translate-y-4 border border-black"></img>
                </div>
                </div>
            <div className="grid relative mx-auto my-auto">
                <div className="absolute h-96 w-64 border-2 border-black"/>
                <img src="images/latest/item-3.jpg" className="border border-black translate-y-4 translate-x-4 object-contain h-96 w-96" />
                <button className="absolute bottom-4 right-0 bg-green-200 rounded-md border-2 border-black px-8 py-2">Explore</button>
            </div>
        </main>
    </div>
  )
}

export default Collection