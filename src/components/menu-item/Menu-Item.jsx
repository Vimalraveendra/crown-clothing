import React from 'react';
import './Menu-Item.scss';

const MenuItem= ({ title,imageUrl,linkUrl,size})=>{
    return(
        <div 
        style={{
            background:`url(${imageUrl})`
        }}
        className={`menu-item ${size || ''} `}>
                  <div className="content">
                      <h1 className="title">{title}</h1>
                        <span className="sub-title">SHOP NOW</span>
                  </div>
               </div>
    )
}

export default MenuItem;