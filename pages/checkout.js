import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSession, signIn, signOut } from "next-auth/react"


const Checkout = () => {
    const {data: session} = useSession();
  return (
    <div className="bg-rose-50 h-full mb-20">
        <Header />

        <main className="grid grid-cols-1 md:grid-cols-3 md: xl:grid-cols-3 xl:max-w-6xl mx-auto">
        <section className="col-span-2 mb-32 md:mb-0">
        <div className="text-sm font-bold my-10 px-10">
            You have 6 Items in your shopping basket. <span className="md:hidden">Scoll down to verify selected items and proceed to payment.</span>
        </div>
        <div className="flex flex-row items-center my-5 px-5">
                <div className="relative h-32 w-32"><img src="images/products/item-1.jpg" className="object-contain border border-black"/></div>
                <div className="mx-4">
                    <h1 className="text-4xl mb-2 italic">Title</h1>
                    <p className="text-sm font-thin mb-2">Description</p>
                    <h3 className="italic mb-2">Price</h3>
                    <button>Remove Item</button>
                </div>
            </div>
            <div className="flex flex-row items-center my-5 px-5">
                <div className="relative h-32 w-32"><img src="images/products/item-1.jpg" className="object-contain border border-black"/></div>
                <div className="mx-4">
                    <h1 className="text-4xl mb-2 italic">Title</h1>
                    <p className="text-sm font-thin mb-2">Description</p>
                    <h3 className="italic mb-2">Price</h3>
                    <button>Remove Item</button>
                </div>
            </div>
            <div className="flex flex-row items-center my-5 px-5">
                <div className="relative h-32 w-32"><img src="images/products/item-1.jpg" className="object-contain border border-black"/></div>
                <div className="mx-4">
                    <h1 className="text-4xl mb-2 italic">Title</h1>
                    <p className="text-sm font-thin mb-2">Description</p>
                    <h3 className="italic mb-2">Price</h3>
                    <button>Remove Item</button>
                </div>
            </div>
        </section>

        <section className="hidden md:inline-grid md:col-span-1 ">

          <div className="flex">
                <div className="my-10 border-2 border-black mx-auto p-10">
                    <h1 className="font-bold">Cart Overview</h1>
                    <div className=" border-y-2 border-black py-5">
                        <h4>Sub Total:</h4><p>$69.99</p>
                    </div>
                    <div className=" border-b-2 border-black py-5 flex flex-col">
                        <h4>Delivery Options:</h4>
                        <button className="border-2 border-black py-2 px-4 mb-4">10.99 DHL - Next Day Delivery</button>
                        <button className="border-2 border-black py-2 px-4 mb-4">6.99 InPost Paczkomat</button>
                        <button className="border-2 border-black py-2 px-4 mb-4">6.99 Standard Shipping</button>
                        <button className="border-2 border-black py-2 px-4">Free InStore Pickup</button>
                    </div>
                    <div className="py-5">
                    <h4>Total:</h4>
                    {session ? 
                    (<button className="border-2 border-black py-2 px-4 mx-auto bg-blue w-full bg-indigo-200">Pay for everything <span className="font-bold">$619.99</span></button>)
                    :
                    (<button className="border-2 border-black py-2 px-4 mx-auto bg-blue w-full bg-indigo-200" onClick={signIn}>Sign in or Sign Up to finalize the purchase.</button>)
                    } 
                    </div>
                </div>

          </div>
        </section>


    </main>
    <section className=" md:hidden md:col-span-1 ">
          <div className="fixed bottom-0 ">
          <div className="flex">
                <div className="fixed bottom-0 w-full h-28 border-4 border-black mx-auto bg-white">

                </div>
            </div>

          </div>
        </section>
        <div className="hidden md:inline"><Footer /></div>
        
    </div>
  )
}

export default Checkout