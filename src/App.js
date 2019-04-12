import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import PersonList from './components/PersonList';
import PersonDetails from './components/PersonDetails';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      people: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      const people = await res.data;
      this.setState({
        people
      })
    } catch (err) {
      console.log(err);
    }
  }

  searchPerson = (e) => {
    const { people } = this.state;
    let searchValue = e.target.value.toLowerCase();

    if (searchValue !== '') {
      const newList = people.filter(person => {
        let personName = person.name.toLowerCase();
        return personName.indexOf(searchValue) !== -1
      })

      this.setState({
        people: newList
      })
    } else {
      this.getData();
    }

  }

  render() {
    const { people } = this.state;
    return (
      <Router>
        <Navbar searchPerson={this.searchPerson} />
        <Switch>
          <Route exact path='/' component={(props) => <PersonList {...props} people={people} />} />
          <Route path='/person/:id' component={(props) => <PersonDetails {...props} people={people} />} />
        </Switch>
      </Router >
    )
  }
}

export default App





