import {NextPage} from "next";
import styles from './aboutPage.module.css';
import Head from "next/head";
import Image from "next/image"

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Learning Nextjs - About</title>
        <meta name="description" content="Learn nextjs by examples about page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.aboutPage}>
        <h1>
          About
        </h1>
        <Image src={'/nextjs-logo.png'} alt={'nextjs logo'} width={200} height={200 } />
        <p>That is the paragraph we are planning to use for explaining about </p>
        <a href={"/blog"} style={{color: "red"}} >Blog</a>
      </div>
    </>
  )
}

export default About;
