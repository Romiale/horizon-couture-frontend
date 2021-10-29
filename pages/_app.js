import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import '../styles/alice-carousel.scss';

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
      <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
