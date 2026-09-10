import "./App.css";
import PaginationDemo from "./components/PaginationDemo";
import DebounceSearchDemo from "./components/DebounceSearchDemo";

function App() {
  return (
    <>
      <h1>Lab 2: Custom Hooks</h1>

      <PaginationDemo />

      <hr />

      <DebounceSearchDemo />
    </>
  );
}

export default App;