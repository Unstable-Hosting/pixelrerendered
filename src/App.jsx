import { Outlet } from "react-router-dom";

function App() {
  return (
    <section className="App w-[100%] h-[100vh]">
      <Outlet />
    </section>
  );
}

export default App;