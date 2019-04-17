import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class  App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField : '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json()
        }
        ).then(users => this.setState({robots: users }));
    }

    onSearchChange = (event) => {

        this.setState({searchField : event.target.value});
        
    }

    render () {

        const filteredRobots = this.state.robots.filter(robot => {

            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())

        }) 

        return(
        <div className='tc'>
            <h1 className='f1'>Gasten</h1>
            < SearchBox searchChange={this.onSearchChange}/>
            <ErrorBoundry>
            <Scroll>
                < CardList robots = {filteredRobots}/>
            </Scroll>
            </ErrorBoundry>
        </div>
    );
}
}
export default App;
 