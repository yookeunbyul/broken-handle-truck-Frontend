import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="antialiased relative min-h-screen w-full bg-gray-100 flex justify-center">
      <div className="w-[1024px] min-h-screen bg-white flex flex-col justify-center">
        {/* 자식 라우트가 렌더링될 위치 */}
        <Outlet />
      </div>
    </div>
  );
}
