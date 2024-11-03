import { RiHome2Line } from "react-icons/ri";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

const EditItem = () => {
    const [selectedType, setSelectedType] = useState("service");
    const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
    const [vatDropdownOpen, setVatDropdownOpen] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState("Select type");
    const [selectedVAT, setSelectedVAT] = useState("Tax exempt");

    const handleCheckboxChange = (type) => {
        setSelectedType(type);
    };

    const handleAccountSelect = (account) => {
        setSelectedAccount(account);
        setAccountDropdownOpen(false);
    };

    const handleVATSelect = (vat) => {
        setSelectedVAT(vat);
        setVatDropdownOpen(false);
    };

    return (
        <div>
            <div className="flex gap-1 items-center">
                <span className="font-semibold text-xl"><RiHome2Line /></span>
                <span className="gray font-semibold text-xl"><IoIosArrowForward /></span>
                <span className="themeText font-semibold"> Items</span>
            </div>
            <div className="flex items-center my-6">
                <h1 className="text-3xl font-bold flex-grow">Edit Item</h1>
                <div className="flex gap-3">
                    <button className="btn btn-outline rounded-3xl border-2 text-lg ">
                        <Link to={'/items'}>Cancel</Link>
                    </button>
                    <button className="btn rounded-full btnYellow text-lg">
                        <Link to={'/items'}>Save</Link>
                    </button>
                </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-3xl ">
                <h1 className="font-semibold text-gray-800 text-3xl">General Information</h1>
                <div className="p-4 bg-white mt-6 rounded-3xl">
                    <div className="grid grid-cols-2 gap-4">
                        {/* DESCRIPTION */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Description*</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Description"
                                className="input input-bordered w-full bg-slate-100 border-gray-300 focus:border-[#6366f1] focus:ring-0"
                            />
                        </label>
                        {/* ACCOUNT*/}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Account</span>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder={selectedAccount}
                                    readOnly
                                    className={`input input-bordered w-full bg-slate-100 border-gray-300 focus:border-[#6366f1] focus:ring-0 cursor-pointer ${selectedAccount !== "Select type" ? 'text-black' : ''}`}
                                    onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                                />
                                <span className="absolute top-1/3 right-8 text-xl cursor-pointer" onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}>
                                    <IoIosArrowDown />
                                </span>
                                {accountDropdownOpen && (
                                    <div className="absolute z-10 bg-white border-2 border-[#6366f1] rounded-md shadow-lg mt-1 w-full p-2 text-lg">
                                        <h3 className="font-bold px-2 py-1 border-b border-gray-200 text-[#6366f1]">Revenue</h3>
                                        <ul className="max-h-40 overflow-y-auto">
                                            {["Interest Income", "Other Revenue", "Realised Gain", "Foreign Exchange"].map((account) => (
                                                <li key={account} className="px-2 py-1 hover:bg-gray-100 cursor-pointer" onClick={() => handleAccountSelect(account)}>
                                                    {account}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </label>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                        {/* Price*/}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Price*</span>
                            </div>
                            <input
                                type="text"
                                placeholder="0.00"
                                className="input input-bordered w-full bg-slate-100 border-gray-300 focus:border-[#6366f1] focus:ring-0"
                            />
                        </label>
                        {/* Discount*/}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Discount*</span>
                            </div>
                            <input
                                type="text"
                                placeholder="0.00"
                                className="input input-bordered w-full bg-slate-100 border-gray-300 focus:border-[#6366f1] focus:ring-0"
                            />
                        </label>
                        {/* Value Added Tax */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Value added tax</span>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder={selectedVAT}
                                    readOnly
                                    className={`input input-bordered w-full bg-slate-100 border-gray-300 focus:border-[#6366f1] focus:ring-0 cursor-pointer ${selectedVAT !== "Tax exempt" ? 'text-black' : ''}`}
                                    onClick={() => setVatDropdownOpen(!vatDropdownOpen)}
                                />
                                <span className="absolute top-1/3 right-8 text-xl cursor-pointer" onClick={() => setVatDropdownOpen(!vatDropdownOpen)}>
                                    <IoIosArrowDown />
                                </span>
                                {vatDropdownOpen && (
                                    <div className="absolute z-10 bg-white border-2 border-[#6366f1] rounded-md shadow-lg mt-1 w-full p-2 text-lg">
                                        <h3 className="font-bold px-2 py-1 border-b border-gray-200 text-[#6366f1]">VAT</h3>
                                        <ul className="max-h-40 overflow-y-auto">
                                            {["VAT 19", "VAT 9", "VAT 5"].map((vat) => (
                                                <li key={vat} className="px-2 py-1 hover:bg-gray-100 cursor-pointer" onClick={() => handleVATSelect(vat)}>
                                                    {vat}
                                                </li>
                                            ))}
                                        </ul>
                                        <h3 className="font-bold px-2 py-1 border-t border-gray-200 text-[#6366f1]">System Created</h3>
                                        <ul className="max-h-40 overflow-y-auto">
                                            {["Reverse Charge", "Tax Exempt", "Zero tax", "Custom VAT"].map((vat) => (
                                                <li key={vat} className="px-2 py-1 hover:bg-gray-100 cursor-pointer" onClick={() => handleVATSelect(vat)}>
                                                    {vat}
                                                </li>
                                            ))}
                                        </ul>
                                        <button className=" btn w-full text-center py-1 bg-[#6366f1] text-white border-t border-gray-200">Create New</button>
                                    </div>
                                )}
                            </div>
                        </label>
                        {/* Type of Item */}
                        <div>
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Type of Item</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 py-3">
                                <div className="flex items-center">
                                    <div
                                        onClick={() => handleCheckboxChange("service")}
                                        className={`w-5 h-5 border-2 rounded-md ${selectedType === "service" ? "border-[#6366f1]" : "border-black"} cursor-pointer flex items-center justify-center`}
                                    >
                                        {selectedType === "service" && <div className="w-3 h-3 bg-[#6366f1] rounded-full" />}
                                    </div>
                                    <span className="ml-2 cursor-pointer" onClick={() => handleCheckboxChange("service")}>Service</span>
                                </div>
                                <div className="flex items-center">
                                    <div
                                        onClick={() => handleCheckboxChange("good")}
                                        className={`w-5 h-5 border-2 rounded-md ${selectedType === "good" ? "border-[#6366f1]" : "border-black"} cursor-pointer flex items-center justify-center`}
                                    >
                                        {selectedType === "good" && <div className="w-3 h-3 bg-[#6366f1] rounded-full" />}
                                    </div>
                                    <span className="ml-2 cursor-pointer" onClick={() => handleCheckboxChange("good")}>Good</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditItem;
