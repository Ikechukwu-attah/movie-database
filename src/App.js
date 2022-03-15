import "./App.scss";
import GlobalMovieProvider from "./components/context/GlobalContext";
import Home from "./components/Home/Home";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./components/movieDetails/MovieDetail";
import MovieList from "./components/movieList/MovieList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <GlobalMovieProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allmovie" element={<MovieList />} />
          <Route path="/detail/:movieId" element={<MovieDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalMovieProvider>
  );
}

export default App;
