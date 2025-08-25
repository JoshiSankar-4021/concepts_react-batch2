import './App.css';
 import App1 from './newcomponent/App1.jsx';
 import App2 from './newcomponent1/App2.jsx';
 import Fc from './FunctionalComponent/Fc.jsx';
 import Cc from './ClassComponent/Cc.jsx';
import AddImages from './images/AddImages.jsx';
import Counter from './counter/Counter.jsx'
import { Route,Routes } from 'react-router-dom';
import Padding from './css/padding/Pad.jsx';
import Nav from './nav/Nav.jsx';
import Border from './css/border/borders.jsx';
import Margins from './css/margin/Margins.jsx';
import Card from './card/card.jsx';
function App(){
  return(
    <>
      <Nav/>    
    <Routes>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/images" element={<AddImages/>}/>
                                    {/* AddImages() */}
      <Route path="/classcompent" element={<Cc/>}/>
      <Route path="/fc" element={<Fc/>}/>
      <Route path="/padding" element={<Padding/>}/>
      <Route path="/border" element={<Border/>}/>
      <Route path="/margin" element={<Margins/>}/>
      <Route path="/card" element={<Card/>}/>

    </Routes>
    </>
  );
}
export default App;


