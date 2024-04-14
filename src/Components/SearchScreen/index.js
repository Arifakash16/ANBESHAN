import React,{useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import Header from './Header'

import SearchData from './searchData';


const SearchScreen = ({searchTerm,googleData,setSearch}) => {
  const history= useHistory();
  console.log('Check',googleData);
  
   useEffect(()=>{
    if(searchTerm ==='')
    {
      history.push('/');
    }
   },[searchTerm]);

    
  
  // console.log(history);
  
  return (
    <>
     <Header searchTerm={searchTerm} setSearch={setSearch} />
      <div className="container mx-auto">
        <div className="grid grid-rows-1">
         <SearchData googleData={googleData}/>
        <div className='grid md:grid-cols-12'>
             {/* <h1>Welcome to search page:{searchTerm}</h1> */}
        </div>
        
       
        </div>
      
    </div>
    </>
  );
};

export default SearchScreen;
