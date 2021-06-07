import Head from 'next/head'
import withAuth from '../HOC/withAuth';
import Link from 'next/link'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Now</title>
      </Head>
      <h1>Home page</h1>
      <Link href="/profile">
        <a href=""  className="bg-blue-500">Proceed to profile</a>
      </Link>
    </div>
  )
}

export default withAuth(Home);

