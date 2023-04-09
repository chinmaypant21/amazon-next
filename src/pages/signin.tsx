import { getProviders, signIn, getSession, getCsrfToken } from "next-auth/react";
import React from "react";

const signin : React.FC<any> = ({ providers }) : JSX.Element  => {
    return (
      <div>
        { 
            Object.values(providers).map((provider : any) => (
                <div key={provider.name}>
                <button onClick={() => signIn(provider.id)}>
                    Sign in with {provider.name}
                </button>
                </div>
              )
            )
        }
      </div>
    );
  }
  
  export default signin;

export async function getServerSideProps(context) {
    return {
      props: {
        providers : await getProviders(),
        csrfToken: await getCsrfToken(context),
      },
    };
  }

