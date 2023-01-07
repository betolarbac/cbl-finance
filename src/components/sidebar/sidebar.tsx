import styles from "./sidebar.module.scss"
import logo from "../../assets/logo.svg"
import home from "../../assets/home.svg"


export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
      <img src={logo} alt="logo"/>
      <h1>cbl finance</h1>
      </div>

      <div className={styles.selectWrapper}>
      
        <a href="" className={styles.select}>
        <img src={home} alt="" />
          <span>Dashboard</span>
        </a>
      </div>

    </div>
  )
}