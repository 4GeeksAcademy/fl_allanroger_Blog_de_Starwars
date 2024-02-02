// import React from "react";

// const logostar = "https://cdn.discordapp.com/attachments/1200818313421398017/1200875065810620416/allanrogerhaze_create_a_black_and_yellow_logo_star_wars_4geeks__6f696a13-da2a-4efd-a691-181876575c94.png?ex=65c7c50e&is=65b5500e&hm=2a9b47ca289520324c0cab3d2fa8ab8f0c54f7babffbc2607cab668579616b36&";

// const Planet = ({ title, text }) => (
//   <div className="card fixed-size-card d-inline-block" style={{width: '18rem'}}>
//     <img src={logostar} className="card-img-top" alt="..." />
//     <div className="card-body">
//       <h5 className="card-title">{title}</h5>
//       <p className="card-text">{text}</p>
//       <a href="#" className="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>
// );

// // export default Planet;

// // // planets.js
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";

// const logostar = "https://cdn.discordapp.com/attachments/1200818313421398017/1200875065810620416/allanrogerhaze_create_a_black_and_yellow_logo_star_wars_4geeks__6f696a13-da2a-4efd-a691-181876575c94.png?ex=65c7c50e&is=65b5500e&hm=2a9b47ca289520324c0cab3d2fa8ab8f0c54f7babffbc2607cab668579616b36&";

// const Card_Planet = ({ title, text, onLike }) => {
//   const [liked, setLiked] = useState(false);
//   const [planetDetails, setPlanetDetails] = useState(null);
//   const navigate = useNavigate();

//   const handleLikeClick = () => {
//     setLiked(!liked);
//     onLike({ title, text, liked: !liked });
//   };

//   // useEffect(() => {
//   //   fetch(`https://www.swapi.tech/api/planets?search=${title}`)
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       const planet = data.results[0]; // Assumindo que o primeiro resultado é o planeta desejado
//   //       setPlanetDetails(planet);
//   //     })
//   //     .catch((err) => console.error(err));
//   // }, [title]);

//   return (
//     <div className="card fixed-size-card d-inline-block" style={{ width: '18rem' }}>
     
//       {planetDetails && (
//         <div>
//           <img
//             src={`https://starwars-visualguide.com/assets/img/planets/${planetDetails.uid}.jpg`}
//             className="card-img-top"
//             alt={planetDetails.name}
//           />
//           <div className="card-body">
//             <h5 className="card-title">{planetDetails.name}</h5>
//             <p className="card-text">{text}</p>
//             <button type="button" className="btn btn-outline-primary" onClick={() => navigate(`/learn-more/${planetDetails.uid}`)}>
//               Learn more!
//             </button>
//             <button
//               type="button"
//               className="btn btn-outline-warning"
//               onClick={handleLikeClick}
//             >
//               {liked ? '🖤' : '🤍'}
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Card_Planet;


