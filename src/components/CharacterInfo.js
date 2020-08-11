import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../stylesheet/card/_detailCharacter.scss";
import Portal from "../images/portal.png";

const CharacterInfo = (props) => {
  const { image, name, status, species, origin, episode, id } = props.character;
  const actualIndex = props.charactersToShow.indexOf(props.character);

  const prevId =
    actualIndex > 0
      ? props.charactersToShow[actualIndex - 1].id
      : props.charactersToShow[actualIndex].id;
  const nextId =
    actualIndex < props.charactersToShow.length - 1
      ? props.charactersToShow[actualIndex + 1].id
      : props.charactersToShow[actualIndex].id;
  return (
    <>
      <div className="prev-post">
        <Link
          className={`link__arrow ${prevId === id ? "disabled-link" : ""}`}
          to={`/character/${prevId}`}
        >
          <i className="fas fa-chevron-left"></i>
        </Link>
        <Link to="/">
          <img src={Portal} alt="" />
        </Link>
        <Link
          className={`link__arrow ${nextId === id ? "disabled-link" : ""}`}
          to={`/character/${nextId}`}
        >
          <i className="fas fa-chevron-right"></i>
        </Link>
      </div>
      <div className="info__character__detail">
        <div className="character__info">
          <div className="container__img__info">
            <img src={image} alt="character image" />
          </div>
          <div className="container__info__info">
            <h2>Name: {name}</h2>
            <p>
              Status: {status}
              <i
                className={
                  status === "Alive"
                    ? `far fa-heart`
                    : status === "Dead"
                    ? `far fa-dizzy`
                    : status === "unknown"
                    ? `fas fa-question`
                    : ""
                }
              ></i>
            </p>
            <p>
              Specie: {species}
              <i
                className={
                  species === "Human"
                    ? `fas fa-user-alt`
                    : `fab fa-reddit-alien`
                }
              ></i>
            </p>
            <p>Planet: {origin}</p>
            <p>Chapters: {episode.length}</p>
          </div>
        </div>
      </div>
    </>
  );
};

CharacterInfo.propTypes = {
  character: PropTypes.object,
};

export default CharacterInfo;
