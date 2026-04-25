import styles from './Contact.module.css'

function Contact() {

  const redesSociales = [
    {
      nombre: 'GitHub',
      usuario: 'Juan-1990',
      link: 'https://github.com/Juan-1990',
      descripcion: 'Mira mi codigo'
    },
    {
      nombre: 'LinkedIn',
      usuario: 'Juan Camilo Vargas',
      link: 'https://linkedin.com',
      descripcion: 'Conectemos profesionalmente'
    },
    {
      nombre: 'Email',
      usuario: 'jcvr081990@gmail.com',
      link: 'mailto:jcvr081990@gmail.com',
      descripcion: 'Escribeme directamente'
    },
  ]

  return (
    <section className={styles.contact} id="contacto">

      <div className={styles.encabezado}>
        <span className={styles.numero}>// 03</span>
        <h2 className={styles.titulo}>Contacto</h2>
        <div className={styles.linea}></div>
      </div>

      <div className={styles.contenido}>

        <div className={styles.mensaje}>
          <p className={styles.mensajeTitulo}>
            Tienes un proyecto en mente?
          </p>
          <p className={styles.mensajeTexto}>
            Estoy disponible para practicas, proyectos freelance
            y oportunidades laborales. No dudes en contactarme.
          </p>
          <div className={styles.bloques}>
            <div className={styles.bloque}></div>
            <div className={styles.bloque}></div>
            <div className={styles.bloque}></div>
            <div className={styles.bloque}></div>
            <div className={styles.bloque}></div>
          </div>
        </div>

        <div className={styles.cards}>
          {redesSociales.map((red) => (
            <a
              key={red.nombre}
              href={red.link}
              className={styles.card}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.cardLeft}>
                <div className={styles.bloquePequeno}></div>
                <div>
                  <p className={styles.cardNombre}>{red.nombre}</p>
                  <p className={styles.cardUsuario}>{red.usuario}</p>
                </div>
              </div>
              <p className={styles.cardDescripcion}>{red.descripcion}</p>
            </a>
          ))}
        </div>

      </div>

      <div className={styles.footer}>
        <div className={styles.footerBloques}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={styles.footerBloque}></div>
          ))}
        </div>
        <p className={styles.footerTexto}>
          Juan Camilo Vargas Restrepo · Aprendiz SENA · 2024
        </p>
        <p className={styles.footerSub}>
          Construido con React + Vite
        </p>
      </div>

    </section>
  )
}

export default Contact