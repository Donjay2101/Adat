import React from 'react';
import Reactdom from 'react-dom';
class Body extends  React.Component{
    render(){
        return(
            <div style={{height:100+'vh'}}>
                 <div id="pt-main" className="pt-perspective">
                    <div id="body" className="pt-page pt-page-1">                       
                    </div>
                 </div>
            </div>
        );
    }
}

export default Body;
