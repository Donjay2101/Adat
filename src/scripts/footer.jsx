import React from 'react';
import ReactDom from 'react-dom';
import About from './about.jsx';


class Footer extends React.Component{
    render(){
		var handleToUpdate=this.props.handleToUpdate;
        return(			
			<div id="nav" style={{borderTop:'1px solid #EEE'}} className="footer  navbar nav-transparent fixed-nav">© <strong>ADAT Inc.</strong> and contributors <strong>2018</strong>.</div>       	
        );
    }
}

ReactDom.render(<Footer></Footer>,document.getElementById('footer'));
//export default Footer;