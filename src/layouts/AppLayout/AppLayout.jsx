import { Outlet } from "react-router-dom";

import Drawer from "./components/Drawer";
import Header from "./components/Header";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Drawer />
      {/* <LoadingOverlay msg="데이터 가져오는 중..." /> */}
      <main className="py-24">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
