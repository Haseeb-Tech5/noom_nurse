import "./App.css";
import Pages from "./Components/Pages/Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/about/aboutt";
import Contact from "./Components/Contact/Contact";
import Nurses from "./Components/nurses/nurses";
import Practice from "./Components/practice/practice";
import Privacy from "./Components/privacy";
import Cookies from "./Components/cookies";
import Terms from "./Components/terms";
import Faq from "./Components/Faq/Faq";
import FaqPage from "./Components/FaqPage/FaqPage";
import Form from "./Form/Form";
// import Form from "./Form/Form";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nurse" element={<Nurses />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/terms&conditions" element={<Terms />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </BrowserRouter>
      {/* <Form /> */}
    </div>
  );
}

export default App;
