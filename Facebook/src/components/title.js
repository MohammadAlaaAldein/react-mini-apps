import React from 'react';
import "./title.css"

class Title extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div id="titleDiv">
                <h2 id> Mohammad Alaa Aldein </h2>
                <h5> Hello World, I'm Programmer & Gamer </h5>
                <div> 
                    <span> <a href="#" > Like </a ></span>
                    <span> <a href="#" > Reply </a ></span>                   
                    <span> 2 second ago </span>
                </div>
            </div>
         );
    }
}
 
export default Title;