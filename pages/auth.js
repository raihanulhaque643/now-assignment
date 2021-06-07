import React from 'react'
import Head from 'next/head'
import Signin from '../components/Signin'
import Signup from '../components/Signup'

const auth = () => {
    return (
        <div>
            <Head>
                <title>Now | Auth</title>
            </Head>
            <Signin />
            <Signup />
        </div>
    )
}

export default auth
