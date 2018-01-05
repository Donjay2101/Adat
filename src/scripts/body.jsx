import React from 'react';
import Reactdom from 'react-dom';
import Home from './home.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
import Team from './team.jsx'
import Services from './services.jsx';
import Pricing from './Pricing.jsx';
import Portfolio from './portfolio.jsx';


class Body extends  React.Component{
    constructor(){
        super();
    }
    render(){
        if(this.props.page=="home")
        {
            return (<Home></Home>);
        }
        else if(this.props.page=="about")
        {
            return (<About></About>);
        }
        else if(this.props.page=="contact")
        {
            return (<Contact></Contact>);
        }
        else if(this.props.page=="team")
        {
            return (<Team></Team>);
        }
        else if(this.props.page=="services")
        {
            return (<Services></Services>);
        }
        else if(this.props.page=="price")
        {
            return (<Pricing></Pricing>);
        }
        else if(this.props.page=="portfolio")
        {
            return (<Portfolio></Portfolio>);
        }
    }
}

export default Body;
