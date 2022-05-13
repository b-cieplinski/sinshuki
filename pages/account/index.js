import Link from 'next/link'
import React from 'react'
import Header from '../../components/Header'

const account = () => {
  return (
    <div>
        <Header />
        <div className="container mx-auto my-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-black p-6 bg-white">
                    <div className="h-28 w-28 p-6 border-2 border-black">henlo</div>
                    <div className="my-2">Name</div>
                    <div className="my-2">Surename</div>
                </div>
                <div className="border-2 border-black p-6 bg-white">
                <Link href="account/orders/history" passHref>
                    <button className="border-2 border-black px-2 py-4 mr-4">Order History</button>
                    </Link>
                    <Link href="/administration" passHref>
                    <button className="border-2 border-black px-2 py-4 mr-4">Administration</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default account