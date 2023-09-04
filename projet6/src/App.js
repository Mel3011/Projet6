import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Erreur from "./Pages/Erreur";
import Apropos from "./Pages/Apropos";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
          <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="*" element={<Erreur /> } />
              <Route path="/a-propos" element={<Apropos/>}/>
              {/* <Route path="/logement/:id" element={<Logement />} /> */}
            </Routes>
          <Footer />
    </BrowserRouter>
  );
}

export default App;
