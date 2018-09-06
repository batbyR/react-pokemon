import React, {Component} from "react";
import logo from "../../logo.svg";
import {getFirstAbility, convertPoundsToKilograms} from "./Pokemon.service";

export class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true, pokemon: {}};
  }

  fetchPokemon(idPokemon) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.idPokemon}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            pokemon: responseJson
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.idPokemon !== prevProps.idPokemon) {
      this.fetchPokemon(this.props.idPokemon);
    }
  }
  componentDidMount() {
    this.fetchPokemon(this.props.idPokemon);
  }
  render() {
    if (this.state.isLoading) {
      return (
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      );
    }
    return (
      <div>
        <img src={this.state.pokemon.sprites.front_default} alt={this.state.pokemon.id} />
        <p>First ability: {getFirstAbility(this.state.pokemon)} </p>
        <p>Weight: {convertPoundsToKilograms(this.state.pokemon.weight)} kgs </p>
      </div>
    );
  }
}
