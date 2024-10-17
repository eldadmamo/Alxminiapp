import React from 'react';
import CarYears from "../list/Caryear.ts";

// Define the type for the props
interface CarYearProps {
    selectedYear: string;
    setSelectedYear: (year: string) => void;
}

const CarYear: React.FC<CarYearProps> = ({ selectedYear, setSelectedYear }) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(e.target.value);
    };

    return (
        <div className="mb-6">
            <label className="block text-xl font-bold text-gray-800 mb-3">Select Car Year*:</label>
            <div className="relative">
                <select
                    required
                    value={selectedYear}
                    onChange={handleChange}
                    className="appearance-none w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-md hover:border-indigo-600 focus:border-indigo-600 focus:ring focus:ring-indigo-100 transition-all duration-300 ease-in-out text-gray-800 font-medium cursor-pointer"
                >
                    <option value="">Year</option>
                    {CarYears.map((year, index) => (
                        <option key={index} value={year}>{year}</option>
                    ))}
                </select>
                <span className="absolute inset-y-0 right-4 flex items-center text-gray-400 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 01.832.445l5 7a1 1 0 01-1.664 1.11L10 5.662 5.832 11.555a1 1 0 01-1.664-1.11l5-7A1 1 0 0110 3z" clipRule="evenodd" />
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default CarYear;
