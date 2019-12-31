import React, { Component } from 'react';
import CardList from '../components/Card/CardList';
import SearchBox from '../components/SearchBox/SearchBox';
import './App.css'
import Scroll from '../components/Scroll/Scroll'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ""
        };
    }

    componentDidMount() {
        const url = 'http://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then(response => { return response.json(); })
            .then(users => { this.setState({ robots: users }) })
    }

    onSearchChange = (event) => {
        this.setState(
            { searchField: event.target.value }
        )
    }

    render() {
        const { robots, searchField } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        return !robots.length ?
            <h1>Loading</h1>
            :
            (
                <div className="tc" >
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
    }
}

export default App;