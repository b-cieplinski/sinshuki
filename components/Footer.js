import React from 'react'

const Footer = () => {
  return (
    <div className="bg-white w-full">
    <div className="border-t-2 border-black container mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 my-4 px-10">
        <div className="grid grid-cols-2">
          <div className="">
            <h1 className="text-3xl font-bold italic mb-4">About Us</h1>
            <h2>Our Story</h2>
            <h2>Lookbook</h2>
            <h2>Stores</h2>
            <h2>Career</h2>
          </div>
          <div>
            <h1 className="text-3xl font-bold italic mb-4">Help</h1>
          <h2>Our Story</h2>
            <h2>Lookbook</h2>
            <h2>Stores</h2>
            <h2>Career</h2>
          </div>

        </div>
        <div className="grid grid-row-2 px-10">
        <div className="grid">
          <div className="flex h-10 mt-5 space-x-4">
          <div className="border-2 px-6 py-1 rounded-full font-thin hover:font-normal cursor-pointer border-black">Men</div>
        <div className="border-2 px-6 py-1 rounded-full font-thin hover:font-normal cursor-pointer border-black">Woman</div>
        <div className="border-2 px-6 py-1 rounded-full font-thin hover:font-normal cursor-pointer border-black">Gifts</div>
        <div className="border-2 px-6 py-1 rounded-full font-thin hover:font-normal cursor-pointer border-black">Kids</div>
          </div>
        </div>
        <div className="grid">
          NewsLetter
        </div>
      </div>
      </div>

    </div>
    </div>
  )
}

export default Footer