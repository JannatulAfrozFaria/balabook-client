import { RiHome2Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const Items = () => {
    return (
        <div>
            <div className="flex gap-1 items-center">
                <span className=" font-semibold text-xl"><RiHome2Line /></span>
                <span className="gray font-semibold text-xl"><IoIosArrowForward /></span>
                <span className="themeText font-semibold">Items</span>
            </div>
            <div className="flex items-center my-6">
                <h1 className="text-3xl font-bold flex-grow">Items</h1>
                <button className="btn rounded-full btnYellow">Add New Item</button>
            </div>
            <div className="bg-gray-100 p-6 rounded-3xl ">
                <h1 className="font-semibold text-gray-800">Search</h1>
                <div className="flex gap-4 pt-4">
                    <div className="flex-grow">
                        <input className="input w-full" type="text" placeholder="Search" />
                    </div>
                    <button className="btn rounded-full btnYellow px-5">Search</button>
                    <button>Clear</button>
                </div>
                <div>
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
                                {/* row 1 */}
                                <tr>
                                    <td>Devops</td>
                                    <td>Service</td>
                                    <td>€500.00</td>
                                    <td><button className="btn btn-outline text-lg rounded-3xl  border-2 ">Actions <span><IoIosArrowDown /></span></button></td>
                                </tr>
                                {/* row 2 */}
                                <tr >
                                    <td>Hello</td>
                                    <td>Service</td>
                                    <td>€100.00</td>
                                    <td><button className="btn btn-outline text-lg rounded-3xl  border-2 ">Actions <span><IoIosArrowDown /></span></button></td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td>pakoray</td>
                                    <td>Good</td>
                                    <td>€50.00</td>
                                    <td><button className="btn btn-outline text-lg rounded-3xl  border-2 ">Actions <span><IoIosArrowDown /></span></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;