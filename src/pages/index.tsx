import Head from "next/head";
import React from "react";
import {Header, Banner} from "../components";

const Home : React.FC = () : JSX.Element => {
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
        </main>

      </div>
    </div>
  );
}

export default Home;