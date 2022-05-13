import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProductListHeader from '../components/products/ProductListHeader'
import { db } from '../firebase'
import {collection, onSnapshot, where, query, doc, serverTimestamp, getDoc} from "@firebase/firestore"
import Link from 'next/link'
import { useRouter } from 'next/router'

import BasicLayout from '../components/products/BasicLayout'


const Accessories = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [accessories, setAccessories] = useState([]);


//This use effect gives a real time update to the website when a new producted is added or modified
    useEffect(() => {
        return onSnapshot(query(collection(db, 'products'), where("category", "==", "accessories")),
        snapshot => {
            setAccessories(snapshot.docs);
        })
    }, [db])



  return (

      <div>
      <Header />
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 items-center p-10">
    {accessories.map((accessories) => (

      <BasicLayout key={accessories.id} id={accessories.id} image={accessories.data().image} name={accessories.data().name} price={accessories.data().price}/>

        ))}
    </div>
    </div>
  )
}

export default Accessories