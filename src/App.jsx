import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import PreEvent from "./components/Pre-event/PreEvent";

function App() {
  return (
    <section className="App w-[100%] h-[100%] bg-black">
      {/* <NavBar />
      <Outlet /> */}
      <PreEvent/>
    </section>
  );
}

export default App;
