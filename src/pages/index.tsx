import Head from "next/head";
import styles from "@kita/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kita - Test</title>
        <meta name="description" content="Lindsay's Kita test submission" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <aside></aside>
        </main>
      </div>
    </>
  );
}
