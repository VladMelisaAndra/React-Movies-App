import {Routes, Route} from "react-router-dom";
import Home from "./screens/Home";
import Form from "./screens/Form";
import EmailSent from "./screens/EmailSent";

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={ <Home /> } />
        <Route path="/form" element={ <Form /> } />
        <Route path="/email_sent" element={ <EmailSent /> } />
      </Routes>
    </>
  );
}

export default App;