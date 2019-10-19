import React from 'react';
import './Menu-Item.scss';

const MenuItem= ({ title,imageUrl,linkUrl,size})=>{

    return(
        <div 
        style={{
            backgroundImage:`url( ${imageUrl} )`
        }}
        className={`menu-item ${size || ''} `}>
                  <div className="content">
                      <h1 className="title">{ title.toUpperCase() }</h1>
                        <span className="sub-title">SHOP NOW</span>
                  </div>
               </div>
    )
}

export default MenuItem;