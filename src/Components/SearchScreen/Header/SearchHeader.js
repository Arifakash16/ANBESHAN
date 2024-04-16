import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FaRegTimesCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TiMicrophone } from "react-icons/ti";
import { IoAppsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";



const SearchHeader = ({searchTerm,setSearch,openVoiceSearch}) => {
    const[searchText,setSearchText]=useState('');
    useEffect(()=>{setSearchText (searchTerm)},[searchTerm])
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(/^[a-zA-z0-9].*/.test(searchText) || /^[a-zA-z0-9]+" ".*/.test(searchText))
        {
          setSearch(searchText);
        }
    
      };
      const handleButton=()=>{
        
        if(/^[a-zA-z0-9].*/.test(searchText) || /^[a-zA-z0-9]+" ".*/.test(searchText))
        {
          setSearch(searchText);
        }
    
      };
      const clearInput=()=>{
        setSearchText('');
      }
    return (
        <div className='py-2  flex items-center gap-10 md:grid grid-cols-12 '>
           {/* <Link to={'/'} className="ml-10">
            <img className='ml-4' src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google-logo" height='30' />
           </Link> */}
           <div className="grid md:grid-cols-8">
            <form className='relative' onSubmit={handleSubmit}>
                <input type="text" name="" value={searchText} onChange={(e)=>setSearchText(e.target.value)} className='border-2 text-black border-black opacity-20 rounded-tl-2xl rounded-br-2xl rounded-tr-2xl rounded-bl-2xl p-2 w-[600px]'  id="" /> 
                <div className="absolute start-[530px] text-xl bottom-3 flex items-center justify-end gap-1">
                {searchText?(<FaRegTimesCircle onClick={clearInput} />)  :null}
                <CiSearch onClick={handleButton} />
                <TiMicrophone onClick={()=>openVoiceSearch()} />
                </div>
            </form>
           
           </div>
           <ul className=' flex items-center gap-5  text-xl'>
            <li className='relative ml-[65rem]'>
                <a href="">
                <IoAppsSharp className='text-black'></IoAppsSharp> 
                </a>
                </li>
                <li className=''>
                    <a href="">
                    <FaUser className='text-black'></FaUser>
                    </a>
                    </li>
           </ul>
           
          
        </div>
        
    );
};

export default SearchHeader;