import "./App.scss";
import GlobalMovieProvider from "./components/context/GlobalContext";
import Home from "./components/Home/Home";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./components/movieDetails/MovieDetail";
import MovieList from "./components/movieList/MovieList";

function App() {
  return (
    <GlobalMovieProvider>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-movie" element={<MovieList />} />
          <Route path="/movie-detail:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </GlobalMovieProvider>
  );
}

export default App;
