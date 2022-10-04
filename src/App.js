import { useState, useEffect } from "react";
import axios from "axios";
import Movies from "./components/Movies";
import Hero from "./components/Hero";
import Header from "./components/Header";
import "./App.css";

// AWS Authenticator
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "d4549a0d743df214c56fc1e2e70655e2";

const endpoints = {
  originals: "/discover/movie",
  trending: "/trending/all/week",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};

function App({ signOut, user }) {
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    // Load Originals
    axios
      .get(
        `${URL}${endpoints.originals}?api_key=${API_KEY}&include_video=true`,
        {
          // params: {
          //   api_key: API_KEY,
          // },
        }
      )
      .then((res) => {
        setOriginals(res.data.results);
      });

    axios
      .get(`${URL}${endpoints.trending}`, {
        params: {
          api_key: API_KEY,
          include_video: true,
        },
      })
      .then((res) => setTrending(res.data.results));

    axios
      .get(`${URL}${endpoints.now_playing}`, {
        params: {
          api_key: API_KEY,
          include_video: true,
        },
      })
      .then((res) => setNowPlaying(res.data.results));

    axios
      .get(`${URL}${endpoints.popular}`, {
        params: {
          api_key: API_KEY,
          include_video: true,
        },
      })
      .then((res) => setPopular(res.data.results));

    axios
      .get(`${URL}${endpoints.top_rated}`, {
        params: {
          api_key: API_KEY,
          include_video: true,
        },
      })
      .then((res) => setTopRated(res.data.results));

    axios
      .get(`${URL}${endpoints.upcoming}`, {
        params: {
          api_key: API_KEY,
          include_video: false,
        },
      })
      .then((res) => setUpcoming(res.data.results));

    // Get other categories with the same pattern here
  }, []);

  return (
    <>
      <Header />
      <Hero movie={originals[Math.floor(Math.random() * originals.length)]} />
      <Movies title="NETFLIX ORIGINALS" movies={originals} />
      <Movies title="TRENDING" movies={trending} />
      <Movies title="NOW PLAYING" movies={nowPlaying} />
      <Movies title="POPULAR" movies={popular} />
      <Movies title="TOP RATED" movies={topRated} />
      <Movies title="UPCOMING" movies={upcoming} />
      {/* <Heading level={1}>Hello {user.username}</Heading> */}
      <Button onClick={signOut}>Sign out</Button>
    </>
  );
}

export default withAuthenticator(App);
