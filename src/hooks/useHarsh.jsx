// import { useEffect, useState } from "react";
// import { client } from "../lib/client";
// import { useSelector, useDispatch } from "react-redux";
// import { setData } from "../store/coursesSlice";
// import { setLoading } from "../store/coursesSlice";
// import { setError } from "../store/coursesSlice";
// import { fetchDataFromHarshApi } from "../utils Nakali/harshApi";

// const useHarsh = (url) => {
//   const data = useSelector((state) => state.courses.data);
//   const loading = useSelector((state) => state.courses.data);
//   const error = useSelector((state) => state.courses.error);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setLoading("loading..."));
//     dispatch(setData(null));
//     dispatch(setError(null));

//     client
//       .fetch(url)
//       .then((res) => {
//         dispatch(setLoading(false));
//         dispatch(setData(res));
//       })
//       .catch((err) => {
//         dispatch(setLoading(false));
//         dispatch(setError("Something went wrong!"));
//         console.error(err);
//       });
//   }, [url]);

//   return { data, loading, error };
// };

// export default useHarsh;

import { useEffect, useState } from "react";
import { client } from "../lib/client";
const useHarsh = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);

    client
      .fetch(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong!");
        console.error(err);
      });
  }, [url]);

  return { data, loading, error };
};

export default useHarsh;
