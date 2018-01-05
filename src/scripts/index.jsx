import  React from 'react';
import  ReactDom from 'react-dom';
import Header from './header.jsx';
import Body from './body.jsx';

class App extends React.Component{
    Test(){
            console.log('asd');
    }   
    render(){
        return(
            <div>
                <div style={{width:'100%',height:'100%'}}>
					<div className="bg-img" style={{backgroundImage:'url('+require('../images/background1.jpg')+')'}}>
						<div className="overlay"></div>
					</div>
                    <Header></Header>
                </div>
               
                    <Body></Body>
                                               
            </div>
        );
        
    }
}

ReactDom.render(<App/>,document.getElementById('root'));