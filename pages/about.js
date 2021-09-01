import AppLayout from '../components/AppLayout'
import Container from '../components/Container'
import Footer from '../components/Footer'

import Link from 'next/link'

export default function About () {
  return (
    <AppLayout>
      <Container>
        <h1>Sobre mí</h1>

        <p>Hola! Mi nombre es Víctor. Nací en <Link href='https://goo.gl/maps/jEDf1rGH1egbzLLc7'>
          <a target='_blank' rel='noopener noreferrer'>Sabadell</a></Link> 📍, una ciudad cerca de Barcelona, donde actualmente vivo. </p>

        <h2>👨‍💻 Formación</h2>

        <p>Soy estudiante de Desarrollo de Aplicaciones Web 💻 en <Link href='https://www.ilerna.es/es/ciclo-grado-superior-desarrollo-aplicaciones-web-72'><a target='_blank' rel='noopener noreferrer'>Ilerna</a></Link>, especializado en el ecosistema JavaScript tanto en el front como en el backend.</p>

        <p>Además, este último año he realizado dos bootcamps:
          <ul>
            <li>El bootcamp de Programación Web de <Link href='https://spain.generation.org/spain/programacion-web/'><a target='_blank' rel='noopener noreferrer'>Generation Spain y Verizon</a></Link> (16 semanas).</li>
            <li>El bootcamp de Node.js de <Link href='https://cibernarium.barcelonactiva.cat/it-academy/inscripcio'><a target='_blank' rel='noopener noreferrer'>IT Academy</a></Link> (12 semanas).</li>
          </ul>
        </p>

        <p>En ambos he tenido la oportunidad de trabajar con distintas lenguajes y tecnologías como JavaScript, Java, Node.js, Express, Spring, Git, MySQL o MongoDB. También he podido trabajar con <em>metologías ágiles y en equipo</em> y he podido trabajar y mejorar mis <em>soft-skills</em>.</p>
        <p>👉🏽  Si quieres saber más sobre mí, aquí te dejo <Link href='/docs/sample.pdf'><a target='_blank' rel='noopener noreferrer'>mi CV</a></Link> y mi <Link href='https://www.linkedin.com/in/vromdev' ><a target='_blank' rel='noopener noreferrer'>Linkedin</a></Link>.
        </p>

        <h2>🧠 Soft-Skills</h2>

        <p>Soy una persona muy curiosa y <em>me apasiona aprender</em>. Siempre intento seguir formándome y actualizándome, por ejemplo ahora en Next.js, Socket.io o Three.js. He sido siempre <em>autodidacta</em> y lo sigo siendo desde que empecé a estudiar desarrollo web.</p>

        <p>Me encanta <em>trabajar en equipo</em> y colaborar con personas de diferentes perfiles, y siempre trato de aprender del resto de miembros del equipo, así como ser <em>proactivo y receptivo</em> en la toma de decisiones.</p>

        <p>Soy una persona <em>bastante crítica</em> con el trabajo que hago o el de los demás, lo veo como un requisito fundamental para mejorar. Obviamente siempre intento dar <em>feedback</em> de forma constructiva y estando abierto a que me lo den.</p>

        <h2>🎨 Aficiones</h2>

        <p>Lógicamente, no todo es programar en la vida. 😇</p>

        <p>Me encanta ir al monte, ya sea para pasear, hacer senderismo o a buscar setas 🍄. Normalmente lo hago acompañado de mis dos perros, uno de ellos es un <Link href='https://es.wikipedia.org/wiki/Perro_trufero' ><a target='_blank' rel='noopener noreferrer'>perro trufero</a></Link>.</p>
        <p>Soy un gran aficionado al <em>modelismo</em>. Me encanta trastear con pinturas, pinceles, aerógrafos, esculpir y crear maquetas y dioramas. Desde hace tiempo me ha llamado la atención el mundo del <em>diseño 3D</em> y estoy aprendiendo a hacerlo con mi tableta gráfica.</p>
        <p>Me entusiasman los <em>juegos de mesa</em>, tengo muchísimos y de todos los estilos, y siempre que me reúno con amigos solemos jugar a alguno. También me gusta <em>leer</em> (procuro hacerlo todos los días), especialmente libros de ciencia ficción, y soy <em>muy fan de Star Wars</em> .</p>

      </Container>
      <Footer />
    </AppLayout>
  )
}
