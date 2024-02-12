import React, { memo } from 'react'
import Hero from './Hero'
import CategoryCard from './CategoryCard'
import SingleProductCard from '../SingleProductCard/SingleProductCard'
import ShiftingCountdown from '../TimerComponent/TimerComponent'
import CategoryList from './CategoryList'

const Dashboard = () => {
  return (
    <div>
      <Hero />
      <CategoryCard />
      {/* <ShiftingCountdown /> */}
      <div className="flex mt-10 max-w-[94%] mx-auto">
        <CategoryList />
        <div className="w-[85%] pt-[35px]">
        {/* <SingleProductCard /> */}
        </div>
      </div>
    </div>
  )
}

export default memo(Dashboard);
