import styles from "../styles/layout.module.css";
import utilsStyles from "../styles/utils.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const name = "Your name";
export const siteTitle = "Next.js Sample Websit";

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Nextjs"
        />

        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${
            encodeURI()
            //   siteTitle
          }.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />

        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header>
        {home ? (
          <>
            <Image
              priority
              src="/images/aqua homepage.PNG"
              className={utilsStyles.boderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilsStyles.headings2Xl}></h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilsStyles.borderCircle}
                  height={108}
                  width={108}
                  alt="pix1"
                />
              </a>
            </Link>
            <h2 className={utilsStyles.headingLg}>
              <Link href="/">
                <a className={utilsStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">Back to home</Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
