import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutUs() {
    return (
        // this <> acts as a parent div
        <>
        <Header />
        <a href="https://www.linkedin.com/in/ross-tauchert-9489079/" target="_blank" rel="noopener noreferrer"><h1>Ross Tauchert</h1></a>
        <h1>Tania Bezerra</h1>
        <h1>Chris Joo</h1>
        <h1>Mark Comer</h1>
        <h1 style={{ paddingBottom: "100px" }}>Tyler Zhao</h1>
        <Footer />
        </>
    );
  }

  export default AboutUs;