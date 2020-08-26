import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Form from '../components/form'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>It's Time</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}> */}
      <div className={styles.title}>
        <img src="/images/asset13.png" alt="it's time graphic wide" />
        <div className={styles.subtitle}>
          <p>Coming November 2020</p>
        </div>
      </div>
      <div className={styles.para1}>
        <p>On 1 November, a week-long United Nations <br />Climate Change Conference was supposed to <br />take place in Glasgow Scotland. Due to the <br />Coronavirus pandemic, it’s been postponed.</p>
        <br />
        <h1>That's not good enough.</h1>
      </div>
      <div className={styles.para2}>
        <p>While COVID-19 has occupied our attention in 2020, the <br /> world has continued to burn and this year is set to be the <br />hottest on record. It’s time to take matters into our own <br />hands. It’s time for a conference focused on real change. It’s <br />time for a global festival of direct action.</p>
        <br />
        <h1>It's time to do something.</h1>
      </div>
      <Form className={styles.form} />
      {/* </main> */}

      <footer className={styles.footer}>
        <h3>Footer TBC</h3>
        <br />
        <p>
          This event is powered by people who care. The It’s Time event is a <br /> not for profit and exists because we need to keep the climate <br />crisis front and centre of the conversation.
        </p>
      </footer>
    </div>
  )
}
