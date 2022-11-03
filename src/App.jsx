import Intro from "./components/Intro/Intro";
import NamePairEULA from "./components/NamePair/NamePairEULA";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return <Router>
  <div>
    <Routes>
      <Route path='/' element={<Intro/>} />
      <Route path='/NamePairEULA' element={<NamePairEULA/>} />
    </Routes>
  </div>
</Router>;
};

export default App;