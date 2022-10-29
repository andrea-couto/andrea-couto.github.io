import Intro from "./components/Intro/Intro";
import NamePairEULA from "./components/NamePair/NamePairEULA";
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
      <Route exact path='/NamePairEULA' element={<NamePairEULA/>} />
    </Routes>
  </div>
</Router>;
};

export default App;