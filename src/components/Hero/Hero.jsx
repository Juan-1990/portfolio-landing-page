import styles from './Hero.module.css'

function Hero() {

  const tecnologias = ['React', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'Python', 'Django', 'API REST', 'Git']

  return (
    <section className={styles.hero} id="inicio">

      <div className={styles.gridFondo}>
        {Array.from({ length: 120 }).map((_, i) => (
          <div key={i} className={styles.stud}></div>
        ))}
      </div>

      <div className={styles.contenido}>

        <div className={styles.badge}>
          Aprendiz SENA · Tecnología ADSO
        </div>

        <h1 className={styles.nombre}>
          Juan Camilo <span className={styles.verde}>Vargas</span>
        </h1>

        <h2 className={styles.rol}>
          Desarrollador Fullstack Jr.
        </h2>

        <p className={styles.descripcion}>
          Construyo aplicaciones web completas desde la interfaz hasta 
          la base de datos. Cada línea de código es un bloque que 
          encaja en algo más grande.
        </p>

        <div className={styles.tecnologias}>
          {tecnologias.map((tech) => (
            <span key={tech} className={styles.techTag}>
              <span className={styles.punto}></span>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.botones}>
          <a href="#proyectos" className={styles.btnPrimario}>
            Ver proyectos
          </a>
          <a href="#contacto" className={styles.btnSecundario}>
            Contáctame
          </a>
        </div>

      </div>

    </section>
  )
}

export default Hero