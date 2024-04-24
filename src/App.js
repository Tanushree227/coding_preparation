import { Route, Routes } from "react-router-dom";
import Week1 from "./pages/Week1";
import Week3 from "./pages/Week3";
import Week4 from "./pages/Week4";
import Week2 from "./pages/Week2";

function App() {
  return (
    <Routes>
      <Route path="/week1" element={<Week1 />} />
      <Route path="/week2" element={<Week2 />} />
      <Route path="/week3" element={<Week3 />} />
      <Route path="/week4" element={<Week4 />} />
    </Routes>
  );
}

export default App;
