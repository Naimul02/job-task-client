import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const DropdownMenu = ({handleLowToHigh , handleHighToLow , handleDate}) => {
    return (
          
          <div className="lg:mx-[70px] mx-20 flex  mb-[140px] lg:mb-0  justify-center lg:justify-end">
          <div className="dropdown dropdown-end" >
        <div tabIndex={0} role="button" className="btn m-1 bg-white hover:bg-white w-[229px] border rounded-none">Sort Products By  <IoIosArrowDown className="text-2xl font-semibold"/></div>
    <ul tabIndex={0} className="dropdown-content menu bg-white border rounded-none z-[1] w-[229px] p-2 shadow">
    <li onClick={handleLowToHigh}><a>Low to High</a></li>
    <li onClick={handleHighToLow}><a>High to Low</a></li>
    <li onClick={handleDate}><a>Newest first (Date)</a></li>
</ul>
</div>
          </div>
    );
};

export default DropdownMenu;