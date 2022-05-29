import styles from "./homeUrls.module.css";
import Link from 'next/link'

const homeUrls = () => {
  return (
    <div className={styles.grid}>
      <Link href="/about">
        <a className={styles.card}>
          <h2>About &rarr;</h2>
          <p>About page related information states here.</p>
        </a>
      </Link>


      <Link href="/blog">
        <a className={styles.card}>
          <h2>Blog &rarr;</h2>
          <p>Blog page. Welcome to our blog</p>
        </a>
      </Link>

      <Link href="/newsletter">
        <a className={styles.card}>
          <h2>Newsletter &rarr;</h2>
          <p>Please subsribe our newsletter</p>
        </a>
      </Link>

      <Link href="/contact">
        <a className={styles.card}>
          <h2>Contact &rarr;</h2>
          <p>Contact page. Please contact us if you have any questions</p>
        </a>
      </Link>
    </div>
  )
}

export default homeUrls;
