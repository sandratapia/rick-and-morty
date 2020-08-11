import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/card/_cardCharacter.scss";

class CharacterCard extends React.Component {
  render() {
    const route = `/character/${this.props.id}`;
    return (
      <React.Fragment>
        <Link className="link__arrow" to={route}>
          <li
            className="character__card"
            id={this.props.id}
            key={this.props.id}
          >
            <div className="info__character">
              <div className="container__img">
                <img src={this.props.image} alt="character image" />
              </div>
              <div className="container__info">
                <h2>{this.props.name}</h2>
                <p>
                  {this.props.species}
                  <i
                    className={
                      this.props.species.toLowerCase() === "human"
                        ? `fas fa-user-alt`
                        : `fab fa-reddit-alien`
                    }
                  ></i>
                </p>
              </div>
            </div>
          </li>
        </Link>
      </React.Fragment>
    );
  }
}

export default CharacterCard;
