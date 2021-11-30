import Head from "next/head";
import styles from "./MainLayout.module.css"

export default function MainLayout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title !== "" ? title : "Tim Dev"}</title>
        <meta name="description" content="Timur Bayramgulov - Works" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.container}>{children}</div>
      </div>
    </>
  );
}
