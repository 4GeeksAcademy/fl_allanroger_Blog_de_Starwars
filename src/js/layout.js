// layout.js
// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop";

// import { Home } from "./views/home";
// import { Demo } from "./views/demo";
// import { Single } from "./views/single";
// import LearnMore from "./views/learnMore"; // Importe a página LearnMore
// import injectContext from "./store/appContext";

// import Navbar from "./component/navbar";
// import { Footer } from "./component/footer";
// import { PlanetDetail } from "./views/planetDetail";

// //create your first component
// const Layout = () => {
//   //the basename is used when your project is published in a subdirectory and not in the root of the domain
//   // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
//   const basename = process.env.BASENAME || "";

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

//   return (
//     <div className="bg-dark m-auto">
//       <BrowserRouter basename={basename}>
//         <ScrollToTop>
//           {/* Passar favorites, onRemoveFavorite e onLike para Navbar */}
//           {/* <Navbar favorites={favorites} onRemoveFavorite={handleRemoveFavorite} onLike={handleLike} /> */}
//           <Routes>
//             {/* Passar onLike para Home */}
//             <Route path="/" element={<Home onLike={handleLike} />} />
//             <Route path="/demo" element={<Demo />} />
//             <Route path="/single/:theid" element={<Single />} />
//             <Route path="/character/:characterId" element={<CharacterDetail />} />
//             <Route path="/planet/:planetId" element={<PlanetDetail />} />
//             <Route path="/vehicle/:vehicleId" element={<VehicleDetail />} />
//             <Route path="/learnMore" element={<LearnMore />} /> 
//             <Route path="*" element={<h1>Not found!</h1>} />
//           </Routes>
//           <Footer />
//         </ScrollToTop>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default injectContext(Layout);
// layout.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import LearnMore from "./views/learnMore";
import injectContext from "./store/appContext";
import Navbar from "./component/navbar";
import { Footer } from "./component/footer";
import { PlanetDetail } from "./views/PlanetDetail";
import { CharacterDetail } from "./views/CharacterDetail";
import { VehicleDetail } from "./views/VehicleDetail"

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div className="bg-dark m-auto">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="/character/:characterId" element={<CharacterDetail />} />
            <Route path="/planet/:planetId" element={<PlanetDetail />} />
            <Route path="/vehicle/:vehicleId" element={<VehicleDetail />} />
            <Route path="/learnMore" element={<LearnMore />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);


