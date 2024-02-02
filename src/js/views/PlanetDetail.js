// import React, { useEffect, useContext } from "react";
// import { useParams } from "react-router";
// import { Context } from "react";

// export const PlanetDetail = () => {
//     const params = useParams();
//     const { actions, store } = useContext(Context);
    
//     useEffect(() => {
//         actions.getPlanet(params.planetId);
//     },[]);
//     return (

//         <div className="container">
//             <div className="card mb-3" style={{width:"100%"}}>

//                 {store.planet?.result.uid === params.planetId ? (
//                     <div className="row g-0">
//                         <div className="col-md-4">
//                             <img src={""} className="img-fuid round-start" alt="..."/>
//                         </div>
//                         <div className="col-md-8">
//                             <div className="card-body">
//                                 <h1 className="card-title">{store.planet.result.properties.name}</h1>
//                                 <p className="card-text">Name: {store.planet.result.properties.name}</p>
//                                 {/* <p className="card-text">Geneder: {store.planet.result.properties.gender}</p>
//                                 <p className="card-text">Skin: {store.planet.result.properties.skin_color}</p>
//                                 <p className="card-text">Height: {store.planet.result.properties.height}</p>
//                                 <p className="card-text">Eye Color: {store.planet.result.properties.eye_color}</p>
//                                 <p className="card-text">History: Lorem sdcosdoijsdc,sdhchddisc,soocjosdjoisd,scjksdjoijsd</p> */}
//                             </div>
//                         </div>
                            
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }
// PlanetDetail.js
import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";



export const PlanetDetail = () => {
  const params = useParams();
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getPlanet(params.planetId);
  }, []);

  return (
    <div className="container">
      <div className="card mb-3" style={{ width: "100%" }}>
        {store.planet?.result.uid === params.planetId ? (
          <div className="row g-0">
            <div className="col-md-4">
              <img src={""} className="img-fuid round-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">{store.planet.result.properties.name}</h1>
                <p className="card-text">Name: {store.planet.result.properties.name}</p>
                {/* Outros campos do planeta aqui */}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
