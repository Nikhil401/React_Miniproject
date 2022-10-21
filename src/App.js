import Navbar from "./Components/Navbar";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Carousel from "./Components/Carousel";
import Home from "./Components/Home";
function App() {
  return (
    <div style={{padding:"20px"}} >
      <Navbar/>
      <Carousel/>
      <Home/>
      <Home/>
    </div>
  );
}

export default App;
