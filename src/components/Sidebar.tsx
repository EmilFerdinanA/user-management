import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/auth";

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-white shadow-lg h-screen min-w-[240px] py-6 px-4 font-[sans-serif] overflow-auto">
      <ul>
        <li>
          <a className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
            <img className="h-40 w-auto" src="./logo.png" alt="logo" />
          </a>
        </li>
      </ul>

      <div className="mt-4">
        <h6 className="text-blue-600 text-sm font-bold px-4">Menu</h6>
        <ul className="mt-2">
          <li>
            <Link
              to={"/"}
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all"
            >
              Users
            </Link>
          </li>
          <li onClick={handleLogout}>
            <a className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
