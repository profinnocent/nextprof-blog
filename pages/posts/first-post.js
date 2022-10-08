import React from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";

const FisrtPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("stripe loaded.");
        }}
      />
      <h1>First Post</h1>
      <p>This is the first post</p>
      <Link href="/">Back Home</Link>
    </Layout>
  );
};

export default FisrtPost;
