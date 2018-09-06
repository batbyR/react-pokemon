import React, {Component} from "react";
import "./App.css";
import {Pokemon} from "./components/Pokemon/Pokemon.js";
import {Route, Link} from "react-router-dom";

class App extends Component {
  createTable = () => {
    let table = [];

    // Outer loop to create parent
    for (let i = 1; i < 10; i++) {
      table.push(
        <li key={i}>
          <Link to={`/detail_page/${i}`}>
            Pokemon
            {i}
          </Link>
        </li>
      );
    }
    return table;
  };

  render() {
    return (
      <div>
        <Route path={`/detail_page/:id`} component={DetailPage} />
        <ul>
          <li>
            <Link to="/">None</Link>
          </li>
          {this.createTable()}
        </ul>
      </div>
    );
  }
}

class DetailPage extends Component {
  render() {
    return <Pokemon idPokemon={this.props.match.params.id} />;
  }
}

export default App;
