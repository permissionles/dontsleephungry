import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Dont Sleep Hungry.org - Some ideas might work." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          End the fuck outta <a href="https://edition.cnn.com/2021/11/18/tech/elon-musk-world-hunger-wfp-donation/index.html">world hunger</a>
        </h1>

        <p className={styles.description}>
          Once and for all.{' '}
          <span className={styles.code}>Code, Design, Ideas, Bread, are all eligible for contribution.</span>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/permissionles/dontsleephungry" className={styles.card}>
            <h2>Contribute &rarr;</h2>
            <p>Github @ dontsleephungry</p>
            <p>Repository for all assets, contribute code and design, post issues, version control.</p>
          </a>

          <a href="https://beta.async.network/project/63783394f3c2da7705c5b4fb" className={styles.card}>
            <h2>Delegate(Beta) &rarr;</h2>
            <p>Async @ dontsleephungry</p>
            <p>Request for tasks, features, pay for special issues, follow ups.</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://prmsnls.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Think of ideas for humanity, some might actually work.
          
        </a>
      </footer>
    </div>
  )
}
