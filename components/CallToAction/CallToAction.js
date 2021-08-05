import Image from 'next/image'

import css from './CallToAction.module.scss'
import profilePic from '../../public/img/me.png'

export function CallToAction () {
  return (
    <div className={css.container}>
      <div>
        <h1 className={css.title}>
          👋 Hola! Soy <span className={css.gradient}>Víctor Romero</span>
        </h1>
        <p className={css.bio}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, odio culpa? Nemo, minima earum impedit aliquam, nostrum, odio eum dolore sunt ea perspiciatis voluptas molestiae aliquid odit. Consectetur, et dolor.
        </p>
        <a
          href='/docs/sample.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className={css.button}
        >Download CV
        </a>
      </div>
      <div className={css.img_container}>
        <Image
          src={profilePic}
          alt='Picture of Vic'
          layout='responsive'
          className={css.background}
        />
      </div>
    </div>
  )
}
