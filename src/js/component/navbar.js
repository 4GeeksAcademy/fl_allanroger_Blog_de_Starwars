// // // navbar.js
// // import React from "react";
// // import { Link } from "react-router-dom";
// // import "../../styles/navbar.css"

// // const logostar = "https://cdn.discordapp.com/attachments/1200818313421398017/1200875065810620416/allanrogerhaze_create_a_black_and_yellow_logo_star_wars_4geeks__6f696a13-da2a-4efd-a691-181876575c94.png?ex=65c7c50e&is=65b5500e&hm=2a9b47ca289520324c0cab3d2fa8ab8f0c54f7babffbc2607cab668579616b36&";

// // export const Navbar = () => {
// // 	return (
// // 		<nav className="navbar navbar-light bg-light mb-3 bg-black">
// // 			<Link to="/" className="ms-4">
// // 				<img src={logostar} alt="logo" width={"180px"} height={"180px"}/>
// // 			</Link>
// // 			<div className="dropdown me-4">
// // 				<button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
// // 					Favorites
// // 				</button>
// // 				<ul className="dropdown-menu" >
// // 					<li><a className="dropdown-item" href="#">Action</a></li>
// // 					<li><a className="dropdown-item" href="#">Another action</a></li>
// // 					<li><a className="dropdown-item" href="#">Something else here</a></li>
// // 				</ul>
// // 			</div>
// // 		</nav>
// // 	);
// // };

// // /// navbar.js
// // import React from "react";
// // import { Link } from "react-router-dom";
// // import "../../styles/navbar.css";

// // const logostar = "https://cdn.discordapp.com/attachments/1200818313421398017/1200875065810620416/allanrogerhaze_create_a_black_and_yellow_logo_star_wars_4geeks__6f696a13-da2a-4efd-a691-181876575c94.png?ex=65c7c50e&is=65b5500e&hm=2a9b47ca289520324c0cab3d2fa8ab8f0c54f7babffbc2607cab668579616b36&";

// // export const Navbar = ({ favorites, onRemoveFavorite }) => {
// //   return (
// //     <nav className="navbar navbar-light bg-light mb-3 bg-black">
// //       <Link to="/" className="ms-4">
// //         <img src={logostar} alt="logo" width={"180px"} height={"180px"} />
// //       </Link>
// //       <div className="dropdown me-4">
// //         <button
// //           className="btn btn-warning dropdown-toggle"
// //           type="button"
// //           data-bs-toggle="dropdown"
// //           aria-expanded="false"
// //         >
// //           Favorites
// //         </button>
// //         <ul className="dropdown-menu">
// //           {favorites && favorites.map((favorite) => (
// //             <li key={favorite.title}>
// //               {favorite.title}{" "}
// //               <button
// //                 type="button"
// //                 className="btn btn-link text-danger"
// //                 onClick={() => onRemoveFavorite(favorite.title)}
// //               >
// //                 🗑️ Remove
// //               </button>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // };

// // // export default Navbar;

// // import React from "react";
// // import { Link } from "react-router-dom";
// // import "../../styles/navbar.css";

// // const logostar = "https://cdn.discordapp.com/attachments/1200818313421398017/1200875065810620416/allanrogerhaze_create_a_black_and_yellow_logo_star_wars_4geeks__6f696a13-da2a-4efd-a691-181876575c94.png?ex=65c7c50e&is=65b5500e&hm=2a9b47ca289520324c0cab3d2fa8ab8f0c54f7babffbc2607cab668579616b36&";

// // const Navbar = ({ favorites, onRemoveFavorite }) => {
// //   return (
// //     <nav className="navbar navbar-light bg-light mb-3 bg-black">
// //       <Link to="/" className="ms-4">
// //         <img src={logostar} alt="logo" width={"180px"} height={"180px"} />
// //       </Link>
// //       <div className="dropdown me-4">
// //         <button
// //           className="btn btn-warning dropdown-toggle"
// //           type="button"
// //           data-bs-toggle="dropdown"
// //           aria-expanded="false"
// //         >
// //           Favorites
// //         </button>
// //         <ul className="dropdown-menu">
// //           {
// //             StorageEvent.favorites.lenght == 0 ? <li className="favorite">
// //               <a className="dropdown-item" href="#">Empty</a></li> : 
// //               StorageEvent.favorites.map((favorite, index) => {
// //                 return (
// //                   <li className="favorite" key={index}>
// //                     <div className="col-10">
// //                       <a className="dropdown-item" href="#">{favorite.name}</a>
// //                     </div>
// //                     <div className="col-2">
// //                       <span><i className="fas fa-trash-alt" onClick={() => {
// //                         actions.deleteFavorite(favorite);
// //                       }}></i>
// //                       </span>
// //                     </div>
// //                     </li>
// //                 )
// //               })
// //             }
// //             </ul>
// //             </div>
            
// //             </li>
// //           }
// //           ))}
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import "../../styles/navbar.css";

// const logostar = "https://cdn.discordapp.com/attachments/1200818313421398017/1200875065810620416/allanrogerhaze_create_a_black_and_yellow_logo_star_wars_4geeks__6f696a13-da2a-4efd-a691-181876575c94.png?ex=65c7c50e&is=65b5500e&hm=2a9b47ca289520324c0cab3d2fa8ab8f0c54f7babffbc2607cab668579616b36&";

// const Navbar = ({ favorites, actions }) => {
//   return (
//     <nav className="navbar navbar-light bg-light mb-3 bg-black">
//       <Link to="/" className="ms-4">
//         <img src={logostar} alt="logo" width={"180px"} height={"180px"} />
//       </Link>
//       <div className="dropdown me-4">
//         <button
//           className="btn btn-warning dropdown-toggle"
//           type="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           Favorites
//         </button>
//         <ul className="dropdown-menu">
//         {store.favorites.length === 0 ? (
//   <li className="favorite">
//     <a className="dropdown-item" href="#">
//       Empty
//     </a>
//   </li>
// ) : (
//   store.favorites.map((favorite, index) => (
//     <li className="favorite" key={index}>
//       <div className="col-10">
//         <a className="dropdown-item" href="#">
//           {favorite.name}
//         </a>
//       </div>
//       <div className="col-2">
//         <span>
//           <i
//             className="fas fa-trash-alt"
//             onClick={() => {
//               actions.deleteFavorite(favorite);
//             }}
//           ></i>
//         </span>
//       </div>
//     </li>
//   ))
// )}

//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


//           // {/* {favorites && favorites.map((favorite) => (
//           //   <li key={favorite.title}>
//           //     {favorite.title}{" "} */}
//           //     <button
//           //       // type="button"
//           //       // className="btn btn-link text-danger"
//           //       // onClick={() => onRemoveFavorite(favorite.title)}
//           //     >
//           //       🗑️ Remove
//           //     </button>
// // navbar.js
// import React from "react";
// import { Link } from "react-router-dom";
// import "../../styles/navbar.css";
// import { useContext } from "react";
// import { Context } from "../store/appContext";

// const logostar =
//   "https://cdn.discordapp.com/attachments/1200818313421398017/1200875065810620416/allanrogerhaze_create_a_black_and_yellow_logo_star_wars_4geeks__6f696a13-da2a-4efd-a691-181876575c94.png?ex=65c7c50e&is=65b5500e&hm=2a9b47ca289520324c0cab3d2fa8ab8f0c54f7babffbc2607cab668579616b36&";

// const Navbar = ({ favorites, onRemoveFavorite, onLike }) => {
//   const { store, actions } = useContext(Context);

//   return (
//     <nav className="navbar navbar-light bg-light mb-3 bg-black">
//       <Link to="/" className="ms-4">
//         <img src={logostar} alt="logo" width={"180px"} height={"180px"} />
//       </Link>
//       <div className="dropdown me-4">
//         <button
//           className="btn btn-warning dropdown-toggle"
//           type="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           Favorites
//         </button>
//         <ul className="dropdown-menu">
//           {favorites.length === 0 ? (
//             <li className="favorite">
//               <span className="dropdown-item">Empty</span>
//             </li>
//           ) : (
//             favorites.map((favorite, index) => (
//               <li className="favorite" key={index}>
//                 <div className="col-10">
//                   <span className="dropdown-item">{favorite.name}</span>
//                 </div>
//                 <div className="col-2">
//                   <span>
//                     <i
//                       className="fas fa-trash-alt"
//                       onClick={() => {
//                         actions.deleteFavorite(favorite);
//                         onRemoveFavorite(favorite);
//                       }}
//                     ></i>
//                   </span>
//                 </div>
//               </li>
//             ))
//           )}
//         </ul>
//       </div>
//       {/* Adicionado o botão "Like" */}
//       <button
//         className="btn btn-success"
//         onClick={() => {
//           // Simulando a ação de "Like"
//           const newFavorite = {
//             name: "New Favorite",
//             // Adicione outras propriedades conforme necessário
//           };
//           actions.setFavorite(newFavorite);
//           onLike(newFavorite);
//         }}
//       >
//         Like
//       </button>
//     </nav>
//   );
// };

// export default Navbar;

// navbar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

const logostar =
  "https://cdn.discordapp.com/attachments/1200818313421398017/1200875065810620416/allanrogerhaze_create_a_black_and_yellow_logo_star_wars_4geeks__6f696a13-da2a-4efd-a691-181876575c94.png?ex=65c7c50e&is=65b5500e&hm=2a9b47ca289520324c0cab3d2fa8ab8f0c54f7babffbc2607cab668579616b36&";

// ...

const Navbar = ({ favorites, onRemoveFavorite, onLike }) => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-3 bg-black">
      <Link to="/" className="ms-4">
        <img src={logostar} alt="logo" width={"180px"} height={"180px"} />
      </Link>
      <div className="dropdown me-4">
        <button
          className="btn btn-warning dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
        <ul className="dropdown-menu">
          {favorites && favorites.length === 0 ? (
            <li className="favorite">
              <span className="dropdown-item">Empty</span>
            </li>
          ) : (
            favorites.map((favorite, index) => (
              <li className="favorite" key={index}>
                <div className="col-10">
                  <span className="dropdown-item">{favorite.name}</span>
                </div>
                <div className="col-2">
                  <span>
                    <i
                      className="fas fa-trash-alt"
                      onClick={() => {
                        actions.deleteFavorite(favorite);
                        onRemoveFavorite(favorite);
                      }}
                    ></i>
                  </span>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
      {/* Adicionado o botão "Like" */}
      <button
        className="btn btn-success"
        onClick={() => {
          // Simulando a ação de "Like"
          const newFavorite = {
            name: "New Favorite",
            // Adicione outras propriedades conforme necessário
          };
          actions.setFavorite(newFavorite);
          onLike(newFavorite);
        }}
      >
        Like
      </button>
    </nav>
  );
};

export default Navbar;
