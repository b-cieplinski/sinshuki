import { getProviders, signIn } from "next-auth/react"
import Header from "../../components/Header"

export default function SignIn({ providers }) {
  return (
    <div className='bg-rose-50'>
      <Header />
      <div className='container mx-auto grid grid-cols-1 my-10 justify-items-center h'>
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id, { callbackUrl: "/checkout"})} className="border-2 border-black py-4 px-5">
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
    </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}