import { Route, Routes } from "react-router-dom";
import Home from "./views/home/home";
import FormAlta from "./componentes/formAlta/formAlta";
import FormBaja from "./componentes/formBaja/formBaja";
import FormTransf from "./componentes/formTransf/formtransf";
import Navbar from "./views/navbar/navbar";
import Footer from "./views/footer/footer";


function App() {
    return (
        <div className="App">
            <Navbar /> {/* Navbar fijo */}
            
            <div className="Content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/formAlta" element={<FormAlta />} />
                    <Route path="/formBaja" element={<FormBaja />} />
                    <Route path="/formtransf" element={<FormTransf />} />
                </Routes>
            </div>

            <Footer /> {/* Footer fijo */}
        </div>
    );
}

export default App;
