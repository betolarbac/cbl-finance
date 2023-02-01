import { Finance } from '../components/finance/finance'
import { Transaction } from '../components/transaction/transaction'
import styles from './dashboard.module.scss'

export function Dashboard() {
  return (
    <div className={styles.dashboard}>
       <h1>Dashboard</h1>

       <div>
        <Finance />
        <Transaction />
       </div>
    </div>
  )
}