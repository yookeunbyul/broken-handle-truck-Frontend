import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import RootLayout from "./layouts/layout";
import MainPage from "./pages/MainPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import MapPage from "./pages/MapPage.tsx";
import RegisterPage from "./pages/owner/RegisterPage.tsx";
import MyTruckPage from "./pages/owner/MyTruckPage.tsx";
import DetailPage from "./pages/DetailPage.tsx";
import BookMarkPage from "./pages/BookMarkPage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/bookmark" element={<BookMarkPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/my-truck" element={<MyTruckPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
