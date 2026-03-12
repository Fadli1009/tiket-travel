import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import LastOffer from "./pages/lastetoffer";
import Transaction from "./pages/transaction";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/last-offer" element={<LastOffer />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
