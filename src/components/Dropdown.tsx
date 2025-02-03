import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (e: any) => {
    if (!e.target.closest('.dropdown')) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div className="relative inline-block text-left dropdown z-[100]">
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600"
      >
        Dropdown
      </button>

      {isOpen && (
        <div className="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul className="py-1 text-gray-700">
            <li>
              <a href="#" className="block px-4 py-2 text-sm">
                Item 1
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm">
                Item 2
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm">
                Item 3
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
