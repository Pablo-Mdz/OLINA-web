import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage} from "./components/HomePage";
import {Contact} from "./components/Contact";
import {NavBar} from "./components/NavBar";
import {Reservations} from "./components/Reservations";
import {Footer} from "./components/Footer";
import {Menu} from "./components/Menu";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/reservations" element={<Reservations />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
