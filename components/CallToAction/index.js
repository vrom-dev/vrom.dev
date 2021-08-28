import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss'
import profilePic from '../../public/img/me2.png'

export default function CallToAction () {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>
          👋 Hola! Soy <span className={styles.gradient}>Víctor Romero</span>
        </h1>
        <p className={styles.bio}>Full Stack Developer, especializado en el ecosistema JavaScript. Esta web es mi pequeño rincón digital — un compendio de cosas que he aprendido y creado.
        </p>
        <p className={styles.bio}>Si quieres contactar conmigo, no dudes en <strong>escribirme</strong>.
        </p>
        <Link
          href='/docs/sample.pdf'
          target='_blank'
          rel='noopener noreferrer'
        >
          <a className={styles.button}>
            Descargar CV
          </a>
        </Link>
      </div>
      <div className={styles.img_container}>
        <Image
          src={profilePic}
          alt='Picture of Vic'
          layout='responsive'
          className={styles.background}
        />
      </div>
    </div>
  )
}
