import styles from "./transaction.module.scss"
import incomeicon from "../../assets/income.svg"

export function Transaction() {


  return(
    <div>
      <div className={styles.header}>
      <h2 className={styles.title}>Histórico de transações</h2>
      <button >Nova Transação</button>
      </div>

      <table className={styles.table}>
        <tr>
          <td >Nome</td>
          <td >Tipo</td>
          <td >Data</td>
          <td >Valor</td>
        </tr>

        <tr>
          <td className={styles.title}>luz</td>
          <td className={styles.type}><img src={incomeicon} alt="" />Conta</td>
          <td className={styles.data}>March 29, 2022</td>
          <td className={styles.value}>R$ 90,00</td>
        </tr>
      </table>
    </div>
  );
}