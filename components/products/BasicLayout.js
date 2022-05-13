import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

const BasicLayout = ({id, name, image, price}) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 items-center p-10 cursor-pointer">
      <Link href={`${id}`}>
              <div className="self-start mx-auto flex flex-col" key={id}>
          <div className="w-96 h-96 md:w-64 md:h-64 object-fill border border-black top-0 relative">
            <img layout="fill" src={image}/>
            </div>
            <div className="flex justify-between">
              <h2 className="tracking-wider">{name}</h2>
              <p className="italic font-bold">{price} usd</p>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default BasicLayout