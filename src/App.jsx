import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LastOffer from "./pages/lastetoffer";
import Transaction from "./pages/transaction";
import Contact from "./pages/contact";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/last-offer" element={<LastOffer />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
