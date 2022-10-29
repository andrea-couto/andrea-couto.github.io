import Intro from "./components/Intro/Intro";
import NamePairTerms from "./components/Intro/NamePairTerms";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return <Router>
  <div>
    <Routes>
      <Route exact path='/' element={<Intro/>} />
      <Route exact path='/NamePairTerms' element={<NamePairTerms/>} />
    </Routes>
  </div>
</Router>;
};

export default App;