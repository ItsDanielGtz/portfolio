import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout/Layout";

function App() {
  return (
    <div className="h-screen w-full bg-gradient-to-l from-stone-950 to-sky-950 font-display">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route index path="/" element={<Home />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
