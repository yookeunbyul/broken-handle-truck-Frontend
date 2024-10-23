import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import RootLayout from "./layouts/layout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
