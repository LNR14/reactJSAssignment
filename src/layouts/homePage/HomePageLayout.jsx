import React,{useState,useEffect} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CategoriesSearch from '../../components/Categories/CategoriesSearch';

const HomePageLayout = () => {

  return (
    <>
        <Header/>
        <CategoriesSearch />
        <Footer/>
    </>
  )
}

export default HomePageLayout
