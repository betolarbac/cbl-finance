import styles from "./sidebar.module.scss"
import logo from "../../assets/logo.svg"


export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
      <img src={logo}/>
      <h1>cbl finance</h1>
      </div>

    </div>
  )
}