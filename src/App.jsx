import Filter from "./components/Filter";
import FilteredTable from "./components/FilteredTable";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <div>
       <Header />
      <main>
        <Filter />
        <FilteredTable />
      </main>
      <Footer/>
    </div>
  );

}
export default App;