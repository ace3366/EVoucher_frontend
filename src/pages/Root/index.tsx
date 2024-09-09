import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import SideBar from "./SideBar";
import evouSymbol from "@/assets/e.png";
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
          <img src={evouSymbol} alt="" className="size-32" />
        </div>
      </footer>
    </>
  );
}
