import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardVehicle = (props) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    // Add any additional logic here if needed
  }, []);

  return (
    <div className="card">
      {/* Modify the image source to use the SWAPI URL */}
      <img
        src={`https://www.swapi.tech/api/vehicles/${props.vehicle.uid}/image`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.vehicle.name}</h5>
        {/* Add other vehicle properties as needed */}
        <div className="buttonsCard">
          <Link to={`/vehicle/${props.vehicle.uid}`} className="btn btn-primary">
            Learn more!
          </Link>
          <button
            className="btn btn-warning"
            onClick={() => {
              actions.setFavorites(props.vehicle);
            }}
          >
            Like!
          </button>
        </div>
      </div>
    </div>
  );
};
