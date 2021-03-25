import Meta from '../components/common/Meta'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
      <Footer/>
    </>
  )
}

export default Layout