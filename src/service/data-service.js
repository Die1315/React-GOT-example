// import axios from "axios";

// export function getEpisodes() {   
//   return axios
//     .get("http://localhost:3001/episodes")   //oriantada promesas debido a quee cada peticion es asincrona
//     .then((response) => response.data);
// }

// /*export function getEpisodes() {   
//     return fetch("http://localhost:3001/episodes")   //oriantada promesas debido a quee cada peticion es asincrona
//     .then((response) => response.json());
// }

import data from "../data/episodes.json"

export function getEpisodes(){
    return new Promise((resolve, reject) => {
        window.setTimeout(()=>{
            resolve([...data.episodes])
        }, 2000);
    });
}
