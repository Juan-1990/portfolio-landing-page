import styles from './About.module.css'

function About() {

  const habilidades = [
    { nombre: 'Frontend', techs: 'React · Vite · HTML · CSS' },
    { nombre: 'Backend', techs: 'Node.js · Express · Python · Django' },
    { nombre: 'Bases de datos', techs: 'MySQL · MongoDB' },
    { nombre: 'Herramientas', techs: 'Git · GitHub · Postman · VS Code' },
  ]

  return (
    <section className={styles.about} id="sobre-mi">

      <div className={styles.encabezado}>
        <span className={styles.numero}>// 01</span>
        <h2 className={styles.titulo}>Sobre mí</h2>
        <div className={styles.linea}></div>
      </div>

      <div className={styles.contenido}>

        <div className={styles.texto}>
          <p className={styles.parrafo}>
            Soy <span className={styles.verde}>Juan Camilo Vargas</span>, 
            aprendiz del SENA en Tecnología de Análisis y Desarrollo 
            de Software, cursando el cuarto trimestre.
          </p>
          <p className={styles.parrafo}>
            Me apasiona construir soluciones digitales completas. 
            Desde que empecé a programar entendí que el software 
            es como un conjunto de bloques — cada pieza debe 
            encajar perfectamente con las demás.
          </p>
          <p className={styles.parrafo}>
            Actualmente enfocado en desarrollo web fullstack, 
            construyendo proyectos reales para fortalecer 
            mi portafolio profesional.
          </p>
        </div>

        <div className={styles.habilidades}>
          {habilidades.map((item) => (
            <div key={item.nombre} className={styles.habilidadCard}>
              <div className={styles.bloque}></div>
              <div>
                <p className={styles.habilidadNombre}>{item.nombre}</p>
                <p className={styles.habilidadTechs}>{item.techs}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default About