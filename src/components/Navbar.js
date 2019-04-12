import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  handleChange = (e) => {
    this.props.searchPerson(e)
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container">
          <Link className="navbar-brand text-uppercase" to="/">Person List</Link>

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.handleChange}
            />
          </form>
        </div>
      </nav>
    )
  }
}


export default Navbar
