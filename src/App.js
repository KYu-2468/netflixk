import { useState, useEffect } from "react";
import axios from "axios";
// import Movies from "./components/Movies";

// AWS Authenticator
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

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

function App({ signOut, user }) {
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  console.log(user, signOut);
  // useEffect(() => {
  //   // Load Originals
  //   axios
  //     .get(`${URL}${endpoints.originals}`, {
  //       params: {
  //         api_key: API_KEY,
  //       },
  //     })
  //     .then((res) => setOriginals(res.data.results));

  //   // Get other categories with the same pattern here
  // }, []);

  return (
    <>
      {/* <Movies title="Netflix originals" movies={originals} /> */}
      <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>
    </>
  );
}

export default withAuthenticator(App);
