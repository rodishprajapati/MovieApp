import axios from "axios";
import { useEffect, useState } from "react";
import "./api.css";
import { Link } from "react-router-dom";
import { IoMenu, CiSearch } from "react-icons/io5";
//<CiSearch />
const App = () => {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isloaded, setIsLoaded] = useState(false);

  const redirector = () => {
    navigator("/home");
  };

  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    setIsLoaded(true);

    try {
      const response = await axios.get(
        "https://api.dynoacademy.com/test-api/v1/movies"
      );
      setMovies(response.data.moviesData);
      setIsLoaded(false);
    } catch (e) {
      setIsError(true);
      setIsLoaded(false);
    }
  };

  return (
    <>
      {isloaded && <>Loading...</>}
      <button onClick={getMovies}>Movies</button>
      <br />
      {isError ? (
        <>
          <div>data not found</div>
        </>
      ) : (
        <></>
      )}
      <div className="movieBody">
        <div className="topBar">
          <div className="logo">
            <Link to={"/home"}>Movies</Link>
          </div>
          <div className="rightBar">
            <div className="searchBox">
              <input type="text" value="Search" />
            </div>
            <div className="menu">
              <IoMenu />
            </div>
          </div>
        </div>

        <div className="movieBox">
          {movies.map((element) => {
            return (
              <>
                <div className="movieItem">
                  <div className="movieimage">
                    <img src={element.image} alt={element.name} />
                  </div>
                  <div className="moviename">{element.name}</div>
                </div>
              </>
            );
          })}
        </div>
        <div className="footer">
          <Link to={"/home"}>this is home page</Link>
          <div onClick={redirector}>click here to redirect</div>
        </div>
      </div>
    </>
  );
};
export default App;
