import Intro from "./components/Intro/Intro";
import NamePairEULA from "./components/NamePair/NamePairEULA";
import MahketsPP from "./components/MahketsPP";

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
      <Route path='/MahketsPP' element={<MahketsPP/>} />
    </Routes>
  </div>
</Router>;
};

export default App;