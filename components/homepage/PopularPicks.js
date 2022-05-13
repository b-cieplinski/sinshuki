import React from 'react'

const PopularPicks = () => {
  return (
      <div>
        <h1 className="text-center text-5xl italic p-2 mb-6 ml-6 font-bold">
🔥
🔥
🔥 Hot Right Now 
🔥
🔥
🔥</h1>
    <div className="bg-hero-pattern bg-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 items-center p-10">
            <div className="flex flex-col items-center">
                <img src="images/popular/item-2.jpg" className="w-72 h-72 border-2 border-black object-cover"></img>
                <button className="border border-black px-24 py-4 translate-y-0 bg-lime-200 -translate-y-5 font-bold font-wide">Buy now</button>
            </div>
            <div className="flex flex-col items-center">
                <img src="images/popular/item-2.jpg" className="w-72 h-72 border-2 border-black object-cover"></img>
                <button className="border border-black px-24 py-4 translate-y-0 bg-lime-200 -translate-y-5 font-bold font-wide">Buy now</button>
            </div>
            <div className="flex flex-col items-center">
                <img src="images/popular/item-2.jpg" className="w-72 h-72 border-2 border-black object-cover"></img>
                <button className="border border-black px-24 py-4 translate-y-0 bg-lime-200 -translate-y-5 font-bold font-wide">Buy now</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PopularPicks