import { RiHome2Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const AddItem = () => {
    return (
        <div>
            <div className="flex gap-1 items-center">
                <span className=" font-semibold text-xl"><RiHome2Line /></span>
                <span className="gray font-semibold text-xl"><IoIosArrowForward /></span>
                <span className="themeText font-semibold"> Add New Items</span>
            </div>
            <div className="flex items-center my-6">
                <h1 className="text-3xl font-bold flex-grow">Add New Items</h1>
                <div className="flex gap-3">
                    <button className="btn btn-outline  rounded-3xl  border-2  text-lg ">
                        <Link to={'/addItem'}>Cancel</Link>
                    </button>
                    <button className="btn rounded-full btnYellow  text-lg">
                        <Link to={'/addItem'}>Save</Link>
                    </button>
                </div>

            </div>
            <div className="bg-gray-100 p-6 rounded-3xl ">
                <h1 className="font-semibold text-gray-800 text-3xl">General Information</h1>
                <div className="grid grid-cols-2 gap-4 p-4 bg-white mt-6 rounded-3xl">
                    {/* DESCRIPTION */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-xl  font-semibold">Description*</span>
                        </div>
                        <input type="text" placeholder="Description" className="input input-bordered w-full bg-slate-100" />
                    </label>
                    {/* ACCOUNT*/}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-xl  font-semibold">Description*</span>
                        </div>
                        <input type="text" placeholder="Description" className="input input-bordered w-full bg-slate-100" />
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Price*/}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-xl  font-semibold">Description*</span>
                            </div>
                            <input type="text" placeholder="Description" className="input input-bordered w-full bg-slate-100" />
                        </label>
                        {/* Discount*/}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-xl  font-semibold">Discount*</span>
                            </div>
                            <input type="text" placeholder="Description" className="input input-bordered w-full bg-slate-100" />
                        </label>
                    </div>
                    {/* LAST GRID------- */}
                    <div className="grid grid-cols-2 gap-4">

                        {/* vA-L-U-E- -A-D-D-E-D- -T-A-X-*/}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-xl  font-semibold">Value added tax</span>
                            </div>
                            <input type="text" placeholder="Tax exempt" className="input input-bordered w-full bg-slate-100" />
                        </label>
                        {/* TYPE----OF---ITEM--*/}
                        <div>
                            <div className="label">
                                <span className="label-text text-xl  font-semibold">Value added tax</span>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex gap-1">
                                    <div className="form-control">

                                        <label className="label cursor-pointer">
                                            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                                        </label>
                                    </div>
                                    <h1>Service</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItem;