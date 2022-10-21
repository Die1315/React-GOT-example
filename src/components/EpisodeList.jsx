import Episode from "./Episode";
//import data from "../data/episodes.json";
import { useEffect } from "react";
import { getEpisodes } from "../service/data-service";
import { useState } from "react";

const initialState = [];

function EpisodeList( {season, search} ) {
  const [episodes, setEpisodes] = useState(initialState);

  useEffect(function () {
    getEpisodes().then((episodes) => {
      setEpisodes(episodes);
    });

    return () => {
      console.log("unmount"); //sitio perfecto para limpoar un timer cuando se desmonta
    };
  }, []);

  console.log(episodes.length);
  const episodeComponents = episodes
    .filter((e) => (season === null ? true : e.season === season))
    .filter((e) => e.name.includes(search))
    .map((episode, i) => (
      <Episode
        Key={i}
        img={episode.image.medium}
        title={episode.name}
        description={episode.summary}
        number={episode.number}
        season={episode.season}
      />
    ));
  return (
    <div className="d-flex flex-wrap p-5">
      {episodes === initialState ? "loading..." : episodeComponents}
    </div>
  );
}

export default EpisodeList;

/* or
return (
    <div className="d-flex p-5">
     {episodes.map((episode,i) => (
        <Episode Key={i} img={episode.img} title={episode.title} description={episode.description}/> 
    ));}
    </div>
  );
*/
