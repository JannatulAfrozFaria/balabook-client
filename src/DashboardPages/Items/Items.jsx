import { RiHome2Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

const Items = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleEdit = () => {
        console.log('Edit action');
        setIsOpen(false);
    };

    const handleDelete = () => {
        console.log('Delete action');
        setIsOpen(false);
    };

    return (
        <div>
            <div className="flex gap-1 items-center">
                <span className="font-semibold text-xl"><RiHome2Line /></span>
                <span className="gray font-semibold text-xl"><IoIosArrowForward /></span>
                <span className="themeText font-semibold">Items</span>
            </div>
            <div className="flex items-center my-6">
                <h1 className="text-3xl font-bold flex-grow">Items</h1>
                <button className="btn rounded-full btnYellow">
                    <Link to={'/addItem'}>Add New Item</Link>
                </button>
            </div>
            <div className="bg-gray-100 p-6 rounded-3xl">
                <h1 className="font-semibold text-gray-800">Search</h1>
                <div className="flex gap-4 pt-4">
                    <div className="flex-grow">
                        <input className="input w-full" type="text" placeholder="Search" />
                    </div>
                    <button className="btn rounded-full btnYellow px-5">Search</button>
                    <button>Clear</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table bg-white mt-6">
                        {/* head */}
                        <thead>
                            <tr className="text-black text-2xl font-light">
                                <th>Description</th>
                                <th>Type</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-500 text-lg">
                            {/* row 3 */}
                            <tr>
                                <td>pakoray</td>
                                <td>Good</td>
                                <td>€50.00</td>
                                <td>
                                    <div className="relative inline-block text-left">
                                        <button
                                            className="btn btn-outline text-lg rounded-3xl border-2 flex items-center"
                                            onClick={toggleDropdown}
                                        >
                                            Actions <IoIosArrowDown className="ml-1" />
                                        </button>
                                        {isOpen && (
                                            <div className="absolute left-0 mt-1 w-40 bg-white border border-gray-200 shadow-lg rounded-md z-10">
                                                <ul className="py-1">
                                                    <li>
                                                        <button
                                                            className="block px-4 py-2 text-left w-full hover:bg-gray-100"
                                                            onClick={handleEdit}
                                                        >
                                                            Edit
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            className="block px-4 py-2 text-left w-full hover:bg-gray-100"
                                                            onClick={handleDelete}
                                                        >
                                                            Delete
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Items;
