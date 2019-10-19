import React from 'react';
import './Menu-Item.scss';

const MenuItem= ({ title,imageUrl,linkUrl,size})=>{

    return(
        <div
        className={`menu-item ${size || ''} `}>
               <div className="background-image"
               style={{
                  backgroundImage:`url( ${imageUrl} )`
             }}
                />
                  <div className="content">
                      <h1 className="title">{ title.toUpperCase() }</h1>
                        <span className="sub-title">SHOP NOW</span>
                  </div>
               </div>
    )
}

export default MenuItem;