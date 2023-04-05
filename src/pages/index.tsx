import Head from "next/head";
import React from "react";
import {Header, Banner, ProductFeed} from "../components";
import fetchFakeStoreAPI from "../utils/fetchFakeStoreAPI";
import { storeProductType } from "../utils/commonTypes"; 


const Home : React.FC<{products: storeProductType[]}> = ({products}) : JSX.Element => {
  return (
    <div>
      <Head>
        <title>Amazon</title>
      </Head>
      <div>

        {/* HomePage Navbar */}
        <Header /> 

        <main className="max-w-screen-2xl mx-auto">
          <Banner />
          <ProductFeed products = {products}/>
        </main>

      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // const products = await fetchFakeStoreAPI()  

  // testing
  const products = Array(10).fill({
    id: 20,
    title: 'DANVOUY Womens T Shirt Casual Cotton Short',
    price: 12.99,
    description: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
    rating: { rate: 3.6, count: 145 }
  })

  return {
    props : {
      products
    },  
  };
  }

export default Home;