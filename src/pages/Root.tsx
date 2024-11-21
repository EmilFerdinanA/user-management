import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Root = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-screen py-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
