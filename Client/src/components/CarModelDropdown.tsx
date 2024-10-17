import React from 'react';
import cars from "../list/Car.ts";
import "../index.css";

// Define the types for the props
interface CarModelDropdownProps {
    selectedMake: string;
    setSelectedMake: React.Dispatch<React.SetStateAction<string>>;
    selectedModel: string;
    setSelectedModel: React.Dispatch<React.SetStateAction<string>>;
}

const CarModelDropdown: React.FC<CarModelDropdownProps> = ({ selectedMake, setSelectedMake, selectedModel, setSelectedModel }) => {

    const handleCompanyChanges = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCompany = event.target.value;
        setSelectedMake(selectedCompany);
        setSelectedModel(''); // Reset selected model when company changes
    };

    const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedModel(event.target.value);
    };

    return (
        <div className="max-w-lg mx-auto mb-6 space-y-4">
            {/* Make Dropdown */}
            <div>
                <label className="block text-lg font-semibold text-gray-800 mb-2">Make*:</label>
                <div className="relative">
                    <select
                        required
                        value={selectedMake}
                        onChange={handleCompanyChanges}
                        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-3 pr-8 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-300 text-gray-700 cursor-pointer"
                    >
                        <option value="">Select Company</option>
                        {Object.keys(cars).map((company) => (
                            <option key={company} value={company}>
                                {company}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M5.6 7.4L10 12.8l4.4-5.4H5.6z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Model Dropdown */}
            <div>
                <label className="block text-lg font-semibold text-gray-800 mb-2">Model*:</label>
                <div className="relative">
                    <select
                        value={selectedModel}
                        onChange={handleModelChange}
                        disabled={!selectedMake}
                        className={`block appearance-none w-full bg-white border ${selectedMake ? "border-gray-300 hover:border-gray-400" : "border-gray-200"} px-4 py-3 pr-8 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-300 text-gray-700 cursor-pointer`}
                    >
                        <option value="">Select Model</option>
                        {selectedMake && cars[selectedMake].map((model) => (
                            <option key={model} value={model}>
                                {model}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M5.6 7.4L10 12.8l4.4-5.4H5.6z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarModelDropdown;
