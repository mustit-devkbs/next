import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { proxy, useSnapshot } from "valtio";
import Auth from "../entity/auth/auth";
import styles from "../styles/Home.module.css";

interface Props {
  cookiz: string;
}

const Home: NextPage<Props> = (props) => {
  const model = proxy(new Auth());
  const state = useSnapshot(model);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://m.web.mustit.co.kr">Props react!</a>
        </h1>
        <h1 className={styles.title}>
          1. App getInitailProps(쿠키세팅) SSR 최초 한번 실행! === nuxt
          serverInit
        </h1>
        <h1 className={styles.title}>
          2. Page getServerSideProps === nuxt AsyncData
        </h1>

        <h1 className={styles.title}>3. render {">"} props.cookies</h1>

        <p className={styles.description}>
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>{JSON.stringify(state)}</div>
        <div className={styles.grid}>{JSON.stringify(props.cookiz)}</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
