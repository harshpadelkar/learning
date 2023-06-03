import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import PageNotFound from "./pages/404/PageNotFound";
import { client, createNewUser } from "./lib/client";
import { firebaseAuth } from "./config/firebase.config";
import { setUser } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((result) => {
      if (result) {
        createNewUser(result?.providerData[0]).then(() => {
          dispatch(setUser(result?.providerData[0]));
        });
      }
    });
  });

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

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
