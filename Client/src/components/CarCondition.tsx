import React from "react";
import "../index.css";

interface CarConditionProps {
    setCondition: (condition: string) => void;
}

const CarCondition: React.FC<CarConditionProps> = ({ setCondition }) => {
    const handleConditionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCondition(event.target.value);
    };

    return (
        <div className='max-w-lg mx-auto mb-6 space-y-4'>
            <label className='block text-lg font-semibold text-gray-800 mb-2'>
                Condition*:
            </label>
            <div className="relative">
                <select
                    onChange={handleConditionChange}
                    className='block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-3 pr-8 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-300 text-gray-700 cursor-pointer'>
                    <option value="">Select Condition</option>
                    <option value="New">New</option>
                    <option value="Used">Used</option>
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
    );
};

export default CarCondition;
