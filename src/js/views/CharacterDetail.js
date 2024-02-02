// import React, { useEffect, useContext } from "react";
// import { useParams } from "react-router";
// import { Context } from "react";

// export const CharacterDetail = () => {
//     const params = useParams();
//     const { actions, store } = useContext(Context);
    
//     useEffect(() => {
//         actions.getCharacter(params.characterId);
//     },[]);
//     return (

//         <div className="container">
//             <div className="card mb-3" style={{width:"100%"}}>

//                 {store.character?.result.uid === params.characterId ? (
//                     <div className="row g-0">
//                         <div className="col-md-4">
//                             <img src={""} className="img-fuid round-start" alt="..."/>
//                         </div>
//                         <div className="col-md-8">
//                             <div className="card-body">
//                                 <h1 className="card-title">{store.character.result.properties.name}</h1>
//                                 <p className="card-text">Name: {store.character.result.properties.name}</p>
//                                 <p className="card-text">Geneder: {store.character.result.properties.gender}</p>
//                                 <p className="card-text">Skin: {store.character.result.properties.skin_color}</p>
//                                 <p className="card-text">Height: {store.character.result.properties.height}</p>
//                                 <p className="card-text">Eye Color: {store.character.result.properties.eye_color}</p>
//                                 <p className="card-text">History: Lorem sdcosdoijsdc,sdhchddisc,soocjosdjoisd,scjksdjoijsd</p>
//                             </div>
//                         </div>
                            
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// CharacterDetail.js
import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const CharacterDetail = () => {
  const params = useParams();
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getCharacter(params.characterId);
  }, [params.characterId, actions]);

  return (
    <div className="container">
      <div className="card mb-3" style={{ width: "100%" }}>
        {store.character?.result.uid === params.characterId ? (
          <div className="row g-0">
            <div className="col-md-4">
              {/* Atualizado para exibir a imagem do personagem, ajuste conforme necessário */}
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${params.characterId}.jpg`}
                className="img-fluid rounded-start"
                alt="Character"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">{store.character.result.properties.name}</h1>
                <p className="card-text">Name: {store.character.result.properties.name}</p>
                <p className="card-text">Gender: {store.character.result.properties.gender}</p>
                <p className="card-text">Skin: {store.character.result.properties.skin_color}</p>
                <p className="card-text">Height: {store.character.result.properties.height}</p>
                <p className="card-text">Eye Color: {store.character.result.properties.eye_color}</p>
                {/* Adicione outras propriedades conforme necessário */}
                <p className="card-text">History: {store.character.result.description}</p>
              </div>
            </div>
          </div>
        ) : (
          // Adicionado um fallback caso os dados ainda não tenham sido carregados
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
