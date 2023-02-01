import balanceicon from "../../assets/balance.svg"
import incomeicon from "../../assets/income.svg"
import expensesicon from "../../assets/expenses.svg"
import savingsicon from "../../assets/savings.svg"
import styles from './finance.module.scss'

export function Finance() {
  return(
    <div className={styles.finance}>
      <div className={styles.financeWrapper}>
        <img src={balanceicon} alt="" />
        <h2 >R$3,596</h2>
        <p>Total</p>
      </div>

      <div className={styles.financeWrapper}>
        <img src={incomeicon} alt="" />
        <h2 >R$596</h2>
        <p>Entradas</p>
      </div>

      <div className={styles.financeWrapper}>
        <img src={expensesicon} alt="" />
        <h2 >R$596</h2>
        <p>Saídas</p>
      </div>

      <div className={styles.financeWrapper}>
        <img src={savingsicon} alt="" />
        <h2 >R$596</h2>
        <p>Guardado</p>
      </div>
    </div>
  )
}