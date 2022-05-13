import React from 'react'
import { getProviders, signIn } from "next-auth/react"
import Header from '../../components/Header'

//Browser render
function signin({ providers }) {
  return (
    <>
      <Header />
      <div className=" ">
        <div className="flex flex-col items-center justify-center py-2 px-14 text-center border-2 border-black w-96 mx-auto">
          <h1 className="italic text-xl">SINSHUKI</h1>
          <div className="mt-40">
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button className="p-3 bg-blue-400 text-white rounded-lg" onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

//SSR
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

export default signin