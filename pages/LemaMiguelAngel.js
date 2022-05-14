import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import LemaMiguelAngel from '../public/images/Lema Miguel Angel.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const LemaMiguelAngelPage = () => {
  const [imageSrc] = React.useState(LemaMiguelAngel.src);

  return (
    <>
      <Head>
        <title>Lema Miguel Angel</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image src={BackArrow} alt="Botón de volver atrás" />
        </Link>
        <h1>IMÁGENES DEL SILENCIO</h1>
      </header>
      <main className={styles.main}>
        <Image src={LemaMiguelAngel} alt="Foto de Lema Miguel Angel" />
        <div className={styles.downloadContainer}>
          <a href={imageSrc} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        </div>
      </main>
    </>
  )
}

export default LemaMiguelAngelPage;