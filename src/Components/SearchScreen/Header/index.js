import React from 'react';
import SearchHeader from './SearchHeader';
import SearchSubHeader from './SearchSubHeader';

const index = ({searchTerm,setSearch}) => {
    return (
        <>
           <SearchHeader searchTerm={searchTerm} setSearch={setSearch}/>
           <SearchSubHeader/>
        </>
    );
};

export default index;