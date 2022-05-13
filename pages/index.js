import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Banner from '../components/Homepage/Banner'
import Lastest from '../components/homepage/Lastest'
import PopularPicks from '../components/homepage/PopularPicks'
import Update from '../components/homepage/Update'
import Collection from '../components/homepage/Collection'
import SplitBar from '../components/homepage/SplitBar'
import { db } from '../firebase'
import {collection, onSnapshot, where, query, doc, serverTimestamp, getDoc} from "@firebase/firestore"
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [banners, setBanner] = useState([]);

//This use effect gives a real time update to the website when a new producted is added or modified
useEffect(() => {
  return onSnapshot(query(collection(db, 'homepage')),
  snapshot => {
      setBanner(snapshot.docs);
  })
}, [db])

  return (
    <div className="bg-rose-50">
      <Header />
      {banners.map((banner) => (
      <Banner key={banner.id} id={banner.id} bannerImage={banner.data().bannerimage} bannerText={banner.data().headertext}/>
      ))}
      {banners.map((banner) => (
      <SplitBar key={banner.id} splittext={banner.data().splittext}/>
      ))}
      <Lastest/>
      {banners.map((banner) => (
      <SplitBar key={banner.id} splittext={banner.data().splittext}/>
      ))}
      <PopularPicks />
      <Update />
      <Collection />
      {banners.map((banner) => (
      <SplitBar key={banner.id} splittext={banner.data().splittext}/>
      ))}
      
      <Footer />
    </div>
  )
}
