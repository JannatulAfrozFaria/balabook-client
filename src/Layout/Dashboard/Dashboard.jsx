import { NavLink, Outlet } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-40 md:w-64 h-screen text-dark2 p-2 md:p-6 flex flex-col">
                {/* NAV SECTION */}
                <div className="flex flex-col">
                    <img className="w-1/3 mt-4 md:mt-0" src="https://i.postimg.cc/1XcFzgxS/logo.png" alt="" />
                    <div className="text-xl flex gap-3 items-center mt-6">
                        <a className="dashTheme">NI</a>
                        <button className="btn rounded-full font-semibold"> <AiOutlinePlus /> </button>
                    </div>
                    <ul className="menu grid grid-cols-1 gap-1 dashList mt-8 text-md">
                        {['dashboard', 'items', 'partners', 'sales', 'purchases', 'reports', 'accountant'].map((path, index) => (
                            <li key={index}>
                                <NavLink
                                    to={`/${path}`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-purple-600 font-semibold' // Custom class for active state
                                            : 'text-dark2'
                                    }
                                >
                                    {path.charAt(0).toUpperCase() + path.slice(1)}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-grow"></div>
                {/* PROFILE SECTION */}
                <div>
                    <div className="divider"></div>
                    <div className="grid grid-cols-4 gap-3 items-center">
                        <span className="profileName text-center">NI</span>
                        <NavLink className="text-lg font-semibold col-span-2" to={'profile'}>Nicolas IP</NavLink>
                        <span className="text-lg"><IoIosArrowUp /></span>
                    </div>
                </div>
            </div>
            <div className="flex-1 p-6 md:p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
