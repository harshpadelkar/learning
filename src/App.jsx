import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";

import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import { courses, coursesHomePage } from "./query";
import { client, createNewUser } from "./lib/client";
import { firebaseAuth } from "./config/firebase.config";
import { setUser } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.courses);
  const { categoriesData } = useSelector((state) => state.categories);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((result) => {
      if (result) {
        createNewUser(result?.providerData[0]).then(() => {
          console.log("New user Created");
          dispatch(setUser(result?.providerData[0]));
        });
      }
    });
  });

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchData = (query, setData, setLoading, setError) => {
    dispatch(setLoading("loading..."));
    dispatch(setData(null));
    dispatch(setError(null));

    client.fetch(query).then((res) => {
      const resData = res;

      dispatch(setData(resData));
      dispatch(setLoading(false));
    });
  };

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      // console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    // console.log(data);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        {/* <Route path="/explore/:mediaType" element={<Explore />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
