import Layout from '../layout/Layout'
import '../styles/globals.css'


// import Router from "next/router"
// import NProgress from 'nprogress'; //nprogress module
// import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events. 

// Router.onRouteChangeStart = url => {
//   NProgress.start()
// }

// Router.onRouteChangeComplete = () => NProgress.done()

// Router.onRouteChangeError = () => NProgress.done()


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp  