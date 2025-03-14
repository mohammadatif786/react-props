import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header name="Anna" color="purple" />
      <Sidebar greet="Howdy" />
      <Main greet="Hi"/>
    </div>
  );
}

export default App;
