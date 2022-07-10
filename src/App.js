import "./App.scss";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Deals from "./components/Deals";
import Featured from "./components/Featured";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Section />
      <Featured />
      <Deals />
      <Categories />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
