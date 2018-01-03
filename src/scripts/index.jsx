import  React from 'react';
import  ReactDom from 'react-dom';
import Header from './header.jsx';

class App extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
            </div>
        );
        
    }
}

ReactDom.render(<App/>,document.getElementById('root'));