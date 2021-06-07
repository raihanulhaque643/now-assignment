import React, { useState, useEffect } from "react";
import Head from "next/head";
import withAuth from "../HOC/withAuth";
import axios from "axios";
import { useRouter } from "next/router";

const profile = () => {
  const Router = useRouter();

  const [token, setToken] = useState(localStorage.getItem("sessionToken"));
  const [userName, setUserName] = useState();
  const [error, setError] = useState(null);

  const handleLogout = () => {
    localStorage.clear();
    Router.replace("/auth");   
  };

  useEffect(async () => {
    if (token) {
      try {
        const response = await axios({
          method: "get",
          url: "https://parseapi.back4app.com/users/me",
          headers: {
            "X-Parse-Application-Id":
              "1aKNPKlZZkL3gKe1avjN4bJzq1pkgAw7vj2aLRO3",
            "X-Parse-REST-API-Key": "ibV2rrC1p90TfLxwUumNkKAzI7Rgk49bCj4ODnLV",
            "X-Parse-session-token": `${token}`,
          },
        });
        setUserName(response.data.username);
      } catch (e) {
        console.log({ e });
        setError(e.message);
      }
    }
  }, [token]);

  return (
    <div>
      <Head>
        <title>Now | Profile</title>
      </Head>
      profile page {userName && `of ${userName}`} <br />
      {error && error} <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default withAuth(profile);
