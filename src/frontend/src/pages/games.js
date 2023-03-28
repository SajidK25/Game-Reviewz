import hogwarts from "../assets/hogwartslegacy.jpeg";
import eldenring from "../assets/eldenring.jpeg";
import pokemon from "../assets/pokemonscarletviolet.jpg";
import { SearchBar } from "../components/navigation";
import ArticlesService from "../services/ArticlesService";
import { useState, useEffect } from "react";
import "../styles/Games.scss";
import { NavLink } from "react-router-dom";

const Games = (props) => {
  let imageMap = new Map([
    [1, hogwarts],
    [2, eldenring],
    [3, pokemon],
  ]);

  // API will return array of objects so initialize state as an array.
  const [article, setArticles] = useState([]);

  const images = [{ hogwarts }, { eldenring }, { pokemon }];

  // useEffect is called whenever the page is rendered/rerendered. [] allows for API to only be called once.
  useEffect(() => {
    retrieveArticles();
    console.log("componenent is mounted");
    console.log(window.location.pathname);
  }, []);

  // gets all Articles from the Database. Calls getMethod from API which returns rows in database, then pass the data into Articles
  const retrieveArticles = () => {
    ArticlesService.getAllGames()
      .then((response) => {
        setArticles(response.data);
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <h1 className="gbigText">{props.page ? props.page : "Video Games"}</h1>
      <div className="topContainer">
        <img
          src={hogwarts}
          className="articleStyle"
          id="topStyle"
          alt="Hogwarts Legacy"
        />
        <div className="rectangle">
          {/* <h2 style={headingStyle}>{article[0].title + ": Available Now!"}</h2>
          <div style={boxText}>{article[0].title}</div>
          <div style={boxText}>{article[0].reviewer}</div>
          <div style={boxText}>{article[0].comments + " Reviews!"}</div> */}
        </div>
      </div>
      <h1 className="gbigText">
        {props.page ? props.page : "Video Game"} Articles
      </h1>
      <div className="sortBox">
        <form>
          <label htmlFor="sort">Sort By:</label>
          <select name="sortby" id="sort" className="selectOptions">
            <option value="Release Date">Release Date</option>
            <option value="Top Rated">Top Rated</option>
            <option value="Most Reviews">Most Reviews</option>
          </select>
          <label htmlFor="genre">Genre:</label>
          <select name="sortby" id="genre" className="selectOptions">
            <option value="RPG">RPG</option>
            <option value="FPS">FPS</option>
            <option value="Fantasy">Fantasy</option>
          </select>
          <SearchBar />
          <input id="" type="submit" value="submit" />
        </form>
      </div>
      <br />
      <Articles
        db={props.articles == null ? article : props.articles}
        img={images}
        imageMap={imageMap}
      />
    </>
  );
};
export default Games;

// Currently working on getting the correct images in place.
export const Articles = (props) => {
  const page = window.location.pathname;
  return props.db.map((item) => (
    <>
      <div className="articleBox">
        <NavLink to={`${page}/` + item.id}>
          <img src={item.path} className="articleStyle" alt="A Game" />
        </NavLink>
        <div className="vl"></div>
        <div>
          <h1>{item.title}</h1>
          <p className="articleText">{item.review}</p>
          <div className="articleBox">
            <p>{item.title}</p>
            <p id="bottom">{item.reviewer}</p>
            <p id="bottom">{item.comments}</p>
          </div>
        </div>
      </div>
      <hr className=".gline" />
    </>
  ));
};
