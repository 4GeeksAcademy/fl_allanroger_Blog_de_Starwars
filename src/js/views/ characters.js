// // characters.js
// // import React from "react";


// // const Card = ({ title, text }) => (
// //   <div className="card fixed-size-card d-inline-block" style={{width: '18rem'}}>
// //     <img src={logostar} className="card-img-top" alt="..." />
// //     <div className="card-body">
// //       <h5 className="card-title">{title}</h5>
// //       <p className="card-text">{text}</p>
// //       <a href="#" className="btn btn-primary">Go somewhere</a>
// //     </div>
// //   </div>
// // );

// // export default Card;

// // characters.js
// import React, { useState } from "react";
// const logostar = "https://cdn.discordapp.com/attachments/1200818313421398017/1200875065810620416/allanrogerhaze_create_a_black_and_yellow_logo_star_wars_4geeks__6f696a13-da2a-4efd-a691-181876575c94.png?ex=65c7c50e&is=65b5500e&hm=2a9b47ca289520324c0cab3d2fa8ab8f0c54f7babffbc2607cab668579616b36&";

// const Card = ({ title, text, onLike }) => {
//   const [liked, setLiked] = useState(false);

//   const handleLikeClick = () => {
//     setLiked(!liked);
//     onLike({ title, liked: !liked });
//   };

//   return (
//     <div className="card fixed-size-card d-inline-block" style={{ width: '18rem' }}>
//       <img src={logostar} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text">{text}</p>
//         <button type="button" class="btn btn-outline-primary">Learn more!</button>
//         <button
//           type="button"
//           className="btn btn-outline-warning"
//           onClick={handleLikeClick}
//         >
//           {liked ? '🖤' : '🤍'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;
// // CharactersDetail.js
// // import React, { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";

// // const logostar =
// //   "https://cdn.discordapp.com/attachments/1200818313421398017/1200875065810620416/allanrogerhaze_create_a_black_and_yellow_logo_star_wars_4geeks__6f696a13-da2a-4efd-a691-181876575c94.png?ex=65c7c50e&is=65b5500e&hm=2a9b47ca289520324c0cab3d2fa8ab8f0c54f7babffbc2607cab668579616b36&";

// // const CharactersDetail = () => {
// //   const { characterId } = useParams();
// //   const [character, setCharacter] = useState(null);

// //   useEffect(() => {
// //     // Use a função fetch para obter os detalhes do personagem específico
// //     fetch(`https://www.swapi.tech/api/people/?name=${characterId}`)
// //       .then((response) => response.json())
// //       .then((data) => {
// //         // Verifique se há resultados e defina o primeiro como o personagem
// //         if (data.results && data.results.length > 0) {
// //           setCharacter(data.results[0]);
// //         } else {
// //           setCharacter(null);
// //         }
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching character details:", error);
// //         setCharacter(null);
// //       });
// //   }, [characterId]);

// //   if (!character) {
// //     return <div>Personagem não encontrado</div>;
// //   }

// //   return (
// //     <div className="card fixed-size-card d-inline-block" style={{ width: "18rem" }}>
// //       <img src={logostar} className="card-img-top" alt="..." />
// //       <div className="card-body">
// //         <h5 className="card-title">{character.name}</h5>
// //         <p className="card-text">
// //           <strong>Altura:</strong> {character.height} cm
// //           <br />
// //           <strong>Peso:</strong> {character.mass} kg
// //           <br />
// //           <strong>Cor do cabelo:</strong> {character.hair_color}
// //           {/* Adicione mais detalhes conforme necessário */}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CharactersDetail;
