import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import SensorCompnent from "./components/SensorComponents";
import CatService from "./service/cat";
import { CAT_API } from "./service/url";

const catService = new CatService(CAT_API);

export default function App() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      catService
        .getCat()
        .then((data) => {
          setCats(data);
          setLoading(false);
        })
        .catch((e) => console.log(e)); //[todo] handle error screen
    }, 1200);
  }, [catService]);

  if (loading || !cats.length) {
    return <Loading />;
  } else {
    return <SensorCompnent cats={cats} />;
  }
}
