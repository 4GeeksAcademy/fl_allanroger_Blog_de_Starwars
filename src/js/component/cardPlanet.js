// import React, {useContext, useEffect} from "react";
// import { Link } from "react-router-dom";
// import { Context } from "react";

// export const Card_Planet = (props => {
//     const { store, actions } = useContext(Context);

//     useEffect( () => {
//         actions.addDetailsToPlanets(props.planet.uid)
//     },[])

//     return(
//         <div className="card">
//             <img src={"https://starwars-visualguide.com/assets/img/planets/${props.planet.uid}.jpg"}
//              className="card-img-top" alt="..." />
//           {/* olhar se é nesserario colocar classname= cardHeight */}
//           <div className="card-body">
//             <h5 className="card-title">{props.planet.name}</h5>
//             <p>height: {props.planetproperties?.height}</p>
//             <p>Hair Color: {props.planetproperties?.hair_color}</p>
//             <p>Eye Color: {props.planetproperties?.eye_color}</p>
//             <div className="buttonsCard">
//                 <Link
//                 to={'/planet/${props.planet.uid}'}
//                 className="blt btn-primary">
//                     Learn more!
//                 </Link>
//                 <button className="btn btn-warning" onClick={() => {
//                     actions.setFavorites(props.planet);
//                 }}>
//                     Like!
//                 </button>
//             </div>
//           </div>
//         </div>
//     )
// })

import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // Certifique-se de que o caminho do arquivo está correto

export const Card_Planet = (props) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.addDetailsToPlanets(props.planet.uid);
  }, []);

  return (
    <div className="card">
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${props.planet.uid}.jpg`}
        className="card-img-top"
        alt="..."
      />
      {/* olhar se é necessário colocar classname= cardHeight */}
      <div className="card-body">
        <h5 className="card-title">{props.planet.name}</h5>
        <p>height: {props.planet.properties?.height}</p>
        <p>Hair Color: {props.planet.properties?.hair_color}</p>
        <p>Eye Color: {props.planet.properties?.eye_color}</p>
        <div className="buttonsCard">
          <Link to={`/planet/${props.planet.uid}`} className="btn btn-primary">
            Learn more!
          </Link>
          <button
            className="btn btn-warning"
            onClick={() => {
              actions.setFavorites(props.planet);
            }}
          >
            Like!
          </button>
        </div>
      </div>
    </div>
  );
};
