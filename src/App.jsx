import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <section className="App w-[100%] h-[100%] bg-black">
      <NavBar />
      <Outlet />
    </section>
  );
}

export default App;