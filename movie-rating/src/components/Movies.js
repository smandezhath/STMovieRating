import axios from "axios";
import { useEffect, useState } from "react";
import Rating from './Rating';
import "./Movies.css";

const Movies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services")
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex">
      {data.length > 0
        ? data.map((movieItem, movieIndex) => {
            return (
              <div className="card">
                {/* <div className="title">{movieItem?._id}</div> */}
                <div className="title">{movieItem?.title}</div>
                <div className="description">{movieItem?.description}</div><br />
                <Rating/>
              </div>
            );
          })
        : "No data found"}
    </div>
  );
};

export default Movies;
