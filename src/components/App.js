import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Header from "./Header";
import fetchFromApi from "../data/fetchFromApi";
import InputFilter from "./InputFilter";
import CharacterList from "./CharacterList";
import CharacterInfo from "./CharacterInfo";
import NotFound from "../images/not-found.png";
import Portal from "../images/portal.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      characters: [],
      filterCharacter: "",
      specieSelected: "all",
    };
    this.filterCharacter = this.filterCharacter.bind(this);
    this.filterSpecies = this.filterSpecies.bind(this);
    this.renderCharacterInfo = this.renderCharacterInfo.bind(this);
  }

  componentDidMount() {
    fetchFromApi().then((character) => {
      const orderedObject = character.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        }
        return 0;
      });

      if (character === undefined) {
        this.setState({
          isFetching: true,
        });
      } else {
        this.setState({
          isFetching: false,
          characters: orderedObject,
        });
      }
    });
  }

  filterCharacter(character) {
    this.setState((prevState) => {
      return {
        ...prevState,
        filterCharacter: character,
      };
    });
  }

  filterSpecies(specie) {
    this.setState((prevState) => {
      return {
        ...prevState,
        specieSelected: specie,
      };
    });
  }

  allFilters() {
    const characters = this.state.characters;
    const filterCharacter = this.state.filterCharacter;
    const specieSelected = this.state.specieSelected;
    return characters
      .filter(
        (character) =>
          character.species.toLowerCase() === specieSelected ||
          "all" === specieSelected
      )
      .filter((character) =>
        character.name.toLowerCase().includes(filterCharacter.toLowerCase())
      );
  }

  renderCharacterInfo(props) {
    const routeId = parseInt(props.match.params.id);
    const size = this.state.characters.length;
    const selectedCharacter = this.state.characters.find(
      (character) => character.id === routeId
    );
    if (selectedCharacter === undefined) {
      return (
        <div className="go__home">
          <Link to="/">
            <img className="portal__home" src={Portal} alt="" />
          </Link>
          <div className="not__exist">
            <h2>The character you are looking for, doesn't exist.</h2>
            <div className="not-found">
              <img src={NotFound} alt="" />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <CharacterInfo
          character={selectedCharacter}
          size={size}
          charactersToShow={this.allFilters()}
        />
      );
    }
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <InputFilter
              inputValue={this.state.filterCharacter}
              filterCharacter={this.filterCharacter}
              specieSelected={this.state.specieSelected}
              filterSpecies={this.filterSpecies}
            />
            <CharacterList
              characters={this.allFilters()}
              filterCharacter={this.filterCharacter}
              specieSelected={this.state.specieSelected}
              filterSpecies={this.filterSpecies}
            />
          </Route>
          <Route
            path="/character/:id"
            render={this.renderCharacterInfo}
          ></Route>
        </Switch>
      </>
    );
  }
}

export default App;
