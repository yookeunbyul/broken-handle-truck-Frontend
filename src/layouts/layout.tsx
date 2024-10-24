import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./TopBar.tsx";
import BottomNavBar from "./BottomNavBar.tsx";

export default function RootLayout() {
  const { pathname } = useLocation();
  return (
    <div className="antialiased min-h-screen bg-black/30 flex justify-center">
      <div className="relative max-w-[768px] w-full min-h-screen bg-white flex flex-col justify-center">
        {/* 자식 라우트가 렌더링될 위치 */}
        {["/my-truck", "/detail", "/bookmark"].includes(pathname) && (
          <TopBar title="Title" />
        )}
        <div className="flex-1">
          <Outlet />
        </div>
        {!["/", "/login", "/signup", "/detail"].includes(pathname) && (
          <BottomNavBar />
        )}
      </div>
    </div>
  );
}
