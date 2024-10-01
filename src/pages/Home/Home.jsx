import React, { useContext } from 'react'
import Layout from '../../component/Layout/layout'
import myContext from '../../context/data/myContext'
import Herosection from '../../component/heroSection/Herosection'
import Filter from '../../component/Filter/Filter'
import ProductCard from '../../component/ProductCard/ProductCard'
import Track from '../../component/track/track'

const Home = () => {
  // const Context = useContext(myContext)
  // console.log(Context)
  // // const {name , rollno } = Context
  // const {state , color } = Context
  return (
    
      <Layout>
        <Herosection />
        {/* <Filter /> */}
        <ProductCard />
        {/* <Track /> */}
        
        
      </Layout>
    
  )    
}

export default Home;

