import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Topo from '../components/Topo'
import Base from '../components/Base'

export default function Home() {
  return (
    <>
      <Head>
        <title>CDPI</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topo/>
      
      <div className={styles.container_content}>
        <div class={styles.container_root}>
          <h1>Seja bem vindo ao nosso catálogo de produtos importados</h1>
          <span>fique a vontade para conhecer nossas mercadorias</span>
          <br/>
          <a href='\products'>Abrir Catálogo</a>
        </div>
      </div>

      <Base/>
    </>
  )
}