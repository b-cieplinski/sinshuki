import React from 'react'
import Header from '../../components/Header'
import ProductListHeader from '../../components/products/ProductListHeader'
import ProductListVariantA1 from '../../components/products/ProductListVariantA1'
import ProductListVariantB from '../../components/products/ProductListVariantB'
import ProductListVariantC from '../../components/products/ProductListVariantC'

const products = () => {
  return (
    <div className="bg-rose-50">
        <Header />
        <ProductListHeader />
        <ProductListVariantA1 />
        <ProductListVariantB />
        <ProductListVariantC />
        <div></div>

    </div>
  )
}

export default products