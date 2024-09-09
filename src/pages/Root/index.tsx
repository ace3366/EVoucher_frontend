import { Outlet } from "react-router-dom";

import Menu from "./Menu";
import SideBar from "./SideBar";
export default function Root() {
  return (
    <>
      <div>
        <SideBar />
        <Menu className=""></Menu>
      </div>
      <div className="flex min-h-screen">
        <div className="w-20 md:inline-block hidden mx-3"></div>
        <Outlet></Outlet>
      </div>
      <footer>
        <div className="flex justify-center">
          <img src="../../../public/icon/e.png" alt="" className="size-32" />
        </div>
      </footer>
    </>
  );
}
