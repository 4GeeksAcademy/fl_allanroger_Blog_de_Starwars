// // // home.js
// // import React, { useState, useEffect } from "react";
// // import Navbar from "./../component/navbar";
// // import "../../styles/home.css";
// // import Card from "./characters";
// // import Planet from "./planets";


// // export const Home = () => {
// //   const [favorites, setFavorites] = useState([]);

// //   useEffect(() => {
// //     const storedFavorites = localStorage.getItem("favorites");
// //     if (storedFavorites) {
// //       setFavorites(JSON.parse(storedFavorites));
// //     }
// //   }, []);

// //   const handleLike = (item) => {
// //     const index = favorites.findIndex(
// //       (favorite) => favorite.title === item.title
// //     );

// //     if (index !== -1) {
// //       const updatedFavorites = [
// //         ...favorites.slice(0, index),
// //         ...favorites.slice(index + 1),
// //       ];
// //       setFavorites(updatedFavorites);
// //     } else {
// //       setFavorites([...favorites, item]);
// //     }
// //   };

// //   const handleRemoveFavorite = (title) => {
// //     const updatedFavorites = favorites.filter(
// //       (favorite) => favorite.title !== title
// //     );
// //     setFavorites(updatedFavorites);
// //   };

// //   useEffect(() => {
// //     localStorage.setItem("favorites", JSON.stringify(favorites));
// //   }, [favorites]);


// //   return (
// //     <div className="text-center mt-5">
// //     <Navbar favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
// //       <h1 style={{ color: '#ECCB05', textAlign: 'left' }}>Characters</h1>
// //       <div className="scrolling-container">
// //         <div>
// //           <Card
// //             title="Character 1"
// //             text="Some quick example text to build on the card title and make up the bulk of the card's content."
// //             onLike={() => handleLike({ title: 'Character 1' })}
// //           />
// //           <Card
// //             title="Character 2"
// //             text="Another character description goes here."
// //             onLike={() => handleLike({ title: 'Character 2' })}
// //           />
// //           <Card
// //             title="Character 3"
// //             text="Another character description goes here."
// //             onLike={() => handleLike({ title: 'Character 3' })}
// //           />
// //           {/* Adicione mais cards conforme necessário */}
// //         </div>
// //       </div>
// //       <h1 className="mt-4" style={{ color: '#ECCB05', textAlign: 'left' }}>Planets</h1>
// //       <div className="scrolling-container">
// //         <div>
// //           <Planet
// //             title="Planet 1"
// //             text="Some quick example text to build on the card title and make up the bulk of the card's content."
// //           />
// //           <Planet
// //             title="Planet 2"
// //             text="Another planet description goes here."
// //           />
// //           <Planet
// //             title="Planet 3"
// //             text="Some quick example text to build on the card title and make up the bulk of the card's content."
// //           />
// //           <Planet
// //             title="Planet 4"
// //             text="Another planet description goes here."
// //           />
// //           <Planet
// //             title="Planet 5"
// //             text="Some quick example text to build on the card title and make up the bulk of the card's content."
// //           />
// //           <Planet
// //             title="Planet 6"
// //             text="Another planet description goes here."
// //           />
// //           <Planet
// //             title="Planet 7"
// //             text="Some quick example text to build on the card title and make up the bulk of the card's content."
// //           />
// //           <Planet
// //             title="Planet 8"
// //             text="Another planet description goes here."
// //           />
// //           {/* Adicione mais cards conforme necessário */}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // home.js
// // import React, { useState, useEffect } from "react";
// // import "../../styles/home.css";
// // import Card from "./characters";
// // import Planet from "./planets";
// // import Navbar from "./../component/navbar"; // Mantenha a importação aqui

// // export const Home = () => {
// //   const [favorites, setFavorites] = useState([]);

// //   useEffect(() => {
// //     const storedFavorites = localStorage.getItem("favorites");
// //     if (storedFavorites) {
// //       setFavorites(JSON.parse(storedFavorites));
// //     }
// //   }, []);

// //   const handleLike = (item) => {
// //     const index = favorites.findIndex(
// //       (favorite) => favorite.title === item.title
// //     );

// //     if (index !== -1) {
// //       const updatedFavorites = [
// //         ...favorites.slice(0, index),
// //         ...favorites.slice(index + 1),
// //       ];
// //       setFavorites(updatedFavorites);
// //     } else {
// //       setFavorites([...favorites, item]);
// //     }
// //   };

// //   const handleRemoveFavorite = (title) => {
// //     const updatedFavorites = favorites.filter(
// //       (favorite) => favorite.title !== title
// //     );
// //     setFavorites(updatedFavorites);
// //   };

// //   useEffect(() => {
// //     localStorage.setItem("favorites", JSON.stringify(favorites));
// //   }, [favorites]);

// //   return (
// //     <div className="text-center mt-5">
// //       <Navbar favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
// //       <h1 style={{ color: '#ECCB05', textAlign: 'left' }}>Characters</h1>
// //       <div className="scrolling-container">
// //         <div>
// //           <Card
// //             title="Character 1"
// //             text="Some quick example text to build on the card title and make up the bulk of the card's content."
// //             onLike={() => handleLike({ title: 'Character 1' })}
// //           />
// //           <Card
// //             title="Character 2"
// //             text="Another character description goes here."
// //             onLike={() => handleLike({ title: 'Character 2' })}
// //           />
// //           <Card
// //             title="Character 3"
// //             text="Another character description goes here."
// //             onLike={() => handleLike({ title: 'Character 3' })}
// //           />
// //           {/* Adicione mais cards conforme necessário */}
// //         </div>
// //       </div>
// //       <h1 className="mt-4" style={{ color: '#ECCB05', textAlign: 'left' }}>Planets</h1>
// //       <div className="scrolling-container">
// //         <div>
// //           <Planet
// //             title="Planet 1"
// //             text="Some quick example text to build on the card title and make up the bulk of the card's content."
// //           />
// //           <Planet
// //             title="Planet 2"
// //             text="Another planet description goes here."
// //           />
// //           <Planet
// //             title="Planet 3"
// //             text="Some quick example text to build on the card title and make up the bulk of the card's content."
// //           />
// //           <Planet
// //             title="Planet 4"
// //             text="Another planet description goes here."
// //           />
// //           <Planet
// //             title="Planet 5"
// //             text="Some quick example text to build on the card title and make up the bulk of the card's content."
// //           />
// //           <Planet
// //             title="Planet 6"
// //             text="Another planet description goes here."
// //           />
// //           <Planet
// //             title="Planet 7"
// //             text="Some quick example text to build on the card title and make up the bulk of the card's content."
// //           />
// //           <Planet
// //             title="Planet 8"
// //             text="Another planet description goes here."
// //           />
// //           {/* Adicione mais cards conforme necessário */}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// import React, { useState, useEffect } from "react";
// import "../../styles/home.css";
// import Card from "./planetDetailDetail";
// import Card_Planet from "./planets";
// import Navbar from "./../component/navbar";

// export const Home = () => {
//   const { store, actions } = useContext(Context);

//   return(
// <div className="row">
//   <h2>Planets</h2>
//   <div className="scrollFlow">
//     {StorageEvent.planets.map((planet, index) 0> {
//       return (
//         <div className="col-12 col-md-4 col-lg-3" key={index}>
//         <Card_Planet planet={planet} />
//         </div>
//       );
//     })}
//   </div>
// </div>
// )
// };
//   // const [favorites, setFavorites] = useState([]);

//   // useEffect(() => {
//   //   const storedFavorites = localStorage.getItem("favorites");
//   //   if (storedFavorites) {
//   //     setFavorites(JSON.parse(storedFavorites));
//   //   }
//   // }, []);

//   // const handleLike = (item) => {
//   //   const index = favorites.findIndex(
//   //     (favorite) => favorite.title === item.title
//   //   );

//   //   if (index !== -1) {
//   //     const updatedFavorites = [
//   //       ...favorites.slice(0, index),
//   //       ...favorites.slice(index + 1),
//   //     ];
//   //     setFavorites(updatedFavorites);
//   //   } else {
//   //     setFavorites([...favorites, item]);
//   //   }
//   // };

//   // const handleRemoveFavorite = (title) => {
//   //   const updatedFavorites = favorites.filter(
//   //     (favorite) => favorite.title !== title
//   //   );
//   //   setFavorites(updatedFavorites);
//   // };

//   // useEffect(() => {
//   //   localStorage.setItem("favorites", JSON.stringify(favorites));
//   // }, [favorites]);

//   // return (
//   //   <div className="text-center">
//   //     <Navbar favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
//   //     <h1 style={{ color: '#ECCB05', textAlign: 'left' }}>Characters</h1>
//   //     <div className="scrolling-container">
//   //       <div>
//   //         <Card
//   //           title="Character 1"
//   //           text="Some quick example text to build on the card title and make up the bulk of the card's content."
//   //           onLike={() => handleLike({ title: 'Character 1' })}
//   //         />
//   //            <Card
//   //           title="Character 2"
//   //           text="Some quick example text to build on the card title and make up the bulk of the card's content."
//   //           onLike={() => handleLike({ title: 'Character 2' })}
//   //         />
//   //            <Card
//   //           title="Character 3"
//   //           text="Some quick example text to build on the card title and make up the bulk of the card's content."
//   //           onLike={() => handleLike({ title: 'Character 3' })}
//   //         />
//   //            <Card
//   //           title="Character 4"
//   //           text="Some quick example text to build on the card title and make up the bulk of the card's content."
//   //           onLike={() => handleLike({ title: 'Character 4' })}
//   //         />
//   //            <Card
//   //           title="Character 5"
//   //           text="Some quick example text to build on the card title and make up the bulk of the card's content."
//   //           onLike={() => handleLike({ title: 'Character 5' })}
//   //         />
//   //            <Card
//   //           title="Character 6"
//   //           text="Some quick example text to build on the card title and make up the bulk of the card's content."
//   //           onLike={() => handleLike({ title: 'Character 6' })}
//   //         />
//   //            <Card
//   //           title="Character 7"
//   //           text="Some quick example text to build on the card title and make up the bulk of the card's content."
//   //           onLike={() => handleLike({ title: 'Character 7' })}
//   //         />
//   //            <Card
//   //           title="Character 8"
//   //           text="Some quick example text to build on the card title and make up the bulk of the card's content."
//   //           onLike={() => handleLike({ title: 'Character 8' })}
//   //         />
          
//   //       </div>
//   //     </div>
//   //     <h1 className="mt-4" style={{ color: '#ECCB05', textAlign: 'left' }}>Planets</h1>
//   //     <div className="scrolling-container">
//   //       <div>
//   //         {sore.planets.map((planet, index)=> {
//   //           return (
//   //             <div className ="col-12 col-md-4 col-lg-3" key={index}>
//   //             <Card_Planet planet={planet} />
//   //             </div>
//   //           );
//   //         })}
//   //         {/* <Planet
//   //           title="Planet 1"
//   //           text="Some quick example text to build on the card title and make up the bulk of the card's content."
//   //           onLike={() => handleLike({ title: 'Planet 1' })}
//   //         />
//   //          */}
//   //       </div>
//   //     </div>
//   //   </div>
//   // );

// home.js
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card_Planet from "./planets";

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <div className="row">
      <h2>Planets</h2>
      <div className="scrollFlow">
        {/* Use store.planets em vez de StorageEvent.planets */}
        {store.planets.map((planet, index) => (
          <div className="col-12 col-md-4 col-lg-3" key={index}>
            {/* Corrigido o nome do componente Card_Planet */}
            <Card_Planet planet={planet} />
          </div>
        ))}
      </div>
    </div>
  );
};
