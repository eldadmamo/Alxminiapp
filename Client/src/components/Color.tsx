import React from 'react';
import "../index.css"

// Define the possible color options
const Colors: string[] = [
    'Black',
    'Blue',
    'Dark blue',
    'Sky blue',
    'Brown',
    'Burgundy',
    'White',
    'Yellow',
    'Green',
    'Silver',
    'Red',
    'Kaki (1D9)',
    'Purple',
    'Pencil',
    'Grey',
    'Golden',
    'Champagne',
    'Orange'
];

// Define the props interface
interface ColorProps {
    selectedColor: string;
    setSelectedColor: (color: string) => void;
}

const Color: React.FC<ColorProps> = ({ selectedColor, setSelectedColor }) => {

    // Define the event type for handleChange function
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedColor(e.target.value);
    };

    return (
        <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Color*:</label>
            <select
                required
                value={selectedColor}
                onChange={handleChange}
                className="border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 block w-full p-3 rounded-lg text-gray-700 transition-colors duration-300 ease-in-out"
            >
                <option value="">Color</option>
                {Colors.map((color, index) => (
                    <option key={index} value={color}>{color}</option>
                ))}
            </select>
        </div>
    );
}

export default Color;
