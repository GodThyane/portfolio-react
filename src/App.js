import './App.css';
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Slider from "./components/slider/Slider";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";

function App() {

    return (
        <div className="App">
            <Navbar />
            <Cover/>
            <About/>
            <Slider/>
            <Info/>
            <Footer/>
        </div>
    );
}

export default App;
