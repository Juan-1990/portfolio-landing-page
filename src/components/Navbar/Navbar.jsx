import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>

      <div className={styles.logo}>
        <div className={styles.block}></div>
        <span className={styles.logoText}>JC Dev</span>
      </div>

      <ul className={styles.links}>
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>

    </nav>
  )
}

export default Navbar