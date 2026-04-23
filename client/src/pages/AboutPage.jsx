import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import About from "../components/home/About";

const AboutPage = () => {
  return (
    <div className="container">
      <Header />

      <div className="main">
        {" "}
        <About />
      </div>

      <Footer />
    </div>
  );
};
export default AboutPage;
