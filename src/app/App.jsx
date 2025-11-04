import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
}

export default App;
