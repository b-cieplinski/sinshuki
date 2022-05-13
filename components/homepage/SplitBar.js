import React from 'react'

const SplitBar = ({splittext}) => {
  return (
    <div className="w-full border-y border-black py-4 flex space-x-4 justify-center my-10 bg-white">
        <h1 className="uppercase">{splittext}</h1>
        <h1 className="uppercase">{splittext}</h1>
        <h1 className="uppercase">{splittext}</h1>
    </div>
  )
}

export default SplitBar