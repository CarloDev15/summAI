import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import AnimatedRoutes from "./components/AnimatedRoutes.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<AnimatedRoutes />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
