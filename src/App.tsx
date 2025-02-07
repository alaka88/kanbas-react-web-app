import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Kanbas from "./Kanbas";
import Labs from "./Labs";

function App() {
  return (
    <HashRouter>
    <div>
    <Routes>
      <Route path="/" element={<Navigate to="Labs" />} />
        <Route path="/Labs/*" element={<Labs />} />
        <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
