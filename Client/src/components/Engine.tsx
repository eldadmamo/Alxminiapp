import React from 'react';
import "../index.css"

// Define the type for props
interface EngineWorkProps {
    selectedEngine: string;
    setSelectedEngine: (value: string) => void;
}

const Engines = [
    "below 800 CC",
    "800 CC",
    "1000 CC",
    "1200 CC",
    "1400 CC",
    "1500 CC",
    "1600 CC",
    "1800 CC",
    "2000 CC",
    "2400 CC",
    "2500 CC",
    "2800 CC",
    "3000 CC",
    "above 3000 CC"
];

const EngineWork: React.FC<EngineWorkProps> = ({ selectedEngine, setSelectedEngine }) => {

    // Type the event parameter
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedEngine(e.target.value);
    };

    return (
        <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Engine*:</label>
            <select
                required
                value={selectedEngine}
                onChange={handleChange}
                className="border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 block w-full p-3 rounded-lg text-gray-700 transition-colors duration-300 ease-in-out"
            >
                <option value="">Engine</option>
                {Engines.map((condition, index) => (
                    <option key={index} value={condition}>{condition}</option>
                ))}
            </select>
        </div>
    );
}

export default EngineWork;
