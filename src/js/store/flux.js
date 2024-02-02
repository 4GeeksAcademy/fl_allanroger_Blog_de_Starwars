// // flux.js
// const getState = ({ getStore, getActions, setStore }) => {
// 	return {
// 		store: {
// 			demo: [
// 				{
// 					title: "FIRST",
// 					background: "white",
// 					initial: "white"
// 				},
// 				{
// 					title: "SECOND",
// 					background: "white",
// 					initial: "white"
// 				}
// 			],
// 			characters: [],
// 			planets: [],
// 			vehicles: [],
// 			character: null,
// 			planet: [],
// 			veicle: [],
// 			favorites: [],

// 		},
// 		actions: {
// 			// Use getActions to call a function within a fuction
// 			exampleFunction: () => {
// 				getActions().changeColor(0, "green");
// // 			},
// 			loadSomeData: () => {
// 				/**
// 					fetch().then().then(data => setStore({ "foo": data.bar }))
// 				*/
// 			},
// 			changeColor: (index, color) => {
// 				//get the store
// 				const store = getStore();

// 				//we have to loop the entire demo array to look for the respective index
// 				//and change its color
// 				const demo = store.demo.map((elm, i) => {
// 					if (i === index) elm.background = color;
// 					return elm;
// 				});

// 				//reset the global store
// 				setStore({ demo: demo });
// 			},
// 			loadCharacters: () => {
// 				fetch("https://www.swapi.tech/api/people")
// 					.then(res => res.json())
// 					.then(res => {
// 						console.log(res.results);
// 						setStore({characters: res.results});
// 					});
// 			},
// 			loadPlanets: () => {
// 				fetch("https://www.swapi.tech/api/planets")
// 					.then(res => res.json())
// 					.then(res => {
// 						console.log(res.results);
// 						setStore({planets: res.results});
// 					});
// 			},
// 			loadVehicles: () => {
// 				fetch("https://www.swapi.tech/api/vehicles")
// 					.then(res => res.json())
// 					.then(res => {
// 						console.log(res.results);
// 						setStore({vehicles: res.results});
// 					});
// 			},
// 			getCharacter: (uid) => {
// 				fetch("https://www.swapi.tech/api/people/${uid}")
// 					.then(res => res.json())
// 					.then(res => {
// 						// console.log(res.result.uid);
// 						setStore({characters: res});
// 					});
// 			},
// 			getPlanet: (uid) => {
// 				fetch("https://www.swapi.tech/api/planets/${uid}")
// 					.then(res => res.json())
// 					.then(res => {
// 						// console.log(res.result.uid);
// 						setStore({planet: res});
// 					});
// 			},
// 			getVehicle: (uid) => {
// 				fetch("https://www.swapi.tech/api/vehicles/${uid}")
// 					.then(res => res.json())
// 					.then(res => {
// 						// console.log(res.result.uid);
// 						setStore({vehicle: res);
// 					});
// 			},
// 			addDetailsToCharacters: (uid) => {
// 				fetch("https://www.swapi.tech/api/people/${uid}")
// 					.then(res => res.json())
// 					.then(res => {
// 						// console.log(res.results.uid);
// 						setStore({characters: res.results});
// 						let newCharacters = getStore().characters.map(character => {
// 							if (character.uid === uid) {
// 								return Object.assign(character, res.result)
// 							}
// 						})
// 					});
// 			},
// 			setFavorite: (element) => {
// 				let store = getStore();
// 				if(!store.favorites.includes(element)){
// 					setStore ({favorites : [...store.favorites, element]})
// 				}
// 			},
// 			deleteFavorite: (element) => {
// 				let store = getStore();
// 				const filtered = store.favorites.filter((e) =>{
// 					return e != element;
// 				})
// 				setStore ({favorites : filtered})
// 				}
// 			},
			
// 		}
// 	};
// };

// export default getState;
// flux.js
const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		demo: [
		  {
			title: "FIRST",
			background: "white",
			initial: "white"
		  },
		  {
			title: "SECOND",
			background: "white",
			initial: "white"
		  }
		],
		characters: [],
		planets: [],
		vehicles: [],
		character: null,
		planet: null,
		vehicle: null,
		favorites: []
	  },
	  actions: {
		exampleFunction: () => {
		  getActions().changeColor(0, "green");
		},
		loadSomeData: () => {
		  // fetch().then().then(data => setStore({ "foo": data.bar }))
		},
		changeColor: (index, color) => {
		  const store = getStore();
		  const demo = store.demo.map((elm, i) => {
			if (i === index) elm.background = color;
			return elm;
		  });
		  setStore({ demo: demo });
		},
		loadCharacters: () => {
		  fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(res => {
			  setStore({ characters: res.results });
			});
		},
		loadPlanets: () => {
		  fetch("https://www.swapi.tech/api/planets")
			.then(res => res.json())
			.then(res => {
			  setStore({ planets: res.results });
			});
		},
		loadVehicles: () => {
		  fetch("https://www.swapi.tech/api/vehicles")
			.then(res => res.json())
			.then(res => {
			  setStore({ vehicles: res.results });
			});
		},
		getCharacter: uid => {
		  fetch(`https://www.swapi.tech/api/people/${uid}`)
			.then(res => res.json())
			.then(res => {
			  setStore({ character: res });
			});
		},
		getPlanet: uid => {
		  fetch(`https://www.swapi.tech/api/planets/${uid}`)
			.then(res => res.json())
			.then(res => {
			  setStore({ planet: res });
			});
		},
		getVehicle: uid => {
		  fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
			.then(res => res.json())
			.then(res => {
			  setStore({ vehicle: res });
			});
		},
		addDetailsToCharacters: uid => {
		  fetch(`https://www.swapi.tech/api/people/${uid}`)
			.then(res => res.json())
			.then(res => {
			  setStore({ characters: res.results });
			  let newCharacters = getStore().characters.map(character => {
				if (character.uid === uid) {
				  return Object.assign(character, res.result);
				}
				return character;
			  });
			  setStore({ characters: newCharacters });
			});
		},
		setFavorite: element => {
		  let store = getStore();
		  if (!store.favorites.includes(element)) {
			setStore({ favorites: [...store.favorites, element] });
		  }
		},
		deleteFavorite: element => {
		  let store = getStore();
		  const filtered = store.favorites.filter(e => e !== element);
		  setStore({ favorites: filtered });
		}
	  }
	};
  };
  
  export default getState;
  
