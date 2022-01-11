
// import { Switch } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeatureList from './components/FeatureList';
import FeatureView from "./components/FeatureView";
import SwaggerTest from "./components/Swagger";
import Search from "./components/Search";
import { Buffer } from 'buffer';
global.Buffer = Buffer;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FeatureList />} />
          <Route path="/features/:id" element={<FeatureView />} />
          <Route path="/search" element={<Search />} />
          <Route path="/swagger" element={<SwaggerTest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

