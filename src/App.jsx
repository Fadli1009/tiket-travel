import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LastOffer from "./pages/lastetoffer";
import Transaction from "./pages/transaction";
import Contact from "./pages/contact";
import Container from "./components/Container";
import Sign from "./pages/login";
import SignUp from "./pages/signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Sign />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<Container />}>
          <Route path="/" element={<Home />} />
          <Route path="/last-offer" element={<LastOffer />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
