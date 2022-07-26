import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";




const App = () =>{
    return (
        <div>
      <header>
        <h1 className={styles.title}>Peliculas Leandro</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );

}

export default App;