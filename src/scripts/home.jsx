import React from 'react';
import ReactDom from 'react-dom';
import Footer from './footer.jsx';
import js from '../script//main.js';
class Home extends React.Component{
    render(){
        return(  
            <div className="overlay">
                <div  className="slider owl-carousel owl-theme">
                            <img className="img-responsive" src={require('../images/background1.jpg')} alt=""/>
                            <img className="img-responsive" src={require('../images/background2.jpg')} alt=""/>
                            <img className="img-responsive" src={require('../images/background3.jpg')} alt=""/>
                </div>  
            </div>
        );
    }
}

export default Home;