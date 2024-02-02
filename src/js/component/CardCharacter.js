import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardCharacter = (props) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.addDetailsToCharacters(props.character.uid);
  }, []);

  return (
    <div className="card">
      {/* Modify the image source to use the SWAPI URL */}
      <img
        src={`https://www.swapi.tech/api/people/${props.character.uid}/image`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.character.name}</h5>
        {/* Add other character properties as needed */}
        <div className="buttonsCard">
          <Link to={`/character/${props.character.uid}`} className="btn btn-primary">
            Learn more!
          </Link>
          <button
            className="btn btn-warning"
            onClick={() => {
              actions.setFavorites(props.character);
            }}
          >
            Like!
          </button>
        </div>
      </div>
    </div>
  );
};
