import React from "react";
import "../stylesheet/list/_characterList.scss";
import CharacterCard from "./CharacterCard";
import NotFound from "../images/not-found.png";

class CharacterList extends React.Component {
  render() {
    if (this.props.characters.length === 0) {
      return (
        <div className="not__exist">
          <h2>The character you are looking for, doesn't exist.</h2>
          <div className="not-found">
            <img src={NotFound} alt="" />
          </div>
        </div>
      );
    } else {
      const myCharacters = this.props.characters;
      const objectToJSX = myCharacters.map((character) => {
        return (
          <CharacterCard
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            location={character.location}
            image={character.image}
            episode={character.episode}
            key={character.id}
          />
        );
      });
      return (
        <>
          <ul className="character__list">{objectToJSX}</ul>
        </>
      );
    }
  }
}

export default CharacterList;
