import { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "Put your API key here";

const endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};

function App() {
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  return (
    <>
      <h1>Hello world!</h1>
    </>
  );
}

export default App;
