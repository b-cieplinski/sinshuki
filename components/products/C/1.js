import React from 'react'
import { useRouter } from 'next/router'

const One = ({id, name, image, price}) => {
  const router = useRouter()
  return (
    <div className="self-start mx-auto flex flex-col cursor-pointer" onClick={() => Router.push(`${id}`)}>
    <img className="w-96 h-96 object-cover border border-black" src={image}/>
    <div className="flex justify-between">
      <h2 className="tracking-wider">{name}</h2>
      <p className="italic font-bold">{price} usd</p>
    </div>
</div>
  )
}

export default One