import Link from "next/link";
import styles from './Page404.module.css';
import { useEffect } from "react";
import { useRouter } from 'next/router';

const Page404 = () => {
  const router = useRouter()

  useEffect(()=> {
    setTimeout(()=> {
      router.push('/')
    }, 10000)
  },[])

  return (
    <div className={styles.container404}>
      Opps.
      <h1 className={styles.header404}>The page you are looking for does not exists.</h1>
      <p>
        If you want to return home page
      </p>
      <Link href={'/'} >
        <a className={styles.button404}>Click here</a>
      </Link>
      <p> If you do not click the return home page button page will redirect you to home page in 10 seconds</p>
    </div>
  )
}

export default Page404;
