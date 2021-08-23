import Image from 'next/image'

import htmlLogo from '../../public/img/logos/html.svg'
import cssLogo from '../../public/img/logos/css.svg'
import jsLogo from '../../public/img/logos/js.svg'
import nodeLogo from '../../public/img/logos/node.svg'
import reactLogo from '../../public/img/logos/react.svg'
import nextLogo from '../../public/img/logos/nextjs.svg'
import sassLogo from '../../public/img/logos/sass.svg'
import jestLogo from '../../public/img/logos/jest.svg'
import mongoDBLogo from '../../public/img/logos/mongodb.svg'
import springLogo from '../../public/img/logos/spring.svg'
import tsLogo from '../../public/img/logos/typescript.svg'
import gitLogo from '../../public/img/logos/git.svg'
import graphqlLogo from '../../public/img/logos/graphql.svg'
import expressLogo from '../../public/img/logos/express.svg'

import styles from './styles.module.scss'

export default function Techs () {
  const arrayLogos1 = [
    { alt: 'JavaScript logo', ...jsLogo },
    { alt: 'React logo', ...reactLogo },
    { alt: 'Next logo', ...nextLogo },
    { alt: 'Ts logo', ...tsLogo },
    { alt: 'Html logo', ...htmlLogo },
    { alt: 'Css logo', ...cssLogo },
    { alt: 'Sass logo', ...sassLogo }
  ]
  const arrayLogos2 = [
    { alt: 'NodeJs logo', ...nodeLogo },
    { alt: 'Express logo', ...expressLogo },
    { alt: 'MongoDB logo', ...mongoDBLogo },
    { alt: 'GraphQL logo', ...graphqlLogo },
    { alt: 'Jest logo', ...jestLogo },
    { alt: 'Git logo', ...gitLogo },
    { alt: 'Spring logo', ...springLogo }
  ]
  return (
    <div className={styles.container}>
      <div className={styles.sliderWrapper}>
        <div className={styles.slider1}>
          {
            arrayLogos1.map(logo => (
              <div
                className={styles.tech}
                key={logo.alt}
              >
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  alt={logo.alt}
                />
              </div>
            ))
          }
        </div>
        <div
          className={styles.slider2}
        >
          {
            arrayLogos1.map(logo => (
              <div
                className={styles.tech}
                key={logo.src}
              >
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  alt={logo.alt}
                />
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.sliderWrapper} style={{ animationDuration: '45s' }}>
        <div className={styles.slider1}>
          {
            arrayLogos2.map(logo => (
              <div
                className={styles.tech}
                key={logo.src}
              >
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  alt='logo'
                />
              </div>
            ))
          }
        </div>
        <div
          className={styles.slider2}
        >
          {
            arrayLogos2.map(logo => (
              <div
                className={styles.tech}
                key={logo.src}
              >
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  alt='logo'
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
