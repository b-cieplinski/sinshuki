import React from 'react'
import Header from '../components/Header'
import ProductListHeader from '../components/products/ProductListHeader'
import ProductListVariantA from '../components/products/ProductListVariantA'
import ProductListVariantB from '../components/products/ProductListVariantB'
import ProductListVariantC from '../components/products/ProductListVariantC'

const products = () => {
  return (
    <div className="bg-rose-50">
        <Header />
        <ProductListHeader />
        <ProductListVariantA />
        <ProductListVariantB />
        <ProductListVariantC />
        <div></div>

    </div>
  )
}

export default products