import Filter from "./components/Filter";
import FilteredTable from "./components/FilteredTable";
import Header from "./components/Header";
function App() {
  return (
    <div>
       <Header />
      <main>
        <Filter />
        <FilteredTable />
      </main>
    </div>
  );

}
export default App;