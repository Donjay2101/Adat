import React from 'react';
import ReactDom from 'react-dom';
import About from './about.jsx';


class Header extends React.Component{
	RenderPages(page){
		if(page=='About')
		{
			
		}
	}
    render(){
        return(			
				<nav id="nav" className="navbar">
					<div className="container">
						<div className="navbar-header">
							<div className="navbar-brand">
								<a href="index.html">
									<img className="logo" src={require('../images/logo.png')} alt="logo"/>
									<img className="logo-alt" src={require('../images/logo-alt.png')} alt="logo"/>
								</a>
							</div>
							<div className="nav-collapse">
								<span></span>
							</div>
						</div>
						<ul className="main-nav nav navbar-nav navbar-right">
							<li ><a href="#home"  className="iterateMenu">Home</a></li>
							<li ><a className="iterateMenu"  href="#about">About</a></li>
							<li ><a  className="iterateMenu"  href="#portfolio">Portfolio</a></li>
							<li ><a className="iterateMenu" href="#service">Services</a></li>
							<li ><a className="iterateMenu" href="#pricing">Prices</a></li>
							<li ><a className="iterateMenu" href="#team">Team</a></li>
							<li className="has-dropdown ">
							
							<a href="#blog">Blog <span  className="glyphicon glyphicon-chevron-down"></span></a>
								<ul className="dropdown">
									<li><a className="iterateMenu" href="#">blog post</a></li>
								</ul>
							</li>
							<li><a className="iterateMenu" href="#contact">Contact</a></li>
						</ul>
					</div>
				</nav>        	
        );
    }
}

export default Header;