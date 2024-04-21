import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "primereact/button";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about-us" Component={About} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;
