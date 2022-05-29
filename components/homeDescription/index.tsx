import styles from "./homeDescription.module.css";

const HomeDescription = () => {
  return (
    <div>
      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.tsx</code>
      </p>
    </div>
  )
}

export default HomeDescription;
