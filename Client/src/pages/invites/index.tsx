import Hamster from "../../icons/Hamster.tsx";
import Settings from "../../icons/Settings.tsx";
import Friends from "../../icons/Friends.tsx";
import { Link } from "react-router-dom";
import Coins from "../../icons/Coins.tsx";
import { useEffect, useState } from 'react';
import { fetchMultiFiles } from '../../data/api.tsx';
import { Invite } from "../invites/invite";
import WebApp from "@twa-dev/sdk";
import Status from "../../icons/Status.tsx";
import Post from "../../icons/Post.tsx";
import Upload from "../../icons/Upload.tsx";
import {FiBell} from "react-icons/fi";


const Inviting = () => {
  const [files, setFiles] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query
  const [conditionFilter, setConditionFilter] = useState<string>(''); // State for condition filter
  const [yearFilter, setYearFilter] = useState<string>('')
  const [filteredFiles, setFilteredFiles] = useState<any[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

// Function to go to the previous slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? selectedFile.files.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

// Function to go to the next slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === selectedFile.files.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

// Function to jump to a specific slide based on dot click
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };


  useEffect(() => {
    const getFiles = async () => {
      try {
        const data = await fetchMultiFiles();
        console.log('Fetched files:', data); // Check if data is fetched
        setFiles(data);
      } catch (err) {
        console.error('Fetch error:', err); // Log error if it occurs
      }
    };

    getFiles();
  }, []);

  useEffect(() => {
    let filtered = files;

    // Filter by search query
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(file =>
          file.make.toLowerCase().includes(lowercasedQuery) ||
          file.model.toLowerCase().includes(lowercasedQuery) ||
          file.year.toString().includes(lowercasedQuery)
      );
    }

    // Filter by condition (New/Used)
    if (conditionFilter) {
      filtered = filtered.filter(file => file.condition.toLowerCase() === conditionFilter.toLowerCase());
    }

    if(yearFilter){
      filtered = filtered.filter(file => file.year.toString() === yearFilter);
    }

    setFilteredFiles(filtered);
  }, [searchQuery, conditionFilter, yearFilter, files]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const resetFilters = () => {
    setSearchQuery(''); // Clear search query
    setConditionFilter(''); // Clear condition filter
    setYearFilter(''); // Clear year filter
    setDropdownOpen(false); // Close dropdown after reset
  };

  const years = Array.from({ length: 45 }, (_, i) => 1980 + i);

  return (
      <>
        <div className="bg-black flex justify-center">
          <div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">
            <div className="px-4 z-10">
              <div className="flex items-center justify-between pt-4">
                {/* Left side */}
                <div className="flex items-center space-x-2">
                  <div className="p-1 rounded-lg bg-[#1d2025]">
                    <Hamster size={24} className="text-[#d4d4d4]"/>
                  </div>
                  <div>
                    <p className="text-sm">{WebApp?.initDataUnsafe?.user?.first_name}</p>
                  </div>
                </div>

                {/* Right side */}
                <div className="flex items-center space-x-4">
                  <button onClick={() => setShowNotifications(!showNotifications)}>
                    <FiBell size={20} className="text-white"/>
                  </button>
                  {showNotifications && (
                      <div
                          className="absolute top-12 right-1 w-64 bg-[#1c1f24] border border-[#43433b] rounded-lg p-4 text-white z-50">
                        <h3 className="font-bold text-lg mb-2">Notifications</h3>
                        <ul>
                          <li className="bg-[#272a2f] rounded-lg p-2 mb-2">
                            No new notifications
                          </li>
                        </ul>
                      </div>
                  )}
                  <Settings className="text-white"/>
                </div>
              </div>
            </div>

            <div
                className="flex-grow  rounded-t-[48px] flex-grow mt-4 bg-[#0000FF] rounded-t-[48px] relative top-glow z-0">

              <div
                  className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px] overflow-y-auto">
                <div className="px-4 mt-6 flex justify-between gap-2">
                  <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
                    <div className="dot"></div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center mt-4">
                        <select
                            id="condition"
                            className="text-black p-2 rounded"
                            value={conditionFilter}
                            onChange={(e) => setConditionFilter(e.target.value)}
                        >
                          <option value="">All</option>
                          <option value="new">New</option>
                          <option value="used">Used</option>
                        </select>
                      </div>
                      <div className="flex items-center mt-4 relative">
                        <div className="relative">
                          <button
                              onClick={toggleDropdown}
                              className="text-black p-2 rounded bg-white w-full text-left"
                              style={{width: '70px'}}
                          >
                            {yearFilter || "Year"}
                          </button>

                          {dropdownOpen && (
                              <ul
                                  className="absolute z-10 bg-white text-black rounded shadow-md w-full max-h-40 overflow-y-auto"
                                  style={{maxHeight: '160px'}}  // Adjust this height to control the number of visible years
                              >
                                {years.map((year) => (
                                    <li
                                        key={year}
                                        className="p-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => {
                                          setYearFilter(year.toString());
                                          setDropdownOpen(false);
                                        }}>
                                      {year}
                                    </li>
                                ))}
                              </ul>
                          )}
                        </div>
                      </div>
                    </div>
                    <br/>
                    <div className="flex items-center justify-center space-x-4">
                      <input
                          type="text"
                          placeholder="Search by make, model, or year"
                          className="text-black p-2 rounded"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                      />

                      <button
                          className="bg-red-500 text-white p-2 rounded"
                          onClick={resetFilters}
                      >
                        Reset Filters
                      </button>
                    </div>
                  </div>
                </div>

                <div
                    className="border-gray-300 p-6 mx-auto rounded-lg shadow-lg transition hover:shadow-xl">
                  <ul className="flex flex-col gap-2.5">
                    {filteredFiles.slice(-5).reverse().map((file, index) => (
                        <div key={index} onClick={() => {
                          setSelectedFile(file);
                          setShowModal(true); // Open the modal
                        }}>
                          <Invite
                              name={file.name}
                              value={file.value}
                              make={file.make}
                              price={file.price}
                              imageUrl={`${import.meta.env.VITE_REACT_APP}/${file.files[0]?.filePath}`}
                              checked={file.checked}
                          />
                        </div>
                    ))}
                  </ul>
                </div>
                <br/>
                <br/>


              </div>
            </div>
            {showModal && selectedFile && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white rounded-lg shadow-lg p-4 w-11/12 max-w-lg mx-auto h-auto relative">
                    {/* Close button in the top-right corner */}
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        onClick={() => setShowModal(false)}
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                    <h2 className="text-lg font-bold mb-2 text-black">File Details</h2>

                    <div className="relative">
                      {/* Image Container */}
                      <img
                          className="w-full h-64 object-cover rounded mb-2"
                          src={`${import.meta.env.VITE_REACT_APP}/${selectedFile.files[currentIndex].filePath}`}
                          alt={`File ${currentIndex + 1}`}
                      />

                      {/* Previous button */}
                      <button
                          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-800"
                          onClick={prevSlide}
                      >
                        Prev
                      </button>

                      {/* Next button */}
                      <button
                          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-800"
                          onClick={nextSlide}
                      >
                        Next
                      </button>
                    </div>

                    {/* Circle Dots for Slider Navigation */}
                    <div className="flex justify-center space-x-2 mt-2">
                      {selectedFile.files.map((_: any, index: number) => (
                          <div
                              key={index}
                              className={`h-2 w-2 rounded-full cursor-pointer ${
                                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                              }`}
                              onClick={() => goToSlide(index)}
                          ></div>
                      ))}
                    </div>

                    {/* Details Section */}
                    <div className="max-h-40 overflow-y-auto mt-4">
                      <p className="text-black mb-1"><strong>Make:</strong> {selectedFile.make}</p>
                      <p className="text-black mb-1"><strong>Model:</strong> {selectedFile.model}</p>
                      <p className="text-black mb-1"><strong>Year:</strong> {selectedFile.year}</p>
                      <p className="text-black mb-1"><strong>Condition:</strong> {selectedFile.condition}</p>
                      <p className="text-black mb-2"><strong>Price:</strong> {selectedFile.price}</p>
                    </div>

                  </div>
                </div>
            )}


          </div>

          {/* Bottom fixed div */}
          <div
              className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#E1F0F5] flex justify-around items-center z-50 rounded-t-3xl py-3 shadow-2xl drop-shadow-lg transition-all duration-300"
          >
            {/* Wallet */}
            <div className="text-center text-black w-1/5 hover:text-blue-700 transition-colors duration-300">
              <Link to="/">
                <div className="flex flex-col items-center space-y-1">
                  <Upload className="w-7 h-7 mx-auto"/>
                  <p className="mt-1 text-sm font-bold">Upload</p>
                </div>
              </Link>
            </div>

            {/* Swap */}
            <div className="text-center text-gray-400 w-1/5 hover:text-blue-700 transition-colors duration-300">
              <Link to="/invites">
                <div className="flex flex-col items-center space-y-1">
                  <Status className="w-7 h-7 mx-auto"/>
                  <p className="mt-1 text-sm font-bold">Status</p>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </>
  );
}

export default Inviting;
