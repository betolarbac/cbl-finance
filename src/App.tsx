import { Sidebar } from "./components/sidebar/sidebar";
import { Dashboard } from "./pages/dashboard";
import styles from "./global.module.scss"

function App() {
  return (
    <div className={styles.global}>
      <Sidebar />
      <Dashboard />
    </div>

  );
}

export default App;
