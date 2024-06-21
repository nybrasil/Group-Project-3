import Header from './components/Header';
import TradingViewWidget from './components/TradingViewWidget';
import CardPortfolio from './components/CardPortfolio';
import CardContact from './components/CardContact';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';


// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <TradingViewWidget />
      <CardPortfolio />
      <CardContact />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
