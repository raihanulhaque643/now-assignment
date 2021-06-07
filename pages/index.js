import Head from 'next/head'
import withAuth from '../HOC/withAuth';

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Now</title>
      </Head>
      <h1>Home page</h1>
    </div>
  )
}

export default withAuth(Home);

