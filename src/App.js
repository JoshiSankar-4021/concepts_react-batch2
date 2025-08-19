import './App.css';
 import App1 from './newcomponent/App1.jsx';
 import App2 from './newcomponent1/App2.jsx';
 import Fc from './FunctionalComponent/Fc.jsx';
 import Cc from './ClassComponent/Cc.jsx';
import AddImages from './images/AddImages.jsx';
import Counter from './counter/Counter.jsx'
import { Route,Routes } from 'react-router-dom';
function App(){
  return(
    <Routes>
      <Route path="/" element={<Counter/>}/>
      <Route path="/images" element={<AddImages/>}/>
                                    {/* AddImages() */}
      <Route path="/classcompent" element={<Cc/>}/>
      <Route path="/fc" element={<Fc/>}/>
    </Routes>
  );
}
export default App;


