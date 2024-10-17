import React from 'react';
import "../index.css";

const FuelType = [
    'Benzine',
    'Diesel',
    'Hybrid',
    'Electric'
];

// Define types for the props
interface FuelTypesProps {
    selectedFuel: string;
    setSelectedFuel: (fuel: string) => void;
}

const FuelTypes: React.FC<FuelTypesProps> = ({ selectedFuel, setSelectedFuel }) => {
    // Specify the type for the event parameter
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFuel(e.target.value);
    };

    return (
        <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Fuel*:</label>
            <select
                required
                value={selectedFuel}
                onChange={handleChange}
                className="border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 block w-full p-3 rounded-lg text-gray-700 transition-colors duration-300 ease-in-out"
            >
                <option value="">Fuel Type</option>
                {FuelType.map((condition, index) => (
                    <option key={index} value={condition}>{condition}</option>
                ))}
            </select>
        </div>
    );
}

export default FuelTypes;
