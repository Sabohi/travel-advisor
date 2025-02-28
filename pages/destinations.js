import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic"
import DestinationComponent from "../components/Destinations"
const Nav = dynamic(()=> import("subscriberApp/nav"));
const Footer = dynamic(()=> import("subscriberApp/footer"));

export default function DestinationPage() {
    return (
    <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav>This is the nav in app 2</Nav>
            <main className={styles.main}>
            <h1 className={styles.title}>
                this is the destination page
            </h1>
            <h2>With destination component</h2>
            <DestinationComponent/>
        </main>
        <Footer></Footer>
    </div>
    )
}
