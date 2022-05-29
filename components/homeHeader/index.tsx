import styles from "./homeHeader.module.css";


const HomeHeader = () => {
  return (
    <h1 className={styles.title}>
      Welcome to <a href="https://nextjs.org">First lesson of Next.js!</a>
    </h1>
  )
}

export default HomeHeader;
