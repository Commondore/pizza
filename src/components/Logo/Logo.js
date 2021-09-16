import logo from './logo.png';
import styles from './Logo.module.css';

function Logo() {
  return (
    <div className={styles.logo}>
      <img className={styles.logo__img} src={logo} alt="My pizza" />
    </div>
  )
}

export default Logo
