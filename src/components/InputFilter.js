import React from "react";
import "../stylesheet/form/_inputs.scss";

class InputFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleSpecies = this.handleSpecies.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(ev) {
    const character = ev.currentTarget.value;
    this.props.filterCharacter(character);
  }
  handleSpecies(ev) {
    const specie = ev.currentTarget.value;
    this.props.filterSpecies(specie);
  }
  handleSubmit(ev) {
    ev.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <fieldset className="search__character">
          <label htmlFor="search">Search your favorite character</label>
          <input
            id="search"
            type="text"
            onChange={this.handleInput}
            value={this.props.inputValue}
          />
        </fieldset>

        <fieldset className="filter__character">
          <p>Species filter</p>
          <label htmlFor="human" name="species">
            Human
          </label>
          <input
            id="human"
            type="radio"
            value="human"
            name="species"
            onChange={this.handleSpecies}
            checked={this.props.specieSelected === "human"}
          />
          <label htmlFor="alien" name="species">
            Alien
          </label>
          <input
            id="alien"
            type="radio"
            value="alien"
            name="species"
            onChange={this.handleSpecies}
            checked={this.props.specieSelected === "alien"}
          />
          <label htmlFor="all" name="species">
            All characters
          </label>
          <input
            type="radio"
            value="all"
            name="species"
            onChange={this.handleSpecies}
            checked={this.props.specieSelected === "all"}
          />
        </fieldset>
      </form>
    );
  }
}

export default InputFilter;
