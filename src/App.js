import "./App.scss";
import GlobalMovieProvider from "./components/context/GlobalContext";
import Home from "./components/Home/Home";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <GlobalMovieProvider>
      <NavBar />
      <Home />
    </GlobalMovieProvider>
  );
}

export default App;
