import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import SerraHelios from '../public/images/Serra Helios.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const SerraHeliosPage = () => {
  const [imageSrc] = React.useState(SerraHelios.src);

  return (
    <>
      <Head>
        <title>Serra Helios</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image src={BackArrow} alt="Botón de volver atrás" />
        </Link>
        <h1>IMÁGENES DEL SILENCIO</h1>
      </header>
      <main className={styles.main}>
        <Image src={SerraHelios} alt="Foto de Serra Helios" />
        <div className={styles.downloadContainer}>
          <a href={imageSrc} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        </div>
      </main>
    </>
  )
}

export default SerraHeliosPage;