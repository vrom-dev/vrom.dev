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
          <a target='_blank' rel='noopener noreferrer'>Sabadell</a>
        </Link> 📍, una ciudad cerca de Barcelona, donde actualmente vivo.
        </p>

        <h2>👨‍💻 Formación</h2>

        <p>Soy estudiante de Desarrollo de Aplicaciones Web 💻 en <Link href='https://www.ilerna.es/es/ciclo-grado-superior-desarrollo-aplicaciones-web-72'><a target='_blank' rel='noopener noreferrer'>Ilerna</a></Link>, especializado en el ecosistema JavaScript tanto en el front como en el backend.</p>

        <p>Además, este último año he realizado dos bootcamps:</p>
        <ul>
          <li>El bootcamp de Programación Web de <Link href='https://spain.generation.org/spain/programacion-web/'><a target='_blank' rel='noopener noreferrer'>Generation Spain y Verizon</a></Link> (16 semanas).</li>
          <li>El bootcamp de Node.js de <Link href='https://cibernarium.barcelonactiva.cat/it-academy/inscripcio'><a target='_blank' rel='noopener noreferrer'>IT Academy</a></Link> (12 semanas).</li>
        </ul>

        <p>En ambos he tenido la oportunidad de trabajar con distintas lenguajes y tecnologías como JavaScript, Java, Node.js, Express, Spring, Git, MySQL o MongoDB. También he podido trabajar con <strong>metologías ágiles</strong> y en entornos de <strong>desarrollo en equipo</strong>.</p>
        <p>👉🏽  Si quieres saber más sobre mí, aquí te dejo <Link href='/docs/cvitae.pdf'><a target='_blank' rel='noopener noreferrer'>mi CV</a></Link> y mi <Link href='https://www.linkedin.com/in/vromdev'><a target='_blank' rel='noopener noreferrer'>Linkedin</a></Link>.
        </p>

        <h2>🧠 Soft-Skills</h2>

        <p>Soy una persona muy curiosa y <strong>me apasiona aprender</strong>. Siempre intento seguir formándome y actualizándome, por ejemplo ahora en React, Socket.io o Three.js. He sido siempre autodidacta y lo sigo siendo desde que empecé a estudiar desarrollo web.</p>

        <p>Me encanta <strong>trabajar en equipo</strong> y colaborar con personas de diferentes perfiles, y siempre trato de aprender del resto de miembros del equipo, así como ser proactivo y receptivo en la toma de decisiones.</p>

        <p>Soy una persona bastante <strong>crítica</strong> con el trabajo que hago o el de los demás, lo veo como un requisito fundamental para mejorar. Obviamente siempre intento dar <strong>feedback</strong> de forma constructiva y estando abierto a que me lo den.</p>

        <h2>🎨 Aficiones</h2>

        <p>Lógicamente, no todo es programar en la vida. </p>

        <p>La montaña es mi hábitat, disfruto yendo a pasear, a hacer senderismo o a buscar setas 🍄. Normalmente lo hago acompañado de mis dos perros, uno de ellos es un <Link href='https://es.wikipedia.org/wiki/Perro_trufero'><a target='_blank' rel='noopener noreferrer'>perro trufero</a></Link>.</p>
        <p>Soy un gran aficionado al <strong>modelismo</strong>. Me encanta trastear con pinturas, pinceles, aerógrafos, esculpiendo o crear maquetas y dioramas. Desde hace tiempo me ha llamado la atención el mundo del <strong>diseño 3D</strong> y estoy aprendiendo a hacerlo con mi tableta gráfica.</p>
        <p>Me entusiasman los <strong>juegos de mesa</strong>, tengo muchísimos y de todos los estilos, y siempre que me reúno con amigos solemos jugar a alguno. También me gusta <strong>leer</strong> (procuro hacerlo todos los días), especialmente libros de ciencia ficción, y soy muy fan de <strong>Star Wars</strong> .</p>

      </Container>
      <Footer />
    </AppLayout>
  )
}
