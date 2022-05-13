import { collection, getDoc, doc, getDocs } from 'firebase/firestore';
import React from 'react'
import GalleryScroll from '../components/product/GalleryScroll';
import Gallery from '../components/product/Gallery';
import { db } from '../firebase';
import ProductSpecs from '../components/product/ProductSpecs';
import Header from '../components/Header';

const ProductDetails = ({productProps}) => {
  const product = JSON.parse(productProps);
  return (
    <div>
<Header />
<main className="grid grid-cols-1 md:grid-cols-2 mx-auto ">
      <section className="sm:col-span-1 col-span-2">
      <div className="object-contain w-full h-full p-6 hidden md:inline-grid justify-end">
      <GalleryScroll key={product.image} heroImage={product.image} image1={product.image1} image2={product.image2} image3={product.image3} image4={product.image4} image5={product.image5} image6={product.image6} image7={product.image7}/>
      </div>
 <div className="md:hidden grid border-2 hover:border-black bg-white p-6 aspect-square my-5 mx-4">
  <Gallery key={product.image} heroImage={product.image} image1={product.image1} image2={product.image2} image3={product.image3} image4={product.image4} image5={product.image5} image6={product.image6} image7={product.image7}/>
      </div>
      </section>

      <section className="md:inline-grid md:col-span-1 mx-4">
        <div className="hidden md:inline-grid fixed top-24 ">
        <ProductSpecs key={product.id} name={product.name} image={product.image} description={product.description} price={product.price} details={product.details}/>
        </div>
        <div className="md:hidden mb-5">
        <ProductSpecs key={product.id} name={product.name} image={product.image} description={product.description} price={product.price} details={product.details}/>
        </div>
      </section>
  </main>
    </div>
  )
}

export default ProductDetails

export const getStaticPaths = async () => {

  const snapshot = await getDocs(collection(db, 'products'));
  const paths = snapshot.docs.map(doc => {
      return {
          params: {id: doc.id.toString()}
      }
  })

  return {
      paths,
      fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const docRef = doc(db, 'products', id);
  const docSnap = await getDoc(docRef);

  return {
    props: { productProps: JSON.stringify(docSnap.data()) || null}
  }
}