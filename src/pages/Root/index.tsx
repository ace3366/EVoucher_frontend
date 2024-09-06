import { Outlet } from "react-router-dom";

import Menu from "./Menu";
import SideBar from "./SideBar";
export default function Root() {
  return (
    <>
      <div>
        <SideBar />
        <Menu></Menu>
      </div>
      <div className="flex">
        <div className="w-20 md:inline-block hidden mx-3"></div>
        <Outlet></Outlet>
      </div>
    </>
  );
}
