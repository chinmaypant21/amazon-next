import Head from "next/head";
import React from "react";
import {Header, Banner} from "../components";

const Home : React.FC = () : JSX.Element => {
  return (
    <div>
      <Head>
        <title>Amazon</title>
      </Head>
      <body>

        {/* HomePage Navbar */}
        <Header /> 

        {/* mx-auto */}
        <main className="max-w-screen-2xl ">
          <Banner />
        </main>

      </body>
    </div>
  );
}

export default Home;