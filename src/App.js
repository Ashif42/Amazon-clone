// import NavScrollExample from "./Header";
import './App.css';
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";
import Page6 from "./pages/page6";
import Page7 from "./pages/page7";
import Page8 from "./pages/page8";
import About from "./About";
import Body from "./Body";
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from 'react-router-dom';

function App() {
  return (
    <>
    {/* <div className="abc">
      <div className="nav"><a href="/">Home</a></div>
      <div className="nav"><a href="/About">About us</a></div>
      <div className="nav"><a href="/Page">next page</a></div>
      <div className="nav">
        <input type="text" />
      </div>
      <div className="nav">Search</div>
    </div> */}
      <Router>
        <Routes>
          <Route path='/' element={<Body/>}></Route>
          <Route path='/Page1' element={<Page1/>}></Route>
          <Route path='/Page2' element={<Page2/>}></Route>
          <Route path='/Page3' element={<Page3/>}></Route>
          <Route path='/Page4' element={<Page4/>}></Route>
          <Route path='/Page5' element={<Page5/>}></Route>
          <Route path='/Page6' element={<Page6/>}></Route>
          <Route path='/Page7' element={<Page7/>}></Route>
          <Route path='/Page8' element={<Page8/>}></Route>
          <Route path='/About' element={<About/>}></Route> 
        </Routes>
      </Router>
      </>
  );
}

export default App;
