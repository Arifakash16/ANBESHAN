import React from 'react';


const Data = ({dataParams}) => {
    return (

        <div className=''>
            <a href={dataParams.formattedUrl}>{dataParams.displayLink}</a>   {"  "} <i className='fa fa-angle-down'></i>
           
            <a href={dataParams.formattedUrl}>
                <h3>{dataParams.title}</h3>
            </a>
            <p>{dataParams.snippet}</p>
        </div>



      
    );
};

export default Data;