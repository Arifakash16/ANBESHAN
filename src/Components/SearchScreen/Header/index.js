import React from 'react';
import SearchHeader from './SearchHeader';
import SearchSubHeader from './SearchSubHeader';

const index = ({searchTerm,setSearch,openVoiceSearch}) => {
    return (
        <>
           <SearchHeader searchTerm={searchTerm} setSearch={setSearch} openVoiceSearch={openVoiceSearch} />
           <SearchSubHeader/>
        </>
    );
};

export default index;