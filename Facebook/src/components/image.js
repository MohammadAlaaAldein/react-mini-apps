import React from 'react';
import Mohammad from "./mohammad.jpg"

class Image extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <img src={Mohammad} width="250px"/>
            </div>
         );
    }
}
 
export default Image;