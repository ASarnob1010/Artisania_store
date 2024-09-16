import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
    const [size, setSize] = useState(280);
    const [mobileSize, setMobileSize] = useState(0);
    const [accountMenu, setAccountMenu] = useState(false);
    const location = useLocation();

    const menus = [
        { label: "Dashboard", icon: <i className="ri-dashboard-3-line mr-2"></i>, link: "/admin/dashboard" },
        { label: "Products", icon: <i className="ri-shopping-cart-line mr-2"></i>, link: "/admin/products" },
        { label: "Customers", icon: <i className="ri-user-3-line mr-2"></i>, link: "/admin/customers" },
        { label: "Orders", icon: <i className="ri-shape-line mr-2"></i>, link: "/admin/orders" },
        { label: "Payments", icon: <i className="ri-money-dollar-circle-line mr-2"></i>, link: "/admin/payments" },
        { label: "Settings", icon: <i className="ri-settings-3-line mr-2"></i>, link: "/admin/settings" },
    ];

    return (
        <>
            {/* Desktop */}
            <div className="md:block hidden">
                <div className="flex ">
                    <aside
                        className="bg-gradient-to-r from-teal-600 to-blue-500 fixed top-0 left-0 h-full shadow-xl rounded-tr-3xl transition-transform duration-300 ease-in-out overflow-hidden"
                        style={{ width: size }}
                    >
                        <div className="flex flex-col h-full">
                            <div className="px-6 py-8">
                                <h2 className="text-3xl font-semibold text-white tracking-wide">Admin Panel</h2>
                            </div>
                            {menus.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.link}
                                    className={`flex items-center px-6 py-4 text-white rounded-lg mb-2 shadow-sm transition-all duration-300 ${
                                        location.pathname === item.link
                                            ? "bg-gradient-to-r from-pink-500 to-orange-500"
                                            : "hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500"
                                    }`}
                                >
                                    {item.icon}
                                    <span className="text-lg ml-2">{item.label}</span>
                                </Link>
                            ))}
                            <div className="mt-auto px-6 py-6">
                                <button className="w-full flex items-center text-white rounded-lg px-6 py-3 shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500">
                                    <i className="ri-logout-circle-r-line mr-2"></i>
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                    </aside>

                    <main
                        className="flex-1 bg-gray-50 h-screen shadow-inner rounded-tl-3xl "
                        style={{ marginLeft: size }}
                    >
                        <nav className="bg-white p-6 shadow-lg rounded-b-lg flex items-center justify-between sticky top-0 ">
                            <div className="flex gap-4 items-center">
                                <button
                                    className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg shadow-md transition-t ransform transform hover:scale-110"
                                    onClick={() => setSize(size === 280 ? 0 : 280)}
                                >
                                    <i className="ri-menu-2-line text-xl text-gray-700"></i>
                                </button>
                                <h1 className="text-lg font-semibold text-gray-700">Shopcode</h1>
                            </div>

                            <div>
                                <button className="relative">
                                    <img
                                        src="/images/avt.avif"
                                        alt="Avatar"
                                        className="w-10 h-10 rounded-full shadow-lg border-2 border-gray-300"
                                        onClick={() => setAccountMenu(!accountMenu)}
                                    />
                                    {accountMenu && (
                                        <div className="absolute top-16 right-0 bg-white rounded-xl shadow-2xl p-4 w-64">
                                            <h1 className="text-lg font-semibold">Er Saurav</h1>
                                            <p className="text-gray-500">example@gmail.com</p>
                                            <div className="my-4 border-b"></div>
                                            <button className="text-red-500 hover:text-red-600">
                                                <i className="ri-logout-circle-r-line mr-2"></i>
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </button>
                            </div>
                        </nav>
                        <div className="p-8">{children}</div>
                    </main>
                </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden block">
                <div className="flex">
                    <aside
                        className="bg-gradient-to-r from-teal-400 to-blue-500 fixed top-0 left-0 h-full z-50 shadow-xl rounded-tr-3xl transition-transform duration-300 ease-in-out"
                        style={{ width: mobileSize }}
                    >
                        <div className="flex flex-col">
                            <button
                                className="text-left mx-4 mt-4 text-white hover:bg-white hover:text-gray-700 transition-all duration-300 p-2 rounded-lg"
                                onClick={() => setMobileSize(mobileSize === 0 ? 280 : 0)}
                            >
                                <i className="ri-menu-2-fill text-2xl"></i>
                            </button>
                            {menus.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.link}
                                    className={`flex items-center px-6 py-4 text-white rounded-lg mb-2 transition-all duration-300 ${
                                        location.pathname === item.link
                                            ? "bg-gradient-to-r from-pink-500 to-orange-500"
                                            : "hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500"
                                    }`}
                                >
                                    {item.icon}
                                    <span className="text-lg ml-2">{item.label}</span>
                                </Link>
                            ))}
                            <div className="mt-auto px-6 py-6">
                                <button className="w-full flex items-center text-white rounded-lg px-6 py-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500">
                                    <i className="ri-logout-circle-r-line mr-2"></i>
                                    Logout
                                </button>
                            </div>
                        </div>
                    </aside>

                    <main className="flex-1 bg-gray-50 h-screen">
                        <nav className="bg-white p-6 shadow-lg rounded-b-lg flex items-center justify-between sticky top-0">
                            <div className="flex gap-4 items-center">
                                <button
                                    className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg shadow-md transition-transform transform hover:scale-110"
                                    onClick={() => setMobileSize(mobileSize === 0 ? 280 : 0)}
                                >
                                    <i className="ri-menu-2-line text-xl text-gray-700"></i>
                                </button>
                                <h1 className="text-lg font-semibold text-gray-700">Shopcode</h1>
                            </div>

                            <div>
                                <button className="relative">
                                    <img
                                        src="/images/avt.avif"
                                        alt="Avatar"
                                        className="w-10 h-10 rounded-full shadow-lg border-2 border-gray-300"
                                        onClick={() => setAccountMenu(!accountMenu)}
                                    />
                                    {accountMenu && (
                                        <div className="absolute top-16 right-0 bg-white rounded-xl shadow-2xl p-4 w-64">
                                            <h1 className="text-lg font-semibold">Er Saurav</h1>
                                            <p className="text-gray-500">example@gmail.com</p>
                                            <div className="my-4 border-b"></div>
                                            <button className="text-red-500 hover:text-red-600">
                                                <i className="ri-logout-circle-r-line mr-2"></i>
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </button>
                            </div>
                        </nav>
                        <div className="p-8">{children}</div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Layout;
