import React from 'react'
import Hero from './Hero'
import CategoryCard from './CategoryCard'
import SingleProductCard from '../SingleProductCard/SingleProductCard'
import ShoppingCart from '../ShoppingCart/ShopingCart'

const Dashboard = () => {
  return (
    <div>
      <Hero />
      <CategoryCard />
      <SingleProductCard />
    </div>
  )
}

export default Dashboard
