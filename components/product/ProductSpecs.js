import React, {useState, useEffect} from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { useRecoilState } from 'recoil'
import { db } from '../../firebase'
import {collection, onSnapshot, where, query, doc, serverTimestamp, getDoc} from "@firebase/firestore"


const ProductSpecs = ({id, name, price, description, details}) => {

  const [globalvalues, setGlobalValues] = useState([]);

  //This use effect gives a real time update to the website when a new producted is added or modified
  useEffect(() => {
    return onSnapshot(query(collection(db, 'global-values')),
    snapshot => {
        setGlobalValues(snapshot.docs);
    })
}, [db])

  return (
            <div className="grid border-2 hover:border-black bg-white h-3xl">
            <h1 className="text-6xl font-bold italic my-2 text-center hidden md:inline px-5">{name}</h1>
          <div className="grid grid-cols-6 my-4 gap-6 mx-10 py-6">
            <div className="grid"><button className="border-2 border-black hover:bg-black hover:text-white bg-green-100 w-12 h-12">XS</button></div>
            <div className="grid"><button className="border-2 border-black hover:bg-black hover:text-white bg-red-300 w-12 h-12">S</button></div>
            <div className="grid"><button className="border-2 border-black hover:bg-black hover:text-white w-12 h-12">M</button></div>
            <div className="grid"><button className="border-2 border-black hover:bg-black hover:text-white w-12 h-12">L</button></div>
            <div className="grid"><button className="border-2 border-black hover:bg-black hover:text-white w-12 h-12">XL</button></div>
            <div className="grid"><button className="border-2 border-black hover:bg-black hover:text-white w-12 h-12">XXL</button></div>
          </div>
          <div className="mx-10"><button className="text-center border-2 border-black w-full py-4 hover:bg-black hover:text-white text-2xl ">
            <p className="mr-5 inline italic">${price}</p><p className="ml-5 inline font-bold">Add to cart</p>
            </button></div>
            <div className="my-0 py-2 mx-4 border-b-2 border-black flex flex-col">
            {/* <div className="text-xl flex-1 italic">Description</div>
            <div className="text-6xl flex-1 text-right">+</div> */}
        <Disclosure>
          {({defaultOpen}) => (
            <>
            
              <Disclosure.Button>
                <div className="flex justify-between items-center">
              <div className="text-xl flex-1 italic text-left">Description</div>
                <div className="text-6xl flex-1 text-right">+</div>
              </div>
                {/* <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-purple-500`}
                /> */}
              </Disclosure.Button>
<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 w-96 text-left">
<Transition
        open={defaultOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
{description}
                </Transition>
              </Disclosure.Panel>

            </>
          )}
        </Disclosure>

            </div>
            <div className="my-0 py-2 mx-4 border-b-2 border-black flex flex-col">
            <Disclosure>
          {({ open }) => (
            <>
            
              <Disclosure.Button>
                <div className="flex justify-between items-center">
              <div className="text-xl flex-1 italic text-left">Details</div>
                <div className="text-6xl flex-1 text-right">+</div>
              </div>
                {/* <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-purple-500`}
                /> */}
              </Disclosure.Button>
<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 w-96 text-left">
<Transition
        show={open}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
          {details}
                </Transition>
              </Disclosure.Panel>

            </>
          )}
        </Disclosure>
            </div>
            <div className="my-0 py-2 mx-4 flex flex-col">
            <Disclosure>
          {({ open }) => (
            <>
            
              <Disclosure.Button>
                <div className="flex justify-between items-center">
              <div className="text-xl flex-1 italic text-left">Size Guide</div>
                <div className="text-6xl flex-1 text-right">+</div>
              </div>
                {/* <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-purple-500`}
                /> */}
              </Disclosure.Button>
<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 w-96 text-left">
<Transition
        show={open}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
    {globalvalues.map((globalvalue) => (
      <div key={globalvalue.id}>
{globalvalue.data().data}
  </div>
  ))}
                </Transition>
              </Disclosure.Panel>

            </>
          )}
        </Disclosure>
            </div>
        </div>
  )
}

export default ProductSpecs