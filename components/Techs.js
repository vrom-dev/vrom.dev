import Image from 'next/image'

import htmlLogo from '../public/img/logos/html.svg'
import cssLogo from '../public/img/logos/css.svg'
import jsLogo from '../public/img/logos/js.svg'
import nodeLogo from '../public/img/logos/node.svg'
import reactLogo from '../public/img/logos/react.svg'
import nextLogo from '../public/img/logos/nextjs.svg'
import sassLogo from '../public/img/logos/sass.svg'
import jestLogo from '../public/img/logos/jest.svg'
import mongoDBLogo from '../public/img/logos/mongodb.svg'
import javaLogo from '../public/img/logos/java.svg'
import springLogo from '../public/img/logos/spring.svg'

import css from '../styles/Techs.module.scss'

export function Techs () {
  return (
    <ul
      className={css.wrapper}
    >
      <li className={css.tech}>
        <Image
          src={htmlLogo}
          width={100}
          height={100}
          alt='HTML Logo'
        />
      </li>
      <li className={css.tech}>
        <Image
          src={cssLogo}
          width={100}
          height={100}
          alt='CSS Logo'
        />
      </li>
      <li className={css.tech}>
        <Image
          src={jsLogo}
          width={100}
          height={100}
          alt='JavaScript Logo'
        />
      </li>
      <li className={css.tech}>
        <Image
          src={reactLogo}
          width={100}
          height={100}
          alt='React Logo'
        />
      </li>
      <li className={css.tech}>
        <Image
          src={nodeLogo}
          width={100}
          height={100}
          alt='NodeJs Logo'
        />
      </li>
      <li className={css.tech}>
        <Image
          src={nextLogo}
          width={100}
          height={100}
          alt='Next Logo'
        />
      </li>
    </ul>
  )
}
