import Head from "next/head";
import Navbar from '../Components/Navbar/Navbar'
import Homepage from "../Components/Home/Homepage";
import styles from "../styles/Home.module.css";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lize Transport</title>
        <meta name="Lize" content="Generated by create next app" />
        <link rel="icon" href="../imgs/logo.png" />
      </Head>

      <Navbar />
      <Homepage />
      <Footer/>
    </div>
  );
}
