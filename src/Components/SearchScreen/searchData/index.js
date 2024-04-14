import React from 'react';
import Data from './Data';



const SearchData = ({googleData}) => {
    console.log('Google Data', googleData);
    return (
        <div className=' p-5 ml-1'>
          <p>All {googleData?.searchInformation.
formattedTotalResults} found in {googleData?.searchInformation.formattedSearchTime} sec </p>
          {
                 googleData?.items.map(data=><Data dataParams={data} key={data.id}></Data>)
          }
    
        </div>
    );
};

export default SearchData;