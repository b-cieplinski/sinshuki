import '../styles/globals.css'
import '../styles/gallery.css'
import { SessionProvider } from "next-auth/react"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function MyApp({ Component, pageProps: {session, ...pageProps}, }) {
  return (
    <SessionProvider session={session}>
  <RecoilRoot>
  <Component {...pageProps} />
  </RecoilRoot>
  </SessionProvider>
)}

export default MyApp
