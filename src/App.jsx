import Ticker from './components/Ticker';
import Header from './components/Header';
import CardAbout from './components/CardAbout';
import CardPortfolio from './components/CardPortfolio';
import CardContact from './components/CardContact';
import Footer from './components/Footer';


// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      {/* <Ticker /> */}
      <CardAbout />
      <CardPortfolio />
      <CardContact />
      <Footer />
    </div>
  );
}

export default App;
