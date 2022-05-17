import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProductListHeader from '../components/products/ProductListHeader'
import { db } from '../firebase'
import {collection, onSnapshot, where, query, doc, serverTimestamp, getDoc} from "@firebase/firestore"
import Link from 'next/link'
import { useRouter } from 'next/router'

import BasicLayout from '../components/products/BasicLayout'
import ProductList from '../components/products/ProductList'


const Outdoor = () => {
    const [outdoors, setOutdoors] = useState([]);


//This use effect gives a real time update to the website when a new producted is added or modified
    useEffect(() => {
        return onSnapshot(query(collection(db, 'products'), where("category", "==", "outdoor")),
        snapshot => {
            setOutdoors(snapshot.docs);
        })
    }, [db])



  return (

    <div className="bg-rose-50">
    <Header />
    <div >
    <ProductListHeader />
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto container mt-10 md:my-10">
 {outdoors.map((indoor) => (
<ProductList key={indoor.id} id={indoor.id} image={indoor.data().image} name={indoor.data().name} price={indoor.data().price}/>
      ))}

    </div>
  </div>
  </div>
  )
}

export default Outdoor