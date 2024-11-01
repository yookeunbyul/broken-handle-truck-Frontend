import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import RootLayout from './layouts/layout';
import LoginPage from './pages/LoginPage.tsx';
import SignUpPage from './pages/SignUpPage.tsx';
import MapPage from './pages/MapPage.tsx';
import RegisterPage from './pages/owner/RegisterPage.tsx';
import MyTruckPage from './pages/owner/MyTruckPage.tsx';
import DetailPage from './pages/DetailPage.tsx';
import BookMarkPage from './pages/BookMarkPage.tsx';
import NotificationPage from './pages/NotificationPage.tsx';
import MyPage from './pages/MyPage.tsx';
import MainGuard from './components/routeGuards/MainGuard.tsx';
import AuthGaurd from './components/routeGuards/AuthGuard.tsx';
import PublicGuard from './components/routeGuards/PublicGuard.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index={true} element={<MainGuard />} />
                    <Route element={<PublicGuard />}>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                    </Route>
                    <Route element={<AuthGaurd />}>
                        <Route path="/map" element={<MapPage />} />
                        <Route path="/bookmark" element={<BookMarkPage />} />
                        <Route path="/detail/:id" element={<DetailPage />} />
                        <Route path="/my-truck" element={<MyTruckPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/notification" element={<NotificationPage />} />
                        <Route path="/my-page" element={<MyPage />} />
                    </Route>
                </Route>
            </Routes>
            <ToastContainer position="bottom-center" />
        </Router>
    );
}

export default App;
