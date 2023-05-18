import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import ContactDetails from "./components/ContactDetail";
import ContactUpdate from "./components/ContactUpdate";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route path="/contact/edit/:id" element={<ContactUpdate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
