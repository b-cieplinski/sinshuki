import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const ProductList = ({image, name, id, price}) => {
    const router = useRouter()
  return (
    <div className="cursor-pointer mx-auto m-10" onClick={() => router.push(`${id}`)}>
        <div className="border-2 border-black sm:w-64 sm:h-86 w-96 h-96 absolute -translate-x-4 -translate-y-4"/>
        <div className="sm:w-72 sm:h-72 w-96 h-96 flex flex-col relative border-2 border-black">
        <Image layout="fill" src={image} className="absolute"/>
        </div>
        <div className="justify-start flex flex-col pl-4 pt-2 w-64">
            <p className="flex text-2xl ">{name}</p>
            <p className="flex">{price} USD</p>
        </div>
    </div>
  )
}

export default ProductList