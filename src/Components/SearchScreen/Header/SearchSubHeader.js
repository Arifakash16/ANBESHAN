import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiImageSquareFill } from "react-icons/pi";
import { PiVideoFill } from "react-icons/pi";
import { GiNewspaper } from "react-icons/gi";
import { CgDetailsMore } from "react-icons/cg";
import { Link } from 'react-router-dom';
const SearchSubHeader = () => {
    return (
        <div className='container'>
         <div className=" ">
            <div className="">
                <ul className='nav flex items-center gap-4'>
                    {/* <li className='' >
                        <Link to={'/'} className='flex items-center justify-center no-underline '>
                        
                        <CiSearch className='relative bottom-2'></CiSearch>
                       
                       <p className=''>All</p>
                       
                        
                        </Link>
                        </li> */}

                        {/* <li className='' >
                        <Link to={'/'} className='flex items-center justify-center no-underline '>
                        
                       <FaMapMarkerAlt className='relative bottom-2'></FaMapMarkerAlt>
                       
                       <p className=''>Map</p>
                        </Link>
                        </li> */}
                      
                        {/* <li className='' >
                        <Link to={'/'} className='flex items-center justify-center no-underline '>
                        
                        <PiVideoFill className='relative bottom-2'></PiVideoFill>
                       
                       <p className=''>Videos</p>
                       
                        
                        </Link>
                        </li> */}


                        {/* <li className='' >
                        <Link to={'/'} className='flex items-center justify-center no-underline '>
                        
                        <GiNewspaper className='relative bottom-2'></GiNewspaper>
                       
                       <p className=''>News</p>
                       
                        
                        </Link>
                        </li> */}
                       

                      
 
         

  


                        {/* <li className='' >
                        <Link to={'/'} className='flex items-center justify-center no-underline '>
                        
                        <PiImageSquareFill className='relative bottom-2'></PiImageSquareFill>
                       
                       <p className=''>Images</p>
                        </Link>
                        </li> */}
                       
                        {/* <li className='' >
                        <Link to={'/'} className='flex items-center justify-center no-underline '>
                        <CgDetailsMore className='relative bottom-2'></CgDetailsMore>
                       
                       <p className=''>More</p>
                        </Link>
                        </li> */}

                        
                       


                </ul>
            </div>
         </div>
           
        </div>
    );
};

export default SearchSubHeader;