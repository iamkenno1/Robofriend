import React from 'react';
import CardList from '../Components/CardList';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import errorBoundry from '../Components/errorBoundry';
import './App.css';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield:''
        }
    }
    
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())

        .then(users => this.setState({robots: users}))
        
    }
    
    
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }

    

    render(){
        const filterrobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());            
        })
        // console.log(filterrobots);
        
        return (
            <div className='tc'>
                <h1>RoboFriend</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                    <errorBoundry>
                        <CardList robots={filterrobots} />
                    </errorBoundry>
                </Scroll>    
            </div>
            
        );
    }
}

export default App;
