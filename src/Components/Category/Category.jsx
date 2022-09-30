import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';

import './Category.scss';

function Category(props:any) {
  return (
    <div className='category'>
        <FontAwesomeIcon icon={props.icon} color="green"/>
        <h3>{props.name}</h3>
    </div>
  )
}

export default Category