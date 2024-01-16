// 1. Imposto Actions
// 2. Imposto Reducers
// 3. Imposto Store
// 4. Colleghiamo components e redux

//in APP, visto che collego gli stati direttamente nel component, non c'è bisogno di fare tutti gli import soliti (circa, vediamo che esce)
import SearchJob from "./components/SearchJob";

function App() {
  return (
    <div className="App">
      <SearchJob />
    </div>
  );
}

export default App;
