import * as React from "react";
import "./Banner.scss"
import DCI from './dci.png';




export default function Banner({ children }) {
    return (
       
        <div className="banner" style ={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem`}}>
            {children}
            <div className="banner-info">
            <a href ="banner-link">Our Partners</a>
            <img src={DCI} />
            </div>
        </div>
        
    )

    
}

