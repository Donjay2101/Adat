import  React from 'react';
import  ReactDom from 'react-dom';
import Header from './header.jsx';
import Body from './body.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
        var handleToUpdate=this.handleToUpdate.bind(this);
        var page='';
        this.state={page:"home"};
    }

    handleToUpdate(header){
        console.log(header);
        this.setState({page:header});
    }

    Test(){
            console.log('asd');
    }   
    render(){
        var handleToUpdate=this.handleToUpdate;
        const pageToRender = this.state.page == null ? 'home':this.state.page;
        return(
            <div>
                <div style={{width:'100%',height:'100%'}}>
                    <Header handleToUpdate={handleToUpdate.bind(this)}></Header>
                </div>
                <div className="pageContainer">
                 <div id="pt-main" className="pt-perspective">
                    <div id="body" className="pt-page pt-page-1">  
                            <Body page={pageToRender}></Body> 
                    </div>
                 </div>
            </div>
                                            
            </div>
        );
        
    }
}

ReactDom.render(<App/>,document.getElementById('root'));