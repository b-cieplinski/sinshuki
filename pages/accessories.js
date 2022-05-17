import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProductListHeader from '../components/products/ProductListHeader'
import { db } from '../firebase'
import {collection, onSnapshot, where, query, doc, serverTimestamp, getDoc} from "@firebase/firestore"
import ProductList from '../components/products/ProductList'

const Indoor = () => {
    const [accessories, setAccessories] = useState([]);


//This use effect gives a real time update to the website when a new producted is added or modified
    useEffect(() => {
        return onSnapshot(query(collection(db, 'products'), where("category", "==", "accessories")),
        snapshot => {
            setAccessories(snapshot.docs);
        })
    }, [db])

  return (

      <div className="bg-rose-50">
      <Header />
      <div >
      <ProductListHeader/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto container mt-10 md:my-10">
   {accessories.map((accessories) => (
<ProductList key={accessories.id} id={accessories.id} image={accessories.data().image} name={accessories.data().name} price={accessories.data().price}/>
        ))}

      </div>
    </div>
    </div>
  )
}

export default Indoor