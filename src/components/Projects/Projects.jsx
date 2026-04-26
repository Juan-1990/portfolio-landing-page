import styles from './Projects.module.css'

function Projects() {

  const proyectos = [
    {
      numero: '// 001',
      titulo: 'Landing Page Personal',
      descripcion: 'Portafolio profesional construido con React y Vite. Diseño temático LEGO hacker con animaciones CSS puras.',
      tecnologias: ['React', 'Vite', 'CSS Modules'],
      github: 'https://github.com/Juan-1990/portfolio-landing-page',
      demo: '#',
      estado: 'Completado'
    },
    {
      numero: '// 002',
      titulo: 'Task Manager Fullstack',
      descripcion: 'Aplicacion de gestion de tareas con API REST completa. CRUD con base de datos relacional MySQL.',
      tecnologias: ['React', 'Node.js', 'Express', 'MySQL'],
      github: 'https://github.com/Juan-1990/task-manager-fullstack',
      demo: 'https://juan-1990.github.io/task-manager-fullstack/',
      estado: 'Completado'
    },
    {
      numero: '// 003',
      titulo: 'E-Commerce Fullstack',
      descripcion: 'Tienda en línea con carrito de compras, autenticación JWT y base de datos no relacional.',
      tecnologias: ['React', 'Node.js', 'MongoDB', 'JWT'],
      github: '#',
      demo: '#',
      estado: 'Próximamente'
    },
  ]

  return (
    <section className={styles.projects} id="proyectos">

      <div className={styles.encabezado}>
        <span className={styles.numero}>// 02</span>
        <h2 className={styles.titulo}>Proyectos</h2>
        <div className={styles.linea}></div>
      </div>

      <div className={styles.grid}>
        {proyectos.map((proyecto) => (
          <div key={proyecto.numero} className={styles.card}>

            <div className={styles.cardHeader}>
              <span className={styles.cardNumero}>{proyecto.numero}</span>
              <span className={
                proyecto.estado === 'Completado'
                  ? styles.estadoCompletado
                  : proyecto.estado === 'En desarrollo'
                  ? styles.estadoEnDesarrollo
                  : styles.estadoProximo
              }>
                {proyecto.estado}
              </span>
            </div>

            <div className={styles.bloques}>
              <div className={styles.bloque}></div>
              <div className={styles.bloque}></div>
              <div className={styles.bloque}></div>
            </div>

            <h3 className={styles.cardTitulo}>{proyecto.titulo}</h3>

            <p className={styles.cardDescripcion}>{proyecto.descripcion}</p>

            <div className={styles.tags}>
              {proyecto.tecnologias.map((tech) => (
                <span key={tech} className={styles.tag}>{tech}</span>
              ))}
            </div>

            <div className={styles.cardFooter}>
              <a href={proyecto.github} className={styles.btnGithub}>
                GitHub
              </a>
              <a 
                href={proyecto.demo} 
                className={styles.btnDemo}
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Projects