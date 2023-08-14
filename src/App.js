// import NavScrollExample from "./Header";
import './App.css';
import Page from "./Page";
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
          <Route path='/Page' element={<Page/>}></Route> 
          <Route path='/About' element={<About/>}></Route> 
        </Routes>
      </Router>
      </>
  );
}

export default App;
