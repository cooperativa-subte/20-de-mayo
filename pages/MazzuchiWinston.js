import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import MazzuchiWinston from '../public/images/Mazzuchi Winston.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const MazzuchiWinstonPage = () => (
  <>
    <Head>
      <title>Mazzuchi Winston | 27ᵃ marcha del silencio</title>
      <meta name="description" content="Mazzuchi Winston | Accedé a los retratos de las y los desaparecidos para sostenerlos en la Marcha del Silencio."/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <div className={styles.mainImageContainer}>
        <Image layout="fill" placeholder="blur" src={MazzuchiWinston} alt="Foto de Mazzuchi Winston" />
      </div>
      <div className={styles.downloadContainer}>
        <a href={MazzuchiWinston.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://sitiosdememoria.uy/sites/default/files/2020-02/MAZZUCHI%20FRANTCHEZ%2C%20Winston%20C%C3%A9sar%20Ficha%20accesible.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default MazzuchiWinstonPage;
