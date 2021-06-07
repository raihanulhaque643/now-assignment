import React from 'react'
import Head from 'next/head'
import withAuth from '../HOC/withAuth';

const profile = () => {
    return (
        <div>
            <Head>
                <title>Now | Profile</title>
            </Head>
            profile page
        </div>
    )
}

export default withAuth(profile);
