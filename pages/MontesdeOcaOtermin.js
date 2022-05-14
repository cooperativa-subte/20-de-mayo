import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import MontesdeOcaOtermin from '../public/images/Montes de Oca Otermin.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const MontesdeOcaOterminPage = () => {
  const [imageSrc] = React.useState(MontesdeOcaOtermin.src);

  return (
    <>
      <Head>
        <title>Montes de Oca Otermin</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image src={BackArrow} alt="Botón de volver atrás" />
        </Link>
        <h1>IMÁGENES DEL SILENCIO</h1>
      </header>
      <main className={styles.main}>
        <Image src={MontesdeOcaOtermin} alt="Foto de Montes de Oca Otermin" />
        <div className={styles.downloadContainer}>
          <a href={imageSrc} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        </div>
      </main>
    </>
  )
}

export default MontesdeOcaOterminPage;