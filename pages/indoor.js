import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProductListHeader from '../components/products/ProductListHeader'
import { db } from '../firebase'
import {collection, onSnapshot, where, query, doc, serverTimestamp, getDoc} from "@firebase/firestore"
import ProductList from '../components/products/ProductList'

const Indoor = () => {
    const [indoors, setIndoors] = useState([]);


//This use effect gives a real time update to the website when a new producted is added or modified
    useEffect(() => {
        return onSnapshot(query(collection(db, 'products'), where("category", "==", "indoor")),
        snapshot => {
            setIndoors(snapshot.docs);
        })
    }, [db])

  return (

      <div className="bg-rose-50">
      <Header />
      <div >
      <ProductListHeader/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto container mt-10 md:my-10">
   {indoors.map((indoor) => (
<ProductList key={indoor.id} id={indoor.id} image={indoor.data().image} name={indoor.data().name} price={indoor.data().price}/>
        ))}

      </div>
    </div>
    </div>
  )
}

export default Indoor