import { Route, Routes } from "react-router-dom";
import Week1 from "./pages/Week1";
import Week3 from "./pages/Week3";
import Week4 from "./pages/Week4";
import Week2 from "./pages/Week2";
import Home from "./pages/Home";
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/week1" element={<Week1 />} />
      <Route path="/week2" element={<Week2 />} />
      <Route path="/week3" element={<Week3 />} />
      <Route path="/week4" element={<Week4 />} />
    </Routes>
    </Layout>
  );
}

export default App;
