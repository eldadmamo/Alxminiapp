import React from 'react';
import "./Main.css";

// Define the type for the props
interface TransmissionProps {
    selectedTransmission: string;
    setSelectedTransmission: (value: string) => void;
}

const Transmissions = [
    'Manual',
    'Automatic'
];

const Transmission: React.FC<TransmissionProps> = ({ selectedTransmission, setSelectedTransmission }) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTransmission(e.target.value);
    };

    return (
        <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Transmission*:</label>
            <select
                required
                value={selectedTransmission}
                onChange={handleChange}
                className="border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 block w-full p-3 rounded-lg text-gray-700 transition-colors duration-300 ease-in-out"
            >
                <option value="">Transmission</option>
                {Transmissions.map((transmission, index) => (
                    <option key={index} value={transmission}>{transmission}</option>
                ))}
            </select>
        </div>
    );
}

export default Transmission;
