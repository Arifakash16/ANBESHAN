import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Data = ({dataParams}) => {
    return (
        <div className=''>
          <Link to={dataParams.displayLink}>{dataParams.displayLink}</Link>   {"  "} <i className='fa fa-angle-down'></i>
         <Link to={dataParams.formattedUrl}> <h3>{dataParams.htmlTitle
}</h3></Link>
<p>{dataParams.snippet}</p>
        </div>
    );
};

export default Data;