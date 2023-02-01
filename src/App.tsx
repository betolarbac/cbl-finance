import { Sidebar } from "./components/sidebar/sidebar";
import { Dashboard } from "./pages/dashboard";
import styles from "./global.module.scss"
import { Goals } from "./components/goals/goals";

function App() {
  return (
    <div className={styles.global}>
      <Sidebar />
      <Dashboard />
      <Goals />
    </div>

  );
}

export default App;
