//enter code here
// Avatar should accept caption and image  as props
// do default export

import React from "react";

const App = ({caption, image}) => {
    const imageStyle = {
        borderRadius : "50%",
    };


    return (
       <div>
        <h2>{caption}</h2>
        <img src="{image}" alt="{caption}" style={imageStyle} />
        </div>
 
    );
};

export default App;
